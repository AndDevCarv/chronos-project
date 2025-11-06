import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

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
            <label htmlFor="meuInput">Task</label>
            <input id="meuInput"></input>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>00000</p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
