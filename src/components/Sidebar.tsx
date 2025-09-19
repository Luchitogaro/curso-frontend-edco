import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { getAllSessions } from '../data/sessionsData';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const sessions = getAllSessions();
  const currentSessionId = location.pathname.includes('/sesion/') 
    ? parseInt(location.pathname.split('/sesion/')[1]) 
    : null;

  const handleSessionClick = () => {
    // Scroll to top when navigating to a new session
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        <Clock size={20} />
        Sesiones del Curso
      </h2>
      
      <ul className="sessions-list">
        {sessions.map((session) => {
          const isActive = currentSessionId === session.id;
          const isCompleted = session.completed;
          
          return (
            <li key={session.id} className="session-item">
              <Link 
                to={`/sesion/${session.id}`}
                className={`session-link ${isActive ? 'active' : ''}`}
                onClick={handleSessionClick}
              >
                <div className="session-number">
                  {isCompleted ? (
                    <CheckCircle size={16} />
                  ) : (
                    <span>{session.id}</span>
                  )}
                </div>
                <div className="session-info">
                  <div className="session-title">{session.title}</div>
                  <div className="session-meta">
                    {session.duration} • {session.level}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
