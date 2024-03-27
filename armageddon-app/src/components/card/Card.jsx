import styles from "./Card.css"
import {AsteroidContent} from "./AsteroidContent/AsteroidContent";
import {AsteroidAction} from "./AsteroidAction/AsteroidAction";
import {AsteroidImage} from "./AsteroidImage/AsteroidImage";
export const AsteroidCard = () => {
    return (<div className={styles.card}>
        <div className={styles.normCard}></div>
            <AsteroidImage/>
            <AsteroidContent/>
            <AsteroidAction/>
        </div>)

}
export const DangerAsteroidCard = () => {
    return (<div className={styles.card}>
        <div className={styles.cardRed}></div>
            <AsteroidImage/>
            <AsteroidContent/>
            <AsteroidAction/>
        </div>)

}