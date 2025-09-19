import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Component, Zap, Layers, Settings, Code, Play } from 'lucide-react';
import './ReactShowcase.css';

interface ReactFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  concepts: string[];
  examples: string[];
  benefits: string[];
  codeExample?: string;
}

const reactFeatures: ReactFeature[] = [
  {
    id: 'components',
    name: 'Componentes',
    description: 'Bloques reutilizables de UI',
    icon: <Component className="feature-icon" />,
    color: '#61dafb',
    concepts: ['Functional Components', 'Class Components', 'Props', 'JSX', 'Reutilización'],
    examples: ['function MiComponente()', '<Componente prop="valor" />', 'export default'],
    benefits: [
      'Código reutilizable',
      'Fácil mantenimiento',
      'Separación de responsabilidades',
      'Testing simplificado'
    ],
    codeExample: `// Componente funcional
function Saludo({ nombre, edad }) {
  return (
    <div className="saludo">
      <h2>¡Hola, {nombre}!</h2>
      <p>Tienes {edad} años</p>
    </div>
  );
}

// Componente con props
function TarjetaUsuario({ usuario }) {
  return (
    <div className="tarjeta">
      <img src={usuario.avatar} alt={usuario.nombre} />
      <h3>{usuario.nombre}</h3>
      <p>{usuario.email}</p>
    </div>
  );
}

// Uso de componentes
function App() {
  return (
    <div>
      <Saludo nombre="María" edad={25} />
      <TarjetaUsuario usuario={{
        nombre: "Juan",
        email: "juan@email.com",
        avatar: "/avatar.jpg"
      }} />
    </div>
  );
}`
  },
  {
    id: 'jsx',
    name: 'JSX',
    description: 'JavaScript XML - Sintaxis de React',
    icon: <Code className="feature-icon" />,
    color: '#e74c3c',
    concepts: ['JSX Syntax', 'Expressions', 'Conditional Rendering', 'Lists', 'Keys'],
    examples: ['<h1>Hola</h1>', '{variable}', 'condition && <Component />'],
    benefits: [
      'Sintaxis familiar',
      'Fácil de leer',
      'Integración con JavaScript',
      'Herramientas de desarrollo'
    ],
    codeExample: `// JSX básico
function MiComponente() {
  const nombre = "React";
  const esActivo = true;
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="container">
      <h1>Bienvenido a {nombre}</h1>
      
      {/* Renderizado condicional */}
      {esActivo && <p>El componente está activo</p>}
      
      {/* Lista con keys */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* Expresiones JavaScript */}
      <p>La fecha actual es: {new Date().toLocaleDateString()}</p>
      
      {/* Estilos inline */}
      <div style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px'
      }}>
        Contenido con estilos
      </div>
    </div>
  );
}`
  },
  {
    id: 'state',
    name: 'Estado (State)',
    description: 'Gestión de datos dinámicos',
    icon: <Settings className="feature-icon" />,
    color: '#9b59b6',
    concepts: ['useState', 'State Updates', 'Immutable Updates', 'Local State', 'State Lifting'],
    examples: ['const [count, setCount] = useState(0)', 'setCount(count + 1)', 'useState([])'],
    benefits: [
      'Datos reactivos',
      'Re-renderizado automático',
      'Estado local y global',
      'Gestión de formularios'
    ],
    codeExample: `import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('');

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const resetear = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={resetear}>Reset</button>
      
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <p>Hola, {nombre}</p>
    </div>
  );
}

// Estado con objetos
function FormularioUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    edad: 0
  });

  const actualizarCampo = (campo, valor) => {
    setUsuario(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  return (
    <form>
      <input
        value={usuario.nombre}
        onChange={(e) => actualizarCampo('nombre', e.target.value)}
        placeholder="Nombre"
      />
      <input
        value={usuario.email}
        onChange={(e) => actualizarCampo('email', e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}`
  },
  {
    id: 'hooks',
    name: 'Hooks',
    description: 'Funciones especiales de React',
    icon: <Zap className="feature-icon" />,
    color: '#f39c12',
    concepts: ['useState', 'useEffect', 'useContext', 'Custom Hooks', 'Rules of Hooks'],
    examples: ['useEffect(() => {}, [])', 'const value = useContext(MyContext)', 'useCustomHook()'],
    benefits: [
      'Lógica reutilizable',
      'Efectos secundarios',
      'Contexto global',
      'Hooks personalizados'
    ],
    codeExample: `import { useState, useEffect, useContext, createContext } from 'react';

// Contexto
const ThemeContext = createContext();

// Hook personalizado
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Componente con múltiples hooks
function MiComponente() {
  const [count, setCount] = useLocalStorage('count', 0);
  const [data, setData] = useState(null);
  const theme = useContext(ThemeContext);

  // useEffect para efectos secundarios
  useEffect(() => {
    // Fetch data
    fetch('/api/datos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Solo se ejecuta una vez

  useEffect(() => {
    // Actualizar título cuando cambie el count
    document.title = \`Count: \${count}\`;
  }, [count]); // Se ejecuta cuando cambie count

  return (
    <div style={{ backgroundColor: theme.background }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      {data && <p>Datos cargados: {data.length} items</p>}
    </div>
  );
}`
  }
];

const ReactShowcase: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<ReactFeature | null>(null);
  const [activeTab, setActiveTab] = useState<'concepts' | 'examples' | 'benefits' | 'code'>('concepts');

  const openFeatureDetails = (feature: ReactFeature) => {
    setSelectedFeature(feature);
    setActiveTab('concepts');
  };

  const closeFeatureDetails = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="react-showcase">
      <div className="showcase-header">
        <h2>React: Biblioteca para Interfaces de Usuario</h2>
        <p>Construye interfaces modernas y reactivas con React</p>
      </div>

      <div className="features-grid">
        {reactFeatures.map((feature, index) => (
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
              <div className="concepts-preview">
                {feature.concepts.slice(0, 3).map((concept, idx) => (
                  <span key={idx} className="concept-tag">
                    {concept}
                  </span>
                ))}
                {feature.concepts.length > 3 && (
                  <span className="more-concepts">+{feature.concepts.length - 3} más</span>
                )}
              </div>
            </div>

            <div className="feature-actions">
              <button className="learn-more-btn" style={{ backgroundColor: feature.color }}>
                <Play className="btn-icon" />
                Explorar
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
                className={`tab-btn ${activeTab === 'concepts' ? 'active' : ''}`}
                onClick={() => setActiveTab('concepts')}
              >
                Conceptos
              </button>
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
              {activeTab === 'concepts' && (
                <div className="concepts-content">
                  <h3>Conceptos Clave</h3>
                  <div className="concepts-grid">
                    {selectedFeature.concepts.map((concept, index) => (
                      <div key={index} className="concept-item">
                        <Layers className="concept-icon" />
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'examples' && (
                <div className="examples-content">
                  <h3>Ejemplos de Uso</h3>
                  <div className="examples-list">
                    {selectedFeature.examples.map((example, index) => (
                      <div key={index} className="example-item">
                        <div className="example-code">
                          <code>{example}</code>
                        </div>
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
                        <Zap className="benefit-icon" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'code' && selectedFeature.codeExample && (
                <div className="code-content">
                  <h3>Ejemplo Completo</h3>
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

export default ReactShowcase;
