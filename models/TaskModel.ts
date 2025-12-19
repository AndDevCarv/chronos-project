import type { StateTaskModel } from "./StateTaskModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number; //inicio do cronometro
  completeDate: number | null; //fim do cronometro
  interruptDate: number | null; //quando o cronometro é interrompido
  type: keyof StateTaskModel["config"]; //vai pegar as configurações do outro model
};
