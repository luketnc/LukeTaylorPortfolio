import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
// Pages
import Home from './pages/Home';
import ProjectsIndex from './pages/ProjectsIndex';
import ProjectDetail from './pages/ProjectDetail';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
// import Tools from './pages/Tools';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsIndex />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* <Route path="blog/:slug" element={<BlogPost />} /> */}
          {/* <Route path="tools" element={<Tools />} /> */}
          <Route path="contact" element={<Contact />} />
          {/* Any stale/removed route (blog, tools, typos) falls back to home. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
