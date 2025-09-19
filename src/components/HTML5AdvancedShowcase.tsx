import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FormInput, Table, CheckCircle, AlertCircle, Code, Play } from 'lucide-react';
import './HTML5AdvancedShowcase.css';

interface FormField {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  validation?: string;
  example: string;
}

interface TableFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  examples: string[];
  benefits: string[];
  codeExample?: string;
}

const formFields: FormField[] = [
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'Correo Electrónico',
    placeholder: 'usuario@ejemplo.com',
    required: true,
    validation: 'Validación automática de formato de email',
    example: '<input type="email" name="email" required>'
  },
  {
    id: 'tel',
    type: 'tel',
    name: 'telefono',
    label: 'Teléfono',
    placeholder: '+57 300 123 4567',
    required: false,
    validation: 'Optimizado para teclado numérico en móviles',
    example: '<input type="tel" name="telefono">'
  },
  {
    id: 'url',
    type: 'url',
    name: 'website',
    label: 'Sitio Web',
    placeholder: 'https://www.ejemplo.com',
    required: false,
    validation: 'Validación automática de URL',
    example: '<input type="url" name="website">'
  },
  {
    id: 'date',
    type: 'date',
    name: 'fecha',
    label: 'Fecha',
    placeholder: '',
    required: true,
    validation: 'Selector de fecha nativo',
    example: '<input type="date" name="fecha" required>'
  },
  {
    id: 'time',
    type: 'time',
    name: 'hora',
    label: 'Hora',
    placeholder: '',
    required: false,
    validation: 'Selector de hora nativo',
    example: '<input type="time" name="hora">'
  },
  {
    id: 'number',
    type: 'number',
    name: 'edad',
    label: 'Edad',
    placeholder: '25',
    required: true,
    validation: 'Solo acepta números',
    example: '<input type="number" name="edad" min="18" max="100" required>'
  },
  {
    id: 'range',
    type: 'range',
    name: 'satisfaccion',
    label: 'Nivel de Satisfacción',
    placeholder: '',
    required: false,
    validation: 'Control deslizante',
    example: '<input type="range" name="satisfaccion" min="1" max="10" value="5">'
  },
  {
    id: 'color',
    type: 'color',
    name: 'color_favorito',
    label: 'Color Favorito',
    placeholder: '',
    required: false,
    validation: 'Selector de color nativo',
    example: '<input type="color" name="color_favorito" value="#3498db">'
  }
];

const tableFeatures: TableFeature[] = [
  {
    id: 'semantic',
    name: 'Tablas Semánticas',
    description: 'Estructura semántica para mejor accesibilidad',
    icon: <Table className="feature-icon" />,
    color: '#e74c3c',
    examples: ['<thead>', '<tbody>', '<tfoot>', '<th scope="col">', '<caption>'],
    benefits: [
      'Mejor accesibilidad',
      'Estructura clara',
      'SEO optimizado',
      'Lectores de pantalla'
    ],
    codeExample: `<table>
  <caption>Ventas Mensuales 2024</caption>
  <thead>
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Ventas</th>
      <th scope="col">Ganancias</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Enero</th>
      <td>$10,000</td>
      <td>$2,500</td>
    </tr>
    <tr>
      <th scope="row">Febrero</th>
      <td>$12,000</td>
      <td>$3,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$22,000</td>
      <td>$5,500</td>
    </tr>
  </tfoot>
</table>`
  },
  {
    id: 'responsive',
    name: 'Tablas Responsivas',
    description: 'Tablas que se adaptan a diferentes pantallas',
    icon: <FormInput className="feature-icon" />,
    color: '#3498db',
    examples: ['overflow-x: auto', 'display: block', 'white-space: nowrap', 'min-width'],
    benefits: [
      'Adaptable a móviles',
      'Scroll horizontal',
      'Mejor UX',
      'Contenido preservado'
    ],
    codeExample: `.responsive-table {
  overflow-x: auto;
  white-space: nowrap;
}

.responsive-table table {
  min-width: 600px;
}

@media (max-width: 768px) {
  .responsive-table {
    font-size: 0.8rem;
  }
  
  .responsive-table th,
  .responsive-table td {
    padding: 0.5rem;
  }
}`
  }
];

