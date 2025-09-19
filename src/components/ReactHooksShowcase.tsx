import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Code, X, Plus, Minus, RefreshCw, Clock } from 'lucide-react';
import './ReactHooksShowcase.css';

const ReactHooksShowcase: React.FC = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<{id: number, text: string, completed: boolean}>>([]);
  const [newTodo, setNewTodo] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const renderCountRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // useEffect para document title
  useEffect(() => {
    document.title = `Contador: ${count}`;
    return () => {
      document.title = 'React Hooks Showcase';
    };
  }, [count]);

  // Incrementar render count en cada render
  renderCountRef.current += 1;

  // useEffect para timer
  useEffect(() => {
    if (count > 0) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [count]);

  // useCallback para funciones optimizadas
  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  }, [newTodo]);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  // useMemo para cálculos costosos
  const completedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed).length;
  }, [todos]);

  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  const completionPercentage = useMemo(() => {
    return totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;
  }, [completedTodos, totalTodos]);

  // Escape key functionality
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDetails(false);
        setShowCode(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="react-hooks-showcase">
      <div className="showcase-header">
        <h2>⚛️ React - Hooks y Estado</h2>
        <p>Demostración interactiva de React Hooks: useState, useEffect, useCallback, useMemo y useRef</p>
        
        <div className="showcase-stats">
          <div className="stat-item">
            <span className="stat-number">{renderCountRef.current}</span>
            <span className="stat-label">Renders</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{count}</span>
            <span className="stat-label">Contador</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{completionPercentage}%</span>
            <span className="stat-label">Completado</span>
          </div>
        </div>
      </div>

      <div className="hooks-demo">
        {/* useState Demo */}
        <div className="demo-section">
          <h3>useState - Estado Local</h3>
          <div className="counter-demo">
            <div className="counter-display">
              <span className="counter-value">{count}</span>
              <span className="counter-label">Contador</span>
            </div>
            <div className="counter-controls">
              <button onClick={() => setCount(prev => prev + 1)} className="counter-btn">
                <Plus size={16} />
              </button>
              <button onClick={() => setCount(prev => prev - 1)} className="counter-btn">
                <Minus size={16} />
              </button>
              <button onClick={() => setCount(0)} className="counter-btn reset">
                <RefreshCw size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* useEffect Demo */}
        <div className="demo-section">
          <h3>useEffect - Efectos Secundarios</h3>
          <div className="effect-demo">
            <div className="effect-info">
              <p>El título de la página cambia con el contador</p>
              <p>Timer automático cuando el contador es mayor a 0</p>
              <p>Cleanup automático al desmontar</p>
            </div>
            <div className="timer-display">
              <Clock size={20} />
              <span>Timer activo: {count > 0 ? 'Sí' : 'No'}</span>
            </div>
          </div>
        </div>

        {/* useCallback Demo */}
        <div className="demo-section">
          <h3>useCallback - Optimización de Funciones</h3>
          <div className="todo-demo">
            <div className="todo-input">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Nueva tarea..."
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              />
              <button onClick={addTodo} className="add-todo-btn">
                <Plus size={16} />
                Agregar
              </button>
            </div>
            
            <div className="todo-stats">
              <div className="stat">
                <span className="stat-number">{totalTodos}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat">
                <span className="stat-number">{completedTodos}</span>
                <span className="stat-label">Completadas</span>
              </div>
              <div className="stat">
                <span className="stat-number">{completionPercentage}%</span>
                <span className="stat-label">Progreso</span>
              </div>
            </div>

            <div className="todos-list">
              {todos.map(todo => (
                <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="todo-text">{todo.text}</span>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* useMemo Demo */}
        <div className="demo-section">
          <h3>useMemo - Optimización de Cálculos</h3>
          <div className="memo-demo">
            <div className="memo-info">
              <p>Los cálculos de estadísticas se memorizan y solo se recalculan cuando cambian las dependencias</p>
              <div className="memo-stats">
                <div className="memo-stat">
                  <strong>Tareas Completadas:</strong> {completedTodos}
                </div>
                <div className="memo-stat">
                  <strong>Total de Tareas:</strong> {totalTodos}
                </div>
                <div className="memo-stat">
                  <strong>Porcentaje:</strong> {completionPercentage}%
                </div>
              </div>
            </div>
          </div>
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
              <h3>Detalles Técnicos - React Hooks</h3>
              <button onClick={() => setShowDetails(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-section">
                <h4>🎯 Hooks Implementados</h4>
                <ul>
                  <li><strong>useState:</strong> Gestión de estado local</li>
                  <li><strong>useEffect:</strong> Efectos secundarios y lifecycle</li>
                  <li><strong>useCallback:</strong> Optimización de funciones</li>
                  <li><strong>useMemo:</strong> Optimización de cálculos</li>
                  <li><strong>useRef:</strong> Referencias imperativas</li>
                </ul>
              </div>
              
              <div className="tech-section">
                <h4>🛠️ Funcionalidades</h4>
                <ul>
                  <li>Contador con estado local</li>
                  <li>Timer automático con cleanup</li>
                  <li>Lista de tareas con CRUD completo</li>
                  <li>Cálculos optimizados con useMemo</li>
                  <li>Funciones optimizadas con useCallback</li>
                  <li>Contador de renders en tiempo real</li>
                </ul>
              </div>

              <div className="tech-section">
                <h4>📚 Conceptos Aplicados</h4>
                <ul>
                  <li>Estado local y global</li>
                  <li>Ciclo de vida de componentes</li>
                  <li>Optimización de rendimiento</li>
                  <li>Cleanup de efectos secundarios</li>
                  <li>Dependencias en hooks</li>
                  <li>Referencias imperativas</li>
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
              <h3>Código de React Hooks</h3>
              <button onClick={() => setShowCode(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="code-section">
                <h4>useState - Estado Local</h4>
                <pre className="code-block">
{`// Estado local con useState
const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);
const [name, setName] = useState('');

// Actualizar estado
const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);
const reset = () => setCount(0);

// Estado complejo
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});

// Actualizar estado complejo
const updateUser = (field, value) => {
  setUser(prev => ({ ...prev, [field]: value }));
};`}
                </pre>
              </div>

              <div className="code-section">
                <h4>useEffect - Efectos Secundarios</h4>
                <pre className="code-block">
{`// useEffect básico
useEffect(() => {
  document.title = \`Contador: \${count}\`;
}, [count]);

// useEffect con cleanup
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [count]);

// useEffect para montaje
useEffect(() => {
  console.log('Componente montado');
  return () => console.log('Componente desmontado');
}, []);

// useEffect para cada render
useEffect(() => {
  setRenderCount(prev => prev + 1);
});`}
                </pre>
              </div>

              <div className="code-section">
                <h4>useCallback y useMemo</h4>
                <pre className="code-block">
{`// useCallback para optimizar funciones
const addTodo = useCallback(() => {
  if (newTodo.trim()) {
    setTodos(prev => [...prev, {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    }]);
    setNewTodo('');
  }
}, [newTodo]);

// useMemo para optimizar cálculos
const completedTodos = useMemo(() => {
  return todos.filter(todo => todo.completed).length;
}, [todos]);

const completionPercentage = useMemo(() => {
  return totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;
}, [completedTodos, totalTodos]);

// useRef para referencias
const intervalRef = useRef(null);

useEffect(() => {
  intervalRef.current = setInterval(() => {
    // lógica del timer
  }, 1000);

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, []);`}
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

export default ReactHooksShowcase;
