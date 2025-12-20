import { PlayCircleIcon } from "lucide-react";
import { Cycle } from "../Cycles/Cycle";
import { DefaultButton } from "../DeafultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../../pages/Home";

export function MainForm({ state }: HomeProps) {
  return (
    <>
      {" "}
      <form className="form">
        <div className="formRow">
          <DefaultInput
            id="meuInput"
            type="string"
            labelText="Task"
            placeholder="Digite algo"
          />
        </div>
        <div className="formRow">
          <p>O próximo descanso é em {state.config.longBreak}min</p>
        </div>
        <div className="formRow">
          <Cycle />
        </div>
        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}
