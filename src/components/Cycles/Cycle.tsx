import { getNextCycle } from "../../../Util/getNextCycle";
import { getNextCycleType } from "../../../Util/getNextCycleType";
import { useTaskContext } from "../../Contexts/TaskContext/UseTaskContext";
import styles from "./styles.module.css";

export function Cycle() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle }); //vai fazer com que a cada cycle crie um indice no array, iniciamos com um array vazio e ele aumenta junto com os cycles.

  const cycleMap = {
    workTime: "foco",
    shortBreak: "descanso curto",
    longBreak: "descanso longo",
  };

  return (
    <div className={styles.cycleContainer}>
      <span>Ciclos</span>
      <div className={styles.dotsContainer}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.dot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
