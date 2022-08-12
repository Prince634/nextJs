import WebVitalInfo from './WebVitalInfo';
import Graph from './Graph';
import { container, scorePieChart, coreVitalsWidget } from './style.js';

const PerformanceStats = ()=>{
    const psiScore = 100;
    return(
        <div className={container}>
            <h2>Performance Analytics</h2>
            <div className="pageScoreWidget">
                <div className="scoreInfo">
                    <p className="scoreTitle">PSI/LH Score</p>
                    <div className={scorePieChart}>
                        <div className="chart">
                            <span>{psiScore}</span>
                        </div>
                        <p className="dataPoints">66 Data Points</p>
                    </div>
                </div>
                <div className="scoreGraph">
                    <Graph title="Lighthouse Score"/>
                </div>
            </div>

            <div className={coreVitalsWidget}>
                <div className="widget active">
                    <span className="vitalName">First Contentful Paint</span>
                    <div className="vitalInfo">
                        <span className="vitalScore">0.2<span>s</span></span>
                        <span className="vitalChart">100</span>
                    </div>
                </div>
                <div className="widget">
                    <span className="vitalName">First Contentful Paint</span>
                    <div className="vitalInfo">
                        <span className="vitalScore">0.2<span>s</span></span>
                        <span className="vitalChart">100</span>
                    </div>
                </div>
                <div className="widget">
                    <span className="vitalName">First Contentful Paint</span>
                    <div className="vitalInfo">
                        <span className="vitalScore">0.2<span>s</span></span>
                        <span className="vitalChart">100</span>
                    </div>
                </div>
                <div className="widget">
                    <span className="vitalName">First Contentful Paint</span>
                    <div className="vitalInfo">
                        <span className="vitalScore">0.2<span>s</span></span>
                        <span className="vitalChart">100</span>
                    </div>
                </div>
            </div>
            <WebVitalInfo/>
        </div>
    )
}

export default PerformanceStats;