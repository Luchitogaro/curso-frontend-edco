import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Code, Zap, Database, Globe, Settings, Play } from 'lucide-react';
import './JavaScriptShowcase.css';

interface JSFeature {
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

const jsFeatures: JSFeature[] = [
  {
    id: 'variables',
    name: 'Variables y Tipos',
    description: 'Fundamentos de almacenamiento de datos',
    icon: <Database className="feature-icon" />,
    color: '#e74c3c',
    concepts: ['let', 'const', 'var', 'tipos primitivos', 'hoisting'],
    examples: ['let nombre = "Juan"', 'const edad = 25', 'var activo = true'],
    benefits: [
      'Almacenamiento de datos',
      'Reutilización de valores',
      'Código más legible',
      'Gestión de estado'
    ],
    codeExample: `// Declaración de variables
let nombre = "Juan Pérez";
const edad = 25;
var activo = true;

// Tipos de datos
let numero = 42;
let texto = "Hola mundo";
let booleano = true;
let nulo = null;
let indefinido = undefined;

// Arrays y objetos
let numeros = [1, 2, 3, 4, 5];
let persona = {
  nombre: "María",
  edad: 30,
  ciudad: "Bogotá"
};`
  },
  {
    id: 'functions',
    name: 'Funciones',
    description: 'Bloques de código reutilizables',
    icon: <Zap className="feature-icon" />,
    color: '#3498db',
    concepts: ['function', 'arrow functions', 'parámetros', 'return', 'scope'],
    examples: ['function saludar()', 'const suma = (a, b) => a + b', 'return resultado'],
    benefits: [
      'Código reutilizable',
      'Organización modular',
      'Fácil mantenimiento',
      'Abstracción de lógica'
    ],
    codeExample: `// Función tradicional
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Arrow function
const suma = (a, b) => {
  return a + b;
};

// Arrow function simplificada
const multiplicar = (x, y) => x * y;

// Función con parámetros por defecto
function crearUsuario(nombre, edad = 18) {
  return {
    nombre: nombre,
    edad: edad,
    activo: true
  };
}

// Llamada a funciones
console.log(saludar("Ana"));
console.log(suma(5, 3));
console.log(multiplicar(4, 6));`
  },
  {
    id: 'dom',
    name: 'Manipulación del DOM',
    description: 'Interacción con elementos HTML',
    icon: <Globe className="feature-icon" />,
    color: '#9b59b6',
    concepts: ['querySelector', 'addEventListener', 'innerHTML', 'classList', 'createElement'],
    examples: ['document.getElementById()', 'element.addEventListener()', 'element.innerHTML'],
    benefits: [
      'Interactividad web',
      'Manipulación dinámica',
      'Respuesta a eventos',
      'Actualización de contenido'
    ],
    codeExample: `// Seleccionar elementos
const boton = document.getElementById('miBoton');
const titulo = document.querySelector('.titulo');
const parrafos = document.querySelectorAll('p');

// Agregar event listeners
boton.addEventListener('click', function() {
  titulo.innerHTML = '¡Botón clickeado!';
  titulo.style.color = 'blue';
});

// Crear elementos dinámicamente
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo nuevo';
nuevoParrafo.classList.add('destacado');

// Agregar al DOM
document.body.appendChild(nuevoParrafo);

// Manipular clases
const elemento = document.querySelector('.miElemento');
elemento.classList.add('activo');
elemento.classList.remove('inactivo');
elemento.classList.toggle('visible');`
  },
  {
    id: 'async',
    name: 'Programación Asíncrona',
    description: 'Manejo de operaciones no bloqueantes',
    icon: <Settings className="feature-icon" />,
    color: '#f39c12',
    concepts: ['Promises', 'async/await', 'fetch', 'setTimeout', 'callbacks'],
    examples: ['fetch(url)', 'async function()', 'await response', 'Promise.resolve()'],
    benefits: [
      'Mejor rendimiento',
      'Interfaz no bloqueante',
      'Manejo de APIs',
      'Operaciones concurrentes'
    ],
    codeExample: `// Fetch API con Promises
fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => {
    console.log('Datos recibidos:', data);
    mostrarDatos(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Async/Await
async function obtenerDatos() {
  try {
    const response = await fetch('https://api.ejemplo.com/datos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}

// Uso de async/await
async function cargarContenido() {
  const datos = await obtenerDatos();
  document.getElementById('contenido').innerHTML = 
    datos.map(item => \`<p>\${item.titulo}</p>\`).join('');
}

// setTimeout y setInterval
setTimeout(() => {
  console.log('Este mensaje aparece después de 2 segundos');
}, 2000);

const intervalo = setInterval(() => {
  console.log('Mensaje cada 5 segundos');
}, 5000);`
  }
];

const JavaScriptShowcase: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<JSFeature | null>(null);
  const [activeTab, setActiveTab] = useState<'concepts' | 'examples' | 'benefits' | 'code'>('concepts');

  const openFeatureDetails = (feature: JSFeature) => {
    setSelectedFeature(feature);
    setActiveTab('concepts');
  };

  const closeFeatureDetails = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="javascript-showcase">
      <div className="showcase-header">
        <h2>JavaScript: El Lenguaje de la Web</h2>
        <p>Domina los conceptos fundamentales de JavaScript moderno</p>
      </div>

      <div className="features-grid">
        {jsFeatures.map((feature, index) => (
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
                Aprender
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
                        <Code className="concept-icon" />
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

export default JavaScriptShowcase;
