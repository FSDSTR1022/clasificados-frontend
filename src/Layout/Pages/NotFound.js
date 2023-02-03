import styles from '../Pages/NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={styles.containerNotFound}>
            <h2>Error  404</h2>
            <p className={styles.NotFound}>ULR No Encontrada !</p>
        </div>
    )
}