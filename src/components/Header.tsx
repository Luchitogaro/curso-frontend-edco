import React, { useState } from 'react';
import { BookOpen, Target, Menu, X, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getAllSessions } from '../data/sessionsData';
import logoAndes from '../logo-andes.png';

interface HeaderProps {
  progress?: number;
}

const Header: React.FC<HeaderProps> = ({ progress = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const sessions = getAllSessions();
  
  const currentSessionId = location.pathname.includes('/sesion/') 
    ? parseInt(location.pathname.split('/sesion/')[1]) 
    : null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">
            <div className="university-logo">
                <img 
                  src={logoAndes} 
                  alt="Universidad de los Andes - Educación Continua" 
                  className="logo-shield"
              />
              <div className="logo-text">
                <div className="university-name">
                  <span>Universidad de</span>
                  <span>los Andes</span>
                </div>
                <div className="program-name">
                  <span>Educación</span>
                  <span>Continua</span>
                </div>
              </div>
            </div>
            <span className="course-title">Curso Frontend EDCO</span>
          </a>
          
          <div className="header-actions">
            <button 
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Abrir menú de navegación"
            >
              <Menu size={24} />
            </button>
            
            <div className="progress-section">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Target size={16} color="#ffff00" />
                <span style={{ fontSize: '0.875rem', color: '#ffffff', fontWeight: '500' }}>
                  Progreso del Curso
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#ffffff', marginTop: '0.25rem', display: 'block' }}>
                {progress}% completado
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h2 className="mobile-menu-title">
            <Clock size={20} />
            Sesiones del Curso
          </h2>
          <button 
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Cerrar menú de navegación"
          >
            <X size={24} />
          </button>
        </div>
        
        <ul className="mobile-sessions-list">
          {sessions.map((session) => {
            const isActive = currentSessionId === session.id;
            const isCompleted = session.completed;
            
            return (
              <li key={session.id} className="mobile-session-item">
                <Link 
                  to={`/sesion/${session.id}`}
                  className={`mobile-session-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <div className="mobile-session-number">
                    {isCompleted ? (
                      <span>✓</span>
                    ) : (
                      <span>{session.id}</span>
                    )}
                  </div>
                  <div className="mobile-session-info">
                    <div className="mobile-session-title">{session.title}</div>
                    <div className="mobile-session-meta">
                      {session.duration} • {session.level}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
