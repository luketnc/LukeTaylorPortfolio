import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Pages
import Home from './pages/Home';
import ProjectsIndex from './pages/ProjectsIndex';
import ProjectDetail from './pages/ProjectDetail';
import Updates from './pages/Updates';
import Coin from './pages/Coin';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsIndex />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="updates" element={<Updates />} />
          <Route path="coin" element={<Coin />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