const HTML5AdvancedShowcase: React.FC = () => {
  const [selectedField, setSelectedField] = useState<FormField | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<TableFeature | null>(null);
  const [activeTab, setActiveTab] = useState<'forms' | 'tables'>('forms');

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedField) {
          setSelectedField(null);
        } else if (selectedFeature) {
          setSelectedFeature(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedField, selectedFeature]);

  const openFieldDetails = (field: FormField) => {
    console.log('Opening field details:', field);
    setSelectedField(field);
  };

  const closeFieldDetails = () => {
    setSelectedField(null);
  };

  const openFeatureDetails = (feature: TableFeature) => {
    setSelectedFeature(feature);
  };

  const closeFeatureDetails = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="html5-advanced-showcase" style={{ position: 'relative', zIndex: 1 }}>
      <div className="showcase-header">
        <h2>HTML5 Avanzado: Formularios, Tablas y Validaciones</h2>
        <p>Domina las características avanzadas de HTML5 para crear formularios y tablas profesionales</p>
      </div>

      <div className="showcase-tabs">
        <button 
          className={`tab-btn ${activeTab === 'forms' ? 'active' : ''}`}
          onClick={() => setActiveTab('forms')}
        >
          <FormInput className="tab-icon" />
          Formularios Avanzados
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tables' ? 'active' : ''}`}
          onClick={() => setActiveTab('tables')}
        >
          <Table className="tab-icon" />
          Tablas Semánticas
        </button>
      </div>

      {activeTab === 'forms' && (
        <div className="forms-section">
          <div className="section-header">
            <h3>Tipos de Input HTML5</h3>
            <p>Explora los nuevos tipos de input y sus validaciones automáticas</p>
          </div>

          <div className="form-fields-grid">
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className="field-card"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => openFieldDetails(field)}
              >
                <div className="field-header">
                  <div className="field-type">
                    <code>{field.type}</code>
                  </div>
                  <div className="field-info">
                    <h4>{field.label}</h4>
                    <p>{field.validation}</p>
                  </div>
                </div>

                <div className="field-preview">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled
                    className="preview-input"
                  />
                </div>

                <div className="field-actions">
                  <button className="learn-more-btn">
                    <Play className="btn-icon" />
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tables' && (
        <div className="tables-section">
          <div className="section-header">
            <h3>Tablas Semánticas y Responsivas</h3>
            <p>Aprende a crear tablas accesibles y adaptables</p>
          </div>

          <div className="features-grid">
            {tableFeatures.map((feature, index) => (
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
                  <button className="learn-more-btn" style={{ backgroundColor: feature.color }}>
                    <Play className="btn-icon" />
                    Explorar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Field Details Modal */}
      {selectedField && createPortal(
        <div 
          className="field-modal-overlay" 
          onClick={closeFieldDetails} 
          style={{ 
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="field-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <h2>{selectedField.label}</h2>
                <span className="field-type-badge">{selectedField.type}</span>
              </div>
              <button className="close-btn" onClick={closeFieldDetails}>×</button>
            </div>

            <div className="modal-content">
              <div className="field-demo">
                <h3>Demostración</h3>
                <div className="demo-container">
                  <label htmlFor="demo-field">{selectedField.label}</label>
                  <input
                    id="demo-field"
                    type={selectedField.type}
                    name={selectedField.name}
                    placeholder={selectedField.placeholder}
                    required={selectedField.required}
                    className="demo-input"
                  />
                  {selectedField.required && (
                    <span className="required-indicator">* Requerido</span>
                  )}
                </div>
              </div>

              <div className="field-code">
                <h3>Código HTML</h3>
                <div className="code-block">
                  <pre><code>{selectedField.example}</code></pre>
                </div>
              </div>

              <div className="field-validation">
                <h3>Validación</h3>
                <p>{selectedField.validation}</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Feature Details Modal */}
      {selectedFeature && createPortal(
        <div 
          className="feature-modal-overlay" 
          onClick={closeFeatureDetails}
          style={{ 
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
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

            <div className="modal-content">
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

              <div className="benefits-content">
                <h3>Beneficios</h3>
                <ul className="benefits-list">
                  {selectedFeature.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <CheckCircle className="benefit-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedFeature.codeExample && (
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

export default HTML5AdvancedShowcase;
