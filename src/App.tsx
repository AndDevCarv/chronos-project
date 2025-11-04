import "./styles/global.css";
import "./styles/theme.css";

import {Container} from "./components/Container";
import {Heading} from "./components/Heading";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo>Logo</Logo>
      </Container>
      <Container>
        <Heading>Form</Heading>
      </Container>
    </>
  );
}
