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

const HomeView = ({showLoadingWidget, isSSR, isCSR}) => {
    return (
        <div className="curated">
            <div className={PackageContainer}>
                <HeroWidget isCSR={isCSR} isSSR={isSSR}/>
                <PackageFeature/>
                <MainView showLoadingWidget={showLoadingWidget} isSSR={isSSR} isCSR={isCSR}/>
                <Footer/>
            </div>
        </div>
    );
};

export default HomeView;
