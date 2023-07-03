import React from 'react';
import PackageCard, { PackageCardLoader} from './PackageCard';
import { PACKAGE_LIST } from './constant';
import LoadingWidget from './LoadingWidget';
import styles from '../../styles/curated.module.css';

const MainView = ({showLoadingWidget, isSSR, isCSR})=>{

    const [loading, setLoader] = React.useState(false);

    React.useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[])

    return (
        <div className={styles.packageListCont}>
            <div className={styles.packageListContView}>
            
                {
                    loading && showLoadingWidget?
                    <div className={styles.showLoadingWidget}>
                        <LoadingWidget/>
                    </div>
                    :<div className={styles.packageListView}>
                        {PACKAGE_LIST.map((packageInfo, key) => {
                            return (
                                <>
                                {/* {
                                    loading?<PackageCardLoader/>
                                    :
                                } */}
                                 <PackageCard
                                        data={packageInfo}
                                        key={key}
                                        handlePackageClick={()=>{}}
                                        isDeleted={false
                                        }
                                        isCSR={isCSR}
                                        isSSR={isSSR}
                                    />   
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