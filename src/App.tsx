import { Home } from "../pages/Home";
import { TextContextProvider } from "./Contexts/TaskContext/TaskProvider";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <TextContextProvider>
      <Home />
    </TextContextProvider>
  );
}
