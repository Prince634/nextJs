import React from 'react';
import { FeatureStyle } from './style';
import { PACKAGE_FEATURE } from './constant';
import styles from '../../styles/curated.module.css';

const PackageFeatures = () => {
    return (
        <div className={styles.feature}>
            <div className={styles.featureCont}>
                <div className={styles.featureList}>
                    {PACKAGE_FEATURE.map((val, key) => {
                        const { name, desc } = val;
                        return (
                            <div className={styles.featureItem} key={key}>
                                <div className={styles.featureName}>{name}</div>
                                <div className={styles.featureDesc}>{desc}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PackageFeatures;
