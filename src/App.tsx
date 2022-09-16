import "./styles/main.css";
import logo from "../public/logo-nlw.svg";

import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { AdBanner } from "./components/AdBanner";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { GameController } from "phosphor-react";
import { Input } from "./components/Input";
import { AdModal } from "./components/AdModal";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  console.log(games);

  useEffect(() => {
    async function getGames() {
      const response = await api.get("/games");
      setGames(response.data);
    }
    getGames();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo do nlw esportes" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent  bg-gradient bg-clip-text">duo</span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
              title={game.title}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <AdBanner />
        <AdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
