import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Target, 
  BookOpen, 
  Code, 
  CheckCircle, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Eye,
  EyeOff,
  Copy,
  Check,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { getSessionById } from '../data/sessionsData';
import ProgressTracker from '../components/ProgressTracker';
import WebEvolutionTimeline from '../components/WebEvolutionTimeline';
import FrontendBackendComparison from '../components/FrontendBackendComparison';
import ToolsShowcase from '../components/ToolsShowcase';
import HTML5Showcase from '../components/HTML5Showcase';
import HTML5AdvancedShowcase from '../components/HTML5AdvancedShowcase';
import CSS3Showcase from '../components/CSS3Showcase';
import HTMLWorkshopShowcase from '../components/HTMLWorkshopShowcase';
import LayoutShowcase from '../components/LayoutShowcase';
import JavaScriptShowcase from '../components/JavaScriptShowcase';
import JavaScriptFundamentalsShowcase from '../components/JavaScriptFundamentalsShowcase';
import ReactShowcase from '../components/ReactShowcase';
import ReactRouterShowcase from '../components/ReactRouterShowcase';
import DynamicTaskListShowcase from '../components/DynamicTaskListShowcase';
import ApiShowcase from '../components/ApiShowcase';
import ReactHooksShowcase from '../components/ReactHooksShowcase';
import ReactContextShowcase from '../components/ReactContextShowcase';
import ReactApiCrudShowcase from '../components/ReactApiCrudShowcase';
import FinalProjectShowcase from '../components/FinalProjectShowcase';

