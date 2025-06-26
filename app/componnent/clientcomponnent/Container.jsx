import styles from "../../../styles/clientconponnent/Container.module.css";

const Container = ({ children }) => {
    return (
        <div className={styles.containerWrper}>
            {children}
        </div>
    )
}

export default Container;