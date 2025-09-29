import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Palette, 
  Layout, 
  Code, 
  Grid
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
  const [activeTab, setActiveTab] = useState<'fundamentos'>('fundamentos');
  const [selectedConcept, setSelectedConcept] = useState<CSSConcept | null>(null);

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedConcept) {
          setSelectedConcept(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedConcept]);

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

/* Variables CSS */
:root {
  --color-primario: #3498db;
  --color-secundario: #e74c3c;
}

.boton {
  background-color: var(--color-primario);
  color: white;
}`,
          preview: 'Diferentes formas de definir colores y variables CSS'
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
      id: 'modelo-caja',
      title: 'Modelo de Caja',
      description: 'Entender padding, margin, border y dimensiones',
      category: 'fundamentos',
      icon: <Layout className="concept-icon" />,
      examples: [
        {
          title: 'Modelo de Caja Básico',
          code: `/* Modelo de caja completo */
.caja {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
  background-color: #f9f9f9;
}

/* Box-sizing: border-box */
.caja-border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  /* El tamaño total será exactamente 200px */
}`,
          preview: 'Control del tamaño y espaciado de elementos'
        },
        {
          title: 'Espaciado Individual',
          code: `/* Padding individual */
.elemento {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 25px;
  /* Equivale a: padding: 10px 20px 15px 25px; */
}

/* Margin individual */
.elemento {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 25px;
  /* Equivale a: margin: 10px 20px 15px 25px; */
}`,
          preview: 'Control preciso del espaciado interno y externo'
        }
      ]
    },
    {
      id: 'unidades',
      title: 'Unidades CSS',
      description: 'Píxeles, em, rem, porcentajes y sus usos',
      category: 'fundamentos',
      icon: <Grid className="concept-icon" />,
      examples: [
        {
          title: 'Unidades Básicas',
          code: `/* Píxeles (absolutos) */
.fijo {
  width: 300px;
  height: 200px;
  font-size: 16px;
}

/* Em (relativo al font-size del elemento) */
.relativo-em {
  font-size: 16px;
  padding: 1em; /* 16px */
  margin: 0.5em; /* 8px */
}

/* Rem (relativo al font-size del root) */
html { font-size: 16px; }
.relativo-rem {
  font-size: 1.5rem; /* 24px */
  padding: 1rem; /* 16px */
}`,
          preview: 'Diferentes unidades para tamaños y espaciado'
        },
        {
          title: 'Porcentajes',
          code: `/* Porcentajes del elemento padre */
.contenedor {
  width: 100%;
  max-width: 1200px;
}

.columna {
  width: 50%;
  display: inline-block;
}

/* Centrado horizontal */
.centrado {
  width: 80%;
  margin: 0 auto;
}`,
          preview: 'Unidades relativas para layouts flexibles'
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

  const getConceptsByCategory = (category: 'fundamentos') => {
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


  return (
    <div className="css3-showcase">
      <div className="showcase-header">
        <h2>CSS3 - Fundamentos</h2>
        <p>Explora los conceptos fundamentales del CSS3 moderno</p>
      </div>

      <div className="showcase-tabs">
        <button 
          className="active"
        >
          <Code className="tab-icon" />
          CSS3 Fundamentos
        </button>
      </div>

      <div className="showcase-content">
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

    </div>
  );
};

export default CSS3Showcase;