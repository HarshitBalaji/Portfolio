// Top-level route map for the portfolio.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Display from './Pages/Display';
import Projects from './Pages/Projects';
import CV from './Pages/CV';
import Contact from './Pages/Contact_Me';
import Home from './Home';  
import CV_Intro from './Pages/subpages/CV_Intro';
import CV_Experience from './Pages/subpages/CV_Experience';
import CV_Education from './Pages/subpages/CV_Education';
import CV_Skills from './Pages/subpages/CV_Skills';
import CV_Research from './Pages/subpages/CV_Research';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
      {/* BrowserRouter keeps navigation client-side for the portfolio. */}
      <BrowserRouter>
        <Routes>
          {/* Public landing page. */}
          <Route path="/" element={<Home />} />
          {/* Shared shell for all inner pages that use the sticky header layout. */}
          <Route path="/app" element={<Display />}>
            {/* Default inner route keeps the same home content accessible from /app. */}
            <Route index element={<Home />} />
            {/* About area is split into nested sections so the sidebar can stay mounted. */}
            <Route path="about" element={<CV />}>
              <Route index element={<CV_Intro />} />
              <Route path="experience" element={<CV_Experience />} />
              <Route path="research" element={<CV_Research />} />
              <Route path="education" element={<CV_Education />} />
              <Route path="skills" element={<CV_Skills />} />
            </Route>
            <Route path="work" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* Unknown routes fall back to the landing page. */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </LanguageProvider>
  )
}

export default App
