import React from 'react';
import { PackageCardStyle } from './style';
import { Image, Shimmer } from 'react-shimmer'
import styles from '../../styles/curated.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazy-load';


const PackageCard = ({
    data,
    isDeleted,
    handlePackageClick,
    isCSR,
    isSSR
}) => {
    const {
        id,
        name,
        regions,
        adFormats,
        shortDescription,
        isNew,
        cardBgImageUrlIcon,
    } = data;

    const countryCount = React.useMemo(() => {
        return 10;
    }, [regions]);

    const renderData = ()=>{
        return  <div className={styles.card}
        key={id}
        onClick={() => handlePackageClick(id)}
        isDeleted={isDeleted}
    >
        {isNew ? <span className={styles.newPackage}>NEW</span> : null}
        <div className={styles.packageIcon}>
            <img
                src={cardBgImageUrlIcon}
                alt="market place icon"
                height="100%"
                width="100%"
            />
            
        </div>
        <div className={styles.packageDetail}>
            <div className={styles.packageName}>{name}</div>
            <div className={styles.packageDesc}>{shortDescription}</div>
            <div className={styles.packageMetrics}>
                {countryCount}
                <span className={styles.packageMetricSeperator}>|</span>
                {`${adFormats.length} Ad formats`}
            </div>
            <div className={styles.viewDetail}>View Details</div>
        </div>
    </div>
    }
    return (
        
        <>
            {
                isCSR || isSSR?
                renderData()
                :<LazyLoad height={762} offset={300}>
                    {renderData()}
                </LazyLoad>
            }
        </>
    );
};

export const PackageCardLoader = () => {
 
    return (
        <div className={styles.packageCardShimmer}>
            <Shimmer className='' height="100%" width="100%"></Shimmer>
            <Shimmer height="193px" width="100%"></Shimmer>
        </div>
        
    );
};
export default PackageCard;
