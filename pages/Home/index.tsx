import { Container } from "../../src/components/Container";
import { MainTemplate } from "../../src/Templates/MainTemplate";
import { CountDown } from "../../src/components/CountDown";
import { MainForm } from "../../src/components/MainForm";
import type { StateTaskModel } from "../../models/StateTaskModel";

export type HomeProps = {
  state: StateTaskModel;
  setState: React.Dispatch<React.SetStateAction<StateTaskModel>>;
};

export function Home(props: HomeProps) {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown {...props} />
        </Container>
        <Container>
          <MainForm {...props} />
        </Container>
      </MainTemplate>
    </>
  );
}
