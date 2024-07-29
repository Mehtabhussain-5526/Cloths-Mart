import Marketplace from "./Components/Marketplace";
import Brands from "./Components/Brands";
import PinnedItems from "./Components/PinnedItems";
import MarketPlaceChat from "./Components/MarketPlaceChat";
import { HashRouter, Route, Routes } from "react-router-dom";
import ModalNewChat from './Components/ModalNewChat';

const App = () => {
  return (
    <>
      <div className="bg-[#F9FBFF] w-full min-h-screen">
        <div className="max-w-[1440px] mx-auto ">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Marketplace />} />
              <Route path="brands" element={<Brands />} />
              <Route path="/marketplacechat" element={<MarketPlaceChat />} />
              <Route path="/pinneditems" element={<PinnedItems />} />
              <Route path="/modal" element={<ModalNewChat/>}/>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </>
  );
};

export default App;
