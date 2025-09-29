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
    id: 'props',
    name: 'Props',
    description: 'Comunicación entre componentes',
    icon: <Settings className="feature-icon" />,
    color: '#9b59b6',
    concepts: ['Props', 'Data Passing', 'Component Communication', 'Prop Types', 'Default Props'],
    examples: ['<Component prop="value" />', 'function Component({ prop })', 'Component.defaultProps'],
    benefits: [
      'Reutilización de componentes',
      'Comunicación padre-hijo',
      'Componentes configurables',
      'Código más limpio'
    ],
    codeExample: `// Componente con props
function UserCard({ name, email, role, avatar }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
      <span className="role">{role}</span>
    </div>
  );
}

// Props con valores por defecto
function Button({ text, color = 'blue', onClick }) {
  return (
    <button 
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Uso de componentes con props
function App() {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div>
      <UserCard 
        name="Juan Pérez"
        email="juan@email.com"
        role="Developer"
        avatar="/avatar.jpg"
      />
      <Button 
        text="Hacer clic"
        color="green"
        onClick={handleClick}
      />
    </div>
  );
}`
  },
  {
    id: 'structure',
    name: 'Estructura',
    description: 'Organización de proyectos React',
    icon: <Zap className="feature-icon" />,
    color: '#f39c12',
    concepts: ['Project Structure', 'File Organization', 'Component Folders', 'Import/Export', 'Best Practices'],
    examples: ['import Component from "./Component"', 'export default Component', 'components/Component.jsx'],
    benefits: [
      'Código organizado',
      'Fácil mantenimiento',
      'Escalabilidad',
      'Colaboración en equipo'
    ],
    codeExample: `// Estructura de proyecto React
mi-app-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── pages/             # Páginas/views
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── styles/            # Archivos CSS
│   │   ├── globals.css
│   │   └── components.css
│   ├── App.jsx            # Componente principal
│   └── main.jsx          # Punto de entrada
├── package.json
└── vite.config.js

// Ejemplo de import/export
// components/UserCard.jsx
function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;

// pages/Home.jsx
import UserCard from '../components/UserCard';

function Home() {
  return (
    <div>
      <h1>Mi Equipo</h1>
      <UserCard name="Juan" email="juan@email.com" />
    </div>
  );
}

export default Home;`
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
