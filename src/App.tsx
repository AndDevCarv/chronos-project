import "./styles/global.css";
import "./styles/theme.css";

import { Heading } from "./components/heading";
import { Timer } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <Timer/>
        </button>
        </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at adipisci tempore accusantium quidem atque, rerum soluta minus accusamus ea vero voluptatem optio quam tenetur, id deleniti. Necessitatibus, perspiciatis nisi.</p>
    </>
  );
}
