import assets from '../assets'
import styles from '../styles/Global'

function FeatureCard({iconUrl, iconText}){
    return (
        <div className={`${styles.featureCard}`}>
            <img src={iconUrl} alt='icon' className={styles.featureImg} />
            <p className={styles.featureText}>
                {iconText}
            </p>
        </div>
    )
}

export default function Features(){
    return(
        <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
                       Technologies 
                    </h1>
                    <p className={`${styles.pText} ${styles.whiteText}`}>
                        ProNef has been developed using cross-platform technology, React Native
                    </p>
                </div>
                <div className={styles.flexWrap}>
                    <FeatureCard iconUrl={assets.react}
                        iconText="React Native"
                    />
                    <FeatureCard iconUrl={assets.javascript}
                        iconText="Javascript"
                    />
                </div>
            </div>
        </div>
    )
}