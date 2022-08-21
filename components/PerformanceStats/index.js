import { useMemo, useState } from 'react';
import { cx } from '@emotion/css'

import WebVitalInfo from './WebVitalInfo';
import Graph from './Graph';
import ProgressBar from './ProgressBar';
import { container, scorePieChart, coreVitalsWidget, widgetColor } from './style.js';

const performanceAnalytics = [
    {
        tagId: 'id',
        tagName: '',
        commitId: '',
        performanceMetrics: {
            lcp: 4,
            score: 60,
            fcp: 2,
            cls: 0.4,
            fid: 3
        },
        timestamp: new Date().toDateString()
    },
    {
        tagId: 'id1',
        tagName: '',
        commitId: '',
        performanceMetrics: {
            lcp: 6,
            score: 40,
            fcp: 3,
            cls: 0.8,
            fid: 6
        },
        timestamp: new Date().toDateString()
    },
    {
        tagId: 'id4',
        tagName: '',
        commitId: '',
        performanceMetrics: {
            lcp: 6,
            score: 30,
            fcp: 0.4,
            cls: 0.01,
            fid: 200
        },
        timestamp: new Date().toDateString()
    }
]

const PerformanceStats = ()=>{

    const [activeTab, setActiveTab] = useState("fcpList");

    const lightHouseStats = useMemo(()=>{
        let latestScore = '';
        let scoreList=[], lcpList=[], clsList=[], fcpList=[], xAxis=[], fidList=[];
        performanceAnalytics.forEach((val)=>{
            const { performanceMetrics, timestamp } = val;
            const { lcp, cls, fcp, score, fid } = performanceMetrics;
            xAxis.push(timestamp);
            lcpList.push(lcp);
            fcpList.push(fcp);
            clsList.push(cls);
            scoreList.push(score);
            fidList.push(fid);
            latestScore=score;
        })
        return { latestScore, scoreList, xAxis, lcpList, clsList, fcpList, fidList }
    },[performanceAnalytics])

    const { latestScore, scoreList, xAxis, lcpList, clsList, fcpList, fidList } = lightHouseStats;

    const webVitals = useMemo(()=>{
        return {
            fcpList:{
                type: 'fcpList',
                data: fcpList,
                heading: 'First Contentful Paint',
                info: 'When the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading.',
                cta: 'https://web.dev/fcp/',
                threshold: 1.6,
                unit: 's'
            },
            lcpList: {
                type: 'lcpList',
                data: lcpList,
                heading: 'Largest Contentful Paint',
                info: 'Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.',
                cta: 'https://web.dev/lcp/',
                threshold: 2.4,
                unit: 's'
            },
            clsList: {
                type: 'clsList',
                data: clsList,
                heading: 'Cumulative Layout Shift',
                info: 'Measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.',
                cta: 'https://web.dev/cls/',
                threshold: 0.25,
                unit: ''
            },
            fidList: {
                type: 'fidList',
                data: fidList,
                heading: 'First Input Delay',
                info: 'Measures the time from the first user interaction to when the browser begins processing event handlers in response to that interaction.',
                cta: 'https://web.dev/fid/',
                threshold: 100,
                unit: 'ms'
            },
        }
    })

    return(
        <div className={container}>
            <h2>Performance Analytics</h2>
            <div className="pageScoreWidget">
                <div className="scoreInfo">
                    <p className="scoreTitle">PSI/LH Score</p>
                    <div className={scorePieChart}>
                        <ProgressBar score={latestScore}/>
                        {/* <p className="dataPoints">66 Data Points</p> */}
                    </div>
                </div>
                <div className="scoreGraph">
                    <Graph title="Lighthouse Score" data={scoreList} xAxis={xAxis}/>
                </div>
            </div>

            <div className={coreVitalsWidget}>
                {
                    Object.values(webVitals).map((val , key)=>{
                        const { type, data, heading, threshold, unit } = val;
                        const lastScore = data[data.length-1];
                        let bgColor = lastScore>threshold?'#ff4e42':'#0c6';
                        let widgetFontColor = lastScore>threshold?'#ff4e42':'#0c6';

                        if(activeTab===type){
                            widgetFontColor: '#FFF';
                        }else{
                            bgColor='#FFF';
                        }
                        const vitalStyle = cx(
                            {widget: true},
                            {[widgetColor({isActive: activeTab===type, bgColor, widgetFontColor })]: true},
                        )
                        return <div className={vitalStyle} key={key} onClick={()=>setActiveTab(type)}>
                        <span className="vitalName">{heading}</span>
                        <div className="vitalInfo">
                            <span className="vitalScore">{lastScore}<span>{unit}</span></span>
                            <span className="vitalChart">100</span>
                        </div>
                    </div>
                    })
                }
            </div>
            <WebVitalInfo stats={webVitals[activeTab]} xAxis={xAxis}/>
        </div>
    )
}

export default PerformanceStats;