import { Home } from "../pages/Home";
import { TextContextProvider } from "../models/StateTaskModel";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <TextContextProvider>
      <Home />
    </TextContextProvider>
  );
}
