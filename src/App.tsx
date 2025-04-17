import { Routes, Route } from "react-router-dom";
import Onboarding from "@/pages/Onboarding";
import Home from "@/pages/Home";
import PRFeedback from "@/pages/PRFeedback";
import ProjectEvaluation from "@/pages/ProjectEvaluation";
import Portfolio from "@/pages/Portfolio";
import HeaderLayout from "@/layout/HeaderLayout";
import SidebarLayout from "@/layout/SidebarLayout";
import GithubCallback from "@/pages/GithubCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/api/v1/github/callback" element={<GithubCallback />} />
      <Route path="/" element={<SidebarLayout />}>
        <Route element={<HeaderLayout />}>
          <Route path="/home/:projectId" element={<Home />} />
          <Route path="/prfeedback/:prTitle" element={<PRFeedback />} />
          <Route
            path="/projectevaluation/:projectId"
            element={<ProjectEvaluation />}
          />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
