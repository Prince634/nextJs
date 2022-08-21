import { useMemo, useState } from 'react';

import WebVitalInfo from './WebVitalInfo';
import Graph from './Graph';
import { container, scorePieChart, coreVitalsWidget } from './style.js';

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
            lcp: 2,
            score: 100,
            fcp: 0.4,
            cls: 0.01,
            fid: 2
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
                heading: 'First Contentful Paint'
            },
            lcpList: {
                type: 'lcpList',
                data: lcpList,
                heading: 'Largest Contentful Paint'
            },
            clsList: {
                type: 'clsList',
                data: clsList,
                heading: 'Cumulative Layout Shift'
            },
            fidList: {
                type: 'fidList',
                data: fidList,
                heading: 'First Input Delay'
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
                        <div className="chart">
                            <span>{latestScore}</span>
                        </div>
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
                        const { type, data, heading } = val;
                        return <div className={`widget ${activeTab===type?'active': ''}`} key={key} onClick={()=>setActiveTab(type)}>
                        <span className="vitalName">{heading}</span>
                        <div className="vitalInfo">
                            <span className="vitalScore">{data[data.length-1]}<span>s</span></span>
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