import Graph from './Graph';
import { webVitalInfo } from './style.js';

const WebVitalInfo = ({ stats, xAxis })=>{
    const { heading, data } = stats||{};

    return(
        <div className={webVitalInfo}>
            <div className="score">
                <span className="status">Good</span>
                <span className="value">Below 0.4s</span>
                <div className="vitalInfo">
                    <span>Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.</span>
                </div>
                <button>Learn More</button>
            </div>
            <div className="graph">
                <Graph title={heading} data={data} xAxis={xAxis}/>
            </div>
        </div>
    )
}

export default WebVitalInfo;