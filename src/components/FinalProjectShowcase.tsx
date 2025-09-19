import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Code, X, Play, Pause, RotateCcw, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import './FinalProjectShowcase.css';

interface ProjectStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  duration: string;
  technologies: string[];
}

const FinalProjectShowcase: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [projectProgress, setProjectProgress] = useState(0);

  const projectSteps: ProjectStep[] = [
    {
      id: 1,
      title: "Planificación y Diseño",
      description: "Definir requisitos, crear wireframes y diseñar la arquitectura de la aplicación",
      completed: false,
      duration: "2 horas",
      technologies: ["Figma", "Draw.io", "Documentación"]
    },
    {
      id: 2,
      title: "Configuración del Proyecto",
      description: "Crear estructura de carpetas, configurar herramientas de desarrollo y dependencias",
      completed: false,
      duration: "1 hora",
      technologies: ["React", "TypeScript", "Vite", "ESLint"]
    },
    {
      id: 3,
      title: "Componentes Base",
      description: "Desarrollar componentes reutilizables y sistema de diseño",
      completed: false,
      duration: "3 horas",
      technologies: ["React", "CSS3", "Styled Components"]
    },
    {
      id: 4,
      title: "Estado y Datos",
      description: "Implementar gestión de estado y conexión con APIs",
      completed: false,
      duration: "2 horas",
      technologies: ["Context API", "useReducer", "Fetch API"]
    },
    {
      id: 5,
      title: "Routing y Navegación",
      description: "Configurar rutas y navegación entre páginas",
      completed: false,
      duration: "1.5 horas",
      technologies: ["React Router", "Navigation"]
    },
    {
      id: 6,
      title: "Funcionalidades Core",
      description: "Desarrollar las funcionalidades principales de la aplicación",
      completed: false,
      duration: "4 horas",
      technologies: ["React Hooks", "JavaScript", "APIs"]
    },
    {
      id: 7,
      title: "Testing y Optimización",
      description: "Implementar tests y optimizar rendimiento",
      completed: false,
      duration: "2 horas",
      technologies: ["Jest", "React Testing Library", "Performance"]
    },
    {
      id: 8,
      title: "Deployment",
      description: "Configurar y desplegar la aplicación en producción",
      completed: false,
      duration: "1.5 horas",
      technologies: ["Vercel", "Netlify", "GitHub Pages"]
    }
  ];

  const totalSteps = projectSteps.length;
  const completedSteps = projectSteps.filter(step => step.completed).length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  // Simulación de progreso del proyecto
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentStep < totalSteps) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          const nextStep = prev + 1;
          if (nextStep < totalSteps) {
            // Marcar el paso actual como completado
            setProjectProgress(prev => prev + (100 / totalSteps));
            return nextStep;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentStep, totalSteps]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetProject = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setProjectProgress(0);
  };

  const completeStep = (stepId: number) => {
    // Simular completar un paso
    setProjectProgress(prev => prev + (100 / totalSteps));
  };

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
    <div className="final-project-showcase">
      <div className="showcase-header">
        <h2>🚀 Taller Integrador Final</h2>
        <p>Simulación interactiva del desarrollo completo de una aplicación web moderna</p>
        
        <div className="showcase-stats">
          <div className="stat-item">
            <span className="stat-number">{completedSteps}</span>
            <span className="stat-label">Completados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalSteps}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{progressPercentage}%</span>
            <span className="stat-label">Progreso</span>
          </div>
        </div>
      </div>

      <div className="project-simulation">
        <div className="project-controls">
          <button 
            onClick={togglePlayPause}
            className={`control-btn ${isPlaying ? 'pause' : 'play'}`}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? 'Pausar' : 'Iniciar'} Simulación
          </button>
          
          <button 
            onClick={resetProject}
            className="control-btn reset"
          >
            <RotateCcw size={16} />
            Reiniciar
          </button>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${projectProgress}%` }}
          />
        </div>

        <div className="project-steps">
          {projectSteps.map((step, index) => (
            <div 
              key={step.id} 
              className={`project-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
            >
              <div className="step-header">
                <div className="step-number">
                  {index < currentStep ? <CheckCircle size={20} /> : step.id}
                </div>
                <div className="step-info">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="step-meta">
                  <span className="step-duration">
                    <Clock size={14} />
                    {step.duration}
                  </span>
                </div>
              </div>
              
              <div className="step-technologies">
                {step.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              
              {index === currentStep && (
                <div className="step-status">
                  <div className="status-indicator">
                    <div className="pulse-dot" />
                    <span>En progreso...</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="project-summary">
        <h3>Resumen del Proyecto</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <h4>🎯 Objetivo</h4>
            <p>Desarrollar una aplicación web completa que integre todas las tecnologías aprendidas durante el curso</p>
          </div>
          <div className="summary-item">
            <h4>⏱️ Duración Total</h4>
            <p>17 horas de desarrollo distribuido en 8 fases</p>
          </div>
          <div className="summary-item">
            <h4>🛠️ Tecnologías</h4>
            <p>React, TypeScript, CSS3, APIs REST, Testing, Deployment</p>
          </div>
          <div className="summary-item">
            <h4>📦 Entregables</h4>
            <p>Código fuente, documentación, aplicación desplegada y presentación</p>
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
              <h3>Detalles Técnicos - Proyecto Final</h3>
              <button onClick={() => setShowDetails(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="tech-section">
                <h4>🎯 Fases del Proyecto</h4>
                <ul>
                  <li><strong>Planificación:</strong> Análisis de requisitos y diseño UX/UI</li>
                  <li><strong>Setup:</strong> Configuración del entorno de desarrollo</li>
                  <li><strong>Componentes:</strong> Desarrollo de componentes reutilizables</li>
                  <li><strong>Estado:</strong> Implementación de gestión de estado</li>
                  <li><strong>Routing:</strong> Configuración de navegación</li>
                  <li><strong>Features:</strong> Desarrollo de funcionalidades core</li>
                  <li><strong>Testing:</strong> Implementación de tests y optimización</li>
                  <li><strong>Deploy:</strong> Despliegue en producción</li>
                </ul>
              </div>
              
              <div className="tech-section">
                <h4>🛠️ Stack Tecnológico</h4>
                <ul>
                  <li><strong>Frontend:</strong> React 18, TypeScript, CSS3</li>
                  <li><strong>Estado:</strong> Context API, useReducer, Custom Hooks</li>
                  <li><strong>Routing:</strong> React Router v6</li>
                  <li><strong>APIs:</strong> Fetch API, RESTful services</li>
                  <li><strong>Testing:</strong> Jest, React Testing Library</li>
                  <li><strong>Deployment:</strong> Vercel, Netlify, GitHub Pages</li>
                </ul>
              </div>

              <div className="tech-section">
                <h4>📚 Competencias Desarrolladas</h4>
                <ul>
                  <li>Desarrollo de aplicaciones React completas</li>
                  <li>Gestión de estado global y local</li>
                  <li>Integración con APIs REST</li>
                  <li>Testing y debugging</li>
                  <li>Optimización de rendimiento</li>
                  <li>Deployment y CI/CD</li>
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
              <h3>Código del Proyecto Final</h3>
              <button onClick={() => setShowCode(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="code-section">
                <h4>Estructura del Proyecto</h4>
                <pre className="code-block">
{`proyecto-final/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── Forms/
│   │   ├── Navigation/
│   │   └── UI/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useApi.ts
│   │   ├── useAuth.ts
│   │   └── useLocalStorage.ts
│   ├── context/
│   │   ├── AppContext.tsx
│   │   └── AuthContext.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── utils/
│   │   ├── helpers.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       ├── globals.css
│       └── components/
├── tests/
│   ├── components/
│   └── utils/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md`}
                </pre>
              </div>

              <div className="code-section">
                <h4>Componente Principal</h4>
                <pre className="code-block">
{`// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <Layout>
            <Routes />
          </Layout>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;`}
                </pre>
              </div>

              <div className="code-section">
                <h4>Context Global</h4>
                <pre className="code-block">
{`// context/AppContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  loading: boolean;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_LOADING'; payload: boolean };

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
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

export default FinalProjectShowcase;
