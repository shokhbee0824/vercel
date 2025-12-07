import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Scanner } from './pages/Scanner';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Security } from './pages/Security';
import { Language, User } from './types';
import { AuthService } from './services/authService';

// Wrapper for animated routes
const AnimatedRoutes: React.FC<{ 
  lang: Language; 
  user: User | null; 
  setUser: (u: User | null) => void; 
}> = ({ lang, user, setUser }) => {
  const location = useLocation();

  return (
    // The key prop triggers the re-render, and CSS 'animate-page-enter' handles the smooth fade-in/slide-up
    <div key={location.pathname} className="animate-page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/security" element={<Security lang={lang} />} />
        <Route path="/login" element={!user ? <Login lang={lang} onLogin={setUser} /> : <Navigate to="/dashboard" replace />} />
        <Route path="/scanner" element={user ? <Scanner lang={lang} /> : <Navigate to="/login" replace />} />
        <Route path="/dashboard" element={user ? <Dashboard lang={lang} user={user} setUser={setUser} /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

function App() {
  const [lang, setLang] = useState<Language>(Language.UZ);
  const [user, setUser] = useState<User | null>(null);
  
  // Theme State - Initialize from LocalStorage or System Preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
       const saved = localStorage.getItem('theme');
       if (saved) return saved === 'dark';
       return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-eco-500/30 selection:text-eco-600 dark:selection:text-eco-200">
        
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          user={user} 
          setUser={setUser}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        
        <AnimatedRoutes lang={lang} user={user} setUser={setUser} />

        <footer className="py-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 text-xs backdrop-blur-md bg-white/50 dark:bg-slate-950/50">
          <p>© 2025 EcoCash Global Initiative. Secure Govt Protocol.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;