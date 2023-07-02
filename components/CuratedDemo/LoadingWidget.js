import React from 'react';
import { css } from '@emotion/css';

export const container = css`
position: absolute;
display: flex;
justify-content: center;
width: 100%;
z-index: 99999;
.loader-for-page-div {
    margin-top: 50%;
    transform: translateY(-50%);
  }
  
  .loader-for-page {
    position: relative;
    width: 65px;
    height: 40px;
    margin: auto;
    margin-bottom: 45px;
  }
  
  .loader-for-page span {
    position: absolute;
    display: block;
    bottom: 0;
    width: 9px;
    height: 5px;
    border-radius: 5px;
    z-index: 999;
    background: rgba(0, 0, 0, 0.1);
    -webkit-animation: loader-for-page 2s infinite ease-in-out;
    animation: loader-for-page 2s infinite ease-in-out;
  }
  
  .loader-for-page span:nth-child(2) {
    left: 11px;
    -webkit-animation-delay: 200ms;
    animation-delay: 200ms;
  }
  
  .loader-for-page span:nth-child(3) {
    left: 22px;
    -webkit-animation-delay: 400ms;
    animation-delay: 400ms;
  }
  
  .loader-for-page span:nth-child(4) {
    left: 33px;
    -webkit-animation-delay: 600ms;
    animation-delay: 600ms;
  }
  
  .loader-for-page span:nth-child(5) {
    left: 44px;
    -webkit-animation-delay: 800ms;
    animation-delay: 800ms;
  }
  
  .loader-for-page span:nth-child(6) {
    left: 55px;
    -webkit-animation-delay: 1000ms;
    animation-delay: 1000ms;
  }
  
  @-webkit-keyframes loader-for-page {
    0% {
      height: 5px;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.1);
    }
    25% {
      height: 30px;
      -webkit-transform: translateY(15px);
      transform: translateY(15px);
      background: #ef4f4f;
    }
    50%,
    100% {
      height: 5px;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.1);
    }
  }
  
  @keyframes loader-for-page {
    0% {
      height: 5px;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.1);
    }
    25% {
      height: 30px;
      -webkit-transform: translateY(15px);
      transform: translateY(15px);
      background: #ef4f4f;
    }
    50%,
    100% {
      height: 5px;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.1);
    }
  }
  
  .surveyPageLoader {
    position: fixed;
    background: #0000006b;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    /* max-width: 470px; */
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const CustomSelect = ({})=>{

    return(
        // <div className={container}>
        //     <div className="loader">
        //         <img className="icon" src={ASSETS_BASE_URL+"/images/common/loading.png"} alt="...loading"/>
        //     </div>
        //     {/* <div className="overlay"></div> */}
        // </div>
        <div className={container}>
            <div className="ins-prf-img-grd">
                <div className="loader-for-page-div">
                    <div className='loader-for-page'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomSelect;