import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Users, Brain, Code, Database, Smartphone } from 'lucide-react';
import './WebEvolutionTimeline.css';

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 'web1',
    period: '1991-2004',
    title: 'Web 1.0',
    description: 'La era de las páginas estáticas',
    technologies: ['HTML', 'CSS', 'Tablas', 'Frames'],
    icon: <Globe className="timeline-icon" />,
    color: '#ff6b6b',
    features: [
      'Páginas estáticas con contenido unidireccional',
      'Documentos HTML básicos',
      'Poca interactividad',
      'Diseños basados en tablas',
      'Navegación por enlaces simples'
    ]
  },
  {
    id: 'web2',
    period: '2004-2016',
    title: 'Web 2.0',
    description: 'La web social e interactiva',
    technologies: ['AJAX', 'jQuery', 'PHP', 'MySQL', 'JavaScript'],
    icon: <Users className="timeline-icon" />,
    color: '#4ecdc4',
    features: [
      'Aplicaciones web dinámicas',
      'Contenido generado por usuarios',
      'Redes sociales y blogs',
      'APIs y servicios web',
      'Interactividad en tiempo real'
    ]
  },
  {
    id: 'web3',
    period: '2016-Actualidad',
    title: 'Web 3.0',
    description: 'Web semántica y descentralizada',
    technologies: ['React', 'Vue', 'Angular', 'PWA', 'Blockchain', 'AI'],
    icon: <Brain className="timeline-icon" />,
    color: '#45b7d1',
    features: [
      'Aplicaciones web progresivas (PWA)',
      'Tecnologías blockchain',
      'Inteligencia artificial',
      'Realidad aumentada/virtual',
      'Web semántica y descentralizada'
    ]
  }
];

const WebEvolutionTimeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const nextItem = () => {
    setActiveItem((prev) => (prev + 1) % timelineData.length);
  };

  const prevItem = () => {
    setActiveItem((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  const currentItem = timelineData[activeItem];

  return (
    <div className="web-evolution-timeline">
      <div className="timeline-header">
        <h2>Evolución del Desarrollo Web</h2>
        <p>Explora las diferentes eras de la web y sus características</p>
      </div>

      <div className="timeline-navigation">
        <button onClick={prevItem} className="nav-button">
          <ChevronLeft />
        </button>
        
        <div className="timeline-dots">
          {timelineData.map((item, index) => (
            <button
              key={item.id}
              className={`timeline-dot ${index === activeItem ? 'active' : ''}`}
              onClick={() => setActiveItem(index)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ '--dot-color': item.color } as React.CSSProperties}
            >
              <span className="dot-period">{item.period}</span>
            </button>
          ))}
        </div>
        
        <button onClick={nextItem} className="nav-button">
          <ChevronRight />
        </button>
      </div>

      <div className="timeline-content">
        <div className="timeline-card" style={{ '--card-color': currentItem.color } as React.CSSProperties}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: currentItem.color }}>
              {currentItem.icon}
            </div>
            <div className="card-title">
              <h3>{currentItem.title}</h3>
              <span className="card-period">{currentItem.period}</span>
            </div>
          </div>
          
          <div className="card-description">
            <p>{currentItem.description}</p>
          </div>

          <div className="card-technologies">
            <h4>Tecnologías Principales</h4>
            <div className="tech-tags">
              {currentItem.technologies.map((tech, index) => (
                <span key={index} className="tech-tag" style={{ backgroundColor: currentItem.color }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="card-features">
            <h4>Características</h4>
            <ul className="features-list">
              {currentItem.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-bullet" style={{ backgroundColor: currentItem.color }}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline-stats">
        <div className="stat-item">
          <Code className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">1.9B+</span>
            <span className="stat-label">Sitios Web Activos</span>
          </div>
        </div>
        <div className="stat-item">
          <Database className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">4.9B+</span>
            <span className="stat-label">Usuarios de Internet</span>
          </div>
        </div>
        <div className="stat-item">
          <Smartphone className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">60%</span>
            <span className="stat-label">Tráfico Móvil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebEvolutionTimeline;
