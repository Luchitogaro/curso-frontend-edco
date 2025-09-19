
export interface SessionData {
  id: number;
  title: string;
  duration: string;
  level: string;
  completed?: boolean;
  objectives: string[];
  content: {
    theoretical: string[];
    theoreticalDetails?: { [key: string]: string };
    practical: string[];
  };
  activities: {
    title: string;
    duration: string;
    description: string;
  }[];
  homework: string[];
  materials: string[];
  exercises: {
    title: string;
    description: string;
    code?: string;
    solution?: string;
  }[];
}

export const sessionsData: SessionData[] = [
  {
    id: 1,
    title: "Introducción al Desarrollo Web",
    duration: "3 horas",
    level: "Principiante",
    completed: false,
    objectives: [
      "Comprender qué es el desarrollo frontend y backend",
      "Conocer las tecnologías HTML, CSS y JavaScript",
      "Configurar el entorno de desarrollo con VS Code",
      "Aprender a usar las herramientas de desarrollo del navegador"
    ],
    content: {
      theoretical: [
        "Frontend vs Backend: Diferencias y responsabilidades",
        "HTML: Estructura y contenido de las páginas web",
        "CSS: Estilos y presentación visual",
        "JavaScript: Interactividad y lógica del lado cliente",
        "El navegador como intérprete de código web",
        "DevTools: Herramientas de desarrollo del navegador",
        "Editores de código: VS Code y extensiones esenciales",
        "Flujo de trabajo básico en desarrollo web"
      ],
      theoreticalDetails: {
        "Frontend vs Backend: Diferencias y responsabilidades": "El desarrollo web se divide en dos partes principales: Frontend (cliente) y Backend (servidor). El Frontend es todo lo que el usuario ve e interactúa directamente en el navegador, incluyendo la interfaz de usuario, animaciones, y la experiencia del usuario. El Backend maneja la lógica del servidor, bases de datos, autenticación, y APIs. Ambos trabajan juntos para crear aplicaciones web completas y funcionales.\n\n**Ejemplos:**\n```javascript\n// FRONTEND (JavaScript en el navegador)\nfunction mostrarUsuario(usuario) {\n  document.getElementById('nombre').textContent = usuario.nombre;\n  document.getElementById('email').textContent = usuario.email;\n}\n\n// BACKEND (Node.js/Express)\napp.get('/api/usuario/:id', (req, res) => {\n  const usuario = database.findById(req.params.id);\n  res.json(usuario);\n});\n\n// Responsabilidades:\n// Frontend: UI, UX, validación cliente, animaciones\n// Backend: APIs, base de datos, seguridad, lógica de negocio\n```",
        
        "HTML: Estructura y contenido de las páginas web": "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de una página usando elementos (tags) que describen diferentes partes del contenido. HTML es la base de toda página web y proporciona la estructura semántica que otros lenguajes como CSS y JavaScript pueden modificar y mejorar.\n\n**Ejemplos:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mi Página Web</title>\n</head>\n<body>\n  <header>\n    <h1>Mi Sitio Web</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#inicio\">Inicio</a></li>\n        <li><a href=\"#sobre\">Sobre</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section id=\"inicio\">\n      <h2>Bienvenido</h2>\n      <p>Contenido principal de la página.</p>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Sitio</p>\n  </footer>\n</body>\n</html>\n```",
        
        "CSS: Estilos y presentación visual": "CSS (Cascading Style Sheets) es el lenguaje que controla la presentación visual de las páginas HTML. Permite definir colores, fuentes, espaciado, layout, animaciones y otros aspectos visuales. CSS separa el contenido (HTML) de la presentación, haciendo que las páginas sean más mantenibles y flexibles. CSS usa selectores para aplicar estilos a elementos específicos.\n\n**Ejemplos:**\n```css\n/* Selectores básicos */\nh1 {\n  color: #333;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.navbar {\n  background-color: #007bff;\n  padding: 1rem;\n}\n\n#boton-principal {\n  background-color: #28a745;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .navbar {\n    flex-direction: column;\n  }\n}\n```",
        
        "JavaScript: Interactividad y lógica del lado cliente": "JavaScript es un lenguaje de programación que permite agregar interactividad, animaciones, validación de formularios, y lógica compleja a las páginas web. Se ejecuta en el navegador del usuario y puede manipular el DOM, hacer peticiones a servidores, manejar eventos del usuario, y crear experiencias dinámicas. JavaScript es esencial para aplicaciones web modernas e interactivas.\n\n**Ejemplos:**\n```javascript\n// Manipulación del DOM\ndocument.getElementById('boton').addEventListener('click', function() {\n  alert('¡Botón clickeado!');\n});\n\n// Validación de formulario\nfunction validarFormulario() {\n  const email = document.getElementById('email').value;\n  if (!email.includes('@')) {\n    alert('Email inválido');\n    return false;\n  }\n  return true;\n}\n\n// Petición a API\nfetch('/api/datos')\n  .then(response => response.json())\n  .then(data => {\n    console.log('Datos recibidos:', data);\n  });\n```",
        
        "El navegador como intérprete de código web": "El navegador web es el software que interpreta y ejecuta el código HTML, CSS y JavaScript para mostrar páginas web al usuario. Procesa el HTML para crear el DOM (Document Object Model), aplica los estilos CSS para el renderizado visual, y ejecuta el JavaScript para agregar interactividad. Diferentes navegadores pueden interpretar el código de manera ligeramente diferente, por lo que es importante probar en múltiples navegadores.\n\n**Ejemplos:**\n```javascript\n// Proceso de carga de página:\n// 1. HTML → DOM Tree\n// 2. CSS → CSSOM Tree\n// 3. DOM + CSSOM → Render Tree\n// 4. JavaScript → Interactividad\n\n// Verificar compatibilidad del navegador\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js');\n}\n\n// Detectar características del navegador\nconst esModerno = 'fetch' in window && 'Promise' in window;\nconsole.log('Navegador moderno:', esModerno);\n```",
        
        "DevTools: Herramientas de desarrollo del navegador": "Las DevTools (Herramientas de Desarrollo) son utilidades integradas en los navegadores modernos que permiten inspeccionar, depurar y optimizar páginas web. Incluyen herramientas para inspeccionar elementos HTML, depurar JavaScript, analizar rendimiento, monitorear peticiones de red, y mucho más. Son esenciales para el desarrollo web profesional.\n\n**Ejemplos:**\n```javascript\n// Herramientas principales:\n// Elements: Inspeccionar y modificar HTML/CSS\n// Console: Ejecutar JavaScript y ver logs\n// Network: Monitorear peticiones HTTP\n// Sources: Depurar código JavaScript\n// Performance: Analizar rendimiento\n\n// Comandos útiles en Console:\nconsole.log('Mensaje de debug');\nconsole.table([{nombre: 'Juan', edad: 25}]);\nconsole.time('operacion');\n// ... código ...\nconsole.timeEnd('operacion');\n\n// Inspeccionar elementos\n$0.style.backgroundColor = 'red'; // Modificar elemento seleccionado\n```",
        
        "Editores de código: VS Code y extensiones esenciales": "VS Code (Visual Studio Code) es uno de los editores de código más populares para desarrollo web. Ofrece sintaxis highlighting, autocompletado, debugging integrado, y un ecosistema extenso de extensiones. Las extensiones esenciales incluyen Live Server para desarrollo local, Prettier para formateo de código, ESLint para linting, y muchas otras que mejoran la productividad del desarrollador.\n\n**Ejemplos:**\n```json\n// settings.json de VS Code\n{\n  \"editor.formatOnSave\": true,\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n  \"emmet.includeLanguages\": {\n    \"javascript\": \"javascriptreact\"\n  },\n  \"liveServer.settings.port\": 5500\n}\n\n// Extensiones recomendadas:\n// - Live Server: Servidor local con recarga automática\n// - Prettier: Formateo automático de código\n// - ESLint: Detección de errores y mejores prácticas\n// - Auto Rename Tag: Renombrar tags HTML automáticamente\n// - Bracket Pair Colorizer: Colorear brackets para mejor legibilidad\n```",
        
        "Flujo de trabajo básico en desarrollo web": "El flujo de trabajo típico en desarrollo web incluye escribir código, probarlo localmente, hacer commit a control de versiones, y desplegar a producción. Este proceso iterativo permite desarrollar, probar, y mejorar aplicaciones web de manera sistemática. Las herramientas modernas como Git, npm, y servicios de hosting facilitan este flujo de trabajo.\n\n**Ejemplos:**\n```bash\n# Flujo de trabajo típico:\n# 1. Crear proyecto\nmkdir mi-proyecto\ncd mi-proyecto\n\n# 2. Inicializar Git\ngit init\ngit add .\ngit commit -m \"Commit inicial\"\n\n# 3. Desarrollo local\ncode .  # Abrir VS Code\nnpm start  # Servidor de desarrollo\n\n# 4. Control de versiones\ngit add .\ngit commit -m \"Nueva funcionalidad\"\ngit push origin main\n\n# 5. Despliegue\n# Deploy a Netlify, Vercel, GitHub Pages, etc.\n```"
      },
      practical: [
        "Instalación y configuración de VS Code",
        "Instalación de extensiones esenciales: Live Server, Prettier, ESLint",
        "Exploración de DevTools: Elements, Console, Network, Sources",
        "Creación del primer archivo HTML con estructura básica",
        "Configuración del entorno de desarrollo"
      ]
    },
    activities: [
      {
        title: "Configuración de Visual Studio Code",
        duration: "30 min",
        description: "Descargar VS Code, instalar extensiones esenciales (Live Server, Prettier, ESLint, HTML CSS Support), configurar temas y atajos de teclado"
      },
      {
        title: "Análisis de la Evolución Web",
        duration: "45 min",
        description: "Explorar sitios web de diferentes épocas (Web 1.0, 2.0, 3.0) y analizar sus características distintivas"
      },
      {
        title: "Primer archivo HTML",
        duration: "45 min",
        description: "Crear estructura básica de HTML5 con DOCTYPE, html, head, body y explorar etiquetas fundamentales"
      },
      {
        title: "Exploración de DevTools",
        duration: "30 min",
        description: "Aprender a usar las herramientas de desarrollo del navegador: Elements, Console, Network, Sources"
      }
    ],
    homework: [
      "Crear una página HTML con información personal usando estructura HTML5",
      "Incluir: DOCTYPE, meta tags, título, párrafo de presentación, lista de hobbies",
      "Investigar sobre elementos semánticos de HTML5 (header, nav, main, section, article, aside, footer)",
      "Configurar VS Code con extensiones recomendadas y personalizar el entorno de trabajo"
    ],
    materials: [
      "Computadora con VS Code instalado",
      "Navegador web actualizado (Chrome, Firefox, Safari, Edge)",
      "Conexión a internet",
      "Extensiones de VS Code: Live Server, Prettier, ESLint, HTML CSS Support"
    ],
    exercises: [
      {
        title: "Página Personal con Estructura HTML5",
        description: "Crea tu primera página web con información personal usando estructura HTML5 semántica y elementos modernos.",
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <!-- Tu código aquí -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mi primera página web personal">
    <title>Mi Primera Página - [Tu Nombre]</title>
</head>
<body>
    <header>
    <h1>¡Hola! Soy [Tu Nombre]</h1>
        <nav>
            <ul>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="sobre-mi">
            <h2>Sobre mí</h2>
            <p>Esta es mi primera página web. Estoy aprendiendo desarrollo frontend y explorando la evolución del desarrollo web desde Web 1.0 hasta Web 3.0.</p>
        </section>
        
        <section id="hobbies">
    <h2>Mis Hobbies</h2>
    <ul>
                <li>Programación web</li>
        <li>Música</li>
        <li>Deportes</li>
                <li>Tecnología</li>
    </ul>
        </section>
    </main>
    
    <footer id="contacto">
        <p>&copy; 2024 [Tu Nombre]. Aprendiendo desarrollo frontend.</p>
    </footer>
</body>
</html>`
      }
    ]
  },
  {
    id: 2,
    title: "HTML5 - Fundamentos",
    duration: "3 horas",
    level: "Principiante",
    completed: false,
    objectives: [
      "Dominar las etiquetas básicas de HTML5",
      "Crear estructura semántica de páginas web",
      "Implementar elementos semánticos modernos",
      "Desarrollar una página personal completa"
    ],
    content: {
      theoretical: [
        "Etiquetas básicas de HTML5: html, head, body, title",
        "Elementos semánticos: header, nav, main, section, article, aside, footer",
        "Estructura de contenido: h1-h6, p, div, span",
        "Listas: ul, ol, li y sus variaciones",
        "Enlaces: a, href, target, rel",
        "Imágenes: img, src, alt, figure, figcaption",
        "Metadatos: meta charset, viewport, description",
        "Buenas prácticas de estructura HTML5",
        "Git y GitHub: control de versiones para desarrolladores"
      ],
      theoreticalDetails: {
        "Etiquetas básicas de HTML5: html, head, body, title": "HTML5 introduce una estructura básica mejorada con etiquetas fundamentales que definen la arquitectura de toda página web. La etiqueta <html> es el contenedor raíz que especifica el idioma del documento. <head> contiene metadatos y recursos no visibles. <body> contiene todo el contenido visible. <title> define el título que aparece en la pestaña del navegador.\n\n**Ejemplos:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mi Página Web</title>\n</head>\n<body>\n  <!-- Contenido visible aquí -->\n</body>\n</html>\n\n<!-- Estructura mínima HTML5:\n- DOCTYPE html: Declara HTML5\n- html lang=\"es\": Idioma español\n- head: Metadatos y recursos\n- body: Contenido visible\n- title: Título de la pestaña\n```",
        
        "Elementos semánticos: header, nav, main, section, article, aside, footer": "Los elementos semánticos de HTML5 proporcionan significado estructural al contenido, mejorando la accesibilidad y SEO. <header> contiene encabezados y navegación principal. <nav> define áreas de navegación. <main> es el contenido principal único. <section> agrupa contenido relacionado. <article> representa contenido independiente. <aside> contiene información complementaria. <footer> incluye información de pie de página.\n\n**Ejemplos:**\n```html\n<header>\n  <h1>Mi Sitio Web</h1>\n  <nav>\n    <ul>\n      <li><a href=\"#inicio\">Inicio</a></li>\n      <li><a href=\"#sobre\">Sobre</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Título del Artículo</h2>\n    <p>Contenido del artículo...</p>\n  </article>\n  \n  <aside>\n    <h3>Información Adicional</h3>\n    <p>Contenido complementario...</p>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2024 Mi Sitio</p>\n</footer>\n```",
        
        "Estructura de contenido: h1-h6, p, div, span": "Los elementos de estructura de contenido organizan y jerarquizan la información. Los encabezados h1-h6 crean una jerarquía de títulos (h1 es el más importante). <p> define párrafos de texto. <div> es un contenedor genérico para agrupar elementos. <span> es un contenedor inline para texto o elementos pequeños. La jerarquía correcta de encabezados es crucial para SEO y accesibilidad.\n\n**Ejemplos:**\n```html\n<h1>Título Principal de la Página</h1>\n<h2>Sección Principal</h2>\n<p>Este es un párrafo de texto que contiene información importante sobre el tema.</p>\n\n<h3>Subsección</h3>\n<div class=\"contenedor\">\n  <p>Párrafo dentro de un div contenedor.</p>\n  <span class=\"destacado\">Texto destacado</span>\n</div>\n\n<h4>Detalle Específico</h4>\n<p>Información más específica...</p>\n\n<!-- Jerarquía correcta:\n- h1: Solo uno por página\n- h2: Secciones principales\n- h3: Subsecciones\n- h4-h6: Detalles específicos\n```",
        
        "Listas: ul, ol, li y sus variaciones": "Las listas organizan información de manera estructurada. <ul> crea listas no ordenadas (con viñetas). <ol> crea listas ordenadas (con números). <li> define cada elemento de la lista. Las listas pueden anidarse y combinarse para crear estructuras complejas. Son fundamentales para navegación, menús y organización de contenido.\n\n**Ejemplos:**\n```html\n<!-- Lista no ordenada -->\n<ul>\n  <li>Elemento 1</li>\n  <li>Elemento 2</li>\n  <li>Elemento 3</li>\n</ul>\n\n<!-- Lista ordenada -->\n<ol>\n  <li>Primer paso</li>\n  <li>Segundo paso</li>\n  <li>Tercer paso</li>\n</ol>\n\n<!-- Lista anidada -->\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>Node.js</li>\n      <li>Python</li>\n    </ul>\n  </li>\n</ul>\n```",
        
        "Enlaces: a, href, target, rel": "Los enlaces conectan páginas y recursos. <a> es la etiqueta de enlace. href especifica la URL de destino. target controla dónde se abre el enlace (_blank para nueva ventana). rel define la relación con el recurso enlazado. Los enlaces son fundamentales para la navegación web y SEO.\n\n**Ejemplos:**\n```html\n<!-- Enlace interno -->\n<a href=\"#seccion\">Ir a sección</a>\n\n<!-- Enlace externo -->\n<a href=\"https://www.ejemplo.com\" target=\"_blank\" rel=\"noopener\">\n  Sitio externo\n</a>\n\n<!-- Enlace con email -->\n<a href=\"mailto:contacto@ejemplo.com\">Enviar email</a>\n\n<!-- Enlace con teléfono -->\n<a href=\"tel:+1234567890\">Llamar</a>\n\n<!-- Enlace de descarga -->\n<a href=\"archivo.pdf\" download>Descargar PDF</a>\n\n<!-- Atributos importantes:\n- href: URL de destino\n- target=\"_blank\": Nueva ventana\n- rel=\"noopener\": Seguridad\n- download: Forzar descarga\n```",
        
        "Imágenes: img, src, alt, figure, figcaption": "Las imágenes enriquecen el contenido visual. <img> inserta imágenes con src (fuente) y alt (texto alternativo). <figure> agrupa imágenes con su descripción. <figcaption> proporciona leyenda para la imagen. El atributo alt es crucial para accesibilidad y SEO.\n\n**Ejemplos:**\n```html\n<!-- Imagen básica -->\n<img src=\"imagen.jpg\" alt=\"Descripción de la imagen\" width=\"300\" height=\"200\">\n\n<!-- Imagen con figure -->\n<figure>\n  <img src=\"diagrama.png\" alt=\"Diagrama de arquitectura web\">\n  <figcaption>Arquitectura de una aplicación web moderna</figcaption>\n</figure>\n\n<!-- Imagen responsiva -->\n<img src=\"imagen.jpg\" \n     alt=\"Paisaje montañoso\" \n     srcset=\"imagen-small.jpg 480w, imagen-large.jpg 800w\"\n     sizes=\"(max-width: 600px) 480px, 800px\">\n\n<!-- Atributos importantes:\n- src: Ruta de la imagen\n- alt: Texto alternativo (obligatorio)\n- width/height: Dimensiones\n- srcset: Imágenes responsivas\n```",
        
        "Metadatos: meta charset, viewport, description": "Los metadatos proporcionan información sobre la página. charset especifica la codificación de caracteres (UTF-8). viewport controla el comportamiento en dispositivos móviles. description es el resumen que aparece en resultados de búsqueda. Estos metadatos son esenciales para SEO y experiencia de usuario.\n\n**Ejemplos:**\n```html\n<head>\n  <!-- Codificación de caracteres -->\n  <meta charset=\"UTF-8\">\n  \n  <!-- Viewport para móviles -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n  <!-- Descripción para SEO -->\n  <meta name=\"description\" content=\"Aprende desarrollo web frontend con HTML5, CSS3 y JavaScript\">\n  \n  <!-- Palabras clave -->\n  <meta name=\"keywords\" content=\"HTML5, CSS3, JavaScript, desarrollo web\">\n  \n  <!-- Autor -->\n  <meta name=\"author\" content=\"Tu Nombre\">\n  \n  <!-- Open Graph para redes sociales -->\n  <meta property=\"og:title\" content=\"Curso de Desarrollo Web\">\n  <meta property=\"og:description\" content=\"Aprende desarrollo frontend\">\n  <meta property=\"og:image\" content=\"imagen-social.jpg\">\n</head>\n```",
        
        "Buenas prácticas de estructura HTML5": "Las buenas prácticas de HTML5 mejoran la accesibilidad, SEO y mantenibilidad. Usa elementos semánticos apropiados, mantén una jerarquía correcta de encabezados, incluye atributos alt en imágenes, usa metadatos completos, valida el código HTML, y sigue estándares web. Estas prácticas aseguran que tu código sea profesional y funcional.\n\n**Ejemplos:**\n```html\n<!-- ✅ BUENAS PRÁCTICAS -->\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Título Descriptivo - Sitio Web</title>\n  <meta name=\"description\" content=\"Descripción clara y concisa\">\n</head>\n<body>\n  <header>\n    <h1>Título Principal</h1>\n    <nav aria-label=\"Navegación principal\">\n      <ul>\n        <li><a href=\"#inicio\">Inicio</a></li>\n        <li><a href=\"#sobre\">Sobre</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Sección Principal</h2>\n      <article>\n        <h3>Artículo</h3>\n        <p>Contenido del artículo...</p>\n        <img src=\"imagen.jpg\" alt=\"Descripción detallada de la imagen\">\n      </article>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Sitio Web</p>\n  </footer>\n</body>\n</html>\n\n<!-- Principios clave:\n- Elementos semánticos apropiados\n- Jerarquía correcta de encabezados\n- Atributos alt descriptivos\n- Metadatos completos\n- Accesibilidad (aria-label)\n- Validación HTML5\n```",
        
        "Git y GitHub: control de versiones para desarrolladores": "Git es un sistema de control de versiones que permite rastrear cambios en archivos y coordinar el trabajo entre múltiples desarrolladores. GitHub es una plataforma web que aloja repositorios Git y facilita la colaboración. Son herramientas esenciales para cualquier desarrollador moderno.\n\n**¿Qué es Git?**\nGit es un sistema de control de versiones distribuido que:\n- Rastrea cambios en archivos a lo largo del tiempo\n- Permite trabajar en equipo de manera coordinada\n- Mantiene un historial completo de todos los cambios\n- Permite volver a versiones anteriores si es necesario\n\n**¿Qué es GitHub?**\nGitHub es una plataforma web que:\n- Aloja repositorios Git en la nube\n- Facilita la colaboración entre desarrolladores\n- Proporciona herramientas para revisión de código\n- Permite alojar sitios web estáticos (GitHub Pages)\n\n**Configuración inicial de Git:**\n```bash\n# Configurar tu nombre y email (solo la primera vez)\ngit config --global user.name \"Tu Nombre\"\ngit config --global user.email \"tu.email@ejemplo.com\"\n\n# Verificar la configuración\ngit config --list\n```\n\n**Crear un repositorio en GitHub:**\n1. Ve a github.com y crea una cuenta\n2. Haz clic en \"New repository\" o el botón \"+\"\n3. Nombra tu repositorio (ej: \"mi-primer-proyecto\")\n4. Agrega una descripción opcional\n5. Elige si será público o privado\n6. NO marques \"Initialize with README\" (lo haremos manualmente)\n7. Haz clic en \"Create repository\"\n\n**Configurar SSH Key para GitHub (Recomendado):**\n\n**En macOS:**\n```bash\n# 1. Verificar si ya tienes SSH keys\nls -la ~/.ssh\n\n# 2. Generar nueva SSH key\nssh-keygen -t ed25519 -C \"tu.email@ejemplo.com\"\n\n# 3. Cuando te pregunte dónde guardar, presiona Enter (usa la ubicación por defecto)\n# 4. Opcionalmente, agrega una frase de contraseña\n\n# 5. Iniciar el agente SSH\neval \"$(ssh-agent -s)\"\n\n# 6. Agregar la clave SSH al agente\nssh-add ~/.ssh/id_ed25519\n\n# 7. Copiar la clave pública al portapapeles\npbcopy < ~/.ssh/id_ed25519.pub\n\n# 8. Ir a GitHub > Settings > SSH and GPG keys > New SSH key\n# 9. Pegar la clave y darle un título descriptivo\n# 10. Hacer clic en \"Add SSH key\"\n\n# 11. Probar la conexión\nssh -T git@github.com\n```\n\n**En Windows (Git Bash o PowerShell):**\n```bash\n# 1. Abrir Git Bash o PowerShell como administrador\n\n# 2. Generar nueva SSH key\nssh-keygen -t ed25519 -C \"tu.email@ejemplo.com\"\n\n# 3. Cuando te pregunte dónde guardar, presiona Enter\n# 4. Opcionalmente, agrega una frase de contraseña\n\n# 5. Iniciar el agente SSH\neval \"$(ssh-agent -s)\"\n\n# 6. Agregar la clave SSH al agente\nssh-add ~/.ssh/id_ed25519\n\n# 7. Copiar la clave pública (en Git Bash)\nclip < ~/.ssh/id_ed25519.pub\n\n# O en PowerShell:\nGet-Content ~/.ssh/id_ed25519.pub | Set-Clipboard\n\n# 8. Ir a GitHub > Settings > SSH and GPG keys > New SSH key\n# 9. Pegar la clave y darle un título descriptivo\n# 10. Hacer clic en \"Add SSH key\"\n\n# 11. Probar la conexión\nssh -T git@github.com\n```\n\n**Ventajas de usar SSH:**\n- No necesitas escribir usuario y contraseña cada vez\n- Más seguro que HTTPS\n- Permite clonar repositorios privados fácilmente\n- Configuración única por computadora\n\n**Comandos básicos de Git:**\n```bash\n# Inicializar un repositorio local\ngit init\n\n# Agregar archivos al área de preparación (staging)\ngit add .                    # Agregar todos los archivos\ngit add archivo.html         # Agregar un archivo específico\ngit add *.html               # Agregar todos los archivos .html\n\n# Hacer commit (guardar cambios)\ngit commit -m \"Mensaje descriptivo del cambio\"\n\n# Conectar con repositorio remoto (HTTPS)\ngit remote add origin https://github.com/tu-usuario/mi-repositorio.git\n\n# Conectar con repositorio remoto (SSH - Recomendado)\ngit remote add origin git@github.com:tu-usuario/mi-repositorio.git\n\n# Subir cambios a GitHub\ngit push -u origin main\n\n# Descargar cambios de GitHub\ngit pull origin main\n\n# Clonar repositorio (HTTPS)\ngit clone https://github.com/usuario/repositorio.git\n\n# Clonar repositorio (SSH - Recomendado)\ngit clone git@github.com:usuario/repositorio.git\n\n# Ver el estado del repositorio\ngit status\n\n# Ver el historial de commits\ngit log --oneline\n```\n\n**Flujo de trabajo típico:**\n```bash\n# 1. Crear o modificar archivos\n# 2. Ver qué archivos han cambiado\ngit status\n\n# 3. Agregar archivos al staging\ngit add .\n\n# 4. Hacer commit con mensaje descriptivo\ngit commit -m \"Agregar página de inicio con HTML5 semántico\"\n\n# 5. Subir cambios a GitHub\ngit push origin main\n```\n\n**Buenas prácticas para escribir mensajes de commit:**\n\n**Estructura del mensaje:**\n- Usa el presente y en imperativo (\"agrega\", no \"agregó\")\n- Primera línea ≤ 50 caracteres: tipo + scope + resumen\n- Deja línea en blanco y explica el porqué en el cuerpo (opcional)\n- Pie (footer) para issues, breaking changes o co-autores\n\n**Tipos de commit:**\n```bash\n# feat: Nueva funcionalidad que el usuario puede ver\ngit commit -m \"feat: envía correo de bienvenida tras el registro\"\n\n# fix: Corrige un error que hacía caer la aplicación\ngit commit -m \"fix: evita crash cuando el carrito está vacío en el checkout\"\n\n# refactor: Mejora interna del código; no cambia comportamiento\ngit commit -m \"refactor(product): simplifica lógica de cálculo de precio\"\n\n# test: Agrega/actualiza pruebas; no toca código de producción\ngit commit -m \"test(cart): cubre caso borde de cantidad cero\"\n\n# chore: Tareas de mantenimiento (dependencias, scripts)\ngit commit -m \"chore: actualiza Next.js a la versión 14.2.3\"\n\n# docs: Cambios únicamente en documentación o comentarios\ngit commit -m \"docs: actualiza tabla de variables de entorno en README\"\n\n# ci: Modifica la configuración del pipeline de CI/CD\ngit commit -m \"ci: incluye Node 22 en la matriz de pruebas\"\n\n# perf: Optimización de rendimiento\ngit commit -m \"perf: debounce en entrada de búsqueda para reducir llamados API\"\n```\n\n**Ejemplos específicos para desarrollo web:**\n```bash\n# ✅ Buenos mensajes para proyectos web\ngit commit -m \"feat(contact): agrega formulario de contacto con validación\"\ngit commit -m \"fix(nav): corrige error en navegación móvil\"\ngit commit -m \"style(header): actualiza estilos CSS para mejor responsividad\"\ngit commit -m \"refactor(api): simplifica lógica de consumo de datos\"\ngit commit -m \"docs(readme): actualiza instrucciones de instalación\"\n\n# ❌ Malos mensajes\ngit commit -m \"cambios\"\ngit commit -m \"fix\"\ngit commit -m \"update\"\ngit commit -m \"mejoras\"\ngit commit -m \"correcciones\"\n```\n\n**Consejos adicionales:**\n- **Sé específico**: Explica qué cambiaste y dónde\n- **Usa inglés o español consistentemente**: Mantén el mismo idioma en todo el proyecto\n- **Incluye contexto**: Si es necesario, agrega más detalles en el cuerpo del mensaje\n- **Referencia issues**: Usa \"Fixes #123\" o \"Closes #456\" cuando corresponda\n\n**Comandos útiles adicionales:**\n```bash\n# Ver diferencias entre archivos\ngit diff\n\n# Deshacer cambios en archivos no agregados\ngit checkout -- archivo.html\n\n# Ver información del repositorio remoto\ngit remote -v\n\n# Clonar un repositorio existente\ngit clone https://github.com/usuario/repositorio.git\n```\n\n**Consejos para principiantes:**\n1. **Haz commits frecuentes**: Es mejor hacer muchos commits pequeños que pocos grandes\n2. **Usa mensajes descriptivos**: Explica qué cambiaste y por qué\n3. **Siempre haz git status**: Antes de hacer commit, verifica qué archivos vas a incluir\n4. **Haz pull antes de push**: Si trabajas en equipo, siempre descarga los últimos cambios\n5. **No tengas miedo de experimentar**: Git te permite deshacer casi cualquier cosa\n\n**Estructura de archivos recomendada:**\n```\nmi-proyecto/\n├── index.html          # Página principal\n├── css/\n│   └── styles.css      # Estilos\n├── js/\n│   └── script.js       # JavaScript\n├── images/             # Imágenes\n├── README.md           # Documentación\n└── .gitignore          # Archivos a ignorar\n```\n\n**Archivo .gitignore básico:**\n```\n# Archivos del sistema\n.DS_Store\nThumbs.db\n\n# Archivos temporales\n*.tmp\n*.log\n\n# Carpetas de dependencias\nnode_modules/\n\n# Archivos de configuración local\n.env\n```\n\nGit y GitHub son herramientas fundamentales que te permitirán:\n- Mantener un historial de todos tus proyectos\n- Colaborar con otros desarrolladores\n- Mostrar tu trabajo a empleadores\n- Aprender de proyectos de código abierto\n- Desplegar sitios web de forma gratuita"
      },
      practical: [
        "Crear estructura básica de HTML5",
        "Implementar elementos semánticos en página web",
        "Desarrollar navegación con elementos nav",
        "Crear secciones de contenido con article y section",
        "Configurar Git, SSH keys y crear repositorio en GitHub",
        "Ejercicio práctico: página personal completa con control de versiones"
      ]
    },
    activities: [
      {
        title: "Estructura semántica",
        duration: "45 min",
        description: "Crear página web usando elementos semánticos de HTML5"
      },
      {
        title: "Formulario de contacto",
        duration: "45 min",
        description: "Implementar formulario con campos de texto, email, teléfono y área de texto"
      },
      {
        title: "Galería de imágenes",
        duration: "30 min",
        description: "Crear galería usando figure, img y alt text para accesibilidad"
      },
      {
        title: "Control de versiones con Git",
        duration: "30 min",
        description: "Configurar Git, SSH keys, crear repositorio en GitHub y hacer primeros commits"
      }
    ],
    homework: [
      "Completar página de portafolio con HTML semántico",
      "Incluir: header, navegación, secciones, formulario de contacto",
      "Validar código en W3C Validator",
      "Subir proyecto a GitHub con commits descriptivos"
    ],
    materials: [
      "Archivos de la sesión anterior",
      "Imágenes para la galería",
      "W3C Validator (online)"
    ],
    exercises: [
      {
        title: "Ejercicio 1: Estructura Básica HTML5",
        description: "Crea la estructura básica de una página HTML5 con todos los elementos fundamentales: DOCTYPE, html, head, body, metadatos y título.",
        code: `<!-- Ejercicio 1: Estructura Básica HTML5
Crea una página HTML5 completa con:
- DOCTYPE html
- Elemento html con lang="es"
- Head con charset UTF-8, viewport y title
- Body con contenido básico
-->`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mi primera página HTML5 - Aprendiendo desarrollo web">
    <meta name="author" content="Tu Nombre">
    <title>Mi Primera Página HTML5</title>
</head>
<body>
    <h1>¡Bienvenido a mi página HTML5!</h1>
    <p>Esta es mi primera página web creada con HTML5.</p>
</body>
</html>`
      },
      {
        title: "Ejercicio 2: Elementos Semánticos",
        description: "Implementa una página web usando elementos semánticos HTML5: header, nav, main, section, article, aside y footer.",
        code: `<!-- Ejercicio 2: Elementos Semánticos
Crea una página web sobre tu ciudad favorita usando:
- header con título y navegación
- main con contenido principal
- section para agrupar contenido relacionado
- article para contenido independiente
- aside para información complementaria
- footer para información de pie
-->`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Ciudad Favorita - Barcelona</title>
</head>
<body>
    <header>
        <h1>Barcelona: La Ciudad de los Sueños</h1>
        <nav>
            <ul>
                <li><a href="#historia">Historia</a></li>
                <li><a href="#lugares">Lugares de Interés</a></li>
                <li><a href="#gastronomia">Gastronomía</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="historia">
            <h2>Historia de Barcelona</h2>
            <article>
                <h3>Fundación Romana</h3>
                <p>Barcelona fue fundada como una colonia romana en el siglo I a.C.</p>
            </article>
            <article>
                <h3>Edad Media</h3>
                <p>Durante la Edad Media, Barcelona se convirtió en un importante centro comercial.</p>
            </article>
        </section>
        
        <section id="lugares">
            <h2>Lugares de Interés</h2>
            <article>
                <h3>Sagrada Familia</h3>
                <p>La obra maestra inacabada de Antoni Gaudí.</p>
            </article>
            <article>
                <h3>Park Güell</h3>
                <p>Un parque público con arquitectura modernista única.</p>
            </article>
        </section>
        
        <aside>
            <h3>Datos Curiosos</h3>
            <ul>
                <li>Población: 1.6 millones</li>
                <li>Idiomas: Catalán y Español</li>
                <li>Clima: Mediterráneo</li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Información sobre Barcelona</p>
        <p>Última actualización: Enero 2024</p>
    </footer>
</body>
</html>`
      },
      {
        title: "Ejercicio 3: Enlaces y Navegación",
        description: "Crea una página con diferentes tipos de enlaces: internos, externos, email, teléfono y descarga.",
        code: `<!-- Ejercicio 3: Enlaces y Navegación
Crea una página de contacto con:
- Enlaces internos para navegación
- Enlaces externos a redes sociales
- Enlace de email
- Enlace de teléfono
- Enlace de descarga de CV
-->`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto - Mi Portafolio</title>
</head>
<body>
    <header>
        <h1>Mi Portafolio Profesional</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre Mí</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="contacto">
            <h2>Información de Contacto</h2>
            <p>¡Me encantaría conocer tu proyecto!</p>
            
            <h3>Contacto Directo</h3>
            <ul>
                <li>Email: <a href="mailto:contacto@miportafolio.com">contacto@miportafolio.com</a></li>
                <li>Teléfono: <a href="tel:+34612345678">+34 612 345 678</a></li>
                <li>CV: <a href="cv.pdf" download>Descargar mi CV</a></li>
            </ul>
            
            <h3>Redes Sociales</h3>
            <ul>
                <li><a href="https://linkedin.com/in/miperfil" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="https://github.com/miusuario" target="_blank" rel="noopener">GitHub</a></li>
                <li><a href="https://twitter.com/miusuario" target="_blank" rel="noopener">Twitter</a></li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
    </footer>
</body>
</html>`
      },
      {
        title: "Ejercicio 4: Imágenes y Multimedia",
        description: "Implementa una galería de imágenes usando img, figure, figcaption y elementos multimedia básicos.",
        code: `<!-- Ejercicio 4: Imágenes y Multimedia
Crea una galería de fotos de viajes con:
- Imágenes con atributos src, alt, width, height
- Elementos figure y figcaption
- Diferentes formatos de imagen
- Enlaces a imágenes en alta resolución
-->`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Viajes</title>
</head>
<body>
    <header>
        <h1>Mis Viajes por el Mundo</h1>
        <nav>
            <ul>
                <li><a href="#europa">Europa</a></li>
                <li><a href="#asia">Asia</a></li>
                <li><a href="#america">América</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="europa">
            <h2>Europa</h2>
            
            <figure>
                <img src="paris.jpg" 
                     alt="Torre Eiffel al atardecer en París" 
                     width="400" 
                     height="300">
                <figcaption>Torre Eiffel, París - Francia</figcaption>
            </figure>
            
            <figure>
                <img src="roma.jpg" 
                     alt="Coliseo Romano en Roma" 
                     width="400" 
                     height="300">
                <figcaption>Coliseo Romano, Roma - Italia</figcaption>
            </figure>
            
            <figure>
                <img src="london.jpg" 
                     alt="Big Ben y el Parlamento de Londres" 
                     width="400" 
                     height="300">
                <figcaption>Big Ben, Londres - Reino Unido</figcaption>
            </figure>
        </section>
        
        <section id="asia">
            <h2>Asia</h2>
            
            <figure>
                <img src="tokyo.jpg" 
                     alt="Skyline de Tokio con el Monte Fuji al fondo" 
                     width="400" 
                     height="300">
                <figcaption>Skyline de Tokio, Japón</figcaption>
            </figure>
            
            <figure>
                <img src="bangkok.jpg" 
                     alt="Templo Wat Pho en Bangkok" 
                     width="400" 
                     height="300">
                <figcaption>Templo Wat Pho, Bangkok - Tailandia</figcaption>
            </figure>
        </section>
        
        <aside>
            <h3>Consejos para Viajeros</h3>
            <ul>
                <li>Lleva siempre una cámara</li>
                <li>Investiga sobre la cultura local</li>
                <li>Prueba la comida tradicional</li>
                <li>Respeta los lugares sagrados</li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Galería de Viajes. Fotos tomadas durante mis aventuras.</p>
    </footer>
</body>
</html>`
      },
      {
        title: "Ejercicio 5: Listas y Organización",
        description: "Crea una página con diferentes tipos de listas: ordenadas, no ordenadas y listas anidadas para organizar información.",
        code: `<!-- Ejercicio 5: Listas y Organización
Crea una página sobre tu stack tecnológico con:
- Listas ordenadas para pasos de aprendizaje
- Listas no ordenadas para tecnologías
- Listas anidadas para categorías
- Listas de definición para términos técnicos
-->`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Stack Tecnológico</title>
</head>
<body>
    <header>
        <h1>Mi Stack Tecnológico de Desarrollo Web</h1>
    </header>
    
    <main>
        <section id="tecnologias">
            <h2>Tecnologías que Manejo</h2>
            
            <h3>Frontend</h3>
            <ul>
                <li>HTML5
                    <ul>
                        <li>Elementos semánticos</li>
                        <li>Formularios avanzados</li>
                        <li>APIs nativas</li>
                    </ul>
                </li>
                <li>CSS3
                    <ul>
                        <li>Flexbox</li>
                        <li>Grid Layout</li>
                        <li>Animaciones</li>
                    </ul>
                </li>
                <li>JavaScript
                    <ul>
                        <li>ES6+</li>
                        <li>DOM Manipulation</li>
                        <li>APIs</li>
                    </ul>
                </li>
            </ul>
            
            <h3>Backend</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
            </ul>
        </section>
        
        <section id="proceso-aprendizaje">
            <h2>Mi Proceso de Aprendizaje</h2>
            <ol>
                <li>Fundamentos de HTML5
                    <ol>
                        <li>Estructura básica</li>
                        <li>Elementos semánticos</li>
                        <li>Formularios</li>
                    </ol>
                </li>
                <li>Estilos con CSS3
                    <ol>
                        <li>Selectores</li>
                        <li>Layout (Flexbox/Grid)</li>
                        <li>Responsive Design</li>
                    </ol>
                </li>
                <li>Programación con JavaScript
                    <ol>
                        <li>Sintaxis básica</li>
                        <li>DOM y eventos</li>
                        <li>APIs y fetch</li>
                    </ol>
                </li>
                <li>Frameworks y Librerías
                    <ol>
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                    </ol>
                </li>
            </ol>
        </section>
        
        <section id="definiciones">
            <h2>Glosario Técnico</h2>
            <dl>
                <dt>HTML5</dt>
                <dd>Lenguaje de marcado para crear la estructura de páginas web.</dd>
                
                <dt>CSS3</dt>
                <dd>Lenguaje de estilos para dar formato y diseño a páginas web.</dd>
                
                <dt>JavaScript</dt>
                <dd>Lenguaje de programación para añadir interactividad a las páginas web.</dd>
                
                <dt>DOM</dt>
                <dd>Modelo de Objetos del Documento - interfaz para manipular elementos HTML.</dd>
                
                <dt>API</dt>
                <dd>Interfaz de Programación de Aplicaciones - permite comunicación entre sistemas.</dd>
            </dl>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Stack Tecnológico. Aprendiendo constantemente.</p>
    </footer>
</body>
</html>`
      }
    ]
  },
  {
    id: 3,
    title: "HTML5 Avanzado",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Dominar formularios avanzados en HTML5",
      "Implementar diferentes tipos de inputs",
      "Crear validaciones nativas del navegador",
      "Desarrollar tablas semánticas y responsivas"
    ],
    content: {
      theoretical: [
        "Formularios avanzados: form, input, textarea, select, button",
        "Tipos de input HTML5: email, tel, url, date, time, number, range, color",
        "Validación nativa: required, pattern, min, max, step",
        "Elementos de formulario: label, fieldset, legend",
        "Tablas semánticas: table, thead, tbody, tfoot, tr, th, td",
        "Accesibilidad: aria-label, aria-describedby, alt text",
        "Atributos de validación: novalidate, formnovalidate",
        "Elementos multimedia: audio, video, canvas"
      ],
      theoreticalDetails: {
        "Formularios avanzados: form, input, textarea, select, button": "Los formularios HTML5 permiten recopilar datos del usuario de manera estructurada. <form> es el contenedor principal que agrupa elementos relacionados. <input> captura diferentes tipos de datos. <textarea> permite texto multilínea. <select> crea listas desplegables. <button> define acciones del formulario. Los formularios modernos incluyen validación nativa y mejor UX.\n\n**Ejemplos:**\n```html\n<form action=\"/procesar\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Información Personal</legend>\n    \n    <label for=\"nombre\">Nombre completo:</label>\n    <input type=\"text\" id=\"nombre\" name=\"nombre\" required>\n    \n    <label for=\"email\">Correo electrónico:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n    \n    <label for=\"telefono\">Teléfono:</label>\n    <input type=\"tel\" id=\"telefono\" name=\"telefono\">\n    \n    <label for=\"mensaje\">Mensaje:</label>\n    <textarea id=\"mensaje\" name=\"mensaje\" rows=\"4\" cols=\"50\"></textarea>\n    \n    <label for=\"pais\">País:</label>\n    <select id=\"pais\" name=\"pais\">\n      <option value=\"\">Selecciona un país</option>\n      <option value=\"mx\">México</option>\n      <option value=\"es\">España</option>\n      <option value=\"ar\">Argentina</option>\n    </select>\n    \n    <button type=\"submit\">Enviar</button>\n    <button type=\"reset\">Limpiar</button>\n  </fieldset>\n</form>\n```",
        
        "Tipos de input HTML5: email, tel, url, date, time, number, range, color": "HTML5 introduce nuevos tipos de input que mejoran la experiencia del usuario y proporcionan validación automática. email valida direcciones de correo. tel para números telefónicos. url para enlaces web. date/time para fechas y horas. number para valores numéricos. range para sliders. color para selectores de color. Cada tipo tiene validación específica y controles nativos.\n\n**Ejemplos:**\n```html\n<!-- Input de email con validación -->\n<input type=\"email\" placeholder=\"usuario@ejemplo.com\" required>\n\n<!-- Input de teléfono -->\n<input type=\"tel\" placeholder=\"+52 55 1234 5678\">\n\n<!-- Input de URL -->\n<input type=\"url\" placeholder=\"https://www.ejemplo.com\">\n\n<!-- Input de fecha -->\n<input type=\"date\" min=\"2024-01-01\" max=\"2024-12-31\">\n\n<!-- Input de hora -->\n<input type=\"time\" step=\"900\">\n\n<!-- Input numérico -->\n<input type=\"number\" min=\"0\" max=\"100\" step=\"5\" value=\"50\">\n\n<!-- Slider de rango -->\n<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n\n<!-- Selector de color -->\n<input type=\"color\" value=\"#ff0000\">\n\n<!-- Input de búsqueda -->\n<input type=\"search\" placeholder=\"Buscar...\">\n\n<!-- Input de contraseña -->\n<input type=\"password\" minlength=\"8\" required>\n```",
        
        "Validación nativa: required, pattern, min, max, step": "La validación nativa de HTML5 proporciona retroalimentación inmediata sin JavaScript. required hace el campo obligatorio. pattern define expresiones regulares para validación personalizada. min/max establecen límites numéricos. step controla incrementos. El navegador muestra mensajes de error automáticamente y previene el envío de formularios inválidos.\n\n**Ejemplos:**\n```html\n<!-- Campo obligatorio -->\n<input type=\"text\" required>\n\n<!-- Validación con patrón regex -->\n<input type=\"text\" pattern=\"[A-Za-z]{3,}\" title=\"Solo letras, mínimo 3 caracteres\">\n\n<!-- Validación de longitud -->\n<input type=\"text\" minlength=\"5\" maxlength=\"20\">\n\n<!-- Validación numérica -->\n<input type=\"number\" min=\"18\" max=\"65\" step=\"1\">\n\n<!-- Validación de email -->\n<input type=\"email\" required>\n\n<!-- Validación de URL -->\n<input type=\"url\" pattern=\"https?://.+\">\n\n<!-- Validación de teléfono -->\n<input type=\"tel\" pattern=\"[0-9]{10}\" title=\"10 dígitos\">\n\n<!-- Validación de fecha -->\n<input type=\"date\" min=\"2024-01-01\" max=\"2024-12-31\">\n\n<!-- Validación de archivo -->\n<input type=\"file\" accept=\".jpg,.png,.pdf\" multiple>\n\n<!-- Mensajes de validación personalizados:\n- title: Mensaje de ayuda\n- pattern: Expresión regular\n- minlength/maxlength: Longitud\n- min/max: Valores numéricos\n```",
        
        "Elementos de formulario: label, fieldset, legend": "Los elementos de estructura de formulario mejoran la accesibilidad y organización. <label> asocia texto descriptivo con controles de entrada. <fieldset> agrupa elementos relacionados. <legend> proporciona título para el fieldset. Estos elementos son esenciales para formularios accesibles y bien estructurados.\n\n**Ejemplos:**\n```html\n<form>\n  <fieldset>\n    <legend>Información de Contacto</legend>\n    \n    <div>\n      <label for=\"nombre\">Nombre completo:</label>\n      <input type=\"text\" id=\"nombre\" name=\"nombre\">\n    </div>\n    \n    <div>\n      <label for=\"email\">Correo electrónico:</label>\n      <input type=\"email\" id=\"email\" name=\"email\">\n    </div>\n  </fieldset>\n  \n  <fieldset>\n    <legend>Preferencias</legend>\n    \n    <div>\n      <label>\n        <input type=\"checkbox\" name=\"newsletter\">\n        Suscribirse al boletín\n      </label>\n    </div>\n    \n    <div>\n      <label>\n        <input type=\"radio\" name=\"genero\" value=\"masculino\">\n        Masculino\n      </label>\n      <label>\n        <input type=\"radio\" name=\"genero\" value=\"femenino\">\n        Femenino\n      </label>\n    </div>\n  </fieldset>\n</form>\n\n<!-- Beneficios:\n- Accesibilidad mejorada\n- Navegación con teclado\n- Lectores de pantalla\n- Agrupación lógica\n```",
        
        "Tablas semánticas: table, thead, tbody, tfoot, tr, th, td": "Las tablas HTML5 organizan datos en filas y columnas de manera semántica. <table> es el contenedor principal. <thead> define encabezados. <tbody> contiene datos principales. <tfoot> incluye resúmenes. <tr> crea filas. <th> define celdas de encabezado. <td> define celdas de datos. Las tablas semánticas mejoran la accesibilidad y estructura.\n\n**Ejemplos:**\n```html\n<table>\n  <caption>Lista de Productos</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Producto</th>\n      <th scope=\"col\">Precio</th>\n      <th scope=\"col\">Stock</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">001</th>\n      <td>Laptop</td>\n      <td>$1,200</td>\n      <td>15</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">002</th>\n      <td>Mouse</td>\n      <td>$25</td>\n      <td>50</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\" colspan=\"3\">Total:</th>\n      <td>$1,225</td>\n    </tr>\n  </tfoot>\n</table>\n\n<!-- Atributos importantes:\n- scope=\"col\": Encabezado de columna\n- scope=\"row\": Encabezado de fila\n- colspan: Combinar columnas\n- rowspan: Combinar filas\n- caption: Título de la tabla\n```",
        
        "Accesibilidad: aria-label, aria-describedby, alt text": "La accesibilidad web asegura que todos los usuarios puedan usar las aplicaciones. aria-label proporciona etiquetas accesibles. aria-describedby asocia descripciones adicionales. alt text describe imágenes para lectores de pantalla. Estos atributos mejoran la experiencia para usuarios con discapacidades.\n\n**Ejemplos:**\n```html\n<!-- Botón con aria-label -->\n<button aria-label=\"Cerrar ventana\">×</button>\n\n<!-- Input con descripción -->\n<label for=\"password\">Contraseña:</label>\n<input type=\"password\" id=\"password\" aria-describedby=\"password-help\">\n<div id=\"password-help\">Mínimo 8 caracteres</div>\n\n<!-- Imagen con alt descriptivo -->\n<img src=\"grafico.png\" alt=\"Gráfico de barras mostrando ventas por trimestre\">\n\n<!-- Tabla accesible -->\n<table>\n  <caption>Ventas por Mes</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\" aria-label=\"Mes del año\">Mes</th>\n      <th scope=\"col\" aria-label=\"Ventas en dólares\">Ventas</th>\n    </tr>\n  </thead>\n</table>\n\n<!-- Formulario accesible -->\n<form>\n  <fieldset>\n    <legend>Información Personal</legend>\n    <label for=\"nombre\">Nombre:</label>\n    <input type=\"text\" id=\"nombre\" aria-required=\"true\">\n  </fieldset>\n</form>\n```",
        
        "Atributos de validación: novalidate, formnovalidate": "Los atributos de validación controlan el comportamiento de validación del navegador. novalidate desactiva la validación HTML5 para todo el formulario. formnovalidate desactiva la validación solo para un botón específico. Estos atributos son útiles cuando se implementa validación personalizada con JavaScript.\n\n**Ejemplos:**\n```html\n<!-- Formulario sin validación HTML5 -->\n<form action=\"/procesar\" method=\"POST\" novalidate>\n  <input type=\"email\" required>\n  <input type=\"password\" required>\n  <button type=\"submit\">Enviar</button>\n</form>\n\n<!-- Botón específico sin validación -->\n<form>\n  <input type=\"email\" required>\n  <input type=\"password\" required>\n  \n  <button type=\"submit\">Enviar (con validación)</button>\n  <button type=\"submit\" formnovalidate>Guardar borrador</button>\n</form>\n\n<!-- Validación personalizada -->\n<form novalidate onsubmit=\"return validarFormulario()\">\n  <input type=\"email\" id=\"email\">\n  <input type=\"password\" id=\"password\">\n  <button type=\"submit\">Enviar</button>\n</form>\n\n<script>\nfunction validarFormulario() {\n  const email = document.getElementById('email').value;\n  const password = document.getElementById('password').value;\n  \n  if (!email.includes('@')) {\n    alert('Email inválido');\n    return false;\n  }\n  \n  if (password.length < 8) {\n    alert('Contraseña muy corta');\n    return false;\n  }\n  \n  return true;\n}\n</script>\n```",
        
        "Elementos multimedia: audio, video, canvas": "HTML5 introduce elementos nativos para multimedia. <audio> reproduce archivos de sonido. <video> muestra archivos de video. <canvas> permite gráficos y animaciones con JavaScript. Estos elementos proporcionan controles nativos y mejoran la experiencia multimedia sin plugins externos.\n\n**Ejemplos:**\n```html\n<!-- Audio con controles -->\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  <source src=\"audio.ogg\" type=\"audio/ogg\">\n  Tu navegador no soporta audio.\n</audio>\n\n<!-- Video con controles -->\n<video controls width=\"640\" height=\"360\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n  Tu navegador no soporta video.\n</video>\n\n<!-- Canvas para gráficos -->\n<canvas id=\"miCanvas\" width=\"400\" height=\"200\"></canvas>\n\n<script>\nconst canvas = document.getElementById('miCanvas');\nconst ctx = canvas.getContext('2d');\n\n// Dibujar un círculo\nctx.beginPath();\nctx.arc(200, 100, 50, 0, 2 * Math.PI);\nctx.fillStyle = 'blue';\nctx.fill();\n\n// Dibujar texto\nctx.font = '20px Arial';\nctx.fillStyle = 'black';\nctx.fillText('Hola Canvas!', 150, 150);\n</script>\n\n<!-- Atributos importantes:\n- controls: Mostrar controles nativos\n- autoplay: Reproducir automáticamente\n- loop: Repetir continuamente\n- muted: Sin sonido por defecto\n- preload: Precargar contenido\n```"
      },
      practical: [
        "Crear formulario de contacto con validaciones",
        "Implementar diferentes tipos de input HTML5",
        "Desarrollar tablas de datos semánticas",
        "Proyecto: maqueta de formulario de contacto",
        "Validación de código HTML con W3C Validator"
      ]
    },
    activities: [
      {
        title: "Formularios HTML5 Avanzados",
        duration: "60 min",
        description: "Crear formularios con nuevos tipos de input HTML5 y validaciones nativas del navegador"
      },
      {
        title: "Tablas Semánticas",
        duration: "45 min",
        description: "Implementar tablas accesibles usando elementos semánticos como thead, tbody, tfoot y th scope"
      },
      {
        title: "Tablas Responsivas",
        duration: "45 min",
        description: "Hacer tablas adaptables a diferentes tamaños de pantalla usando CSS"
      },
      {
        title: "Validaciones y Accesibilidad",
        duration: "30 min",
        description: "Implementar validaciones HTML5 y mejorar la accesibilidad de formularios"
      }
    ],
    homework: [
      "Crear formulario de registro con validaciones HTML5",
      "Implementar tabla de datos con elementos semánticos",
      "Hacer tabla responsiva para dispositivos móviles",
      "Agregar accesibilidad completa a formularios"
    ],
    materials: [
      "Página HTML de la sesión anterior",
      "Navegador con soporte HTML5",
      "Documentación MDN HTML5",
      "Herramientas de validación W3C"
    ],
    exercises: [
      {
        title: "Formulario de Registro HTML5",
        description: "Crea un formulario de registro completo con validaciones HTML5 nativas.",
        code: `<form id="registro" novalidate>
  <fieldset>
    <legend>Información Personal</legend>
    
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="telefono">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono">
    
    <label for="fecha">Fecha de nacimiento:</label>
    <input type="date" id="fecha" name="fecha" required>
    
    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" max="100" required>
    
    <label for="satisfaccion">Nivel de satisfacción:</label>
    <input type="range" id="satisfaccion" name="satisfaccion" min="1" max="10" value="5">
    
    <label for="color">Color favorito:</label>
    <input type="color" id="color" name="color" value="#3498db">
    
    <button type="submit">Registrarse</button>
  </fieldset>
</form>`,
        solution: `<form id="registro" novalidate>
  <fieldset>
    <legend>Información Personal</legend>
    
    <div class="form-group">
      <label for="nombre">Nombre completo:</label>
      <input type="text" id="nombre" name="nombre" required 
             pattern="[A-Za-z\\s]{2,50}" 
             title="Solo letras y espacios, entre 2 y 50 caracteres">
    </div>
    
    <div class="form-group">
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required 
             placeholder="usuario@ejemplo.com">
    </div>
    
    <div class="form-group">
      <label for="telefono">Teléfono:</label>
      <input type="tel" id="telefono" name="telefono" 
             pattern="[0-9+\\-\\s()]{10,15}"
             title="Formato: +57 300 123 4567">
    </div>
    
    <div class="form-group">
      <label for="fecha">Fecha de nacimiento:</label>
      <input type="date" id="fecha" name="fecha" required 
             max="2006-01-01" min="1950-01-01">
    </div>
    
    <div class="form-group">
      <label for="edad">Edad:</label>
      <input type="number" id="edad" name="edad" min="18" max="100" required>
    </div>
    
    <div class="form-group">
      <label for="satisfaccion">Nivel de satisfacción: <span id="satisfaccion-value">5</span></label>
      <input type="range" id="satisfaccion" name="satisfaccion" min="1" max="10" value="5">
    </div>
    
    <div class="form-group">
      <label for="color">Color favorito:</label>
      <input type="color" id="color" name="color" value="#3498db">
    </div>
    
    <button type="submit">Registrarse</button>
  </fieldset>
</form>

<script>
// Actualizar valor del range en tiempo real
document.getElementById('satisfaccion').addEventListener('input', function() {
  document.getElementById('satisfaccion-value').textContent = this.value;
});
</script>`,
      }
    ]
  },
  {
    id: 4,
    title: "Taller HTML",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Crear un sitio informativo completo con HTML5",
      "Implementar secciones estructuradas y navegación",
      "Desarrollar formularios funcionales y tablas de datos",
      "Aplicar buenas prácticas de estructura y semántica"
    ],
    content: {
      theoretical: [
        "Planificación de estructura de sitio web",
        "Organización de contenido en secciones lógicas",
        "Navegación interna y externa",
        "Formularios de contacto y sus validaciones",
        "Tablas de datos y su estructura semántica",
        "Accesibilidad en formularios y tablas",
        "Optimización para motores de búsqueda (SEO básico)",
        "Validación de código HTML"
      ],
      theoreticalDetails: {
        "Planificación de estructura de sitio web": "La planificación de la estructura es fundamental para crear sitios web exitosos. Define la jerarquía de información, identifica las páginas principales, planifica la navegación y considera la experiencia del usuario. Una buena estructura mejora la usabilidad, SEO y mantenibilidad del sitio.\n\n**Ejemplos:**\n```html\n<!-- Estructura típica de sitio web -->\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mi Empresa - Servicios</title>\n  <meta name=\"description\" content=\"Servicios profesionales de desarrollo web\">\n</head>\n<body>\n  <header>\n    <nav>\n      <ul>\n        <li><a href=\"index.html\">Inicio</a></li>\n        <li><a href=\"servicios.html\">Servicios</a></li>\n        <li><a href=\"contacto.html\">Contacto</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section id=\"hero\">\n      <h1>Nuestros Servicios</h1>\n    </section>\n    \n    <section id=\"servicios\">\n      <h2>Servicios Disponibles</h2>\n      <!-- Contenido de servicios -->\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Empresa</p>\n  </footer>\n</body>\n</html>\n\n<!-- Principios de estructura:\n- Jerarquía clara de información\n- Navegación intuitiva\n- Contenido organizado\n- SEO optimizado\n```",
        
        "Organización de contenido en secciones lógicas": "La organización lógica del contenido mejora la comprensión y navegación. Agrupa información relacionada, usa elementos semánticos apropiados, mantén consistencia en la estructura y considera el flujo de lectura del usuario. Esto facilita la comprensión y mejora la experiencia del usuario.\n\n**Ejemplos:**\n```html\n<main>\n  <!-- Sección de introducción -->\n  <section id=\"introduccion\">\n    <h1>Bienvenido a Nuestra Empresa</h1>\n    <p>Somos especialistas en desarrollo web...</p>\n  </section>\n  \n  <!-- Sección de servicios -->\n  <section id=\"servicios\">\n    <h2>Nuestros Servicios</h2>\n    <article>\n      <h3>Desarrollo Web</h3>\n      <p>Creamos sitios web modernos...</p>\n    </article>\n    <article>\n      <h3>Diseño UX/UI</h3>\n      <p>Diseñamos experiencias de usuario...</p>\n    </article>\n  </section>\n  \n  <!-- Sección de equipo -->\n  <section id=\"equipo\">\n    <h2>Nuestro Equipo</h2>\n    <div class=\"equipo-grid\">\n      <article class=\"miembro\">\n        <h3>Juan Pérez</h3>\n        <p>Desarrollador Frontend</p>\n      </article>\n    </div>\n  </section>\n  \n  <!-- Sección de contacto -->\n  <section id=\"contacto\">\n    <h2>Contacto</h2>\n    <p>¿Tienes un proyecto en mente?</p>\n  </section>\n</main>\n\n<!-- Beneficios de organización lógica:\n- Mejor comprensión del contenido\n- Navegación más intuitiva\n- SEO mejorado\n- Mantenimiento más fácil\n```",
        
        "Navegación interna y externa": "La navegación conecta diferentes partes del sitio y recursos externos. La navegación interna usa enlaces relativos para mover entre páginas del mismo sitio. La navegación externa conecta con otros sitios web. Ambas deben ser claras, accesibles y seguir mejores prácticas de UX.\n\n**Ejemplos:**\n```html\n<!-- Navegación principal -->\n<nav aria-label=\"Navegación principal\">\n  <ul>\n    <li><a href=\"index.html\">Inicio</a></li>\n    <li><a href=\"servicios.html\">Servicios</a></li>\n    <li><a href=\"portafolio.html\">Portafolio</a></li>\n    <li><a href=\"contacto.html\">Contacto</a></li>\n  </ul>\n</nav>\n\n<!-- Navegación interna (enlaces a secciones) -->\n<nav aria-label=\"Navegación de secciones\">\n  <ul>\n    <li><a href=\"#servicios\">Servicios</a></li>\n    <li><a href=\"#equipo\">Equipo</a></li>\n    <li><a href=\"#contacto\">Contacto</a></li>\n  </ul>\n</nav>\n\n<!-- Navegación externa -->\n<aside>\n  <h3>Enlaces Útiles</h3>\n  <ul>\n    <li><a href=\"https://www.w3.org\" target=\"_blank\" rel=\"noopener\">W3C</a></li>\n    <li><a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener\">MDN</a></li>\n    <li><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub</a></li>\n  </ul>\n</aside>\n\n<!-- Breadcrumbs (migas de pan) -->\n<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"index.html\">Inicio</a></li>\n    <li><a href=\"servicios.html\">Servicios</a></li>\n    <li aria-current=\"page\">Desarrollo Web</li>\n  </ol>\n</nav>\n\n<!-- Atributos importantes:\n- target=\"_blank\": Nueva ventana\n- rel=\"noopener\": Seguridad\n- aria-label: Accesibilidad\n- aria-current: Página actual\n```",
        
        "Formularios de contacto y sus validaciones": "Los formularios de contacto son esenciales para la comunicación con usuarios. Deben ser intuitivos, accesibles y incluir validación tanto del lado cliente como servidor. Usa elementos semánticos apropiados y proporciona retroalimentación clara al usuario.\n\n**Ejemplos:**\n```html\n<form action=\"/contacto\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Información de Contacto</legend>\n    \n    <div class=\"form-group\">\n      <label for=\"nombre\">Nombre completo *</label>\n      <input type=\"text\" id=\"nombre\" name=\"nombre\" required \n             minlength=\"2\" maxlength=\"50\" \n             aria-describedby=\"nombre-help\">\n      <div id=\"nombre-help\" class=\"help-text\">Mínimo 2 caracteres</div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"email\">Correo electrónico *</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required\n             aria-describedby=\"email-help\">\n      <div id=\"email-help\" class=\"help-text\">Ingresa un email válido</div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"telefono\">Teléfono</label>\n      <input type=\"tel\" id=\"telefono\" name=\"telefono\"\n             pattern=\"[0-9]{10}\" title=\"10 dígitos\">\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"asunto\">Asunto *</label>\n      <select id=\"asunto\" name=\"asunto\" required>\n        <option value=\"\">Selecciona un asunto</option>\n        <option value=\"consulta\">Consulta general</option>\n        <option value=\"presupuesto\">Solicitar presupuesto</option>\n        <option value=\"soporte\">Soporte técnico</option>\n      </select>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"mensaje\">Mensaje *</label>\n      <textarea id=\"mensaje\" name=\"mensaje\" required\n                minlength=\"10\" maxlength=\"500\"\n                rows=\"5\" cols=\"50\"\n                aria-describedby=\"mensaje-help\"></textarea>\n      <div id=\"mensaje-help\" class=\"help-text\">Mínimo 10 caracteres</div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>\n        <input type=\"checkbox\" name=\"newsletter\" value=\"si\">\n        Suscribirme al boletín\n      </label>\n    </div>\n    \n    <button type=\"submit\">Enviar Mensaje</button>\n    <button type=\"reset\">Limpiar</button>\n  </fieldset>\n</form>\n\n<!-- Validación JavaScript -->\n<script>\nfunction validarFormulario(event) {\n  event.preventDefault();\n  \n  const nombre = document.getElementById('nombre').value;\n  const email = document.getElementById('email').value;\n  const mensaje = document.getElementById('mensaje').value;\n  \n  if (nombre.length < 2) {\n    alert('El nombre debe tener al menos 2 caracteres');\n    return false;\n  }\n  \n  if (!email.includes('@')) {\n    alert('Ingresa un email válido');\n    return false;\n  }\n  \n  if (mensaje.length < 10) {\n    alert('El mensaje debe tener al menos 10 caracteres');\n    return false;\n  }\n  \n  // Enviar formulario\n  this.submit();\n}\n</script>\n```",
        
        "Tablas de datos y su estructura semántica": "Las tablas organizan datos de manera estructurada y accesible. Usa elementos semánticos apropiados, incluye encabezados descriptivos, agrupa datos relacionados y considera la accesibilidad. Las tablas bien estructuradas mejoran la comprensión y usabilidad.\n\n**Ejemplos:**\n```html\n<table>\n  <caption>Precios de Servicios de Desarrollo Web</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Servicio</th>\n      <th scope=\"col\">Descripción</th>\n      <th scope=\"col\">Precio Base</th>\n      <th scope=\"col\">Tiempo Estimado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Sitio Web Básico</th>\n      <td>Hasta 5 páginas, diseño responsivo</td>\n      <td>$500</td>\n      <td>2-3 semanas</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sitio Web Avanzado</th>\n      <td>Hasta 15 páginas, funcionalidades dinámicas</td>\n      <td>$1,200</td>\n      <td>4-6 semanas</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">E-commerce</th>\n      <td>Tienda online completa con carrito</td>\n      <td>$2,500</td>\n      <td>8-12 semanas</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\" colspan=\"3\">Descuento por pago anticipado:</th>\n      <td>10%</td>\n    </tr>\n  </tfoot>\n</table>\n\n<!-- Tabla de horarios -->\n<table>\n  <caption>Horarios de Atención</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Día</th>\n      <th scope=\"col\">Horario</th>\n      <th scope=\"col\">Estado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Lunes - Viernes</th>\n      <td>9:00 AM - 6:00 PM</td>\n      <td>Abierto</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sábado</th>\n      <td>10:00 AM - 2:00 PM</td>\n      <td>Abierto</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Domingo</th>\n      <td>-</td>\n      <td>Cerrado</td>\n    </tr>\n  </tbody>\n</table>\n\n<!-- Atributos importantes:\n- caption: Título descriptivo\n- scope=\"col\": Encabezado de columna\n- scope=\"row\": Encabezado de fila\n- colspan: Combinar columnas\n- thead/tbody/tfoot: Estructura semántica\n```",
        
        "Accesibilidad en formularios y tablas": "La accesibilidad asegura que todos los usuarios puedan usar las aplicaciones. En formularios, usa labels apropiados, proporciona descripciones claras y maneja errores de manera accesible. En tablas, incluye encabezados descriptivos y usa elementos semánticos correctos.\n\n**Ejemplos:**\n```html\n<!-- Formulario accesible -->\n<form>\n  <fieldset>\n    <legend>Información Personal</legend>\n    \n    <div class=\"form-group\">\n      <label for=\"nombre\">Nombre completo *</label>\n      <input type=\"text\" id=\"nombre\" name=\"nombre\" required\n             aria-describedby=\"nombre-error nombre-help\"\n             aria-invalid=\"false\">\n      <div id=\"nombre-help\" class=\"help-text\">Ingresa tu nombre completo</div>\n      <div id=\"nombre-error\" class=\"error-text\" role=\"alert\" aria-live=\"polite\"></div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"email\">Correo electrónico *</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required\n             aria-describedby=\"email-error email-help\"\n             aria-invalid=\"false\">\n      <div id=\"email-help\" class=\"help-text\">Ingresa un email válido</div>\n      <div id=\"email-error\" class=\"error-text\" role=\"alert\" aria-live=\"polite\"></div>\n    </div>\n  </fieldset>\n</form>\n\n<!-- Tabla accesible -->\n<table>\n  <caption>Lista de Productos Disponibles</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\" id=\"producto\">Producto</th>\n      <th scope=\"col\" id=\"precio\">Precio</th>\n      <th scope=\"col\" id=\"stock\">Stock</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\" headers=\"producto\">Laptop</th>\n      <td headers=\"precio\">$1,200</td>\n      <td headers=\"stock\">15 unidades</td>\n    </tr>\n  </tbody>\n</table>\n\n<!-- Atributos de accesibilidad:\n- aria-describedby: Descripción adicional\n- aria-invalid: Estado de validación\n- aria-live: Actualizaciones dinámicas\n- role=\"alert\": Mensajes importantes\n- headers: Asociar celdas con encabezados\n```",
        
        "Optimización para motores de búsqueda (SEO básico)": "El SEO básico mejora la visibilidad en motores de búsqueda. Incluye metadatos apropiados, usa elementos semánticos, optimiza imágenes con alt text, crea URLs descriptivas y estructura el contenido jerárquicamente. Estas prácticas mejoran el ranking y la accesibilidad.\n\n**Ejemplos:**\n```html\n<head>\n  <!-- Metadatos básicos -->\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Desarrollo Web Profesional | Mi Empresa</title>\n  <meta name=\"description\" content=\"Servicios profesionales de desarrollo web, diseño UX/UI y consultoría técnica. Transformamos ideas en soluciones digitales.\">\n  <meta name=\"keywords\" content=\"desarrollo web, diseño UX, programación, sitios web\">\n  <meta name=\"author\" content=\"Mi Empresa\">\n  \n  <!-- Open Graph para redes sociales -->\n  <meta property=\"og:title\" content=\"Desarrollo Web Profesional\">\n  <meta property=\"og:description\" content=\"Servicios profesionales de desarrollo web\">\n  <meta property=\"og:image\" content=\"https://miempresa.com/imagen-social.jpg\">\n  <meta property=\"og:url\" content=\"https://miempresa.com\">\n  <meta property=\"og:type\" content=\"website\">\n  \n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"Desarrollo Web Profesional\">\n  <meta name=\"twitter:description\" content=\"Servicios profesionales de desarrollo web\">\n  <meta name=\"twitter:image\" content=\"https://miempresa.com/imagen-social.jpg\">\n</head>\n\n<body>\n  <!-- Estructura semántica -->\n  <header>\n    <h1>Mi Empresa - Desarrollo Web</h1>\n    <nav>\n      <ul>\n        <li><a href=\"servicios.html\">Servicios</a></li>\n        <li><a href=\"portafolio.html\">Portafolio</a></li>\n        <li><a href=\"contacto.html\">Contacto</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Servicios de Desarrollo Web</h2>\n      <article>\n        <h3>Desarrollo Frontend</h3>\n        <p>Creamos interfaces de usuario modernas...</p>\n        <img src=\"frontend.jpg\" alt=\"Desarrollador trabajando en interfaz de usuario moderna\">\n      </article>\n    </section>\n  </main>\n</body>\n\n<!-- Mejores prácticas SEO:\n- Títulos descriptivos y únicos\n- Meta descriptions atractivas\n- Estructura jerárquica de encabezados\n- Alt text descriptivo en imágenes\n- URLs semánticas\n- Contenido de calidad\n```",
        
        "Validación de código HTML": "La validación asegura que el código HTML cumple con estándares web. Usa herramientas como W3C Validator, corrige errores de sintaxis, verifica accesibilidad y asegura compatibilidad entre navegadores. El código válido mejora la funcionalidad y mantenibilidad.\n\n**Ejemplos:**\n```html\n<!-- ✅ Código HTML válido -->\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Página Válida</title>\n</head>\n<body>\n  <header>\n    <h1>Título Principal</h1>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Sección Principal</h2>\n      <p>Contenido de la sección...</p>\n      \n      <article>\n        <h3>Artículo</h3>\n        <p>Contenido del artículo...</p>\n        <img src=\"imagen.jpg\" alt=\"Descripción de la imagen\">\n      </article>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Sitio</p>\n  </footer>\n</body>\n</html>\n\n<!-- ❌ Errores comunes a evitar:\n- Etiquetas no cerradas\n- Atributos sin comillas\n- Elementos anidados incorrectamente\n- DOCTYPE incorrecto\n- Metadatos faltantes\n\n<!-- Herramientas de validación:\n- W3C Markup Validator\n- WAVE (accesibilidad)\n- Lighthouse (rendimiento)\n- Browser DevTools\n```"
      },
      practical: [
        "Crear sitio informativo con múltiples secciones",
        "Implementar navegación entre páginas",
        "Desarrollar formulario de contacto funcional",
        "Crear tabla de datos con información relevante",
        "Aplicar estructura semántica en todo el sitio",
        "Validar código HTML con herramientas W3C"
      ]
    },
    activities: [
      {
        title: "Planificación y Estructura HTML",
        duration: "45 min",
        description: "Teoría: Planificación de sitios web, estructura semántica, organización de contenido. Ejercicio: Crear wireframe de sitio informativo."
      },
      {
        title: "Formularios HTML Avanzados",
        duration: "60 min",
        description: "Teoría: Elementos de formulario, validación HTML5, accesibilidad. Práctica: Crear formulario de contacto completo."
      },
      {
        title: "Tablas y Datos Estructurados",
        duration: "45 min",
        description: "Teoría: Tablas semánticas, accesibilidad, datos estructurados. Práctica: Crear tabla de precios y horarios."
      },
      {
        title: "Taller HTML Completo",
        duration: "90 min",
        description: "Taller: Crear sitio web informativo completo con navegación, formularios, tablas y estructura semántica."
      }
    ],
    homework: [
      "Completar el sitio web informativo con todas las secciones planificadas",
      "Implementar formulario de contacto con validación HTML5 completa",
      "Crear tabla de datos con información relevante de la empresa/servicios",
      "Aplicar estructura semántica correcta en todas las páginas",
      "Validar todo el código HTML con W3C Validator",
      "Optimizar metadatos para SEO básico en todas las páginas",
      "Probar la accesibilidad con herramientas como WAVE"
    ],
    materials: [
      "Editor de código (VS Code recomendado)",
      "Navegador web con DevTools",
      "W3C Markup Validator (validator.w3.org)",
      "WAVE Web Accessibility Evaluator",
      "Plantilla de wireframe para planificación",
      "Documentación MDN HTML5",
      "Ejemplos de formularios y tablas accesibles"
    ],
    exercises: [
      {
        title: "Sitio Web Informativo Completo",
        description: "Crea un sitio web informativo completo con estructura semántica, formularios, tablas y navegación usando HTML5.",
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
  },
  {
    id: 5,
    title: "CSS3 Fundamentos",
    duration: "3 horas",
    level: "Principiante",
    completed: false,
    objectives: [
      "Dominar la sintaxis básica de CSS3",
      "Aplicar selectores y clases correctamente",
      "Trabajar con colores, fuentes y espaciado",
      "Crear estilos básicos para páginas web"
    ],
    content: {
      theoretical: [
        "Sintaxis CSS: reglas, selectores, propiedades y valores",
        "Selectores básicos: elemento, clase (.class), ID (#id)",
        "Modelo de caja: content, padding, border, margin",
        "Colores: nombres, hexadecimal, RGB, RGBA",
        "Tipografías: font-family, font-size, font-weight, line-height",
        "Espaciado: margin, padding, width, height",
        "Unidades CSS: px, em, rem, %, vw, vh",
        "Cascada y especificidad en CSS"
      ],
      theoreticalDetails: {
        "Sintaxis CSS: reglas, selectores, propiedades y valores": "CSS (Cascading Style Sheets) usa una sintaxis específica para aplicar estilos a elementos HTML. Una regla CSS consta de un selector (qué elemento estilizar), propiedades (qué aspecto cambiar) y valores (cómo cambiarlo). La sintaxis básica es: selector { propiedad: valor; }. Las reglas se pueden agrupar y organizar para mantener código limpio y mantenible.\n\n**Ejemplos:**\n```css\n/* Sintaxis básica de CSS */\nh1 {\n  color: blue;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n/* Múltiples propiedades */\n.contenedor {\n  background-color: #f0f0f0;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 10px auto;\n  width: 80%;\n}\n\n/* Reglas agrupadas */\nh1, h2, h3 {\n  font-family: Arial, sans-serif;\n  color: #333;\n}\n\n/* Comentarios en CSS */\n/* Este es un comentario CSS */\n\n/* Estructura de una regla CSS:\nselector {\n  propiedad1: valor1;\n  propiedad2: valor2;\n  propiedad3: valor3;\n}\n```",
        
        "Selectores básicos: elemento, clase (.class), ID (#id)": "Los selectores CSS determinan qué elementos HTML se estilizarán. Los selectores básicos incluyen: elemento (nombre de etiqueta), clase (.nombre-clase), e ID (#nombre-id). Cada tipo tiene diferentes niveles de especificidad y casos de uso. Las clases son reutilizables, los IDs son únicos, y los selectores de elemento aplican estilos a todas las instancias de esa etiqueta.\n\n**Ejemplos:**\n```css\n/* Selector de elemento */\np {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 15px;\n}\n\n/* Selector de clase */\n.destacado {\n  background-color: yellow;\n  padding: 10px;\n  border-left: 4px solid orange;\n}\n\n/* Selector de ID */\n#encabezado-principal {\n  font-size: 32px;\n  color: #2c3e50;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n/* Selectores combinados */\np.destacado {\n  font-weight: bold;\n  color: #e74c3c;\n}\n\n/* Selector descendiente */\n.contenedor p {\n  margin-bottom: 10px;\n}\n\n/* Selector hijo directo */\n.menu > li {\n  display: inline-block;\n  margin-right: 20px;\n}\n\n/* Selector de atributo */\ninput[type=\"email\"] {\n  border: 2px solid #3498db;\n  border-radius: 4px;\n}\n\n/* Especificidad:\n- ID: 100 puntos\n- Clase: 10 puntos\n- Elemento: 1 punto\n```",
        
        "Modelo de caja: content, padding, border, margin": "El modelo de caja CSS define cómo se calcula el tamaño y espaciado de los elementos. Consta de cuatro partes: content (contenido), padding (espaciado interno), border (borde), y margin (espaciado externo). Comprender este modelo es fundamental para el diseño web y el control preciso del layout.\n\n**Ejemplos:**\n```css\n/* Modelo de caja básico */\n.caja {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  background-color: #f9f9f9;\n}\n\n/* Box-sizing: border-box */\n.caja-border-box {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  box-sizing: border-box; /* Incluye padding y border en el width */\n}\n\n/* Padding individual */\n.elemento {\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  padding-left: 25px;\n  /* Equivale a: padding: 10px 20px 15px 25px; */\n}\n\n/* Margin colapsado */\n.seccion {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  /* Los margins verticales se colapsan */\n}\n\n/* Border estilos */\n.borde-estilizado {\n  border-width: 3px;\n  border-style: dashed;\n  border-color: #e74c3c;\n  /* Equivale a: border: 3px dashed #e74c3c; */\n}\n\n/* Cálculo del tamaño total:\n- content-box: width + padding + border + margin\n- border-box: width (incluye padding y border) + margin\n```",
        
        "Colores: nombres, hexadecimal, RGB, RGBA": "CSS ofrece múltiples formas de especificar colores. Los nombres de colores son palabras clave predefinidas. Los valores hexadecimales usan códigos de 6 dígitos. RGB especifica valores de rojo, verde y azul. RGBA añade transparencia (alpha). Cada método tiene sus ventajas y casos de uso específicos.\n\n**Ejemplos:**\n```css\n/* Nombres de colores */\n.titulo {\n  color: red;\n  background-color: lightblue;\n}\n\n/* Colores hexadecimales */\n.encabezado {\n  color: #ffffff;\n  background-color: #2c3e50;\n}\n\n/* RGB */\n.texto {\n  color: rgb(52, 73, 94);\n  background-color: rgb(236, 240, 241);\n}\n\n/* RGBA con transparencia */\n.overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: rgba(255, 255, 255, 0.9);\n}\n\n/* HSL (Hue, Saturation, Lightness) */\n.colorido {\n  color: hsl(200, 50%, 50%);\n  background-color: hsl(120, 70%, 80%);\n}\n\n/* HSLA con transparencia */\n.transparente {\n  background-color: hsla(300, 60%, 70%, 0.3);\n}\n\n/* Variables CSS para colores */\n:root {\n  --color-primario: #3498db;\n  --color-secundario: #e74c3c;\n  --color-fondo: #ecf0f1;\n}\n\n.boton {\n  background-color: var(--color-primario);\n  color: white;\n}\n\n/* Paleta de colores común:\n- Primario: #3498db (azul)\n- Secundario: #e74c3c (rojo)\n- Éxito: #27ae60 (verde)\n- Advertencia: #f39c12 (naranja)\n- Peligro: #e74c3c (rojo)\n- Info: #3498db (azul)\n```",
        
        "Tipografías: font-family, font-size, font-weight, line-height": "Las propiedades de tipografía controlan la apariencia del texto. font-family especifica la fuente, font-size controla el tamaño, font-weight define el grosor, y line-height establece el espaciado entre líneas. Estas propiedades son fundamentales para la legibilidad y el diseño visual.\n\n**Ejemplos:**\n```css\n/* Familia de fuentes */\n.titulo {\n  font-family: 'Arial', 'Helvetica', sans-serif;\n}\n\n/* Tamaño de fuente */\n.texto-grande {\n  font-size: 24px;\n}\n\n.texto-mediano {\n  font-size: 16px;\n}\n\n.texto-pequeno {\n  font-size: 12px;\n}\n\n/* Peso de fuente */\n.normal {\n  font-weight: normal; /* 400 */\n}\n\n.negrita {\n  font-weight: bold; /* 700 */\n}\n\n.extra-negrita {\n  font-weight: 900;\n}\n\n/* Altura de línea */\n.parrafo {\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n/* Propiedades combinadas */\n.encabezado {\n  font-family: 'Georgia', serif;\n  font-size: 28px;\n  font-weight: bold;\n  line-height: 1.2;\n  color: #2c3e50;\n}\n\n/* Fuentes web (Google Fonts) */\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\n\n.moderno {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n}\n\n/* Estilos de texto adicionales */\n.texto-estilizado {\n  font-style: italic;\n  text-decoration: underline;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/* Mejores prácticas:\n- Usar fuentes web para mejor rendimiento\n- Mantener legibilidad con line-height adecuado\n- Usar fallbacks para fuentes\n- Considerar accesibilidad\n```",
        
        "Espaciado: margin, padding, width, height": "Las propiedades de espaciado controlan el tamaño y la distribución de elementos. margin crea espacio fuera del elemento, padding crea espacio dentro, width establece el ancho, y height define la altura. Estas propiedades son esenciales para el layout y la composición visual.\n\n**Ejemplos:**\n```css\n/* Espaciado básico */\n.contenedor {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n/* Margin individual */\n.elemento {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 15px;\n  margin-left: 25px;\n  /* Equivale a: margin: 10px 20px 15px 25px; */\n}\n\n/* Padding uniforme */\n.caja {\n  padding: 20px;\n  /* padding: 20px en todos los lados */\n}\n\n/* Dimensiones específicas */\n.imagen {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n}\n\n/* Espaciado responsivo */\n.seccion {\n  padding: 20px;\n  margin-bottom: 30px;\n}\n\n@media (max-width: 768px) {\n  .seccion {\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n}\n\n/* Centrado horizontal */\n.centrado {\n  width: 50%;\n  margin: 0 auto;\n}\n\n/* Espaciado negativo */\n.superpuesto {\n  margin-top: -10px;\n  position: relative;\n  z-index: 1;\n}\n\n/* Box-sizing para control preciso */\n.caja-precisa {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid #333;\n  box-sizing: border-box;\n  /* El tamaño total será exactamente 200x100px */\n}\n\n/* Unidades de espaciado:\n- px: Píxeles fijos\n- em: Relativo al font-size del elemento\n- rem: Relativo al font-size del root\n- %: Porcentaje del elemento padre\n- vw/vh: Viewport width/height\n```",
        
        "Unidades CSS: px, em, rem, %, vw, vh": "CSS ofrece diferentes unidades para especificar tamaños y distancias. px son píxeles absolutos, em es relativo al font-size del elemento, rem es relativo al font-size del root, % es porcentaje del elemento padre, y vw/vh son relativos al viewport. Cada unidad tiene casos de uso específicos y ventajas.\n\n**Ejemplos:**\n```css\n/* Píxeles (absolutos) */\n.fijo {\n  width: 300px;\n  height: 200px;\n  font-size: 16px;\n}\n\n/* Em (relativo al font-size del elemento) */\n.relativo-em {\n  font-size: 16px;\n  padding: 1em; /* 16px */\n  margin: 0.5em; /* 8px */\n}\n\n/* Rem (relativo al font-size del root) */\nhtml {\n  font-size: 16px;\n}\n\n.relativo-rem {\n  font-size: 1.5rem; /* 24px */\n  padding: 1rem; /* 16px */\n  margin: 0.5rem; /* 8px */\n}\n\n/* Porcentajes */\n.contenedor {\n  width: 100%;\n  max-width: 1200px;\n}\n\n.columna {\n  width: 50%;\n  float: left;\n}\n\n/* Viewport units */\n.pantalla-completa {\n  width: 100vw;\n  height: 100vh;\n}\n\n.seccion-altura {\n  height: 50vh; /* 50% de la altura del viewport */\n}\n\n/* Unidades modernas */\n.moderno {\n  width: clamp(300px, 50%, 800px);\n  font-size: clamp(14px, 2vw, 24px);\n}\n\n/* Responsive con unidades */\n.responsive {\n  font-size: 1rem;\n  padding: 1rem;\n  margin: 0.5rem;\n}\n\n@media (max-width: 768px) {\n  .responsive {\n    font-size: 0.9rem;\n    padding: 0.5rem;\n  }\n}\n\n/* Comparación de unidades:\n- px: Fijo, no escalable\n- em: Escalable con el elemento\n- rem: Escalable con el root\n- %: Relativo al padre\n- vw/vh: Relativo al viewport\n```",
        
        "Cascada y especificidad en CSS": "La cascada determina qué reglas CSS se aplican cuando hay conflictos. La especificidad calcula qué selector tiene más peso. Las reglas se aplican en orden: especificidad, orden de aparición, y !important. Comprender estos conceptos es crucial para escribir CSS predecible y mantenible.\n\n**Ejemplos:**\n```css\n/* Especificidad básica */\np {\n  color: black; /* Especificidad: 1 */\n}\n\n.destacado {\n  color: blue; /* Especificidad: 10 */\n}\n\n#titulo {\n  color: red; /* Especificidad: 100 */\n}\n\n/* Combinación de selectores */\np.destacado {\n  color: green; /* Especificidad: 11 (1 + 10) */\n}\n\n#contenedor p.destacado {\n  color: purple; /* Especificidad: 111 (100 + 1 + 10) */\n}\n\n/* Orden de cascada */\n.primero {\n  color: blue;\n}\n\n.segundo {\n  color: red; /* Este se aplica por aparecer después */\n}\n\n/* !important (usar con precaución) */\n.critico {\n  color: orange !important; /* Sobrescribe todo */\n}\n\n/* Herencia */\n.padre {\n  color: #333;\n  font-size: 16px;\n}\n\n.hijo {\n  /* Hereda color y font-size del padre */\n  font-weight: bold;\n}\n\n/* Reset de herencia */\n.no-hereda {\n  color: initial; /* Valor inicial */\n  font-size: inherit; /* Hereda del padre */\n  margin: unset; /* Valor no establecido */\n}\n\n/* Cálculo de especificidad:\n- Inline styles: 1000\n- IDs: 100\n- Clases, atributos, pseudo-clases: 10\n- Elementos, pseudo-elementos: 1\n- Universal selector: 0\n\n/* Mejores prácticas:\n- Evitar !important\n- Usar clases en lugar de IDs\n- Mantener especificidad baja\n- Organizar CSS por especificidad\n```"
      },
      practical: [
        "Aplicar estilos básicos a elementos HTML",
        "Trabajar con selectores de clase e ID",
        "Implementar modelo de caja en elementos",
        "Ejercicio en vivo: estilizar página web",
        "Crear esquemas de colores y tipografías"
      ]
    },
    activities: [
      {
        title: "Variables y operadores",
        duration: "30 min",
        description: "Declarar variables, realizar operaciones matemáticas y concatenar strings"
      },
      {
        title: "Condicionales y bucles",
        duration: "45 min",
        description: "Crear calculadora básica, juego de adivinanza y contador con bucle"
      },
      {
        title: "Funciones",
        duration: "45 min",
        description: "Crear funciones de declaración, expresión y con parámetros"
      }
    ],
    homework: [
      "Crear 5 ejercicios de JavaScript básico",
      "Implementar calculadora avanzada",
      "Juego de piedra, papel o tijera"
    ],
    materials: [
      "Editor de código",
      "Consola del navegador",
      "Ejercicios de práctica"
    ],
    exercises: [
      {
        title: "Calculadora Básica",
        description: "Crea una calculadora que realice operaciones básicas.",
        code: `// Calculadora básica
function calculadora(operacion, a, b) {
    // Tu código aquí
}

// Ejemplos de uso:
console.log(calculadora('suma', 5, 3)); // Debe mostrar 8
console.log(calculadora('resta', 10, 4)); // Debe mostrar 6
console.log(calculadora('multiplicacion', 3, 7)); // Debe mostrar 21
console.log(calculadora('division', 15, 3)); // Debe mostrar 5`,
        solution: `// Calculadora básica - Solución
function calculadora(operacion, a, b) {
    switch(operacion) {
        case 'suma':
            return a + b;
        case 'resta':
            return a - b;
        case 'multiplicacion':
            return a * b;
        case 'division':
            if (b === 0) {
                return 'Error: División por cero';
            }
            return a / b;
        default:
            return 'Operación no válida';
    }
}

// Ejemplos de uso:
console.log(calculadora('suma', 5, 3)); // 8
console.log(calculadora('resta', 10, 4)); // 6
console.log(calculadora('multiplicacion', 3, 7)); // 21
console.log(calculadora('division', 15, 3)); // 5
console.log(calculadora('division', 10, 0)); // Error: División por cero`
      },
      {
        title: "Juego de Adivinanza",
        description: "Crea un juego donde el usuario debe adivinar un número.",
        code: `// Juego de adivinanza
function juegoAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    const maxIntentos = 7;
    
    // Tu código aquí
}

// Ejecutar el juego
juegoAdivinanza();`,
        solution: `// Juego de adivinanza - Solución
function juegoAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    const maxIntentos = 7;
    
    console.log('¡Bienvenido al juego de adivinanza!');
    console.log('He pensado en un número entre 1 y 100.');
    console.log('Tienes 7 intentos para adivinarlo.');
    
    while (intentos < maxIntentos) {
        const numeroUsuario = parseInt(prompt('Ingresa tu número:'));
        intentos++;
        
        if (numeroUsuario === numeroSecreto) {
            console.log(\`¡Felicitaciones! Adivinaste el número \${numeroSecreto} en \${intentos} intentos.\`);
            return;
        } else if (numeroUsuario < numeroSecreto) {
            console.log('El número es mayor. Te quedan ' + (maxIntentos - intentos) + ' intentos.');
        } else {
            console.log('El número es menor. Te quedan ' + (maxIntentos - intentos) + ' intentos.');
        }
    }
    
    console.log(\`¡Se acabaron los intentos! El número era \${numeroSecreto}.\`);
}

// Ejecutar el juego
juegoAdivinanza();`
      }
    ]
  },
  {
    id: 6,
    title: "Layouts en CSS",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Dominar Flexbox para layouts modernos",
      "Implementar CSS Grid para diseños complejos",
      "Crear diseños responsive con mobile-first",
      "Aplicar técnicas de diseño adaptativo"
    ],
    content: {
      theoretical: [
        "Flexbox: display flex, flex-direction, justify-content, align-items",
        "Propiedades de Flexbox: flex-grow, flex-shrink, flex-basis",
        "CSS Grid: display grid, grid-template-columns, grid-template-rows",
        "Grid areas y posicionamiento de elementos",
        "Responsive Design: mobile-first approach",
        "Media queries: breakpoints comunes",
        "Viewport meta tag y responsive images",
        "Unidades flexibles: fr, minmax(), auto-fit, auto-fill"
      ],
      theoreticalDetails: {
        "Flexbox: display flex, flex-direction, justify-content, align-items": "Flexbox es un sistema de layout unidimensional que permite distribuir elementos de manera flexible. display: flex activa el contenedor flex, flex-direction controla la dirección principal, justify-content alinea elementos en el eje principal, y align-items los alinea en el eje cruzado. Es ideal para layouts simples y componentes de interfaz.\n\n**Ejemplos:**\n```css\n/* Contenedor flex básico */\n.contenedor {\n  display: flex;\n  flex-direction: row; /* row, column, row-reverse, column-reverse */\n  justify-content: center; /* flex-start, center, flex-end, space-between, space-around */\n  align-items: center; /* flex-start, center, flex-end, stretch, baseline */\n  height: 200px;\n  border: 2px solid #333;\n}\n\n/* Navegación horizontal */\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: #2c3e50;\n}\n\n.nav ul {\n  display: flex;\n  list-style: none;\n  gap: 2rem;\n}\n\n/* Centrado perfecto */\n.centrado {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n/* Layout de tarjetas */\n.tarjetas {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-around;\n}\n\n.tarjeta {\n  flex: 1 1 300px;\n  min-width: 250px;\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n/* Formulario horizontal */\n.formulario {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-width: 400px;\n}\n\n.formulario .fila {\n  display: flex;\n  gap: 1rem;\n}\n\n.formulario .campo {\n  flex: 1;\n}\n\n/* Ventajas de Flexbox:\n- Distribución automática del espacio\n- Alineación fácil y precisa\n- Responsive por defecto\n- Control del orden de elementos\n```",
        
        "Propiedades de Flexbox: flex-grow, flex-shrink, flex-basis": "Las propiedades flex-grow, flex-shrink y flex-basis controlan cómo los elementos flex crecen, se encogen y establecen su tamaño base. flex-grow determina cuánto espacio adicional puede ocupar, flex-shrink cuánto puede encogerse, y flex-basis establece el tamaño inicial. La propiedad shorthand flex combina estas tres propiedades.\n\n**Ejemplos:**\n```css\n/* Propiedades individuales */\n.elemento1 {\n  flex-grow: 1; /* Puede crecer */\n  flex-shrink: 1; /* Puede encogerse */\n  flex-basis: 200px; /* Tamaño base */\n}\n\n.elemento2 {\n  flex-grow: 2; /* Crece el doble que elemento1 */\n  flex-shrink: 0; /* No se encoge */\n  flex-basis: 100px;\n}\n\n/* Shorthand flex */\n.elemento3 {\n  flex: 1 1 200px; /* grow shrink basis */\n}\n\n.elemento4 {\n  flex: 2 0 100px; /* Crece más, no se encoge */\n}\n\n/* Valores comunes */\n.flexible {\n  flex: 1; /* Equivale a 1 1 0% */\n}\n\n.fijo {\n  flex: 0 0 200px; /* Tamaño fijo */\n}\n\n.auto {\n  flex: 0 1 auto; /* Tamaño automático */\n}\n\n/* Layout de sidebar */\n.layout {\n  display: flex;\n  height: 100vh;\n}\n\n.sidebar {\n  flex: 0 0 250px; /* Ancho fijo */\n  background: #34495e;\n  color: white;\n}\n\n.contenido {\n  flex: 1; /* Ocupa el resto del espacio */\n  padding: 2rem;\n  overflow-y: auto;\n}\n\n/* Galería de imágenes */\n.galeria {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.imagen {\n  flex: 1 1 200px;\n  min-width: 150px;\n  max-width: 300px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n/* Barra de progreso */\n.barra-progreso {\n  display: flex;\n  height: 20px;\n  background: #ecf0f1;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.progreso {\n  flex: 0 0 60%; /* 60% de progreso */\n  background: #27ae60;\n  transition: flex-basis 0.3s ease;\n}\n\n/* Casos de uso:\n- flex-grow: Distribución proporcional del espacio\n- flex-shrink: Control del encogimiento\n- flex-basis: Tamaño inicial de elementos\n```",
        
        "CSS Grid: display grid, grid-template-columns, grid-template-rows": "CSS Grid es un sistema de layout bidimensional que permite crear layouts complejos con filas y columnas. display: grid activa el contenedor grid, grid-template-columns define las columnas, y grid-template-rows define las filas. Es ideal para layouts complejos, dashboards y diseños que requieren control preciso del posicionamiento.\n\n**Ejemplos:**\n```css\n/* Grid básico */\n.contenedor {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-rows: 100px 1fr 100px;\n  gap: 1rem;\n  height: 100vh;\n}\n\n/* Layout de página */\n.pagina {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  min-height: 100vh;\n}\n\n.header {\n  grid-area: header;\n  background: #2c3e50;\n  color: white;\n  padding: 1rem;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background: #34495e;\n  padding: 1rem;\n}\n\n.main {\n  grid-area: main;\n  padding: 2rem;\n  background: #ecf0f1;\n}\n\n.footer {\n  grid-area: footer;\n  background: #2c3e50;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}\n\n/* Galería de productos */\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  padding: 2rem;\n}\n\n.producto {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  text-align: center;\n}\n\n/* Dashboard */\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 200px);\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.metrica {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.metrica.grande {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n\n/* Formulario en grid */\n.formulario {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem 2rem;\n  max-width: 600px;\n}\n\n.formulario .campo-completo {\n  grid-column: span 2;\n}\n\n/* Ventajas de CSS Grid:\n- Control bidimensional preciso\n- Layouts complejos sin HTML adicional\n- Alineación automática\n- Responsive por defecto\n```",
        
        "Grid areas y posicionamiento de elementos": "Las grid areas permiten nombrar secciones del grid y posicionar elementos usando esos nombres. grid-template-areas define las áreas, y grid-area asigna elementos a esas áreas. También se pueden usar grid-column y grid-row para posicionamiento específico. Esto hace que los layouts sean más semánticos y fáciles de mantener.\n\n**Ejemplos:**\n```css\n/* Layout con grid areas */\n.layout {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-rows: 100px 1fr 100px;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main aside\"\n    \"footer footer footer\";\n  gap: 1rem;\n  min-height: 100vh;\n}\n\n.header {\n  grid-area: header;\n  background: #3498db;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background: #2c3e50;\n  color: white;\n  padding: 1rem;\n}\n\n.main {\n  grid-area: main;\n  padding: 2rem;\n  background: #ecf0f1;\n}\n\n.aside {\n  grid-area: aside;\n  background: #95a5a6;\n  color: white;\n  padding: 1rem;\n}\n\n.footer {\n  grid-area: footer;\n  background: #34495e;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}\n\n/* Posicionamiento específico */\n.elemento {\n  grid-column: 2 / 4; /* Desde columna 2 hasta 4 */\n  grid-row: 1 / 3; /* Desde fila 1 hasta 3 */\n}\n\n.elemento2 {\n  grid-column: span 2; /* Ocupa 2 columnas */\n  grid-row: span 1; /* Ocupa 1 fila */\n}\n\n/* Layout de blog */\n.blog {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  grid-template-areas:\n    \"titulo titulo\"\n    \"contenido sidebar\"\n    \"comentarios sidebar\";\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.titulo {\n  grid-area: titulo;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.contenido {\n  grid-area: contenido;\n  line-height: 1.6;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n}\n\n.comentarios {\n  grid-area: comentarios;\n  margin-top: 2rem;\n}\n\n/* Responsive con grid areas */\n@media (max-width: 768px) {\n  .layout {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"sidebar\"\n      \"footer\";\n  }\n}\n\n/* Ventajas de grid areas:\n- Código más semántico\n- Fácil reorganización\n- Responsive automático\n- Mantenimiento simplificado\n```",
        
        "Responsive Design: mobile-first approach": "El enfoque mobile-first significa diseñar primero para dispositivos móviles y luego expandir para pantallas más grandes. Esto asegura que la experiencia móvil sea óptima y que el diseño se adapte progresivamente. Se usa con media queries que van de menor a mayor tamaño de pantalla.\n\n**Ejemplos:**\n```css\n/* Mobile-first: Estilos base para móviles */\n.contenedor {\n  width: 100%;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n.navegacion {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.tarjetas {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n/* Tablet: 768px y más */\n@media (min-width: 768px) {\n  .contenedor {\n    max-width: 750px;\n    padding: 2rem;\n  }\n  \n  .navegacion {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  \n  .tarjetas {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  \n  .tarjeta {\n    flex: 1 1 300px;\n  }\n}\n\n/* Desktop: 1024px y más */\n@media (min-width: 1024px) {\n  .contenedor {\n    max-width: 1200px;\n  }\n  \n  .tarjetas {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n  \n  .tarjeta {\n    flex: none;\n  }\n}\n\n/* Large desktop: 1200px y más */\n@media (min-width: 1200px) {\n  .contenedor {\n    max-width: 1400px;\n  }\n  \n  .tarjetas {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n/* Tipografía responsive */\n.titulo {\n  font-size: 1.5rem;\n  line-height: 1.2;\n}\n\n@media (min-width: 768px) {\n  .titulo {\n    font-size: 2rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .titulo {\n    font-size: 2.5rem;\n  }\n}\n\n/* Espaciado responsive */\n.seccion {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n}\n\n@media (min-width: 768px) {\n  .seccion {\n    padding: 3rem 2rem;\n    margin-bottom: 3rem;\n  }\n}\n\n/* Ventajas del mobile-first:\n- Mejor rendimiento en móviles\n- Experiencia optimizada\n- Menos código CSS\n- Mejor SEO\n```",
        
        "Media queries: breakpoints comunes": "Las media queries permiten aplicar estilos específicos según las características del dispositivo. Los breakpoints comunes son puntos de quiebre donde el diseño cambia. Los breakpoints estándar incluyen móviles (320px-767px), tablets (768px-1023px), desktop (1024px-1199px), y large desktop (1200px+). Se pueden usar múltiples condiciones para mayor precisión.\n\n**Ejemplos:**\n```css\n/* Breakpoints comunes */\n/* Mobile: hasta 767px */\n@media (max-width: 767px) {\n  .contenedor {\n    padding: 1rem;\n  }\n  \n  .navegacion {\n    display: none;\n  }\n  \n  .menu-hamburguesa {\n    display: block;\n  }\n}\n\n/* Tablet: 768px a 1023px */\n@media (min-width: 768px) and (max-width: 1023px) {\n  .contenedor {\n    padding: 2rem;\n  }\n  \n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Desktop: 1024px a 1199px */\n@media (min-width: 1024px) and (max-width: 1199px) {\n  .contenedor {\n    max-width: 1000px;\n  }\n  \n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n/* Large desktop: 1200px y más */\n@media (min-width: 1200px) {\n  .contenedor {\n    max-width: 1200px;\n  }\n  \n  .grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n/* Orientación */\n@media (orientation: landscape) {\n  .hero {\n    height: 100vh;\n  }\n}\n\n@media (orientation: portrait) {\n  .hero {\n    height: 50vh;\n  }\n}\n\n/* Densidad de píxeles */\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .imagen {\n    image-rendering: -webkit-optimize-contrast;\n  }\n}\n\n/* Modo oscuro */\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #1a1a1a;\n    color: #ffffff;\n  }\n}\n\n/* Reducir movimiento */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* Breakpoints recomendados:\n- Mobile: 320px, 375px, 414px\n- Tablet: 768px, 834px\n- Desktop: 1024px, 1280px, 1440px\n- Large: 1920px, 2560px\n```",
        
        "Viewport meta tag y responsive images": "El viewport meta tag controla cómo se renderiza la página en dispositivos móviles. Las imágenes responsive se adaptan a diferentes tamaños de pantalla usando srcset, sizes, y CSS. Esto es crucial para el rendimiento y la experiencia del usuario en dispositivos móviles.\n\n**Ejemplos:**\n```html\n<!-- Viewport meta tag -->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n\n<!-- Imagen responsive básica -->\n<img src=\"imagen.jpg\" alt=\"Descripción\" style=\"max-width: 100%; height: auto;\">\n\n<!-- Imagen responsive con srcset -->\n<img src=\"imagen-small.jpg\"\n     srcset=\"imagen-small.jpg 480w,\n             imagen-medium.jpg 800w,\n             imagen-large.jpg 1200w\"\n     sizes=\"(max-width: 480px) 100vw,\n            (max-width: 800px) 50vw,\n            25vw\"\n     alt=\"Descripción\">\n\n<!-- Imagen responsive con picture -->\n<picture>\n  <source media=\"(max-width: 768px)\" srcset=\"imagen-mobile.jpg\">\n  <source media=\"(max-width: 1024px)\" srcset=\"imagen-tablet.jpg\">\n  <img src=\"imagen-desktop.jpg\" alt=\"Descripción\">\n</picture>\n```\n\n```css\n/* Imágenes responsive con CSS */\n.imagen-responsive {\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n\n/* Imagen de fondo responsive */\n.hero {\n  background-image: url('hero-mobile.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n}\n\n@media (min-width: 768px) {\n  .hero {\n    background-image: url('hero-tablet.jpg');\n    height: 60vh;\n  }\n}\n\n@media (min-width: 1024px) {\n  .hero {\n    background-image: url('hero-desktop.jpg');\n    height: 80vh;\n  }\n}\n\n/* Galería responsive */\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n.galeria img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n/* Lazy loading */\nimg[loading=\"lazy\"] {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\nimg[loading=\"lazy\"].loaded {\n  opacity: 1;\n}\n\n/* Mejores prácticas:\n- Usar srcset para diferentes resoluciones\n- Implementar lazy loading\n- Optimizar tamaños de imagen\n- Usar formatos modernos (WebP, AVIF)\n```",
        
        "Unidades flexibles: fr, minmax(), auto-fit, auto-fill": "Las unidades flexibles en CSS Grid permiten crear layouts verdaderamente responsivos. fr (fractional unit) distribuye espacio disponible, minmax() define rangos de tamaño, auto-fit ajusta el número de columnas, y auto-fill mantiene el número de columnas. Estas unidades hacen que los grids se adapten automáticamente al contenido y espacio disponible.\n\n**Ejemplos:**\n```css\n/* Unidad fr (fractional) */\n.grid-fr {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 ratio */\n  gap: 1rem;\n}\n\n/* minmax() para rangos */\n.grid-minmax {\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(300px, 2fr);\n  gap: 1rem;\n}\n\n/* auto-fit: ajusta número de columnas */\n.grid-auto-fit {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n/* auto-fill: mantiene número de columnas */\n.grid-auto-fill {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n/* Layout complejo con unidades flexibles */\n.layout-flexible {\n  display: grid;\n  grid-template-columns: 200px minmax(300px, 1fr) 150px;\n  grid-template-rows: 80px 1fr 60px;\n  gap: 1rem;\n  height: 100vh;\n}\n\n/* Galería adaptativa */\n.galeria-adaptativa {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n  padding: 2rem;\n}\n\n/* Dashboard responsivo */\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: minmax(200px, auto);\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.metrica {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.metrica.grande {\n  grid-column: span 2;\n}\n\n/* Formulario flexible */\n.formulario-flexible {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  max-width: 800px;\n}\n\n.campo-completo {\n  grid-column: 1 / -1;\n}\n\n/* Comparación de unidades:\n- fr: Distribuye espacio disponible\n- minmax(): Define rangos de tamaño\n- auto-fit: Ajusta columnas al contenido\n- auto-fill: Mantiene columnas fijas\n```"
      },
      practical: [
        "Crear layouts con Flexbox",
        "Implementar grids responsivos con CSS Grid",
        "Desarrollar navegación flexible",
        "Aplicar responsive design con media queries",
        "Optimizar layouts para diferentes dispositivos"
      ]
    },
    activities: [
      {
        title: "Manipulación del DOM",
        duration: "45 min",
        description: "Seleccionar elementos, modificar contenido y estilos dinámicamente"
      },
      {
        title: "Eventos básicos",
        duration: "45 min",
        description: "Implementar clicks, hover, focus y eventos de teclado"
      },
      {
        title: "Formulario interactivo",
        duration: "30 min",
        description: "Crear validación en tiempo real y feedback visual"
      }
    ],
    homework: [
      "Crear galería de imágenes interactiva",
      "Implementar calculadora con interfaz",
      "Formulario de contacto con validación"
    ],
    materials: [
      "Página HTML con formularios",
      "Imágenes para la galería",
      "Consola del navegador"
    ],
    exercises: [
      {
        title: "Galería Interactiva",
        description: "Crea una galería de imágenes con navegación y zoom.",
        code: `// Galería interactiva
const galeria = document.getElementById('galeria');
const imagenPrincipal = document.getElementById('imagen-principal');
const thumbnails = document.querySelectorAll('.thumbnail');

// Tu código aquí para manejar los clicks en las miniaturas`,
        solution: `// Galería interactiva - Solución
const galeria = document.getElementById('galeria');
const imagenPrincipal = document.getElementById('imagen-principal');
const thumbnails = document.querySelectorAll('.thumbnail');

// Agregar event listeners a las miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Remover clase activa de todas las miniaturas
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Agregar clase activa a la miniatura clickeada
        this.classList.add('active');
        
        // Cambiar la imagen principal
        const nuevaImagen = this.getAttribute('data-imagen');
        imagenPrincipal.src = nuevaImagen;
        imagenPrincipal.alt = this.alt;
    });
});

// Efecto hover en las miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    thumbnail.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`
      }
    ]
  },
  {
    id: 7,
    title: "Taller CSS Layouts",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Maquetar una página completa con Grid y Flexbox",
      "Implementar diseño responsive en proyecto real",
      "Aplicar técnicas avanzadas de layout",
      "Crear interfaz moderna y funcional"
    ],
    content: {
      theoretical: [
        "Planificación de layout con Grid y Flexbox",
        "Estructura de página: header, main, sidebar, footer",
        "Navegación responsive y menú hamburguesa",
        "Grid areas para layouts complejos",
        "Flexbox para componentes internos",
        "Media queries para diferentes breakpoints",
        "Optimización de imágenes responsive",
        "Buenas prácticas de CSS moderno"
      ],
      theoreticalDetails: {
        "Planificación de layout con Grid y Flexbox": "La planificación de layout combina CSS Grid para la estructura general y Flexbox para componentes internos. Grid maneja la disposición bidimensional (filas y columnas), mientras que Flexbox se encarga de la distribución unidimensional dentro de cada área. Esta combinación permite crear layouts complejos y mantenibles.\n\n**Ejemplos:**\n```css\n/* Layout principal con Grid */\n.layout-principal {\n  display: grid;\n  grid-template-columns: 250px 1fr 200px;\n  grid-template-rows: 80px 1fr 60px;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main aside\"\n    \"footer footer footer\";\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n/* Header con Flexbox */\n.header {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n  background: #2c3e50;\n  color: white;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.nav {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n}\n\n/* Main content con Flexbox */\n.main {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  background: #ecf0f1;\n}\n\n.contenido {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n/* Sidebar con Flexbox */\n.sidebar {\n  grid-area: sidebar;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  background: #34495e;\n  color: white;\n}\n\n/* Footer con Flexbox */\n.footer {\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #2c3e50;\n  color: white;\n}\n\n/* Responsive: Cambiar a layout móvil */\n@media (max-width: 768px) {\n  .layout-principal {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"sidebar\"\n      \"footer\";\n  }\n  \n  .header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .nav {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n/* Ventajas de la combinación:\n- Grid: Estructura general y posicionamiento\n- Flexbox: Distribución interna y alineación\n- Responsive: Fácil adaptación\n- Mantenible: Código organizado\n```",
        
        "Estructura de página: header, main, sidebar, footer": "La estructura típica de una página web incluye header (encabezado), main (contenido principal), sidebar (barra lateral), y footer (pie de página). Cada sección tiene un propósito específico y se posiciona usando CSS Grid. Esta estructura es semántica, accesible y fácil de mantener.\n\n**Ejemplos:**\n```css\n/* Estructura completa de página */\n.pagina {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n/* Header */\n.header {\n  grid-area: header;\n  background: #2c3e50;\n  color: white;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.navegacion {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n}\n\n.navegacion a {\n  color: white;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.navegacion a:hover {\n  color: #3498db;\n}\n\n/* Main content */\n.main {\n  grid-area: main;\n  padding: 2rem;\n  background: #ecf0f1;\n  overflow-y: auto;\n}\n\n.contenido {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.articulo {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  margin-bottom: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  grid-area: sidebar;\n  background: #34495e;\n  color: white;\n  padding: 1rem;\n  overflow-y: auto;\n}\n\n.sidebar h3 {\n  margin-bottom: 1rem;\n  color: #3498db;\n}\n\n.sidebar ul {\n  list-style: none;\n  padding: 0;\n}\n\n.sidebar li {\n  margin-bottom: 0.5rem;\n}\n\n.sidebar a {\n  color: #bdc3c7;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.sidebar a:hover {\n  color: white;\n}\n\n/* Footer */\n.footer {\n  grid-area: footer;\n  background: #2c3e50;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Responsive para móviles */\n@media (max-width: 768px) {\n  .pagina {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"sidebar\"\n      \"footer\";\n  }\n  \n  .header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .navegacion {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .main {\n    padding: 1rem;\n  }\n}\n\n/* Estructura semántica HTML:\n<header> - Encabezado de la página\n<main> - Contenido principal\n<aside> - Barra lateral\n<footer> - Pie de página\n```",
        
        "Navegación responsive y menú hamburguesa": "La navegación responsive se adapta a diferentes tamaños de pantalla. En móviles, se usa un menú hamburguesa que se expande/contrae. En desktop, se muestra la navegación completa. Esto mejora la experiencia del usuario y optimiza el espacio disponible.\n\n**Ejemplos:**\n```css\n/* Navegación responsive */\n.navegacion {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #2c3e50;\n  color: white;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n/* Menú desktop */\n.menu-desktop {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n}\n\n.menu-desktop a {\n  color: white;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.menu-desktop a:hover {\n  color: #3498db;\n}\n\n/* Menú hamburguesa */\n.menu-hamburguesa {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n.linea {\n  width: 25px;\n  height: 3px;\n  background: white;\n  margin: 3px 0;\n  transition: 0.3s;\n}\n\n/* Menú móvil */\n.menu-movil {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #2c3e50;\n  flex-direction: column;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.menu-movil a {\n  color: white;\n  text-decoration: none;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #34495e;\n  transition: color 0.3s;\n}\n\n.menu-movil a:hover {\n  color: #3498db;\n}\n\n/* Estados del menú hamburguesa */\n.menu-hamburguesa.activo .linea:nth-child(1) {\n  transform: rotate(-45deg) translate(-5px, 6px);\n}\n\n.menu-hamburguesa.activo .linea:nth-child(2) {\n  opacity: 0;\n}\n\n.menu-hamburguesa.activo .linea:nth-child(3) {\n  transform: rotate(45deg) translate(-5px, -6px);\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .menu-desktop {\n    display: none;\n  }\n  \n  .menu-hamburguesa {\n    display: flex;\n  }\n  \n  .menu-movil.activo {\n    display: flex;\n  }\n}\n\n/* JavaScript para toggle del menú */\n```javascript\nconst hamburguesa = document.querySelector('.menu-hamburguesa');\nconst menuMovil = document.querySelector('.menu-movil');\n\nhamburguesa.addEventListener('click', () => {\n  hamburguesa.classList.toggle('activo');\n  menuMovil.classList.toggle('activo');\n});\n```\n\n/* Características del menú hamburguesa:\n- Icono animado\n- Menú desplegable\n- Transiciones suaves\n- Accesibilidad\n```",
        
        "Grid areas para layouts complejos": "Las grid areas permiten crear layouts complejos de manera semántica y mantenible. Se definen áreas con nombres descriptivos y se asignan elementos a esas áreas. Esto facilita la reorganización del layout y hace el código más legible y mantenible.\n\n**Ejemplos:**\n```css\n/* Layout complejo con grid areas */\n.layout-complejo {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-rows: 80px 1fr 60px;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main aside\"\n    \"footer footer footer\";\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n/* Header */\n.header {\n  grid-area: header;\n  background: #3498db;\n  color: white;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Sidebar */\n.sidebar {\n  grid-area: sidebar;\n  background: #2c3e50;\n  color: white;\n  padding: 1rem;\n  overflow-y: auto;\n}\n\n/* Main content */\n.main {\n  grid-area: main;\n  padding: 2rem;\n  background: #ecf0f1;\n  overflow-y: auto;\n}\n\n/* Aside */\n.aside {\n  grid-area: aside;\n  background: #95a5a6;\n  color: white;\n  padding: 1rem;\n}\n\n/* Footer */\n.footer {\n  grid-area: footer;\n  background: #34495e;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}\n\n/* Layout de blog */\n.blog-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  grid-template-areas:\n    \"titulo titulo\"\n    \"contenido sidebar\"\n    \"comentarios sidebar\";\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.titulo {\n  grid-area: titulo;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.contenido {\n  grid-area: contenido;\n  line-height: 1.6;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n}\n\n.comentarios {\n  grid-area: comentarios;\n  margin-top: 2rem;\n}\n\n/* Layout de dashboard */\n.dashboard {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 60px 1fr;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\";\n  min-height: 100vh;\n}\n\n.dashboard-header {\n  grid-area: header;\n  background: white;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.dashboard-sidebar {\n  grid-area: sidebar;\n  background: #2c3e50;\n  color: white;\n  padding: 1rem;\n}\n\n.dashboard-main {\n  grid-area: main;\n  padding: 2rem;\n  background: #f8f9fa;\n}\n\n/* Responsive con grid areas */\n@media (max-width: 768px) {\n  .layout-complejo {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"sidebar\"\n      \"aside\"\n      \"footer\";\n  }\n  \n  .blog-layout {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"titulo\"\n      \"contenido\"\n      \"sidebar\"\n      \"comentarios\";\n  }\n  \n  .dashboard {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"sidebar\";\n  }\n}\n\n/* Ventajas de grid areas:\n- Código semántico\n- Fácil reorganización\n- Responsive automático\n- Mantenimiento simplificado\n```",
        
        "Flexbox para componentes internos": "Flexbox es ideal para componentes internos como botones, tarjetas, formularios y navegación. Permite distribuir elementos de manera flexible, alinear contenido y crear layouts adaptativos. Se combina perfectamente con CSS Grid para crear interfaces modernas y responsivas.\n\n**Ejemplos:**\n```css\n/* Botón con Flexbox */\n.boton {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.boton:hover {\n  background: #2980b9;\n}\n\n.boton i {\n  font-size: 1.2rem;\n}\n\n/* Tarjeta con Flexbox */\n.tarjeta {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n\n.tarjeta:hover {\n  transform: translateY(-2px);\n}\n\n.tarjeta-imagen {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.tarjeta-contenido {\n  flex: 1;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.tarjeta-titulo {\n  font-size: 1.25rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n.tarjeta-descripcion {\n  flex: 1;\n  color: #666;\n  line-height: 1.5;\n}\n\n.tarjeta-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n}\n\n/* Formulario con Flexbox */\n.formulario {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-width: 400px;\n  padding: 2rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.formulario-fila {\n  display: flex;\n  gap: 1rem;\n}\n\n.formulario-campo {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.formulario-campo label {\n  font-weight: 500;\n  color: #333;\n}\n\n.formulario-campo input {\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.formulario-botones {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n\n/* Navegación con Flexbox */\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #2c3e50;\n  color: white;\n}\n\n.nav-logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.nav-menu {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-menu a {\n  color: white;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.nav-menu a:hover {\n  color: #3498db;\n}\n\n/* Galería con Flexbox */\n.galeria {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n\n.galeria-item {\n  flex: 1 1 250px;\n  max-width: 300px;\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n/* Responsive para componentes */\n@media (max-width: 768px) {\n  .formulario-fila {\n    flex-direction: column;\n  }\n  \n  .formulario-botones {\n    justify-content: stretch;\n  }\n  \n  .nav {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .nav-menu {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n/* Ventajas de Flexbox para componentes:\n- Distribución automática del espacio\n- Alineación precisa\n- Responsive por defecto\n- Código limpio y mantenible\n```",
        
        "Media queries para diferentes breakpoints": "Las media queries permiten aplicar estilos específicos para diferentes tamaños de pantalla. Los breakpoints comunes incluyen móviles (320px-767px), tablets (768px-1023px), desktop (1024px-1199px), y large desktop (1200px+). Se pueden usar múltiples condiciones para mayor precisión.\n\n**Ejemplos:**\n```css\n/* Breakpoints comunes */\n/* Mobile: hasta 767px */\n@media (max-width: 767px) {\n  .contenedor {\n    padding: 1rem;\n  }\n  \n  .grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .navegacion {\n    display: none;\n  }\n  \n  .menu-hamburguesa {\n    display: block;\n  }\n}\n\n/* Tablet: 768px a 1023px */\n@media (min-width: 768px) and (max-width: 1023px) {\n  .contenedor {\n    padding: 2rem;\n  }\n  \n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .navegacion {\n    display: flex;\n  }\n}\n\n/* Desktop: 1024px a 1199px */\n@media (min-width: 1024px) and (max-width: 1199px) {\n  .contenedor {\n    max-width: 1000px;\n  }\n  \n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n/* Large desktop: 1200px y más */\n@media (min-width: 1200px) {\n  .contenedor {\n    max-width: 1200px;\n  }\n  \n  .grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n/* Orientación */\n@media (orientation: landscape) {\n  .hero {\n    height: 100vh;\n  }\n}\n\n@media (orientation: portrait) {\n  .hero {\n    height: 50vh;\n  }\n}\n\n/* Densidad de píxeles */\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .imagen {\n    image-rendering: -webkit-optimize-contrast;\n  }\n}\n\n/* Modo oscuro */\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #1a1a1a;\n    color: #ffffff;\n  }\n}\n\n/* Reducir movimiento */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* Breakpoints recomendados:\n- Mobile: 320px, 375px, 414px\n- Tablet: 768px, 834px\n- Desktop: 1024px, 1280px, 1440px\n- Large: 1920px, 2560px\n```",
        
        "Optimización de imágenes responsive": "La optimización de imágenes responsive mejora el rendimiento y la experiencia del usuario. Se usan diferentes técnicas como srcset, sizes, lazy loading, y formatos modernos. Esto reduce el tiempo de carga y mejora la experiencia en dispositivos móviles.\n\n**Ejemplos:**\n```html\n<!-- Imagen responsive básica -->\n<img src=\"imagen.jpg\" alt=\"Descripción\" style=\"max-width: 100%; height: auto;\">\n\n<!-- Imagen responsive con srcset -->\n<img src=\"imagen-small.jpg\"\n     srcset=\"imagen-small.jpg 480w,\n             imagen-medium.jpg 800w,\n             imagen-large.jpg 1200w\"\n     sizes=\"(max-width: 480px) 100vw,\n            (max-width: 800px) 50vw,\n            25vw\"\n     alt=\"Descripción\">\n\n<!-- Imagen responsive con picture -->\n<picture>\n  <source media=\"(max-width: 768px)\" srcset=\"imagen-mobile.jpg\">\n  <source media=\"(max-width: 1024px)\" srcset=\"imagen-tablet.jpg\">\n  <img src=\"imagen-desktop.jpg\" alt=\"Descripción\">\n</picture>\n\n<!-- Lazy loading -->\n<img src=\"imagen.jpg\" alt=\"Descripción\" loading=\"lazy\">\n```\n\n```css\n/* Imágenes responsive con CSS */\n.imagen-responsive {\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n\n/* Imagen de fondo responsive */\n.hero {\n  background-image: url('hero-mobile.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n}\n\n@media (min-width: 768px) {\n  .hero {\n    background-image: url('hero-tablet.jpg');\n    height: 60vh;\n  }\n}\n\n@media (min-width: 1024px) {\n  .hero {\n    background-image: url('hero-desktop.jpg');\n    height: 80vh;\n  }\n}\n\n/* Galería responsive */\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n.galeria img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n/* Lazy loading con CSS */\nimg[loading=\"lazy\"] {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\nimg[loading=\"lazy\"].loaded {\n  opacity: 1;\n}\n\n/* Optimización de rendimiento */\n.imagen-optimizada {\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: crisp-edges;\n}\n\n/* Mejores prácticas:\n- Usar srcset para diferentes resoluciones\n- Implementar lazy loading\n- Optimizar tamaños de imagen\n- Usar formatos modernos (WebP, AVIF)\n- Comprimir imágenes\n- Usar CDN para imágenes\n```",
        
        "Buenas prácticas de CSS moderno": "Las buenas prácticas de CSS moderno incluyen usar metodologías como BEM, organizar código de manera modular, usar variables CSS, implementar responsive design, y optimizar el rendimiento. Esto mejora la mantenibilidad, escalabilidad y rendimiento del código.\n\n**Ejemplos:**\n```css\n/* Variables CSS (Custom Properties) */\n:root {\n  --color-primario: #3498db;\n  --color-secundario: #e74c3c;\n  --color-fondo: #ecf0f1;\n  --color-texto: #2c3e50;\n  --espaciado-base: 1rem;\n  --border-radius: 8px;\n  --sombra: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n/* Metodología BEM */\n.boton {\n  padding: var(--espaciado-base);\n  border: none;\n  border-radius: var(--border-radius);\n  background: var(--color-primario);\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.boton--secundario {\n  background: var(--color-secundario);\n}\n\n.boton--grande {\n  padding: calc(var(--espaciado-base) * 1.5);\n  font-size: 1.2rem;\n}\n\n.boton__icono {\n  margin-right: 0.5rem;\n}\n\n/* Organización modular */\n/* _variables.css */\n:root {\n  --fuente-principal: 'Roboto', sans-serif;\n  --fuente-secundaria: 'Georgia', serif;\n}\n\n/* _base.css */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: var(--fuente-principal);\n  line-height: 1.6;\n  color: var(--color-texto);\n}\n\n/* _layout.css */\n.contenedor {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 var(--espaciado-base);\n}\n\n.grid {\n  display: grid;\n  gap: var(--espaciado-base);\n}\n\n/* _componentes.css */\n.tarjeta {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--sombra);\n  padding: var(--espaciado-base);\n  transition: transform 0.3s ease;\n}\n\n.tarjeta:hover {\n  transform: translateY(-2px);\n}\n\n/* Responsive design */\n.contenedor {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n@media (min-width: 768px) {\n  .contenedor {\n    padding: 0 2rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .contenedor {\n    padding: 0 3rem;\n  }\n}\n\n/* Optimización de rendimiento */\n.elemento {\n  will-change: transform;\n  transform: translateZ(0);\n}\n\n.animacion {\n  animation: slideIn 0.3s ease-out;\n}\n\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Mejores prácticas:\n- Usar variables CSS\n- Implementar metodología BEM\n- Organizar código modularmente\n- Optimizar para rendimiento\n- Usar responsive design\n- Mantener especificidad baja\n- Documentar código\n```"
      },
      practical: [
        "Maquetar página con Grid + Flexbox + responsive",
        "Implementar navegación adaptable",
        "Crear sistema de grid personalizado",
        "Desarrollar componentes reutilizables",
        "Optimizar para móviles y desktop"
      ]
    },
    activities: [
      {
        title: "Manipulación de arrays",
        duration: "45 min",
        description: "Crear, modificar y transformar arrays con diferentes métodos"
      },
      {
        title: "Trabajo con objetos",
        duration: "45 min",
        description: "Crear objetos, acceder a propiedades y métodos"
      },
      {
        title: "Proyecto: Lista de tareas",
        duration: "30 min",
        description: "Implementar CRUD básico con arrays y objetos"
      }
    ],
    homework: [
      "Crear sistema de gestión de contactos",
      "Implementar carrito de compras básico",
      "Filtros y búsqueda en lista de productos"
    ],
    materials: [
      "Editor de código",
      "Consola del navegador",
      "Datos de ejemplo (JSON)"
    ],
    exercises: [
      {
        title: "Sistema de Gestión de Contactos",
        description: "Crea un sistema para agregar, editar y eliminar contactos.",
        code: `// Sistema de gestión de contactos
let contactos = [];

function agregarContacto(nombre, telefono, email) {
    // Tu código aquí
}

function buscarContacto(nombre) {
    // Tu código aquí
}

function eliminarContacto(nombre) {
    // Tu código aquí
}

// Ejemplos de uso:
agregarContacto('Juan Pérez', '123-456-7890', 'juan@email.com');
agregarContacto('María García', '098-765-4321', 'maria@email.com');`,
        solution: `// Sistema de gestión de contactos - Solución
let contactos = [];

function agregarContacto(nombre, telefono, email) {
    const nuevoContacto = {
        id: Date.now(), // ID único basado en timestamp
        nombre: nombre,
        telefono: telefono,
        email: email,
        fechaCreacion: new Date().toISOString()
    };
    
    contactos.push(nuevoContacto);
    console.log('Contacto agregado:', nuevoContacto);
    return nuevoContacto;
}

function buscarContacto(nombre) {
    return contactos.find(contacto => 
        contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
}

function eliminarContacto(nombre) {
    const indice = contactos.findIndex(contacto => 
        contacto.nombre.toLowerCase() === nombre.toLowerCase()
    );
    
    if (indice !== -1) {
        const contactoEliminado = contactos.splice(indice, 1)[0];
        console.log('Contacto eliminado:', contactoEliminado);
        return contactoEliminado;
    } else {
        console.log('Contacto no encontrado');
        return null;
    }
}

function listarContactos() {
    console.log('Lista de contactos:');
    contactos.forEach((contacto, index) => {
        console.log(\`\${index + 1}. \${contacto.nombre} - \${contacto.telefono} - \${contacto.email}\`);
    });
}

// Ejemplos de uso:
agregarContacto('Juan Pérez', '123-456-7890', 'juan@email.com');
agregarContacto('María García', '098-765-4321', 'maria@email.com');
listarContactos();
console.log(buscarContacto('Juan'));
eliminarContacto('María García');
listarContactos();`
      }
    ]
  },
  {
    id: 8,
    title: "Animaciones y Transiciones",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Crear efectos hover y transiciones suaves",
      "Implementar animaciones con keyframes",
      "Aplicar transformaciones CSS",
      "Desarrollar galería animada interactiva"
    ],
    content: {
      theoretical: [
        "CSS Transitions: transition-property, duration, timing-function",
        "Efectos hover: :hover, :focus, :active",
        "CSS Animations: @keyframes, animation-name, duration",
        "Transformaciones: translate, rotate, scale, skew",
        "Transform-origin y perspective",
        "Animation-fill-mode y animation-iteration-count",
        "Timing functions: ease, linear, cubic-bezier",
        "Performance y optimización de animaciones"
      ],
      theoreticalDetails: {
        "CSS Transitions: transition-property, duration, timing-function": "Las transiciones CSS permiten crear cambios suaves entre estados de elementos. transition-property especifica qué propiedades animar, duration define la duración, y timing-function controla la curva de aceleración. Son ideales para efectos hover, focus y cambios de estado.\n\n**Ejemplos:**\n```css\n/* Transición básica */\n.boton {\n  background: #3498db;\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n\n.boton:hover {\n  background: #2980b9;\n}\n\n/* Transición múltiple */\n.tarjeta {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n}\n\n.tarjeta:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}\n\n/* Transición específica */\n.input {\n  border: 2px solid #ddd;\n  padding: 0.5rem;\n  border-radius: 4px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.input:focus {\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n/* Timing functions */\n.elemento1 {\n  transition: transform 0.5s ease;\n}\n\n.elemento2 {\n  transition: transform 0.5s linear;\n}\n\n.elemento3 {\n  transition: transform 0.5s ease-in;\n}\n\n.elemento4 {\n  transition: transform 0.5s ease-out;\n}\n\n.elemento5 {\n  transition: transform 0.5s ease-in-out;\n}\n\n.elemento6 {\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* Transición con delay */\n.elemento-delay {\n  transition: opacity 0.3s ease 0.2s;\n}\n\n.elemento-delay:hover {\n  opacity: 0.7;\n}\n\n/* Transición condicional */\n.elemento-condicional {\n  transition: transform 0.3s ease;\n}\n\n.elemento-condicional.activo {\n  transform: scale(1.1);\n}\n\n/* Ventajas de las transiciones:\n- Cambios suaves y naturales\n- Mejor experiencia de usuario\n- Fácil implementación\n- Compatibilidad amplia\n```",
        
        "Efectos hover: :hover, :focus, :active": "Los efectos hover, focus y active mejoran la interactividad y experiencia del usuario. :hover se activa al pasar el mouse, :focus cuando el elemento recibe foco, y :active durante la interacción. Estos pseudo-selectores permiten crear interfaces más dinámicas y accesibles.\n\n**Ejemplos:**\n```css\n/* Efectos hover básicos */\n.enlace {\n  color: #3498db;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.enlace:hover {\n  color: #2980b9;\n  text-decoration: underline;\n}\n\n/* Botón con efectos múltiples */\n.boton {\n  background: #3498db;\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.boton:hover {\n  background: #2980b9;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}\n\n.boton:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n}\n\n.boton:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);\n}\n\n/* Tarjeta interactiva */\n.tarjeta {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.tarjeta:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0,0,0,0.15);\n}\n\n.tarjeta:active {\n  transform: translateY(-2px);\n}\n\n/* Menú de navegación */\n.menu-item {\n  padding: 0.5rem 1rem;\n  color: #333;\n  text-decoration: none;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.menu-item:hover {\n  background: #f8f9fa;\n  color: #3498db;\n}\n\n.menu-item:focus {\n  background: #e3f2fd;\n  color: #1976d2;\n  outline: none;\n}\n\n.menu-item:active {\n  background: #e1f5fe;\n}\n\n/* Formulario interactivo */\n.input {\n  border: 2px solid #ddd;\n  padding: 0.75rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.input:hover {\n  border-color: #bbb;\n}\n\n.input:focus {\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n  outline: none;\n}\n\n.input:active {\n  border-color: #2980b9;\n}\n\n/* Galería de imágenes */\n.imagen {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.3s ease;\n}\n\n.imagen:hover {\n  transform: scale(1.05);\n}\n\n/* Efectos de hover avanzados */\n.overlay {\n  position: relative;\n  overflow: hidden;\n}\n\n.overlay::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.5);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.overlay:hover::before {\n  opacity: 1;\n}\n\n/* Mejores prácticas:\n- Usar transiciones suaves\n- Mantener consistencia\n- Considerar accesibilidad\n- Evitar efectos excesivos\n```",
        
        "CSS Animations: @keyframes, animation-name, duration": "Las animaciones CSS permiten crear efectos visuales complejos usando @keyframes para definir los pasos de la animación. animation-name especifica qué animación usar, duration define la duración, y se pueden combinar múltiples propiedades para crear efectos sofisticados.\n\n**Ejemplos:**\n```css\n/* Definición de keyframes */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* Aplicación de animaciones */\n.elemento-fadeIn {\n  animation: fadeIn 1s ease-in-out;\n}\n\n.elemento-slideIn {\n  animation: slideIn 0.5s ease-out;\n}\n\n.elemento-bounce {\n  animation: bounce 2s infinite;\n}\n\n.elemento-pulse {\n  animation: pulse 2s infinite;\n}\n\n/* Animación compleja */\n@keyframes complexAnimation {\n  0% {\n    opacity: 0;\n    transform: translateY(20px) scale(0.8);\n  }\n  50% {\n    opacity: 0.8;\n    transform: translateY(-10px) scale(1.1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n.elemento-complejo {\n  animation: complexAnimation 1.5s ease-out;\n}\n\n/* Animación de carga */\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n/* Animación de texto */\n@keyframes typewriter {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n.typewriter {\n  overflow: hidden;\n  white-space: nowrap;\n  animation: typewriter 3s steps(40, end);\n}\n\n/* Animación de ondas */\n@keyframes wave {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n.wave {\n  animation: wave 1s ease-in-out infinite;\n}\n\n/* Ventajas de las animaciones:\n- Efectos visuales atractivos\n- Mejor experiencia de usuario\n- Comunicación de estados\n- Interactividad mejorada\n```",
        
        "Transformaciones: translate, rotate, scale, skew": "Las transformaciones CSS permiten modificar la posición, tamaño y orientación de elementos sin afectar el layout. translate mueve elementos, rotate los rota, scale cambia el tamaño, y skew inclina elementos. Se pueden combinar múltiples transformaciones para crear efectos complejos.\n\n**Ejemplos:**\n```css\n/* Transformaciones básicas */\n.translate {\n  transform: translate(50px, 20px);\n}\n\n.translate-x {\n  transform: translateX(50px);\n}\n\n.translate-y {\n  transform: translateY(20px);\n}\n\n.rotate {\n  transform: rotate(45deg);\n}\n\n.scale {\n  transform: scale(1.5);\n}\n\n.scale-x {\n  transform: scaleX(1.5);\n}\n\n.scale-y {\n  transform: scaleY(1.5);\n}\n\n.skew {\n  transform: skew(10deg, 5deg);\n}\n\n.skew-x {\n  transform: skewX(10deg);\n}\n\n.skew-y {\n  transform: skewY(5deg);\n}\n\n/* Transformaciones combinadas */\n.combinada {\n  transform: translate(50px, 20px) rotate(45deg) scale(1.2);\n}\n\n/* Efectos hover con transformaciones */\n.boton-hover {\n  background: #3498db;\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  transition: transform 0.3s ease;\n}\n\n.boton-hover:hover {\n  transform: translateY(-2px) scale(1.05);\n}\n\n/* Tarjeta con efectos */\n.tarjeta-transform {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  transition: transform 0.3s ease;\n}\n\n.tarjeta-transform:hover {\n  transform: translateY(-5px) rotate(2deg);\n}\n\n/* Imagen con zoom */\n.imagen-zoom {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.3s ease;\n}\n\n.imagen-zoom:hover {\n  transform: scale(1.1);\n}\n\n/* Menú desplegable */\n.menu-item {\n  padding: 0.5rem 1rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  transition: transform 0.2s ease;\n}\n\n.menu-item:hover {\n  transform: translateX(10px);\n}\n\n/* Botón de carga */\n.boton-carga {\n  background: #27ae60;\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  transition: transform 0.3s ease;\n}\n\n.boton-carga:active {\n  transform: scale(0.95);\n}\n\n/* Efectos de entrada */\n.entrada-izquierda {\n  transform: translateX(-100%);\n  transition: transform 0.5s ease;\n}\n\n.entrada-izquierda.visible {\n  transform: translateX(0);\n}\n\n.entrada-abajo {\n  transform: translateY(50px);\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n\n.entrada-abajo.visible {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Ventajas de las transformaciones:\n- No afectan el layout\n- Mejor rendimiento\n- Efectos visuales atractivos\n- Compatibilidad amplia\n```",
        
        "Transform-origin y perspective": "transform-origin define el punto de referencia para las transformaciones, mientras que perspective crea un contexto 3D para elementos hijos. Estos propiedades son esenciales para crear efectos 3D realistas y controlar cómo se aplican las transformaciones.\n\n**Ejemplos:**\n```css\n/* Transform-origin básico */\n.rotacion-centro {\n  transform-origin: center;\n  transform: rotate(45deg);\n}\n\n.rotacion-esquina {\n  transform-origin: top left;\n  transform: rotate(45deg);\n}\n\n.rotacion-personalizada {\n  transform-origin: 20px 30px;\n  transform: rotate(45deg);\n}\n\n/* Escala desde diferentes puntos */\n.escala-centro {\n  transform-origin: center;\n  transform: scale(1.5);\n}\n\n.escala-esquina {\n  transform-origin: bottom right;\n  transform: scale(1.5);\n}\n\n/* Perspective básico */\n.contenedor-3d {\n  perspective: 1000px;\n  width: 300px;\n  height: 200px;\n}\n\n.elemento-3d {\n  width: 100%;\n  height: 100%;\n  background: #3498db;\n  transform: rotateY(45deg);\n  transition: transform 0.3s ease;\n}\n\n.elemento-3d:hover {\n  transform: rotateY(0deg);\n}\n\n/* Tarjeta 3D */\n.tarjeta-3d {\n  perspective: 1000px;\n  width: 250px;\n  height: 300px;\n}\n\n.tarjeta-interna {\n  width: 100%;\n  height: 100%;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  transform-style: preserve-3d;\n  transition: transform 0.6s ease;\n}\n\n.tarjeta-interna:hover {\n  transform: rotateY(180deg);\n}\n\n/* Cubo 3D */\n.cubo {\n  perspective: 1000px;\n  width: 200px;\n  height: 200px;\n  margin: 50px auto;\n}\n\n.cara {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  background: rgba(52, 152, 219, 0.8);\n  border: 2px solid #2980b9;\n}\n\n.cara-frontal {\n  transform: translateZ(100px);\n}\n\n.cara-trasera {\n  transform: translateZ(-100px) rotateY(180deg);\n}\n\n.cara-izquierda {\n  transform: rotateY(-90deg) translateZ(100px);\n}\n\n.cara-derecha {\n  transform: rotateY(90deg) translateZ(100px);\n}\n\n.cara-superior {\n  transform: rotateX(90deg) translateZ(100px);\n}\n\n.cara-inferior {\n  transform: rotateX(-90deg) translateZ(100px);\n}\n\n/* Galería 3D */\n.galeria-3d {\n  perspective: 1000px;\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n}\n\n.imagen-3d {\n  width: 200px;\n  height: 150px;\n  background: #e74c3c;\n  border-radius: 8px;\n  transform: rotateY(0deg);\n  transition: transform 0.3s ease;\n}\n\n.imagen-3d:hover {\n  transform: rotateY(15deg) translateZ(50px);\n}\n\n/* Efectos de profundidad */\n.profundidad {\n  perspective: 500px;\n}\n\n.elemento-profundidad {\n  background: #27ae60;\n  padding: 2rem;\n  border-radius: 8px;\n  transform: translateZ(0);\n  transition: transform 0.3s ease;\n}\n\n.elemento-profundidad:hover {\n  transform: translateZ(50px);\n}\n\n/* Ventajas de transform-origin y perspective:\n- Control preciso de transformaciones\n- Efectos 3D realistas\n- Mejor experiencia visual\n- Flexibilidad en el diseño\n```",
        
        "Animation-fill-mode y animation-iteration-count": "animation-fill-mode controla qué valores de la animación se aplican antes y después de la ejecución, mientras que animation-iteration-count define cuántas veces se repite la animación. Estas propiedades permiten crear animaciones más controladas y predecibles.\n\n**Ejemplos:**\n```css\n/* Animation-fill-mode básico */\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n/* none: No aplica valores antes/después */\n.animacion-none {\n  animation: slideIn 1s ease-out;\n  animation-fill-mode: none;\n}\n\n/* forwards: Mantiene valores finales */\n.animacion-forwards {\n  animation: slideIn 1s ease-out;\n  animation-fill-mode: forwards;\n}\n\n/* backwards: Aplica valores iniciales */\n.animacion-backwards {\n  animation: slideIn 1s ease-out;\n  animation-fill-mode: backwards;\n}\n\n/* both: Aplica valores iniciales y finales */\n.animacion-both {\n  animation: slideIn 1s ease-out;\n  animation-fill-mode: both;\n}\n\n/* Animation-iteration-count */\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n\n/* Una sola vez */\n.pulse-once {\n  animation: pulse 1s ease-in-out;\n  animation-iteration-count: 1;\n}\n\n/* Dos veces */\n.pulse-twice {\n  animation: pulse 1s ease-in-out;\n  animation-iteration-count: 2;\n}\n\n/* Infinito */\n.pulse-infinite {\n  animation: pulse 1s ease-in-out;\n  animation-iteration-count: infinite;\n}\n\n/* Con decimales */\n.pulse-half {\n  animation: pulse 1s ease-in-out;\n  animation-iteration-count: 0.5;\n}\n\n/* Animación de entrada con fill-mode */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.entrada-suave {\n  animation: fadeInUp 0.6s ease-out;\n  animation-fill-mode: both;\n}\n\n/* Animación de salida */\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n}\n\n.salida-suave {\n  animation: fadeOutDown 0.6s ease-in;\n  animation-fill-mode: forwards;\n}\n\n/* Animación con delay y fill-mode */\n.entrada-delay {\n  animation: fadeInUp 0.6s ease-out 0.3s;\n  animation-fill-mode: both;\n}\n\n/* Animación de carga */\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n/* Animación de progreso */\n@keyframes progress {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n.barra-progreso {\n  width: 100%;\n  height: 20px;\n  background: #ecf0f1;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.progreso {\n  height: 100%;\n  background: #27ae60;\n  animation: progress 3s ease-out;\n  animation-fill-mode: forwards;\n}\n\n/* Ventajas de fill-mode y iteration-count:\n- Control preciso de animaciones\n- Mejor experiencia de usuario\n- Animaciones predecibles\n- Efectos visuales controlados\n```",
        
        "Timing functions: ease, linear, cubic-bezier": "Las timing functions controlan la velocidad de las animaciones y transiciones. ease proporciona aceleración natural, linear mantiene velocidad constante, y cubic-bezier permite crear curvas personalizadas. Estas funciones afectan cómo se siente la animación para el usuario.\n\n**Ejemplos:**\n```css\n/* Timing functions básicas */\n@keyframes move {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(200px);\n  }\n}\n\n/* ease: Aceleración natural */\n.movimiento-ease {\n  animation: move 2s ease;\n}\n\n/* linear: Velocidad constante */\n.movimiento-linear {\n  animation: move 2s linear;\n}\n\n/* ease-in: Aceleración gradual */\n.movimiento-ease-in {\n  animation: move 2s ease-in;\n}\n\n/* ease-out: Desaceleración gradual */\n.movimiento-ease-out {\n  animation: move 2s ease-out;\n}\n\n/* ease-in-out: Aceleración y desaceleración */\n.movimiento-ease-in-out {\n  animation: move 2s ease-in-out;\n}\n\n/* Cubic-bezier personalizado */\n.movimiento-personalizado {\n  animation: move 2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* Efectos especiales con cubic-bezier */\n.bounce-personalizado {\n  animation: move 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.elastic {\n  animation: move 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.suave {\n  animation: move 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n/* Transiciones con timing functions */\n.boton-timing {\n  background: #3498db;\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.boton-timing:hover {\n  background: #2980b9;\n  transform: translateY(-2px);\n}\n\n/* Tarjeta con timing personalizado */\n.tarjeta-timing {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.tarjeta-timing:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0,0,0,0.15);\n}\n\n/* Animación de entrada con timing */\n@keyframes slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.entrada-timing {\n  animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n/* Animación de salida */\n@keyframes slideOutRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n.salida-timing {\n  animation: slideOutRight 0.6s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n\n/* Efectos de hover con timing */\n.enlace-timing {\n  color: #3498db;\n  text-decoration: none;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.enlace-timing:hover {\n  color: #2980b9;\n}\n\n/* Timing functions comunes:\n- ease: 0.25, 0.1, 0.25, 1\n- linear: 0, 0, 1, 1\n- ease-in: 0.42, 0, 1, 1\n- ease-out: 0, 0, 0.58, 1\n- ease-in-out: 0.42, 0, 0.58, 1\n```",
        
        "Performance y optimización de animaciones": "La optimización de animaciones es crucial para mantener un buen rendimiento. Se deben usar propiedades que no causen reflow/repaint, como transform y opacity, evitar animaciones en elementos con muchos hijos, y usar will-change para elementos que se animarán. Esto mejora la fluidez y reduce el consumo de recursos.\n\n**Ejemplos:**\n```css\n/* Propiedades optimizadas para animación */\n.elemento-optimizado {\n  /* ✅ Buenas propiedades para animar */\n  transform: translateX(0);\n  opacity: 1;\n  filter: blur(0px);\n  \n  /* ❌ Evitar estas propiedades */\n  /* width: 100px; */\n  /* height: 100px; */\n  /* margin: 10px; */\n  /* padding: 10px; */\n  /* background-color: red; */\n}\n\n/* Will-change para elementos que se animarán */\n.elemento-animado {\n  will-change: transform, opacity;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n\n.elemento-animado:hover {\n  transform: translateY(-5px);\n  opacity: 0.8;\n}\n\n/* Limpiar will-change después de la animación */\n.elemento-animado.animacion-completa {\n  will-change: auto;\n}\n\n/* Animación optimizada con transform */\n.boton-optimizado {\n  background: #3498db;\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  transition: transform 0.3s ease;\n}\n\n.boton-optimizado:hover {\n  transform: translateY(-2px);\n}\n\n/* Animación de entrada optimizada */\n@keyframes slideInOptimized {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.entrada-optimizada {\n  animation: slideInOptimized 0.5s ease-out;\n}\n\n/* Evitar animaciones en elementos pesados */\n.contenedor-pesado {\n  /* ❌ No animar elementos con muchos hijos */\n  /* animation: slideIn 1s ease; */\n}\n\n/* Usar transform en lugar de position */\n.elemento-posicion {\n  /* ❌ Evitar */\n  /* position: relative; */\n  /* left: 0; */\n  /* transition: left 0.3s ease; */\n  \n  /* ✅ Usar transform */\n  transform: translateX(0);\n  transition: transform 0.3s ease;\n}\n\n/* Animación de scroll optimizada */\n.elemento-scroll {\n  transform: translateY(0);\n  transition: transform 0.3s ease;\n}\n\n.elemento-scroll.visible {\n  transform: translateY(0);\n}\n\n/* Lazy loading de animaciones */\n.elemento-lazy {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: all 0.6s ease;\n}\n\n.elemento-lazy.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n/* Reducir movimiento para usuarios sensibles */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* Optimización de GPU */\n.elemento-gpu {\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n/* Mejores prácticas de rendimiento:\n- Usar transform y opacity\n- Evitar reflow/repaint\n- Usar will-change apropiadamente\n- Limpiar will-change después\n- Considerar prefers-reduced-motion\n- Optimizar para GPU\n```"
      },
      practical: [
        "Crear efectos hover en botones y enlaces",
        "Implementar transiciones suaves",
        "Desarrollar animaciones con keyframes",
        "Galería animada con efectos visuales",
        "Optimizar animaciones para rendimiento"
      ]
    },
    activities: [
      {
        title: "Promises y async/await",
        duration: "45 min",
        description: "Crear funciones asíncronas y manejar Promises"
      },
      {
        title: "Consumo de APIs",
        duration: "45 min",
        description: "Consumir APIs públicas y mostrar datos en la interfaz"
      },
      {
        title: "Proyecto: Clima App",
        duration: "30 min",
        description: "Crear aplicación que muestre el clima usando API externa"
      }
    ],
    homework: [
      "Crear aplicación de noticias",
      "Implementar búsqueda de películas",
      "Sistema de posts con API simulada"
    ],
    materials: [
      "APIs públicas (OpenWeather, NewsAPI)",
      "Editor de código",
      "Navegador con DevTools"
    ],
    exercises: [
      {
        title: "Aplicación del Clima",
        description: "Crea una aplicación que muestre el clima de una ciudad usando una API.",
        code: `// Aplicación del clima
async function obtenerClima(ciudad) {
    const API_KEY = 'tu_api_key_aqui';
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${ciudad}&appid=\${API_KEY}&units=metric&lang=es\`;
    
    // Tu código aquí
}

// Función para mostrar el clima en la interfaz
function mostrarClima(datos) {
    // Tu código aquí
}

// Ejemplo de uso:
obtenerClima('Bogotá');`,
        solution: `// Aplicación del clima - Solución
async function obtenerClima(ciudad) {
    const API_KEY = 'tu_api_key_aqui'; // Reemplaza con tu API key real
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${ciudad}&appid=\${API_KEY}&units=metric&lang=es\`;
    
    try {
        // Mostrar loading
        mostrarLoading(true);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`Error \${response.status}: \${response.statusText}\`);
        }
        
        const datos = await response.json();
        mostrarClima(datos);
        
    } catch (error) {
        console.error('Error al obtener el clima:', error);
        mostrarError('No se pudo obtener la información del clima');
    } finally {
        mostrarLoading(false);
    }
}

function mostrarClima(datos) {
    const { name, main, weather, wind } = datos;
    
    const html = \`
        <div class="clima-card">
            <h2>\${name}</h2>
            <div class="temperatura">\${Math.round(main.temp)}°C</div>
            <div class="descripcion">\${weather[0].description}</div>
            <div class="detalles">
                <p>Sensación térmica: \${Math.round(main.feels_like)}°C</p>
                <p>Humedad: \${main.humidity}%</p>
                <p>Viento: \${wind.speed} m/s</p>
            </div>
        </div>
    \`;
    
    document.getElementById('clima-container').innerHTML = html;
}

function mostrarLoading(mostrar) {
    const loading = document.getElementById('loading');
    if (mostrar) {
        loading.style.display = 'block';
        loading.textContent = 'Cargando...';
    } else {
        loading.style.display = 'none';
    }
}

function mostrarError(mensaje) {
    const container = document.getElementById('clima-container');
    container.innerHTML = \`<div class="error">\${mensaje}</div>\`;
}

// Ejemplo de uso:
document.getElementById('buscar-btn').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad-input').value;
    if (ciudad.trim()) {
        obtenerClima(ciudad);
    }
});`
      }
    ]
  },
  {
    id: 9,
    title: "JavaScript Básico",
    duration: "3 horas",
    level: "Principiante",
    completed: false,
    objectives: [
      "Dominar variables y tipos de datos en JavaScript",
      "Implementar estructuras de control y bucles",
      "Crear funciones básicas",
      "Desarrollar ejercicios de lógica de programación"
    ],
    content: {
      theoretical: [
        "Variables: let, const, var y sus diferencias",
        "Tipos de datos: string, number, boolean, undefined, null",
        "Operadores: aritméticos, lógicos, de comparación",
        "Estructuras de control: if, else, switch",
        "Bucles: for, while, do-while",
        "Funciones: declaración, expresión, arrow functions",
        "Scope y hoisting en JavaScript",
        "Coerción de tipos y comparaciones"
      ],
      theoreticalDetails: {
        "Variables: let, const, var y sus diferencias": "JavaScript tiene tres formas de declarar variables: var (ES5), let y const (ES6). var tiene function scope y puede ser redeclarada, mientras que let y const tienen block scope. let puede ser reasignada pero no redeclarada en el mismo scope. const no puede ser reasignada ni redeclarada, pero si contiene un objeto, las propiedades del objeto sí pueden modificarse. Es recomendable usar const por defecto y let solo cuando necesites reasignar la variable.\n\n**Ejemplos:**\n```javascript\n// var - function scope, puede ser redeclarada\nvar nombre = 'Juan';\nvar nombre = 'Pedro'; // ✅ Permitido\n\n// let - block scope, no puede ser redeclarada\nlet edad = 25;\nlet edad = 30; // ❌ Error: redeclaración\n\n// const - no puede ser reasignada\nconst PI = 3.14159;\nPI = 3.14; // ❌ Error: reasignación\n\n// Pero las propiedades de objetos const sí pueden modificarse\nconst persona = { nombre: 'Ana' };\npersona.edad = 25; // ✅ Permitido\n```",
        
        "Tipos de datos: string, number, boolean, undefined, null": "JavaScript es un lenguaje de tipado dinámico con tipos primitivos: string (texto), number (números enteros y decimales), boolean (true/false), undefined (variable declarada sin valor), null (valor nulo intencional), symbol (ES6), y bigint (ES2020). También tiene tipos de referencia como object, array, function. Los tipos primitivos se pasan por valor, mientras que los objetos se pasan por referencia. typeof puede ayudar a identificar el tipo de una variable.\n\n**Ejemplos:**\n```javascript\n// Tipos primitivos\nlet texto = 'Hola mundo';        // string\nlet numero = 42;                 // number\nlet decimal = 3.14;              // number\nlet activo = true;              // boolean\nlet sinValor;                    // undefined\nlet nulo = null;                 // null\n\n// Tipos de referencia\nlet objeto = { nombre: 'Juan' }; // object\nlet lista = [1, 2, 3];          // object (array)\nlet funcion = () => {};         // function\n\n// Verificar tipos\nconsole.log(typeof texto);       // 'string'\nconsole.log(typeof numero);      // 'number'\nconsole.log(typeof activo);      // 'boolean'\nconsole.log(typeof objeto);      // 'object'\n```",
        
        "Operadores: aritméticos, lógicos, de comparación": "Los operadores aritméticos incluyen +, -, *, /, %, ** (exponenciación), ++, --. Los operadores lógicos son && (AND), || (OR), ! (NOT), con evaluación de cortocircuito. Los operadores de comparación incluyen == (igualdad con coerción), === (igualdad estricta), !=, !==, <, >, <=, >=. También existen operadores de asignación como +=, -=, *=, /=, y operadores ternarios (condición ? valor1 : valor2) para asignaciones condicionales.\n\n**Ejemplos:**\n```javascript\n// Operadores aritméticos\nlet a = 10, b = 3;\nconsole.log(a + b);    // 13\nconsole.log(a - b);    // 7\nconsole.log(a * b);    // 30\nconsole.log(a / b);    // 3.33...\nconsole.log(a % b);    // 1 (resto)\nconsole.log(a ** b);   // 1000 (10³)\n\n// Operadores lógicos\nlet edad = 18;\nlet tieneLicencia = true;\nif (edad >= 18 && tieneLicencia) {\n  console.log('Puede conducir');\n}\n\n// Operador ternario\nlet estado = edad >= 18 ? 'Mayor' : 'Menor';\n\n// Comparaciones\nconsole.log(5 == '5');   // true (coerción)\nconsole.log(5 === '5');  // false (estricto)\n```",
        
        "Estructuras de control: if, else, switch": "Las estructuras de control permiten ejecutar código condicionalmente. if/else evalúa una condición y ejecuta código según el resultado. Puede incluir múltiples else if para múltiples condiciones. switch evalúa una expresión y ejecuta código según diferentes casos, usando break para evitar fall-through. switch es útil cuando tienes múltiples valores posibles para una variable. También existe el operador ternario como alternativa concisa para if/else simples.\n\n**Ejemplos:**\n```javascript\n// if/else\nlet temperatura = 25;\nif (temperatura > 30) {\n  console.log('Hace calor');\n} else if (temperatura < 10) {\n  console.log('Hace frío');\n} else {\n  console.log('Temperatura agradable');\n}\n\n// switch\nlet dia = 'lunes';\nswitch (dia) {\n  case 'lunes':\n    console.log('Inicio de semana');\n    break;\n  case 'viernes':\n    console.log('¡Fin de semana!');\n    break;\n  default:\n    console.log('Día normal');\n}\n\n// Operador ternario\nlet edad = 20;\nlet mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';\n```",
        
        "Bucles: for, while, do-while": "Los bucles permiten ejecutar código repetidamente. for es ideal cuando conoces el número de iteraciones, con sintaxis (inicialización; condición; incremento). while ejecuta mientras la condición sea verdadera. do-while ejecuta al menos una vez y luego evalúa la condición. También existen for...in para iterar propiedades de objetos, for...of para iterar elementos de arrays/strings, y métodos como forEach, map, filter para arrays. Es importante evitar bucles infinitos y usar break/continue cuando sea necesario.",
        
        "Funciones: declaración, expresión, arrow functions": "Las funciones pueden declararse con function nombre() {} (hoisted), expresarse como const nombre = function() {} (no hoisted), o usar arrow functions const nombre = () => {} (no hoisted, no tienen this propio). Las funciones pueden recibir parámetros, retornar valores, y ser pasadas como argumentos. Arrow functions son más concisas y heredan this del contexto padre. Las funciones pueden tener parámetros por defecto, rest parameters (...args), y destructuring en parámetros.",
        
        "Scope y hoisting en JavaScript": "Scope determina la accesibilidad de variables. JavaScript tiene function scope (var) y block scope (let/const). Hoisting es el comportamiento donde las declaraciones se mueven al inicio de su scope. var se inicializa como undefined, mientras que let/const permanecen en 'temporal dead zone' hasta su declaración. Las funciones declaradas se hoistean completamente, mientras que las expresiones de función no. Entender scope y hoisting es crucial para evitar bugs comunes.",
        
        "Coerción de tipos y comparaciones": "JavaScript convierte automáticamente tipos cuando es necesario (coerción). Esto puede causar comportamientos inesperados, especialmente con == vs ===. == permite coerción (1 == '1' es true), mientras que === es estricto (1 === '1' es false). Es recomendable usar siempre === para comparaciones. La coerción puede ser útil en algunos casos, como convertir strings a números con + o Number(), pero debe usarse conscientemente para evitar bugs."
      },
      practical: [
        "Declarar y usar variables correctamente",
        "Implementar condicionales y bucles",
        "Crear funciones para resolver problemas",
        "Ejercicios de lógica de programación",
        "Desarrollar mini-proyectos básicos"
      ]
    },
    activities: [
      {
        title: "Variables y tipos de datos",
        duration: "45 min",
        description: "Declarar variables, trabajar con diferentes tipos de datos y operadores"
      },
      {
        title: "Estructuras de control",
        duration: "60 min",
        description: "Implementar condicionales y bucles para resolver problemas"
      },
      {
        title: "Funciones básicas",
        duration: "45 min",
        description: "Crear funciones, usar parámetros y valores de retorno"
      }
    ],
    homework: [
      "Crear calculadora básica con JavaScript",
      "Implementar validación de formularios",
      "Desarrollar juego de adivinanza de números"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web",
      "Consola de desarrollador"
    ],
    exercises: [
      {
        title: "Calculadora Básica",
        description: "Crea una calculadora que realice operaciones básicas con JavaScript.",
        code: `// Calculadora básica con JavaScript
function calculadora(operacion, num1, num2) {
  let resultado;
  
  switch(operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        return 'Error: División por cero';
      }
      break;
    default:
      return 'Operación no válida';
  }
  
  return resultado;
}

// Ejemplos de uso
console.log(calculadora('suma', 5, 3));        // 8
console.log(calculadora('resta', 10, 4));      // 6
console.log(calculadora('multiplicacion', 3, 7)); // 21
console.log(calculadora('division', 15, 3));   // 5`,
        solution: `# Configuración completa del repositorio

# 1. Configuración inicial de Git
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@ejemplo.com"
git config --global init.defaultBranch main

# 2. Crear y navegar al directorio del proyecto
mkdir curso-frontend-edco
cd curso-frontend-edco

# 3. Inicializar repositorio Git
git init

# 4. Crear archivo .gitignore
echo "node_modules/
.env
.DS_Store
*.log
dist/
build/" > .gitignore

# 5. Crear README.md
echo "# Curso Frontend EDCO
Proyecto del curso de desarrollo frontend.

## Estructura del proyecto
- /src - Código fuente
- /public - Archivos públicos
- /docs - Documentación

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- React (próximamente)" > README.md

# 6. Agregar archivos al staging
git add .

# 7. Hacer commit inicial
git commit -m "feat: initial commit with project structure"

# 8. Conectar con repositorio remoto en GitHub
git remote add origin https://github.com/tu-usuario/curso-frontend-edco.git

// Solución completa de la calculadora

// Versión mejorada con validación y más operaciones
function calculadoraAvanzada(operacion, num1, num2) {
  // Validar que los números sean válidos
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Error: Los valores deben ser números';
  }
  
  if (isNaN(num1) || isNaN(num2)) {
    return 'Error: Valores no válidos';
  }
  
  let resultado;
  
  switch(operacion.toLowerCase()) {
    case 'suma':
    case '+':
      resultado = num1 + num2;
      break;
    case 'resta':
    case '-':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
    case '*':
      resultado = num1 * num2;
      break;
    case 'division':
    case '/':
      if (num2 === 0) {
        return 'Error: División por cero';
      }
      resultado = num1 / num2;
      break;
    case 'potencia':
    case '^':
      resultado = Math.pow(num1, num2);
      break;
    case 'modulo':
    case '%':
      resultado = num1 % num2;
      break;
    default:
      return 'Operación no válida. Operaciones disponibles: suma, resta, multiplicacion, division, potencia, modulo';
  }
  
  // Redondear resultado si es necesario
  return Math.round(resultado * 100) / 100;
}

// Función para crear una calculadora interactiva
function crearCalculadoraInteractiva() {
  const operaciones = ['suma', 'resta', 'multiplicacion', 'division'];
  
  console.log('=== CALCULADORA INTERACTIVA ===');
  console.log('Operaciones disponibles:', operaciones.join(', '));
  
  // Ejemplos de uso
  const ejemplos = [
    { op: 'suma', a: 10, b: 5 },
    { op: 'resta', a: 20, b: 8 },
    { op: 'multiplicacion', a: 6, b: 7 },
    { op: 'division', a: 15, b: 3 }
  ];
  
  ejemplos.forEach(ejemplo => {
    const resultado = calculadoraAvanzada(ejemplo.op, ejemplo.a, ejemplo.b);
    console.log(\`\${ejemplo.a} \${ejemplo.op} \${ejemplo.b} = \${resultado}\`);
  });
}

// Ejecutar la calculadora
crearCalculadoraInteractiva();`
      }
    ]
  },
  {
    id: 10,
    title: "JavaScript Intermedio",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Dominar arrays y objetos en JavaScript",
      "Implementar métodos de arrays avanzados",
      "Trabajar con funciones de orden superior",
      "Desarrollar aplicaciones interactivas"
    ],
    content: {
      theoretical: [
        "Arrays: métodos map, filter, reduce, forEach",
        "Objetos: propiedades, métodos, destructuring",
        "Funciones de orden superior y callbacks",
        "Closures y scope avanzado",
        "Template literals y string methods",
        "Date, Math y otros objetos nativos",
        "Error handling: try-catch, throw",
        "Programación funcional básica"
      ],
      theoreticalDetails: {
        "Arrays: métodos map, filter, reduce, forEach": "Los métodos de arrays son funciones que permiten manipular y transformar arrays de manera funcional. map transforma cada elemento, filter selecciona elementos que cumplen una condición, reduce acumula valores, y forEach ejecuta una función para cada elemento. Son fundamentales para la programación funcional.\n\n**Ejemplos:**\n```javascript\n// Array de números\nconst numeros = [1, 2, 3, 4, 5];\n\n// map: Transformar cada elemento\nconst cuadrados = numeros.map(n => n * n);\nconsole.log(cuadrados); // [1, 4, 9, 16, 25]\n\n// filter: Filtrar elementos\nconst pares = numeros.filter(n => n % 2 === 0);\nconsole.log(pares); // [2, 4]\n\n// reduce: Acumular valores\nconst suma = numeros.reduce((acc, n) => acc + n, 0);\nconsole.log(suma); // 15\n\n// forEach: Ejecutar función para cada elemento\nnumeros.forEach(n => console.log(n));\n\n// Array de objetos\nconst personas = [\n  { nombre: 'Juan', edad: 25 },\n  { nombre: 'María', edad: 30 },\n  { nombre: 'Pedro', edad: 20 }\n];\n\n// map con objetos\nconst nombres = personas.map(p => p.nombre);\nconsole.log(nombres); // ['Juan', 'María', 'Pedro']\n\n// filter con objetos\nconst mayores = personas.filter(p => p.edad >= 25);\nconsole.log(mayores); // [{ nombre: 'Juan', edad: 25 }, { nombre: 'María', edad: 30 }]\n\n// reduce con objetos\nconst edadPromedio = personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;\nconsole.log(edadPromedio); // 25\n```",
        
        "Objetos: propiedades, métodos, destructuring": "Los objetos en JavaScript son colecciones de propiedades clave-valor. Se pueden acceder a propiedades con notación de punto o corchetes, agregar métodos, y usar destructuring para extraer valores. Los objetos son fundamentales para organizar datos y comportamiento.\n\n**Ejemplos:**\n```javascript\n// Crear objeto\nconst persona = {\n  nombre: 'Juan',\n  edad: 25,\n  ciudad: 'Madrid',\n  saludar: function() {\n    return `Hola, soy ${this.nombre}`;\n  }\n};\n\n// Acceder a propiedades\nconsole.log(persona.nombre); // Juan\nconsole.log(persona['edad']); // 25\n\n// Agregar propiedades\npersona.profesion = 'Desarrollador';\npersona.cumpleanos = function() {\n  this.edad++;\n};\n\n// Destructuring\nconst { nombre, edad } = persona;\nconsole.log(nombre, edad); // Juan 25\n\n// Destructuring con renombrado\nconst { nombre: nombreCompleto } = persona;\nconsole.log(nombreCompleto); // Juan\n\n// Destructuring con valores por defecto\nconst { nombre, edad, telefono = 'No disponible' } = persona;\nconsole.log(telefono); // No disponible\n\n// Destructuring de arrays\nconst colores = ['rojo', 'verde', 'azul'];\nconst [primero, segundo] = colores;\nconsole.log(primero, segundo); // rojo verde\n\n// Destructuring de objetos anidados\nconst usuario = {\n  nombre: 'Ana',\n  direccion: {\n    calle: 'Calle Mayor',\n    numero: 123\n  }\n};\n\nconst { direccion: { calle } } = usuario;\nconsole.log(calle); // Calle Mayor\n```",
        
        "Funciones de orden superior y callbacks": "Las funciones de orden superior son funciones que toman otras funciones como parámetros o devuelven funciones. Los callbacks son funciones que se pasan como argumentos y se ejecutan en un momento específico. Son fundamentales para la programación asíncrona y funcional.\n\n**Ejemplos:**\n```javascript\n// Función de orden superior\nfunction procesarDatos(datos, callback) {\n  const resultado = datos.map(callback);\n  return resultado;\n}\n\n// Usar callback\nconst numeros = [1, 2, 3, 4, 5];\nconst cuadrados = procesarDatos(numeros, n => n * n);\nconsole.log(cuadrados); // [1, 4, 9, 16, 25]\n\n// Callback con setTimeout\nsetTimeout(() => {\n  console.log('Hola después de 1 segundo');\n}, 1000);\n\n// Callback con addEventListener\ndocument.addEventListener('click', function(event) {\n  console.log('Click en:', event.target);\n});\n\n// Función que devuelve función\nfunction crearMultiplicador(factor) {\n  return function(numero) {\n    return numero * factor;\n  };\n}\n\nconst multiplicarPor2 = crearMultiplicador(2);\nconsole.log(multiplicarPor2(5)); // 10\n\n// Callback con fetch\nfetch('https://api.ejemplo.com/datos')\n  .then(response => response.json())\n  .then(data => {\n    console.log('Datos recibidos:', data);\n  })\n  .catch(error => {\n    console.error('Error:', error);\n  });\n\n// Función de orden superior personalizada\nfunction filtrarYTransformar(array, filtro, transformacion) {\n  return array\n    .filter(filtro)\n    .map(transformacion);\n}\n\nconst resultado = filtrarYTransformar(\n  [1, 2, 3, 4, 5],\n  n => n % 2 === 0,\n  n => n * 2\n);\nconsole.log(resultado); // [4, 8]\n```",
        
        "Closures y scope avanzado": "Un closure es una función que tiene acceso a variables de su scope externo incluso después de que la función externa haya terminado. El scope determina dónde se puede acceder a una variable. Los closures son fundamentales para crear funciones privadas y mantener estado.\n\n**Ejemplos:**\n```javascript\n// Closure básico\nfunction crearContador() {\n  let contador = 0;\n  return function() {\n    contador++;\n    return contador;\n  };\n}\n\nconst miContador = crearContador();\nconsole.log(miContador()); // 1\nconsole.log(miContador()); // 2\nconsole.log(miContador()); // 3\n\n// Closure con parámetros\nfunction crearMultiplicador(factor) {\n  return function(numero) {\n    return numero * factor;\n  };\n}\n\nconst multiplicarPor3 = crearMultiplicador(3);\nconsole.log(multiplicarPor3(4)); // 12\n\n// Closure para crear funciones privadas\nfunction crearPersona(nombre) {\n  let edad = 0;\n  \n  return {\n    obtenerNombre: () => nombre,\n    obtenerEdad: () => edad,\n    cumplirAnos: () => {\n      edad++;\n      return edad;\n    }\n  };\n}\n\nconst persona = crearPersona('Juan');\nconsole.log(persona.obtenerNombre()); // Juan\nconsole.log(persona.cumplirAnos()); // 1\n\n// Scope con var, let, const\nfunction demostrarScope() {\n  var varVariable = 'var';\n  let letVariable = 'let';\n  const constVariable = 'const';\n  \n  if (true) {\n    var varVariable2 = 'var2';\n    let letVariable2 = 'let2';\n    const constVariable2 = 'const2';\n  }\n  \n  console.log(varVariable); // var\n  console.log(varVariable2); // var2 (hoisting)\n  // console.log(letVariable2); // Error: no definida\n  // console.log(constVariable2); // Error: no definida\n}\n\n// Closure con bucle\nfunction crearFunciones() {\n  const funciones = [];\n  \n  for (let i = 0; i < 3; i++) {\n    funciones.push(function() {\n      return i;\n    });\n  }\n  \n  return funciones;\n}\n\nconst funciones = crearFunciones();\nconsole.log(funciones[0]()); // 0\nconsole.log(funciones[1]()); // 1\nconsole.log(funciones[2]()); // 2\n```",
        
        "Template literals y string methods": "Los template literals permiten crear strings con interpolación de variables y expresiones. Los métodos de string proporcionan funcionalidades para manipular texto. Son herramientas esenciales para trabajar con texto en JavaScript.\n\n**Ejemplos:**\n```javascript\n// Template literals básicos\nconst nombre = 'Juan';\nconst edad = 25;\nconst mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;\nconsole.log(mensaje); // Hola, soy Juan y tengo 25 años\n\n// Template literals con expresiones\nconst precio = 100;\nconst descuento = 0.1;\nconst total = `Precio: $${precio}, Descuento: ${descuento * 100}%, Total: $${precio * (1 - descuento)}`;\nconsole.log(total); // Precio: $100, Descuento: 10%, Total: $90\n\n// Template literals multilinea\nconst html = `\n  <div class=\"usuario\">\n    <h2>${nombre}</h2>\n    <p>Edad: ${edad}</p>\n  </div>\n`;\nconsole.log(html);\n\n// Métodos de string\nconst texto = 'Hola Mundo JavaScript';\n\nconsole.log(texto.length); // 22\nconsole.log(texto.toUpperCase()); // HOLA MUNDO JAVASCRIPT\nconsole.log(texto.toLowerCase()); // hola mundo javascript\nconsole.log(texto.indexOf('Mundo')); // 5\nconsole.log(texto.includes('JavaScript')); // true\nconsole.log(texto.startsWith('Hola')); // true\nconsole.log(texto.endsWith('Script')); // true\n\n// Métodos de manipulación\nconsole.log(texto.replace('Mundo', 'Universo')); // Hola Universo JavaScript\nconsole.log(texto.substring(5, 10)); // Mundo\nconsole.log(texto.slice(-10)); // JavaScript\nconsole.log(texto.split(' ')); // ['Hola', 'Mundo', 'JavaScript']\n\n// Trim y padding\nconst textoConEspacios = '  Hola  ';\nconsole.log(textoConEspacios.trim()); // Hola\nconsole.log(texto.padStart(30, '*')); // ********Hola Mundo JavaScript\nconsole.log(texto.padEnd(30, '*')); // Hola Mundo JavaScript********\n\n// Template literals con funciones\nfunction formatearFecha(fecha) {\n  return `Fecha: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;\n}\n\nconst hoy = new Date();\nconsole.log(formatearFecha(hoy)); // Fecha: 15/12/2024\n```",
        
        "Date, Math y otros objetos nativos": "JavaScript proporciona objetos nativos para trabajar con fechas, matemáticas y otras funcionalidades comunes. Date maneja fechas y horas, Math proporciona funciones matemáticas, y otros objetos como JSON, RegExp ofrecen utilidades adicionales.\n\n**Ejemplos:**\n```javascript\n// Objeto Date\nconst ahora = new Date();\nconsole.log(ahora); // Fecha actual\n\nconst fechaEspecifica = new Date('2024-12-25');\nconsole.log(fechaEspecifica); // 25 de diciembre de 2024\n\n// Métodos de Date\nconsole.log(ahora.getFullYear()); // 2024\nconsole.log(ahora.getMonth()); // 11 (diciembre, 0-indexado)\nconsole.log(ahora.getDate()); // 15\nconsole.log(ahora.getDay()); // 0 (domingo)\nconsole.log(ahora.getHours()); // 14\nconsole.log(ahora.getMinutes()); // 30\n\n// Formatear fecha\nconst fechaFormateada = ahora.toLocaleDateString('es-ES');\nconsole.log(fechaFormateada); // 15/12/2024\n\n// Objeto Math\nconsole.log(Math.PI); // 3.141592653589793\nconsole.log(Math.E); // 2.718281828459045\nconsole.log(Math.abs(-5)); // 5\nconsole.log(Math.ceil(4.1)); // 5\nconsole.log(Math.floor(4.9)); // 4\nconsole.log(Math.round(4.5)); // 5\nconsole.log(Math.max(1, 5, 3)); // 5\nconsole.log(Math.min(1, 5, 3)); // 1\nconsole.log(Math.random()); // Número aleatorio entre 0 y 1\nconsole.log(Math.sqrt(16)); // 4\nconsole.log(Math.pow(2, 3)); // 8\n\n// Generar número aleatorio en rango\nfunction numeroAleatorio(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log(numeroAleatorio(1, 10)); // Número entre 1 y 10\n\n// Objeto JSON\nconst objeto = { nombre: 'Juan', edad: 25 };\nconst jsonString = JSON.stringify(objeto);\nconsole.log(jsonString); // '{\"nombre\":\"Juan\",\"edad\":25}'\n\nconst objetoParseado = JSON.parse(jsonString);\nconsole.log(objetoParseado); // { nombre: 'Juan', edad: 25 }\n\n// Objeto RegExp\nconst patron = /\\d+/g;\nconst texto = 'Tengo 25 años y 3 hermanos';\nconst numeros = texto.match(patron);\nconsole.log(numeros); // ['25', '3']\n\n// Validar email\nconst emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst email = 'usuario@ejemplo.com';\nconsole.log(emailPattern.test(email)); // true\n```",
        
        "Error handling: try-catch, throw": "El manejo de errores permite controlar situaciones excepcionales en el código. try-catch captura errores, throw lanza errores personalizados, y finally ejecuta código independientemente del resultado. Es fundamental para crear aplicaciones robustas.\n\n**Ejemplos:**\n```javascript\n// Try-catch básico\ntry {\n  const resultado = 10 / 0;\n  console.log(resultado);\n} catch (error) {\n  console.error('Error:', error.message);\n}\n\n// Try-catch con finally\ntry {\n  console.log('Ejecutando código...');\n  throw new Error('Error personalizado');\n} catch (error) {\n  console.error('Error capturado:', error.message);\n} finally {\n  console.log('Siempre se ejecuta');\n}\n\n// Lanzar errores personalizados\nfunction dividir(a, b) {\n  if (b === 0) {\n    throw new Error('División por cero no permitida');\n  }\n  return a / b;\n}\n\ntry {\n  const resultado = dividir(10, 0);\n  console.log(resultado);\n} catch (error) {\n  console.error('Error:', error.message);\n}\n\n// Manejo de errores con fetch\nasync function obtenerDatos(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error al obtener datos:', error.message);\n    return null;\n  }\n}\n\n// Validación con errores personalizados\nfunction validarEmail(email) {\n  if (!email) {\n    throw new Error('Email es requerido');\n  }\n  if (!email.includes('@')) {\n    throw new Error('Email debe contener @');\n  }\n  return true;\n}\n\ntry {\n  validarEmail('usuario@ejemplo.com');\n  console.log('Email válido');\n} catch (error) {\n  console.error('Error de validación:', error.message);\n}\n\n// Manejo de errores en arrays\ntry {\n  const numeros = [1, 2, 3];\n  const resultado = numeros.map(n => {\n    if (n === 2) {\n      throw new Error('Número 2 no permitido');\n    }\n    return n * 2;\n  });\n  console.log(resultado);\n} catch (error) {\n  console.error('Error en procesamiento:', error.message);\n}\n```",
        
        "Programación funcional básica": "La programación funcional es un paradigma que trata la computación como la evaluación de funciones matemáticas. Se enfoca en funciones puras, inmutabilidad, y composición de funciones. JavaScript soporta este paradigma con características como funciones de orden superior y métodos de arrays.\n\n**Ejemplos:**\n```javascript\n// Función pura (sin efectos secundarios)\nfunction sumar(a, b) {\n  return a + b;\n}\n\n// Función impura (con efectos secundarios)\nlet contador = 0;\nfunction incrementar() {\n  contador++;\n  return contador;\n}\n\n// Inmutabilidad\nconst numeros = [1, 2, 3, 4, 5];\nconst numerosDuplicados = numeros.map(n => n * 2);\nconsole.log(numeros); // [1, 2, 3, 4, 5] (sin cambios)\nconsole.log(numerosDuplicados); // [2, 4, 6, 8, 10]\n\n// Composición de funciones\nfunction sumar(a, b) {\n  return a + b;\n}\n\nfunction multiplicar(a, b) {\n  return a * b;\n}\n\nfunction componer(f, g) {\n  return function(x) {\n    return f(g(x));\n  };\n}\n\nconst sumarYMultiplicar = componer(x => x * 2, x => x + 1);\nconsole.log(sumarYMultiplicar(3)); // 8 ((3 + 1) * 2)\n\n// Funciones de orden superior\nfunction crearFiltro(condicion) {\n  return function(array) {\n    return array.filter(condicion);\n  };\n}\n\nconst filtrarPares = crearFiltro(n => n % 2 === 0);\nconst filtrarImpares = crearFiltro(n => n % 2 !== 0);\n\nconsole.log(filtrarPares([1, 2, 3, 4, 5])); // [2, 4]\nconsole.log(filtrarImpares([1, 2, 3, 4, 5])); // [1, 3, 5]\n\n// Currying\nfunction curriedSum(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\n\nconst sumar3 = curriedSum(1)(2)(3);\nconsole.log(sumar3); // 6\n\n// Pipeline de funciones\nfunction pipe(...funciones) {\n  return function(valor) {\n    return funciones.reduce((acc, fn) => fn(acc), valor);\n  };\n}\n\nconst procesarTexto = pipe(\n  texto => texto.toUpperCase(),\n  texto => texto.replace(/\\s/g, '-'),\n  texto => `Resultado: ${texto}`\n);\n\nconsole.log(procesarTexto('hola mundo')); // Resultado: HOLA-MUNDO\n\n// Función de orden superior para crear validadores\nfunction crearValidador(regla) {\n  return function(valor) {\n    return regla(valor);\n  };\n}\n\nconst esPositivo = crearValidador(n => n > 0);\nconst esPar = crearValidador(n => n % 2 === 0);\n\nconsole.log(esPositivo(5)); // true\nconsole.log(esPar(4)); // true\n```"
      },
      practical: [
        "Manipular arrays con métodos avanzados",
        "Trabajar con objetos y destructuring",
        "Crear funciones reutilizables",
        "Implementar manejo de errores",
        "Desarrollar calculadora interactiva"
      ]
    },
    activities: [
      {
        title: "Métodos de arrays",
        duration: "60 min",
        description: "Trabajar con map, filter, reduce y otros métodos de arrays"
      },
      {
        title: "Objetos y destructuring",
        duration: "45 min",
        description: "Manipular objetos y usar destructuring assignment"
      },
      {
        title: "Funciones avanzadas",
        duration: "45 min",
        description: "Crear funciones de orden superior y manejar errores"
      }
    ],
    homework: [
      "Crear lista de tareas con métodos de arrays",
      "Implementar calculadora científica",
      "Desarrollar juego de memoria con objetos"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web",
      "Consola de desarrollador"
    ],
    exercises: [
      {
        title: "Lista de Tareas con Arrays",
        description: "Crea una aplicación de lista de tareas usando métodos de arrays avanzados.",
        code: `// Lista de tareas con métodos de arrays
class ListaTareas {
  constructor() {
    this.tareas = [];
  }
  
  // Agregar nueva tarea
  agregarTarea(titulo, descripcion, prioridad = 'media') {
    // Tu código aquí
  }
  
  // Marcar tarea como completada
  completarTarea(id) {
    // Tu código aquí
  }
  
  // Filtrar tareas por prioridad
  filtrarPorPrioridad(prioridad) {
    // Tu código aquí
  }
  
  // Obtener estadísticas
  obtenerEstadisticas() {
    // Tu código aquí
  }
}

// Ejemplo de uso
const lista = new ListaTareas();`,
        solution: `// Lista de tareas con métodos de arrays - Solución
class ListaTareas {
  constructor() {
    this.tareas = [];
    this.contadorId = 1;
  }
  
  // Agregar nueva tarea
  agregarTarea(titulo, descripcion, prioridad = 'media') {
    const nuevaTarea = {
      id: this.contadorId++,
      titulo,
      descripcion,
      prioridad,
      completada: false,
      fechaCreacion: new Date()
    };
    
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }
  
  // Marcar tarea como completada
  completarTarea(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = true;
      tarea.fechaCompletada = new Date();
      return true;
    }
    return false;
  }
  
  // Filtrar tareas por prioridad
  filtrarPorPrioridad(prioridad) {
    return this.tareas.filter(tarea => tarea.prioridad === prioridad);
  }
  
  // Obtener estadísticas
  obtenerEstadisticas() {
    const total = this.tareas.length;
    const completadas = this.tareas.filter(t => t.completada).length;
    const pendientes = total - completadas;
    
    const porPrioridad = this.tareas.reduce((acc, tarea) => {
      acc[tarea.prioridad] = (acc[tarea.prioridad] || 0) + 1;
      return acc;
    }, {});
    
    return {
      total,
      completadas,
      pendientes,
      porcentajeCompletadas: total > 0 ? Math.round((completadas / total) * 100) : 0,
      porPrioridad
    };
  }
  
  // Métodos adicionales usando arrays
  obtenerTareasPendientes() {
    return this.tareas.filter(tarea => !tarea.completada);
  }
  
  obtenerTareasCompletadas() {
    return this.tareas.filter(tarea => tarea.completada);
  }
  
  buscarTareas(termino) {
    return this.tareas.filter(tarea => 
      tarea.titulo.toLowerCase().includes(termino.toLowerCase()) ||
      tarea.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
  }
  
  ordenarPorPrioridad() {
    const ordenPrioridad = { alta: 3, media: 2, baja: 1 };
    return [...this.tareas].sort((a, b) => 
      ordenPrioridad[b.prioridad] - ordenPrioridad[a.prioridad]
    );
  }
}

// Ejemplo de uso completo
const lista = new ListaTareas();

// Agregar tareas
lista.agregarTarea('Estudiar JavaScript', 'Repasar métodos de arrays', 'alta');
lista.agregarTarea('Hacer ejercicio', 'Caminar 30 minutos', 'media');
lista.agregarTarea('Leer libro', 'Leer capítulo 5', 'baja');

// Completar una tarea
lista.completarTarea(1);

// Ver estadísticas
console.log('Estadísticas:', lista.obtenerEstadisticas());

// Filtrar por prioridad
console.log('Tareas de alta prioridad:', lista.filtrarPorPrioridad('alta'));

// Buscar tareas
console.log('Buscar "JavaScript":', lista.buscarTareas('JavaScript'));`
      }
    ]
  },
  {
    id: 11,
    title: "JavaScript - DOM y Eventos",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Manipular elementos del DOM con JavaScript",
      "Implementar event listeners",
      "Crear interactividad en páginas web",
      "Validar formularios con JavaScript"
    ],
    content: {
      theoretical: [
        "¿Qué es el DOM?",
        "Selección de elementos: getElementById, querySelector",
        "Manipulación de contenido: innerHTML, textContent",
        "Eventos del navegador: click, submit, change",
        "Event listeners: addEventListener, removeEventListener",
        "Validación de formularios con JavaScript"
      ],
      theoreticalDetails: {
        "¿Qué es el DOM?": "El DOM (Document Object Model) es una representación en memoria de la estructura HTML de una página web. Es un árbol de nodos donde cada elemento HTML es un nodo que puede ser manipulado con JavaScript. El DOM permite acceder, modificar y crear elementos dinámicamente.\n\n**Ejemplos:**\n```javascript\n// Estructura del DOM\n// <html>\n//   <head>\n//     <title>Mi Página</title>\n//   </head>\n//   <body>\n//     <div id=\"contenedor\">\n//       <h1>Título</h1>\n//       <p>Párrafo</p>\n//     </div>\n//   </body>\n// </html>\n\n// Acceder al documento\nconsole.log(document); // Objeto document\nconsole.log(document.documentElement); // Elemento <html>\nconsole.log(document.body); // Elemento <body>\nconsole.log(document.head); // Elemento <head>\n\n// Navegar por el DOM\nconst contenedor = document.getElementById('contenedor');\nconsole.log(contenedor.parentNode); // Elemento padre\nconsole.log(contenedor.childNodes); // Nodos hijos\nconsole.log(contenedor.firstChild); // Primer hijo\nconsole.log(contenedor.lastChild); // Último hijo\nconsole.log(contenedor.nextSibling); // Hermano siguiente\nconsole.log(contenedor.previousSibling); // Hermano anterior\n\n// Tipos de nodos\nconsole.log(document.nodeType); // 9 (DOCUMENT_NODE)\nconsole.log(document.body.nodeType); // 1 (ELEMENT_NODE)\nconsole.log(document.body.firstChild.nodeType); // 3 (TEXT_NODE)\n\n// Propiedades del nodo\nconst elemento = document.getElementById('contenedor');\nconsole.log(elemento.nodeName); // DIV\nconsole.log(elemento.nodeValue); // null (para elementos)\nconsole.log(elemento.tagName); // DIV\nconsole.log(elemento.id); // contenedor\nconsole.log(elemento.className); // clases CSS\nconsole.log(elemento.innerHTML); // contenido HTML\nconsole.log(elemento.textContent); // texto sin HTML\n```",
        
        "Selección de elementos: getElementById, querySelector": "JavaScript proporciona varios métodos para seleccionar elementos del DOM. getElementById selecciona por ID, querySelector usa selectores CSS, y otros métodos permiten seleccionar múltiples elementos. Cada método tiene sus ventajas y casos de uso específicos.\n\n**Ejemplos:**\n```javascript\n// getElementById - Seleccionar por ID\nconst elemento = document.getElementById('mi-elemento');\nconsole.log(elemento); // Elemento con id=\"mi-elemento\"\n\n// querySelector - Selector CSS\nconst primerParrafo = document.querySelector('p');\nconst elementoConClase = document.querySelector('.mi-clase');\nconst elementoConAtributo = document.querySelector('[data-id=\"123\"]');\nconst elementoAnidado = document.querySelector('#contenedor .destacado');\n\n// querySelectorAll - Múltiples elementos\nconst todosLosParrafos = document.querySelectorAll('p');\nconst elementosConClase = document.querySelectorAll('.mi-clase');\nconst elementosAnidados = document.querySelectorAll('#contenedor .destacado');\n\n// getElementsByClassName\nconst elementosPorClase = document.getElementsByClassName('mi-clase');\nconsole.log(elementosPorClase); // HTMLCollection\n\n// getElementsByTagName\nconst elementosPorTag = document.getElementsByTagName('div');\nconsole.log(elementosPorTag); // HTMLCollection\n\n// getElementsByName\nconst elementosPorNombre = document.getElementsByName('mi-input');\nconsole.log(elementosPorNombre); // NodeList\n\n// Selección dentro de un elemento\nconst contenedor = document.getElementById('contenedor');\nconst elementoInterno = contenedor.querySelector('.interno');\nconst elementosInternos = contenedor.querySelectorAll('.interno');\n\n// Verificar si existe elemento\nconst elemento = document.getElementById('no-existe');\nif (elemento) {\n  console.log('Elemento encontrado');\n} else {\n  console.log('Elemento no encontrado');\n}\n\n// Selección con múltiples criterios\nconst elementos = document.querySelectorAll('div.mi-clase, p.destacado, #especial');\nconsole.log(elementos); // NodeList con todos los elementos que coincidan\n\n// Selección de formularios\nconst formulario = document.querySelector('form');\nconst inputs = formulario.querySelectorAll('input');\nconst boton = formulario.querySelector('button[type=\"submit\"]');\n```",
        
        "Manipulación de contenido: innerHTML, textContent": "La manipulación del contenido permite cambiar el texto, HTML y atributos de los elementos. innerHTML permite insertar HTML, textContent solo texto, y otros métodos permiten manipular atributos y clases. Es fundamental para crear contenido dinámico.\n\n**Ejemplos:**\n```javascript\n// Seleccionar elemento\nconst elemento = document.getElementById('mi-elemento');\n\n// innerHTML - Contenido HTML\nconst contenidoHTML = elemento.innerHTML;\nconsole.log(contenidoHTML); // HTML interno\n\nelemento.innerHTML = '<h2>Nuevo título</h2><p>Nuevo párrafo</p>';\nelemento.innerHTML += '<span>Texto adicional</span>';\n\n// textContent - Solo texto\nelemento.textContent = 'Solo texto sin HTML';\nelemento.textContent += ' - Texto adicional';\n\n// innerText - Texto visible (considera CSS)\nelemento.innerText = 'Texto visible';\n\n// Manipular atributos\nelemento.setAttribute('data-id', '123');\nelemento.setAttribute('class', 'nueva-clase');\nelemento.setAttribute('title', 'Nuevo título');\n\nconst valorAtributo = elemento.getAttribute('data-id');\nconsole.log(valorAtributo); // 123\n\nconst tieneAtributo = elemento.hasAttribute('data-id');\nconsole.log(tieneAtributo); // true\n\nelemento.removeAttribute('data-id');\n\n// Manipular clases CSS\nconst elementoConClase = document.querySelector('.mi-elemento');\nelementoConClase.classList.add('nueva-clase');\nelementoConClase.classList.add('otra-clase');\nelementoConClase.classList.remove('clase-antigua');\nelementoConClase.classList.toggle('clase-activa');\n\nconst tieneClase = elementoConClase.classList.contains('nueva-clase');\nconsole.log(tieneClase); // true\n\n// className - Manipular todas las clases\nelementoConClase.className = 'clase1 clase2 clase3';\nelementoConClase.className += ' clase4';\n\n// Manipular estilos\nelemento.style.color = 'red';\nelemento.style.backgroundColor = 'blue';\nelemento.style.fontSize = '16px';\nelemento.style.display = 'none';\nelemento.style.display = 'block';\n\n// Obtener estilos computados\nconst estilos = window.getComputedStyle(elemento);\nconsole.log(estilos.color); // Valor computado\nconsole.log(estilos.fontSize); // Valor computado\n\n// Manipular formularios\nconst input = document.querySelector('input[name=\"email\"]');\ninput.value = 'usuario@ejemplo.com';\ninput.placeholder = 'Ingresa tu email';\ninput.disabled = true;\ninput.required = true;\n\nconst valorInput = input.value;\nconsole.log(valorInput); // usuario@ejemplo.com\n\n// Manipular imágenes\nconst imagen = document.querySelector('img');\nimagen.src = 'nueva-imagen.jpg';\nimagen.alt = 'Nueva imagen';\nimagen.width = 300;\nimagen.height = 200;\n```",
        
        "Eventos del navegador: click, submit, change": "Los eventos son acciones que ocurren en el navegador y pueden ser detectadas por JavaScript. Los eventos comunes incluyen click, submit, change, input, focus, blur, y muchos otros. Cada evento proporciona información sobre la acción que lo desencadenó.\n\n**Ejemplos:**\n```javascript\n// Evento click\nconst boton = document.querySelector('button');\nboton.addEventListener('click', function(event) {\n  console.log('Botón clickeado');\n  console.log('Evento:', event);\n  console.log('Target:', event.target);\n  console.log('Current target:', event.currentTarget);\n});\n\n// Evento submit (formulario)\nconst formulario = document.querySelector('form');\nformulario.addEventListener('submit', function(event) {\n  event.preventDefault(); // Prevenir envío por defecto\n  console.log('Formulario enviado');\n  \n  const formData = new FormData(formulario);\n  const datos = Object.fromEntries(formData);\n  console.log('Datos del formulario:', datos);\n});\n\n// Evento change (input)\nconst input = document.querySelector('input[type=\"text\"]');\ninput.addEventListener('change', function(event) {\n  console.log('Valor cambiado:', event.target.value);\n});\n\n// Evento input (tiempo real)\ninput.addEventListener('input', function(event) {\n  console.log('Valor actual:', event.target.value);\n});\n\n// Eventos de teclado\ninput.addEventListener('keydown', function(event) {\n  console.log('Tecla presionada:', event.key);\n  console.log('Código de tecla:', event.code);\n  \n  if (event.key === 'Enter') {\n    console.log('Enter presionado');\n  }\n});\n\ninput.addEventListener('keyup', function(event) {\n  console.log('Tecla liberada:', event.key);\n});\n\n// Eventos de mouse\nconst elemento = document.querySelector('.mi-elemento');\nelemento.addEventListener('mouseenter', function(event) {\n  console.log('Mouse entró al elemento');\n});\nelemento.addEventListener('mouseleave', function(event) {\n  console.log('Mouse salió del elemento');\n});\nelemento.addEventListener('mousemove', function(event) {\n  console.log('Mouse se movió:', event.clientX, event.clientY);\n});\n\n// Eventos de focus y blur\ninput.addEventListener('focus', function(event) {\n  console.log('Input recibió foco');\n});\ninput.addEventListener('blur', function(event) {\n  console.log('Input perdió foco');\n});\n\n// Evento de scroll\nwindow.addEventListener('scroll', function(event) {\n  console.log('Scroll:', window.scrollY);\n});\n\n// Evento de resize\nwindow.addEventListener('resize', function(event) {\n  console.log('Ventana redimensionada:', window.innerWidth, window.innerHeight);\n});\n\n// Evento de carga\nwindow.addEventListener('load', function(event) {\n  console.log('Página completamente cargada');\n});\ndocument.addEventListener('DOMContentLoaded', function(event) {\n  console.log('DOM completamente cargado');\n});\n```",
        
        "Event listeners: addEventListener, removeEventListener": "Los event listeners permiten escuchar eventos específicos en elementos del DOM. addEventListener agrega un listener, removeEventListener lo elimina, y se pueden usar diferentes opciones para controlar el comportamiento. Es la forma moderna y recomendada de manejar eventos.\n\n**Ejemplos:**\n```javascript\n// addEventListener básico\nconst boton = document.querySelector('button');\n\nfunction manejarClick(event) {\n  console.log('Botón clickeado');\n  console.log('Evento:', event);\n}\n\nboton.addEventListener('click', manejarClick);\n\n// removeEventListener\nboton.removeEventListener('click', manejarClick);\n\n// addEventListener con opciones\nboton.addEventListener('click', manejarClick, {\n  once: true, // Solo se ejecuta una vez\n  passive: true, // No llama a preventDefault()\n  capture: false // Fase de burbuja (por defecto)\n});\n\n// Event listener con arrow function\nboton.addEventListener('click', (event) => {\n  console.log('Click con arrow function');\n  console.log('This:', this); // undefined en arrow function\n});\n\n// Event listener con función anónima\nboton.addEventListener('click', function(event) {\n  console.log('Click con función anónima');\n  console.log('This:', this); // Referencia al elemento\n});\n\n// Múltiples event listeners\nboton.addEventListener('click', function(event) {\n  console.log('Primer listener');\n});\nboton.addEventListener('click', function(event) {\n  console.log('Segundo listener');\n});\n\n// Event listener con parámetros\nfunction crearManejador(mensaje) {\n  return function(event) {\n    console.log(mensaje, event.target);\n  };\n}\n\nboton.addEventListener('click', crearManejador('Botón clickeado:'));\n\n// Event delegation\nconst contenedor = document.querySelector('.contenedor');\ncontenedor.addEventListener('click', function(event) {\n  if (event.target.classList.contains('boton')) {\n    console.log('Botón clickeado:', event.target.textContent);\n  }\n});\n\n// Event listener con preventDefault\nelemento.addEventListener('click', function(event) {\n  event.preventDefault(); // Prevenir comportamiento por defecto\n  console.log('Click prevenido');\n});\n\n// Event listener con stopPropagation\nelemento.addEventListener('click', function(event) {\n  event.stopPropagation(); // Detener propagación\n  console.log('Propagación detenida');\n});\n\n// Event listener con stopImmediatePropagation\nelemento.addEventListener('click', function(event) {\n  event.stopImmediatePropagation(); // Detener otros listeners\n  console.log('Otros listeners detenidos');\n});\n\n// Event listener con timeout\nboton.addEventListener('click', function(event) {\n  setTimeout(() => {\n    console.log('Ejecutado después de 1 segundo');\n  }, 1000);\n});\n\n// Event listener con debounce\nfunction debounce(func, wait) {\n  let timeout;\n  return function executedFunction(...args) {\n    const later = () => {\n      clearTimeout(timeout);\n      func(...args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n}\n\nconst input = document.querySelector('input');\nconst debouncedSearch = debounce(function(event) {\n  console.log('Búsqueda:', event.target.value);\n}, 300);\n\ninput.addEventListener('input', debouncedSearch);\n```",
        
        "Validación de formularios con JavaScript": "La validación de formularios permite verificar que los datos ingresados cumplan con los requisitos antes de enviarlos. Se puede hacer validación en tiempo real, al enviar el formulario, o ambos. Es fundamental para mejorar la experiencia del usuario y la seguridad.\n\n**Ejemplos:**\n```javascript\n// Validación básica\nconst formulario = document.querySelector('form');\nconst email = document.querySelector('input[type=\"email\"]');\nconst password = document.querySelector('input[type=\"password\"]');\nconst confirmPassword = document.querySelector('input[name=\"confirmPassword\"]');\n\n// Validación al enviar\nformulario.addEventListener('submit', function(event) {\n  event.preventDefault();\n  \n  if (validarFormulario()) {\n    console.log('Formulario válido, enviando...');\n    // Enviar formulario\n  } else {\n    console.log('Formulario inválido');\n  }\n});\n\nfunction validarFormulario() {\n  let esValido = true;\n  \n  // Limpiar errores anteriores\n  limpiarErrores();\n  \n  // Validar email\n  if (!validarEmail(email.value)) {\n    mostrarError(email, 'Email inválido');\n    esValido = false;\n  }\n  \n  // Validar password\n  if (!validarPassword(password.value)) {\n    mostrarError(password, 'Password debe tener al menos 8 caracteres');\n    esValido = false;\n  }\n  \n  // Validar confirmación de password\n  if (password.value !== confirmPassword.value) {\n    mostrarError(confirmPassword, 'Passwords no coinciden');\n    esValido = false;\n  }\n  \n  return esValido;\n}\n\n// Validación en tiempo real\nemail.addEventListener('blur', function() {\n  if (!validarEmail(this.value)) {\n    mostrarError(this, 'Email inválido');\n  } else {\n    limpiarError(this);\n  }\n});\n\npassword.addEventListener('input', function() {\n  if (this.value.length < 8) {\n    mostrarError(this, 'Password debe tener al menos 8 caracteres');\n  } else {\n    limpiarError(this);\n  }\n});\n\n// Funciones de validación\nfunction validarEmail(email) {\n  const patron = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return patron.test(email);\n}\n\nfunction validarPassword(password) {\n  return password.length >= 8;\n}\n\nfunction validarTelefono(telefono) {\n  const patron = /^\\d{10}$/;\n  return patron.test(telefono);\n}\n\nfunction validarURL(url) {\n  try {\n    new URL(url);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\n// Funciones de manejo de errores\nfunction mostrarError(campo, mensaje) {\n  campo.classList.add('error');\n  \n  let errorElement = campo.parentNode.querySelector('.error-message');\n  if (!errorElement) {\n    errorElement = document.createElement('div');\n    errorElement.className = 'error-message';\n    campo.parentNode.appendChild(errorElement);\n  }\n  \n  errorElement.textContent = mensaje;\n}\n\nfunction limpiarError(campo) {\n  campo.classList.remove('error');\n  const errorElement = campo.parentNode.querySelector('.error-message');\n  if (errorElement) {\n    errorElement.remove();\n  }\n}\n\nfunction limpiarErrores() {\n  const errores = document.querySelectorAll('.error-message');\n  errores.forEach(error => error.remove());\n  \n  const campos = document.querySelectorAll('.error');\n  campos.forEach(campo => campo.classList.remove('error'));\n}\n\n// Validación con HTML5\nconst input = document.querySelector('input[required]');\ninput.addEventListener('invalid', function(event) {\n  event.preventDefault();\n  mostrarError(this, 'Este campo es requerido');\n});\n\n// Validación de archivos\nconst fileInput = document.querySelector('input[type=\"file\"]');\nfileInput.addEventListener('change', function(event) {\n  const archivo = event.target.files[0];\n  \n  if (archivo) {\n    if (archivo.size > 5 * 1024 * 1024) { // 5MB\n      mostrarError(this, 'El archivo es demasiado grande');\n    } else if (!archivo.type.startsWith('image/')) {\n      mostrarError(this, 'Solo se permiten imágenes');\n    } else {\n      limpiarError(this);\n    }\n  }\n});\n```"
      },
      practical: [
        "Seleccionar y manipular elementos del DOM",
        "Implementar event listeners",
        "Crear formularios interactivos",
        "Validar datos de entrada",
        "Proyecto: galería de imágenes interactiva"
      ]
    },
    activities: [
      {
        title: "Manipulación del DOM",
        duration: "45 min",
        description: "Seleccionar y modificar elementos HTML"
      },
      {
        title: "Event listeners",
        duration: "45 min",
        description: "Implementar interactividad con eventos"
      },
      {
        title: "Validación de formularios",
        duration: "30 min",
        description: "Crear validación en tiempo real"
      }
    ],
    homework: [
      "Crear galería de imágenes interactiva",
      "Implementar formulario con validación",
      "Agregar efectos visuales con JavaScript"
    ],
    materials: [
      "Proyecto React configurado",
      "APIs para consumir",
      "Documentación de React Hooks"
    ],
    exercises: [
      {
        title: "Lista de Tareas con Hooks",
        description: "Crea una aplicación de lista de tareas usando useState y useEffect.",
        code: `// Componente de lista de tareas
import React, { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
    
    // Tu código aquí
    
    return (
        <div className="todo-list">
            <h2>Lista de Tareas</h2>
            {/* Tu JSX aquí */}
        </div>
    );
}

export default TodoList;`,
        solution: `// Lista de tareas con hooks - Solución
import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [filtro, setFiltro] = useState('todas');
    
    // Cargar tareas del localStorage al montar el componente
    useEffect(() => {
        const tareasGuardadas = localStorage.getItem('todos');
        if (tareasGuardadas) {
            setTodos(JSON.parse(tareasGuardadas));
        }
    }, []);
    
    // Guardar tareas en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const agregarTarea = () => {
        if (nuevaTarea.trim()) {
            const nuevaTareaObj = {
                id: Date.now(),
                texto: nuevaTarea,
                completada: false,
                fecha: new Date().toISOString()
            };
            setTodos([...todos, nuevaTareaObj]);
            setNuevaTarea('');
        }
    };
    
    const toggleTarea = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completada: !todo.completada } : todo
        ));
    };
    
    const eliminarTarea = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    const tareasFiltradas = todos.filter(todo => {
        if (filtro === 'completadas') return todo.completada;
        if (filtro === 'pendientes') return !todo.completada;
        return true;
    });
    
    return (
        <div className="todo-list">
            <h2>Lista de Tareas</h2>
            
            <div className="todo-form">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva tarea..."
                    onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
                />
                <button onClick={agregarTarea}>Agregar</button>
            </div>
            
            <div className="filtros">
                <button 
                    className={filtro === 'todas' ? 'active' : ''}
                    onClick={() => setFiltro('todas')}
                >
                    Todas ({todos.length})
                </button>
                <button 
                    className={filtro === 'pendientes' ? 'active' : ''}
                    onClick={() => setFiltro('pendientes')}
                >
                    Pendientes ({todos.filter(t => !t.completada).length})
                </button>
                <button 
                    className={filtro === 'completadas' ? 'active' : ''}
                    onClick={() => setFiltro('completadas')}
                >
                    Completadas ({todos.filter(t => t.completada).length})
                </button>
            </div>
            
            <ul className="todos">
                {tareasFiltradas.map(todo => (
                    <li key={todo.id} className={\`todo-item \${todo.completada ? 'completada' : ''}\`}>
                        <input
                            type="checkbox"
                            checked={todo.completada}
                            onChange={() => toggleTarea(todo.id)}
                        />
                        <span className="todo-text">{todo.texto}</span>
                        <button 
                            className="delete-btn"
                            onClick={() => eliminarTarea(todo.id)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;`
      }
    ]
  },
  {
    id: 12,
    title: "JavaScript - Arrays y Objetos",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Trabajar con arrays y sus métodos",
      "Manipular objetos JavaScript",
      "Usar JSON para intercambio de datos",
      "Implementar Local Storage"
    ],
    content: {
      theoretical: [
        "Arrays: métodos map, filter, reduce",
        "Objetos: propiedades y métodos",
        "JSON: parse y stringify",
        "Local Storage: persistencia de datos",
        "Session Storage: datos temporales",
        "Estructuras de datos complejas"
      ],
      theoreticalDetails: {
        "Arrays: métodos map, filter, reduce": "Los métodos map, filter y reduce son fundamentales para la programación funcional en JavaScript. map transforma cada elemento, filter selecciona elementos que cumplen una condición, y reduce acumula valores en un solo resultado. Son métodos inmutables que no modifican el array original.\n\n**Ejemplos:**\n```javascript\n// Array de números\nconst numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// map: Transformar cada elemento\nconst cuadrados = numeros.map(n => n * n);\nconsole.log(cuadrados); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\nconst dobles = numeros.map(n => n * 2);\nconsole.log(dobles); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n\n// filter: Seleccionar elementos\nconst pares = numeros.filter(n => n % 2 === 0);\nconsole.log(pares); // [2, 4, 6, 8, 10]\n\nconst mayoresA5 = numeros.filter(n => n > 5);\nconsole.log(mayoresA5); // [6, 7, 8, 9, 10]\n\n// reduce: Acumular valores\nconst suma = numeros.reduce((acc, n) => acc + n, 0);\nconsole.log(suma); // 55\n\nconst producto = numeros.reduce((acc, n) => acc * n, 1);\nconsole.log(producto); // 3628800\n\n// Array de objetos\nconst personas = [\n  { nombre: 'Juan', edad: 25, ciudad: 'Madrid' },\n  { nombre: 'María', edad: 30, ciudad: 'Barcelona' },\n  { nombre: 'Pedro', edad: 20, ciudad: 'Madrid' },\n  { nombre: 'Ana', edad: 35, ciudad: 'Valencia' }\n];\n\n// map con objetos\nconst nombres = personas.map(p => p.nombre);\nconsole.log(nombres); // ['Juan', 'María', 'Pedro', 'Ana']\n\nconst edades = personas.map(p => p.edad);\nconsole.log(edades); // [25, 30, 20, 35]\n\n// filter con objetos\nconst deMadrid = personas.filter(p => p.ciudad === 'Madrid');\nconsole.log(deMadrid); // [{ nombre: 'Juan', edad: 25, ciudad: 'Madrid' }, { nombre: 'Pedro', edad: 20, ciudad: 'Madrid' }]\n\nconst mayoresDe25 = personas.filter(p => p.edad > 25);\nconsole.log(mayoresDe25); // [{ nombre: 'María', edad: 30, ciudad: 'Barcelona' }, { nombre: 'Ana', edad: 35, ciudad: 'Valencia' }]\n\n// reduce con objetos\nconst edadPromedio = personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;\nconsole.log(edadPromedio); // 27.5\n\nconst agrupadoPorCiudad = personas.reduce((acc, p) => {\n  if (!acc[p.ciudad]) {\n    acc[p.ciudad] = [];\n  }\n  acc[p.ciudad].push(p);\n  return acc;\n}, {});\nconsole.log(agrupadoPorCiudad); // { Madrid: [...], Barcelona: [...], Valencia: [...] }\n\n// Combinando métodos\nconst nombresMayoresDe25 = personas\n  .filter(p => p.edad > 25)\n  .map(p => p.nombre);\nconsole.log(nombresMayoresDe25); // ['María', 'Ana']\n\nconst sumaEdadesMadrid = personas\n  .filter(p => p.ciudad === 'Madrid')\n  .reduce((acc, p) => acc + p.edad, 0);\nconsole.log(sumaEdadesMadrid); // 45\n\n// Métodos adicionales\nconst numeros2 = [1, 2, 3, 4, 5];\n\n// forEach: Ejecutar función para cada elemento\nnumeros2.forEach((n, index) => {\n  console.log(`Elemento ${index}: ${n}`);\n});\n\n// find: Encontrar primer elemento que cumple condición\nconst primerPar = numeros2.find(n => n % 2 === 0);\nconsole.log(primerPar); // 2\n\n// findIndex: Encontrar índice del primer elemento que cumple condición\nconst indicePrimerPar = numeros2.findIndex(n => n % 2 === 0);\nconsole.log(indicePrimerPar); // 1\n\n// some: Verificar si algún elemento cumple condición\nconst hayPares = numeros2.some(n => n % 2 === 0);\nconsole.log(hayPares); // true\n\n// every: Verificar si todos los elementos cumplen condición\nconst todosPares = numeros2.every(n => n % 2 === 0);\nconsole.log(todosPares); // false\n```",
        
        "Objetos: propiedades y métodos": "Los objetos en JavaScript son colecciones de propiedades clave-valor que pueden contener datos y funciones (métodos). Se pueden crear de diferentes maneras, acceder a propiedades, agregar métodos, y usar características avanzadas como getters, setters y métodos estáticos.\n\n**Ejemplos:**\n```javascript\n// Crear objeto literal\nconst persona = {\n  nombre: 'Juan',\n  edad: 25,\n  ciudad: 'Madrid',\n  saludar: function() {\n    return `Hola, soy ${this.nombre}`;\n  },\n  cumplirAnos: function() {\n    this.edad++;\n    return this.edad;\n  }\n};\n\nconsole.log(persona.nombre); // Juan\nconsole.log(persona.saludar()); // Hola, soy Juan\nconsole.log(persona.cumplirAnos()); // 26\n\n// Crear objeto con constructor\nfunction Persona(nombre, edad, ciudad) {\n  this.nombre = nombre;\n  this.edad = edad;\n  this.ciudad = ciudad;\n  this.saludar = function() {\n    return `Hola, soy ${this.nombre}`;\n  };\n}\n\nconst persona2 = new Persona('María', 30, 'Barcelona');\nconsole.log(persona2.saludar()); // Hola, soy María\n\n// Crear objeto con clase\nclass PersonaClase {\n  constructor(nombre, edad, ciudad) {\n    this.nombre = nombre;\n    this.edad = edad;\n    this.ciudad = ciudad;\n  }\n  \n  saludar() {\n    return `Hola, soy ${this.nombre}`;\n  }\n  \n  cumplirAnos() {\n    this.edad++;\n    return this.edad;\n  }\n  \n  // Método estático\n  static crearPersona(nombre, edad, ciudad) {\n    return new PersonaClase(nombre, edad, ciudad);\n  }\n}\n\nconst persona3 = new PersonaClase('Pedro', 20, 'Valencia');\nconsole.log(persona3.saludar()); // Hola, soy Pedro\n\nconst persona4 = PersonaClase.crearPersona('Ana', 35, 'Sevilla');\nconsole.log(persona4.saludar()); // Hola, soy Ana\n\n// Getters y setters\nclass CuentaBancaria {\n  constructor(titular, saldo) {\n    this.titular = titular;\n    this._saldo = saldo;\n  }\n  \n  get saldo() {\n    return this._saldo;\n  }\n  \n  set saldo(nuevoSaldo) {\n    if (nuevoSaldo < 0) {\n      throw new Error('El saldo no puede ser negativo');\n    }\n    this._saldo = nuevoSaldo;\n  }\n  \n  depositar(cantidad) {\n    this.saldo += cantidad;\n    return this.saldo;\n  }\n  \n  retirar(cantidad) {\n    if (cantidad > this.saldo) {\n      throw new Error('Saldo insuficiente');\n    }\n    this.saldo -= cantidad;\n    return this.saldo;\n  }\n}\n\nconst cuenta = new CuentaBancaria('Juan', 1000);\nconsole.log(cuenta.saldo); // 1000\ncuenta.depositar(500);\nconsole.log(cuenta.saldo); // 1500\ncuenta.retirar(200);\nconsole.log(cuenta.saldo); // 1300\n\n// Métodos de objeto\nconst objeto = {\n  propiedad1: 'valor1',\n  propiedad2: 'valor2',\n  propiedad3: 'valor3'\n};\n\n// Object.keys: Obtener claves\nconst claves = Object.keys(objeto);\nconsole.log(claves); // ['propiedad1', 'propiedad2', 'propiedad3']\n\n// Object.values: Obtener valores\nconst valores = Object.values(objeto);\nconsole.log(valores); // ['valor1', 'valor2', 'valor3']\n\n// Object.entries: Obtener pares clave-valor\nconst entradas = Object.entries(objeto);\nconsole.log(entradas); // [['propiedad1', 'valor1'], ['propiedad2', 'valor2'], ['propiedad3', 'valor3']]\n\n// Object.assign: Copiar propiedades\nconst objeto2 = { propiedad4: 'valor4' };\nconst objetoCombinado = Object.assign({}, objeto, objeto2);\nconsole.log(objetoCombinado); // { propiedad1: 'valor1', propiedad2: 'valor2', propiedad3: 'valor3', propiedad4: 'valor4' }\n\n// Spread operator\nconst objetoCombinado2 = { ...objeto, ...objeto2 };\nconsole.log(objetoCombinado2); // { propiedad1: 'valor1', propiedad2: 'valor2', propiedad3: 'valor3', propiedad4: 'valor4' }\n\n// Object.freeze: Hacer objeto inmutable\nconst objetoInmutable = Object.freeze({ nombre: 'Juan', edad: 25 });\n// objetoInmutable.edad = 30; // Error en modo estricto\nconsole.log(objetoInmutable); // { nombre: 'Juan', edad: 25 }\n\n// Object.seal: Prevenir agregar/eliminar propiedades\nconst objetoSellado = Object.seal({ nombre: 'María', edad: 30 });\nobjetoSellado.edad = 31; // Permitido\n// objetoSellado.ciudad = 'Madrid'; // Error en modo estricto\nconsole.log(objetoSellado); // { nombre: 'María', edad: 31 }\n```",
        
        "JSON: parse y stringify": "JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer. JavaScript proporciona métodos para convertir objetos a JSON (stringify) y viceversa (parse). Es fundamental para la comunicación con APIs y el almacenamiento de datos.\n\n**Ejemplos:**\n```javascript\n// Objeto JavaScript\nconst persona = {\n  nombre: 'Juan',\n  edad: 25,\n  ciudad: 'Madrid',\n  hobbies: ['leer', 'cocinar', 'viajar'],\n  direccion: {\n    calle: 'Calle Mayor',\n    numero: 123,\n    codigoPostal: '28001'\n  },\n  activo: true,\n  fechaNacimiento: new Date('1999-01-15')\n};\n\n// JSON.stringify: Convertir objeto a JSON\nconst jsonString = JSON.stringify(persona);\nconsole.log(jsonString);\n// '{\"nombre\":\"Juan\",\"edad\":25,\"ciudad\":\"Madrid\",\"hobbies\":[\"leer\",\"cocinar\",\"viajar\"],\"direccion\":{\"calle\":\"Calle Mayor\",\"numero\":123,\"codigoPostal\":\"28001\"},\"activo\":true,\"fechaNacimiento\":\"1999-01-15T00:00:00.000Z\"}'\n\n// JSON.stringify con parámetros\nconst jsonFormateado = JSON.stringify(persona, null, 2);\nconsole.log(jsonFormateado);\n// {\n//   \"nombre\": \"Juan\",\n//   \"edad\": 25,\n//   \"ciudad\": \"Madrid\",\n//   \"hobbies\": [\n//     \"leer\",\n//     \"cocinar\",\n//     \"viajar\"\n//   ],\n//   \"direccion\": {\n//     \"calle\": \"Calle Mayor\",\n//     \"numero\": 123,\n//     \"codigoPostal\": \"28001\"\n//   },\n//   \"activo\": true,\n//   \"fechaNacimiento\": \"1999-01-15T00:00:00.000Z\"\n// }\n\n// JSON.stringify con replacer\nconst jsonConReplacer = JSON.stringify(persona, ['nombre', 'edad', 'ciudad']);\nconsole.log(jsonConReplacer); // '{\"nombre\":\"Juan\",\"edad\":25,\"ciudad\":\"Madrid\"}'\n\n// JSON.stringify con función replacer\nconst jsonConFuncionReplacer = JSON.stringify(persona, function(key, value) {\n  if (key === 'fechaNacimiento') {\n    return value.toISOString().split('T')[0]; // Solo la fecha\n  }\n  return value;\n});\nconsole.log(jsonConFuncionReplacer);\n\n// JSON.parse: Convertir JSON a objeto\nconst jsonString2 = '{\"nombre\":\"María\",\"edad\":30,\"ciudad\":\"Barcelona\"}';\nconst objeto = JSON.parse(jsonString2);\nconsole.log(objeto); // { nombre: 'María', edad: 30, ciudad: 'Barcelona' }\nconsole.log(objeto.nombre); // María\n\n// JSON.parse con reviver\nconst jsonConFecha = '{\"nombre\":\"Pedro\",\"fechaNacimiento\":\"1990-05-20\"}';\nconst objetoConFecha = JSON.parse(jsonConFecha, function(key, value) {\n  if (key === 'fechaNacimiento') {\n    return new Date(value);\n  }\n  return value;\n});\nconsole.log(objetoConFecha); // { nombre: 'Pedro', fechaNacimiento: Date object }\n\n// Manejo de errores\nfunction parsearJSON(jsonString) {\n  try {\n    return JSON.parse(jsonString);\n  } catch (error) {\n    console.error('Error al parsear JSON:', error.message);\n    return null;\n  }\n}\n\nconst jsonInvalido = '{\"nombre\":\"Juan\",\"edad\":25}'; // JSON válido\nconst jsonInvalido2 = '{\"nombre\":\"Juan\",\"edad\":25}'; // JSON inválido\n\nconst objeto1 = parsearJSON(jsonInvalido);\nconsole.log(objeto1); // { nombre: 'Juan', edad: 25 }\n\nconst objeto2 = parsearJSON(jsonInvalido2);\nconsole.log(objeto2); // null\n\n// Arrays JSON\nconst personas = [\n  { nombre: 'Juan', edad: 25 },\n  { nombre: 'María', edad: 30 },\n  { nombre: 'Pedro', edad: 20 }\n];\n\nconst jsonArray = JSON.stringify(personas);\nconsole.log(jsonArray);\n// '[{\"nombre\":\"Juan\",\"edad\":25},{\"nombre\":\"María\",\"edad\":30},{\"nombre\":\"Pedro\",\"edad\":20}]'\n\nconst arrayParseado = JSON.parse(jsonArray);\nconsole.log(arrayParseado); // Array de objetos\n\n// Clonar objetos con JSON\nconst objetoOriginal = { nombre: 'Juan', edad: 25 };\nconst objetoClonado = JSON.parse(JSON.stringify(objetoOriginal));\nobjetoClonado.edad = 30;\nconsole.log(objetoOriginal); // { nombre: 'Juan', edad: 25 }\nconsole.log(objetoClonado); // { nombre: 'Juan', edad: 30 }\n\n// Validar JSON\nfunction esJSONValido(jsonString) {\n  try {\n    JSON.parse(jsonString);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\nconsole.log(esJSONValido('{\"nombre\":\"Juan\"}')); // true\nconsole.log(esJSONValido('{\"nombre\":\"Juan\"}')); // false\n```",
        
        "Local Storage: persistencia de datos": "Local Storage permite almacenar datos en el navegador del usuario de forma persistente. Los datos se mantienen incluso después de cerrar el navegador y reiniciar la computadora. Es útil para guardar preferencias del usuario, datos de sesión, y configuraciones de la aplicación.\n\n**Ejemplos:**\n```javascript\n// Verificar soporte de Local Storage\nif (typeof(Storage) !== 'undefined') {\n  console.log('Local Storage soportado');\n} else {\n  console.log('Local Storage no soportado');\n}\n\n// Guardar datos\nlocalStorage.setItem('nombre', 'Juan');\nlocalStorage.setItem('edad', '25');\nlocalStorage.setItem('ciudad', 'Madrid');\n\n// Leer datos\nconst nombre = localStorage.getItem('nombre');\nconst edad = localStorage.getItem('edad');\nconst ciudad = localStorage.getItem('ciudad');\n\nconsole.log(nombre); // Juan\nconsole.log(edad); // 25\nconsole.log(ciudad); // Madrid\n\n// Leer datos con valor por defecto\nconst telefono = localStorage.getItem('telefono') || 'No disponible';\nconsole.log(telefono); // No disponible\n\n// Eliminar datos\nlocalStorage.removeItem('ciudad');\nconsole.log(localStorage.getItem('ciudad')); // null\n\n// Limpiar todo el Local Storage\nlocalStorage.clear();\nconsole.log(localStorage.length); // 0\n\n// Guardar objetos\nconst persona = {\n  nombre: 'María',\n  edad: 30,\n  ciudad: 'Barcelona',\n  hobbies: ['leer', 'cocinar']\n};\n\nlocalStorage.setItem('persona', JSON.stringify(persona));\n\n// Leer objetos\nconst personaGuardada = JSON.parse(localStorage.getItem('persona') || '{}');\nconsole.log(personaGuardada); // { nombre: 'María', edad: 30, ciudad: 'Barcelona', hobbies: ['leer', 'cocinar'] }\n\n// Guardar arrays\nconst tareas = [\n  { id: 1, texto: 'Comprar leche', completada: false },\n  { id: 2, texto: 'Hacer ejercicio', completada: true },\n  { id: 3, texto: 'Leer libro', completada: false }\n];\n\nlocalStorage.setItem('tareas', JSON.stringify(tareas));\n\n// Leer arrays\nconst tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');\nconsole.log(tareasGuardadas); // Array de tareas\n\n// Función helper para Local Storage\nconst StorageHelper = {\n  set: function(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (error) {\n      console.error('Error al guardar en Local Storage:', error);\n      return false;\n    }\n  },\n  \n  get: function(key, defaultValue = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (error) {\n      console.error('Error al leer de Local Storage:', error);\n      return defaultValue;\n    }\n  },\n  \n  remove: function(key) {\n    try {\n      localStorage.removeItem(key);\n      return true;\n    } catch (error) {\n      console.error('Error al eliminar de Local Storage:', error);\n      return false;\n    }\n  },\n  \n  clear: function() {\n    try {\n      localStorage.clear();\n      return true;\n    } catch (error) {\n      console.error('Error al limpiar Local Storage:', error);\n      return false;\n    }\n  },\n  \n  keys: function() {\n    const keys = [];\n    for (let i = 0; i < localStorage.length; i++) {\n      keys.push(localStorage.key(i));\n    }\n    return keys;\n  }\n};\n\n// Usar StorageHelper\nStorageHelper.set('configuracion', { tema: 'oscuro', idioma: 'es' });\nconst configuracion = StorageHelper.get('configuracion', { tema: 'claro', idioma: 'en' });\nconsole.log(configuracion); // { tema: 'oscuro', idioma: 'es' }\n\n// Ejemplo de aplicación de tareas\nclass TareaApp {\n  constructor() {\n    this.tareas = StorageHelper.get('tareas', []);\n  }\n  \n  agregarTarea(texto) {\n    const nuevaTarea = {\n      id: Date.now(),\n      texto: texto,\n      completada: false,\n      fechaCreacion: new Date().toISOString()\n    };\n    \n    this.tareas.push(nuevaTarea);\n    this.guardarTareas();\n    return nuevaTarea;\n  }\n  \n  completarTarea(id) {\n    const tarea = this.tareas.find(t => t.id === id);\n    if (tarea) {\n      tarea.completada = !tarea.completada;\n      this.guardarTareas();\n    }\n  }\n  \n  eliminarTarea(id) {\n    this.tareas = this.tareas.filter(t => t.id !== id);\n    this.guardarTareas();\n  }\n  \n  guardarTareas() {\n    StorageHelper.set('tareas', this.tareas);\n  }\n  \n  obtenerTareas() {\n    return this.tareas;\n  }\n}\n\nconst app = new TareaApp();\napp.agregarTarea('Aprender JavaScript');\napp.agregarTarea('Practicar CSS');\nconsole.log(app.obtenerTareas()); // Array de tareas\n```",
        
        "Session Storage: datos temporales": "Session Storage es similar a Local Storage pero los datos se eliminan cuando se cierra la pestaña del navegador. Es útil para datos temporales como el estado de la aplicación, datos de sesión, y información que no necesita persistir entre sesiones.\n\n**Ejemplos:**\n```javascript\n// Verificar soporte de Session Storage\nif (typeof(Storage) !== 'undefined') {\n  console.log('Session Storage soportado');\n} else {\n  console.log('Session Storage no soportado');\n}\n\n// Guardar datos temporales\nsessionStorage.setItem('usuarioActual', 'Juan');\nsessionStorage.setItem('ultimaActividad', new Date().toISOString());\nsessionStorage.setItem('contadorVisitas', '1');\n\n// Leer datos temporales\nconst usuarioActual = sessionStorage.getItem('usuarioActual');\nconst ultimaActividad = sessionStorage.getItem('ultimaActividad');\nconst contadorVisitas = parseInt(sessionStorage.getItem('contadorVisitas') || '0');\n\nconsole.log(usuarioActual); // Juan\nconsole.log(ultimaActividad); // Fecha actual\nconsole.log(contadorVisitas); // 1\n\n// Incrementar contador\nsessionStorage.setItem('contadorVisitas', (contadorVisitas + 1).toString());\n\n// Guardar objetos temporales\nconst estadoApp = {\n  paginaActual: 'inicio',\n  filtrosActivos: ['categoria1', 'categoria2'],\n  datosCargados: true,\n  timestamp: Date.now()\n};\n\nsessionStorage.setItem('estadoApp', JSON.stringify(estadoApp));\n\n// Leer objetos temporales\nconst estadoGuardado = JSON.parse(sessionStorage.getItem('estadoApp') || '{}');\nconsole.log(estadoGuardado); // Objeto con estado de la app\n\n// Función helper para Session Storage\nconst SessionStorageHelper = {\n  set: function(key, value) {\n    try {\n      sessionStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (error) {\n      console.error('Error al guardar en Session Storage:', error);\n      return false;\n    }\n  },\n  \n  get: function(key, defaultValue = null) {\n    try {\n      const item = sessionStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (error) {\n      console.error('Error al leer de Session Storage:', error);\n      return defaultValue;\n    }\n  },\n  \n  remove: function(key) {\n    try {\n      sessionStorage.removeItem(key);\n      return true;\n    } catch (error) {\n      console.error('Error al eliminar de Session Storage:', error);\n      return false;\n    }\n  },\n  \n  clear: function() {\n    try {\n      sessionStorage.clear();\n      return true;\n    } catch (error) {\n      console.error('Error al limpiar Session Storage:', error);\n      return false;\n    }\n  }\n};\n\n// Usar SessionStorageHelper\nSessionStorageHelper.set('configuracionTemporal', { tema: 'claro', vista: 'lista' });\nconst configTemporal = SessionStorageHelper.get('configuracionTemporal', { tema: 'oscuro', vista: 'grid' });\nconsole.log(configTemporal); // { tema: 'claro', vista: 'lista' }\n\n// Ejemplo de aplicación con Session Storage\nclass AppSession {\n  constructor() {\n    this.estado = SessionStorageHelper.get('appEstado', {\n      usuario: null,\n      carrito: [],\n      filtros: {},\n      pagina: 'inicio'\n    });\n  }\n  \n  iniciarSesion(usuario) {\n    this.estado.usuario = usuario;\n    this.guardarEstado();\n  }\n  \n  cerrarSesion() {\n    this.estado.usuario = null;\n    this.estado.carrito = [];\n    this.guardarEstado();\n  }\n  \n  agregarAlCarrito(producto) {\n    this.estado.carrito.push(producto);\n    this.guardarEstado();\n  }\n  \n  aplicarFiltros(filtros) {\n    this.estado.filtros = filtros;\n    this.guardarEstado();\n  }\n  \n  cambiarPagina(pagina) {\n    this.estado.pagina = pagina;\n    this.guardarEstado();\n  }\n  \n  guardarEstado() {\n    SessionStorageHelper.set('appEstado', this.estado);\n  }\n  \n  obtenerEstado() {\n    return this.estado;\n  }\n}\n\nconst appSession = new AppSession();\nappSession.iniciarSesion({ nombre: 'Juan', email: 'juan@ejemplo.com' });\nappSession.agregarAlCarrito({ id: 1, nombre: 'Producto 1', precio: 100 });\nappSession.aplicarFiltros({ categoria: 'electronica', precio: '100-500' });\nconsole.log(appSession.obtenerEstado()); // Estado completo de la app\n\n// Comparación Local Storage vs Session Storage\nconsole.log('Local Storage:', localStorage.length, 'items');\nconsole.log('Session Storage:', sessionStorage.length, 'items');\n\n// Los datos de Local Storage persisten entre sesiones\nlocalStorage.setItem('persistente', 'valor1');\n\n// Los datos de Session Storage se eliminan al cerrar la pestaña\nsessionStorage.setItem('temporal', 'valor2');\n\n// Verificar datos\nconsole.log('Local Storage persistente:', localStorage.getItem('persistente'));\nconsole.log('Session Storage temporal:', sessionStorage.getItem('temporal'));\n```",
        
        "Estructuras de datos complejas": "Las estructuras de datos complejas combinan arrays, objetos y otros tipos de datos para crear representaciones más sofisticadas. Incluyen arrays de objetos, objetos anidados, mapas, sets, y estructuras jerárquicas que son comunes en aplicaciones reales.\n\n**Ejemplos:**\n```javascript\n// Array de objetos complejos\nconst estudiantes = [\n  {\n    id: 1,\n    nombre: 'Juan',\n    edad: 20,\n    calificaciones: [8, 9, 7, 8],\n    contacto: {\n      email: 'juan@ejemplo.com',\n      telefono: '123-456-7890',\n      direccion: {\n        calle: 'Calle Mayor 123',\n        ciudad: 'Madrid',\n        codigoPostal: '28001'\n      }\n    },\n    cursos: ['Matemáticas', 'Física', 'Química']\n  },\n  {\n    id: 2,\n    nombre: 'María',\n    edad: 22,\n    calificaciones: [9, 8, 9, 10],\n    contacto: {\n      email: 'maria@ejemplo.com',\n      telefono: '098-765-4321',\n      direccion: {\n        calle: 'Avenida Principal 456',\n        ciudad: 'Barcelona',\n        codigoPostal: '08001'\n      }\n    },\n    cursos: ['Historia', 'Literatura', 'Arte']\n  }\n];\n\n// Acceder a datos anidados\nconsole.log(estudiantes[0].contacto.direccion.ciudad); // Madrid\nconsole.log(estudiantes[1].calificaciones[3]); // 10\n\n// Calcular promedio de calificaciones\nconst promedios = estudiantes.map(estudiante => {\n  const promedio = estudiante.calificaciones.reduce((acc, cal) => acc + cal, 0) / estudiante.calificaciones.length;\n  return {\n    nombre: estudiante.nombre,\n    promedio: promedio.toFixed(2)\n  };\n});\nconsole.log(promedios); // [{ nombre: 'Juan', promedio: '8.00' }, { nombre: 'María', promedio: '9.00' }]\n\n// Estructura jerárquica (árbol)\nconst empresa = {\n  nombre: 'TechCorp',\n  ceo: 'Ana García',\n  departamentos: [\n    {\n      nombre: 'Desarrollo',\n      jefe: 'Carlos López',\n      empleados: [\n        { nombre: 'Juan', puesto: 'Desarrollador Frontend', salario: 50000 },\n        { nombre: 'María', puesto: 'Desarrollador Backend', salario: 55000 }\n      ]\n    },\n    {\n      nombre: 'Marketing',\n      jefe: 'Laura Martínez',\n      empleados: [\n        { nombre: 'Pedro', puesto: 'Especialista en Redes Sociales', salario: 45000 },\n        { nombre: 'Sofia', puesto: 'Analista de Mercado', salario: 48000 }\n      ]\n    }\n  ]\n};\n\n// Buscar empleado por nombre\nfunction buscarEmpleado(empresa, nombreEmpleado) {\n  for (const departamento of empresa.departamentos) {\n    for (const empleado of departamento.empleados) {\n      if (empleado.nombre === nombreEmpleado) {\n        return {\n          empleado: empleado,\n          departamento: departamento.nombre,\n          jefe: departamento.jefe\n        };\n      }\n    }\n  }\n  return null;\n}\n\nconst empleadoEncontrado = buscarEmpleado(empresa, 'Juan');\nconsole.log(empleadoEncontrado); // { empleado: {...}, departamento: 'Desarrollo', jefe: 'Carlos López' }\n\n// Estructura de datos con Map y Set\nconst inventario = new Map();\ninventario.set('laptop', { precio: 1000, stock: 5, categoria: 'electronica' });\ninventario.set('mouse', { precio: 25, stock: 20, categoria: 'electronica' });\ninventario.set('libro', { precio: 15, stock: 50, categoria: 'libros' });\n\n// Usar Map\nconsole.log(inventario.get('laptop')); // { precio: 1000, stock: 5, categoria: 'electronica' }\nconsole.log(inventario.has('mouse')); // true\nconsole.log(inventario.size); // 3\n\n// Iterar sobre Map\nfor (const [producto, datos] of inventario) {\n  console.log(`${producto}: $${datos.precio} (${datos.stock} en stock)`);\n}\n\n// Usar Set para categorías únicas\nconst categorias = new Set();\nfor (const [producto, datos] of inventario) {\n  categorias.add(datos.categoria);\n}\nconsole.log(categorias); // Set(['electronica', 'libros'])\n\n// Estructura de datos para e-commerce\nconst tienda = {\n  productos: [\n    {\n      id: 1,\n      nombre: 'Laptop Gaming',\n      precio: 1500,\n      categoria: 'electronica',\n      stock: 10,\n      caracteristicas: ['16GB RAM', 'SSD 512GB', 'RTX 3060'],\n      reviews: [\n        { usuario: 'Juan', calificacion: 5, comentario: 'Excelente laptop' },\n        { usuario: 'María', calificacion: 4, comentario: 'Muy buena relación calidad-precio' }\n      ]\n    },\n    {\n      id: 2,\n      nombre: 'Smartphone',\n      precio: 800,\n      categoria: 'electronica',\n      stock: 25,\n      caracteristicas: ['128GB', 'Cámara 48MP', 'Batería 4000mAh'],\n      reviews: [\n        { usuario: 'Pedro', calificacion: 5, comentario: 'Perfecto para fotos' }\n      ]\n    }\n  ],\n  usuarios: [\n    { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com', tipo: 'premium' },\n    { id: 2, nombre: 'María', email: 'maria@ejemplo.com', tipo: 'regular' }\n  ],\n  pedidos: [\n    {\n      id: 1,\n      usuarioId: 1,\n      productos: [1, 2],\n      total: 2300,\n      fecha: '2024-01-15',\n      estado: 'completado'\n    }\n  ]\n};\n\n// Funciones para trabajar con la estructura\nfunction buscarProductoPorCategoria(tienda, categoria) {\n  return tienda.productos.filter(producto => producto.categoria === categoria);\n}\n\nfunction calcularPromedioCalificaciones(producto) {\n  if (producto.reviews.length === 0) return 0;\n  const suma = producto.reviews.reduce((acc, review) => acc + review.calificacion, 0);\n  return suma / producto.reviews.length;\n}\n\nfunction obtenerPedidosUsuario(tienda, usuarioId) {\n  return tienda.pedidos.filter(pedido => pedido.usuarioId === usuarioId);\n}\n\n// Usar las funciones\nconst productosElectronica = buscarProductoPorCategoria(tienda, 'electronica');\nconsole.log(productosElectronica); // Array de productos de electrónica\n\nconst promedioLaptop = calcularPromedioCalificaciones(tienda.productos[0]);\nconsole.log(promedioLaptop); // 4.5\n\nconst pedidosJuan = obtenerPedidosUsuario(tienda, 1);\nconsole.log(pedidosJuan); // Array de pedidos de Juan\n\n// Estructura de datos para sistema de archivos\nconst sistemaArchivos = {\n  nombre: 'Mi PC',\n  tipo: 'directorio',\n  contenido: [\n    {\n      nombre: 'Documentos',\n      tipo: 'directorio',\n      contenido: [\n        { nombre: 'trabajo.docx', tipo: 'archivo', tamaño: 1024 },\n        { nombre: 'personal.pdf', tipo: 'archivo', tamaño: 2048 }\n      ]\n    },\n    {\n      nombre: 'Imágenes',\n      tipo: 'directorio',\n      contenido: [\n        { nombre: 'vacaciones.jpg', tipo: 'archivo', tamaño: 5120 },\n        { nombre: 'familia.png', tipo: 'archivo', tamaño: 3072 }\n      ]\n    },\n    { nombre: 'config.txt', tipo: 'archivo', tamaño: 256 }\n  ]\n};\n\n// Función recursiva para buscar archivos\nfunction buscarArchivo(sistema, nombreArchivo) {\n  if (sistema.tipo === 'archivo' && sistema.nombre === nombreArchivo) {\n    return sistema;\n  }\n  \n  if (sistema.tipo === 'directorio' && sistema.contenido) {\n    for (const item of sistema.contenido) {\n      const resultado = buscarArchivo(item, nombreArchivo);\n      if (resultado) return resultado;\n    }\n  }\n  \n  return null;\n}\n\nconst archivoEncontrado = buscarArchivo(sistemaArchivos, 'vacaciones.jpg');\nconsole.log(archivoEncontrado); // { nombre: 'vacaciones.jpg', tipo: 'archivo', tamaño: 5120 }\n```"
      },
      practical: [
        "Manipular arrays con métodos modernos",
        "Crear y modificar objetos",
        "Guardar datos en el navegador",
        "Proyecto: lista de tareas con persistencia",
        "Implementar búsqueda y filtrado"
      ]
    },
    activities: [
      {
        title: "Arrays y métodos",
        duration: "45 min",
        description: "Trabajar con map, filter, reduce y otros métodos"
      },
      {
        title: "Objetos y JSON",
        duration: "45 min",
        description: "Manipular objetos y trabajar con JSON"
      },
      {
        title: "Local Storage",
        duration: "30 min",
        description: "Implementar persistencia de datos en el navegador"
      }
    ],
    homework: [
      "Crear lista de tareas con Local Storage",
      "Implementar búsqueda y filtrado",
      "Agregar funcionalidad de edición"
    ],
    materials: [
      "Proyecto React con hooks",
      "React Router DOM",
      "Diseño de navegación"
    ],
    exercises: [
      {
        title: "Aplicación Multi-página",
        description: "Crea una aplicación con múltiples páginas usando React Router.",
        code: `// Configuración de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Tu configuración de rutas aquí */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;`,
        solution: `// Aplicación multi-página con React Router - Solución
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<Post />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// Componente Layout
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout() {
    const location = useLocation();
    
    return (
        <div className="layout">
            <nav className="navbar">
                <div className="nav-brand">
                    <Link to="/">Mi App</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link 
                            to="/" 
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/blog"
                            className={location.pathname === '/blog' ? 'active' : ''}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact"
                            className={location.pathname === '/contact' ? 'active' : ''}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
            
            <main className="main-content">
                <Outlet />
            </main>
            
            <footer className="footer">
                <p>&copy; 2024 Mi App. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Layout;`
      }
    ]
  },
  {
    id: 13,
    title: "Taller: Lista de Tareas Dinámica",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Crear aplicación interactiva de lista de tareas",
      "Implementar manipulación del DOM",
      "Aplicar eventos y validación de formularios",
      "Desarrollar funcionalidades CRUD básicas"
    ],
    content: {
      theoretical: [
        "Manipulación del DOM: selección y modificación de elementos",
        "Eventos: addEventListener, preventDefault, stopPropagation",
        "Validación de formularios: HTML5 y JavaScript",
        "Almacenamiento local: localStorage y sessionStorage",
        "CRUD básico: Create, Read, Update, Delete",
        "Manejo de estado en aplicaciones vanilla JavaScript"
      ],
      theoreticalDetails: {
        "Manipulación del DOM: selección y modificación de elementos": "La manipulación del DOM es fundamental para crear aplicaciones interactivas. Permite seleccionar elementos, modificar su contenido, agregar o eliminar elementos, y cambiar estilos dinámicamente. Es la base para crear interfaces de usuario dinámicas.\n\n**Ejemplos:**\n```javascript\n// Selección de elementos\nconst contenedor = document.getElementById('lista-tareas');\nconst inputTarea = document.querySelector('#nueva-tarea');\nconst botonAgregar = document.querySelector('.btn-agregar');\nconst tareas = document.querySelectorAll('.tarea-item');\n\n// Crear elementos dinámicamente\nfunction crearElementoTarea(texto, completada = false) {\n  const li = document.createElement('li');\n  li.className = 'tarea-item';\n  li.innerHTML = `\n    <span class=\"texto-tarea\">${texto}</span>\n    <button class=\"btn-completar\">Completar</button>\n    <button class=\"btn-eliminar\">Eliminar</button>\n  `;\n  \n  if (completada) {\n    li.classList.add('completada');\n  }\n  \n  return li;\n}\n\n// Agregar elemento al DOM\nconst nuevaTarea = crearElementoTarea('Aprender JavaScript');\ncontenedor.appendChild(nuevaTarea);\n\n// Insertar elemento en posición específica\ncontenedor.insertBefore(nuevaTarea, contenedor.firstChild);\n\n// Modificar contenido existente\nconst elementoTexto = document.querySelector('.texto-tarea');\nelementoTexto.textContent = 'Nuevo texto de la tarea';\nelementoTexto.innerHTML = '<strong>Tarea importante</strong>';\n\n// Modificar atributos\nelementoTexto.setAttribute('data-id', '123');\nelementoTexto.setAttribute('title', 'Tarea pendiente');\n\n// Modificar clases CSS\nnuevaTarea.classList.add('urgente');\nnuevaTarea.classList.remove('completada');\nnuevaTarea.classList.toggle('activa');\n\n// Verificar clases\nif (nuevaTarea.classList.contains('urgente')) {\n  console.log('La tarea es urgente');\n}\n\n// Modificar estilos directamente\nnuevaTarea.style.backgroundColor = '#ffeb3b';\nnuevaTarea.style.padding = '10px';\nnuevaTarea.style.borderRadius = '5px';\n\n// Eliminar elementos\nconst tareaEliminar = document.querySelector('.tarea-item:last-child');\ntareaEliminar.remove();\n\n// Clonar elementos\nconst tareaOriginal = document.querySelector('.tarea-item');\nconst tareaClonada = tareaOriginal.cloneNode(true);\ncontenedor.appendChild(tareaClonada);\n\n// Trabajar con formularios\nconst formulario = document.querySelector('#formulario-tarea');\nconst inputTexto = formulario.querySelector('input[type=\"text\"]');\nconst selectPrioridad = formulario.querySelector('select');\n\n// Obtener valores de formulario\nconst texto = inputTexto.value;\nconst prioridad = selectPrioridad.value;\n\n// Establecer valores\ninputTexto.value = 'Nueva tarea';\nselectPrioridad.value = 'alta';\n\n// Trabajar con elementos de lista\nconst lista = document.querySelector('ul');\nconst items = lista.querySelectorAll('li');\n\n// Agregar elemento al final\nconst nuevoItem = document.createElement('li');\nnuevoItem.textContent = 'Nuevo elemento';\nlista.appendChild(nuevoItem);\n\n// Agregar elemento al principio\nlista.insertBefore(nuevoItem, lista.firstChild);\n\n// Reemplazar elemento\nconst elementoViejo = lista.querySelector('li:first-child');\nconst elementoNuevo = document.createElement('li');\nelementoNuevo.textContent = 'Elemento reemplazado';\nlista.replaceChild(elementoNuevo, elementoViejo);\n```",
        
        "Eventos: addEventListener, preventDefault, stopPropagation": "Los eventos permiten que las aplicaciones respondan a las acciones del usuario. addEventListener es la forma moderna de manejar eventos, preventDefault evita el comportamiento por defecto, y stopPropagation controla la propagación del evento. Son fundamentales para la interactividad.\n\n**Ejemplos:**\n```javascript\n// Event listener básico\nconst boton = document.querySelector('.btn-agregar');\nboton.addEventListener('click', function(event) {\n  console.log('Botón clickeado');\n  agregarTarea();\n});\n\n// Event listener con arrow function\nboton.addEventListener('click', (event) => {\n  console.log('Click con arrow function');\n  console.log('Target:', event.target);\n  console.log('Current target:', event.currentTarget);\n});\n\n// preventDefault - Evitar comportamiento por defecto\nconst formulario = document.querySelector('#formulario-tarea');\nformulario.addEventListener('submit', function(event) {\n  event.preventDefault(); // Evitar envío del formulario\n  \n  const formData = new FormData(formulario);\n  const datos = Object.fromEntries(formData);\n  console.log('Datos del formulario:', datos);\n  \n  procesarFormulario(datos);\n});\n\n// stopPropagation - Detener propagación\nconst contenedor = document.querySelector('.lista-tareas');\ncontenedor.addEventListener('click', function(event) {\n  console.log('Click en contenedor');\n});\n\nconst tarea = document.querySelector('.tarea-item');\ntarea.addEventListener('click', function(event) {\n  event.stopPropagation(); // Detener propagación al contenedor\n  console.log('Click en tarea');\n  editarTarea(this);\n});\n\n// Event delegation - Manejar eventos en elementos dinámicos\ncontenedor.addEventListener('click', function(event) {\n  if (event.target.classList.contains('btn-completar')) {\n    event.stopPropagation();\n    completarTarea(event.target.closest('.tarea-item'));\n  } else if (event.target.classList.contains('btn-eliminar')) {\n    event.stopPropagation();\n    eliminarTarea(event.target.closest('.tarea-item'));\n  }\n});\n\n// Eventos de teclado\nconst input = document.querySelector('#nueva-tarea');\ninput.addEventListener('keydown', function(event) {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    agregarTarea();\n  } else if (event.key === 'Escape') {\n    limpiarFormulario();\n  }\n});\n\ninput.addEventListener('keyup', function(event) {\n  console.log('Tecla liberada:', event.key);\n});\n\n// Eventos de input\ninput.addEventListener('input', function(event) {\n  console.log('Valor actual:', event.target.value);\n  validarInput(event.target);\n});\n\ninput.addEventListener('change', function(event) {\n  console.log('Valor cambiado:', event.target.value);\n});\n\n// Eventos de focus y blur\ninput.addEventListener('focus', function(event) {\n  event.target.classList.add('focused');\n  mostrarAyuda();\n});\n\ninput.addEventListener('blur', function(event) {\n  event.target.classList.remove('focused');\n  ocultarAyuda();\n  validarCampo(event.target);\n});\n\n// Eventos de mouse\nconst elemento = document.querySelector('.tarea-item');\nelemento.addEventListener('mouseenter', function(event) {\n  event.target.style.backgroundColor = '#f0f0f0';\n});\nelemento.addEventListener('mouseleave', function(event) {\n  event.target.style.backgroundColor = '';\n});\nelemento.addEventListener('mousedown', function(event) {\n  console.log('Mouse presionado');\n});\nelemento.addEventListener('mouseup', function(event) {\n  console.log('Mouse liberado');\n});\n\n// Eventos con opciones\nboton.addEventListener('click', function(event) {\n  console.log('Click con opciones');\n}, {\n  once: true, // Solo se ejecuta una vez\n  passive: true, // No llama a preventDefault()\n  capture: false // Fase de burbuja\n});\n\n// Remover event listener\nfunction manejarClick(event) {\n  console.log('Click manejado');\n}\n\nboton.addEventListener('click', manejarClick);\nboton.removeEventListener('click', manejarClick);\n\n// Eventos personalizados\nconst eventoPersonalizado = new CustomEvent('tareaAgregada', {\n  detail: { texto: 'Nueva tarea', id: 123 }\n});\n\ndocument.addEventListener('tareaAgregada', function(event) {\n  console.log('Tarea agregada:', event.detail);\n});\n\ndocument.dispatchEvent(eventoPersonalizado);\n\n// Eventos de scroll\nwindow.addEventListener('scroll', function(event) {\n  const scrollY = window.scrollY;\n  console.log('Scroll position:', scrollY);\n  \n  if (scrollY > 100) {\n    mostrarBotonSubir();\n  } else {\n    ocultarBotonSubir();\n  }\n});\n\n// Eventos de resize\nwindow.addEventListener('resize', function(event) {\n  console.log('Ventana redimensionada:', window.innerWidth, window.innerHeight);\n  ajustarLayout();\n});\n```",
        
        "Validación de formularios: HTML5 y JavaScript": "La validación de formularios asegura que los datos ingresados cumplan con los requisitos antes de ser procesados. Se puede hacer con HTML5 (validación nativa) o JavaScript (validación personalizada). Es fundamental para mejorar la experiencia del usuario y la seguridad.\n\n**Ejemplos:**\n```javascript\n// Validación HTML5\nconst formulario = document.querySelector('#formulario-tarea');\nconst inputTarea = document.querySelector('#nueva-tarea');\nconst inputFecha = document.querySelector('#fecha-limite');\n\n// Atributos de validación HTML5\ninputTarea.required = true;\ninputTarea.minLength = 3;\ninputTarea.maxLength = 100;\ninputFecha.type = 'date';\ninputFecha.min = new Date().toISOString().split('T')[0];\n\n// Validación JavaScript personalizada\nfunction validarFormulario() {\n  let esValido = true;\n  const errores = [];\n  \n  // Limpiar errores anteriores\n  limpiarErrores();\n  \n  // Validar campo de tarea\n  const texto = inputTarea.value.trim();\n  if (!texto) {\n    mostrarError(inputTarea, 'La tarea es requerida');\n    esValido = false;\n  } else if (texto.length < 3) {\n    mostrarError(inputTarea, 'La tarea debe tener al menos 3 caracteres');\n    esValido = false;\n  } else if (texto.length > 100) {\n    mostrarError(inputTarea, 'La tarea no puede tener más de 100 caracteres');\n    esValido = false;\n  }\n  \n  // Validar fecha\n  const fecha = inputFecha.value;\n  if (fecha) {\n    const fechaLimite = new Date(fecha);\n    const hoy = new Date();\n    hoy.setHours(0, 0, 0, 0);\n    \n    if (fechaLimite < hoy) {\n      mostrarError(inputFecha, 'La fecha no puede ser anterior a hoy');\n      esValido = false;\n    }\n  }\n  \n  return esValido;\n}\n\n// Validación en tiempo real\ninputTarea.addEventListener('input', function() {\n  const texto = this.value.trim();\n  \n  if (texto.length < 3) {\n    mostrarError(this, 'Mínimo 3 caracteres');\n  } else if (texto.length > 100) {\n    mostrarError(this, 'Máximo 100 caracteres');\n  } else {\n    limpiarError(this);\n  }\n});\n\n// Validación al enviar formulario\nformulario.addEventListener('submit', function(event) {\n  event.preventDefault();\n  \n  if (validarFormulario()) {\n    console.log('Formulario válido, procesando...');\n    procesarFormulario();\n  } else {\n    console.log('Formulario inválido');\n  }\n});\n\n// Funciones de validación específicas\nfunction validarEmail(email) {\n  const patron = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return patron.test(email);\n}\n\nfunction validarTelefono(telefono) {\n  const patron = /^\\d{10}$/;\n  return patron.test(telefono);\n}\n\nfunction validarURL(url) {\n  try {\n    new URL(url);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\n// Validación de archivos\nconst inputArchivo = document.querySelector('input[type=\"file\"]');\ninputArchivo.addEventListener('change', function(event) {\n  const archivo = event.target.files[0];\n  \n  if (archivo) {\n    // Validar tamaño (5MB máximo)\n    if (archivo.size > 5 * 1024 * 1024) {\n      mostrarError(this, 'El archivo es demasiado grande (máximo 5MB)');\n      return;\n    }\n    \n    // Validar tipo de archivo\n    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];\n    if (!tiposPermitidos.includes(archivo.type)) {\n      mostrarError(this, 'Solo se permiten archivos de imagen (JPEG, PNG, GIF)');\n      return;\n    }\n    \n    limpiarError(this);\n  }\n});\n\n// Funciones de manejo de errores\nfunction mostrarError(campo, mensaje) {\n  campo.classList.add('error');\n  \n  let errorElement = campo.parentNode.querySelector('.error-message');\n  if (!errorElement) {\n    errorElement = document.createElement('div');\n    errorElement.className = 'error-message';\n    campo.parentNode.appendChild(errorElement);\n  }\n  \n  errorElement.textContent = mensaje;\n}\n\nfunction limpiarError(campo) {\n  campo.classList.remove('error');\n  const errorElement = campo.parentNode.querySelector('.error-message');\n  if (errorElement) {\n    errorElement.remove();\n  }\n}\n\nfunction limpiarErrores() {\n  const errores = document.querySelectorAll('.error-message');\n  errores.forEach(error => error.remove());\n  \n  const campos = document.querySelectorAll('.error');\n  campos.forEach(campo => campo.classList.remove('error'));\n}\n\n// Validación con HTML5 y JavaScript combinados\nconst inputEmail = document.querySelector('input[type=\"email\"]');\ninputEmail.addEventListener('invalid', function(event) {\n  event.preventDefault();\n  \n  if (this.validity.valueMissing) {\n    mostrarError(this, 'El email es requerido');\n  } else if (this.validity.typeMismatch) {\n    mostrarError(this, 'Ingresa un email válido');\n  }\n});\n\n// Validación de formulario completo\nfunction validarFormularioCompleto() {\n  const campos = formulario.querySelectorAll('input[required], select[required], textarea[required]');\n  let esValido = true;\n  \n  campos.forEach(campo => {\n    if (!campo.value.trim()) {\n      mostrarError(campo, 'Este campo es requerido');\n      esValido = false;\n    } else {\n      limpiarError(campo);\n    }\n  });\n  \n  return esValido;\n}\n```",
        
        "Almacenamiento local: localStorage y sessionStorage": "El almacenamiento local permite guardar datos en el navegador del usuario. localStorage persiste entre sesiones, mientras que sessionStorage se elimina al cerrar la pestaña. Son fundamentales para crear aplicaciones que mantengan el estado del usuario.\n\n**Ejemplos:**\n```javascript\n// Verificar soporte de almacenamiento\nif (typeof(Storage) !== 'undefined') {\n  console.log('Almacenamiento soportado');\n} else {\n  console.log('Almacenamiento no soportado');\n}\n\n// Local Storage - Persistente\nlocalStorage.setItem('usuario', 'Juan');\nlocalStorage.setItem('tema', 'oscuro');\nlocalStorage.setItem('configuracion', JSON.stringify({\n  idioma: 'es',\n  notificaciones: true,\n  autoGuardar: true\n}));\n\n// Leer datos\nconst usuario = localStorage.getItem('usuario');\nconst tema = localStorage.getItem('tema');\nconst configuracion = JSON.parse(localStorage.getItem('configuracion') || '{}');\n\nconsole.log(usuario); // Juan\nconsole.log(tema); // oscuro\nconsole.log(configuracion); // { idioma: 'es', notificaciones: true, autoGuardar: true }\n\n// Session Storage - Temporal\nsessionStorage.setItem('paginaActual', 'lista-tareas');\nsessionStorage.setItem('filtrosActivos', JSON.stringify(['urgente', 'pendiente']));\nsessionStorage.setItem('contadorVisitas', '1');\n\n// Leer datos temporales\nconst paginaActual = sessionStorage.getItem('paginaActual');\nconst filtrosActivos = JSON.parse(sessionStorage.getItem('filtrosActivos') || '[]');\nconst contadorVisitas = parseInt(sessionStorage.getItem('contadorVisitas') || '0');\n\nconsole.log(paginaActual); // lista-tareas\nconsole.log(filtrosActivos); // ['urgente', 'pendiente']\nconsole.log(contadorVisitas); // 1\n\n// Clase para manejar tareas con persistencia\nclass TareaManager {\n  constructor() {\n    this.tareas = this.cargarTareas();\n    this.configuracion = this.cargarConfiguracion();\n  }\n  \n  cargarTareas() {\n    const tareasGuardadas = localStorage.getItem('tareas');\n    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];\n  }\n  \n  cargarConfiguracion() {\n    const configGuardada = localStorage.getItem('configuracion');\n    return configGuardada ? JSON.parse(configGuardada) : {\n      tema: 'claro',\n      ordenarPor: 'fecha',\n      mostrarCompletadas: true\n    };\n  }\n  \n  guardarTareas() {\n    localStorage.setItem('tareas', JSON.stringify(this.tareas));\n  }\n  \n  guardarConfiguracion() {\n    localStorage.setItem('configuracion', JSON.stringify(this.configuracion));\n  }\n  \n  agregarTarea(texto, prioridad = 'normal') {\n    const nuevaTarea = {\n      id: Date.now(),\n      texto: texto,\n      prioridad: prioridad,\n      completada: false,\n      fechaCreacion: new Date().toISOString(),\n      fechaCompletada: null\n    };\n    \n    this.tareas.push(nuevaTarea);\n    this.guardarTareas();\n    return nuevaTarea;\n  }\n  \n  completarTarea(id) {\n    const tarea = this.tareas.find(t => t.id === id);\n    if (tarea) {\n      tarea.completada = !tarea.completada;\n      tarea.fechaCompletada = tarea.completada ? new Date().toISOString() : null;\n      this.guardarTareas();\n    }\n  }\n  \n  eliminarTarea(id) {\n    this.tareas = this.tareas.filter(t => t.id !== id);\n    this.guardarTareas();\n  }\n  \n  actualizarConfiguracion(nuevaConfig) {\n    this.configuracion = { ...this.configuracion, ...nuevaConfig };\n    this.guardarConfiguracion();\n  }\n  \n  obtenerTareas() {\n    return this.tareas;\n  }\n  \n  obtenerConfiguracion() {\n    return this.configuracion;\n  }\n}\n\n// Usar TareaManager\nconst tareaManager = new TareaManager();\n\n// Agregar tareas\ntareaManager.agregarTarea('Aprender JavaScript', 'alta');\ntareaManager.agregarTarea('Practicar CSS', 'normal');\ntareaManager.agregarTarea('Leer documentación', 'baja');\n\n// Completar tarea\ntareaManager.completarTarea(1);\n\n// Actualizar configuración\ntareaManager.actualizarConfiguracion({ tema: 'oscuro' });\n\n// Funciones helper para almacenamiento\nconst StorageHelper = {\n  set: function(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (error) {\n      console.error('Error al guardar:', error);\n      return false;\n    }\n  },\n  \n  get: function(key, defaultValue = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (error) {\n      console.error('Error al leer:', error);\n      return defaultValue;\n    }\n  },\n  \n  remove: function(key) {\n    try {\n      localStorage.removeItem(key);\n      return true;\n    } catch (error) {\n      console.error('Error al eliminar:', error);\n      return false;\n    }\n  },\n  \n  clear: function() {\n    try {\n      localStorage.clear();\n      return true;\n    } catch (error) {\n      console.error('Error al limpiar:', error);\n      return false;\n    }\n  }\n};\n\n// Usar StorageHelper\nStorageHelper.set('datos', { nombre: 'Juan', edad: 25 });\nconst datos = StorageHelper.get('datos', {});\nconsole.log(datos); // { nombre: 'Juan', edad: 25 }\n\n// Comparar Local Storage vs Session Storage\nconsole.log('Local Storage:', localStorage.length, 'items');\nconsole.log('Session Storage:', sessionStorage.length, 'items');\n\n// Los datos de Local Storage persisten entre sesiones\nlocalStorage.setItem('persistente', 'valor1');\n\n// Los datos de Session Storage se eliminan al cerrar la pestaña\nsessionStorage.setItem('temporal', 'valor2');\n```",
        
        "CRUD básico: Create, Read, Update, Delete": "CRUD (Create, Read, Update, Delete) son las operaciones básicas para manejar datos. En aplicaciones web, esto se traduce en crear, leer, actualizar y eliminar elementos. Es fundamental para cualquier aplicación que maneje datos.\n\n**Ejemplos:**\n```javascript\n// Clase para manejar CRUD de tareas\nclass TareaCRUD {\n  constructor() {\n    this.tareas = this.cargarTareas();\n  }\n  \n  // CREATE - Crear nueva tarea\n  crear(texto, prioridad = 'normal', categoria = 'general') {\n    const nuevaTarea = {\n      id: this.generarId(),\n      texto: texto,\n      prioridad: prioridad,\n      categoria: categoria,\n      completada: false,\n      fechaCreacion: new Date().toISOString(),\n      fechaCompletada: null\n    };\n    \n    this.tareas.push(nuevaTarea);\n    this.guardarTareas();\n    return nuevaTarea;\n  }\n  \n  // READ - Leer tareas\n  leer(id = null) {\n    if (id) {\n      return this.tareas.find(tarea => tarea.id === id);\n    }\n    return this.tareas;\n  }\n  \n  // Leer con filtros\n  leerConFiltros(filtros = {}) {\n    let tareasFiltradas = [...this.tareas];\n    \n    if (filtros.completada !== undefined) {\n      tareasFiltradas = tareasFiltradas.filter(t => t.completada === filtros.completada);\n    }\n    \n    if (filtros.prioridad) {\n      tareasFiltradas = tareasFiltradas.filter(t => t.prioridad === filtros.prioridad);\n    }\n    \n    if (filtros.categoria) {\n      tareasFiltradas = tareasFiltradas.filter(t => t.categoria === filtros.categoria);\n    }\n    \n    if (filtros.texto) {\n      tareasFiltradas = tareasFiltradas.filter(t => \n        t.texto.toLowerCase().includes(filtros.texto.toLowerCase())\n      );\n    }\n    \n    return tareasFiltradas;\n  }\n  \n  // UPDATE - Actualizar tarea\n  actualizar(id, datosActualizados) {\n    const indice = this.tareas.findIndex(tarea => tarea.id === id);\n    \n    if (indice !== -1) {\n      this.tareas[indice] = {\n        ...this.tareas[indice],\n        ...datosActualizados,\n        id: id // Mantener el ID original\n      };\n      \n      this.guardarTareas();\n      return this.tareas[indice];\n    }\n    \n    return null;\n  }\n  \n  // DELETE - Eliminar tarea\n  eliminar(id) {\n    const indice = this.tareas.findIndex(tarea => tarea.id === id);\n    \n    if (indice !== -1) {\n      const tareaEliminada = this.tareas.splice(indice, 1)[0];\n      this.guardarTareas();\n      return tareaEliminada;\n    }\n    \n    return null;\n  }\n  \n  // Métodos auxiliares\n  generarId() {\n    return Date.now() + Math.random().toString(36).substr(2, 9);\n  }\n  \n  cargarTareas() {\n    const tareasGuardadas = localStorage.getItem('tareas');\n    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];\n  }\n  \n  guardarTareas() {\n    localStorage.setItem('tareas', JSON.stringify(this.tareas));\n  }\n  \n  // Métodos adicionales\n  contar() {\n    return this.tareas.length;\n  }\n  \n  contarCompletadas() {\n    return this.tareas.filter(t => t.completada).length;\n  }\n  \n  contarPendientes() {\n    return this.tareas.filter(t => !t.completada).length;\n  }\n  \n  obtenerEstadisticas() {\n    return {\n      total: this.contar(),\n      completadas: this.contarCompletadas(),\n      pendientes: this.contarPendientes(),\n      porcentajeCompletadas: this.contar() > 0 ? \n        (this.contarCompletadas() / this.contar() * 100).toFixed(1) : 0\n    };\n  }\n  \n  limpiarCompletadas() {\n    this.tareas = this.tareas.filter(t => !t.completada);\n    this.guardarTareas();\n  }\n  \n  limpiarTodas() {\n    this.tareas = [];\n    this.guardarTareas();\n  }\n}\n\n// Usar TareaCRUD\nconst tareaCRUD = new TareaCRUD();\n\n// CREATE - Crear tareas\nconst tarea1 = tareaCRUD.crear('Aprender JavaScript', 'alta', 'programacion');\nconst tarea2 = tareaCRUD.crear('Practicar CSS', 'normal', 'programacion');\nconst tarea3 = tareaCRUD.crear('Leer libro', 'baja', 'personal');\n\nconsole.log('Tarea creada:', tarea1);\n\n// READ - Leer tareas\nconst todasLasTareas = tareaCRUD.leer();\nconsole.log('Todas las tareas:', todasLasTareas);\n\nconst tareaEspecifica = tareaCRUD.leer(tarea1.id);\nconsole.log('Tarea específica:', tareaEspecifica);\n\nconst tareasProgramacion = tareaCRUD.leerConFiltros({ categoria: 'programacion' });\nconsole.log('Tareas de programación:', tareasProgramacion);\n\nconst tareasPendientes = tareaCRUD.leerConFiltros({ completada: false });\nconsole.log('Tareas pendientes:', tareasPendientes);\n\n// UPDATE - Actualizar tarea\ntareaCRUD.actualizar(tarea1.id, {\n  texto: 'Aprender JavaScript avanzado',\n  prioridad: 'urgente'\n});\n\nconsole.log('Tarea actualizada:', tareaCRUD.leer(tarea1.id));\n\n// DELETE - Eliminar tarea\ntareaCRUD.eliminar(tarea3.id);\nconsole.log('Tareas después de eliminar:', tareaCRUD.leer());\n\n// Estadísticas\nconst estadisticas = tareaCRUD.obtenerEstadisticas();\nconsole.log('Estadísticas:', estadisticas);\n\n// Completar tarea\ntareaCRUD.actualizar(tarea1.id, { completada: true });\nconsole.log('Estadísticas actualizadas:', tareaCRUD.obtenerEstadisticas());\n\n// Limpiar tareas completadas\ntareaCRUD.limpiarCompletadas();\nconsole.log('Tareas después de limpiar completadas:', tareaCRUD.leer());\n```",
        
        "Manejo de estado en aplicaciones vanilla JavaScript": "El manejo de estado es fundamental para mantener la consistencia de los datos en la aplicación. En JavaScript vanilla, esto se puede hacer con objetos, clases, o patrones como Observer. Es importante para sincronizar la interfaz con los datos.\n\n**Ejemplos:**\n```javascript\n// Patrón Observer para manejo de estado\nclass EstadoManager {\n  constructor(estadoInicial = {}) {\n    this.estado = estadoInicial;\n    this.observadores = [];\n  }\n  \n  // Suscribirse a cambios de estado\n  suscribir(callback) {\n    this.observadores.push(callback);\n    return () => {\n      const indice = this.observadores.indexOf(callback);\n      if (indice > -1) {\n        this.observadores.splice(indice, 1);\n      }\n    };\n  }\n  \n  // Actualizar estado\n  actualizarEstado(nuevoEstado) {\n    const estadoAnterior = { ...this.estado };\n    this.estado = { ...this.estado, ...nuevoEstado };\n    \n    // Notificar a los observadores\n    this.observadores.forEach(callback => {\n      callback(this.estado, estadoAnterior);\n    });\n  }\n  \n  // Obtener estado\n  obtenerEstado() {\n    return { ...this.estado };\n  }\n  \n  // Obtener parte específica del estado\n  obtenerParteEstado(clave) {\n    return this.estado[clave];\n  }\n}\n\n// Estado inicial de la aplicación\nconst estadoInicial = {\n  tareas: [],\n  filtros: {\n    categoria: 'todas',\n    completada: 'todas',\n    prioridad: 'todas'\n  },\n  configuracion: {\n    tema: 'claro',\n    ordenarPor: 'fecha',\n    mostrarCompletadas: true\n  },\n  ui: {\n    cargando: false,\n    error: null,\n    mensaje: null\n  }\n};\n\n// Crear manager de estado\nconst estadoManager = new EstadoManager(estadoInicial);\n\n// Suscribirse a cambios de estado\nconst desuscribir = estadoManager.suscribir((nuevoEstado, estadoAnterior) => {\n  console.log('Estado actualizado:', nuevoEstado);\n  \n  // Actualizar UI cuando cambien las tareas\n  if (nuevoEstado.tareas !== estadoAnterior.tareas) {\n    actualizarListaTareas(nuevoEstado.tareas);\n  }\n  \n  // Actualizar UI cuando cambien los filtros\n  if (nuevoEstado.filtros !== estadoAnterior.filtros) {\n    aplicarFiltros(nuevoEstado.filtros);\n  }\n  \n  // Actualizar UI cuando cambie la configuración\n  if (nuevoEstado.configuracion !== estadoAnterior.configuracion) {\n    aplicarConfiguracion(nuevoEstado.configuracion);\n  }\n  \n  // Mostrar mensajes de error o éxito\n  if (nuevoEstado.ui.error) {\n    mostrarError(nuevoEstado.ui.error);\n  }\n  \n  if (nuevoEstado.ui.mensaje) {\n    mostrarMensaje(nuevoEstado.ui.mensaje);\n  }\n});\n\n// Funciones para actualizar estado\nfunction agregarTarea(texto, prioridad = 'normal', categoria = 'general') {\n  const nuevaTarea = {\n    id: Date.now(),\n    texto: texto,\n    prioridad: prioridad,\n    categoria: categoria,\n    completada: false,\n    fechaCreacion: new Date().toISOString()\n  };\n  \n  const estadoActual = estadoManager.obtenerEstado();\n  const nuevasTareas = [...estadoActual.tareas, nuevaTarea];\n  \n  estadoManager.actualizarEstado({\n    tareas: nuevasTareas\n  });\n  \n  return nuevaTarea;\n}\n\nfunction completarTarea(id) {\n  const estadoActual = estadoManager.obtenerEstado();\n  const tareasActualizadas = estadoActual.tareas.map(tarea => {\n    if (tarea.id === id) {\n      return {\n        ...tarea,\n        completada: !tarea.completada,\n        fechaCompletada: !tarea.completada ? new Date().toISOString() : null\n      };\n    }\n    return tarea;\n  });\n  \n  estadoManager.actualizarEstado({\n    tareas: tareasActualizadas\n  });\n}\n\nfunction eliminarTarea(id) {\n  const estadoActual = estadoManager.obtenerEstado();\n  const tareasActualizadas = estadoActual.tareas.filter(tarea => tarea.id !== id);\n  \n  estadoManager.actualizarEstado({\n    tareas: tareasActualizadas\n  });\n}\n\nfunction actualizarFiltros(nuevosFiltros) {\n  estadoManager.actualizarEstado({\n    filtros: { ...estadoManager.obtenerParteEstado('filtros'), ...nuevosFiltros }\n  });\n}\n\nfunction actualizarConfiguracion(nuevaConfiguracion) {\n  estadoManager.actualizarEstado({\n    configuracion: { ...estadoManager.obtenerParteEstado('configuracion'), ...nuevaConfiguracion }\n  });\n}\n\nfunction mostrarCargando(cargando) {\n  estadoManager.actualizarEstado({\n    ui: { ...estadoManager.obtenerParteEstado('ui'), cargando: cargando }\n  });\n}\n\nfunction mostrarError(error) {\n  estadoManager.actualizarEstado({\n    ui: { ...estadoManager.obtenerParteEstado('ui'), error: error }\n  });\n}\n\nfunction mostrarMensaje(mensaje) {\n  estadoManager.actualizarEstado({\n    ui: { ...estadoManager.obtenerParteEstado('ui'), mensaje: mensaje }\n  });\n}\n\n// Funciones para actualizar UI\nfunction actualizarListaTareas(tareas) {\n  const contenedor = document.querySelector('.lista-tareas');\n  contenedor.innerHTML = '';\n  \n  tareas.forEach(tarea => {\n    const elemento = crearElementoTarea(tarea);\n    contenedor.appendChild(elemento);\n  });\n}\n\nfunction aplicarFiltros(filtros) {\n  const estadoActual = estadoManager.obtenerEstado();\n  let tareasFiltradas = estadoActual.tareas;\n  \n  if (filtros.categoria !== 'todas') {\n    tareasFiltradas = tareasFiltradas.filter(t => t.categoria === filtros.categoria);\n  }\n  \n  if (filtros.completada !== 'todas') {\n    const completada = filtros.completada === 'completadas';\n    tareasFiltradas = tareasFiltradas.filter(t => t.completada === completada);\n  }\n  \n  if (filtros.prioridad !== 'todas') {\n    tareasFiltradas = tareasFiltradas.filter(t => t.prioridad === filtros.prioridad);\n  }\n  \n  actualizarListaTareas(tareasFiltradas);\n}\n\nfunction aplicarConfiguracion(configuracion) {\n  document.body.className = `tema-${configuracion.tema}`;\n  \n  const contenedor = document.querySelector('.lista-tareas');\n  contenedor.className = `lista-tareas ordenar-${configuracion.ordenarPor}`;\n  \n  if (!configuracion.mostrarCompletadas) {\n    const tareasCompletadas = document.querySelectorAll('.tarea-item.completada');\n    tareasCompletadas.forEach(tarea => tarea.style.display = 'none');\n  }\n}\n\n// Usar el estado manager\nagregarTarea('Aprender JavaScript', 'alta', 'programacion');\nagregarTarea('Practicar CSS', 'normal', 'programacion');\nagregarTarea('Leer libro', 'baja', 'personal');\n\n// Completar tarea\nconst estadoActual = estadoManager.obtenerEstado();\nif (estadoActual.tareas.length > 0) {\n  completarTarea(estadoActual.tareas[0].id);\n}\n\n// Actualizar filtros\nactualizarFiltros({ categoria: 'programacion' });\n\n// Actualizar configuración\nactualizarConfiguracion({ tema: 'oscuro' });\n\n// Mostrar mensaje\nmostrarMensaje('Tarea agregada exitosamente');\n\n// Limpiar mensaje después de 3 segundos\nsetTimeout(() => {\n  estadoManager.actualizarEstado({\n    ui: { ...estadoManager.obtenerParteEstado('ui'), mensaje: null }\n  });\n}, 3000);\n```"
      },
      practical: [
        "Crear estructura HTML para lista de tareas",
        "Implementar funcionalidad de agregar tareas",
        "Desarrollar edición y eliminación de tareas",
        "Aplicar validación de formularios",
        "Implementar persistencia con localStorage"
      ]
    },
    activities: [
      {
        title: "Estructura y estilos",
        duration: "45 min",
        description: "Crear HTML y CSS para la aplicación de lista de tareas"
      },
      {
        title: "Funcionalidad básica",
        duration: "60 min",
        description: "Implementar agregar, editar y eliminar tareas"
      },
      {
        title: "Validación y persistencia",
        duration: "45 min",
        description: "Agregar validación de formularios y almacenamiento local"
      }
    ],
    homework: [
      "Implementar filtros por estado (completadas/pendientes)",
      "Agregar funcionalidad de búsqueda",
      "Mejorar la interfaz con animaciones CSS"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web",
      "Consola de desarrollador"
    ],
    exercises: [
      {
        title: "Lista de Tareas Completa",
        description: "Crea una aplicación completa de lista de tareas con todas las funcionalidades CRUD.",
        code: `// Estructura HTML básica
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Mi Lista de Tareas</h1>
        <form id="taskForm">
            <input type="text" id="taskInput" placeholder="Nueva tarea..." required>
            <button type="submit">Agregar</button>
        </form>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
        solution: `// Solución completa de la lista de tareas
// HTML (index.html)
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Mi Lista de Tareas</h1>
        <form id="taskForm">
            <input type="text" id="taskInput" placeholder="Nueva tarea..." required>
            <button type="submit">Agregar</button>
        </form>
        <div class="filters">
            <button id="allBtn" class="filter-btn active">Todas</button>
            <button id="pendingBtn" class="filter-btn">Pendientes</button>
            <button id="completedBtn" class="filter-btn">Completadas</button>
        </div>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

// JavaScript (script.js)
class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.currentFilter = 'all';
    this.init();
  }
  
  init() {
    this.taskForm = document.getElementById('taskForm');
    this.taskInput = document.getElementById('taskInput');
    this.taskList = document.getElementById('taskList');
    
    this.taskForm.addEventListener('submit', (e) => this.addTask(e));
    this.setupFilters();
    this.renderTasks();
  }
  
  addTask(e) {
    e.preventDefault();
    const text = this.taskInput.value.trim();
    
    if (text) {
      const task = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
      };
      
      this.tasks.push(task);
      this.saveTasks();
      this.taskInput.value = '';
      this.renderTasks();
    }
  }
  
  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
    }
  }
  
  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.renderTasks();
  }
  
  editTask(id, newText) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.text = newText;
      this.saveTasks();
      this.renderTasks();
    }
  }
  
  setupFilters() {
    const filters = ['allBtn', 'pendingBtn', 'completedBtn'];
    filters.forEach(filterId => {
      document.getElementById(filterId).addEventListener('click', () => {
        this.currentFilter = filterId.replace('Btn', '');
        this.updateFilterButtons();
        this.renderTasks();
      });
    });
  }
  
  updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(this.currentFilter + 'Btn').classList.add('active');
  }
  
  getFilteredTasks() {
    switch(this.currentFilter) {
      case 'pending':
        return this.tasks.filter(t => !t.completed);
      case 'completed':
        return this.tasks.filter(t => t.completed);
      default:
        return this.tasks;
    }
  }
  
  renderTasks() {
    const filteredTasks = this.getFilteredTasks();
    this.taskList.innerHTML = '';
    
    filteredTasks.forEach(task => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';
      
      li.innerHTML = \`
        <span class="task-text" onclick="taskManager.toggleTask(\${task.id})">\${task.text}</span>
        <div class="task-actions">
          <button onclick="taskManager.editTask(\${task.id}, prompt('Editar tarea:', '\${task.text}'))">Editar</button>
          <button onclick="taskManager.deleteTask(\${task.id})">Eliminar</button>
        </div>
      \`;
      
      this.taskList.appendChild(li);
    });
  }
  
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  
  loadTasks() {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  }
}

// Inicializar la aplicación
const taskManager = new TaskManager();`
      }
    ]
  },
  {
    id: 14,
    title: "JavaScript - Asincronía y APIs",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Comprender programación asíncrona en JavaScript",
      "Implementar Promises y async/await",
      "Consumir APIs REST con Fetch",
      "Manejar errores en operaciones asíncronas"
    ],
    content: {
      theoretical: [
        "Programación asíncrona: callbacks, Promises, async/await",
        "Fetch API: GET, POST, PUT, DELETE",
        "Manejo de errores: try-catch, .catch()",
        "APIs REST: estructura y consumo",
        "JSON: parse y stringify",
        "CORS y políticas de seguridad"
      ],
      theoreticalDetails: {
        "Programación asíncrona: callbacks, Promises, async/await": "La programación asíncrona permite ejecutar código sin bloquear el hilo principal. JavaScript maneja esto con callbacks, Promises y async/await. Es fundamental para operaciones que toman tiempo como llamadas a APIs, lectura de archivos o timers.\n\n**Ejemplos:**\n```javascript\n// Callbacks (forma tradicional)\nsetTimeout(() => {\n  console.log('Ejecutado después de 1 segundo');\n}, 1000);\n\nfunction obtenerDatos(callback) {\n  setTimeout(() => {\n    callback(null, { datos: 'Información importante' });\n  }, 1000);\n}\n\nobtenerDatos((error, datos) => {\n  if (error) {\n    console.error('Error:', error);\n  } else {\n    console.log('Datos recibidos:', datos);\n  }\n});\n\n// Promises (ES6)\nfunction obtenerDatosPromise() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const exito = Math.random() > 0.5;\n      if (exito) {\n        resolve({ datos: 'Información importante' });\n      } else {\n        reject(new Error('Error al obtener datos'));\n      }\n    }, 1000);\n  });\n}\n\nobtenerDatosPromise()\n  .then(datos => {\n    console.log('Datos recibidos:', datos);\n    return datos.datos;\n  })\n  .then(datosProcesados => {\n    console.log('Datos procesados:', datosProcesados);\n  })\n  .catch(error => {\n    console.error('Error:', error.message);\n  });\n\n// async/await (ES2017)\nasync function procesarDatos() {\n  try {\n    console.log('Iniciando proceso...');\n    const datos = await obtenerDatosPromise();\n    console.log('Datos recibidos:', datos);\n    \n    const datosProcesados = await procesarDatosAsincrono(datos);\n    console.log('Datos procesados:', datosProcesados);\n    \n    return datosProcesados;\n  } catch (error) {\n    console.error('Error en el proceso:', error.message);\n    throw error;\n  }\n}\n\nasync function procesarDatosAsincrono(datos) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({ ...datos, procesado: true });\n    }, 500);\n  });\n}\n\n// Usar async/await\nprocesarDatos()\n  .then(resultado => console.log('Proceso completado:', resultado))\n  .catch(error => console.error('Error final:', error));\n\n// Promise.all - Ejecutar múltiples promesas en paralelo\nasync function cargarDatosParalelo() {\n  try {\n    const [usuarios, posts, comentarios] = await Promise.all([\n      fetch('/api/usuarios').then(r => r.json()),\n      fetch('/api/posts').then(r => r.json()),\n      fetch('/api/comentarios').then(r => r.json())\n    ]);\n    \n    console.log('Todos los datos cargados:', { usuarios, posts, comentarios });\n    return { usuarios, posts, comentarios };\n  } catch (error) {\n    console.error('Error al cargar datos:', error);\n  }\n}\n\n// Promise.race - Primera promesa que se resuelve\nasync function cargarDatosRapido() {\n  try {\n    const datos = await Promise.race([\n      fetch('/api/datos-rapidos').then(r => r.json()),\n      new Promise((_, reject) => \n        setTimeout(() => reject(new Error('Timeout')), 5000)\n      )\n    ]);\n    \n    console.log('Datos cargados rápidamente:', datos);\n    return datos;\n  } catch (error) {\n    console.error('Error o timeout:', error.message);\n  }\n}\n```",
        
        "Fetch API: GET, POST, PUT, DELETE": "Fetch API es la forma moderna de hacer peticiones HTTP en JavaScript. Proporciona una interfaz simple y poderosa para consumir APIs REST. Es más flexible que XMLHttpRequest y devuelve Promises nativamente.\n\n**Ejemplos:**\n```javascript\n// GET - Obtener datos\nasync function obtenerUsuarios() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    \n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    const usuarios = await response.json();\n    console.log('Usuarios obtenidos:', usuarios);\n    return usuarios;\n  } catch (error) {\n    console.error('Error al obtener usuarios:', error);\n    throw error;\n  }\n}\n\n// GET con parámetros\nasync function obtenerUsuario(id) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);\n    \n    if (!response.ok) {\n      throw new Error(`Usuario no encontrado: ${response.status}`);\n    }\n    \n    const usuario = await response.json();\n    console.log('Usuario obtenido:', usuario);\n    return usuario;\n  } catch (error) {\n    console.error('Error al obtener usuario:', error);\n    throw error;\n  }\n}\n\n// POST - Crear datos\nasync function crearUsuario(datosUsuario) {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(datosUsuario)\n    });\n    \n    if (!response.ok) {\n      throw new Error(`Error al crear usuario: ${response.status}`);\n    }\n    \n    const nuevoUsuario = await response.json();\n    console.log('Usuario creado:', nuevoUsuario);\n    return nuevoUsuario;\n  } catch (error) {\n    console.error('Error al crear usuario:', error);\n    throw error;\n  }\n}\n\n// PUT - Actualizar datos\nasync function actualizarUsuario(id, datosActualizados) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(datosActualizados)\n    });\n    \n    if (!response.ok) {\n      throw new Error(`Error al actualizar usuario: ${response.status}`);\n    }\n    \n    const usuarioActualizado = await response.json();\n    console.log('Usuario actualizado:', usuarioActualizado);\n    return usuarioActualizado;\n  } catch (error) {\n    console.error('Error al actualizar usuario:', error);\n    throw error;\n  }\n}\n\n// DELETE - Eliminar datos\nasync function eliminarUsuario(id) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {\n      method: 'DELETE'\n    });\n    \n    if (!response.ok) {\n      throw new Error(`Error al eliminar usuario: ${response.status}`);\n    }\n    \n    console.log('Usuario eliminado exitosamente');\n    return true;\n  } catch (error) {\n    console.error('Error al eliminar usuario:', error);\n    throw error;\n  }\n}\n\n// Fetch con headers personalizados\nasync function obtenerDatosConAutenticacion(token) {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos', {\n      headers: {\n        'Authorization': `Bearer ${token}`,\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    });\n    \n    if (!response.ok) {\n      if (response.status === 401) {\n        throw new Error('Token de autenticación inválido');\n      }\n      throw new Error(`Error HTTP: ${response.status}`);\n    }\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    console.error('Error con autenticación:', error);\n    throw error;\n  }\n}\n\n// Fetch con timeout\nasync function obtenerDatosConTimeout(url, timeoutMs = 5000) {\n  try {\n    const controller = new AbortController();\n    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);\n    \n    const response = await fetch(url, {\n      signal: controller.signal\n    });\n    \n    clearTimeout(timeoutId);\n    \n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    if (error.name === 'AbortError') {\n      throw new Error('La petición fue cancelada por timeout');\n    }\n    throw error;\n  }\n}\n\n// Usar las funciones\nasync function ejemploCompleto() {\n  try {\n    // Obtener usuarios\n    const usuarios = await obtenerUsuarios();\n    console.log('Total de usuarios:', usuarios.length);\n    \n    // Crear nuevo usuario\n    const nuevoUsuario = await crearUsuario({\n      name: 'Juan Pérez',\n      email: 'juan@ejemplo.com',\n      username: 'juanperez'\n    });\n    \n    // Actualizar usuario\n    const usuarioActualizado = await actualizarUsuario(nuevoUsuario.id, {\n      name: 'Juan Carlos Pérez',\n      email: 'juancarlos@ejemplo.com'\n    });\n    \n    // Eliminar usuario\n    await eliminarUsuario(nuevoUsuario.id);\n    \n    console.log('Operaciones completadas exitosamente');\n  } catch (error) {\n    console.error('Error en el ejemplo:', error);\n  }\n}\n```",
        
        "Manejo de errores: try-catch, .catch()": "El manejo de errores es crucial en programación asíncrona. try-catch funciona con async/await, mientras que .catch() funciona con Promises. Es importante manejar diferentes tipos de errores y proporcionar mensajes útiles al usuario.\n\n**Ejemplos:**\n```javascript\n// try-catch con async/await\nasync function manejarErroresAsync() {\n  try {\n    console.log('Iniciando operación...');\n    \n    const response = await fetch('https://api.ejemplo.com/datos');\n    \n    if (!response.ok) {\n      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);\n    }\n    \n    const datos = await response.json();\n    console.log('Datos obtenidos:', datos);\n    \n    return datos;\n  } catch (error) {\n    console.error('Error en operación asíncrona:', error.message);\n    \n    // Manejar diferentes tipos de errores\n    if (error.name === 'TypeError') {\n      console.error('Error de red o URL inválida');\n    } else if (error.message.includes('HTTP error')) {\n      console.error('Error del servidor');\n    } else {\n      console.error('Error desconocido');\n    }\n    \n    throw error; // Re-lanzar el error si es necesario\n  }\n}\n\n// .catch() con Promises\nfunction manejarErroresPromise() {\n  return fetch('https://api.ejemplo.com/datos')\n    .then(response => {\n      if (!response.ok) {\n        throw new Error(`Error HTTP: ${response.status}`);\n      }\n      return response.json();\n    })\n    .then(datos => {\n      console.log('Datos obtenidos:', datos);\n      return datos;\n    })\n    .catch(error => {\n      console.error('Error en Promise:', error.message);\n      \n      // Manejar diferentes tipos de errores\n      if (error.name === 'TypeError') {\n        console.error('Error de red');\n      } else if (error.message.includes('HTTP error')) {\n        console.error('Error del servidor');\n      }\n      \n      throw error; // Re-lanzar el error\n    });\n}\n\n// Manejo de errores específicos\nasync function obtenerDatosConManejoEspecifico() {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos');\n    \n    switch (response.status) {\n      case 200:\n        return await response.json();\n      case 404:\n        throw new Error('Recurso no encontrado');\n      case 401:\n        throw new Error('No autorizado - token inválido');\n      case 403:\n        throw new Error('Acceso denegado');\n      case 500:\n        throw new Error('Error interno del servidor');\n      default:\n        throw new Error(`Error HTTP: ${response.status}`);\n    }\n  } catch (error) {\n    if (error.name === 'TypeError') {\n      throw new Error('Error de conexión - verifica tu internet');\n    }\n    throw error;\n  }\n}\n\n// Función helper para manejo de errores\nfunction crearManejadorErrores(contexto) {\n  return function(error) {\n    console.error(`Error en ${contexto}:`, error.message);\n    \n    // Log del error para debugging\n    console.error('Stack trace:', error.stack);\n    \n    // Mostrar mensaje al usuario\n    mostrarErrorAlUsuario(`Error en ${contexto}: ${error.message}`);\n    \n    // Enviar error a servicio de logging (opcional)\n    enviarErrorALogging(error, contexto);\n  };\n}\n\n// Usar el manejador de errores\nconst manejarErrorAPI = crearManejadorErrores('API');\n\nasync function ejemploConManejador() {\n  try {\n    const datos = await obtenerDatosConManejoEspecifico();\n    return datos;\n  } catch (error) {\n    manejarErrorAPI(error);\n    throw error;\n  }\n}\n\n// Manejo de errores con retry\nasync function obtenerDatosConRetry(url, maxIntentos = 3) {\n  let ultimoError;\n  \n  for (let intento = 1; intento <= maxIntentos; intento++) {\n    try {\n      console.log(`Intento ${intento} de ${maxIntentos}`);\n      \n      const response = await fetch(url);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP error: ${response.status}`);\n      }\n      \n      const datos = await response.json();\n      console.log('Datos obtenidos exitosamente');\n      return datos;\n      \n    } catch (error) {\n      ultimoError = error;\n      console.error(`Intento ${intento} falló:`, error.message);\n      \n      if (intento < maxIntentos) {\n        const delay = Math.pow(2, intento) * 1000; // Backoff exponencial\n        console.log(`Esperando ${delay}ms antes del siguiente intento...`);\n        await new Promise(resolve => setTimeout(resolve, delay));\n      }\n    }\n  }\n  \n  throw new Error(`Falló después de ${maxIntentos} intentos. Último error: ${ultimoError.message}`);\n}\n\n// Manejo de errores con fallback\nasync function obtenerDatosConFallback() {\n  try {\n    // Intentar obtener datos de la API principal\n    return await fetch('https://api.principal.com/datos').then(r => r.json());\n  } catch (error) {\n    console.warn('API principal falló, intentando API de respaldo...');\n    \n    try {\n      // Intentar API de respaldo\n      return await fetch('https://api.respaldo.com/datos').then(r => r.json());\n    } catch (errorRespaldo) {\n      console.error('Ambas APIs fallaron');\n      \n      // Usar datos en caché o datos por defecto\n      return obtenerDatosEnCache() || obtenerDatosPorDefecto();\n    }\n  }\n}\n\n// Funciones auxiliares\nfunction mostrarErrorAlUsuario(mensaje) {\n  // Implementar UI para mostrar error al usuario\n  console.log('Mostrando error al usuario:', mensaje);\n}\n\nfunction enviarErrorALogging(error, contexto) {\n  // Implementar envío de error a servicio de logging\n  console.log('Enviando error a logging:', { error: error.message, contexto });\n}\n\nfunction obtenerDatosEnCache() {\n  // Implementar lógica de caché\n  return null;\n}\n\nfunction obtenerDatosPorDefecto() {\n  // Implementar datos por defecto\n  return { datos: 'Datos por defecto' };\n}\n```",
        
        "APIs REST: estructura y consumo": "REST (Representational State Transfer) es un estilo arquitectónico para diseñar APIs web. Las APIs REST usan HTTP para comunicarse y siguen principios específicos. Son la forma más común de consumir datos en aplicaciones web modernas.\n\n**Ejemplos:**\n```javascript\n// Estructura típica de API REST\nconst API_BASE_URL = 'https://jsonplaceholder.typicode.com';\n\n// Clase para manejar API REST\nclass ApiClient {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl;\n    this.defaultHeaders = {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    };\n  }\n  \n  // Método genérico para hacer peticiones\n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    const config = {\n      headers: { ...this.defaultHeaders, ...options.headers },\n      ...options\n    };\n    \n    try {\n      const response = await fetch(url, config);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      \n      return await response.json();\n    } catch (error) {\n      console.error(`Error en petición a ${endpoint}:`, error);\n      throw error;\n    }\n  }\n  \n  // GET - Obtener recursos\n  async get(endpoint) {\n    return this.request(endpoint, { method: 'GET' });\n  }\n  \n  // POST - Crear recurso\n  async post(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'POST',\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // PUT - Actualizar recurso completo\n  async put(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'PUT',\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // PATCH - Actualizar recurso parcialmente\n  async patch(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'PATCH',\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // DELETE - Eliminar recurso\n  async delete(endpoint) {\n    return this.request(endpoint, { method: 'DELETE' });\n  }\n}\n\n// Crear instancia del cliente API\nconst apiClient = new ApiClient(API_BASE_URL);\n\n// Ejemplos de uso de API REST\nclass UsuarioService {\n  constructor(apiClient) {\n    this.api = apiClient;\n  }\n  \n  // Obtener todos los usuarios\n  async obtenerUsuarios() {\n    return this.api.get('/users');\n  }\n  \n  // Obtener usuario por ID\n  async obtenerUsuario(id) {\n    return this.api.get(`/users/${id}`);\n  }\n  \n  // Crear nuevo usuario\n  async crearUsuario(datosUsuario) {\n    return this.api.post('/users', datosUsuario);\n  }\n  \n  // Actualizar usuario completo\n  async actualizarUsuario(id, datosUsuario) {\n    return this.api.put(`/users/${id}`, datosUsuario);\n  }\n  \n  // Actualizar usuario parcialmente\n  async actualizarUsuarioParcial(id, datosParciales) {\n    return this.api.patch(`/users/${id}`, datosParciales);\n  }\n  \n  // Eliminar usuario\n  async eliminarUsuario(id) {\n    return this.api.delete(`/users/${id}`);\n  }\n  \n  // Obtener posts de un usuario\n  async obtenerPostsUsuario(id) {\n    return this.api.get(`/users/${id}/posts`);\n  }\n  \n  // Obtener comentarios de un post\n  async obtenerComentariosPost(postId) {\n    return this.api.get(`/posts/${postId}/comments`);\n  }\n}\n\n// Crear servicio de usuarios\nconst usuarioService = new UsuarioService(apiClient);\n\n// Ejemplos de uso\nasync function ejemploUsoAPI() {\n  try {\n    // Obtener todos los usuarios\n    const usuarios = await usuarioService.obtenerUsuarios();\n    console.log('Usuarios obtenidos:', usuarios.length);\n    \n    // Obtener usuario específico\n    const usuario = await usuarioService.obtenerUsuario(1);\n    console.log('Usuario 1:', usuario.name);\n    \n    // Crear nuevo usuario\n    const nuevoUsuario = await usuarioService.crearUsuario({\n      name: 'Juan Pérez',\n      email: 'juan@ejemplo.com',\n      username: 'juanperez'\n    });\n    console.log('Usuario creado:', nuevoUsuario.id);\n    \n    // Actualizar usuario\n    const usuarioActualizado = await usuarioService.actualizarUsuarioParcial(nuevoUsuario.id, {\n      name: 'Juan Carlos Pérez'\n    });\n    console.log('Usuario actualizado:', usuarioActualizado.name);\n    \n    // Obtener posts del usuario\n    const posts = await usuarioService.obtenerPostsUsuario(1);\n    console.log('Posts del usuario 1:', posts.length);\n    \n    // Eliminar usuario\n    await usuarioService.eliminarUsuario(nuevoUsuario.id);\n    console.log('Usuario eliminado');\n    \n  } catch (error) {\n    console.error('Error en ejemplo de API:', error);\n  }\n}\n\n// API con autenticación\nclass ApiClientAutenticado extends ApiClient {\n  constructor(baseUrl, token) {\n    super(baseUrl);\n    this.token = token;\n    this.defaultHeaders.Authorization = `Bearer ${token}`;\n  }\n  \n  // Actualizar token\n  actualizarToken(nuevoToken) {\n    this.token = nuevoToken;\n    this.defaultHeaders.Authorization = `Bearer ${nuevoToken}`;\n  }\n  \n  // Método para refrescar token\n  async refrescarToken() {\n    try {\n      const response = await this.request('/auth/refresh', {\n        method: 'POST',\n        headers: { ...this.defaultHeaders, Authorization: `Bearer ${this.token}` }\n      });\n      \n      this.actualizarToken(response.token);\n      return response.token;\n    } catch (error) {\n      console.error('Error al refrescar token:', error);\n      throw error;\n    }\n  }\n}\n\n// API con paginación\nclass ApiClientConPaginacion extends ApiClient {\n  async obtenerConPaginacion(endpoint, pagina = 1, limite = 10) {\n    const params = new URLSearchParams({\n      _page: pagina.toString(),\n      _limit: limite.toString()\n    });\n    \n    return this.request(`${endpoint}?${params}`);\n  }\n  \n  async obtenerTodos(endpoint, limite = 100) {\n    let pagina = 1;\n    let todosLosDatos = [];\n    let hayMasDatos = true;\n    \n    while (hayMasDatos) {\n      const datos = await this.obtenerConPaginacion(endpoint, pagina, limite);\n      \n      if (datos.length === 0) {\n        hayMasDatos = false;\n      } else {\n        todosLosDatos = todosLosDatos.concat(datos);\n        pagina++;\n      }\n    }\n    \n    return todosLosDatos;\n  }\n}\n\n// Usar API con paginación\nconst apiConPaginacion = new ApiClientConPaginacion(API_BASE_URL);\n\nasync function ejemploPaginacion() {\n  try {\n    // Obtener primera página\n    const primeraPagina = await apiConPaginacion.obtenerConPaginacion('/posts', 1, 5);\n    console.log('Primera página:', primeraPagina.length);\n    \n    // Obtener todos los posts\n    const todosLosPosts = await apiConPaginacion.obtenerTodos('/posts');\n    console.log('Total de posts:', todosLosPosts.length);\n    \n  } catch (error) {\n    console.error('Error en paginación:', error);\n  }\n}\n```",
        
        "JSON: parse y stringify": "JSON (JavaScript Object Notation) es el formato estándar para intercambio de datos en APIs REST. JavaScript proporciona métodos nativos para convertir objetos a JSON y viceversa. Es fundamental para la comunicación entre cliente y servidor.\n\n**Ejemplos:**\n```javascript\n// Objeto JavaScript\nconst usuario = {\n  id: 1,\n  nombre: 'Juan Pérez',\n  email: 'juan@ejemplo.com',\n  activo: true,\n  fechaRegistro: new Date('2024-01-15'),\n  hobbies: ['leer', 'cocinar', 'viajar'],\n  direccion: {\n    calle: 'Calle Mayor 123',\n    ciudad: 'Madrid',\n    codigoPostal: '28001'\n  }\n};\n\n// JSON.stringify - Convertir objeto a JSON\nconst jsonString = JSON.stringify(usuario);\nconsole.log('JSON string:', jsonString);\n// '{\"id\":1,\"nombre\":\"Juan Pérez\",\"email\":\"juan@ejemplo.com\",\"activo\":true,\"fechaRegistro\":\"2024-01-15T00:00:00.000Z\",\"hobbies\":[\"leer\",\"cocinar\",\"viajar\"],\"direccion\":{\"calle\":\"Calle Mayor 123\",\"ciudad\":\"Madrid\",\"codigoPostal\":\"28001\"}}'\n\n// JSON.stringify con formato\nconst jsonFormateado = JSON.stringify(usuario, null, 2);\nconsole.log('JSON formateado:', jsonFormateado);\n// {\n//   \"id\": 1,\n//   \"nombre\": \"Juan Pérez\",\n//   \"email\": \"juan@ejemplo.com\",\n//   \"activo\": true,\n//   \"fechaRegistro\": \"2024-01-15T00:00:00.000Z\",\n//   \"hobbies\": [\"leer\", \"cocinar\", \"viajar\"],\n//   \"direccion\": {\n//     \"calle\": \"Calle Mayor 123\",\n//     \"ciudad\": \"Madrid\",\n//     \"codigoPostal\": \"28001\"\n//   }\n// }\n\n// JSON.stringify con replacer\nconst jsonConReplacer = JSON.stringify(usuario, ['nombre', 'email', 'activo']);\nconsole.log('JSON con replacer:', jsonConReplacer);\n// '{\"nombre\":\"Juan Pérez\",\"email\":\"juan@ejemplo.com\",\"activo\":true}'\n\n// JSON.stringify con función replacer\nconst jsonConFuncionReplacer = JSON.stringify(usuario, function(key, value) {\n  if (key === 'fechaRegistro') {\n    return value.toISOString().split('T')[0]; // Solo la fecha\n  }\n  if (key === 'email') {\n    return value.toLowerCase(); // Email en minúsculas\n  }\n  return value;\n});\nconsole.log('JSON con función replacer:', jsonConFuncionReplacer);\n\n// JSON.parse - Convertir JSON a objeto\nconst jsonString2 = '{\"nombre\":\"María García\",\"email\":\"maria@ejemplo.com\",\"activo\":true}';\nconst objeto = JSON.parse(jsonString2);\nconsole.log('Objeto parseado:', objeto);\n// { nombre: 'María García', email: 'maria@ejemplo.com', activo: true }\n\n// JSON.parse con reviver\nconst jsonConFecha = '{\"nombre\":\"Pedro López\",\"fechaRegistro\":\"2024-01-15\"}';\nconst objetoConFecha = JSON.parse(jsonConFecha, function(key, value) {\n  if (key === 'fechaRegistro') {\n    return new Date(value);\n  }\n  return value;\n});\nconsole.log('Objeto con fecha:', objetoConFecha);\n// { nombre: 'Pedro López', fechaRegistro: Date object }\n\n// Manejo de errores en JSON\nfunction parsearJSONSeguro(jsonString) {\n  try {\n    return JSON.parse(jsonString);\n  } catch (error) {\n    console.error('Error al parsear JSON:', error.message);\n    return null;\n  }\n}\n\nconst jsonInvalido = '{\"nombre\":\"Juan\",\"email\":\"juan@ejemplo.com\"}'; // JSON válido\nconst jsonInvalido2 = '{\"nombre\":\"Juan\",\"email\":\"juan@ejemplo.com\"}'; // JSON inválido\n\nconst objeto1 = parsearJSONSeguro(jsonInvalido);\nconsole.log('Objeto 1:', objeto1); // { nombre: 'Juan', email: 'juan@ejemplo.com' }\n\nconst objeto2 = parsearJSONSeguro(jsonInvalido2);\nconsole.log('Objeto 2:', objeto2); // null\n\n// Arrays JSON\nconst usuarios = [\n  { nombre: 'Juan', email: 'juan@ejemplo.com' },\n  { nombre: 'María', email: 'maria@ejemplo.com' },\n  { nombre: 'Pedro', email: 'pedro@ejemplo.com' }\n];\n\nconst jsonArray = JSON.stringify(usuarios);\nconsole.log('JSON array:', jsonArray);\n// '[{\"nombre\":\"Juan\",\"email\":\"juan@ejemplo.com\"},{\"nombre\":\"María\",\"email\":\"maria@ejemplo.com\"},{\"nombre\":\"Pedro\",\"email\":\"pedro@ejemplo.com\"}]'\n\nconst arrayParseado = JSON.parse(jsonArray);\nconsole.log('Array parseado:', arrayParseado);\n// Array de objetos\n\n// Clonar objetos con JSON\nconst objetoOriginal = { nombre: 'Juan', edad: 25 };\nconst objetoClonado = JSON.parse(JSON.stringify(objetoOriginal));\nobjetoClonado.edad = 30;\nconsole.log('Objeto original:', objetoOriginal); // { nombre: 'Juan', edad: 25 }\nconsole.log('Objeto clonado:', objetoClonado); // { nombre: 'Juan', edad: 30 }\n\n// Validar JSON\nfunction esJSONValido(jsonString) {\n  try {\n    JSON.parse(jsonString);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\nconsole.log(esJSONValido('{\"nombre\":\"Juan\"}')); // true\nconsole.log(esJSONValido('{\"nombre\":\"Juan\"}')); // false\n\n// JSON en APIs\nasync function ejemploJSONEnAPI() {\n  try {\n    // Enviar datos JSON\n    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        title: 'Mi Post',\n        body: 'Contenido del post',\n        userId: 1\n      })\n    });\n    \n    const nuevoPost = await response.json();\n    console.log('Post creado:', nuevoPost);\n    \n    // Recibir datos JSON\n    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n    const post = await response2.json();\n    console.log('Post obtenido:', post);\n    \n  } catch (error) {\n    console.error('Error en API:', error);\n  }\n}\n\n// JSON con tipos de datos especiales\nconst datosComplejos = {\n  fecha: new Date(),\n  numero: 42,\n  texto: 'Hola mundo',\n  booleano: true,\n  nulo: null,\n  indefinido: undefined,\n  funcion: function() { return 'Hola'; },\n  simbolo: Symbol('test')\n};\n\nconst jsonComplejo = JSON.stringify(datosComplejos);\nconsole.log('JSON complejo:', jsonComplejo);\n// '{\"fecha\":\"2024-12-15T10:30:00.000Z\",\"numero\":42,\"texto\":\"Hola mundo\",\"booleano\":true,\"nulo\":null}'\n// Nota: undefined, funciones y símbolos se omiten\n\n// JSON con espacios y caracteres especiales\nconst datosConEspacios = {\n  'nombre con espacios': 'Juan Pérez',\n  'email-con-guiones': 'juan@ejemplo.com',\n  'dirección': 'Calle Mayor 123'\n};\n\nconst jsonConEspacios = JSON.stringify(datosConEspacios);\nconsole.log('JSON con espacios:', jsonConEspacios);\n// '{\"nombre con espacios\":\"Juan Pérez\",\"email-con-guiones\":\"juan@ejemplo.com\",\"dirección\":\"Calle Mayor 123\"}'\n```",
        
        "CORS y políticas de seguridad": "CORS (Cross-Origin Resource Sharing) es una política de seguridad que controla cómo las páginas web pueden acceder a recursos de otros dominios. Es fundamental para entender por qué algunas peticiones fallan y cómo solucionarlo.\n\n**Ejemplos:**\n```javascript\n// CORS básico\nasync function ejemploCORS() {\n  try {\n    // Esta petición puede fallar por CORS\n    const response = await fetch('https://api.ejemplo.com/datos');\n    const datos = await response.json();\n    console.log('Datos obtenidos:', datos);\n  } catch (error) {\n    if (error.message.includes('CORS')) {\n      console.error('Error de CORS:', error.message);\n    } else {\n      console.error('Otro error:', error.message);\n    }\n  }\n}\n\n// Headers CORS comunes\nconst headersCORS = {\n  'Access-Control-Allow-Origin': '*', // Permite cualquier origen\n  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',\n  'Access-Control-Allow-Headers': 'Content-Type, Authorization',\n  'Access-Control-Allow-Credentials': 'true' // Permite cookies\n};\n\n// Petición con credenciales\nasync function peticionConCredenciales() {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos', {\n      credentials: 'include', // Incluir cookies\n      headers: {\n        'Authorization': 'Bearer token123'\n      }\n    });\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    console.error('Error con credenciales:', error);\n  }\n}\n\n// Preflight request\nasync function peticionPreflight() {\n  try {\n    // Esta petición puede generar un preflight request\n    const response = await fetch('https://api.ejemplo.com/datos', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer token123'\n      },\n      body: JSON.stringify({ datos: 'test' })\n    });\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    console.error('Error en preflight:', error);\n  }\n}\n\n// Manejar CORS en el cliente\nclass ApiClientCORS {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl;\n  }\n  \n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    const config = {\n      ...options,\n      headers: {\n        'Content-Type': 'application/json',\n        ...options.headers\n      }\n    };\n    \n    try {\n      const response = await fetch(url, config);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      \n      return await response.json();\n    } catch (error) {\n      if (error.name === 'TypeError' && error.message.includes('CORS')) {\n        throw new Error('Error de CORS: El servidor no permite peticiones desde este origen');\n      }\n      throw error;\n    }\n  }\n}\n\n// Proxy para evitar CORS\nclass ProxyCORS {\n  constructor(proxyUrl) {\n    this.proxyUrl = proxyUrl;\n  }\n  \n  async obtenerDatos(url) {\n    try {\n      const response = await fetch(`${this.proxyUrl}?url=${encodeURIComponent(url)}`);\n      return await response.json();\n    } catch (error) {\n      console.error('Error en proxy:', error);\n      throw error;\n    }\n  }\n}\n\n// Usar proxy\nconst proxy = new ProxyCORS('https://cors-anywhere.herokuapp.com/');\n\nasync function ejemploProxy() {\n  try {\n    const datos = await proxy.obtenerDatos('https://api.ejemplo.com/datos');\n    console.log('Datos obtenidos via proxy:', datos);\n  } catch (error) {\n    console.error('Error con proxy:', error);\n  }\n}\n\n// CORS con diferentes orígenes\nconst origenesPermitidos = [\n  'https://mi-app.com',\n  'https://www.mi-app.com',\n  'http://localhost:3000',\n  'http://127.0.0.1:3000'\n];\n\nfunction verificarOrigen(origin) {\n  return origenesPermitidos.includes(origin);\n}\n\n// Headers CORS dinámicos\nfunction obtenerHeadersCORS(origin) {\n  const headers = {\n    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',\n    'Access-Control-Allow-Headers': 'Content-Type, Authorization'\n  };\n  \n  if (verificarOrigen(origin)) {\n    headers['Access-Control-Allow-Origin'] = origin;\n    headers['Access-Control-Allow-Credentials'] = 'true';\n  } else {\n    headers['Access-Control-Allow-Origin'] = '*';\n  }\n  \n  return headers;\n}\n\n// Manejo de errores CORS\nfunction manejarErrorCORS(error) {\n  if (error.name === 'TypeError' && error.message.includes('CORS')) {\n    console.error('Error de CORS detectado');\n    console.error('Posibles soluciones:');\n    console.error('1. Verificar que el servidor permita el origen');\n    console.error('2. Usar un proxy CORS');\n    console.error('3. Configurar el servidor para permitir CORS');\n  }\n}\n\n// Ejemplo de uso\nasync function ejemploCompletoCORS() {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos');\n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    manejarErrorCORS(error);\n    throw error;\n  }\n}\n```"
      },
      practical: [
        "Crear funciones asíncronas con async/await",
        "Consumir API REST con Fetch",
        "Implementar manejo de errores",
        "Proyecto: aplicación que consume API",
        "Optimizar carga de datos"
      ]
    },
    activities: [
      {
        title: "Promises y async/await",
        duration: "60 min",
        description: "Implementar funciones asíncronas y manejar Promises"
      },
      {
        title: "Consumo de APIs",
        duration: "60 min",
        description: "Usar Fetch API para consumir servicios REST"
      },
      {
        title: "Manejo de errores",
        duration: "30 min",
        description: "Implementar manejo robusto de errores"
      }
    ],
    homework: [
      "Crear aplicación que consuma API de clima",
      "Implementar caché de datos",
      "Agregar indicadores de carga"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web",
      "API de prueba (JSONPlaceholder)"
    ],
    exercises: [
      {
        title: "Consumidor de API REST",
        description: "Crea una aplicación que consuma una API REST y muestre los datos.",
        code: `// Consumir API REST con Fetch
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Error al obtener usuarios');
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Usar la función
fetchUsers().then(users => {
  console.log('Usuarios:', users);
});`,
        solution: `// Solución completa del consumidor de API
class ApiConsumer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  async get(endpoint) {
    try {
      const response = await fetch(\`\${this.baseUrl}\${endpoint}\`);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error en GET:', error);
      throw error;
    }
  }
  
  async post(endpoint, data) {
    try {
      const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error en POST:', error);
      throw error;
    }
  }
  
  async put(endpoint, data) {
    try {
      const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error en PUT:', error);
      throw error;
    }
  }
  
  async delete(endpoint) {
    try {
      const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error en DELETE:', error);
      throw error;
    }
  }
}

// Ejemplo de uso
const api = new ApiConsumer('https://jsonplaceholder.typicode.com');

// Obtener usuarios
api.get('/users').then(users => {
  console.log('Usuarios:', users);
  displayUsers(users);
}).catch(error => {
  console.error('Error al obtener usuarios:', error);
});

// Crear nuevo usuario
const newUser = {
  name: 'Juan Pérez',
  email: 'juan@ejemplo.com',
  phone: '123-456-7890'
};

api.post('/users', newUser).then(user => {
  console.log('Usuario creado:', user);
}).catch(error => {
  console.error('Error al crear usuario:', error);
});

// Función para mostrar usuarios
function displayUsers(users) {
  const container = document.getElementById('users-container');
  container.innerHTML = '';
  
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-card';
    userDiv.innerHTML = \`
      <h3>\${user.name}</h3>
      <p>Email: \${user.email}</p>
      <p>Teléfono: \${user.phone}</p>
      <p>Website: \${user.website}</p>
    \`;
    container.appendChild(userDiv);
  });
}`
      }
    ]
  },
  {
    id: 15,
    title: "Taller Integrador HTML + CSS + JS + API",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Integrar HTML, CSS, JavaScript y APIs en un proyecto",
      "Crear aplicación web completa y funcional",
      "Implementar diseño responsive",
      "Consumir APIs externas"
    ],
    content: {
      theoretical: [
        "Integración de tecnologías frontend",
        "Arquitectura de aplicaciones web",
        "APIs REST y consumo de datos",
        "Manejo de estado en aplicaciones",
        "Responsive design avanzado",
        "Optimización de rendimiento"
      ],
      theoreticalDetails: {
        "Integración de tecnologías frontend": "HTML estructura el contenido, CSS proporciona el diseño visual y JavaScript añade interactividad. La integración efectiva requiere:\n\n• Separación de responsabilidades: HTML semántico, CSS modular, JS organizado\n• Comunicación entre capas: eventos DOM, manipulación de clases CSS\n• Ejemplo: Un botón que cambia contenido y estilo:\n\n```html\n<button id=\"toggleBtn\" class=\"btn-primary\">Mostrar/Ocultar</button>\n<div id=\"content\" class=\"hidden\">Contenido dinámico</div>\n```\n\n```css\n.hidden { display: none; }\n.btn-primary { background: #007bff; color: white; }\n```\n\n```javascript\nconst btn = document.getElementById('toggleBtn');\nconst content = document.getElementById('content');\nbtn.addEventListener('click', () => {\n  content.classList.toggle('hidden');\n});\n```",
        
        "Arquitectura de aplicaciones web": "Estructura organizacional que define cómo se relacionan los componentes:\n\n• Patrón MVC: Modelo (datos), Vista (UI), Controlador (lógica)\n• Componentes reutilizables y modulares\n• Flujo de datos unidireccional\n• Ejemplo de arquitectura simple:\n\n```javascript\n// Modelo - Datos\nconst UserModel = {\n  users: [],\n  addUser: (user) => UserModel.users.push(user),\n  getUsers: () => UserModel.users\n};\n\n// Vista - UI\nconst UserView = {\n  render: (users) => {\n    const html = users.map(user => \n      `<div class=\"user\">${user.name}</div>`\n    ).join('');\n    document.getElementById('userList').innerHTML = html;\n  }\n};\n\n// Controlador - Lógica\nconst UserController = {\n  addUser: (name) => {\n    UserModel.addUser({name});\n    UserView.render(UserModel.getUsers());\n  }\n};\n```",
        
        "APIs REST y consumo de datos": "REST (Representational State Transfer) define cómo comunicarse con servicios web:\n\n• Métodos HTTP: GET (leer), POST (crear), PUT (actualizar), DELETE (eliminar)\n• URLs semánticas: /api/users, /api/users/123\n• Respuestas en formato JSON\n• Ejemplo de consumo:\n\n```javascript\n// GET - Obtener usuarios\nfetch('/api/users')\n  .then(response => response.json())\n  .then(users => console.log(users))\n  .catch(error => console.error('Error:', error));\n\n// POST - Crear usuario\nfetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Juan', email: 'juan@email.com' })\n})\n.then(response => response.json())\n.then(user => console.log('Usuario creado:', user));\n```",
        
        "Manejo de estado en aplicaciones": "Estado = datos que cambian y afectan la UI:\n\n• Estado local: variables en componentes\n• Estado global: datos compartidos entre componentes\n• Patrón Observer: notificar cambios automáticamente\n• Ejemplo de manejo de estado:\n\n```javascript\nclass StateManager {\n  constructor() {\n    this.state = {};\n    this.listeners = [];\n  }\n  \n  setState(newState) {\n    this.state = { ...this.state, ...newState };\n    this.listeners.forEach(listener => listener(this.state));\n  }\n  \n  subscribe(listener) {\n    this.listeners.push(listener);\n  }\n}\n\n// Uso\nconst appState = new StateManager();\nappState.subscribe(state => {\n  document.getElementById('counter').textContent = state.count || 0;\n});\nappState.setState({ count: 5 });\n```",
        
        "Responsive design avanzado": "Diseño que se adapta a diferentes dispositivos:\n\n• Mobile-first: diseñar primero para móviles\n• Breakpoints: puntos donde cambia el layout\n• Unidades flexibles: %, vw, vh, rem, em\n• Ejemplo de responsive:\n\n```css\n/* Mobile first */\n.container {\n  width: 100%;\n  padding: 1rem;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container {\n    max-width: 750px;\n    margin: 0 auto;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1200px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n  }\n}\n```",
        
        "Optimización de rendimiento": "Técnicas para mejorar velocidad y eficiencia:\n\n• Lazy loading: cargar contenido bajo demanda\n• Debouncing: limitar frecuencia de eventos\n• Memoización: cachear resultados de funciones\n• Ejemplo de optimización:\n\n```javascript\n// Debouncing para búsqueda\nfunction debounce(func, wait) {\n  let timeout;\n  return function executedFunction(...args) {\n    const later = () => {\n      clearTimeout(timeout);\n      func(...args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n}\n\n// Uso en búsqueda\nconst searchInput = document.getElementById('search');\nconst debouncedSearch = debounce((query) => {\n  // Realizar búsqueda\n  console.log('Buscando:', query);\n}, 300);\n\nsearchInput.addEventListener('input', (e) => {\n  debouncedSearch(e.target.value);\n});\n```"
      },
      practical: [
        "Crear aplicación web completa",
        "Implementar consumo de API",
        "Desarrollar interfaz responsive",
        "Aplicar validaciones y manejo de errores",
        "Optimizar para diferentes dispositivos"
      ]
    },
    activities: [
      {
        title: "Planificación del proyecto",
        duration: "30 min",
        description: "Definir estructura y funcionalidades de la aplicación"
      },
      {
        title: "Desarrollo de la aplicación",
        duration: "120 min",
        description: "Implementar la aplicación completa con todas las tecnologías"
      },
      {
        title: "Testing y optimización",
        duration: "30 min",
        description: "Probar la aplicación y optimizar el rendimiento"
      }
    ],
    homework: [
      "Mejorar la interfaz de usuario",
      "Agregar más funcionalidades",
      "Implementar tests unitarios"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web",
      "API de prueba"
    ],
    exercises: [
      {
        title: "Aplicación Web Completa",
        description: "Crea una aplicación web completa que integre HTML, CSS, JavaScript y APIs.",
        code: `// Estructura del proyecto
/*
proyecto/
├── index.html
├── styles/
│   ├── main.css
│   └── responsive.css
├── scripts/
│   ├── main.js
│   └── api.js
└── assets/
    └── images/
*/`,
        solution: `// Solución completa del proyecto integrador
// HTML (index.html)
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación Web Integrada</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/responsive.css">
</head>
<body>
    <header class="header">
        <h1>Mi Aplicación Web</h1>
        <nav class="nav">
            <a href="#home" class="nav-link active">Inicio</a>
            <a href="#about" class="nav-link">Acerca de</a>
            <a href="#contact" class="nav-link">Contacto</a>
        </nav>
    </header>
    
    <main class="main">
        <section id="home" class="section active">
            <h2>Bienvenido</h2>
            <div class="content">
                <div class="card">
                    <h3>Datos de la API</h3>
                    <div id="api-data" class="api-data">
                        <p>Cargando datos...</p>
                    </div>
                </div>
                
                <div class="card">
                    <h3>Formulario de Contacto</h3>
                    <form id="contact-form" class="form">
                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Mensaje:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
        
        <section id="about" class="section">
            <h2>Acerca de</h2>
            <p>Esta es una aplicación web integrada que demuestra el uso de HTML, CSS, JavaScript y APIs.</p>
        </section>
        
        <section id="contact" class="section">
            <h2>Contacto</h2>
            <p>Puedes contactarnos a través del formulario en la página principal.</p>
        </section>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 Mi Aplicación Web. Todos los derechos reservados.</p>
    </footer>
    
    <script src="scripts/api.js"></script>
    <script src="scripts/main.js"></script>
</body>
</html>

// CSS (styles/main.css)
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

.header {
    background: #333;
    color: white;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.header h1 {
    margin-bottom: 0.5rem;
}

.nav {
    display: flex;
    gap: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.active {
    background-color: #555;
}

.main {
    margin-top: 120px;
    padding: 2rem;
}

.section {
    display: none;
}

.section.active {
    display: block;
}

.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.form-group textarea {
    height: 100px;
    resize: vertical;
}

button {
    background: #333;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

button:hover {
    background: #555;
}

.api-data {
    min-height: 200px;
}

.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}

// JavaScript (scripts/main.js)
class App {
    constructor() {
        this.api = new ApiService();
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.setupForm();
        this.loadApiData();
    }
    
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                
                // Remover clase active de todos los enlaces y secciones
                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Agregar clase active al enlace y sección seleccionados
                link.classList.add('active');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
    
    setupForm() {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(form);
        });
    }
    
    async handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        try {
            // Simular envío de formulario
            await this.simulateFormSubmission(data);
            this.showMessage('Formulario enviado correctamente', 'success');
            form.reset();
        } catch (error) {
            this.showMessage('Error al enviar el formulario', 'error');
        }
    }
    
    async simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.name && data.email && data.message) {
                    resolve(data);
                } else {
                    reject(new Error('Datos incompletos'));
                }
            }, 1000);
        });
    }
    
    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = \`message \${type}\`;
        messageDiv.textContent = message;
        
        const main = document.querySelector('.main');
        main.insertBefore(messageDiv, main.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
    
    async loadApiData() {
        try {
            const data = await this.api.getData();
            this.displayApiData(data);
        } catch (error) {
            console.error('Error al cargar datos:', error);
            this.displayApiDataError();
        }
    }
    
    displayApiData(data) {
        const container = document.getElementById('api-data');
        container.innerHTML = \`
            <h4>Datos de la API:</h4>
            <ul>
                \${data.map(item => \`<li>\${item.title}</li>\`).join('')}
            </ul>
        \`;
    }
    
    displayApiDataError() {
        const container = document.getElementById('api-data');
        container.innerHTML = '<p>Error al cargar los datos de la API</p>';
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    new App();
});`
      }
    ]
  },
  {
    id: 16,
    title: "Introducción a React",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Comprender qué es React y por qué usarlo",
      "Aprender JSX y sus diferencias con HTML",
      "Entender props y componentes",
      "Configurar entorno de desarrollo con Vite"
    ],
    content: {
      theoretical: [
        "¿Qué es React y por qué usarlo?",
        "JSX: JavaScript XML y sus diferencias con HTML",
        "Componentes: bloques reutilizables de UI",
        "Props: pasando datos entre componentes",
        "Virtual DOM y rendimiento",
        "Ecosistema React: herramientas y librerías"
      ],
      theoreticalDetails: {
        "¿Qué es React y por qué usarlo?": "React es una librería de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas. Su principal ventaja es el uso del Virtual DOM, que permite actualizaciones eficientes de la interfaz. React utiliza un enfoque basado en componentes, donde cada pieza de la UI es un componente reutilizable. Esto facilita el mantenimiento del código, la escalabilidad de aplicaciones y el trabajo en equipo. React también introduce conceptos como JSX, que permite escribir HTML dentro de JavaScript de manera más intuitiva.\n\n**Ejemplos:**\n```javascript\n// Componente simple de React\nfunction Saludo({ nombre }) {\n  return <h1>¡Hola, {nombre}!</h1>;\n}\n\n// Uso del componente\n<Saludo nombre=\"Juan\" />\n\n// Ventajas de React:\n// ✅ Componentes reutilizables\n// ✅ Virtual DOM para rendimiento\n// ✅ Ecosistema maduro\n// ✅ Herramientas de desarrollo\n// ✅ Comunidad activa\n```",
        
        "JSX: JavaScript XML y sus diferencias con HTML": "JSX (JavaScript XML) es una extensión de sintaxis que permite escribir código similar a HTML dentro de JavaScript. Aunque se ve como HTML, JSX tiene algunas diferencias importantes: los atributos usan camelCase (className en lugar de class), los elementos deben cerrarse explícitamente, y se pueden usar expresiones JavaScript dentro de llaves {}. JSX se transpila a JavaScript puro antes de ejecutarse, convirtiendo elementos JSX en llamadas a React.createElement(). Esto permite combinar la potencia de JavaScript con la familiaridad de HTML.\n\n**Ejemplos:**\n```javascript\n// Diferencias entre HTML y JSX\n// HTML\n<div class=\"container\">\n  <img src=\"image.jpg\">\n  <input type=\"text\">\n</div>\n\n// JSX\n<div className=\"container\">\n  <img src=\"image.jpg\" />\n  <input type=\"text\" />\n</div>\n\n// Expresiones JavaScript en JSX\nfunction Usuario({ nombre, edad }) {\n  return (\n    <div>\n      <h1>{nombre}</h1>\n      <p>Edad: {edad}</p>\n      <p>Es mayor: {edad >= 18 ? 'Sí' : 'No'}</p>\n    </div>\n  );\n}\n```",
        
        "Componentes: bloques reutilizables de UI": "Los componentes en React son funciones o clases que retornan elementos JSX. Cada componente encapsula su propia lógica y estado, lo que los hace reutilizables y fáciles de mantener. Los componentes pueden ser funcionales (usando funciones) o de clase (usando clases ES6). Los componentes funcionales son más simples y son la forma recomendada actualmente. Un componente puede contener otros componentes, creando una estructura jerárquica que refleja la estructura de la aplicación.",
        
        "Props: pasando datos entre componentes": "Props (propiedades) son la forma de pasar datos de un componente padre a un componente hijo en React. Son inmutables y solo pueden ser leídas por el componente que las recibe. Las props permiten que los componentes sean configurables y reutilizables. Se pasan como atributos en JSX y se acceden como propiedades del objeto props en el componente hijo. Las props pueden ser strings, números, objetos, funciones o incluso otros componentes.\n\n**Ejemplos:**\n```javascript\n// Componente hijo que recibe props\nfunction Tarjeta({ titulo, contenido, color }) {\n  return (\n    <div style={{ backgroundColor: color }}>\n      <h2>{titulo}</h2>\n      <p>{contenido}</p>\n    </div>\n  );\n}\n\n// Componente padre que pasa props\nfunction App() {\n  return (\n    <div>\n      <Tarjeta \n        titulo=\"Noticia 1\" \n        contenido=\"Contenido de la noticia\" \n        color=\"lightblue\" \n      />\n      <Tarjeta \n        titulo=\"Noticia 2\" \n        contenido=\"Otra noticia\" \n        color=\"lightgreen\" \n      />\n    </div>\n  );\n}\n\n// Props con valores por defecto\nfunction Boton({ texto = 'Click', onClick }) {\n  return <button onClick={onClick}>{texto}</button>;\n}\n```",
        
        "Virtual DOM y rendimiento": "El Virtual DOM es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React crea un nuevo Virtual DOM y lo compara con el anterior (proceso llamado 'diffing'). Solo las diferencias se aplican al DOM real, lo que hace que las actualizaciones sean muy eficientes. Este enfoque evita manipulaciones costosas del DOM y mejora significativamente el rendimiento de las aplicaciones, especialmente en interfaces complejas con muchos elementos.",
        
        "Ecosistema React: herramientas y librerías": "El ecosistema de React incluye herramientas esenciales como Create React App y Vite para configuración inicial, React Router para navegación, Redux o Context API para manejo de estado global, y librerías de UI como Material-UI o Ant Design. También incluye herramientas de desarrollo como React DevTools para debugging, Jest para testing, y Webpack para bundling. Este ecosistema maduro facilita el desarrollo de aplicaciones complejas y escalables."
      },
      practical: [
        "Configurar proyecto React con Vite",
        "Crear primer componente React",
        "Usar JSX para renderizar elementos",
        "Pasar props entre componentes",
        "Proyecto: componente de saludo personalizable"
      ]
    },
    activities: [
      {
        title: "Configuración de React",
        duration: "45 min",
        description: "Instalar Vite y crear primer proyecto React"
      },
      {
        title: "Componentes y JSX",
        duration: "60 min",
        description: "Crear componentes básicos y entender JSX"
      },
      {
        title: "Props y datos",
        duration: "45 min",
        description: "Pasar datos entre componentes usando props"
      }
    ],
    homework: [
      "Crear aplicación React con 3 componentes",
      "Implementar props en todos los componentes",
      "Experimentar con JSX y estilos"
    ],
    materials: [
      "Node.js instalado",
      "Editor de código",
      "Navegador web"
    ],
    exercises: [
      {
        title: "Hook Personalizado",
        description: "Crea un hook personalizado para manejar formularios.",
        code: `// Hook personalizado para formularios
function useForm(initialValues) {
  // Tu código aquí
}

// Usar el hook
function MyForm() {
  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: ''
  });
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input 
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}`,
        solution: `// Hook personalizado para formularios - Solución
import { useState, useCallback } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);
  
  const handleSubmit = useCallback(async (e, onSubmit) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values]);
  
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);
  
  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);
  
  const setError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setValue,
    setError
  };
}

// Hook personalizado para consumo de API
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return { data, loading, error, refetch: fetchData };
}

// Hook personalizado para localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error al leer localStorage:', error);
      return initialValue;
    }
  });
  
  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setValue];
}

// Ejemplo de uso completo
function MyForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: '',
    email: ''
  });
  
  const onSubmit = async (formValues) => {
    console.log('Enviando:', formValues);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
  };
  
  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <div>
        <input 
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <input 
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

export { useForm, useApi, useLocalStorage };`
      }
    ]
  },
  {
    id: 17,
    title: "React - Hooks y Estado",
    duration: "3 horas",
    level: "Intermedio-Avanzado",
    completed: false,
    objectives: [
      "Comprender el concepto de hooks",
      "Usar useState para manejar estado",
      "Implementar useEffect para efectos secundarios",
      "Crear hooks personalizados"
    ],
    content: {
      theoretical: [
        "¿Qué son los hooks?",
        "useState: manejo de estado local",
        "useEffect: efectos secundarios",
        "Reglas de los hooks",
        "Hooks personalizados",
        "useContext para estado global"
      ],
      theoreticalDetails: {
        "¿Qué son los hooks?": "Los hooks son funciones especiales que permiten usar estado y otras características de React en componentes funcionales. Introducidos en React 16.8, los hooks revolucionaron la forma de escribir componentes al permitir que los componentes funcionales tengan estado y ciclo de vida. Los hooks siempre comienzan con 'use' y deben ser llamados en el nivel superior de los componentes, nunca dentro de bucles, condiciones o funciones anidadas. Los hooks más comunes incluyen useState para estado, useEffect para efectos secundarios, y useContext para contexto.",
        
        "useState: manejo de estado local": "useState es el hook más fundamental que permite agregar estado local a componentes funcionales. Retorna un array con dos elementos: el valor actual del estado y una función para actualizarlo. Cuando se llama a la función de actualización, React re-renderiza el componente con el nuevo estado. useState puede inicializarse con un valor inicial o con una función que retorna el valor inicial. Es importante entender que las actualizaciones de estado son asíncronas y pueden ser agrupadas por React para optimizar el rendimiento.\n\n**Ejemplos:**\n```javascript\nimport { useState } from 'react';\n\nfunction Contador() {\n  const [contador, setContador] = useState(0);\n  \n  return (\n    <div>\n      <p>Contador: {contador}</p>\n      <button onClick={() => setContador(contador + 1)}>\n        Incrementar\n      </button>\n      <button onClick={() => setContador(contador - 1)}>\n        Decrementar\n      </button>\n    </div>\n  );\n}\n\n// Múltiples estados\nfunction Formulario() {\n  const [nombre, setNombre] = useState('');\n  const [email, setEmail] = useState('');\n  \n  return (\n    <form>\n      <input \n        value={nombre}\n        onChange={(e) => setNombre(e.target.value)}\n        placeholder=\"Nombre\"\n      />\n      <input \n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"Email\"\n      />\n    </form>\n  );\n}\n```",
        
        "useEffect: efectos secundarios": "useEffect permite realizar efectos secundarios en componentes funcionales, reemplazando los métodos de ciclo de vida de los componentes de clase. Se ejecuta después de cada renderizado y puede realizar operaciones como llamadas a APIs, suscripciones, timers, o manipulación del DOM. useEffect acepta dos parámetros: una función de efecto y un array de dependencias. El array de dependencias controla cuándo se ejecuta el efecto: si está vacío, se ejecuta solo una vez; si contiene valores, se ejecuta cuando esos valores cambian.\n\n**Ejemplos:**\n```javascript\nimport { useState, useEffect } from 'react';\n\nfunction Usuario({ userId }) {\n  const [usuario, setUsuario] = useState(null);\n  \n  // Se ejecuta solo una vez al montar\n  useEffect(() => {\n    fetch(`/api/usuarios/${userId}`)\n      .then(res => res.json())\n      .then(data => setUsuario(data));\n  }, []); // Array vacío = solo al montar\n  \n  // Se ejecuta cuando cambia userId\n  useEffect(() => {\n    if (userId) {\n      fetch(`/api/usuarios/${userId}`)\n        .then(res => res.json())\n        .then(data => setUsuario(data));\n    }\n  }, [userId]); // Se ejecuta cuando userId cambia\n  \n  // Cleanup function\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log('Timer ejecutándose');\n    }, 1000);\n    \n    return () => clearInterval(timer); // Cleanup\n  }, []);\n  \n  return <div>{usuario?.nombre}</div>;\n}\n```",
        
        "Reglas de los hooks": "Los hooks tienen dos reglas fundamentales: 1) Solo llamar hooks en el nivel superior de componentes funcionales o hooks personalizados, nunca dentro de bucles, condiciones o funciones anidadas. 2) Solo llamar hooks de React, no hooks personalizados dentro de funciones regulares. Estas reglas aseguran que los hooks se llamen en el mismo orden en cada renderizado, lo cual es crucial para que React mantenga el estado correctamente entre renderizados. Violar estas reglas puede causar bugs difíciles de encontrar.",
        
        "Hooks personalizados": "Los hooks personalizados son funciones que comienzan con 'use' y pueden llamar otros hooks. Permiten extraer lógica de estado de componentes para reutilizarla entre diferentes componentes. Un hook personalizado puede encapsular lógica compleja, hacer llamadas a APIs, manejar formularios, o cualquier otra funcionalidad que necesite ser compartida. Los hooks personalizados siguen las mismas reglas que los hooks de React y pueden retornar cualquier valor: estado, funciones, objetos, etc.",
        
        "useContext para estado global": "useContext permite consumir un contexto de React sin necesidad de usar el patrón Provider/Consumer. Es útil para compartir datos entre componentes que están muy separados en el árbol de componentes, evitando el 'prop drilling'. useContext acepta un objeto de contexto creado con React.createContext() y retorna el valor actual de ese contexto. Es especialmente útil para temas, autenticación, configuración global, o cualquier dato que necesite ser accesible desde múltiples componentes."
      },
      practical: [
        "Implementar useState en componentes",
        "Usar useEffect para efectos secundarios",
        "Crear hooks personalizados",
        "Proyecto: aplicación con hooks",
        "Optimizar rendimiento con hooks"
      ]
    },
    activities: [
      {
        title: "useState y useEffect",
        duration: "60 min",
        description: "Implementar manejo de estado y efectos secundarios"
      },
      {
        title: "Hooks personalizados",
        duration: "60 min",
        description: "Crear hooks reutilizables para lógica común"
      },
      {
        title: "Optimización",
        duration: "30 min",
        description: "Optimizar rendimiento con hooks"
      }
    ],
    homework: [
      "Crear hook personalizado para formularios",
      "Implementar hook para consumo de API",
      "Optimizar componentes con hooks"
    ],
    materials: [
      "Node.js instalado",
      "Editor de código",
      "Navegador web"
    ],
    exercises: [
      {
        title: "Aplicación con Routing",
        description: "Crea una aplicación React con múltiples rutas y navegación.",
        code: `// Estructura de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`,
        solution: `// Solución completa de aplicación con routing
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Componente de navegación
function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/about" className="nav-link">Acerca de</Link>
      <Link to="/contact" className="nav-link">Contacto</Link>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
    </nav>
  );
}

// Componente de layout
function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <h1>Mi Aplicación</h1>
        <Navigation />
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Mi Aplicación</p>
      </footer>
    </div>
  );
}

// Componentes de página
function Home() {
  return (
    <div className="page">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a nuestra aplicación.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>Acerca de</h2>
      <p>Información sobre nuestra empresa.</p>
    </div>
  );
}

function Contact() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío de formulario
    alert('Formulario enviado');
    navigate('/');
  };
  
  return (
    <div className="page">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Panel de control de la aplicación.</p>
    </div>
  );
}

// Componente principal con routing
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;`
      }
    ]
  },
  {
    id: 18,
    title: "React - Routing y Navegación",
    duration: "3 horas",
    level: "Intermedio-Avanzado",
    completed: false,
    objectives: [
      "Implementar routing en React",
      "Usar React Router para navegación",
      "Manejar rutas protegidas",
      "Implementar navegación programática"
    ],
    content: {
      theoretical: [
        "¿Qué es el routing en SPA?",
        "React Router: instalación y configuración",
        "Componentes: BrowserRouter, Routes, Route",
        "Navegación: Link, NavLink, useNavigate",
        "Rutas anidadas y layouts",
        "Rutas protegidas y autenticación"
      ],
      theoreticalDetails: {
        "¿Qué es el routing en SPA?": "El routing en Single Page Applications (SPA) permite navegar entre diferentes vistas sin recargar la página completa. A diferencia de las aplicaciones tradicionales donde cada página requiere una nueva solicitud al servidor, las SPA cargan una sola página HTML y usan JavaScript para cambiar el contenido dinámicamente. El routing se basa en la URL del navegador para determinar qué componente mostrar. Esto proporciona una experiencia de usuario más fluida y rápida, similar a las aplicaciones nativas.",
        
        "React Router: instalación y configuración": "React Router es la librería estándar para routing en aplicaciones React. Se instala con npm install react-router-dom y proporciona componentes y hooks para manejar la navegación. La configuración básica incluye envolver la aplicación con BrowserRouter, que utiliza la API History del navegador para manejar la URL. React Router v6 introdujo cambios significativos en la API, simplificando muchos conceptos y mejorando el rendimiento. La configuración típica incluye definir rutas con el componente Routes y Route.",
        
        "Componentes: BrowserRouter, Routes, Route": "BrowserRouter es el componente principal que proporciona el contexto de routing a toda la aplicación. Routes actúa como un contenedor que agrupa múltiples Route y determina cuál renderizar basándose en la URL actual. Route define una ruta específica con propiedades como 'path' (la URL) y 'element' (el componente a renderizar). También soporta rutas dinámicas con parámetros usando ':param' y rutas comodín con '*'. Los componentes pueden ser elementos JSX o referencias a componentes.",
        
        "Navegación: Link, NavLink, useNavigate": "Link es el componente principal para navegación declarativa, similar a un enlace HTML pero sin recargar la página. NavLink extiende Link con funcionalidades adicionales como estilos activos cuando la ruta coincide. useNavigate es un hook para navegación programática, útil para navegar después de acciones como envío de formularios o autenticación. También permite navegación hacia atrás/adelante y reemplazar la entrada actual del historial. La navegación programática es especialmente útil para flujos de usuario complejos.",
        
        "Rutas anidadas y layouts": "Las rutas anidadas permiten crear jerarquías de navegación donde componentes padre contienen componentes hijo. Esto es útil para layouts compartidos, como un header y sidebar que permanecen mientras cambia el contenido principal. Se implementan usando Route anidados dentro de otros Route, o usando Outlet para renderizar componentes hijo. Los layouts pueden ser componentes que envuelven el contenido y proporcionan estructura común, navegación, o funcionalidades compartidas como autenticación o temas.",
        
        "Rutas protegidas y autenticación": "Las rutas protegidas requieren autenticación antes de permitir el acceso. Se implementan creando componentes wrapper que verifican el estado de autenticación y redirigen a login si es necesario. Esto puede incluir verificar tokens JWT, sesiones, o cualquier otro mecanismo de autenticación. Las rutas protegidas pueden tener diferentes niveles de acceso (admin, usuario, invitado) y pueden redirigir a diferentes páginas según el rol del usuario. También es importante manejar la expiración de sesiones y la renovación automática de tokens."
      },
      practical: [
        "Configurar React Router",
        "Crear rutas y navegación",
        "Implementar rutas protegidas",
        "Proyecto: aplicación con routing",
        "Optimizar navegación"
      ]
    },
    activities: [
      {
        title: "Configuración de React Router",
        duration: "45 min",
        description: "Instalar y configurar React Router en la aplicación"
      },
      {
        title: "Creación de rutas",
        duration: "60 min",
        description: "Implementar rutas básicas y navegación"
      },
      {
        title: "Rutas protegidas",
        duration: "45 min",
        description: "Implementar autenticación y rutas protegidas"
      }
    ],
    homework: [
      "Crear aplicación con múltiples rutas",
      "Implementar autenticación",
      "Agregar navegación breadcrumb"
    ],
    materials: [
      "Node.js instalado",
      "Editor de código",
      "Navegador web"
    ],
    exercises: [
      {
        title: "Configuración de React Router",
        description: "Configura React Router en una aplicación React básica.",
        code: `// Crear Context
import { createContext, useContext } from 'react';

const AppContext = createContext();

// Provider
function AppProvider({ children }) {
    // Tu código aquí
}

// Hook personalizado
function useApp() {
  // Tu código aquí
}`,
        solution: `// Solución completa de Context global
import React, { createContext, useContext, useReducer } from 'react';

// Definir tipos de acciones
const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_THEME: 'SET_THEME',
  SET_LOADING: 'SET_LOADING',
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

// Estado inicial
const initialState = {
  user: null,
  theme: 'light',
  loading: false,
  tasks: []
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.payload };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
}

// Crear Context
const AppContext = createContext();

// Provider
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Acciones
  const actions = {
    setUser: (user) => dispatch({ type: ACTIONS.SET_USER, payload: user }),
    setTheme: (theme) => dispatch({ type: ACTIONS.SET_THEME, payload: theme }),
    setLoading: (loading) => dispatch({ type: ACTIONS.SET_LOADING, payload: loading }),
    addTask: (task) => dispatch({ type: ACTIONS.ADD_TASK, payload: task }),
    toggleTask: (id) => dispatch({ type: ACTIONS.TOGGLE_TASK, payload: id }),
    deleteTask: (id) => dispatch({ type: ACTIONS.DELETE_TASK, payload: id })
  };
  
  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado
function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de AppProvider');
  }
  return context;
}

// Componente de ejemplo
function TaskList() {
  const { state, actions } = useApp();
  
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: 'Nueva tarea',
      completed: false
    };
    actions.addTask(newTask);
  };
  
  return (
    <div>
      <h2>Tareas</h2>
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {state.tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => actions.toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => actions.deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente de tema
function ThemeToggle() {
  const { state, actions } = useApp();
  
  return (
    <button onClick={() => actions.setTheme(state.theme === 'light' ? 'dark' : 'light')}>
      Cambiar a tema {state.theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}

// Componente principal
function App() {
  return (
    <AppProvider>
      <div className="app">
        <header>
          <h1>Mi Aplicación</h1>
          <ThemeToggle />
        </header>
        <main>
          <TaskList />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;`
      }
    ]
  },
  {
    id: 19,
    title: "React - Context y Estado Global",
    duration: "3 horas",
    level: "Avanzado",
    completed: false,
    objectives: [
      "Comprender el patrón Context en React",
      "Implementar estado global con Context",
      "Crear providers y consumers",
      "Optimizar rendimiento con Context"
    ],
    content: {
      theoretical: [
        "¿Qué es Context API?",
        "createContext y useContext",
        "Provider y Consumer patterns",
        "Estado global vs props drilling",
        "Optimización de Context",
        "Alternativas: Redux, Zustand"
      ],
      theoreticalDetails: {
        "¿Qué es Context API?": "Context API es una característica de React que permite compartir datos entre componentes sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Es especialmente útil para datos que son considerados 'globales' para un árbol de componentes, como temas, idioma preferido, o información de autenticación. Context proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props hacia abajo manualmente en cada nivel.",
        
        "createContext y useContext": "createContext crea un objeto Context que puede ser usado por componentes para acceder a datos compartidos. useContext es un hook que permite consumir el valor de un Context en un componente funcional. createContext acepta un valor por defecto que se usa cuando un componente no está envuelto en un Provider correspondiente. useContext debe ser llamado dentro de un componente funcional y retorna el valor actual del Context más cercano en el árbol de componentes.",
        
        "Provider y Consumer patterns": "Provider es un componente que permite a los componentes consumidores suscribirse a cambios en el Context. Se coloca en un nivel superior del árbol de componentes y proporciona el valor del Context a todos sus descendientes. Consumer es un componente que permite consumir el valor del Context en componentes de clase, aunque con hooks es más común usar useContext. El patrón Provider/Consumer permite que múltiples componentes accedan al mismo estado sin prop drilling.",
        
        "Estado global vs props drilling": "Props drilling ocurre cuando se pasa la misma prop a través de múltiples niveles de componentes, incluso cuando algunos componentes intermedios no necesitan esa prop. Esto hace el código más difícil de mantener y entender. El estado global con Context resuelve este problema permitiendo que cualquier componente acceda directamente a los datos que necesita, sin pasar por componentes intermedios. Sin embargo, es importante usar Context solo cuando sea necesario, ya que puede causar re-renders innecesarios.",
        
        "Optimización de Context": "Context puede causar re-renders de todos los componentes consumidores cuando el valor cambia, incluso si solo necesitan una parte del estado. Para optimizar, se pueden crear múltiples Contexts para diferentes tipos de datos, usar useMemo para valores calculados, o implementar patrones como Context + useReducer para manejar estado complejo. También es importante evitar crear el objeto Context dentro del render, ya que esto crea un nuevo objeto en cada renderizado.",
        
        "Alternativas: Redux, Zustand": "Redux es una librería de manejo de estado que proporciona un store global predecible usando principios de programación funcional. Es más complejo que Context pero ofrece herramientas poderosas para debugging y manejo de estado complejo. Zustand es una librería más ligera que Redux, con menos boilerplate y una API más simple. Ambas son alternativas cuando Context no es suficiente para manejar estado complejo o cuando se necesita mejor rendimiento y herramientas de desarrollo."
      },
      practical: [
        "Crear Context para estado global",
        "Implementar Provider",
        "Usar useContext en componentes",
        "Proyecto: aplicación con Context",
        "Optimizar re-renders"
      ]
    },
    activities: [
      {
        title: "Creación de Context",
        duration: "45 min",
        description: "Crear Context y Provider para estado global"
      },
      {
        title: "Implementación de Consumer",
        duration: "60 min",
        description: "Usar useContext en componentes"
      },
      {
        title: "Optimización",
        duration: "45 min",
        description: "Optimizar rendimiento y evitar re-renders innecesarios"
      }
    ],
    homework: [
      "Crear aplicación con Context",
      "Implementar autenticación global",
      "Agregar tema global"
    ],
    materials: [
      "Node.js instalado",
      "Editor de código",
      "Navegador web"
    ],
    exercises: [
      {
        title: "Aplicación React Completa",
        description: "Crea una aplicación React completa con formularios, rutas y estado.",
        code: `// Estructura del proyecto
/*
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── Form.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
├── hooks/
│   └── useForm.js
├── context/
│   └── AppContext.js
└── App.js
*/`,
        solution: `// Solución completa de aplicación React
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

// context/AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  theme: 'light',
  tasks: []
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
        default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const actions = {
    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
    addTask: (task) => dispatch({ type: 'ADD_TASK', payload: task }),
    toggleTask: (id) => dispatch({ type: 'TOGGLE_TASK', payload: id }),
    deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id })
  };
  
  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de AppProvider');
  }
  return context;
}

// hooks/useForm.js
import { useState, useCallback } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);
  
  const handleSubmit = useCallback(async (e, onSubmit) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values]);
  
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  };
}

// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

function Header() {
  const { state, actions } = useApp();
  
  return (
    <header className="header">
      <h1>Mi Aplicación React</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Acerca de</Link>
        <Link to="/contact" className="nav-link">Contacto</Link>
      </nav>
      <button 
        onClick={() => actions.setTheme(state.theme === 'light' ? 'dark' : 'light')}
        className="theme-toggle"
      >
        {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;

// pages/Home.js
import React from 'react';
import { useApp } from '../context/AppContext';

function Home() {
  const { state, actions } = useApp();
  
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: 'Nueva tarea',
      completed: false
    };
    actions.addTask(newTask);
  };
  
  return (
    <div className="page">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a nuestra aplicación React.</p>
      
      <div className="tasks-section">
        <h3>Tareas</h3>
        <button onClick={handleAddTask} className="add-task-btn">
          Agregar Tarea
        </button>
        <ul className="tasks-list">
          {state.tasks.map(task => (
            <li key={task.id} className="task-item">
              <span
                className={task.completed ? 'completed' : ''}
                onClick={() => actions.toggleTask(task.id)}
              >
                {task.text}
              </span>
              <button 
                onClick={() => actions.deleteTask(task.id)}
                className="delete-btn"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

// pages/Contact.js
import React from 'react';
import { useForm } from '../hooks/useForm';

function Contact() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    message: ''
  });
  
  const onSubmit = async (formValues) => {
    console.log('Enviando formulario:', formValues);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Formulario enviado correctamente');
  };
  
  return (
    <div className="page">
      <h2>Contacto</h2>
      <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}

export default Contact;`
      }
    ]
  },
  {
    id: 20,
    title: "Taller React Parcial",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Crear aplicación React completa",
      "Implementar formularios y validación",
      "Desarrollar rutas y navegación",
      "Aplicar hooks y estado"
    ],
    content: {
      theoretical: [
        "Arquitectura de aplicaciones React",
        "Formularios controlados y no controlados",
        "Validación de formularios",
        "Manejo de estado con hooks",
        "Routing y navegación",
        "Buenas prácticas de React"
      ],
      theoreticalDetails: {
        "Arquitectura de aplicaciones React": "Una buena arquitectura de aplicación React se basa en la separación de responsabilidades y la organización modular. Los componentes deben ser pequeños, enfocados en una sola responsabilidad, y reutilizables. La estructura de carpetas típica incluye separación por features o páginas, con carpetas para componentes, hooks, servicios, y utilidades. Los datos deben fluir hacia abajo a través de props y hacia arriba a través de callbacks. Es importante mantener la lógica de negocio separada de los componentes de presentación.",
        
        "Formularios controlados y no controlados": "Los formularios controlados tienen su valor controlado por React a través del estado del componente. Cada input tiene una prop value que refleja el estado y un onChange que actualiza el estado. Esto permite validación en tiempo real y control total sobre los datos. Los formularios no controlados permiten que el DOM maneje el estado del formulario, usando refs para acceder a los valores cuando sea necesario. Los formularios controlados son más predecibles y fáciles de testear, mientras que los no controlados pueden ser más eficientes para formularios simples.",
        
        "Validación de formularios": "La validación de formularios puede ser realizada en el lado del cliente usando JavaScript, en el servidor, o ambos. En React, la validación puede ocurrir en tiempo real mientras el usuario escribe, al perder el foco del campo, o al enviar el formulario. Las librerías como Formik, React Hook Form, o Yup proporcionan herramientas para manejar formularios complejos con validación. Es importante proporcionar feedback claro al usuario sobre errores y validaciones, usando estados de error y mensajes descriptivos.",
        
        "Manejo de estado con hooks": "Los hooks useState y useEffect son fundamentales para manejar estado en componentes funcionales. useState permite agregar estado local, mientras que useEffect maneja efectos secundarios como llamadas a APIs o suscripciones. Para estado más complejo, useReducer proporciona un patrón similar a Redux para manejar múltiples valores de estado relacionados. Los hooks personalizados permiten extraer lógica de estado reutilizable y hacer que los componentes sean más limpios y enfocados.",
        
        "Routing y navegación": "React Router proporciona navegación declarativa y programática en aplicaciones de una sola página. Las rutas pueden ser estáticas o dinámicas con parámetros, y pueden incluir rutas protegidas que requieren autenticación. La navegación puede ser declarativa usando componentes Link o programática usando el hook useNavigate. Es importante manejar estados de carga, errores de navegación, y proporcionar una experiencia de usuario fluida durante las transiciones entre páginas.",
        
        "Buenas prácticas de React": "Las buenas prácticas incluyen mantener componentes pequeños y enfocados, usar nombres descriptivos para componentes y props, evitar mutaciones directas del estado, usar keys apropiadas en listas, y optimizar el rendimiento con React.memo, useMemo, y useCallback cuando sea necesario. También es importante manejar errores apropiadamente, usar PropTypes o TypeScript para validación de tipos, y seguir convenciones de naming consistentes. El código debe ser legible, mantenible, y seguir principios SOLID."
      },
      practical: [
        "Crear aplicación React completa",
        "Implementar formularios con validación",
        "Desarrollar sistema de rutas",
        "Aplicar hooks para estado",
        "Optimizar rendimiento"
      ]
    },
    activities: [
      {
        title: "Estructura del proyecto",
        duration: "30 min",
        description: "Crear estructura de proyecto React y configurar dependencias"
      },
      {
        title: "Desarrollo de componentes",
        duration: "120 min",
        description: "Implementar componentes principales y funcionalidades"
      },
      {
        title: "Testing y optimización",
        duration: "30 min",
        description: "Probar la aplicación y optimizar el rendimiento"
      }
    ],
    homework: [
      "Mejorar la interfaz de usuario",
      "Agregar más funcionalidades",
      "Implementar tests unitarios"
    ],
    materials: [
      "Todas las tecnologías aprendidas",
      "Plataforma de hosting",
      "Herramientas de desarrollo"
    ],
    exercises: [
      {
        title: "Proyecto Final Completo",
        description: "Crea una aplicación web completa que integre todas las tecnologías aprendidas.",
        code: `// Estructura del proyecto final
/*
proyecto-final/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Navigation.js
│   │   └── Modal.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Dashboard.js
│   ├── hooks/
│   │   ├── useForm.js
│   │   ├── useApi.js
│   │   └── useLocalStorage.js
│   ├── context/
│   │   └── AppContext.js
│   ├── styles/
│   │   ├── main.css
│   │   └── responsive.css
│   └── App.js
├── package.json
└── README.md
*/`,
        solution: `// Solución completa del proyecto final
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import './styles/main.css';
import './styles/responsive.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

// context/AppContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  theme: 'light',
  tasks: [],
  posts: [],
  loading: false,
  error: null
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Cargar datos del localStorage al inicializar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedTasks = localStorage.getItem('tasks');
    const savedUser = localStorage.getItem('user');
    
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: savedTheme });
    }
    if (savedTasks) {
      dispatch({ type: 'SET_TASKS', payload: JSON.parse(savedTasks) });
    }
    if (savedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
    }
  }, []);
  
  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);
  
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    }
  }, [state.user]);
  
  const actions = {
    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    addTask: (task) => dispatch({ type: 'ADD_TASK', payload: task }),
    toggleTask: (id) => dispatch({ type: 'TOGGLE_TASK', payload: id }),
    deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id }),
    setPosts: (posts) => dispatch({ type: 'SET_POSTS', payload: posts })
  };
  
  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de AppProvider');
  }
  return context;
}

// hooks/useApi.js
import { useState, useEffect } from 'react';

export function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);
  
  return { data, loading, error, refetch: fetchData };
}

// pages/Home.js
import React from 'react';
import { useApp } from '../context/AppContext';
import { useApi } from '../hooks/useApi';

function Home() {
  const { state, actions } = useApp();
  const { data: posts, loading, error } = useApi('https://jsonplaceholder.typicode.com/posts?_limit=5');
  
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: 'Nueva tarea',
      completed: false,
      createdAt: new Date()
    };
    actions.addTask(newTask);
  };
  
  return (
    <div className="page">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a nuestra aplicación web completa.</p>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Tareas</h3>
          <button onClick={handleAddTask} className="add-task-btn">
            Agregar Tarea
          </button>
          <ul className="tasks-list">
            {state.tasks.map(task => (
              <li key={task.id} className="task-item">
                <span
                  className={task.completed ? 'completed' : ''}
                  onClick={() => actions.toggleTask(task.id)}
                >
                  {task.text}
                </span>
                <button 
                  onClick={() => actions.deleteTask(task.id)}
                  className="delete-btn"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="dashboard-card">
          <h3>Posts de la API</h3>
          {loading && <p>Cargando posts...</p>}
          {error && <p>Error: {error}</p>}
          {posts && (
            <ul className="posts-list">
              {posts.map(post => (
                <li key={post.id} className="post-item">
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

// styles/main.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #333;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header h1 {
  margin-bottom: 0.5rem;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  background-color: #555;
}

.main {
  margin-top: 120px;
  padding: 2rem;
  flex: 1;
}

.page {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.dashboard-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.tasks-list,
.posts-list {
  list-style: none;
  margin-top: 1rem;
}

.task-item,
.post-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.task-item:last-child,
.post-item:last-child {
  border-bottom: none;
}

.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

.add-task-btn,
.delete-btn {
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5rem 0;
}

.add-task-btn:hover,
.delete-btn:hover {
  background: #555;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

// styles/responsive.css
@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .main {
    padding: 1rem;
  }
  
  .dashboard-card {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.5rem;
  }
  
  .nav-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }
  
  .main {
    margin-top: 100px;
  }
}`
      }
    ]
  }
];

// Función para obtener una sesión por ID
export const getSessionById = (id: number): SessionData | undefined => {
  return sessionsData.find(session => session.id === id);
};

// Función para obtener todas las sesiones
export const getAllSessions = (): SessionData[] => {
  return sessionsData;
};
