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
  padding: 40px;
  h2{
      font-size: 3rem;
  }
  .pageScoreWidget{
      display: flex;
      max-height: 400px;
  }
  .scoreInfo{
    flex: 1;
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
`

export const scorePieChart = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .chart{
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 0.6rem solid #0c6;
        font-size: 2rem;
        display: flex;
        span{
            margin: auto;
            font-weight: 900;
        }
    }
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
            height: 24px;
            width: 24px;
            border-radius: 50%;
            border: 2px solid #0c6;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .active{
        background: #0c6;
        color: #FFF;
        .vitalChart{
            border: 2px solid #FFF;
        }
    }
`

export const webVitalInfo = css`
    display: flex;
    height: 300px;
    .score{
        position: relative;
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
            font-size: 1.2rem;
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
            background: blue;
            color: #FFF;
            border: 0px;
            padding: 8px;
            position: absolute;
            bottom: 2rem;
            font-weight: 800;
        }
    }
    .graph{
        flex: 4;
        box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 0px;
    }
`