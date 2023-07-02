import React from 'react';
import { WidgetBackground, HeroWidgetStyling } from './styles';
import { HOME_PAGE_HERO_WIDGET } from '../constant';

const HeroWidget = () => {
    const { heading, subHeading, cta, headingNew } = HOME_PAGE_HERO_WIDGET;

    const scrollToForm = () => {
        document
            .getElementById('contact-us-form')
            ?.scrollIntoView({ behavior: 'smooth' });
    };
const heroImg="https://publisherciprodimages.blob.core.windows.net/demand/hero-bg.png"
    return (
        <>
            <div className={WidgetBackground({heroImg})} >
                <div className="widget-cont">
                    <div className={HeroWidgetStyling}>
                        <div className="widget-heading">
                            {heading}
                            <span className="widget-new-heading">
                                {headingNew}
                            </span>
                        </div>
                        <div className="widget-subheading">{subHeading}</div>
                        <button
                            onClick={scrollToForm}
                        >
                            {cta}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroWidget;
