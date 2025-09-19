import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Code, X, Home, User, Settings, LogIn, LogOut, ArrowLeft, ArrowRight } from 'lucide-react';
import './ReactRouterShowcase.css';

const ReactRouterShowcase: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'guest' | 'user' | 'admin'>('guest');

  // Simulated routing
  const routes = [
    { path: '/', name: 'Inicio', component: 'HomePage', icon: Home, public: true },
    { path: '/profile', name: 'Perfil', component: 'ProfilePage', icon: User, protected: true },
    { path: '/settings', name: 'Configuración', component: 'SettingsPage', icon: Settings, protected: true, adminOnly: true },
    { path: '/login', name: 'Iniciar Sesión', component: 'LoginPage', icon: LogIn, public: true }
  ];

  const navigateTo = (path: string) => {
    const route = routes.find(r => r.path === path);
    if (route) {
      if (route.protected && !isAuthenticated) {
        alert('Esta ruta requiere autenticación');
        return;
      }
      if (route.adminOnly && userRole !== 'admin') {
        alert('Esta ruta requiere permisos de administrador');
        return;
      }
      setCurrentRoute(path);
    }
  };

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
    if (!isAuthenticated) {
      setUserRole('user');
    } else {
      setUserRole('guest');
      setCurrentRoute('/');
    }
  };

  const toggleRole = () => {
    if (isAuthenticated) {
      setUserRole(userRole === 'user' ? 'admin' : 'user');
    }
  };

  const currentRouteData = routes.find(r => r.path === currentRoute);

  return (
    <div className="react-router-showcase">
      <div className="showcase-header">
        <h2>🚀 React Router - Routing y Navegación</h2>
        <p>Demostración interactiva de navegación en Single Page Applications</p>
      </div>

      <div className="router-demo">
        <div className="router-controls">
          <div className="auth-controls">
            <button 
              className={`btn ${isAuthenticated ? 'btn-danger' : 'btn-primary'}`}
              onClick={toggleAuth}
            >
              {isAuthenticated ? <LogOut size={16} /> : <LogIn size={16} />}
              {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
            </button>
            {isAuthenticated && (
              <button 
                className="btn btn-secondary"
                onClick={toggleRole}
              >
                Cambiar a {userRole === 'user' ? 'Admin' : 'Usuario'}
              </button>
            )}
          </div>
          
          <div className="user-status">
            <span className="status-label">Estado:</span>
            <span className={`status-badge ${isAuthenticated ? 'authenticated' : 'guest'}`}>
              {isAuthenticated ? `Usuario (${userRole})` : 'Invitado'}
            </span>
          </div>
        </div>

        <div className="navigation-demo">
          <div className="nav-bar">
            <h3>Navegación</h3>
            <div className="nav-links">
              {routes.map(route => {
                const Icon = route.icon;
                const isActive = currentRoute === route.path;
                const canAccess = route.public || (route.protected && isAuthenticated) || 
                                (route.adminOnly && userRole === 'admin');
                
                return (
                  <button
                    key={route.path}
                    className={`nav-link ${isActive ? 'active' : ''} ${!canAccess ? 'disabled' : ''}`}
                    onClick={() => navigateTo(route.path)}
                    disabled={!canAccess}
                  >
                    <Icon size={16} />
                    {route.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="content-area">
            <div className="route-info">
              <h4>Ruta Actual: {currentRoute}</h4>
              <p>Componente: {currentRouteData?.component}</p>
            </div>
            
            <div className="page-content">
              {currentRoute === '/' && (
                <div className="page home-page">
                  <h3>🏠 Página de Inicio</h3>
                  <p>Esta es la página principal de la aplicación. Es accesible para todos los usuarios.</p>
                  <div className="page-features">
                    <div className="feature">
                      <h4>Características:</h4>
                      <ul>
                        <li>Ruta pública accesible sin autenticación</li>
                        <li>Componente HomePage</li>
                        <li>Navegación mediante React Router</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {currentRoute === '/profile' && (
                <div className="page profile-page">
                  <h3>👤 Perfil de Usuario</h3>
                  <p>Esta página requiere autenticación para acceder.</p>
                  <div className="page-features">
                    <div className="feature">
                      <h4>Características:</h4>
                      <ul>
                        <li>Ruta protegida que requiere autenticación</li>
                        <li>Componente ProfilePage</li>
                        <li>Acceso solo para usuarios autenticados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {currentRoute === '/settings' && (
                <div className="page settings-page">
                  <h3>⚙️ Configuración</h3>
                  <p>Esta página requiere permisos de administrador.</p>
                  <div className="page-features">
                    <div className="feature">
                      <h4>Características:</h4>
                      <ul>
                        <li>Ruta protegida con permisos de administrador</li>
                        <li>Componente SettingsPage</li>
                        <li>Acceso solo para administradores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {currentRoute === '/login' && (
                <div className="page login-page">
                  <h3>🔐 Iniciar Sesión</h3>
                  <p>Página de autenticación para usuarios.</p>
                  <div className="page-features">
                    <div className="feature">
                      <h4>Características:</h4>
                      <ul>
                        <li>Ruta pública para autenticación</li>
                        <li>Componente LoginPage</li>
                        <li>Redirección después del login</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="routing-concepts">
          <h3>Conceptos de Routing</h3>
          <div className="concepts-grid">
            <div className="concept-card">
              <h4>SPA Navigation</h4>
              <p>Navegación sin recarga de página usando JavaScript</p>
            </div>
            <div className="concept-card">
              <h4>Route Protection</h4>
              <p>Protección de rutas basada en autenticación y roles</p>
            </div>
            <div className="concept-card">
              <h4>Dynamic Routing</h4>
              <p>Rutas que cambian según el estado de la aplicación</p>
            </div>
            <div className="concept-card">
              <h4>Programmatic Navigation</h4>
              <p>Navegación controlada por código JavaScript</p>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-actions">
        <button 
          className="action-button"
          onClick={() => setShowDetails(true)}
        >
          <Eye size={20} />
          Ver Detalles Técnicos
        </button>
        <button 
          className="action-button"
          onClick={() => setShowCode(true)}
        >
          <Code size={20} />
          Ver Código
        </button>
      </div>

      {/* Modal de Detalles */}
      {showDetails && createPortal(
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Detalles Técnicos - React Router</h3>
              <button className="close-btn" onClick={() => setShowDetails(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-section">
                <h4>Componentes Principales</h4>
                <ul>
                  <li>BrowserRouter: Proporciona contexto de routing</li>
                  <li>Routes: Contenedor de rutas</li>
                  <li>Route: Define rutas individuales</li>
                  <li>Link: Navegación declarativa</li>
                  <li>NavLink: Link con estilos activos</li>
                  <li>useNavigate: Hook para navegación programática</li>
                </ul>
              </div>
              
              <div className="tech-section">
                <h4>Características Avanzadas</h4>
                <ul>
                  <li>Rutas anidadas y layouts</li>
                  <li>Rutas protegidas con autenticación</li>
                  <li>Lazy loading de componentes</li>
                  <li>Navegación programática</li>
                  <li>Manejo del historial del navegador</li>
                  <li>Redirecciones y rutas comodín</li>
                </ul>
              </div>

              <div className="tech-section">
                <h4>Mejores Prácticas</h4>
                <ul>
                  <li>Organizar rutas en archivos separados</li>
                  <li>Usar layouts para estructura común</li>
                  <li>Implementar rutas protegidas</li>
                  <li>Manejar estados de carga y errores</li>
                  <li>Optimizar con lazy loading</li>
                  <li>Probar rutas con React Testing Library</li>
                </ul>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Modal de Código */}
      {showCode && createPortal(
        <div className="modal-overlay" onClick={() => setShowCode(false)}>
          <div className="modal-content code-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Código de Ejemplo - React Router</h3>
              <button className="close-btn" onClick={() => setShowCode(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="code-section">
                <h4>Configuración Básica</h4>
                <div className="code-block">
                  <pre>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}`}</pre>
                </div>
              </div>

              <div className="code-section">
                <h4>Navegación con Link</h4>
                <div className="code-block">
                  <pre>{`import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => 
          isActive ? 'active' : ''
        }
      >
        Perfil
      </NavLink>
    </nav>
  );
}`}</pre>
                </div>
              </div>

              <div className="code-section">
                <h4>Navegación Programática</h4>
                <div className="code-block">
                  <pre>{`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      {/* Form fields */}
    </form>
  );
}`}</pre>
                </div>
              </div>

              <div className="code-section">
                <h4>Rutas Protegidas</h4>
                <div className="code-block">
                  <pre>{`import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ReactRouterShowcase;
