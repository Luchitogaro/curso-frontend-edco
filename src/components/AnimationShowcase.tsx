import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Zap, RotateCcw, Move, Play, Code, Monitor } from 'lucide-react';
import './AnimationShowcase.css';

interface AnimationExample {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  properties: string[];
  useCases: string[];
  codeExample?: string;
  demo?: React.ReactNode;
}

const animationExamples: AnimationExample[] = [
  {
    id: 'transitions-basic',
    name: 'Transiciones Básicas',
    description: 'Efectos suaves entre estados',
    icon: <Zap className="feature-icon" />,
    color: '#e74c3c',
    properties: ['transition', 'transition-property', 'transition-duration', 'transition-timing-function'],
    useCases: ['Efectos hover', 'Cambios de color', 'Transformaciones suaves'],
    codeExample: `.button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button:active {
  transform: translateY(0);
}`,
    demo: (
      <div className="transition-demo">
        <button className="demo-button">Hover me!</button>
      </div>
    )
  },
  {
    id: 'keyframes-basic',
    name: 'Animaciones Keyframes',
    description: 'Animaciones complejas con @keyframes',
    icon: <RotateCcw className="feature-icon" />,
    color: '#3498db',
    properties: ['@keyframes', 'animation-name', 'animation-duration', 'animation-iteration-count'],
    useCases: ['Loading spinners', 'Efectos de entrada', 'Animaciones continuas'],
    codeExample: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animated-element {
  animation: fadeInUp 0.6s ease-out;
}

.pulsing-element {
  animation: pulse 2s infinite;
}`,
    demo: (
      <div className="keyframes-demo">
        <div className="demo-fade-in">Fade In Up</div>
        <div className="demo-pulse">Pulse Effect</div>
      </div>
    )
  },
  {
    id: 'transforms-3d',
    name: 'Transformaciones 3D',
    description: 'Efectos de profundidad y rotación',
    icon: <Move className="feature-icon" />,
    color: '#9b59b6',
    properties: ['transform', 'perspective', 'transform-style', 'backface-visibility'],
    useCases: ['Tarjetas 3D', 'Efectos de flip', 'Galerías interactivas'],
    codeExample: `.card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
}

.card-front {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card-back {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  transform: rotateY(180deg);
}

.card-3d:hover {
  transform: rotateY(180deg);
}`,
    demo: (
      <div className="transform-3d-demo">
        <div className="demo-card-3d">
          <div className="demo-card-front">Front</div>
          <div className="demo-card-back">Back</div>
        </div>
      </div>
    )
  },
  {
    id: 'hover-effects',
    name: 'Efectos Hover Avanzados',
    description: 'Interacciones complejas al pasar el mouse',
    icon: <Zap className="feature-icon" />,
    color: '#f39c12',
    properties: [':hover', ':focus', ':active', 'transform', 'filter'],
    useCases: ['Galerías de imágenes', 'Botones interactivos', 'Tarjetas de producto'],
    codeExample: `.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(52,152,219,0.9), rgba(155,89,182,0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s;
}

.gallery-item:hover {
  transform: translateY(-10px) rotate(2deg);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}`,
    demo: (
      <div className="hover-effects-demo">
        <div className="demo-gallery-item">
          <div className="demo-image">Image</div>
          <div className="demo-overlay">Hover Effect</div>
        </div>
      </div>
    )
  },
  {
    id: 'loading-animations',
    name: 'Animaciones de Carga',
    description: 'Spinners y efectos de loading',
    icon: <RotateCcw className="feature-icon" />,
    color: '#2ecc71',
    properties: ['animation-delay', 'animation-fill-mode', 'animation-direction', 'animation-play-state'],
    useCases: ['Loading states', 'Skeleton screens', 'Progress indicators'],
    codeExample: `.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.skeleton-loading {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}`,
    demo: (
      <div className="loading-animations-demo">
        <div className="demo-spinner"></div>
        <div className="demo-skeleton"></div>
        <div className="demo-progress">
          <div className="demo-progress-fill"></div>
        </div>
      </div>
    )
  }
];

const AnimationShowcase: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<AnimationExample | null>(null);
  const [activeTab, setActiveTab] = useState<'properties' | 'usecases' | 'code' | 'demo'>('properties');

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedExample) {
          setSelectedExample(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedExample]);

  const openExampleDetails = (example: AnimationExample) => {
    setSelectedExample(example);
    setActiveTab('properties');
  };

  const closeExampleDetails = () => {
    setSelectedExample(null);
  };

  return (
    <div className="animation-showcase">
      <div className="showcase-header">
        <h2>Animaciones y Transiciones CSS</h2>
        <p>Domina las técnicas de animación modernas para crear interfaces dinámicas y atractivas</p>
      </div>

      <div className="examples-grid">
        {animationExamples.map((example, index) => (
          <div
            key={example.id}
            className="example-card"
            style={{ 
              '--example-color': example.color,
              animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
            onClick={() => openExampleDetails(example)}
          >
            <div className="example-header">
              <div className="example-icon-container" style={{ backgroundColor: example.color }}>
                {example.icon}
              </div>
              <div className="example-info">
                <h3>{example.name}</h3>
                <p>{example.description}</p>
              </div>
            </div>

            <div className="example-preview">
              <div className="properties-preview">
                {example.properties.slice(0, 3).map((property, idx) => (
                  <span key={idx} className="property-tag">
                    {property}
                  </span>
                ))}
                {example.properties.length > 3 && (
                  <span className="more-properties">+{example.properties.length - 3} más</span>
                )}
              </div>
            </div>

            <div className="example-actions">
              <button className="learn-more-btn" style={{ backgroundColor: example.color }}>
                <Play className="btn-icon" />
                Explorar
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedExample && createPortal(
        <div className="example-modal-overlay" onClick={closeExampleDetails}>
          <div className="example-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon" style={{ backgroundColor: selectedExample.color }}>
                {selectedExample.icon}
              </div>
              <div className="modal-title">
                <h2>{selectedExample.name}</h2>
                <p>{selectedExample.description}</p>
              </div>
              <button className="close-btn" onClick={closeExampleDetails}>×</button>
            </div>

            <div className="modal-tabs">
              <button 
                className={`tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
                onClick={() => setActiveTab('properties')}
              >
                Propiedades
              </button>
              <button 
                className={`tab-btn ${activeTab === 'usecases' ? 'active' : ''}`}
                onClick={() => setActiveTab('usecases')}
              >
                Casos de Uso
              </button>
              <button 
                className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                Código
              </button>
              {selectedExample.demo && (
                <button 
                  className={`tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('demo')}
                >
                  Demo
                </button>
              )}
            </div>

            <div className="modal-content">
              {activeTab === 'properties' && (
                <div className="properties-content">
                  <h3>Propiedades CSS</h3>
                  <div className="properties-grid">
                    {selectedExample.properties.map((property, index) => (
                      <div key={index} className="property-item">
                        <Code className="property-icon" />
                        <code>{property}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'usecases' && (
                <div className="usecases-content">
                  <h3>Casos de Uso</h3>
                  <ul className="usecases-list">
                    {selectedExample.useCases.map((useCase, index) => (
                      <li key={index} className="usecase-item">
                        <Monitor className="usecase-icon" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'code' && selectedExample.codeExample && (
                <div className="code-content">
                  <h3>Ejemplo de Código</h3>
                  <div className="code-block">
                    <pre><code>{selectedExample.codeExample}</code></pre>
                  </div>
                </div>
              )}

              {activeTab === 'demo' && selectedExample.demo && (
                <div className="demo-content">
                  <h3>Demostración en Vivo</h3>
                  <div className="demo-container">
                    {selectedExample.demo}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default AnimationShowcase;










