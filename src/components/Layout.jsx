import '../styles/layout.css';
import Sidebar from './Sidebar'; // we’ll create this soon
import Header from './Header'; // optional, for top bar inside main content
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <Sidebar />
      </aside>
      <main className="main-content">
        <header className="main-header">
          <Header />
        </header>
        <section className="page-content" aria-labelledby="page-title">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
