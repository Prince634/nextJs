import { useCallback } from 'react';
import Graph from './Graph';
import { webVitalInfo } from './style.js';

const WebVitalInfo = ({ stats, xAxis })=>{
    const { heading, data, info, cta, threshold, unit } = stats||{};

    const getScore = useCallback(()=>{
        const lastScore = data[data.length-1];
        let text = `${lastScore<=threshold?'below':'above'} ${threshold}`;
        return <>
            <span className="status">{lastScore<=threshold?'Good':'Poor'}</span>
            <span className="value">{`${text} ${unit}`}</span>
        </>
    },[threshold, data])

    return(
        <div className={webVitalInfo}>
            <div className="score">
                {getScore()}
                <div className="infoSection">
                    <div className="vitalInfo">
                        <span>{info}</span>
                    </div>
                    <button onClick={()=>window.open(cta, '_blank')}>Learn More</button>
                </div>
            </div>
            <div className="graph">
                <Graph title={heading} data={data} xAxis={xAxis}/>
            </div>
        </div>
    )
}

export default WebVitalInfo;