import { PlayCircleIcon } from "lucide-react";
import { Cycle } from "../Cycles/Cycle";
import { DefaultButton } from "../DeafultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
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
          <p>Lorem ipsum dolor sit amet.</p>
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
