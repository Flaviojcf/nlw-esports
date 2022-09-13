import "./styles/main.css";
import logo from "../public/assets/logo-nlw.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo do nlw esportes" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent  bg-gradient bg-clip-text">duo</span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/assets/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/assets/game2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/assets/game3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS GO</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/assets/game4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/assets/game5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/assets/game6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className=" pt-1 bg-gradient self-stretch mt-8 rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center ">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="flex items-center gap-3  py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;