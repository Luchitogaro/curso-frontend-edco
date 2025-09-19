import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Globe, RefreshCw, Eye, Code, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './ApiShowcase.css';

interface ApiData {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const ApiShowcase: React.FC = () => {
  const [users, setUsers] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<ApiData | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    setApiCalls(prev => prev + 1);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserById = async (id: number) => {
    setLoading(true);
    setError(null);
    setApiCalls(prev => prev + 1);
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      setSelectedUser(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Escape key functionality
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDetails(false);
        setShowCode(false);
        setSelectedUser(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="api-showcase">
      <div className="showcase-header">
        <h2>🌐 JavaScript - Asincronía y APIs</h2>
        <p>Demostración interactiva de consumo de APIs REST con Fetch API, Promises y async/await</p>
        
        <div className="showcase-stats">
          <div className="stat-item">
            <span className="stat-number">{users.length}</span>
            <span className="stat-label">Usuarios</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{apiCalls}</span>
            <span className="stat-label">Llamadas API</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{error ? 'Error' : 'OK'}</span>
            <span className="stat-label">Estado</span>
          </div>
        </div>
      </div>

      <div className="api-controls">
        <button 
          onClick={fetchUsers}
          disabled={loading}
          className="fetch-button"
        >
          {loading ? <Loader size={16} className="spinning" /> : <RefreshCw size={16} />}
          {loading ? 'Cargando...' : 'Obtener Usuarios'}
        </button>
        
        <div className="api-info">
          <span className="api-url">https://jsonplaceholder.typicode.com/users</span>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-header">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.company.name}</p>
              </div>
            </div>
            
            <div className="user-details">
              <div className="detail-item">
                <Globe size={14} />
                <span>{user.email}</span>
              </div>
              <div className="detail-item">
                <Globe size={14} />
                <span>{user.phone}</span>
              </div>
              <div className="detail-item">
                <Globe size={14} />
                <span>{user.website}</span>
              </div>
            </div>
            
            <button 
              onClick={() => fetchUserById(user.id)}
              className="view-details-btn"
            >
              Ver Detalles Completos
            </button>
          </div>
        ))}
      </div>

      {loading && users.length === 0 && (
        <div className="loading-state">
          <Loader size={32} className="spinning" />
          <p>Cargando usuarios...</p>
        </div>
      )}

      <div className="showcase-actions">
        <button 
          onClick={() => setShowDetails(true)}
          className="action-button"
        >
          <Eye size={16} />
          Ver Detalles Técnicos
        </button>
        <button 
          onClick={() => setShowCode(true)}
          className="action-button"
        >
          <Code size={16} />
          Ver Código
        </button>
      </div>

      {/* Modal de Detalles de Usuario */}
      {selectedUser && createPortal(
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Detalles del Usuario</h3>
              <button onClick={() => setSelectedUser(null)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="user-detail-section">
                <h4>Información Personal</h4>
                <div className="detail-grid">
                  <div className="detail-item">
                    <strong>Nombre:</strong> {selectedUser.name}
                  </div>
                  <div className="detail-item">
                    <strong>Email:</strong> {selectedUser.email}
                  </div>
                  <div className="detail-item">
                    <strong>Teléfono:</strong> {selectedUser.phone}
                  </div>
                  <div className="detail-item">
                    <strong>Sitio Web:</strong> {selectedUser.website}
                  </div>
                  <div className="detail-item">
                    <strong>Empresa:</strong> {selectedUser.company.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Modal de Detalles Técnicos */}
      {showDetails && createPortal(
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Detalles Técnicos - APIs y Asincronía</h3>
              <button onClick={() => setShowDetails(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-section">
                <h4>🎯 Funcionalidades Implementadas</h4>
                <ul>
                  <li>Consumo de API REST con Fetch API</li>
                  <li>Manejo de Promises y async/await</li>
                  <li>Gestión de estados de carga y errores</li>
                  <li>Renderizado condicional de datos</li>
                  <li>Interfaz responsive y moderna</li>
                  <li>Contador de llamadas API</li>
                </ul>
              </div>
              
              <div className="tech-section">
                <h4>🛠️ Tecnologías Utilizadas</h4>
                <ul>
                  <li><strong>Fetch API:</strong> Para realizar peticiones HTTP</li>
                  <li><strong>Promises:</strong> Manejo de operaciones asíncronas</li>
                  <li><strong>async/await:</strong> Sintaxis moderna para Promises</li>
                  <li><strong>React Hooks:</strong> useState, useEffect para gestión de estado</li>
                  <li><strong>TypeScript:</strong> Tipado estático para interfaces</li>
                  <li><strong>CSS Grid:</strong> Layout responsive</li>
                </ul>
              </div>

              <div className="tech-section">
                <h4>📚 Conceptos Aplicados</h4>
                <ul>
                  <li>Programación asíncrona en JavaScript</li>
                  <li>Consumo de APIs REST</li>
                  <li>Manejo de errores en peticiones HTTP</li>
                  <li>Estados de carga y feedback visual</li>
                  <li>Renderizado condicional</li>
                  <li>Gestión de estado en React</li>
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
              <h3>Código de Consumo de APIs</h3>
              <button onClick={() => setShowCode(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="code-section">
                <h4>Fetch API con async/await</h4>
                <pre className="code-block">
{`// Función para obtener usuarios
async function fetchUsers() {
  setLoading(true);
  setError(null);
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    
    const data = await response.json();
    setUsers(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

// Función para obtener usuario específico
async function fetchUserById(id) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    const user = await response.json();
    setSelectedUser(user);
  } catch (err) {
    setError(err.message);
  }
}`}
                </pre>
              </div>

              <div className="code-section">
                <h4>Manejo de Estados</h4>
                <pre className="code-block">
{`// Estados del componente
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [selectedUser, setSelectedUser] = useState(null);

// useEffect para cargar datos iniciales
useEffect(() => {
  fetchUsers();
}, []);

// Renderizado condicional
{loading && <LoadingSpinner />}
{error && <ErrorMessage error={error} />}
{users.map(user => <UserCard key={user.id} user={user} />)}`}
                </pre>
              </div>

              <div className="code-section">
                <h4>Manejo de Errores</h4>
                <pre className="code-block">
{`// Manejo robusto de errores
try {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(\`Error HTTP: \${response.status}\`);
  }
  
  const data = await response.json();
  return data;
} catch (error) {
  if (error.name === 'TypeError') {
    setError('Error de conexión');
  } else if (error.name === 'SyntaxError') {
    setError('Error al procesar respuesta');
  } else {
    setError(error.message);
  }
  throw error;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ApiShowcase;
