import Graph from './Graph';
import { webVitalInfo } from './style.js';

const WebVitalInfo = ()=>{

    return(
        <div className={webVitalInfo}>
            <div className="score">
                <span className="status">Good</span>
                <span className="value">Below 0.4s</span>
                <div className="vitalInfo">
                    <span>Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.</span>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="graph">
                <Graph title="FCP"/>
            </div>
        </div>
    )
}

export default WebVitalInfo;