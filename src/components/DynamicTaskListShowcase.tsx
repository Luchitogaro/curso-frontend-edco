import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Plus, Trash2, Edit, Check, X, Eye, Code } from 'lucide-react';
import './DynamicTaskListShowcase.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const DynamicTaskListShowcase: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Aprender HTML5 semántico', completed: false, priority: 'high' },
    { id: 2, text: 'Practicar CSS Grid y Flexbox', completed: true, priority: 'medium' },
    { id: 3, text: 'Crear formularios interactivos', completed: false, priority: 'low' }
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        priority: selectedPriority
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEdit = (task: Task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const saveEdit = () => {
    if (editingTask && editText.trim()) {
      setTasks(tasks.map(task => 
        task.id === editingTask ? { ...task, text: editText.trim() } : task
      ));
      setEditingTask(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditText('');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Alta';
      case 'medium': return 'Media';
      case 'low': return 'Baja';
      default: return 'Media';
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  // Escape key functionality
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDetails(false);
        setShowCode(false);
        if (editingTask) {
          cancelEdit();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [editingTask]);

  return (
    <div className="dynamic-task-showcase">
      <div className="showcase-header">
        <h2>📝 Lista de Tareas Dinámica</h2>
        <p>Demostración interactiva de gestión de tareas con HTML, CSS y JavaScript</p>
        
        <div className="showcase-stats">
          <div className="stat-item">
            <span className="stat-number">{totalCount}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalCount - completedCount}</span>
            <span className="stat-label">Pendientes</span>
          </div>
        </div>
      </div>

      <div className="task-management">
        <div className="add-task-section">
          <div className="input-group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Nueva tarea..."
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="task-input"
            />
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="priority-select"
            >
              <option value="low">Prioridad Baja</option>
              <option value="medium">Prioridad Media</option>
              <option value="high">Prioridad Alta</option>
            </select>
            <button onClick={addTask} className="add-button">
              <Plus size={16} />
              Agregar
            </button>
          </div>
        </div>

        <div className="tasks-list">
          {tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <div className="task-checkbox">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                </div>
                
                {editingTask === task.id ? (
                  <div className="edit-mode">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-input"
                      autoFocus
                    />
                    <div className="edit-actions">
                      <button onClick={saveEdit} className="save-btn">
                        <Check size={14} />
                      </button>
                      <button onClick={cancelEdit} className="cancel-btn">
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="task-text">
                    <span className={task.completed ? 'completed-text' : ''}>
                      {task.text}
                    </span>
                    <span 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(task.priority) }}
                    >
                      {getPriorityText(task.priority)}
                    </span>
                  </div>
                )}
              </div>
              
              {editingTask !== task.id && (
                <div className="task-actions">
                  <button onClick={() => startEdit(task)} className="edit-btn">
                    <Edit size={14} />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className="delete-btn">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="empty-state">
            <p>No hay tareas. ¡Agrega tu primera tarea!</p>
          </div>
        )}
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
              <h3>Detalles Técnicos - Lista de Tareas Dinámica</h3>
              <button onClick={() => setShowDetails(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-section">
                <h4>🎯 Funcionalidades Implementadas</h4>
                <ul>
                  <li>Agregar nuevas tareas con prioridad</li>
                  <li>Marcar tareas como completadas</li>
                  <li>Editar tareas existentes</li>
                  <li>Eliminar tareas</li>
                  <li>Sistema de prioridades (Alta, Media, Baja)</li>
                  <li>Contador de tareas completadas</li>
                </ul>
              </div>
              
              <div className="tech-section">
                <h4>🛠️ Tecnologías Utilizadas</h4>
                <ul>
                  <li><strong>HTML5:</strong> Estructura semántica, formularios</li>
                  <li><strong>CSS3:</strong> Flexbox, Grid, animaciones, responsive design</li>
                  <li><strong>JavaScript:</strong> DOM manipulation, event handling, state management</li>
                  <li><strong>React:</strong> Componentes funcionales, hooks, portals</li>
                </ul>
              </div>

              <div className="tech-section">
                <h4>📚 Conceptos Aplicados</h4>
                <ul>
                  <li>Manipulación del DOM</li>
                  <li>Event listeners y handlers</li>
                  <li>Estado local y gestión de datos</li>
                  <li>Validación de formularios</li>
                  <li>Responsive design</li>
                  <li>Accesibilidad web</li>
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
              <h3>Código de la Lista de Tareas</h3>
              <button onClick={() => setShowCode(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="code-section">
                <h4>HTML Structure</h4>
                <pre className="code-block">
{`<div class="task-management">
  <div class="add-task-section">
    <input type="text" placeholder="Nueva tarea..." />
    <select>
      <option value="low">Prioridad Baja</option>
      <option value="medium">Prioridad Media</option>
      <option value="high">Prioridad Alta</option>
    </select>
    <button>Agregar</button>
  </div>
  
  <div class="tasks-list">
    <div class="task-item">
      <input type="checkbox" />
      <span class="task-text">Tarea ejemplo</span>
      <span class="priority-badge">Alta</span>
      <div class="task-actions">
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Eliminar</button>
      </div>
    </div>
  </div>
</div>`}
                </pre>
              </div>

              <div className="code-section">
                <h4>JavaScript Functionality</h4>
                <pre className="code-block">
{`// Agregar nueva tarea
function addTask() {
  const taskText = document.getElementById('task-input').value;
  const priority = document.getElementById('priority-select').value;
  
  if (taskText.trim()) {
    const task = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      priority: priority
    };
    
    tasks.push(task);
    renderTasks();
    document.getElementById('task-input').value = '';
  }
}

// Toggle completado
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  renderTasks();
}

// Eliminar tarea
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Renderizar tareas
function renderTasks() {
  const tasksList = document.getElementById('tasks-list');
  tasksList.innerHTML = '';
  
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
  });
}`}
                </pre>
              </div>

              <div className="code-section">
                <h4>CSS Styling</h4>
                <pre className="code-block">
{`.task-management {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  background: white;
  transition: all 0.2s ease;
}

.task-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.task-item.completed {
  opacity: 0.7;
  background: #f9fafb;
}

.priority-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
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

export default DynamicTaskListShowcase;
