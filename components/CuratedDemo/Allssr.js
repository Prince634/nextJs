import React from 'react';
import HeroWidget from './HeroWidget';
import PackageFeature from './PackageFeature';
import { PackageContainer } from './style';
import Footer from './Footer';
import dynamic from 'next/dynamic'
import MainView from './MainView';
// const MainView = dynamic(() => import('./MainView'), {
//     ssr: false,
//   })

const HomeView = ({showLoadingWidget, isSSR}) => {
    return (
        <div className="curated">
            <div className={PackageContainer}>
                <HeroWidget />
                <PackageFeature/>
                <MainView showLoadingWidget={showLoadingWidget} isSSR={isSSR}/>
                <Footer/>
            </div>
        </div>
    );
};

export default HomeView;
