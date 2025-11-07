import styles from "./styles.module.css";

export function Cycle() {
  return (
    <div className={styles.cycleContainer}>
      <span>Ciclos</span>
      <div className={styles.dotsContainer}>
        <span className={`${styles.dot} ${styles.work}`}></span>
        <span className={`${styles.dot} ${styles.shortBreak}`}></span>
        <span className={`${styles.dot} ${styles.work}`}></span>
        <span className={`${styles.dot} ${styles.shortBreak}`}></span>
        <span className={`${styles.dot} ${styles.work}`}></span>
        <span className={`${styles.dot} ${styles.shortBreak}`}></span>
        <span className={`${styles.dot} ${styles.work}`}></span>
        <span className={`${styles.dot} ${styles.longBreak}`}></span>
      </div>
    </div>
  );
}
