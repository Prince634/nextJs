import { css, injectGlobal } from '@emotion/css'
import {
    MobileScreen,
    TabMinScreen,
    TabMaxScreen,
} from './constant';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body, html{
      font-size: 10px;
      font-family: sans-serif;
      margin: 0px;
  }
`

export const PackageContainer = css`
    .package-list-cont{
        background: #FFF;
    }
    .package-card-shimmer{
        aspect-ratio: 16/9;
    }
    .package-list-cont-view{
        max-width: 1920px;
        margin: auto;
    }
    .showLoadingWidget{
        position: relative;
    }
    .package-loader {
        position: relative;
    }
    .package-list-view {
        margin: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
    }
`;

export const PackageCardStyle = css`
    display: flex;
    aspect-ratio: 16/9;
    flex-direction: column;
    position: relative;
    border: 1px solid #dcdfe7;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        border: 1px solid #56647f;
    }
    .new-package {
        position: absolute;
        top: 16px;
        left: 16px;
        display: inline-block;
        padding: 4px 8px;
        color: #1f242e;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        background: #ffffff;
        border-radius: 2px;
    }
    .package-detail {
        padding: 24px;
        color: #1f242e;
    }
    .package-icon {
        aspect-ratio: 16/9;
        background-image: linear-gradient(
                257.29deg,
                rgba(0, 0, 0, 0.6) 6.9%,
                rgba(0, 0, 0, 0) 36.3%
            ),
            linear-gradient(
                110.02deg,
                rgba(0, 0, 0, 0.6) 0.77%,
                rgba(0, 0, 0, 0) 49.38%
            );
        background-size: cover;
    }
    .package-icon img {
        aspect-ratio: 16/9;
    }
    .package-name {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
    }
    .package-desc {
        margin-top: 16px;
        margin-bottom: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        height: 40px;
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
    }
    .package-metrics {
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #5d6b89;
    }
    .package-metric-seperator {
        display: inline-block;
        padding: 0px 8px;
    }
    .view-detail {
        margin-top: 16px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #0c55e4;
        cursor: pointer;
    }
`;


export const FeatureStyle = css`
    background: #f5f7fa;
    .feature-cont {
        max-width: 1920px;
        margin: auto;
        padding: 80px;
    }
    .feature-list {
        display: flex;
        gap: 32px;
    }
    .feature-name {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        color: #000000;
        margin: 0px;
        padding-bottom: 8px;
    }
    .feature-desc {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1f242e;
    }
    @media (max-width: ${MobileScreen}) {
        padding: 32px 0px;
        .feature-list {
            flex-direction: column;
        }
        .feature-name {
            font-size: 22px;
            line-height: 28px;
        }
        .feature-cont {
            padding: 24px;
        }
    }
    @media (min-width: ${TabMinScreen}) and (max-width: ${TabMaxScreen}) {
        padding: 32px 0px;
        .feature-name {
            font-size: 22px;
            line-height: 28px;
        }
        .feature-cont {
            padding: 32px;
        }
    }
`;