import { timer, timerBlock } from './style.js';

const ProgressBar = ({score})=>{
    let offset= (360*score)/100;
    let color = '';
    if(score<50){
        color='#ff4e42'
    }else if(score<90){
        color= 'rgb(255, 139, 0)';
    }else{
        color = '#0c6'
    }
    
    return(
        <div className={timerBlock}>
            <div className={timer({ offset, fontSize: 3, color })}>

                <span className="value">{score}</span>
            </div>
        </div>
    )
}

export default ProgressBar;