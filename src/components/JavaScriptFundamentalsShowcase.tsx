import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Code, Play, CheckCircle, Zap, Database, Cpu } from 'lucide-react';
import './JavaScriptFundamentalsShowcase.css';

interface JavaScriptConcept {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  examples: string[];
  benefits: string[];
  codeExample?: string;
  demo?: React.ReactNode;
}

const javascriptConcepts: JavaScriptConcept[] = [
  {
    id: 'variables',
    name: 'Variables y Tipos de Datos',
    description: 'Declaración de variables y tipos de datos en JavaScript',
    icon: <Database className="concept-icon" />,
    color: '#e74c3c',
    examples: ['let', 'const', 'var', 'string', 'number', 'boolean', 'array', 'object'],
    benefits: [
      'Almacenamiento de datos',
      'Reutilización de valores',
      'Tipado dinámico',
      'Flexibilidad en el código'
    ],
    codeExample: `// Declaración de variables
let nombre = "Juan";
const edad = 25;
var activo = true;

// Tipos de datos
let texto = "Hola Mundo";
let numero = 42;
let decimal = 3.14;
let booleano = true;
let arreglo = [1, 2, 3, 4, 5];
let objeto = {
  nombre: "María",
  edad: 30,
  ciudad: "Bogotá"
};

// Template literals
let mensaje = \`Hola \${nombre}, tienes \${edad} años\`;

console.log(mensaje); // "Hola Juan, tienes 25 años"`,
    demo: (
      <div className="variables-demo">
        <div className="demo-item">
          <span className="demo-label">let nombre =</span>
          <span className="demo-value">"Juan"</span>
        </div>
        <div className="demo-item">
          <span className="demo-label">const edad =</span>
          <span className="demo-value">25</span>
        </div>
        <div className="demo-item">
          <span className="demo-label">var activo =</span>
          <span className="demo-value">true</span>
        </div>
      </div>
    )
  },
  {
    id: 'operators',
    name: 'Operadores y Expresiones',
    description: 'Operadores aritméticos, lógicos y de comparación',
    icon: <Cpu className="concept-icon" />,
    color: '#3498db',
    examples: ['+', '-', '*', '/', '%', '===', '!==', '&&', '||', '!'],
    benefits: [
      'Cálculos matemáticos',
      'Comparaciones lógicas',
      'Operaciones booleanas',
      'Manipulación de datos'
    ],
    codeExample: `// Operadores aritméticos
let a = 10;
let b = 3;

console.log(a + b);  // 13 (suma)
console.log(a - b);  // 7 (resta)
console.log(a * b);  // 30 (multiplicación)
console.log(a / b);  // 3.33 (división)
console.log(a % b);  // 1 (módulo)

// Operadores de comparación
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a === b); // false
console.log(a !== b); // true

// Operadores lógicos
let x = true;
let y = false;

console.log(x && y);  // false (AND)
console.log(x || y);  // true (OR)
console.log(!x);      // false (NOT)

// Operadores de asignación
a += 5;  // a = a + 5
b *= 2;  // b = b * 2`,
    demo: (
      <div className="operators-demo">
        <div className="demo-calculation">
          <span>10 + 3 =</span>
          <span className="result">13</span>
        </div>
        <div className="demo-calculation">
          <span>10 &gt; 3 =</span>
          <span className="result">true</span>
        </div>
        <div className="demo-calculation">
          <span>true && false =</span>
          <span className="result">false</span>
        </div>
      </div>
    )
  },
  {
    id: 'functions',
    name: 'Funciones',
    description: 'Declaración y uso de funciones en JavaScript',
    icon: <Zap className="concept-icon" />,
    color: '#2ecc71',
    examples: ['function', 'arrow function', 'parameters', 'return', 'callback'],
    benefits: [
      'Reutilización de código',
      'Modularidad',
      'Abstracción',
      'Organización del código'
    ],
    codeExample: `// Función declarada
function saludar(nombre) {
  return \`Hola, \${nombre}!\`;
}

// Función de expresión
const sumar = function(a, b) {
  return a + b;
};

// Arrow function
const multiplicar = (a, b) => {
  return a * b;
};

// Arrow function simplificada
const dividir = (a, b) => a / b;

// Función con parámetros por defecto
function crearUsuario(nombre, edad = 18, activo = true) {
  return {
    nombre,
    edad,
    activo
  };
}

// Función con callback
function procesarDatos(datos, callback) {
  const resultado = datos.map(item => item * 2);
  callback(resultado);
}

// Uso de las funciones
console.log(saludar("Ana")); // "Hola, Ana!"
console.log(sumar(5, 3));    // 8
console.log(multiplicar(4, 6)); // 24
console.log(dividir(10, 2));  // 5

const usuario = crearUsuario("Carlos", 25);
console.log(usuario); // { nombre: "Carlos", edad: 25, activo: true }`,
    demo: (
      <div className="functions-demo">
        <div className="demo-function">
          <span className="function-name">saludar("Ana")</span>
          <span className="function-result">→ "Hola, Ana!"</span>
        </div>
        <div className="demo-function">
          <span className="function-name">sumar(5, 3)</span>
          <span className="function-result">→ 8</span>
        </div>
        <div className="demo-function">
          <span className="function-name">multiplicar(4, 6)</span>
          <span className="function-result">→ 24</span>
        </div>
      </div>
    )
  },
  {
    id: 'control-flow',
    name: 'Control de Flujo',
    description: 'Condicionales y bucles para controlar la ejecución',
    icon: <Code className="concept-icon" />,
    color: '#f39c12',
    examples: ['if', 'else', 'switch', 'for', 'while', 'do-while', 'break', 'continue'],
    benefits: [
      'Toma de decisiones',
      'Repetición de código',
      'Control de ejecución',
      'Lógica condicional'
    ],
    codeExample: `// Condicionales
let edad = 18;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// Switch
let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día normal");
}

// Bucles
// For loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteración \${i}\`);
}

// While loop
let contador = 0;
while (contador < 3) {
  console.log(\`Contador: \${contador}\`);
  contador++;
}

// For...of loop
const frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
  console.log(fruta);
}

// For...in loop
const persona = { nombre: "Juan", edad: 25 };
for (const propiedad in persona) {
  console.log(\`\${propiedad}: \${persona[propiedad]}\`);
}`,
    demo: (
      <div className="control-flow-demo">
        <div className="demo-conditional">
          <span className="condition">if (edad &gt;= 18)</span>
          <span className="result">→ "Es mayor de edad"</span>
        </div>
        <div className="demo-loop">
          <span className="loop">for (let i = 0; i &lt; 3; i++)</span>
          <div className="loop-results">
            <span>Iteración 0</span>
            <span>Iteración 1</span>
            <span>Iteración 2</span>
          </div>
        </div>
      </div>
    )
  }
];

