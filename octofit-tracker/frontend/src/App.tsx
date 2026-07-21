import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities.tsx';
import Leaderboard from './components/Leaderboard.tsx';
import Teams from './components/Teams.tsx';
import Users from './components/Users.tsx';
import Workouts from './components/Workouts.tsx';

function App() {
  return (
    <Router>
      <header>
        <h1>OctoFit Tracker</h1>
        <p>Modern multi-tier React 19 presentation tier.</p>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <h2>Welcome to OctoFit Tracker</h2>
                <p>
                  This app uses `import.meta.env.VITE_CODESPACE_NAME` for Codespaces API routing.
                </p>
                <p>
                  If you run locally, define <strong>VITE_CODESPACE_NAME</strong> in `.env.local` to enable the Codespaces API URL.
                </p>
              </section>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