const Session: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const sessionId = parseInt(id || '1');
  const session = getSessionById(sessionId);
  const [showSolutions, setShowSolutions] = useState<{ [key: number]: boolean }>({});
  const [copiedCode, setCopiedCode] = useState<{ [key: number]: boolean }>({});
  const [expandedDetails, setExpandedDetails] = useState<{ [key: string]: boolean }>({});

  const toggleDetail = (concept: string) => {
    setExpandedDetails(prev => ({
      ...prev,
      [concept]: !prev[concept]
    }));
  };

  if (!session) {
    return (
      <div className="main-content">
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h1>Sesión no encontrada</h1>
          <p>La sesión que buscas no existe.</p>
          <Link to="/" style={{ 
            display: 'inline-block', 
            marginTop: '1rem',
            color: '#4f46e5',
            textDecoration: 'none'
          }}>
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (code: string, exerciseIndex: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(prev => ({ ...prev, [exerciseIndex]: true }));
      setTimeout(() => {
        setCopiedCode(prev => ({ ...prev, [exerciseIndex]: false }));
      }, 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  const toggleSolution = (exerciseIndex: number) => {
    setShowSolutions(prev => ({
      ...prev,
      [exerciseIndex]: !prev[exerciseIndex]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return '#10b981';
      case 'Intermedio': return '#f59e0b';
      case 'Intermedio-Avanzado': return '#ef4444';
      case 'Avanzado': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <div className="main-content">
      {/* Progress Tracker */}
      <ProgressTracker 
        currentSessionId={sessionId}
        onSessionComplete={(id) => console.log(`Sesión ${id} completada`)}
      />

      {/* Header de la sesión */}
      <div className="session-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <h1 className="session-title">{session.title}</h1>
            <div className="session-meta">
              <span className="session-badge" style={{ backgroundColor: getLevelColor(session.level) }}>
                {session.level}
              </span>
              <span>•</span>
              <span>{session.duration}</span>
              <span>•</span>
              <span>Sesión {session.id}</span>
            </div>
          </div>
          
          {/* Navegación entre sesiones */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {sessionId > 1 && (
              <Link 
                to={`/sesion/${sessionId - 1}`}
                onClick={scrollToTop}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: '#f3f4f6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#374151',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                <ArrowLeft size={16} />
                Anterior
              </Link>
            )}
            {sessionId < 20 && (
              <Link 
                to={`/sesion/${sessionId + 1}`}
                onClick={scrollToTop}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: '#4f46e5',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Siguiente
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="session-content">
        {/* Objetivos de Aprendizaje */}
        <div className="content-section">
          <h2 className="section-title">
            <Target size={20} color="#10b981" />
            Objetivos de Aprendizaje
          </h2>
          <ul className="objectives-list">
            {session.objectives.map((objective, index) => (
              <li key={index}>
                <div className="list-icon">✓</div>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contenido Teórico */}
        <div className="content-section">
          <h2 className="section-title">
            <BookOpen size={20} color="#4f46e5" />
            Contenido Teórico
          </h2>
          <div className="section-content">
            <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Conceptos Clave:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {session.content.theoretical.map((topic, index) => (
                <li key={index} style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#4f46e5',
                    borderRadius: '50%'
                  }} />
                  {topic}
                </li>
              ))}
            </ul>
            
            {/* Detalles Teóricos con Ejemplos - Acordeón */}
            {session.content.theoreticalDetails && (
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  📚 Explicaciones Detalladas con Ejemplos:
                </h3>
                <div style={{ 
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}>
                  {Object.entries(session.content.theoreticalDetails).map(([concept, details], index) => {
                    const isExpanded = expandedDetails[concept];
                    return (
                      <div key={index} style={{ 
                        borderBottom: index < Object.entries(session.content.theoreticalDetails!).length - 1 ? '1px solid #e2e8f0' : 'none'
                      }}>
                        {/* Header del acordeón */}
                        <button
                          onClick={() => toggleDetail(concept)}
                          style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            backgroundColor: isExpanded ? '#f1f5f9' : '#ffffff',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'background-color 0.2s ease',
                            textAlign: 'left'
                          }}
                          onMouseEnter={(e) => {
                            if (!isExpanded) {
                              e.currentTarget.style.backgroundColor = '#f8fafc';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isExpanded) {
                              e.currentTarget.style.backgroundColor = '#ffffff';
                            }
                          }}
                        >
                          <h4 style={{ 
                            color: '#1e40af', 
                            fontSize: '1rem',
                            fontWeight: '600',
                            margin: 0,
                            flex: 1
                          }}>
                            {concept}
                          </h4>
                          {isExpanded ? (
                            <ChevronDown size={20} color="#6b7280" />
                          ) : (
                            <ChevronRight size={20} color="#6b7280" />
                          )}
                        </button>
                        
                        {/* Contenido del acordeón */}
                        {isExpanded && (
                          <div style={{ 
                            padding: '0 1.5rem 1.5rem 1.5rem',
                            backgroundColor: '#f8fafc',
                            animation: 'slideDown 0.3s ease-out'
                          }}>
                            <div style={{ 
                              color: '#374151',
                              lineHeight: '1.6',
                              whiteSpace: 'pre-wrap',
                              fontSize: '0.95rem'
                            }}>
                              {details}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contenido Práctico */}
        <div className="content-section">
          <h2 className="section-title">
            <Code size={20} color="#f59e0b" />
            Contenido Práctico
          </h2>
          <div className="section-content">
            <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Actividades Hands-on:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {session.content.practical.map((activity, index) => (
                <li key={index} style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#f59e0b',
                    borderRadius: '50%'
                  }} />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actividades Detalladas */}
        <div className="content-section">
          <h2 className="section-title">
            <Clock size={20} color="#8b5cf6" />
            Actividades Detalladas
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {session.activities.map((activity, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ color: '#1f2937', fontSize: '1.125rem' }}>{activity.title}</h3>
                  <span style={{
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {activity.duration}
                  </span>
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tareas */}
        <div className="content-section">
          <h2 className="section-title">
            <CheckCircle size={20} color="#ef4444" />
            Tareas para la Próxima Sesión
          </h2>
          <ul className="homework-list">
            {session.homework.map((task, index) => (
              <li key={index}>
                <div className="list-icon">📝</div>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Materiales Necesarios */}
        <div className="content-section">
          <h2 className="section-title">
            <BookOpen size={20} color="#6b7280" />
            Materiales Necesarios
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {session.materials.map((material, index) => (
              <li key={index} style={{ 
                padding: '0.5rem 0', 
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#6b7280',
                  borderRadius: '50%'
                }} />
                {material}
              </li>
            ))}
          </ul>
        </div>

        {/* Componentes Interactivos - Movidos al final de la sesión */}

        {/* Ejercicios */}
        {session.exercises.length > 0 && (
          <div className="exercise-section">
            <h2 className="exercise-title">
              <Code size={20} />
              Ejercicios Prácticos
            </h2>
            
            {session.exercises.map((exercise, index) => (
              <div key={index} style={{ marginBottom: '2rem' }}>
                <div className="exercise-content">
                  <h3 style={{ 
                    color: '#059669', 
                    marginBottom: '1rem',
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}>
                    {exercise.title}
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {exercise.description}
                  </p>
                  
                  {exercise.code && (
                    <div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <h4 style={{ color: '#1f2937', fontSize: '0.875rem', fontWeight: '600' }}>
                          Código Base:
                        </h4>
                        <button
                          onClick={() => copyToClipboard(exercise.code || '', index)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            background: '#f3f4f6',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            padding: '0.25rem 0.5rem',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            color: '#374151'
                          }}
                        >
                          {copiedCode[index] ? <Check size={12} /> : <Copy size={12} />}
                          {copiedCode[index] ? 'Copiado' : 'Copiar'}
                        </button>
                      </div>
                      <div className="code-block">
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{exercise.code}</pre>
                      </div>
                    </div>
                  )}
                  
                  {exercise.solution && (
                    <div style={{ marginTop: '1rem' }}>
                      <button
                        onClick={() => toggleSolution(index)}
                        className="solution-button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {showSolutions[index] ? <EyeOff size={16} /> : <Eye size={16} />}
                        {showSolutions[index] ? 'Ocultar Solución' : 'Ver Solución'}
                      </button>
                      
                      {showSolutions[index] && (
                        <div style={{ marginTop: '1rem' }}>
                          <h4 style={{ 
                            color: '#059669', 
                            marginBottom: '0.5rem',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                          }}>
                            Solución:
                          </h4>
                          <div className="code-block" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#166534' }}>
                              {exercise.solution}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Components for Different Sessions - Moved to End */}
        {sessionId === 1 && (
          <>
            <WebEvolutionTimeline />
            <FrontendBackendComparison />
            <ToolsShowcase />
          </>
        )}
        
        {sessionId === 2 && (
          <>
            <HTML5Showcase />
          </>
        )}
        
        {sessionId === 3 && (
          <>
            <HTML5AdvancedShowcase />
          </>
        )}
        
        {sessionId === 4 && (
          <>
            <HTMLWorkshopShowcase />
          </>
        )}
        
        {sessionId === 5 && (
          <>
            <CSS3Showcase />
          </>
        )}
        
        {sessionId === 6 && (
          <>
            <LayoutShowcase />
          </>
        )}
        
        {sessionId === 9 && (
          <>
            <JavaScriptFundamentalsShowcase />
          </>
        )}
        
        {sessionId === 13 && (
          <>
            <DynamicTaskListShowcase />
          </>
        )}
        
        {sessionId === 14 && (
          <>
            <ApiShowcase />
          </>
        )}
        
        {sessionId === 15 && (
          <>
            <ApiShowcase />
          </>
        )}
        
        {sessionId === 16 && (
          <>
            <ReactShowcase />
          </>
        )}
        
        {sessionId === 17 && (
          <>
            <ReactHooksShowcase />
          </>
        )}
        
        {sessionId === 18 && (
          <>
            <ReactRouterShowcase />
          </>
        )}
        
        {sessionId === 19 && (
          <>
            <ReactContextShowcase />
          </>
        )}
        
        {sessionId === 20 && (
          <>
            <ReactApiCrudShowcase />
          </>
        )}
      </div>
    </div>
  );
};

export default Session;
