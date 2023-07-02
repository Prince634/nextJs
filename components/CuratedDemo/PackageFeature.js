import React from 'react';
import { FeatureStyle } from './style';
import { PACKAGE_FEATURE } from './constant';

const PackageFeatures = () => {
    return (
        <div className={FeatureStyle}>
            <div className="feature-cont">
                <div className="feature-list">
                    {PACKAGE_FEATURE.map((val, key) => {
                        const { name, desc } = val;
                        return (
                            <div className="feature-item" key={key}>
                                <div className="feature-name">{name}</div>
                                <div className="feature-desc">{desc}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PackageFeatures;
