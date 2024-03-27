import styles from "./AsteroidContent.css"
export const AsteroidContent = () =>{
    return (
        <div>
            <div className={styles.contentName}>
                Первый
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>
                    Дата: 17 марта 2024 года
                </div>
                <div className={styles.contentDistance}>
                    Расстояние: 100999 км
                </div>
                <div className={styles.contentSize}>
                    Размер: 100 м
                </div>
            </div>
        </div>
    )
}