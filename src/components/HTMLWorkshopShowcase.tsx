import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Code,
  FileText,
  Table,
  FormInput,
  Globe,
  CheckCircle,
  ExternalLink,
  Play,
  Download,
  Eye
} from 'lucide-react';
import './HTMLWorkshopShowcase.css';

interface HTMLConcept {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  code?: string;
  liveDemo?: string;
}

const HTMLWorkshopShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'estructura' | 'formularios' | 'tablas' | 'taller'>('estructura');
  const [selectedConcept, setSelectedConcept] = useState<HTMLConcept | null>(null);
  const [showLiveDemo, setShowLiveDemo] = useState(false);

  // Controlar el scroll del body cuando el modal esté abierto
  useEffect(() => {
    if (selectedConcept) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedConcept]);

  const htmlConcepts: Record<string, HTMLConcept[]> = {
    estructura: [
      {
        id: 'planificacion',
        title: 'Planificación de Estructura',
        description: 'Organización y jerarquía de contenido web',
        icon: <FileText className="concept-icon" />,
        code: `<!-- Estructura básica de sitio web -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Sitio Web</title>
  <meta name="description" content="Descripción del sitio">
</head>
<body>
  <header>
    <h1>Mi Empresa</h1>
    <nav>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="hero">
      <h2>Bienvenido</h2>
      <p>Contenido principal del sitio</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 Mi Empresa</p>
  </footer>
</body>
</html>`
      },
      {
        id: 'semantica',
        title: 'Elementos Semánticos',
        description: 'Uso correcto de header, main, section, article, aside, footer',
        icon: <Code className="concept-icon" />,
        code: `<!-- Elementos semánticos HTML5 -->
<header>
  <h1>Título Principal</h1>
  <nav aria-label="Navegación principal">
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="servicios">
    <h2>Nuestros Servicios</h2>
    <article>
      <h3>Desarrollo Web</h3>
      <p>Descripción del servicio...</p>
    </article>
  </section>
  
  <aside>
    <h3>Enlaces Útiles</h3>
    <ul>
      <li><a href="#">Enlace 1</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>Información de contacto</p>
</footer>`
      },
      {
        id: 'navegacion',
        title: 'Navegación y Enlaces',
        description: 'Enlaces internos, externos y navegación accesible',
        icon: <Globe className="concept-icon" />,
        code: `<!-- Navegación y enlaces -->
<nav aria-label="Navegación principal">
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>

<!-- Enlaces externos -->
<a href="https://www.w3.org" target="_blank" rel="noopener">
  W3C
</a>

<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="servicios.html">Servicios</a></li>
    <li aria-current="page">Desarrollo Web</li>
  </ol>
</nav>`
      }
    ],
    formularios: [
      {
        id: 'formulario-basico',
        title: 'Formulario de Contacto',
        description: 'Formulario completo con validación HTML5',
        icon: <FormInput className="concept-icon" />,
        code: `<!-- Formulario de contacto completo -->
<form action="/contacto" method="POST" novalidate>
  <fieldset>
    <legend>Información de Contacto</legend>
    
    <div>
      <label for="nombre">Nombre completo *</label>
      <input type="text" id="nombre" name="nombre" required 
             minlength="2" maxlength="50" 
             aria-describedby="nombre-help">
      <div id="nombre-help">Mínimo 2 caracteres</div>
    </div>
    
    <div>
      <label for="email">Correo electrónico *</label>
      <input type="email" id="email" name="email" required
             aria-describedby="email-help">
      <div id="email-help">Ingresa un email válido</div>
    </div>
    
    <div>
      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" name="telefono"
             pattern="[0-9]{10}" title="10 dígitos">
    </div>
    
    <div>
      <label for="asunto">Asunto *</label>
      <select id="asunto" name="asunto" required>
        <option value="">Selecciona un asunto</option>
        <option value="consulta">Consulta general</option>
        <option value="presupuesto">Solicitar presupuesto</option>
      </select>
    </div>
    
    <div>
      <label for="mensaje">Mensaje *</label>
      <textarea id="mensaje" name="mensaje" required
                minlength="10" maxlength="500"
                rows="5" cols="50"></textarea>
    </div>
    
    <div>
      <label>
        <input type="checkbox" name="newsletter" value="si">
        Suscribirme al boletín
      </label>
    </div>
    
    <button type="submit">Enviar Mensaje</button>
    <button type="reset">Limpiar</button>
  </fieldset>
</form>`
      },
      {
        id: 'validacion',
        title: 'Validación HTML5',
        description: 'Atributos de validación y accesibilidad',
        icon: <CheckCircle className="concept-icon" />,
        code: `<!-- Validación HTML5 -->
<input type="text" required 
       minlength="2" maxlength="50"
       pattern="[A-Za-z\\s]+"
       title="Solo letras y espacios">

<input type="email" required
       aria-describedby="email-error">

<input type="tel" pattern="[0-9]{10}"
       title="10 dígitos numéricos">

<input type="number" min="1" max="100"
       step="1" value="1">

<input type="date" min="2024-01-01"
       max="2024-12-31">

<input type="url" placeholder="https://ejemplo.com">

<!-- Atributos de validación:
- required: Campo obligatorio
- minlength/maxlength: Longitud del texto
- min/max: Valores numéricos
- pattern: Expresión regular
- title: Mensaje de ayuda
- aria-describedby: Descripción accesible
-->`
      }
    ],
    tablas: [
      {
        id: 'tabla-basica',
        title: 'Tabla de Datos',
        description: 'Estructura semántica de tablas con accesibilidad',
        icon: <Table className="concept-icon" />,
        code: `<!-- Tabla de datos estructurada -->
<table>
  <caption>Precios de Servicios de Desarrollo Web</caption>
  <thead>
    <tr>
      <th scope="col">Servicio</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio Base</th>
      <th scope="col">Tiempo Estimado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sitio Web Básico</th>
      <td>Hasta 5 páginas, diseño responsivo</td>
      <td>$500</td>
      <td>2-3 semanas</td>
    </tr>
    <tr>
      <th scope="row">Sitio Web Avanzado</th>
      <td>Hasta 15 páginas, funcionalidades dinámicas</td>
      <td>$1,200</td>
      <td>4-6 semanas</td>
    </tr>
    <tr>
      <th scope="row">E-commerce</th>
      <td>Tienda online completa con carrito</td>
      <td>$2,500</td>
      <td>8-12 semanas</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="3">Descuento por pago anticipado:</th>
      <td>10%</td>
    </tr>
  </tfoot>
</table>`
      },
      {
        id: 'tabla-horarios',
        title: 'Tabla de Horarios',
        description: 'Tabla simple para horarios de atención',
        icon: <Table className="concept-icon" />,
        code: `<!-- Tabla de horarios -->
<table>
  <caption>Horarios de Atención</caption>
  <thead>
    <tr>
      <th scope="col">Día</th>
      <th scope="col">Horario</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lunes - Viernes</th>
      <td>9:00 AM - 6:00 PM</td>
      <td>Abierto</td>
    </tr>
    <tr>
      <th scope="row">Sábado</th>
      <td>10:00 AM - 2:00 PM</td>
      <td>Abierto</td>
    </tr>
    <tr>
      <th scope="row">Domingo</th>
      <td>-</td>
      <td>Cerrado</td>
    </tr>
  </tbody>
</table>

<!-- Atributos importantes:
- caption: Título descriptivo
- scope="col": Encabezado de columna
- scope="row": Encabezado de fila
- colspan: Combinar columnas
- thead/tbody/tfoot: Estructura semántica
-->`
      }
    ],
    taller: [
      {
        id: 'sitio-completo',
        title: 'Sitio Web Informativo Completo',
        description: 'Proyecto completo con todas las secciones',
        icon: <FileText className="concept-icon" />,
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Empresa - Servicios Profesionales</title>
    <meta name="description" content="Servicios profesionales de desarrollo web, diseño UX/UI y consultoría técnica">
    <meta name="keywords" content="desarrollo web, diseño UX, programación, sitios web">
    <meta name="author" content="Mi Empresa">
</head>
<body>
    <!-- Header con navegación -->
    <header>
        <h1>Mi Empresa - Desarrollo Web</h1>
        <nav aria-label="Navegación principal">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="portafolio.html">Portafolio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenido principal -->
    <main>
        <!-- Sección de introducción -->
        <section id="introduccion">
            <h2>Bienvenido a Nuestra Empresa</h2>
            <p>Somos especialistas en desarrollo web moderno, diseño UX/UI y consultoría técnica. 
               Transformamos ideas en soluciones digitales innovadoras.</p>
        </section>

        <!-- Sección de servicios -->
        <section id="servicios">
            <h2>Nuestros Servicios</h2>
            
            <article>
                <h3>Desarrollo Web Frontend</h3>
                <p>Creamos interfaces de usuario modernas y responsivas usando las últimas tecnologías.</p>
                <ul>
                    <li>HTML5 semántico</li>
                    <li>CSS3 y frameworks</li>
                    <li>JavaScript ES6+</li>
                    <li>React y Vue.js</li>
                </ul>
            </article>

            <article>
                <h3>Diseño UX/UI</h3>
                <p>Diseñamos experiencias de usuario intuitivas y atractivas que conectan con tu audiencia.</p>
                <ul>
                    <li>Research de usuarios</li>
                    <li>Wireframing y prototipado</li>
                    <li>Diseño visual</li>
                    <li>Testing de usabilidad</li>
                </ul>
            </article>

            <article>
                <h3>Consultoría Técnica</h3>
                <p>Te ayudamos a tomar decisiones tecnológicas informadas para tu proyecto.</p>
                <ul>
                    <li>Arquitectura de software</li>
                    <li>Optimización de rendimiento</li>
                    <li>Seguridad web</li>
                    <li>Mejores prácticas</li>
                </ul>
            </article>
        </section>

        <!-- Tabla de precios -->
        <section id="precios">
            <h2>Precios de Servicios</h2>
            <table>
                <caption>Precios de Servicios de Desarrollo Web</caption>
                <thead>
                    <tr>
                        <th scope="col">Servicio</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio Base</th>
                        <th scope="col">Tiempo Estimado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Sitio Web Básico</th>
                        <td>Hasta 5 páginas, diseño responsivo</td>
                        <td>$500</td>
                        <td>2-3 semanas</td>
                    </tr>
                    <tr>
                        <th scope="row">Sitio Web Avanzado</th>
                        <td>Hasta 15 páginas, funcionalidades dinámicas</td>
                        <td>$1,200</td>
                        <td>4-6 semanas</td>
                    </tr>
                    <tr>
                        <th scope="row">E-commerce</th>
                        <td>Tienda online completa con carrito</td>
                        <td>$2,500</td>
                        <td>8-12 semanas</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colspan="3">Descuento por pago anticipado:</th>
                        <td>10%</td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <!-- Formulario de contacto -->
        <section id="contacto">
            <h2>Contacto</h2>
            <p>¿Tienes un proyecto en mente? ¡Contáctanos!</p>
            
            <form action="/contacto" method="POST" novalidate>
                <fieldset>
                    <legend>Información de Contacto</legend>
                    
                    <div>
                        <label for="nombre">Nombre completo *</label>
                        <input type="text" id="nombre" name="nombre" required 
                               minlength="2" maxlength="50" 
                               aria-describedby="nombre-help">
                        <div id="nombre-help">Mínimo 2 caracteres</div>
                    </div>
                    
                    <div>
                        <label for="email">Correo electrónico *</label>
                        <input type="email" id="email" name="email" required
                               aria-describedby="email-help">
                        <div id="email-help">Ingresa un email válido</div>
                    </div>
                    
                    <div>
                        <label for="telefono">Teléfono</label>
                        <input type="tel" id="telefono" name="telefono"
                               pattern="[0-9]{10}" title="10 dígitos">
                    </div>
                    
                    <div>
                        <label for="asunto">Asunto *</label>
                        <select id="asunto" name="asunto" required>
                            <option value="">Selecciona un asunto</option>
                            <option value="consulta">Consulta general</option>
                            <option value="presupuesto">Solicitar presupuesto</option>
                            <option value="soporte">Soporte técnico</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="mensaje">Mensaje *</label>
                        <textarea id="mensaje" name="mensaje" required
                                  minlength="10" maxlength="500"
                                  rows="5" cols="50"
                                  aria-describedby="mensaje-help"></textarea>
                        <div id="mensaje-help">Mínimo 10 caracteres</div>
                    </div>
                    
                    <div>
                        <label>
                            <input type="checkbox" name="newsletter" value="si">
                            Suscribirme al boletín
                        </label>
                    </div>
                    
                    <button type="submit">Enviar Mensaje</button>
                    <button type="reset">Limpiar</button>
                </fieldset>
            </form>
        </section>

        <!-- Información adicional -->
        <aside>
            <h3>Enlaces Útiles</h3>
            <ul>
                <li><a href="https://www.w3.org" target="_blank" rel="noopener">W3C</a></li>
                <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
        </aside>
    </main>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
        <address>
            <p>Email: <a href="mailto:contacto@miempresa.com">contacto@miempresa.com</a></p>
            <p>Teléfono: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </address>
    </footer>
</body>
</html>`
      }
    ]
  };

  const renderConceptCard = (concept: HTMLConcept) => (
    <div key={concept.id} className="concept-card" onClick={() => setSelectedConcept(concept)}>
      <div className="concept-header">
        {concept.icon}
        <h3>{concept.title}</h3>
      </div>
      <p className="concept-description">{concept.description}</p>
      <div className="concept-actions">
        <button className="btn-secondary">
          <Eye className="btn-icon" />
          Ver Detalles
        </button>
      </div>
    </div>
  );

  const renderCodeModal = () => {
    if (!selectedConcept) return null;

    return createPortal(
      <div className="modal-overlay" onClick={() => setSelectedConcept(null)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>{selectedConcept.title}</h3>
            <button 
              className="close-btn"
              onClick={() => setSelectedConcept(null)}
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <p className="concept-description">{selectedConcept.description}</p>
            {selectedConcept.code && (
              <div className="code-section">
                <div className="code-header">
                  <span>HTML</span>
                  <button 
                    className="copy-btn"
                    onClick={() => navigator.clipboard.writeText(selectedConcept.code || '')}
                  >
                    <Download className="btn-icon" />
                    Copiar
                  </button>
                </div>
                <pre className="code-block">
                  <code>{selectedConcept.code}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="html-workshop-showcase">
      <div className="showcase-header">
        <h2>Taller HTML - Sitio Web Informativo</h2>
        <p>Aprende a crear sitios web completos con HTML5 semántico, formularios y tablas</p>
      </div>

      <div className="showcase-tabs">
        <button 
          className={activeTab === 'estructura' ? 'active' : ''}
          onClick={() => setActiveTab('estructura')}
        >
          <FileText className="tab-icon" />
          Estructura HTML
        </button>
        <button 
          className={activeTab === 'formularios' ? 'active' : ''}
          onClick={() => setActiveTab('formularios')}
        >
          <FormInput className="tab-icon" />
          Formularios
        </button>
        <button 
          className={activeTab === 'tablas' ? 'active' : ''}
          onClick={() => setActiveTab('tablas')}
        >
          <Table className="tab-icon" />
          Tablas
        </button>
        <button 
          className={activeTab === 'taller' ? 'active' : ''}
          onClick={() => setActiveTab('taller')}
        >
          <Code className="tab-icon" />
          Taller Completo
        </button>
      </div>

      <div className="concepts-grid">
        {htmlConcepts[activeTab].map(renderConceptCard)}
      </div>

      {renderCodeModal()}
    </div>
  );
};

export default HTMLWorkshopShowcase;
