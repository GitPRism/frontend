import { Routes, Route } from "react-router-dom";
import Onboarding from "@/pages/Onboarding";
import Home from "@/pages/Home";
import PRFeedback from "@/pages/PRFeedback";
import ProjectEvaluation from "@/pages/ProjectEvaluation";
import MyPortfolio from "@/pages/MyPortfolio";
import HeaderLayout from "@/layout/HeaderLayout";
import SidebarLayout from "@/layout/SidebarLayout";
import MainContentLayout from "./layout/MainContentLayout";
import GithubCallback from "@/pages/GithubCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/api/v1/github/callback" element={<GithubCallback />} />
      <Route element={<HeaderLayout />}>
        <Route element={<SidebarLayout />}>
          <Route element={<MainContentLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/myportfolio" element={<MyPortfolio />} />
            <Route path="/prfeedback/:prTitle" element={<PRFeedback />} />
            <Route
              path="/projectevaluation/:projectId"
              element={<ProjectEvaluation />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
