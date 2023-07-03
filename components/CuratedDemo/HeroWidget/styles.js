import { css, injectGlobal } from '@emotion/css'

import {
    MobileScreen,
    TabMinScreen,
    TabMaxScreen,
} from '../constant';

export const WidgetBackground = props=>css`
    position: relative;
    aspect-ratio: 5/2;
    width: 100%;
    max-width: 1920px;
    margin: auto;
    color: #000;
    .hero-img{
        object-fit: cover;
        position: relative;
        width: 100%;
       
    }
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.5) 51.04%,
            rgba(0, 0, 0, 0) 100%
        );
    }
    .widget-cont {
        position: absolute;
        left: 80px;
        top: 50%;
        transform: translateY(-50%);
    }
    button{
        background: #0070f3;
        cursor: pointer;
        color: #000;
        border: 0px;
        font-weight: 800;
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #0070f3;
        &:hover{
            background: #000;
            color: #0070f3;
        }
    }
    @media (max-width: ${MobileScreen}) {
        height: 322px;
        aspect-ratio: unset;
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
            ),
            linear-gradient(95.9deg, #0c55e4 0%, #3b0087 100%), #e3e3e3;
        .widget-cont {
            padding: 0px 24px;
            left: 0px;
            transform: translate(0px, -50%);
        }
    }
    @media (min-width: ${TabMinScreen}) and (max-width: ${TabMaxScreen}) {
        .widget-cont {
            padding: 0px 32px;
            left: 0px;
        }
    }
`;

export const HeroWidgetStyling = css`
    .widget-heading {
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        color: #000;
        margin-bottom: 8px;
    }
    .widget-new-heading {
        display: block;
    }
    .widget-subheading {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000;
        max-width: 523px;
    }
    button {
        margin-top: 32px;
        font-weight: 600;
    }
    button span {
        font-weight: 600;
    }
    @media (max-width: ${MobileScreen}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .widget-heading {
            font-size: 26px;
            line-height: 36px;
        }
        .widget-subheading {
            font-size: 16px;
            line-height: 24px;
        }
    }
    @media (min-width: ${TabMinScreen}) and (max-width: ${TabMaxScreen}) {
        .widget-heading {
            font-size: 26px;
            line-height: 36px;
        }
        .widget-subheading {
            font-size: 16px;
            line-height: 24px;
            max-width: 367px;
        }
    }
`;
