import React from 'react';
import PackageCard, { PackageCardLoader} from './PackageCard';
import { PACKAGE_LIST } from './constant';
import LoadingWidget from './LoadingWidget';

const MainView = ({showLoadingWidget, isSSR})=>{

    const [loading, setLoader] = React.useState(isSSR?false:true);

    React.useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[])

    return (
        <div className="package-list-cont">
            <div className='package-list-cont-view'>
            
                {
                    loading && showLoadingWidget?
                    <div className='showLoadingWidget'>
                        <LoadingWidget/>
                    </div>
                    :<div className="package-list-view">
                        {PACKAGE_LIST.map((packageInfo, key) => {
                            return (
                                <>
                                {
                                    loading?<PackageCardLoader/>
                                    :<PackageCard
                                        data={packageInfo}
                                        key={key}
                                        handlePackageClick={()=>{}}
                                        isDeleted={false
                                        }
                                    />
                                }
                                    
                                </>
                                
                            );
                        })}
                    </div>
                }
                
            </div>
        </div>
    )
}

export default MainView;