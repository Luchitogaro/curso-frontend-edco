import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Palette, 
  Layout, 
  Code, 
  Play, 
  Eye,
  Zap,
  Grid,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import './CSS3Showcase.css';

interface CSSConcept {
  id: string;
  title: string;
  description: string;
  category: 'fundamentos' | 'layouts' | 'animaciones';
  icon: React.ReactNode;
  examples: {
    title: string;
    code: string;
    preview: string;
  }[];
  liveDemo?: string;
}

const CSS3Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fundamentos' | 'layouts' | 'taller' | 'animaciones'>('fundamentos');
  const [selectedConcept, setSelectedConcept] = useState<CSSConcept | null>(null);
  const [showLiveDemo, setShowLiveDemo] = useState(false);

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showLiveDemo) {
          setShowLiveDemo(false);
        } else if (selectedConcept) {
          setSelectedConcept(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedConcept, showLiveDemo]);

  const cssConcepts: CSSConcept[] = [
    {
      id: 'selectores',
      title: 'Selectores CSS3',
      description: 'Dominar selectores básicos, avanzados y pseudo-clases',
      category: 'fundamentos',
      icon: <Code className="concept-icon" />,
      examples: [
        {
          title: 'Selectores Básicos',
          code: `/* Selector de elemento */
h1 { color: blue; }

/* Selector de clase */
.mi-clase { font-size: 16px; }

/* Selector de ID */
#mi-id { background: red; }`,
          preview: 'Estilos aplicados a elementos, clases e IDs'
        },
        {
          title: 'Selectores Avanzados',
          code: `/* Selector descendiente */
div p { margin: 10px; }

/* Selector hijo directo */
ul > li { list-style: none; }

/* Selector hermano adyacente */
h2 + p { margin-top: 0; }

/* Selector de atributo */
input[type="email"] { border: 2px solid blue; }`,
          preview: 'Selectores más específicos y potentes'
        },
        {
          title: 'Pseudo-clases',
          code: `/* Estados de enlaces */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: green; }

/* Pseudo-clases estructurales */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f0f0f0; }`,
          preview: 'Estilos basados en estados y posiciones'
        }
      ]
    },
    {
      id: 'colores',
      title: 'Colores y Tipografías',
      description: 'Sistemas de colores modernos y tipografías web',
      category: 'fundamentos',
      icon: <Palette className="concept-icon" />,
      examples: [
        {
          title: 'Colores CSS3',
          code: `/* Colores básicos */
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);

/* Colores HSL */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.8);

/* Gradientes */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
background: radial-gradient(circle, #ff6b6b, #4ecdc4);`,
          preview: 'Diferentes formas de definir colores y gradientes'
        },
        {
          title: 'Tipografías',
          code: `/* Fuentes del sistema */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
font-family: 'Roboto', sans-serif;

/* Propiedades de texto */
font-size: 1.2rem;
font-weight: 600;
line-height: 1.6;
text-align: center;
text-transform: uppercase;`,
          preview: 'Tipografías modernas y propiedades de texto'
        }
      ]
    },
    {
      id: 'flexbox',
      title: 'Flexbox Layout',
      description: 'Sistema de layout unidimensional moderno',
      category: 'layouts',
      icon: <Layout className="concept-icon" />,
      examples: [
        {
          title: 'Flexbox Container',
          code: `.container {
  display: flex;
  flex-direction: row; /* row, column, row-reverse, column-reverse */
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
  justify-content: center; /* flex-start, center, flex-end, space-between, space-around */
  align-items: center; /* flex-start, center, flex-end, stretch, baseline */
  gap: 1rem;
}`,
          preview: 'Contenedor flex con distribución y alineación'
        },
        {
          title: 'Flexbox Items',
          code: `.item {
  flex-grow: 1; /* Factor de crecimiento */
  flex-shrink: 0; /* Factor de reducción */
  flex-basis: 200px; /* Tamaño base */
  flex: 1 0 200px; /* Shorthand: grow shrink basis */
  align-self: flex-end; /* Alineación individual */
  order: 2; /* Orden de aparición */
}`,
          preview: 'Propiedades de elementos flex individuales'
        }
      ]
    },
    {
      id: 'grid',
      title: 'CSS Grid Layout',
      description: 'Sistema de layout bidimensional avanzado',
      category: 'layouts',
      icon: <Grid className="concept-icon" />,
      examples: [
        {
          title: 'Grid Container',
          code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 columnas */
  grid-template-rows: auto 1fr auto; /* 3 filas */
  grid-gap: 1rem;
  
  /* Grid Template Areas */
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}`,
          preview: 'Contenedor grid con columnas, filas y áreas'
        },
        {
          title: 'Grid Items',
          code: `.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Posicionamiento manual */
.item {
  grid-column: 1 / 3; /* Desde columna 1 hasta 3 */
  grid-row: 2 / 4; /* Desde fila 2 hasta 4 */
  justify-self: center; /* Alineación horizontal */
  align-self: end; /* Alineación vertical */
}`,
          preview: 'Posicionamiento de elementos en el grid'
        }
      ]
    },
    {
      id: 'responsive',
      title: 'Responsive Design',
      description: 'Diseño adaptable a diferentes dispositivos',
      category: 'layouts',
      icon: <Smartphone className="concept-icon" />,
      examples: [
        {
          title: 'Media Queries',
          code: `/* Mobile First */
.container {
  padding: 1rem;
  font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    font-size: 18px;
  }
}`,
          preview: 'Breakpoints para diferentes tamaños de pantalla'
        },
        {
          title: 'Responsive Grid',
          code: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Grid responsivo con auto-fill */
.auto-fill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}`,
          preview: 'Grids que se adaptan automáticamente'
        }
      ]
    },
    {
      id: 'transitions',
      title: 'Transiciones CSS',
      description: 'Animaciones suaves entre estados',
      category: 'animaciones',
      icon: <Zap className="concept-icon" />,
      examples: [
        {
          title: 'CSS Transitions',
          code: `.button {
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  
  /* Transición */
  transition: all 0.3s ease;
  /* transition: background 0.3s ease, transform 0.2s ease; */
}

.button:hover {
  background: darkblue;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}`,
          preview: 'Botón con transiciones suaves al hacer hover'
        }
      ]
    },
    {
      id: 'animations',
      title: 'Animaciones con Keyframes',
      description: 'Animaciones complejas con @keyframes',
      category: 'animaciones',
      icon: <Play className="concept-icon" />,
      examples: [
        {
          title: 'Keyframes Básicos',
          code: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fadeInUp 0.6s ease-out;
  /* animation: fadeInUp 0.6s ease-out 0.2s 3 alternate; */
}`,
          preview: 'Elemento que aparece desde abajo con fade in'
        },
        {
          title: 'Animación Continua',
          code: `@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin {
  animation: rotate 1s linear infinite;
}`,
          preview: 'Elementos con animaciones continuas'
        }
      ]
    },
    {
      id: 'transforms',
      title: 'Transformaciones CSS',
      description: 'Transformar elementos en 2D y 3D',
      category: 'animaciones',
      icon: <Eye className="concept-icon" />,
      examples: [
        {
          title: 'Transform 2D',
          code: `.transform-demo {
  /* Traslación */
  transform: translate(50px, 20px);
  transform: translateX(50px);
  transform: translateY(20px);
  
  /* Rotación */
  transform: rotate(45deg);
  
  /* Escala */
  transform: scale(1.2);
  transform: scaleX(1.5);
  transform: scaleY(0.8);
  
  /* Sesgado */
  transform: skew(10deg, 5deg);
  
  /* Combinaciones */
  transform: translate(50px, 20px) rotate(45deg) scale(1.2);
}`,
          preview: 'Diferentes transformaciones 2D aplicadas'
        },
        {
          title: 'Transform 3D',
          code: `.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-3d:hover {
  transform: rotateY(180deg);
}

.flip-card {
  transform: perspective(1000px) rotateX(15deg);
}

.rotate-3d {
  transform: rotate3d(1, 1, 0, 45deg);
}`,
          preview: 'Efectos 3D y perspectiva'
        }
      ]
    }
  ];

  const openConceptDetails = (concept: CSSConcept) => {
    setSelectedConcept(concept);
  };

  const closeConceptDetails = () => {
    setSelectedConcept(null);
  };

  const getConceptsByCategory = (category: 'fundamentos' | 'layouts' | 'animaciones') => {
    return cssConcepts.filter(concept => concept.category === category);
  };

  const highlightCSS = (code: string) => {
    // First, escape any existing HTML
    let highlighted = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Apply syntax highlighting with more precise patterns
    highlighted = highlighted
      // Comments (must be first to avoid conflicts)
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>')
      // Strings (quoted values) - more precise
      .replace(/(["'][^"']*?["'])/g, '<span class="string">$1</span>')
      // Selectors (before opening brace) - more specific
      .replace(/^([.#]?[a-zA-Z][a-zA-Z0-9_-]*(?:\s*,\s*[.#]?[a-zA-Z][a-zA-Z0-9_-]*)*)(?=\s*\{)/gm, '<span class="selector">$1</span>')
      // Properties (CSS property names before colon)
      .replace(/^\s*([a-zA-Z-]+)(?=\s*:)/gm, '  <span class="property">$1</span>')
      // Values (after colon, before semicolon) - more careful
      .replace(/(:\s*)([^;{}]+?)(?=\s*;)/g, '$1<span class="value">$2</span>')
      // Punctuation - only specific characters
      .replace(/([{}:;])/g, '<span class="punctuation">$1</span>');
    
    return highlighted;
  };

  const renderLiveDemo = () => {
    if (!showLiveDemo) return null;

    return createPortal(
      <div className="live-demo-overlay" onClick={() => setShowLiveDemo(false)}>
        <div className="live-demo-content" onClick={(e) => e.stopPropagation()}>
          <div className="live-demo-header">
            <h3>Galería Animada - Demo en Vivo</h3>
            <button onClick={() => setShowLiveDemo(false)}>×</button>
          </div>
          <div className="live-demo-gallery">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="demo-gallery-item">
                <div className="demo-image">
                  <div className="demo-placeholder">
                    Imagen {item}
                  </div>
                </div>
                <div className="demo-overlay">
                  <h4>Proyecto {item}</h4>
                  <p>Descripción del proyecto</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="css3-showcase">
      <div className="showcase-header">
        <h2>CSS3 - Fundamentos, Layouts y Animaciones</h2>
        <p>Explora los conceptos fundamentales del CSS3 moderno</p>
      </div>

      <div className="showcase-tabs">
        <button 
          className={activeTab === 'fundamentos' ? 'active' : ''}
          onClick={() => setActiveTab('fundamentos')}
        >
          <Code className="tab-icon" />
          CSS3 Fundamentos
        </button>
        <button 
          className={activeTab === 'layouts' ? 'active' : ''}
          onClick={() => setActiveTab('layouts')}
        >
          <Layout className="tab-icon" />
          Layouts en CSS
        </button>
        <button 
          className={activeTab === 'taller' ? 'active' : ''}
          onClick={() => setActiveTab('taller')}
        >
          <Grid className="tab-icon" />
          Taller CSS Layouts
        </button>
        <button 
          className={activeTab === 'animaciones' ? ' ' : ''}
          onClick={() => setActiveTab('animaciones')}
        >
          <Zap className="tab-icon" />
          Animaciones
        </button>
      </div>

      <div className="showcase-content">
        {activeTab === 'fundamentos' && (
          <div className="concepts-grid">
            {getConceptsByCategory('fundamentos').map((concept) => (
              <div key={concept.id} className="concept-card">
                <div className="concept-header">
                  {concept.icon}
                  <h3>{concept.title}</h3>
                </div>
                <p>{concept.description}</p>
                <button 
                  className="view-details-btn"
                  onClick={() => openConceptDetails(concept)}
                >
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'layouts' && (
          <div className="concepts-grid">
            {getConceptsByCategory('layouts').map((concept) => (
              <div key={concept.id} className="concept-card">
                <div className="concept-header">
                  {concept.icon}
                  <h3>{concept.title}</h3>
                </div>
                <p>{concept.description}</p>
                <button 
                  className="view-details-btn"
                  onClick={() => openConceptDetails(concept)}
                >
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'taller' && (
          <div className="workshop-section">
            <div className="workshop-header">
              <h3>Taller CSS Layouts</h3>
              <p>Maquetar una página con Grid + Flexbox + responsive</p>
            </div>
            
            <div className="workshop-steps">
              <div className="workshop-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Estructura Base</h4>
                  <p>Crear la estructura HTML semántica con header, nav, main, aside, footer</p>
                  <div className="step-demo">
                    <div className="layout-demo">
                      <div className="demo-header">Header</div>
                      <div className="demo-nav">Navigation</div>
                      <div className="demo-main">
                        <div className="demo-sidebar">Sidebar</div>
                        <div className="demo-content">Main Content</div>
                      </div>
                      <div className="demo-footer">Footer</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="workshop-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>CSS Grid Layout</h4>
                  <p>Implementar el layout principal con CSS Grid</p>
                  <div className="code-preview">
                    <pre>
                      <code 
                        dangerouslySetInnerHTML={{ 
                          __html: highlightCSS(`.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "nav nav"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}`)
                        }} 
                      />
                    </pre>
                  </div>
                </div>
              </div>

              <div className="workshop-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Flexbox Components</h4>
                  <p>Usar Flexbox para componentes internos</p>
                  <div className="code-preview">
                    <pre>
                      <code 
                        dangerouslySetInnerHTML={{ 
                          __html: highlightCSS(`.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}`)
                        }} 
                      />
                    </pre>
                  </div>
                </div>
              </div>

              <div className="workshop-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Responsive Design</h4>
                  <p>Hacer el layout responsive con media queries</p>
                  <div className="responsive-demo">
                    <div className="device-preview">
                      <Monitor className="device-icon" />
                      <span>Desktop</span>
                    </div>
                    <div className="device-preview">
                      <Tablet className="device-icon" />
                      <span>Tablet</span>
                    </div>
                    <div className="device-preview">
                      <Smartphone className="device-icon" />
                      <span>Mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="workshop-actions">
              <button 
                className="demo-btn"
                onClick={() => setShowLiveDemo(true)}
              >
                <Play className="btn-icon" />
                Ver Demo en Vivo
              </button>
            </div>
          </div>
        )}

        {activeTab === 'animaciones' && (
          <div className="concepts-grid">
            {getConceptsByCategory('animaciones').map((concept) => (
              <div key={concept.id} className="concept-card">
                <div className="concept-header">
                  {concept.icon}
                  <h3>{concept.title}</h3>
                </div>
                <p>{concept.description}</p>
                <button 
                  className="view-details-btn"
                  onClick={() => openConceptDetails(concept)}
                >
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de detalles del concepto */}
      {selectedConcept && createPortal(
        <div className="concept-modal-overlay" onClick={closeConceptDetails}>
          <div className="concept-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                {selectedConcept.icon}
                <h3>{selectedConcept.title}</h3>
              </div>
              <button onClick={closeConceptDetails}>×</button>
            </div>
            
            <div className="modal-content">
              <p className="modal-description">{selectedConcept.description}</p>
              
              <div className="examples-section">
                <h4>Ejemplos Prácticos</h4>
                {selectedConcept.examples.map((example, index) => (
                  <div key={index} className="example-item">
                    <h5>{example.title}</h5>
                    <div className="code-block">
                      <pre>
                        <code 
                          dangerouslySetInnerHTML={{ 
                            __html: highlightCSS(example.code) 
                          }} 
                        />
                      </pre>
                    </div>
                    <div className="example-preview">
                      <strong>Resultado:</strong> {example.preview}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Demo en vivo */}
      {renderLiveDemo()}
    </div>
  );
};

export default CSS3Showcase;