import { Routes, Route } from 'react-router-dom';
import Layout, {
  HomePage,
  AboutPage,
  ContactPage,
  NotFoundPage,
} from './Layout';

function App() {
  return (
    <div>
      <h1>Basic React-Router</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
