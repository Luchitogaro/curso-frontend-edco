import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Code, X, Plus, Edit, Trash2, Save, User, Mail, Phone, Globe, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import './ReactApiCrudShowcase.css';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const ReactApiCrudShowcase: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });

  // Simulated API calls
  const simulateApiCall = async <T,>(data: T, delay: number = 1000): Promise<ApiResponse<T>> => {
    setApiCalls(prev => prev + 1);
    await new Promise(resolve => setTimeout(resolve, delay));
    return {
      data,
      status: 200,
      message: 'Operación exitosa'
    };
  };

  // CRUD Operations
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await simulateApiCall([
        { id: 1, name: 'Juan Pérez', email: 'juan@ejemplo.com', phone: '+57 300 123 4567', website: 'juanperez.com' },
        { id: 2, name: 'María García', email: 'maria@ejemplo.com', phone: '+57 300 234 5678', website: 'mariagarcia.com' },
        { id: 3, name: 'Carlos López', email: 'carlos@ejemplo.com', phone: '+57 300 345 6789', website: 'carloslopez.com' }
      ]);
      setUsers(response.data);
    } catch (err) {
      setError('Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    if (!formData.name || !formData.email) {
      setError('Nombre y email son requeridos');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const newUser: User = {
        id: Date.now(),
        ...formData
      };
      const response = await simulateApiCall(newUser);
      setUsers(prev => [...prev, response.data]);
      setFormData({ name: '', email: '', phone: '', website: '' });
      setSuccessMessage('Usuario creado exitosamente');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError('Error al crear usuario');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async () => {
    if (!editingUser) return;

    setLoading(true);
    setError(null);
    try {
      const response = await simulateApiCall(editingUser);
      setUsers(prev => prev.map(user => 
        user.id === editingUser.id ? response.data : user
      ));
      setEditingUser(null);
      setSuccessMessage('Usuario actualizado exitosamente');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError('Error al actualizar usuario');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await simulateApiCall(null);
      setUsers(prev => prev.filter(user => user.id !== id));
      setSuccessMessage('Usuario eliminado exitosamente');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError('Error al eliminar usuario');
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website
    });
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', phone: '', website: '' });
  };

  const handleInputChange = (field: keyof User, value: string) => {
    if (editingUser) {
      setEditingUser(prev => prev ? { ...prev, [field]: value } : null);
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
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
        if (editingUser) {
          cancelEdit();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [editingUser]);

  return (
    <div className="react-api-crud-showcase">
      <div className="showcase-header">
        <h2>⚛️ React + API + CRUD</h2>
        <p>Demostración completa de integración React con APIs REST para operaciones CRUD</p>
        
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

      <div className="crud-interface">
        {/* Form Section */}
        <div className="form-section">
          <h3>{editingUser ? 'Editar Usuario' : 'Crear Nuevo Usuario'}</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">
                <User size={16} />
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={editingUser ? editingUser.name : formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nombre completo"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
                Email
              </label>
              <input
                id="email"
                type="email"
                value={editingUser ? editingUser.email : formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">
                <Phone size={16} />
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                value={editingUser ? editingUser.phone : formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+57 300 123 4567"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="website">
                <Globe size={16} />
                Sitio Web
              </label>
              <input
                id="website"
                type="url"
                value={editingUser ? editingUser.website : formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://mi-sitio.com"
              />
            </div>
          </div>
          
          <div className="form-actions">
            {editingUser ? (
              <>
                <button onClick={updateUser} disabled={loading} className="btn btn-primary">
                  {loading ? <Loader size={16} className="spinning" /> : <Save size={16} />}
                  {loading ? 'Guardando...' : 'Guardar Cambios'}
                </button>
                <button onClick={cancelEdit} className="btn btn-secondary">
                  Cancelar
                </button>
              </>
            ) : (
              <button onClick={createUser} disabled={loading} className="btn btn-primary">
                {loading ? <Loader size={16} className="spinning" /> : <Plus size={16} />}
                {loading ? 'Creando...' : 'Crear Usuario'}
              </button>
            )}
          </div>
        </div>

        {/* Users List */}
        <div className="users-section">
          <div className="section-header">
            <h3>Lista de Usuarios</h3>
            <button onClick={fetchUsers} disabled={loading} className="btn btn-outline">
              {loading ? <Loader size={16} className="spinning" /> : 'Actualizar'}
            </button>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="success-message">
              <CheckCircle size={20} />
              <span>{successMessage}</span>
            </div>
          )}

          {loading && users.length === 0 ? (
            <div className="loading-state">
              <Loader size={32} className="spinning" />
              <p>Cargando usuarios...</p>
            </div>
          ) : (
            <div className="users-grid">
              {users.map(user => (
                <div key={user.id} className="user-card">
                  <div className="user-header">
                    <div className="user-avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="user-info">
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="user-details">
                    <div className="detail-item">
                      <Phone size={14} />
                      <span>{user.phone}</span>
                    </div>
                    <div className="detail-item">
                      <Globe size={14} />
                      <span>{user.website}</span>
                    </div>
                  </div>
                  
                  <div className="user-actions">
                    <button 
                      onClick={() => startEdit(user)}
                      className="btn btn-sm btn-outline"
                    >
                      <Edit size={14} />
                      Editar
                    </button>
                    <button 
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-sm btn-danger"
                    >
                      <Trash2 size={14} />
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

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

      {/* Modal de Detalles Técnicos */}
      {showDetails && createPortal(
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Detalles Técnicos - React + API + CRUD</h3>
              <button onClick={() => setShowDetails(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-section">
                <h4>🎯 Funcionalidades CRUD Implementadas</h4>
                <ul>
                  <li><strong>CREATE:</strong> Crear nuevos usuarios con validación</li>
                  <li><strong>READ:</strong> Listar usuarios con carga asíncrona</li>
                  <li><strong>UPDATE:</strong> Editar usuarios existentes</li>
                  <li><strong>DELETE:</strong> Eliminar usuarios con confirmación</li>
                  <li>Gestión de estados de carga y errores</li>
                  <li>Validación de formularios</li>
                  <li>Feedback visual para operaciones</li>
                </ul>
              </div>
              
              <div className="tech-section">
                <h4>🛠️ Tecnologías y Patrones</h4>
                <ul>
                  <li><strong>React Hooks:</strong> useState, useEffect para gestión de estado</li>
                  <li><strong>TypeScript:</strong> Tipado estático para interfaces y APIs</li>
                  <li><strong>Async/Await:</strong> Manejo de operaciones asíncronas</li>
                  <li><strong>Error Handling:</strong> Manejo robusto de errores</li>
                  <li><strong>Loading States:</strong> Estados de carga y feedback</li>
                  <li><strong>Form Management:</strong> Gestión de formularios complejos</li>
                  <li><strong>API Simulation:</strong> Simulación de llamadas REST</li>
                </ul>
              </div>

              <div className="tech-section">
                <h4>📚 Conceptos Aplicados</h4>
                <ul>
                  <li>Integración React con APIs REST</li>
                  <li>Operaciones CRUD completas</li>
                  <li>Gestión de estado local y global</li>
                  <li>Manejo de formularios dinámicos</li>
                  <li>Validación de datos</li>
                  <li>Estados de carga y error</li>
                  <li>Patrones de diseño en React</li>
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
              <h3>Código de React + API + CRUD</h3>
              <button onClick={() => setShowCode(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="code-section">
                <h4>Interfaces TypeScript</h4>
                <pre className="code-block">
{`// Definir interfaces para tipado
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Estado del componente
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [editingUser, setEditingUser] = useState<User | null>(null);`}
                </pre>
              </div>

              <div className="code-section">
                <h4>Operaciones CRUD</h4>
                <pre className="code-block">
{`// CREATE - Crear usuario
const createUser = async () => {
  setLoading(true);
  setError(null);
  try {
    const newUser: User = {
      id: Date.now(),
      ...formData
    };
    const response = await simulateApiCall(newUser);
    setUsers(prev => [...prev, response.data]);
    setSuccessMessage('Usuario creado exitosamente');
  } catch (err) {
    setError('Error al crear usuario');
  } finally {
    setLoading(false);
  }
};

// READ - Obtener usuarios
const fetchUsers = async () => {
  setLoading(true);
  try {
    const response = await simulateApiCall(usersData);
    setUsers(response.data);
  } catch (err) {
    setError('Error al cargar usuarios');
  } finally {
    setLoading(false);
  }
};

// UPDATE - Actualizar usuario
const updateUser = async () => {
  if (!editingUser) return;
  setLoading(true);
  try {
    const response = await simulateApiCall(editingUser);
    setUsers(prev => prev.map(user => 
      user.id === editingUser.id ? response.data : user
    ));
    setEditingUser(null);
  } catch (err) {
    setError('Error al actualizar usuario');
  } finally {
    setLoading(false);
  }
};

// DELETE - Eliminar usuario
const deleteUser = async (id: number) => {
  setLoading(true);
  try {
    await simulateApiCall(null);
    setUsers(prev => prev.filter(user => user.id !== id));
  } catch (err) {
    setError('Error al eliminar usuario');
  } finally {
    setLoading(false);
  }
};`}
                </pre>
              </div>

              <div className="code-section">
                <h4>Simulación de API</h4>
                <pre className="code-block">
{`// Función para simular llamadas API
const simulateApiCall = async <T,>(
  data: T, 
  delay: number = 1000
): Promise<ApiResponse<T>> => {
  setApiCalls(prev => prev + 1);
  await new Promise(resolve => setTimeout(resolve, delay));
  
  return {
    data,
    status: 200,
    message: 'Operación exitosa'
  };
};

// Uso con APIs reales
const fetchUsersReal = async () => {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    setError('Error al cargar usuarios');
  }
};`}
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

export default ReactApiCrudShowcase;
