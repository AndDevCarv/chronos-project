import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext();

  return <div className={styles.count}>{state.formatedSecondsRemaining}</div>;
}
