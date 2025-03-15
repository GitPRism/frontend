import { Routes, Route } from "react-router-dom";
import Onboarding from "@/pages/Onboarding";
import Home from "@/pages/Home";
import PRFeedback from "@/pages/PRFeedback";
import ProjectEvaluation from "@/pages/ProjectEvaluation";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/home" element={<Home />} />
      <Route path="/prfeedback" element={<PRFeedback />} />
      <Route path="/projectevaluation" element={<ProjectEvaluation />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
