import { css, injectGlobal } from '@emotion/css'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body, html{
      font-size: 10px;
      font-family: sans-serif;
  }
`

export const container = css`
  padding: 40px 120px;
  h2{
      font-size: 3rem;
  }
  .pageScoreWidget{
      display: flex;
      margin-bottom: 20px;
  }
  .scoreInfo{
    width: 30%;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 0px;
    border-radius: 4px;
    margin-right: 6px;
    text-align: center;
    padding: 1.6rem;
    .scoreTitle{
        font-size: 2rem;
        font-weight: 700;
    }
  }
  .scoreGraph{
      flex: 4;
      box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 0px;
      border-radius: 4px;
  }
  @media(max-width: 768px){
        padding: 40px;
      .pageScoreWidget{
          flex-direction: column;
      }
      .scoreInfo{
          width: 100%;
      }
  }
`

export const scorePieChart = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .dataPoints{
        margin-top: 2rem;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid grey;
        font-size: 1.6rem;
    } 
`

export const coreVitalsWidget = css`
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 0px;
    margin-top: 1rem;
    display: flex;
    .widget{
        flex: 1;
        border-right: 1px solid rgb(0 0 0 / 15%);
        text-align: center;
        padding: 2rem;
        cursor: pointer;
    }
    .vitalName{
        font-weight: 900;
        font-size: 1.6rem;
    }
    .vitalInfo{
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
        align-items: center;
        .vitalScore{
            font-size: 2rem;
            font-weight: 800;
            span{
                font-size: 1.2rem;
            }
        }
        .vitalChart{
            height: 28px;
            width: 28px;
            border-radius: 50%;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    @media(max-width: 768px){
        flex-wrap: wrap;
    }
`

export const widgetColor = props=>css`
    background: ${props.bgColor};
    .vitalName{
        color: ${props.isActive?'#FFF':'#000'};
    }
    .vitalChart{
        border: 3px solid ${props.isActive?'#FFF':props.widgetFontColor};
        color: ${props.isActive?'#FFF':props.widgetFontColor};
    }
    .vitalScore{
        color: ${props.isActive?'#FFF':props.widgetFontColor};
    }
`

export const webVitalInfo = css`
    display: flex;
    min-height: 300px;
    .infoSection{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .score{
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 2rem;
        box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 0px;
        margin-right: 6px;
        font-size: 1.6rem;
        .status{
            font-weight: 900;
            display: block;
        }
        .value{
            display: block;
            padding: 0.6rem 0px;
            font-size: 1.6rem;
            color: darkgray;
        }
        .vitalInfo{
            padding-top: 1rem;
            border-top: 1px solid grey;
            color: grey;
            display: flex;
            span{
                display: block;
            }
        }
        button{
            background: #0070f3;
            cursor: pointer;
            color: #FFF;
            border: 0px;
            font-weight: 800;
            padding: 12px;
            border-radius: 4px;
            border: 1px solid #0070f3;
            &:hover{
                background: #FFF;
                color: #0070f3;
            }
        }
    }
    .graph{
        width: 69%;
        box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 0px;
    }
    @media(max-width: 768px){
        flex-direction: column;
        .score{
            margin-right: 0px;
        }
        .graph{
            width: 100%;
        }
    }
`

export const timer = props => css`
    height: 180px;
    width: 180px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: conic-gradient(${props.color} ${props.offset}deg, #ededed 0deg);
    .value{
        font-size: ${props.fontSize}rem;
        z-index: 1;
    }
    &:after{
        position: absolute;
        content: '';
        height: 160px;
        width: 160px;
        border-radius: 50%;
        background: #FFF;
    }
`;