const JavaScriptFundamentalsShowcase: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<JavaScriptConcept | null>(null);
  const [activeTab, setActiveTab] = useState<'examples' | 'benefits' | 'code' | 'demo'>('examples');

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

  const openConceptDetails = (concept: JavaScriptConcept) => {
    setSelectedConcept(concept);
    setActiveTab('examples');
  };

  const closeConceptDetails = () => {
    setSelectedConcept(null);
  };

  return (
    <div className="javascript-fundamentals-showcase">
      <div className="showcase-header">
        <h2>JavaScript Fundamentals</h2>
        <p>Domina los conceptos fundamentales de JavaScript para crear aplicaciones interactivas</p>
      </div>

      <div className="concepts-grid">
        {javascriptConcepts.map((concept, index) => (
          <div
            key={concept.id}
            className="concept-card"
            style={{ 
              '--concept-color': concept.color,
              animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
            onClick={() => openConceptDetails(concept)}
          >
            <div className="concept-header">
              <div className="concept-icon-container" style={{ backgroundColor: concept.color }}>
                {concept.icon}
              </div>
              <div className="concept-info">
                <h3>{concept.name}</h3>
                <p>{concept.description}</p>
              </div>
            </div>

            <div className="concept-preview">
              <div className="examples-preview">
                {concept.examples.slice(0, 4).map((example, idx) => (
                  <span key={idx} className="example-tag">
                    {example}
                  </span>
                ))}
                {concept.examples.length > 4 && (
                  <span className="more-examples">+{concept.examples.length - 4} más</span>
                )}
              </div>
            </div>

            <div className="concept-actions">
              <button className="learn-more-btn" style={{ backgroundColor: concept.color }}>
                <Play className="btn-icon" />
                Explorar
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedConcept && createPortal(
        <div className="concept-modal-overlay" onClick={closeConceptDetails}>
          <div className="concept-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon" style={{ backgroundColor: selectedConcept.color }}>
                {selectedConcept.icon}
              </div>
              <div className="modal-title">
                <h2>{selectedConcept.name}</h2>
                <p>{selectedConcept.description}</p>
              </div>
              <button className="close-btn" onClick={closeConceptDetails}>×</button>
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
              {selectedConcept.demo && (
                <button 
                  className={`tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('demo')}
                >
                  Demo
                </button>
              )}
            </div>

            <div className="modal-content">
              {activeTab === 'examples' && (
                <div className="examples-content">
                  <h3>Ejemplos de Uso</h3>
                  <div className="examples-grid">
                    {selectedConcept.examples.map((example, index) => (
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
                  <h3>Beneficios</h3>
                  <ul className="benefits-list">
                    {selectedConcept.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <CheckCircle className="benefit-icon" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'code' && selectedConcept.codeExample && (
                <div className="code-content">
                  <h3>Ejemplo de Código</h3>
                  <div className="code-block">
                    <pre><code>{selectedConcept.codeExample}</code></pre>
                  </div>
                </div>
              )}

              {activeTab === 'demo' && selectedConcept.demo && (
                <div className="demo-content">
                  <h3>Demostración en Vivo</h3>
                  <div className="demo-container">
                    {selectedConcept.demo}
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

export default JavaScriptFundamentalsShowcase;
