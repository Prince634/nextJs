import React from 'react';
import HeroWidget from './HeroWidget';
import PackageFeature from './PackageFeature';
import { PackageContainer } from './style';
import Footer from './Footer';
import dynamic from 'next/dynamic'
//import MainView from './MainView';
const MainView = dynamic(() => import('./MainView'), {
    ssr: false,
  })

const HomeView = () => {
    return (
        <div className="curated">
            <div className={PackageContainer}>
                <HeroWidget />
                <PackageFeature/>
                <MainView/>
                <Footer/>
            </div>
        </div>
    );
};

export default HomeView;
