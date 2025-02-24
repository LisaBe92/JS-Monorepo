import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <h1 className="logo">JS Monorepo</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <a
              href="https://github.com/WildCodeSchool/create-js-monorepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>

      <main className="text-box">
        <Routes>
          <Route path="*" element={<h2>404 - Page non trouvée</h2>} />
        </Routes>
      </main>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </Router>
  );
}

export default App;
