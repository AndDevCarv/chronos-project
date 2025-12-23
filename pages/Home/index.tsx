import { Container } from "../../src/components/Container";
import { MainTemplate } from "../../src/Templates/MainTemplate";
import { CountDown } from "../../src/components/CountDown";
import { MainForm } from "../../src/components/MainForm";

export function Home() {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
