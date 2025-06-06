import { Routes, Route } from "react-router-dom";
import HeaderLayout from "@/layout/HeaderLayout";
import SidebarLayout from "@/layout/SidebarLayout";
import MainContentLayout from "./layout/MainContentLayout";
import Onboarding from "@/pages/Onboarding";
import GithubCallback from "@/pages/GithubCallback";
import Home from "@/pages/Home";
import MyPortfolio from "@/pages/MyPortfolio";
import MyBookmark from "@/pages/MyBookmark";
import MyActivity from "@/pages/MyActivity";
import Portfolio from "./pages/Portfolio";
import PortfolioEditor from "@/pages/PortfolioEditor";
// import WebSocketEditor from "@/pages/WebSocketEditor";
import PortfolioCreate from "@/pages/PortfolioCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      {/* <Route
        path="test"
        element={<WebSocketEditor portfolioId={1} editorId={1} />}
      /> */}
      <Route path="/api/v1/github/callback" element={<GithubCallback />} />
      <Route element={<HeaderLayout />}>
        <Route element={<SidebarLayout />}>
          <Route element={<MainContentLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/myportfolio" element={<MyPortfolio />} />
            <Route path="/mybookmark" element={<MyBookmark />} />
            <Route path="/myactivity" element={<MyActivity />} />
          </Route>
        </Route>
        <Route path="portfolio/:portfolioId" element={<Portfolio />} />
        <Route path="portfoliocreate" element={<PortfolioCreate />} />
        <Route path="portfolioedit/:id" element={<PortfolioEditor />} />
      </Route>
    </Routes>
  );
}

export default App;
