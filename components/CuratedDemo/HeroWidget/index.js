import React from 'react';
import { HOME_PAGE_HERO_WIDGET } from '../constant';
import styles from '../../../styles/curated.module.css';

const HeroWidget = ({isSSR, isCSR}) => {
    const { heading, subHeading, cta, headingNew } = HOME_PAGE_HERO_WIDGET;

    const scrollToForm = () => {
        document
            .getElementById('contact-us-form')
            ?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className={styles.WidgetBackground} >
                {
                    isSSR || isCSR?
                    <img src="/hero.png" className={styles.heroImg}/>
                    :<img src="/hero.png" className={styles.heroImg} fetchpriority="high"/>
                }
                
                <div className={styles.widgetCont}>
                    <div>
                        <div className={styles.widgetHeading}>
                            {heading}
                            <span className={styles.widgetNewHeading}>
                                {headingNew}
                            </span>
                        </div>
                        <div className={styles.widgetSubheading}>{subHeading}</div>
                        <button
                            className={styles.button}
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
