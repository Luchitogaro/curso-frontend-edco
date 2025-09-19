import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Code, FileText, FormInput, Video, CheckCircle } from 'lucide-react';
import './HTML5Showcase.css';

interface HTML5Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  examples: string[];
  benefits: string[];
  codeExample?: string;
}

const html5Features: HTML5Feature[] = [
  {
    id: 'semantic',
    name: 'Elementos Semánticos',
    description: 'Etiquetas que dan significado al contenido',
    icon: <FileText className="feature-icon" />,
    color: '#e74c3c',
    examples: ['<header>', '<nav>', '<main>', '<section>', '<article>', '<aside>', '<footer>'],
    benefits: [
      'Mejor accesibilidad',
      'SEO optimizado',
      'Estructura clara',
      'Mantenimiento fácil'
    ],
    codeExample: `<header>
  <nav>
    <ul>
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Acerca de</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <article>
      <h2>Título del artículo</h2>
      <p>Contenido del artículo...</p>
    </article>
  </section>
</main>`
  },
  {
    id: 'forms',
    name: 'Formularios Avanzados',
    description: 'Nuevos tipos de input y validaciones',
    icon: <FormInput className="feature-icon" />,
    color: '#3498db',
    examples: ['email', 'tel', 'url', 'date', 'time', 'number', 'range', 'color'],
    benefits: [
      'Validación automática',
      'Mejor UX móvil',
      'Menos JavaScript',
      'Accesibilidad mejorada'
    ],
    codeExample: `<form>
  <input type="email" placeholder="Correo electrónico" required>
  <input type="tel" placeholder="Teléfono">
  <input type="date" name="fecha">
  <input type="range" min="0" max="100" value="50">
  <input type="color" value="#3498db">
  <button type="submit">Enviar</button>
</form>`
  },
  {
    id: 'multimedia',
    name: 'Multimedia Nativo',
    description: 'Audio y video sin plugins',
    icon: <Video className="feature-icon" />,
    color: '#9b59b6',
    examples: ['<video>', '<audio>', '<canvas>', '<svg>'],
    benefits: [
      'Sin Flash necesario',
      'Mejor rendimiento',
      'Control total',
      'Responsive nativo'
    ],
    codeExample: `<video controls width="100%">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta video HTML5.
</video>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>`
  },
  {
    id: 'storage',
    name: 'Almacenamiento Local',
    description: 'localStorage, sessionStorage y APIs de almacenamiento modernas',
    icon: <CheckCircle className="feature-icon" />,
    color: '#f39c12',
    examples: [
      'localStorage.setItem()',
      'sessionStorage.getItem()',
      'JSON.stringify()',
      'JSON.parse()',
      'removeItem()',
      'clear()'
    ],
    benefits: [
      'Datos persistentes entre sesiones',
      'Almacenamiento temporal por sesión',
      'Mejor rendimiento de la aplicación',
      'Funcionalidad offline',
      'Menos peticiones al servidor',
      'Experiencia de usuario mejorada',
      'Configuraciones personalizadas'
    ],
    codeExample: `// ========================================
// LOCALSTORAGE vs SESSIONSTORAGE
// ========================================

// LOCALSTORAGE: Datos PERSISTENTES
// - Se mantienen hasta que se eliminen manualmente
// - Sobreviven al cierre del navegador
// - Compartidos entre pestañas del mismo dominio
// - Capacidad: ~5-10MB por dominio

// SESSIONSTORAGE: Datos TEMPORALES  
// - Se eliminan al cerrar la pestaña
// - No se comparten entre pestañas
// - Solo disponibles en la sesión actual
// - Capacidad: ~5-10MB por pestaña

// ========================================
// EJEMPLOS PRÁCTICOS
// ========================================

// 1. LOCALSTORAGE - Preferencias del usuario
localStorage.setItem('tema', 'oscuro');
localStorage.setItem('idioma', 'español');
localStorage.setItem('usuario', JSON.stringify({
  nombre: 'Juan Pérez',
  email: 'juan@email.com',
  preferencias: {
    fontSize: 16,
    sidebar: true
  }
}));

// Recuperar preferencias
const tema = localStorage.getItem('tema');
const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

// 2. SESSIONSTORAGE - Datos temporales
sessionStorage.setItem('carrito', JSON.stringify([
  { id: 1, nombre: 'Laptop', precio: 999 },
  { id: 2, nombre: 'Mouse', precio: 25 }
]));

sessionStorage.setItem('filtros', JSON.stringify({
  categoria: 'tecnología',
  precioMin: 100,
  precioMax: 1000
}));

// Recuperar datos de sesión
const carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');
const filtros = JSON.parse(sessionStorage.getItem('filtros') || '{}');

// ========================================
// FUNCIONES ÚTILES
// ========================================

// Función para guardar objetos
function guardarDatos(clave, objeto, esPersistente = true) {
  const storage = esPersistente ? localStorage : sessionStorage;
  storage.setItem(clave, JSON.stringify(objeto));
}

// Función para recuperar objetos
function obtenerDatos(clave, valorPorDefecto = null, esPersistente = true) {
  const storage = esPersistente ? localStorage : sessionStorage;
  const datos = storage.getItem(clave);
  return datos ? JSON.parse(datos) : valorPorDefecto;
}

// ========================================
// GESTIÓN DE DATOS
// ========================================

// Eliminar datos específicos
localStorage.removeItem('usuario');
sessionStorage.removeItem('carrito');

// Limpiar todo
localStorage.clear();    // Solo localStorage
sessionStorage.clear();  // Solo sessionStorage

// Verificar si existe una clave
if (localStorage.getItem('tema') !== null) {
  console.log('Tema guardado:', localStorage.getItem('tema'));
}

// ========================================
// CUÁNDO USAR CADA UNO
// ========================================

// USAR LOCALSTORAGE para:
// - Preferencias del usuario (tema, idioma)
// - Datos de autenticación
// - Configuraciones de la aplicación
// - Datos que deben persistir

// USAR SESSIONSTORAGE para:
// - Carrito de compras temporal
// - Filtros de búsqueda
// - Datos de formularios
// - Información de navegación`
  }
];

