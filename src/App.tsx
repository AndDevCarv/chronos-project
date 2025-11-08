import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycle } from "./components/Cycles/Cycle";
import { DefaultButton } from "./components/DeafultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
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
            <DefaultButton icon={<StopCircleIcon />} color="red" />
          </div>
        </form>
      </Container>
    </>
  );
}
