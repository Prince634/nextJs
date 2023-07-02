import { css, injectGlobal } from '@emotion/css'
import {
    MobileScreen,
    TabMinScreen,
    TabMaxScreen,
} from '../constant';


export const PackageWrapperFooter = css`
    background: #FFFFFF;
    .curated-desc-cont{
        background: #f5f7fa;
    }
    .wrapper-footer-cont{
        max-width: 1920px;
        margin: auto;
    }
    .curated-desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .package-icons {
        display: flex;
        gap: 36px;
    }
    .desktop-icons {
        display: flex;
        gap: 36px;
    }
    .curated-logo {
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        display: flex;
        align-items: center;
    }
    .curated-info {
        padding-top: 32px;
        display: block;
    }
    .curated-heading {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        color: #1f242e;
        text-align: center;
    }
    .curated-subheading {
        margin-top: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #1f242e;
        max-width: 530px;
    }
    .more-packages {
        display: block;
        color: #0c55e4;
        margin-top: 8px;
    }
    .curated-footer-cont{
        background: #ffffff;
    }
    .curated-footer {
        padding: 40px 20px;
    }
    .policy-container {
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .policy {
        display: flex;
    }
    .rights {
        color: #5d6b89;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
    .policy a {
        color: #0c55e4;
        font-weight: 600;
        font-size: 12px;
        padding: 0px 16px;
        display: flex;
        position: relative;
        cursor: pointer;
    }
    .policy span{
        font-weight: 600;
    }
    @media (max-width: ${MobileScreen}) {
        .curated-footer{
            padding 40px 24px;
        }
        .curated-desc {
            padding: 24px;
        }
        .policy-container {
            flex-direction: column;
        }
        .policy {
            gap: 16px;
            flex-direction: column;
        }
        .policy a {
            padding: 0px;
            border: 0px;
            &:after{
                content:'';
                height: 0px;
            }
        }
        .rights {
            padding-top: 16px;
        }
        .desktop-icons {
            display: none;
        }
    }
    @media (min-width: ${TabMinScreen}) and (max-width: ${TabMaxScreen}) {
        
        .curated-desc {
            padding: 32px;
        }
        .curated-footer{
            padding 40px 32px;    
        }
    }
`;