const HTML5Showcase: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<HTML5Feature | null>(null);
  const [activeTab, setActiveTab] = useState<'examples' | 'benefits' | 'code'>('examples');

  const openFeatureDetails = (feature: HTML5Feature) => {
    setSelectedFeature(feature);
    setActiveTab('examples');
  };

  const closeFeatureDetails = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="html5-showcase">
      <div className="showcase-header">
        <h2>HTML5: Estructura y Semántica Web</h2>
        <p>Domina los elementos semánticos y la estructura moderna de HTML5</p>
      </div>

      <div className="features-grid">
        {html5Features.map((feature, index) => (
          <div
            key={feature.id}
            className="feature-card"
            style={{ 
              '--feature-color': feature.color,
              animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
            onClick={() => openFeatureDetails(feature)}
          >
            <div className="feature-header">
              <div className="feature-icon-container" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <div className="feature-info">
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            </div>

            <div className="feature-preview">
              <div className="examples-preview">
                {feature.examples.slice(0, 3).map((example, idx) => (
                  <span key={idx} className="example-tag">
                    {example}
                  </span>
                ))}
                {feature.examples.length > 3 && (
                  <span className="more-examples">+{feature.examples.length - 3} más</span>
                )}
              </div>
            </div>

            <div className="feature-actions">
              <button 
                className="learn-more-btn" 
                style={{ backgroundColor: feature.color }}
                onClick={(e) => {
                  e.stopPropagation();
                  openFeatureDetails(feature);
                }}
              >
                Aprender Más
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedFeature && createPortal(
        <div className="feature-modal-overlay" onClick={closeFeatureDetails}>
          <div className="feature-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon" style={{ backgroundColor: selectedFeature.color }}>
                {selectedFeature.icon}
              </div>
              <div className="modal-title">
                <h2>{selectedFeature.name}</h2>
                <p>{selectedFeature.description}</p>
              </div>
              <button className="close-btn" onClick={closeFeatureDetails}>×</button>
            </div>

            <div className="modal-tabs">
              <button 
                className={`tab-btn ${activeTab === 'examples' ? 'active' : ''}`}
                onClick={() => setActiveTab('examples')}
              >
                Ejemplos
              </button>
              <button 
                className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
                onClick={() => setActiveTab('benefits')}
              >
                Beneficios
              </button>
              <button 
                className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                Código
              </button>
            </div>

            <div className="modal-content">
              {activeTab === 'examples' && (
                <div className="examples-content">
                  <h3>Ejemplos de Uso</h3>
                  <div className="examples-grid">
                    {selectedFeature.examples.map((example, index) => (
                      <div key={index} className="example-item">
                        <Code className="example-icon" />
                        <code>{example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="benefits-content">
                  <h3>Beneficios Principales</h3>
                  <ul className="benefits-list">
                    {selectedFeature.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <CheckCircle className="benefit-icon" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'code' && selectedFeature.codeExample && (
                <div className="code-content">
                  <h3>Ejemplo de Código</h3>
                  <div className="code-block">
                    <pre><code>{selectedFeature.codeExample}</code></pre>
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

export default HTML5Showcase;
