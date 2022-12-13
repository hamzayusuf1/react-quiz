import "./App.css";
import NavLinks from "./components/NavLinks";
import Game from "./components/Game";
import { GameProvider } from "./contexts/GameProvider";

function App() {
  return (
    <div>
      <NavLinks />
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
