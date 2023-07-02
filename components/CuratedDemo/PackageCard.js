import React from 'react';
import { PackageCardStyle } from './style';
import { Image, Shimmer } from 'react-shimmer'

const PackageCard = ({
    data,
    isDeleted,
    handlePackageClick,
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
    return (
        <div className={PackageCardStyle}
            key={id}
            onClick={() => handlePackageClick(id)}
            isDeleted={isDeleted}
        >
            {isNew ? <span className="new-package">NEW</span> : null}
            <div className="package-icon">
                {
                    typeof window === 'undefined'?
                    <div>loading</div>
                    :<img
                        src={cardBgImageUrlIcon}
                        alt="market place icon"
                        height="100%"
                        width="100%"
                        loading="lazy"
                    />
                }
            </div>
            <div className="package-detail">
                <div className="package-name">{name}</div>
                <div className="package-desc">{shortDescription}</div>
                <div className="package-metrics">
                    {countryCount}
                    <span className="package-metric-seperator">|</span>
                    {`${adFormats.length} Ad formats`}
                </div>
                <div className="view-detail">View Details</div>
            </div>
        </div>
    );
};

export const PackageCardLoader = () => {
 
    return (
        <div className='package-card-shimmer'>
            <Shimmer className='' height="100%" width="100%"></Shimmer>
            <Shimmer height="193px" width="100%"></Shimmer>
        </div>
        
    );
};
export default PackageCard;
