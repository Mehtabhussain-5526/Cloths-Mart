import React from "react";
import Marketplace from "./Components/Marketplace";
import Brands from "./Components/Brands";
import PinnedItems from "./Components/PinnedItems";
import { MarketIcon } from "../util/logo";
import MarketPlaceChat from "./Components/MarketPlaceChat";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="brands" element={<Brands />} />
          <Route path="/marketplacechat" element={<MarketPlaceChat/>} />
          <Route path="/pinneditems" element={<PinnedItems />} />

        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
