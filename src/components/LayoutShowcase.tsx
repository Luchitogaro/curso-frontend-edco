import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Layout, Grid, Smartphone, Monitor, Code, Play } from 'lucide-react';
import './LayoutShowcase.css';

interface LayoutExample {
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

const layoutExamples: LayoutExample[] = [
  {
    id: 'flexbox-basic',
    name: 'Flexbox Básico',
    description: 'Distribución unidimensional de elementos',
    icon: <Layout className="feature-icon" />,
    color: '#e74c3c',
    properties: ['display: flex', 'justify-content', 'align-items', 'flex-direction'],
    useCases: ['Centrado de elementos', 'Distribución uniforme', 'Navegación horizontal'],
    codeExample: `.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.flex-item {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
}`,
    demo: (
      <div className="flex-demo">
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
      </div>
    )
  },
  {
    id: 'flexbox-advanced',
    name: 'Flexbox Avanzado',
    description: 'Control de crecimiento y distribución',
    icon: <Layout className="feature-icon" />,
    color: '#3498db',
    properties: ['flex-grow', 'flex-shrink', 'flex-basis', 'flex-wrap', 'align-content'],
    useCases: ['Layouts adaptativos', 'Contenido flexible', 'Espaciado dinámico'],
    codeExample: `.flex-advanced {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-item-1 {
  flex: 1 1 200px; /* grow shrink basis */
  background: #e74c3c;
}

.flex-item-2 {
  flex: 2 1 300px;
  background: #2ecc71;
}

.flex-item-3 {
  flex: 0 0 150px; /* no grow, no shrink, fixed basis */
  background: #f39c12;
}`,
    demo: (
      <div className="flex-advanced-demo">
        <div className="flex-item-1">Flex 1</div>
        <div className="flex-item-2">Flex 2</div>
        <div className="flex-item-3">Fixed</div>
      </div>
    )
  },
  {
    id: 'grid-basic',
    name: 'CSS Grid Básico',
    description: 'Sistema de layout bidimensional',
    icon: <Grid className="feature-icon" />,
    color: '#9b59b6',
    properties: ['display: grid', 'grid-template-columns', 'grid-template-rows', 'grid-gap'],
    useCases: ['Layouts complejos', 'Diseño de páginas', 'Estructura de contenido'],
    codeExample: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-gap: 1rem;
  height: 300px;
}

.grid-header {
  grid-column: 1 / -1;
  background: #e74c3c;
}

.grid-sidebar {
  background: #3498db;
}

.grid-main {
  background: #2ecc71;
}

.grid-footer {
  grid-column: 1 / -1;
  background: #f39c12;
}`,
    demo: (
      <div className="grid-demo">
        <div className="grid-header">Header</div>
        <div className="grid-sidebar">Sidebar</div>
        <div className="grid-main">Main Content</div>
        <div className="grid-footer">Footer</div>
      </div>
    )
  },
  {
    id: 'grid-advanced',
    name: 'CSS Grid Avanzado',
    description: 'Áreas nombradas y posicionamiento',
    icon: <Grid className="feature-icon" />,
    color: '#f39c12',
    properties: ['grid-template-areas', 'grid-area', 'grid-column', 'grid-row'],
    useCases: ['Layouts complejos', 'Responsive design', 'Posicionamiento preciso'],
    codeExample: `.grid-advanced {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  height: 400px;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,
    demo: (
      <div className="grid-advanced-demo">
        <div className="grid-header">Header</div>
        <div className="grid-nav">Navigation</div>
        <div className="grid-main">Main Content</div>
        <div className="grid-aside">Sidebar</div>
        <div className="grid-footer">Footer</div>
      </div>
    )
  },
  {
    id: 'responsive',
    name: 'Layout Responsivo',
    description: 'Adaptación a diferentes pantallas',
    icon: <Smartphone className="feature-icon" />,
    color: '#2ecc71',
    properties: ['@media queries', 'flex-wrap', 'grid-template-columns', 'minmax()'],
    useCases: ['Mobile-first', 'Tablet layout', 'Desktop optimization'],
    codeExample: `/* Mobile First */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Auto-fit columns */
.auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}`,
    demo: (
      <div className="responsive-demo">
        <div className="responsive-item">Item 1</div>
        <div className="responsive-item">Item 2</div>
        <div className="responsive-item">Item 3</div>
        <div className="responsive-item">Item 4</div>
      </div>
    )
  }
];

const LayoutShowcase: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<LayoutExample | null>(null);
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

  const openExampleDetails = (example: LayoutExample) => {
    setSelectedExample(example);
    setActiveTab('properties');
  };

  const closeExampleDetails = () => {
    setSelectedExample(null);
  };

  return (
    <div className="layout-showcase">
      <div className="showcase-header">
        <h2>Layouts en CSS: Flexbox y Grid</h2>
        <p>Domina los sistemas de layout modernos para crear diseños profesionales y responsivos</p>
      </div>

      <div className="examples-grid">
        {layoutExamples.map((example, index) => (
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

export default LayoutShowcase;
