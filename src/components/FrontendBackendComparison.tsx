import React, { useState } from 'react';
import { Monitor, Server, Code, Database, Palette, Shield, Zap, Users } from 'lucide-react';
import './FrontendBackendComparison.css';

interface ComparisonItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  focus: string[];
  color: string;
}

const frontendData: ComparisonItem = {
  icon: <Monitor className="comparison-icon" />,
  title: 'Frontend',
  description: 'La cara visible de la aplicación web',
  technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'TypeScript'],
  focus: [
    'Experiencia de usuario',
    'Diseño responsivo',
    'Accesibilidad',
    'Interactividad',
    'Rendimiento visual'
  ],
  color: '#4ecdc4'
};

const backendData: ComparisonItem = {
  icon: <Server className="comparison-icon" />,
  title: 'Backend',
  description: 'El motor que impulsa la aplicación',
  technologies: ['Node.js', 'Python', 'Java', 'PHP', 'PostgreSQL', 'MongoDB', 'Redis'],
  focus: [
    'Rendimiento',
    'Seguridad',
    'Escalabilidad',
    'Persistencia de datos',
    'Lógica de negocio'
  ],
  color: '#ff6b6b'
};

const FrontendBackendComparison: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'frontend' | 'backend' | 'both'>('both');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const renderComparisonCard = (data: ComparisonItem, side: 'frontend' | 'backend') => {
    const isActive = activeSide === side || activeSide === 'both';
    
    return (
      <div 
        className={`comparison-card ${side} ${isActive ? 'active' : ''}`}
        style={{ '--card-color': data.color } as React.CSSProperties}
        onClick={() => setActiveSide(side)}
      >
        <div className="card-header">
          <div className="card-icon" style={{ backgroundColor: data.color }}>
            {data.icon}
          </div>
          <div className="card-title">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </div>

        <div className="card-content">
          <div className="technologies-section">
            <h4>
              {side === 'frontend' ? <Code className="section-icon" /> : <Database className="section-icon" />}
              Tecnologías
            </h4>
            <div className="tech-grid">
              {data.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`tech-item ${hoveredTech === tech ? 'hovered' : ''}`}
                  style={{ 
                    '--tech-color': data.color,
                    animationDelay: `${index * 0.1}s`
                  } as React.CSSProperties}
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="focus-section">
            <h4>
              {side === 'frontend' ? <Palette className="section-icon" /> : <Shield className="section-icon" />}
              Enfoque
            </h4>
            <ul className="focus-list">
              {data.focus.map((item, index) => (
                <li key={index} className="focus-item">
                  <span 
                    className="focus-bullet" 
                    style={{ backgroundColor: data.color }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="frontend-backend-comparison">
      <div className="comparison-header">
        <h2>Frontend vs Backend</h2>
        <p>Dos caras de la misma moneda en el desarrollo web</p>
        
        <div className="comparison-controls">
          <button 
            className={`control-btn ${activeSide === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveSide('frontend')}
          >
            <Monitor />
            Frontend
          </button>
          <button 
            className={`control-btn ${activeSide === 'both' ? 'active' : ''}`}
            onClick={() => setActiveSide('both')}
          >
            <Zap />
            Ambos
          </button>
          <button 
            className={`control-btn ${activeSide === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveSide('backend')}
          >
            <Server />
            Backend
          </button>
        </div>
      </div>

      <div className="comparison-container">
        {renderComparisonCard(frontendData, 'frontend')}
        
        <div className="comparison-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">
            <Users />
          </div>
          <div className="divider-text">
            <span>Comunicación</span>
            <span>Eficiente</span>
          </div>
        </div>
        
        {renderComparisonCard(backendData, 'backend')}
      </div>

      <div className="comparison-footer">
        <div className="communication-flow">
          <h3>Flujo de Comunicación</h3>
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="step-icon">
                <Users />
              </div>
              <span>Usuario</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">
                <Monitor />
              </div>
              <span>Frontend</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">
                <Server />
              </div>
              <span>Backend</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">
                <Database />
              </div>
              <span>Base de Datos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendBackendComparison;
