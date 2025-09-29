
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
        
        "HTML: Estructura y contenido de las páginas web": "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de una página usando elementos (tags) que describen diferentes partes del contenido. HTML es la base de toda página web y proporciona la estructura semántica que otros lenguajes como CSS y JavaScript pueden modificar y mejorar.\n\n**Ejemplos:**\n```html\n<!DOCTYPE html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <title>Mi Página Web</title>\n</head>\n<body>\n  <header>\n    <h1>Mi Sitio Web</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#inicio\">Inicio</a></li>\n        <li><a href=\"#sobre\">Sobre</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section id=\"inicio\">\n      <h2>Bienvenido</h2>\n      <p>Contenido principal de la página.</p>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Sitio</p>\n  </footer>\n</body>\n</html>\n```",
        
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
        "Etiquetas básicas de HTML5: html, head, body, title": "HTML5 introduce una estructura básica mejorada con etiquetas fundamentales que definen la arquitectura de toda página web. La etiqueta <html> es el contenedor raíz que especifica el idioma del documento. <head> contiene metadatos y recursos no visibles. <body> contiene todo el contenido visible. <title> define el título que aparece en la pestaña del navegador.\n\n**Ejemplos:**\n```html\n<!DOCTYPE html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Mi Página Web</title>\n</head>\n<body>\n  <!-- Contenido visible aquí -->\n</body>\n</html>\n\n<!-- Estructura mínima HTML5:\n- DOCTYPE html: Declara HTML5\n- html lang=\"es\": Idioma español\n- head: Metadatos y recursos\n- body: Contenido visible\n- title: Título de la pestaña\n```",
        
        "Elementos semánticos: header, nav, main, section, article, aside, footer": "Los elementos semánticos de HTML5 proporcionan significado estructural al contenido, mejorando la accesibilidad y SEO. <header> contiene encabezados y navegación principal. <nav> define áreas de navegación. <main> es el contenido principal único. <section> agrupa contenido relacionado. <article> representa contenido independiente. <aside> contiene información complementaria. <footer> incluye información de pie de página.\n\n**Ejemplos:**\n```html\n<header>\n  <h1>Mi Sitio Web</h1>\n  <nav>\n    <ul>\n      <li><a href=\"#inicio\">Inicio</a></li>\n      <li><a href=\"#sobre\">Sobre</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Título del Artículo</h2>\n    <p>Contenido del artículo...</p>\n  </article>\n  \n  <aside>\n    <h3>Información Adicional</h3>\n    <p>Contenido complementario...</p>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2024 Mi Sitio</p>\n</footer>\n```",
        
        "Estructura de contenido: h1-h6, p, div, span": "Los elementos de estructura de contenido organizan y jerarquizan la información. Los encabezados h1-h6 crean una jerarquía de títulos (h1 es el más importante). <p> define párrafos de texto. <div> es un contenedor genérico para agrupar elementos. <span> es un contenedor inline para texto o elementos pequeños. La jerarquía correcta de encabezados es crucial para SEO y accesibilidad.\n\n**Ejemplos:**\n```html\n<h1>Título Principal de la Página</h1>\n<h2>Sección Principal</h2>\n<p>Este es un párrafo de texto que contiene información importante sobre el tema.</p>\n\n<h3>Subsección</h3>\n<div class=\"contenedor\">\n  <p>Párrafo dentro de un div contenedor.</p>\n  <span class=\"destacado\">Texto destacado</span>\n</div>\n\n<h4>Detalle Específico</h4>\n<p>Información más específica...</p>\n\n<!-- Jerarquía correcta:\n- h1: Solo uno por página\n- h2: Secciones principales\n- h3: Subsecciones\n- h4-h6: Detalles específicos\n```",
        
        "Listas: ul, ol, li y sus variaciones": "Las listas organizan información de manera estructurada. <ul> crea listas no ordenadas (con viñetas). <ol> crea listas ordenadas (con números). <li> define cada elemento de la lista. Las listas pueden anidarse y combinarse para crear estructuras complejas. Son fundamentales para navegación, menús y organización de contenido.\n\n**Ejemplos:**\n```html\n<!-- Lista no ordenada -->\n<ul>\n  <li>Elemento 1</li>\n  <li>Elemento 2</li>\n  <li>Elemento 3</li>\n</ul>\n\n<!-- Lista ordenada -->\n<ol>\n  <li>Primer paso</li>\n  <li>Segundo paso</li>\n  <li>Tercer paso</li>\n</ol>\n\n<!-- Lista anidada -->\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>Node.js</li>\n      <li>Python</li>\n    </ul>\n  </li>\n</ul>\n```",
        
        "Enlaces: a, href, target, rel": "Los enlaces conectan páginas y recursos. <a> es la etiqueta de enlace. href especifica la URL de destino. target controla dónde se abre el enlace (_blank para nueva ventana). rel define la relación con el recurso enlazado. Los enlaces son fundamentales para la navegación web y SEO.\n\n**Ejemplos:**\n```html\n<!-- Enlace interno -->\n<a href=\"#seccion\">Ir a sección</a>\n\n<!-- Enlace externo -->\n<a href=\"https://www.ejemplo.com\" target=\"_blank\" rel=\"noopener\">\n  Sitio externo\n</a>\n\n<!-- Enlace con email -->\n<a href=\"mailto:contacto@ejemplo.com\">Enviar email</a>\n\n<!-- Enlace con teléfono -->\n<a href=\"tel:+1234567890\">Llamar</a>\n\n<!-- Enlace de descarga -->\n<a href=\"archivo.pdf\" download>Descargar PDF</a>\n\n<!-- Atributos importantes:\n- href: URL de destino\n- target=\"_blank\": Nueva ventana\n- rel=\"noopener\": Seguridad\n- download: Forzar descarga\n```",
        
        "Imágenes: img, src, alt, figure, figcaption": "Las imágenes enriquecen el contenido visual. <img> inserta imágenes con src (fuente) y alt (texto alternativo). <figure> agrupa imágenes con su descripción. <figcaption> proporciona leyenda para la imagen. El atributo alt es crucial para accesibilidad y SEO.\n\n**Ejemplos:**\n```html\n<!-- Imagen básica -->\n<img src=\"imagen.jpg\" alt=\"Descripción de la imagen\" width=\"300\" height=\"200\">\n\n<!-- Imagen con figure -->\n<figure>\n  <img src=\"diagrama.png\" alt=\"Diagrama de arquitectura web\">\n  <figcaption>Arquitectura de una aplicación web moderna</figcaption>\n</figure>\n\n<!-- Imagen responsiva -->\n<img src=\"imagen.jpg\" \n     alt=\"Paisaje montañoso\" \n     srcset=\"imagen-small.jpg 480w, imagen-large.jpg 800w\"\n     sizes=\"(max-width: 600px) 480px, 800px\">\n\n<!-- Atributos importantes:\n- src: Ruta de la imagen\n- alt: Texto alternativo (obligatorio)\n- width/height: Dimensiones\n- srcset: Imágenes responsivas\n```",
        
        "Metadatos: meta charset, viewport, description": "Los metadatos proporcionan información sobre la página. charset especifica la codificación de caracteres (UTF-8). viewport controla el comportamiento en dispositivos móviles. description es el resumen que aparece en resultados de búsqueda. Estos metadatos son esenciales para SEO y experiencia de usuario.\n\n**Ejemplos:**\n```html\n<head>\n  <!-- Codificación de caracteres -->\n  <meta charset='UTF-8'>\n  \n  <!-- Viewport para móviles -->\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  \n  <!-- Descripción para SEO -->\n  <meta name=\"description\" content=\"Aprende desarrollo web frontend con HTML5, CSS3 y JavaScript\">\n  \n  <!-- Palabras clave -->\n  <meta name=\"keywords\" content=\"HTML5, CSS3, JavaScript, desarrollo web\">\n  \n  <!-- Autor -->\n  <meta name=\"author\" content=\"Tu Nombre\">\n  \n  <!-- Open Graph para redes sociales -->\n  <meta property=\"og:title\" content=\"Curso de Desarrollo Web\">\n  <meta property=\"og:description\" content=\"Aprende desarrollo frontend\">\n  <meta property=\"og:image\" content=\"imagen-social.jpg\">\n</head>\n```",
        
        "Buenas prácticas de estructura HTML5": "Las buenas prácticas de HTML5 mejoran la accesibilidad, SEO y mantenibilidad. Usa elementos semánticos apropiados, mantén una jerarquía correcta de encabezados, incluye atributos alt en imágenes, usa metadatos completos, valida el código HTML, y sigue estándares web. Estas prácticas aseguran que tu código sea profesional y funcional.\n\n**Ejemplos:**\n```html\n<!-- ✅ BUENAS PRÁCTICAS -->\n<!DOCTYPE html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Título Descriptivo - Sitio Web</title>\n  <meta name=\"description\" content=\"Descripción clara y concisa\">\n</head>\n<body>\n  <header>\n    <h1>Título Principal</h1>\n    <nav aria-label=\"Navegación principal\">\n      <ul>\n        <li><a href=\"#inicio\">Inicio</a></li>\n        <li><a href=\"#sobre\">Sobre</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Sección Principal</h2>\n      <article>\n        <h3>Artículo</h3>\n        <p>Contenido del artículo...</p>\n        <img src=\"imagen.jpg\" alt=\"Descripción detallada de la imagen\">\n      </article>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Sitio Web</p>\n  </footer>\n</body>\n</html>\n\n<!-- Principios clave:\n- Elementos semánticos apropiados\n- Jerarquía correcta de encabezados\n- Atributos alt descriptivos\n- Metadatos completos\n- Accesibilidad (aria-label)\n- Validación HTML5\n```",
        
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
    title: "Taller HTML Guiado - Sitio Web Completo",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Integrar conocimientos de HTML5 de las sesiones anteriores",
      "Crear un sitio web informativo completo usando solo HTML5 nativo",
      "Implementar formularios con validación HTML5 nativa",
      "Desarrollar tablas semánticas y navegación accesible",
      "Aplicar mejores prácticas de accesibilidad y SEO básico"
    ],
    content: {
      theoretical: [
        "Integración de conocimientos HTML5 de sesiones anteriores",
        "Planificación y estructura de sitio web completo",
        "Navegación semántica y accesible",
        "Formularios HTML5 con validación nativa del navegador",
        "Tablas semánticas con estructura accesible",
        "Elementos semánticos HTML5 avanzados",
        "Accesibilidad web y atributos ARIA",
        "SEO básico y metadatos HTML5",
        "Validación de código HTML con herramientas W3C"
      ],
      theoreticalDetails: {
        "Integración de conocimientos HTML5 de sesiones anteriores": "Este taller integra todos los conceptos aprendidos en las sesiones 1-3: estructura básica HTML5, elementos semánticos, formularios avanzados, validaciones nativas, tablas semánticas y accesibilidad. Los estudiantes aplicarán estos conocimientos de manera práctica creando un sitio web completo usando únicamente HTML5 nativo, sin CSS ni JavaScript.\n\n**Conocimientos integrados:**\n- **Sesión 1**: Estructura básica, elementos semánticos básicos, metadatos\n- **Sesión 2**: Elementos semánticos avanzados, listas, enlaces, imágenes\n- **Sesión 3**: Formularios avanzados, validaciones nativas, tablas semánticas, accesibilidad\n\n**Ejemplo de integración:**\n```html\n<!DOCTYPE html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>TechSolutions - Desarrollo Web</title>\n  <meta name='description' content='Servicios de desarrollo web profesional'>\n</head>\n<body>\n  <header role='banner'>\n    <h1>TechSolutions</h1>\n    <nav role='navigation' aria-label='Navegación principal'>\n      <ul>\n        <li><a href='index.html' aria-current='page'>Inicio</a></li>\n        <li><a href='servicios.html'>Servicios</a></li>\n        <li><a href='contacto.html'>Contacto</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main role='main'>\n    <section id='hero'>\n      <h2>Transformamos Ideas en Soluciones Digitales</h2>\n      <p>Especialistas en desarrollo web moderno...</p>\n    </section>\n    \n    <section id='servicios'>\n      <h2>Nuestros Servicios</h2>\n      <article>\n        <h3>Desarrollo Web Frontend</h3>\n        <p>Interfaces modernas y responsivas...</p>\n        <ul>\n          <li>HTML5 semántico</li>\n          <li>CSS3 y frameworks</li>\n          <li>JavaScript ES6+</li>\n        </ul>\n      </article>\n    </section>\n  </main>\n  \n  <footer role='contentinfo'>\n    <p>&copy; 2024 TechSolutions</p>\n  </footer>\n</body>\n</html>\n```",
        
        "Organización de contenido en secciones lógicas": "La organización lógica del contenido mejora la comprensión y navegación. Agrupa información relacionada, usa elementos semánticos apropiados, mantén consistencia en la estructura y considera el flujo de lectura del usuario. Esto facilita la comprensión y mejora la experiencia del usuario.\n\n**Ejemplos:**\n```html\n<main>\n  <!-- Sección de introducción -->\n  <section id=\"introduccion\">\n    <h1>Bienvenido a Nuestra Empresa</h1>\n    <p>Somos especialistas en desarrollo web...</p>\n  </section>\n  \n  <!-- Sección de servicios -->\n  <section id=\"servicios\">\n    <h2>Nuestros Servicios</h2>\n    <article>\n      <h3>Desarrollo Web</h3>\n      <p>Creamos sitios web modernos...</p>\n    </article>\n    <article>\n      <h3>Diseño UX/UI</h3>\n      <p>Diseñamos experiencias de usuario...</p>\n    </article>\n  </section>\n  \n  <!-- Sección de equipo -->\n  <section id=\"equipo\">\n    <h2>Nuestro Equipo</h2>\n    <div class=\"equipo-grid\">\n      <article class=\"miembro\">\n        <h3>Juan Pérez</h3>\n        <p>Desarrollador Frontend</p>\n      </article>\n    </div>\n  </section>\n  \n  <!-- Sección de contacto -->\n  <section id=\"contacto\">\n    <h2>Contacto</h2>\n    <p>¿Tienes un proyecto en mente?</p>\n  </section>\n</main>\n\n<!-- Beneficios de organización lógica:\n- Mejor comprensión del contenido\n- Navegación más intuitiva\n- SEO mejorado\n- Mantenimiento más fácil\n```",
        
        "Navegación interna y externa": "La navegación conecta diferentes partes del sitio y recursos externos. La navegación interna usa enlaces relativos para mover entre páginas del mismo sitio. La navegación externa conecta con otros sitios web. Ambas deben ser claras, accesibles y seguir mejores prácticas de UX.\n\n**Ejemplos:**\n```html\n<!-- Navegación principal -->\n<nav aria-label=\"Navegación principal\">\n  <ul>\n    <li><a href=\"index.html\">Inicio</a></li>\n    <li><a href=\"servicios.html\">Servicios</a></li>\n    <li><a href=\"portafolio.html\">Portafolio</a></li>\n    <li><a href=\"contacto.html\">Contacto</a></li>\n  </ul>\n</nav>\n\n<!-- Navegación interna (enlaces a secciones) -->\n<nav aria-label=\"Navegación de secciones\">\n  <ul>\n    <li><a href=\"#servicios\">Servicios</a></li>\n    <li><a href=\"#equipo\">Equipo</a></li>\n    <li><a href=\"#contacto\">Contacto</a></li>\n  </ul>\n</nav>\n\n<!-- Navegación externa -->\n<aside>\n  <h3>Enlaces Útiles</h3>\n  <ul>\n    <li><a href=\"https://www.w3.org\" target=\"_blank\" rel=\"noopener\">W3C</a></li>\n    <li><a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener\">MDN</a></li>\n    <li><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub</a></li>\n  </ul>\n</aside>\n\n<!-- Breadcrumbs (migas de pan) -->\n<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"index.html\">Inicio</a></li>\n    <li><a href=\"servicios.html\">Servicios</a></li>\n    <li aria-current=\"page\">Desarrollo Web</li>\n  </ol>\n</nav>\n\n<!-- Atributos importantes:\n- target=\"_blank\": Nueva ventana\n- rel=\"noopener\": Seguridad\n- aria-label: Accesibilidad\n- aria-current: Página actual\n```",
        
        "Formularios de contacto y sus validaciones": "Los formularios de contacto son esenciales para la comunicación con usuarios. Deben ser intuitivos, accesibles y incluir validación tanto del lado cliente como servidor. Usa elementos semánticos apropiados y proporciona retroalimentación clara al usuario.\n\n**Ejemplos:**\n```html\n<form action=\"/contacto\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Información de Contacto</legend>\n    \n    <div class=\"form-group\">\n      <label for=\"nombre\">Nombre completo *</label>\n      <input type=\"text\" id=\"nombre\" name=\"nombre\" required \n             minlength=\"2\" maxlength=\"50\" \n             aria-describedby=\"nombre-help\">\n      <div id=\"nombre-help\" class=\"help-text\">Mínimo 2 caracteres</div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"email\">Correo electrónico *</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required\n             aria-describedby=\"email-help\">\n      <div id=\"email-help\" class=\"help-text\">Ingresa un email válido</div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"telefono\">Teléfono</label>\n      <input type=\"tel\" id=\"telefono\" name=\"telefono\"\n             pattern=\"[0-9]{10}\" title=\"10 dígitos\">\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"asunto\">Asunto *</label>\n      <select id=\"asunto\" name=\"asunto\" required>\n        <option value=\"\">Selecciona un asunto</option>\n        <option value=\"consulta\">Consulta general</option>\n        <option value=\"presupuesto\">Solicitar presupuesto</option>\n        <option value=\"soporte\">Soporte técnico</option>\n      </select>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"mensaje\">Mensaje *</label>\n      <textarea id=\"mensaje\" name=\"mensaje\" required\n                minlength=\"10\" maxlength=\"500\"\n                rows=\"5\" cols=\"50\"\n                aria-describedby=\"mensaje-help\"></textarea>\n      <div id=\"mensaje-help\" class=\"help-text\">Mínimo 10 caracteres</div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>\n        <input type=\"checkbox\" name=\"newsletter\" value=\"si\">\n        Suscribirme al boletín\n      </label>\n    </div>\n    \n    <button type=\"submit\">Enviar Mensaje</button>\n    <button type=\"reset\">Limpiar</button>\n  </fieldset>\n</form>\n\n<!-- Validación JavaScript -->\n<script>\nfunction validarFormulario(event) {\n  event.preventDefault();\n  \n  const nombre = document.getElementById('nombre').value;\n  const email = document.getElementById('email').value;\n  const mensaje = document.getElementById('mensaje').value;\n  \n  if (nombre.length < 2) {\n    alert('El nombre debe tener al menos 2 caracteres');\n    return false;\n  }\n  \n  if (!email.includes('@')) {\n    alert('Ingresa un email válido');\n    return false;\n  }\n  \n  if (mensaje.length < 10) {\n    alert('El mensaje debe tener al menos 10 caracteres');\n    return false;\n  }\n  \n  // Enviar formulario\n  this.submit();\n}\n</script>\n```",
        
        "Tablas de datos y su estructura semántica": "Las tablas organizan datos de manera estructurada y accesible. Usa elementos semánticos apropiados, incluye encabezados descriptivos, agrupa datos relacionados y considera la accesibilidad. Las tablas bien estructuradas mejoran la comprensión y usabilidad.\n\n**Ejemplos:**\n```html\n<table>\n  <caption>Precios de Servicios de Desarrollo Web</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Servicio</th>\n      <th scope=\"col\">Descripción</th>\n      <th scope=\"col\">Precio Base</th>\n      <th scope=\"col\">Tiempo Estimado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Sitio Web Básico</th>\n      <td>Hasta 5 páginas, diseño responsivo</td>\n      <td>$500</td>\n      <td>2-3 semanas</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sitio Web Avanzado</th>\n      <td>Hasta 15 páginas, funcionalidades dinámicas</td>\n      <td>$1,200</td>\n      <td>4-6 semanas</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">E-commerce</th>\n      <td>Tienda online completa con carrito</td>\n      <td>$2,500</td>\n      <td>8-12 semanas</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\" colspan=\"3\">Descuento por pago anticipado:</th>\n      <td>10%</td>\n    </tr>\n  </tfoot>\n</table>\n\n<!-- Tabla de horarios -->\n<table>\n  <caption>Horarios de Atención</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Día</th>\n      <th scope=\"col\">Horario</th>\n      <th scope=\"col\">Estado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Lunes - Viernes</th>\n      <td>9:00 AM - 6:00 PM</td>\n      <td>Abierto</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sábado</th>\n      <td>10:00 AM - 2:00 PM</td>\n      <td>Abierto</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Domingo</th>\n      <td>-</td>\n      <td>Cerrado</td>\n    </tr>\n  </tbody>\n</table>\n\n<!-- Atributos importantes:\n- caption: Título descriptivo\n- scope=\"col\": Encabezado de columna\n- scope=\"row\": Encabezado de fila\n- colspan: Combinar columnas\n- thead/tbody/tfoot: Estructura semántica\n```",
        
        "Accesibilidad en formularios y tablas": "La accesibilidad asegura que todos los usuarios puedan usar las aplicaciones. En formularios, usa labels apropiados, proporciona descripciones claras y maneja errores de manera accesible. En tablas, incluye encabezados descriptivos y usa elementos semánticos correctos.\n\n**Ejemplos:**\n```html\n<!-- Formulario accesible -->\n<form>\n  <fieldset>\n    <legend>Información Personal</legend>\n    \n    <div class=\"form-group\">\n      <label for=\"nombre\">Nombre completo *</label>\n      <input type=\"text\" id=\"nombre\" name=\"nombre\" required\n             aria-describedby=\"nombre-error nombre-help\"\n             aria-invalid=\"false\">\n      <div id=\"nombre-help\" class=\"help-text\">Ingresa tu nombre completo</div>\n      <div id=\"nombre-error\" class=\"error-text\" role=\"alert\" aria-live=\"polite\"></div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"email\">Correo electrónico *</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required\n             aria-describedby=\"email-error email-help\"\n             aria-invalid=\"false\">\n      <div id=\"email-help\" class=\"help-text\">Ingresa un email válido</div>\n      <div id=\"email-error\" class=\"error-text\" role=\"alert\" aria-live=\"polite\"></div>\n    </div>\n  </fieldset>\n</form>\n\n<!-- Tabla accesible -->\n<table>\n  <caption>Lista de Productos Disponibles</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\" id=\"producto\">Producto</th>\n      <th scope=\"col\" id=\"precio\">Precio</th>\n      <th scope=\"col\" id=\"stock\">Stock</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\" headers=\"producto\">Laptop</th>\n      <td headers=\"precio\">$1,200</td>\n      <td headers=\"stock\">15 unidades</td>\n    </tr>\n  </tbody>\n</table>\n\n<!-- Atributos de accesibilidad:\n- aria-describedby: Descripción adicional\n- aria-invalid: Estado de validación\n- aria-live: Actualizaciones dinámicas\n- role=\"alert\": Mensajes importantes\n- headers: Asociar celdas con encabezados\n```",
        
        "Optimización para motores de búsqueda (SEO básico)": "El SEO básico mejora la visibilidad en motores de búsqueda. Incluye metadatos apropiados, usa elementos semánticos, optimiza imágenes con alt text, crea URLs descriptivas y estructura el contenido jerárquicamente. Estas prácticas mejoran el ranking y la accesibilidad.\n\n**Ejemplos:**\n```html\n<head>\n  <!-- Metadatos básicos -->\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Desarrollo Web Profesional | Mi Empresa</title>\n  <meta name=\"description\" content=\"Servicios profesionales de desarrollo web, diseño UX/UI y consultoría técnica. Transformamos ideas en soluciones digitales.\">\n  <meta name=\"keywords\" content=\"desarrollo web, diseño UX, programación, sitios web\">\n  <meta name=\"author\" content=\"Mi Empresa\">\n  \n  <!-- Open Graph para redes sociales -->\n  <meta property=\"og:title\" content=\"Desarrollo Web Profesional\">\n  <meta property=\"og:description\" content=\"Servicios profesionales de desarrollo web\">\n  <meta property=\"og:image\" content=\"https://miempresa.com/imagen-social.jpg\">\n  <meta property=\"og:url\" content=\"https://miempresa.com\">\n  <meta property=\"og:type\" content=\"website\">\n  \n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"Desarrollo Web Profesional\">\n  <meta name=\"twitter:description\" content=\"Servicios profesionales de desarrollo web\">\n  <meta name=\"twitter:image\" content=\"https://miempresa.com/imagen-social.jpg\">\n</head>\n\n<body>\n  <!-- Estructura semántica -->\n  <header>\n    <h1>Mi Empresa - Desarrollo Web</h1>\n    <nav>\n      <ul>\n        <li><a href=\"servicios.html\">Servicios</a></li>\n        <li><a href=\"portafolio.html\">Portafolio</a></li>\n        <li><a href=\"contacto.html\">Contacto</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Servicios de Desarrollo Web</h2>\n      <article>\n        <h3>Desarrollo Frontend</h3>\n        <p>Creamos interfaces de usuario modernas...</p>\n        <img src=\"frontend.jpg\" alt=\"Desarrollador trabajando en interfaz de usuario moderna\">\n      </article>\n    </section>\n  </main>\n</body>\n\n<!-- Mejores prácticas SEO:\n- Títulos descriptivos y únicos\n- Meta descriptions atractivas\n- Estructura jerárquica de encabezados\n- Alt text descriptivo en imágenes\n- URLs semánticas\n- Contenido de calidad\n```",
        
        "Validación de código HTML": "La validación asegura que el código HTML cumple con estándares web. Usa herramientas como W3C Validator, corrige errores de sintaxis, verifica accesibilidad y asegura compatibilidad entre navegadores. El código válido mejora la funcionalidad y mantenibilidad.\n\n**Ejemplos:**\n```html\n<!-- ✅ Código HTML válido -->\n<!DOCTYPE html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Página Válida</title>\n</head>\n<body>\n  <header>\n    <h1>Título Principal</h1>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Sección Principal</h2>\n      <p>Contenido de la sección...</p>\n      \n      <article>\n        <h3>Artículo</h3>\n        <p>Contenido del artículo...</p>\n        <img src=\"imagen.jpg\" alt=\"Descripción de la imagen\">\n      </article>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Mi Sitio</p>\n  </footer>\n</body>\n</html>\n\n<!-- ❌ Errores comunes a evitar:\n- Etiquetas no cerradas\n- Atributos sin comillas\n- Elementos anidados incorrectamente\n- DOCTYPE incorrecto\n- Metadatos faltantes\n\n<!-- Herramientas de validación:\n- W3C Markup Validator\n- WAVE (accesibilidad)\n- Lighthouse (rendimiento)\n- Browser DevTools\n```"
      },
      practical: [
        "Taller guiado de 3 horas con cronograma estructurado",
        "Crear sitio web completo para empresa ficticia TechSolutions",
        "Implementar 4 páginas: inicio, servicios, contacto, portafolio",
        "Desarrollar formularios con validación HTML5 nativa",
        "Crear tablas semánticas con estructura accesible",
        "Aplicar elementos semánticos HTML5 en todo el sitio",
        "Implementar navegación accesible con breadcrumbs",
        "Validar código HTML con W3C Markup Validator"
      ]
    },
    activities: [
      {
        title: "Bloque 0: Introducción y Planificación",
        duration: "15 min",
        description: "Presentación del proyecto TechSolutions, planificación colaborativa de la estructura del sitio y establecimiento de objetivos del taller guiado"
      },
      {
        title: "Bloque 1: Estructura y Navegación",
        duration: "45 min",
        description: "Crear estructura base HTML5, implementar sistema de navegación accesible y desarrollar páginas secundarias con breadcrumbs"
      },
      {
        title: "Descanso",
        duration: "15 min",
        description: "Pausa para descanso y resolución de dudas individuales"
      },
      {
        title: "Bloque 2: Formularios y Validación",
        duration: "45 min",
        description: "Desarrollar formulario de contacto con validación HTML5 nativa, implementar diferentes tipos de input y elementos de formulario avanzados"
      },
      {
        title: "Descanso",
        duration: "15 min",
        description: "Pausa para descanso y revisión del progreso"
      },
      {
        title: "Bloque 3: Tablas y Contenido",
        duration: "30 min",
        description: "Crear tablas semánticas de precios, organizar contenido con elementos HTML5 y implementar estructura accesible"
      },
      {
        title: "Bloque 4: Revisión y Validación",
        duration: "15 min",
        description: "Validar código HTML con W3C Validator, revisar accesibilidad con WAVE y hacer ajustes finales"
      }
    ],
    homework: [
      "Completar el sitio web TechSolutions con todas las páginas implementadas",
      "Mejorar el formulario de contacto con validaciones adicionales",
      "Agregar más contenido a las tablas de precios y servicios",
      "Implementar página de portafolio con galería de proyectos",
      "Validar todo el código HTML con W3C Markup Validator",
      "Optimizar metadatos SEO en todas las páginas",
      "Probar accesibilidad con WAVE Web Accessibility Evaluator",
      "Documentar el proceso de desarrollo en README.md"
    ],
    materials: [
      "Editor de código (VS Code con Live Server)",
      "Navegador web con DevTools habilitado",
      "W3C Markup Validator (validator.w3.org)",
      "WAVE Web Accessibility Evaluator (wave.webaim.org)",
      "Guía del taller HTML completo (TALLER_HTML_COMPLETO.md)",
      "Cronograma del taller con tiempos específicos",
      "Documentación MDN HTML5",
      "Plantilla de estructura para TechSolutions"
    ],
    exercises: [
      {
        title: "Taller HTML Guiado - Sitio Web TechSolutions",
        description: "Taller guiado de 3 horas para crear un sitio web completo para la empresa ficticia TechSolutions usando únicamente HTML5 nativo, integrando todos los conocimientos de las sesiones anteriores.",
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
        "Unidades CSS: px, em, rem, %",
        "Cascada y especificidad en CSS"
      ],
      theoreticalDetails: {
        "Sintaxis CSS: reglas, selectores, propiedades y valores": "CSS (Cascading Style Sheets) usa una sintaxis específica para aplicar estilos a elementos HTML. Una regla CSS consta de un selector (qué elemento estilizar), propiedades (qué aspecto cambiar) y valores (cómo cambiarlo). La sintaxis básica es: selector { propiedad: valor; }. Las reglas se pueden agrupar y organizar para mantener código limpio y mantenible.\n\n**Ejemplos:**\n```css\n/* Sintaxis básica de CSS */\nh1 {\n  color: blue;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n/* Múltiples propiedades */\n.contenedor {\n  background-color: #f0f0f0;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 10px auto;\n  width: 80%;\n}\n\n/* Reglas agrupadas */\nh1, h2, h3 {\n  font-family: Arial, sans-serif;\n  color: #333;\n}\n\n/* Comentarios en CSS */\n/* Este es un comentario CSS */\n\n/* Estructura de una regla CSS:\nselector {\n  propiedad1: valor1;\n  propiedad2: valor2;\n  propiedad3: valor3;\n}\n```",
        
        "Selectores básicos: elemento, clase (.class), ID (#id)": "Los selectores CSS determinan qué elementos HTML se estilizarán. Los selectores básicos incluyen: elemento (nombre de etiqueta), clase (.nombre-clase), e ID (#nombre-id). Cada tipo tiene diferentes niveles de especificidad y casos de uso. Las clases son reutilizables, los IDs son únicos, y los selectores de elemento aplican estilos a todas las instancias de esa etiqueta.\n\n**Ejemplos:**\n```css\n/* Selector de elemento */\np {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 15px;\n}\n\n/* Selector de clase */\n.destacado {\n  background-color: yellow;\n  padding: 10px;\n  border-left: 4px solid orange;\n}\n\n/* Selector de ID */\n#encabezado-principal {\n  font-size: 32px;\n  color: #2c3e50;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n/* Selectores combinados */\np.destacado {\n  font-weight: bold;\n  color: #e74c3c;\n}\n\n/* Selector descendiente */\n.contenedor p {\n  margin-bottom: 10px;\n}\n\n/* Selector hijo directo */\n.menu > li {\n  display: inline-block;\n  margin-right: 20px;\n}\n\n/* Selector de atributo */\ninput[type=\"email\"] {\n  border: 2px solid #3498db;\n  border-radius: 4px;\n}\n\n/* Especificidad:\n- ID: 100 puntos\n- Clase: 10 puntos\n- Elemento: 1 punto\n```",
        
        "Modelo de caja: content, padding, border, margin": "El modelo de caja CSS define cómo se calcula el tamaño y espaciado de los elementos. Consta de cuatro partes: content (contenido), padding (espaciado interno), border (borde), y margin (espaciado externo). Comprender este modelo es fundamental para el diseño web y el control preciso del layout.\n\n**Ejemplos:**\n```css\n/* Modelo de caja básico */\n.caja {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  background-color: #f9f9f9;\n}\n\n/* Box-sizing: border-box */\n.caja-border-box {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  box-sizing: border-box; /* Incluye padding y border en el width */\n}\n\n/* Padding individual */\n.elemento {\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  padding-left: 25px;\n  /* Equivale a: padding: 10px 20px 15px 25px; */\n}\n\n/* Margin colapsado */\n.seccion {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  /* Los margins verticales se colapsan */\n}\n\n/* Border estilos */\n.borde-estilizado {\n  border-width: 3px;\n  border-style: dashed;\n  border-color: #e74c3c;\n  /* Equivale a: border: 3px dashed #e74c3c; */\n}\n\n/* Cálculo del tamaño total:\n- content-box: width + padding + border + margin\n- border-box: width (incluye padding y border) + margin\n```",
        
        "Colores: nombres, hexadecimal, RGB, RGBA": "CSS ofrece múltiples formas de especificar colores. Los nombres de colores son palabras clave predefinidas. Los valores hexadecimales usan códigos de 6 dígitos. RGB especifica valores de rojo, verde y azul. RGBA añade transparencia (alpha). Cada método tiene sus ventajas y casos de uso específicos.\n\n**Ejemplos:**\n```css\n/* Nombres de colores */\n.titulo {\n  color: red;\n  background-color: lightblue;\n}\n\n/* Colores hexadecimales */\n.encabezado {\n  color: #ffffff;\n  background-color: #2c3e50;\n}\n\n/* RGB */\n.texto {\n  color: rgb(52, 73, 94);\n  background-color: rgb(236, 240, 241);\n}\n\n/* RGBA con transparencia */\n.overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: rgba(255, 255, 255, 0.9);\n}\n\n/* HSL (Hue, Saturation, Lightness) */\n.colorido {\n  color: hsl(200, 50%, 50%);\n  background-color: hsl(120, 70%, 80%);\n}\n\n/* HSLA con transparencia */\n.transparente {\n  background-color: hsla(300, 60%, 70%, 0.3);\n}\n\n/* Variables CSS para colores */\n:root {\n  --color-primario: #3498db;\n  --color-secundario: #e74c3c;\n  --color-fondo: #ecf0f1;\n}\n\n.boton {\n  background-color: var(--color-primario);\n  color: white;\n}\n\n/* Paleta de colores común:\n- Primario: #3498db (azul)\n- Secundario: #e74c3c (rojo)\n- Éxito: #27ae60 (verde)\n- Advertencia: #f39c12 (naranja)\n- Peligro: #e74c3c (rojo)\n- Info: #3498db (azul)\n```",
        
        "Tipografías: font-family, font-size, font-weight, line-height": "Las propiedades de tipografía controlan la apariencia del texto. font-family especifica la fuente, font-size controla el tamaño, font-weight define el grosor, y line-height establece el espaciado entre líneas. Estas propiedades son fundamentales para la legibilidad y el diseño visual.\n\n**Ejemplos:**\n```css\n/* Familia de fuentes */\n.titulo {\n  font-family: 'Arial', 'Helvetica', sans-serif;\n}\n\n/* Tamaño de fuente */\n.texto-grande {\n  font-size: 24px;\n}\n\n.texto-mediano {\n  font-size: 16px;\n}\n\n.texto-pequeno {\n  font-size: 12px;\n}\n\n/* Peso de fuente */\n.normal {\n  font-weight: normal; /* 400 */\n}\n\n.negrita {\n  font-weight: bold; /* 700 */\n}\n\n.extra-negrita {\n  font-weight: 900;\n}\n\n/* Altura de línea */\n.parrafo {\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n/* Propiedades combinadas */\n.encabezado {\n  font-family: 'Georgia', serif;\n  font-size: 28px;\n  font-weight: bold;\n  line-height: 1.2;\n  color: #2c3e50;\n}\n\n/* Fuentes web (Google Fonts) */\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\n\n.moderno {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n}\n\n/* Estilos de texto adicionales */\n.texto-estilizado {\n  font-style: italic;\n  text-decoration: underline;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/* Mejores prácticas:\n- Usar fuentes web para mejor rendimiento\n- Mantener legibilidad con line-height adecuado\n- Usar fallbacks para fuentes\n- Considerar accesibilidad\n```",
        
        "Espaciado: margin, padding, width, height": "Las propiedades de espaciado controlan el tamaño y la distribución de elementos. margin crea espacio fuera del elemento, padding crea espacio dentro, width establece el ancho, y height define la altura. Estas propiedades son esenciales para el layout y la composición visual.\n\n**Ejemplos:**\n```css\n/* Espaciado básico */\n.contenedor {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n/* Margin individual */\n.elemento {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 15px;\n  margin-left: 25px;\n  /* Equivale a: margin: 10px 20px 15px 25px; */\n}\n\n/* Padding uniforme */\n.caja {\n  padding: 20px;\n  /* padding: 20px en todos los lados */\n}\n\n/* Dimensiones específicas */\n.imagen {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n}\n\n/* Espaciado uniforme */\n.seccion {\n  padding: 20px;\n  margin-bottom: 30px;\n}\n\n/* Centrado horizontal */\n.centrado {\n  width: 50%;\n  margin: 0 auto;\n}\n\n/* Espaciado negativo */\n.superpuesto {\n  margin-top: -10px;\n  position: relative;\n  z-index: 1;\n}\n\n/* Box-sizing para control preciso */\n.caja-precisa {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid #333;\n  box-sizing: border-box;\n  /* El tamaño total será exactamente 200x100px */\n}\n\n/* Unidades de espaciado:\n- px: Píxeles fijos\n- em: Relativo al font-size del elemento\n- rem: Relativo al font-size del root\n- %: Porcentaje del elemento padre\n```",
        
        "Unidades CSS: px, em, rem, %": "CSS ofrece diferentes unidades para especificar tamaños y distancias. px son píxeles absolutos, em es relativo al font-size del elemento, rem es relativo al font-size del root, y % es porcentaje del elemento padre. Cada unidad tiene casos de uso específicos y ventajas.\n\n**Ejemplos:**\n```css\n/* Píxeles (absolutos) */\n.fijo {\n  width: 300px;\n  height: 200px;\n  font-size: 16px;\n}\n\n/* Em (relativo al font-size del elemento) */\n.relativo-em {\n  font-size: 16px;\n  padding: 1em; /* 16px */\n  margin: 0.5em; /* 8px */\n}\n\n/* Rem (relativo al font-size del root) */\nhtml {\n  font-size: 16px;\n}\n\n.relativo-rem {\n  font-size: 1.5rem; /* 24px */\n  padding: 1rem; /* 16px */\n  margin: 0.5rem; /* 8px */\n}\n\n/* Porcentajes */\n.contenedor {\n  width: 100%;\n  max-width: 1200px;\n}\n\n.columna {\n  width: 50%;\n  display: inline-block;\n}\n\n/* Unidades combinadas */\n.elemento {\n  width: 80%;\n  max-width: 600px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n/* Tamaños de fuente con diferentes unidades */\n.titulo {\n  font-size: 2rem; /* 32px si root es 16px */\n}\n\n.subtitulo {\n  font-size: 1.5em; /* 1.5 veces el font-size del elemento padre */\n}\n\n.texto {\n  font-size: 16px; /* Tamaño fijo */\n}\n\n/* Comparación de unidades:\n- px: Fijo, no escalable\n- em: Escalable con el elemento\n- rem: Escalable con el root\n- %: Relativo al padre\n```",
        
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
        title: "Sintaxis CSS y selectores básicos",
        duration: "45 min",
        description: "Aplicar estilos básicos a elementos HTML usando selectores de elemento, clase e ID"
      },
      {
        title: "Modelo de caja y espaciado",
        duration: "45 min",
        description: "Implementar padding, margin, border y dimensiones en elementos HTML"
      },
      {
        title: "Colores y tipografías",
        duration: "30 min",
        description: "Aplicar colores, fuentes y propiedades de texto a elementos HTML"
      }
    ],
    homework: [
      "Estilizar la página web TechSolutions desarrollada en la sesión 4",
      "Crear esquema de colores consistente para todo el sitio",
      "Implementar tipografías y espaciado uniforme",
      "Aplicar modelo de caja a todos los elementos del sitio"
    ],
    materials: [
      "Editor de código (VS Code con Live Server)",
      "Navegador web con DevTools habilitado",
      "Sitio web TechSolutions de la sesión 4",
      "Documentación MDN CSS3",
      "Herramientas de validación CSS (W3C CSS Validator)"
    ],
    exercises: [
      {
        title: "Estilizar página TechSolutions",
        description: "Aplica estilos CSS3 básicos a la página principal de TechSolutions desarrollada en la sesión 4.",
        code: `/* Ejercicio 1: Estilos básicos para TechSolutions
Aplica los siguientes estilos a la página index.html:

1. Estilizar el header con fondo azul y texto blanco
2. Centrar la navegación
3. Aplicar espaciado uniforme a las secciones
4. Estilizar los títulos con diferentes tamaños
5. Crear esquema de colores consistente
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Estilos básicos para TechSolutions */

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
}

/* Header */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

/* Navegación */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}

/* Contenido principal */
main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Secciones */
section {
    margin-bottom: 3rem;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Títulos */
h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

h2 {
    color: #34495e;
    font-size: 2rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
}

h3 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
}

/* Párrafos */
p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

/* Listas */
ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
}

li {
    margin-bottom: 0.5rem;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
}`
      },
      {
        title: "Modelo de caja y espaciado",
        description: "Implementa el modelo de caja CSS en elementos específicos del sitio TechSolutions.",
        code: `/* Ejercicio 2: Modelo de caja
Aplica el modelo de caja a los siguientes elementos:

1. Crear cajas con padding, margin y border
2. Usar diferentes unidades (px, em, rem)
3. Implementar box-sizing: border-box
4. Crear espaciado uniforme entre elementos
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Modelo de caja */

/* Configuración global del modelo de caja */
* {
    box-sizing: border-box;
}

/* Contenedor principal */
.contenedor {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Cajas con modelo de caja completo */
.caja {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 20px;
    border: 3px solid #3498db;
    background-color: #ecf0f1;
    border-radius: 8px;
}

/* Ejemplo con diferentes unidades */
.caja-em {
    width: 20em;
    padding: 1em;
    margin: 0.5em;
    border: 0.2em solid #e74c3c;
}

.caja-rem {
    width: 20rem;
    padding: 1rem;
    margin: 0.5rem;
    border: 0.2rem solid #27ae60;
}

/* Espaciado uniforme */
.seccion {
    padding: 2rem;
    margin-bottom: 2rem;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
}

/* Padding individual */
.elemento {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 25px;
    /* Equivale a: padding: 10px 20px 15px 25px; */
}

/* Margin colapsado */
.parrafo {
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: #f8f9fa;
    border-left: 4px solid #3498db;
}`
      },
      {
        title: "Colores y tipografías",
        description: "Crea un esquema de colores y tipografías consistente para el sitio TechSolutions.",
        code: `/* Ejercicio 3: Colores y tipografías
Crea un esquema de colores y tipografías que incluya:

1. Paleta de colores consistente (primario, secundario, acentos)
2. Tipografías para diferentes elementos (títulos, párrafos, enlaces)
3. Uso de diferentes formatos de color (hex, rgb, rgba)
4. Jerarquía tipográfica clara
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Colores y tipografías */

/* Paleta de colores */
:root {
    /* Colores primarios */
    --color-primario: #2c3e50;
    --color-secundario: #3498db;
    --color-acento: #e74c3c;
    
    /* Colores neutros */
    --color-fondo: #f8f9fa;
    --color-texto: #2c3e50;
    --color-texto-claro: #7f8c8d;
    --color-borde: #bdc3c7;
    
    /* Colores de estado */
    --color-exito: #27ae60;
    --color-advertencia: #f39c12;
    --color-error: #e74c3c;
}

/* Tipografías */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

body {
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-texto);
    background-color: var(--color-fondo);
}

/* Jerarquía tipográfica */
h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primario);
    margin-bottom: 1rem;
}

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-primario);
    margin-bottom: 0.8rem;
}

h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-secundario);
    margin-bottom: 0.6rem;
}

/* Párrafos */
p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 1rem;
}

/* Enlaces */
a {
    color: var(--color-secundario);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--color-acento);
    text-decoration: underline;
}

/* Botones */
.boton {
    background-color: var(--color-secundario);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.boton:hover {
    background-color: var(--color-primario);
}

/* Elementos destacados */
.destacado {
    background-color: rgba(52, 152, 219, 0.1);
    border-left: 4px solid var(--color-secundario);
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0 5px 5px 0;
}

/* Texto en diferentes colores */
.texto-primario {
    color: var(--color-primario);
}

.texto-secundario {
    color: var(--color-secundario);
}

.texto-acento {
    color: var(--color-acento);
}

.texto-claro {
    color: var(--color-texto-claro);
}`
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
        title: "Layout principal con CSS Grid",
        duration: "60 min",
        description: "Crear la estructura principal de una página web usando CSS Grid con header, main, sidebar y footer"
      },
      {
        title: "Componentes con Flexbox",
        duration: "60 min",
        description: "Implementar navegación, tarjetas y formularios usando Flexbox para distribución interna"
      },
      {
        title: "Diseño responsive",
        duration: "60 min",
        description: "Hacer el layout adaptable a diferentes dispositivos usando media queries y breakpoints"
      }
    ],
    homework: [
      "Crear un sitio web completo con layout responsive usando Grid y Flexbox",
      "Implementar navegación adaptable con menú hamburguesa para móviles",
      "Desarrollar un sistema de tarjetas de productos con layout flexible",
      "Optimizar imágenes y contenido para diferentes dispositivos"
    ],
    materials: [
      "Editor de código (VS Code con Live Server)",
      "Navegador web con DevTools habilitado",
      "Plantilla HTML base para el proyecto",
      "Imágenes de ejemplo para el layout",
      "Documentación MDN CSS Grid y Flexbox",
      "Herramientas de validación CSS (W3C CSS Validator)"
    ],
    exercises: [
      {
        title: "Layout Principal con CSS Grid",
        description: "Crea la estructura principal de una página web usando CSS Grid con header, main, sidebar y footer.",
        code: `/* Ejercicio 1: Layout Principal con CSS Grid
Crea un layout completo usando CSS Grid que incluya:

1. Header que ocupe todo el ancho
2. Sidebar de 250px de ancho
3. Main content que ocupe el resto del espacio
4. Footer que ocupe todo el ancho
5. Gap de 1rem entre elementos
6. Altura mínima de 100vh
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Layout Principal con CSS Grid */

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Layout principal con CSS Grid */
.layout-principal {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

/* Header */
.header {
    grid-area: header;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.navegacion {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.navegacion a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.navegacion a:hover {
    color: #3498db;
}

/* Sidebar */
.sidebar {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    overflow-y: auto;
}

.sidebar h3 {
    margin-bottom: 1rem;
    color: #3498db;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    margin-bottom: 0.5rem;
}

.sidebar a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.sidebar a:hover {
    color: #3498db;
}

/* Main content */
.main {
    grid-area: main;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow-y: auto;
}

.main h1 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.main h2 {
    color: #34495e;
    margin: 2rem 0 1rem 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
}

/* Footer */
.footer {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}`
      },
      {
        title: "Componentes con Flexbox",
        description: "Implementa navegación, tarjetas y formularios usando Flexbox para distribución interna.",
        code: `/* Ejercicio 2: Componentes con Flexbox
Crea los siguientes componentes usando Flexbox:

1. Navegación horizontal con logo a la izquierda y menú a la derecha
2. Tarjetas de productos en fila con información centrada
3. Formulario con campos en columna y botones alineados
4. Botón con icono y texto centrados
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Componentes con Flexbox */

/* Navegación con Flexbox */
.navegacion-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #3498db;
    color: white;
}

.logo-flex {
    font-size: 1.5rem;
    font-weight: bold;
}

.menu-flex {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.menu-flex a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.3s;
}

.menu-flex a:hover {
    background: rgba(255,255,255,0.1);
}

/* Tarjetas con Flexbox */
.contenedor-tarjetas {
    display: flex;
    gap: 1rem;
    padding: 2rem;
    flex-wrap: wrap;
    justify-content: center;
}

.tarjeta {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s;
    min-width: 250px;
    max-width: 300px;
}

.tarjeta:hover {
    transform: translateY(-5px);
}

.tarjeta-imagen {
    width: 100%;
    height: 200px;
    background: #ecf0f1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
}

.tarjeta-contenido {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.tarjeta-titulo {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.tarjeta-descripcion {
    color: #7f8c8d;
    margin-bottom: 1rem;
    flex-grow: 1;
}

.tarjeta-precio {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e74c3c;
    margin-bottom: 1rem;
}

.tarjeta-boton {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.tarjeta-boton:hover {
    background: #2980b9;
}

/* Formulario con Flexbox */
.formulario {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formulario h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
}

.grupo-formulario {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.grupo-formulario label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #34495e;
}

.grupo-formulario input,
.grupo-formulario textarea {
    padding: 0.75rem;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.grupo-formulario input:focus,
.grupo-formulario textarea:focus {
    outline: none;
    border-color: #3498db;
}

.botones-formulario {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.boton {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s;
}

.boton-primario {
    background: #3498db;
    color: white;
}

.boton-primario:hover {
    background: #2980b9;
}

.boton-secundario {
    background: #95a5a6;
    color: white;
}

.boton-secundario:hover {
    background: #7f8c8d;
}`
      },
      {
        title: "Diseño Responsive",
        description: "Hacer el layout adaptable a diferentes dispositivos usando media queries y breakpoints.",
        code: `/* Ejercicio 3: Diseño Responsive
Haz el layout responsive con los siguientes breakpoints:

1. Mobile (hasta 767px): Layout en columna, menú hamburguesa
2. Tablet (768px a 1023px): Layout en 2 columnas
3. Desktop (1024px+): Layout completo con sidebar

Usa el layout del ejercicio 1 como base
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Diseño Responsive */

/* Layout base (desktop) */
.layout-responsive {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

.header-responsive {
    grid-area: header;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.logo-responsive {
    font-size: 1.5rem;
    font-weight: bold;
}

.navegacion-responsive {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.navegacion-responsive a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.navegacion-responsive a:hover {
    color: #3498db;
}

/* Menú hamburguesa (oculto por defecto) */
.menu-hamburguesa {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
}

.linea-hamburguesa {
    width: 25px;
    height: 3px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
}

.sidebar-responsive {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    overflow-y: auto;
}

.main-responsive {
    grid-area: main;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow-y: auto;
}

.footer-responsive {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Tablet: 768px a 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
    .layout-responsive {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "footer";
        gap: 1rem;
    }
    
    .sidebar-responsive {
        display: none;
    }
    
    .main-responsive {
        padding: 1.5rem;
    }
    
    .navegacion-responsive {
        gap: 1.5rem;
    }
}

/* Mobile: hasta 767px */
@media (max-width: 767px) {
    .layout-responsive {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "footer";
        gap: 0.5rem;
        padding: 0.5rem;
    }
    
    .header-responsive {
        padding: 1rem;
    }
    
    .logo-responsive {
        font-size: 1.2rem;
    }
    
    /* Mostrar menú hamburguesa */
    .menu-hamburguesa {
        display: flex;
    }
    
    /* Ocultar navegación desktop */
    .navegacion-responsive {
        display: none;
    }
    
    .sidebar-responsive {
        display: none;
    }
    
    .main-responsive {
        padding: 1rem;
    }
    
    .footer-responsive {
        padding: 1rem;
        font-size: 0.9rem;
    }
}

/* Navegación móvil expandible */
.navegacion-movil {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2c3e50;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navegacion-movil.activo {
    display: flex;
}

.navegacion-movil a {
    color: white;
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    transition: color 0.3s;
}

.navegacion-movil a:hover {
    color: #3498db;
}

.navegacion-movil a:last-child {
    border-bottom: none;
}

/* Contenedor de tarjetas responsive */
.contenedor-tarjetas-responsive {
    display: grid;
    gap: 1rem;
    padding: 2rem;
}

/* Desktop: 3 columnas */
@media (min-width: 1024px) {
    .contenedor-tarjetas-responsive {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Tablet: 2 columnas */
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-tarjetas-responsive {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile: 1 columna */
@media (max-width: 767px) {
    .contenedor-tarjetas-responsive {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
}`
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
        title: "Estructura base con CSS Grid",
        duration: "60 min",
        description: "Crear la estructura principal de una página web usando CSS Grid con header, main, sidebar y footer"
      },
      {
        title: "Componentes con Flexbox",
        duration: "60 min",
        description: "Implementar navegación, tarjetas y formularios usando Flexbox para distribución interna"
      },
      {
        title: "Diseño responsive",
        duration: "60 min",
        description: "Hacer el layout adaptable a diferentes dispositivos usando media queries y breakpoints"
      }
    ],
    homework: [
      "Crear un sitio web completo con layout responsive usando Grid y Flexbox",
      "Implementar navegación adaptable con menú hamburguesa para móviles",
      "Desarrollar un sistema de tarjetas de productos con layout flexible",
      "Optimizar imágenes y contenido para diferentes dispositivos"
    ],
    materials: [
      "Editor de código (VS Code con Live Server)",
      "Navegador web con DevTools habilitado",
      "Plantilla HTML base para el proyecto",
      "Imágenes de ejemplo para el layout",
      "Documentación MDN CSS Grid y Flexbox",
      "Herramientas de validación CSS (W3C CSS Validator)"
    ],
    exercises: [
      {
        title: "Layout Principal con CSS Grid",
        description: "Crea la estructura principal de una página web usando CSS Grid con header, main, sidebar y footer.",
        code: `/* Ejercicio 1: Layout Principal con CSS Grid
Crea un layout completo usando CSS Grid que incluya:

1. Header que ocupe todo el ancho
2. Sidebar de 250px de ancho
3. Main content que ocupe el resto del espacio
4. Footer que ocupe todo el ancho
5. Gap de 1rem entre elementos
6. Altura mínima de 100vh
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Layout Principal con CSS Grid */

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Layout principal con CSS Grid */
.layout-principal {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

/* Header */
.header {
    grid-area: header;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.navegacion {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.navegacion a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.navegacion a:hover {
    color: #3498db;
}

/* Sidebar */
.sidebar {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    overflow-y: auto;
}

.sidebar h3 {
    margin-bottom: 1rem;
    color: #3498db;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    margin-bottom: 0.5rem;
}

.sidebar a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.sidebar a:hover {
    color: #3498db;
}

/* Main content */
.main {
    grid-area: main;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow-y: auto;
}

.main h1 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.main h2 {
    color: #34495e;
    margin: 2rem 0 1rem 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
}

/* Footer */
.footer {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}`
      },
      {
        title: "Componentes con Flexbox",
        description: "Implementa navegación, tarjetas y formularios usando Flexbox para distribución interna.",
        code: `/* Ejercicio 2: Componentes con Flexbox
Crea los siguientes componentes usando Flexbox:

1. Navegación horizontal con logo a la izquierda y menú a la derecha
2. Tarjetas de productos en fila con información centrada
3. Formulario con campos en columna y botones alineados
4. Botón con icono y texto centrados
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Componentes con Flexbox */

/* Navegación con Flexbox */
.navegacion-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #3498db;
    color: white;
}

.logo-flex {
    font-size: 1.5rem;
    font-weight: bold;
}

.menu-flex {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.menu-flex a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.3s;
}

.menu-flex a:hover {
    background: rgba(255,255,255,0.1);
}

/* Tarjetas con Flexbox */
.contenedor-tarjetas {
    display: flex;
    gap: 1rem;
    padding: 2rem;
    flex-wrap: wrap;
    justify-content: center;
}

.tarjeta {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s;
    min-width: 250px;
    max-width: 300px;
}

.tarjeta:hover {
    transform: translateY(-5px);
}

.tarjeta-imagen {
    width: 100%;
    height: 200px;
    background: #ecf0f1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
}

.tarjeta-contenido {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.tarjeta-titulo {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.tarjeta-descripcion {
    color: #7f8c8d;
    margin-bottom: 1rem;
    flex-grow: 1;
}

.tarjeta-precio {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e74c3c;
    margin-bottom: 1rem;
}

.tarjeta-boton {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.tarjeta-boton:hover {
    background: #2980b9;
}

/* Formulario con Flexbox */
.formulario {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formulario h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
}

.grupo-formulario {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.grupo-formulario label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #34495e;
}

.grupo-formulario input,
.grupo-formulario textarea {
    padding: 0.75rem;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.grupo-formulario input:focus,
.grupo-formulario textarea:focus {
    outline: none;
    border-color: #3498db;
}

.botones-formulario {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.boton {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s;
}

.boton-primario {
    background: #3498db;
    color: white;
}

.boton-primario:hover {
    background: #2980b9;
}

.boton-secundario {
    background: #95a5a6;
    color: white;
}

.boton-secundario:hover {
    background: #7f8c8d;
}`
      },
      {
        title: "Diseño Responsive",
        description: "Hacer el layout adaptable a diferentes dispositivos usando media queries y breakpoints.",
        code: `/* Ejercicio 3: Diseño Responsive
Haz el layout responsive con los siguientes breakpoints:

1. Mobile (hasta 767px): Layout en columna, menú hamburguesa
2. Tablet (768px a 1023px): Layout en 2 columnas
3. Desktop (1024px+): Layout completo con sidebar

Usa el layout del ejercicio 1 como base
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Diseño Responsive */

/* Layout base (desktop) */
.layout-responsive {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

.header-responsive {
    grid-area: header;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.logo-responsive {
    font-size: 1.5rem;
    font-weight: bold;
}

.navegacion-responsive {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.navegacion-responsive a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.navegacion-responsive a:hover {
    color: #3498db;
}

/* Menú hamburguesa (oculto por defecto) */
.menu-hamburguesa {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
}

.linea-hamburguesa {
    width: 25px;
    height: 3px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
}

.sidebar-responsive {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    overflow-y: auto;
}

.main-responsive {
    grid-area: main;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow-y: auto;
}

.footer-responsive {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Tablet: 768px a 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
    .layout-responsive {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "footer";
        gap: 1rem;
    }
    
    .sidebar-responsive {
        display: none;
    }
    
    .main-responsive {
        padding: 1.5rem;
    }
    
    .navegacion-responsive {
        gap: 1.5rem;
    }
}

/* Mobile: hasta 767px */
@media (max-width: 767px) {
    .layout-responsive {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "footer";
        gap: 0.5rem;
        padding: 0.5rem;
    }
    
    .header-responsive {
        padding: 1rem;
    }
    
    .logo-responsive {
        font-size: 1.2rem;
    }
    
    /* Mostrar menú hamburguesa */
    .menu-hamburguesa {
        display: flex;
    }
    
    /* Ocultar navegación desktop */
    .navegacion-responsive {
        display: none;
    }
    
    .sidebar-responsive {
        display: none;
    }
    
    .main-responsive {
        padding: 1rem;
    }
    
    .footer-responsive {
        padding: 1rem;
        font-size: 0.9rem;
    }
}

/* Navegación móvil expandible */
.navegacion-movil {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2c3e50;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navegacion-movil.activo {
    display: flex;
}

.navegacion-movil a {
    color: white;
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    transition: color 0.3s;
}

.navegacion-movil a:hover {
    color: #3498db;
}

.navegacion-movil a:last-child {
    border-bottom: none;
}

/* Contenedor de tarjetas responsive */
.contenedor-tarjetas-responsive {
    display: grid;
    gap: 1rem;
    padding: 2rem;
}

/* Desktop: 3 columnas */
@media (min-width: 1024px) {
    .contenedor-tarjetas-responsive {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Tablet: 2 columnas */
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-tarjetas-responsive {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile: 1 columna */
@media (max-width: 767px) {
    .contenedor-tarjetas-responsive {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
}`
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
        title: "Transiciones CSS y efectos hover",
        duration: "60 min",
        description: "Crear transiciones suaves y efectos hover en botones, enlaces y tarjetas"
      },
      {
        title: "Animaciones con keyframes",
        duration: "60 min",
        description: "Implementar animaciones complejas usando @keyframes para efectos visuales"
      },
      {
        title: "Galería animada interactiva",
        duration: "60 min",
        description: "Desarrollar una galería de imágenes con efectos de hover, transiciones y animaciones"
      }
    ],
    homework: [
      "Crear una galería de imágenes con efectos de hover y transiciones suaves",
      "Implementar un menú de navegación con animaciones de entrada y salida",
      "Desarrollar tarjetas de productos con efectos de transformación 3D",
      "Crear un carrusel de imágenes con animaciones automáticas y controles"
    ],
    materials: [
      "Editor de código (VS Code con Live Server)",
      "Navegador web con DevTools habilitado",
      "Imágenes de ejemplo para la galería",
      "Documentación MDN CSS Animations",
      "Herramientas de validación CSS (W3C CSS Validator)",
      "Recursos de iconos (Font Awesome, Feather Icons)"
    ],
    exercises: [
      {
        title: "Galería de Imágenes con Efectos Hover",
        description: "Crea una galería de imágenes con efectos de hover, transiciones suaves y animaciones.",
        code: `/* Ejercicio 1: Galería de Imágenes con Efectos Hover
Crea una galería de imágenes que incluya:

1. Grid de imágenes con espaciado uniforme
2. Efectos hover con transformaciones (scale, rotate)
3. Transiciones suaves en todas las interacciones
4. Overlay con información que aparece al hacer hover
5. Animación de entrada para las imágenes
*/

/* Tu código CSS aquí */`,
        solution: `/* Solución: Galería de Imágenes con Efectos Hover */

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: #f8f9fa;
    padding: 2rem;
}

/* Contenedor de la galería */
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Tarjeta de imagen */
.imagen-card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 0.6s ease-out;
}

/* Animación de entrada */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Imagen */
.imagen-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Overlay */
.imagen-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(52, 152, 219, 0.9), rgba(155, 89, 182, 0.9));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(20px);
}

/* Contenido del overlay */
.overlay-content {
    text-align: center;
    color: white;
    transform: translateY(20px);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.overlay-content p {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 1rem;
}

/* Botón del overlay */
.overlay-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.overlay-btn:hover {
    background: white;
    color: #3498db;
    transform: translateY(-2px);
}

/* Efectos hover */
.imagen-card:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.imagen-card:hover img {
    transform: scale(1.1);
}

.imagen-card:hover .imagen-overlay {
    opacity: 1;
    transform: translateY(0);
}

.imagen-card:hover .overlay-content {
    transform: translateY(0);
}

/* Efecto de rotación alternada */
.imagen-card:nth-child(even):hover {
    transform: translateY(-10px) rotate(-2deg);
}

/* Responsive */
@media (max-width: 768px) {
    .galeria {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }
    
    .imagen-card:hover {
        transform: translateY(-5px);
    }
    
    .imagen-card:nth-child(even):hover {
        transform: translateY(-5px);
    }
}`
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
        "¿Qué es JavaScript y cómo funciona?",
        "Formas de ejecutar JavaScript: navegador, Node.js, editores online",
        "Variables: let, const, var y sus diferencias",
        "Tipos de datos: string, number, boolean, undefined, null",
        "Operadores: aritméticos, lógicos, de comparación",
        "Estructuras de control: if, else, switch",
        "Bucles: for, while, do-while",
        "Funciones: declaración, expresión, arrow functions",
        "Scope y hoisting en JavaScript",
        "Coerción de tipos y comparaciones",
        "Mejores prácticas y errores comunes"
      ],
      theoreticalDetails: {
        "¿Qué es JavaScript y cómo funciona?": "JavaScript es un lenguaje de programación **interpretado**, **dinámico** y **multiparadigma** que se ejecuta principalmente en navegadores web. Es el lenguaje que da vida a las páginas web, permitiendo interactividad, animaciones, validaciones y comunicación con servidores.\n\n**¿Cómo funciona JavaScript?**\n```javascript\n// 1. El navegador lee el código JavaScript\n// 2. El motor JavaScript (V8, SpiderMonkey, etc.) interpreta el código\n// 3. Se ejecuta línea por línea (single-threaded)\n// 4. Puede modificar el DOM, manejar eventos, hacer peticiones HTTP\n\nconsole.log(\"¡Hola desde JavaScript!\"); // Se ejecuta inmediatamente\n```\n\n**¿Para qué sirve JavaScript?**\n- **Interactividad web**: Botones, formularios, menús\n- **Manipulación del DOM**: Cambiar contenido dinámicamente\n- **Validación de datos**: Verificar formularios antes de enviar\n- **Animaciones**: Efectos visuales y transiciones\n- **Comunicación con servidores**: APIs, AJAX, fetch\n- **Aplicaciones web**: SPAs, PWAs, aplicaciones completas",

        "Formas de ejecutar JavaScript: navegador, Node.js, editores online": "JavaScript se puede ejecutar en múltiples entornos, cada uno con sus ventajas específicas.\n\n**1. En el Navegador - Consola de Desarrollador**\n```javascript\n// Abrir DevTools (F12) → Console\n// Escribir código directamente:\n\nlet nombre = \"Juan\";\nconsole.log(\"Hola \" + nombre);\n// Resultado: Hola Juan\n```\n\n**2. En HTML - Etiqueta `<script>`**\n```html\n<!DOCTYPE html>\n<html>\n<body>\n    <h1>Hola Mundo</h1>\n    <script>\n        console.log(\"JavaScript ejecutándose en HTML\");\n        document.querySelector('h1').style.color = 'blue';\n    </script>\n</body>\n</html>\n```\n\n**3. Node.js - Consola de Terminal**\n```bash\n# Instalar Node.js desde nodejs.org\n# Abrir terminal y ejecutar:\n\nnode\n# Entrar al REPL (Read-Eval-Print Loop)\n\n> let x = 10;\n> let y = 20;\n> console.log(x + y);\n30\n> .exit\n```\n\n**4. Editores Online**\n- **CodePen**: codepen.io\n- **JSFiddle**: jsfiddle.net\n- **Repl.it**: repl.it\n- **CodeSandbox**: codesandbox.io",

        "Variables: let, const, var y sus diferencias": "JavaScript tiene tres formas de declarar variables: var (ES5), let y const (ES6). var tiene function scope y puede ser redeclarada, mientras que let y const tienen block scope. let puede ser reasignada pero no redeclarada en el mismo scope. const no puede ser reasignada ni redeclarada, pero si contiene un objeto, las propiedades del objeto sí pueden modificarse. Es recomendable usar const por defecto y let solo cuando necesites reasignar la variable.\n\n**Ejemplos:**\n```javascript\n// var - function scope, puede ser redeclarada\nvar nombre = 'Juan';\nvar nombre = 'Pedro'; // ✅ Permitido\n\n// let - block scope, no puede ser redeclarada\nlet edad = 25;\nlet edad = 30; // ❌ Error: redeclaración\n\n// const - no puede ser reasignada\nconst PI = 3.14159;\nPI = 3.14; // ❌ Error: reasignación\n\n// Pero las propiedades de objetos const sí pueden modificarse\nconst persona = { nombre: 'Ana' };\npersona.edad = 25; // ✅ Permitido\n```",
        
        "Tipos de datos: string, number, boolean, undefined, null": "JavaScript es un lenguaje de tipado dinámico con tipos primitivos: string (texto), number (números enteros y decimales), boolean (true/false), undefined (variable declarada sin valor), null (valor nulo intencional), symbol (ES6), y bigint (ES2020). También tiene tipos de referencia como object, array, function. Los tipos primitivos se pasan por valor, mientras que los objetos se pasan por referencia. typeof puede ayudar a identificar el tipo de una variable.\n\n**Ejemplos:**\n```javascript\n// Tipos primitivos\nlet texto = 'Hola mundo';        // string\nlet numero = 42;                 // number\nlet decimal = 3.14;              // number\nlet activo = true;              // boolean\nlet sinValor;                    // undefined\nlet nulo = null;                 // null\n\n// Tipos de referencia\nlet objeto = { nombre: 'Juan' }; // object\nlet lista = [1, 2, 3];          // object (array)\nlet funcion = () => {};         // function\n\n// Verificar tipos\nconsole.log(typeof texto);       // 'string'\nconsole.log(typeof numero);      // 'number'\nconsole.log(typeof activo);      // 'boolean'\nconsole.log(typeof objeto);      // 'object'\n```",
        
        "Operadores: aritméticos, lógicos, de comparación": "Los operadores aritméticos incluyen +, -, *, /, %, ** (exponenciación), ++, --. Los operadores lógicos son && (AND), || (OR), ! (NOT), con evaluación de cortocircuito. Los operadores de comparación incluyen == (igualdad con coerción), === (igualdad estricta), !=, !==, <, >, <=, >=. También existen operadores de asignación como +=, -=, *=, /=, y operadores ternarios (condición ? valor1 : valor2) para asignaciones condicionales.\n\n**Ejemplos:**\n```javascript\n// Operadores aritméticos\nlet a = 10, b = 3;\nconsole.log(a + b);    // 13\nconsole.log(a - b);    // 7\nconsole.log(a * b);    // 30\nconsole.log(a / b);    // 3.33...\nconsole.log(a % b);    // 1 (resto)\nconsole.log(a ** b);   // 1000 (10³)\n\n// Operadores lógicos\nlet edad = 18;\nlet tieneLicencia = true;\nif (edad >= 18 && tieneLicencia) {\n  console.log('Puede conducir');\n}\n\n// Operador ternario\nlet estado = edad >= 18 ? 'Mayor' : 'Menor';\n\n// Comparaciones\nconsole.log(5 == '5');   // true (coerción)\nconsole.log(5 === '5');  // false (estricto)\n```",
        
        "Estructuras de control: if, else, switch": "Las estructuras de control permiten ejecutar código condicionalmente. if/else evalúa una condición y ejecuta código según el resultado. Puede incluir múltiples else if para múltiples condiciones. switch evalúa una expresión y ejecuta código según diferentes casos, usando break para evitar fall-through. switch es útil cuando tienes múltiples valores posibles para una variable. También existe el operador ternario como alternativa concisa para if/else simples.\n\n**Ejemplos:**\n```javascript\n// if/else\nlet temperatura = 25;\nif (temperatura > 30) {\n  console.log('Hace calor');\n} else if (temperatura < 10) {\n  console.log('Hace frío');\n} else {\n  console.log('Temperatura agradable');\n}\n\n// switch\nlet dia = 'lunes';\nswitch (dia) {\n  case 'lunes':\n    console.log('Inicio de semana');\n    break;\n  case 'viernes':\n    console.log('¡Fin de semana!');\n    break;\n  default:\n    console.log('Día normal');\n}\n\n// Operador ternario\nlet edad = 20;\nlet mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';\n```",
        
        "Bucles: for, while, do-while": "Los bucles permiten ejecutar código repetidamente. for es ideal cuando conoces el número de iteraciones, con sintaxis (inicialización; condición; incremento). while ejecuta mientras la condición sea verdadera. do-while ejecuta al menos una vez y luego evalúa la condición. También existen for...in para iterar propiedades de objetos, for...of para iterar elementos de arrays/strings, y métodos como forEach, map, filter para arrays. Es importante evitar bucles infinitos y usar break/continue cuando sea necesario.",
        
        "Funciones: declaración, expresión, arrow functions": "Las funciones pueden declararse con function nombre() {} (hoisted), expresarse como const nombre = function() {} (no hoisted), o usar arrow functions const nombre = () => {} (no hoisted, no tienen this propio). Las funciones pueden recibir parámetros, retornar valores, y ser pasadas como argumentos. Arrow functions son más concisas y heredan this del contexto padre. Las funciones pueden tener parámetros por defecto, rest parameters (...args), y destructuring en parámetros.",
        
        "Scope y hoisting en JavaScript": "Scope determina la accesibilidad de variables. JavaScript tiene function scope (var) y block scope (let/const). Hoisting es el comportamiento donde las declaraciones se mueven al inicio de su scope. var se inicializa como undefined, mientras que let/const permanecen en 'temporal dead zone' hasta su declaración. Las funciones declaradas se hoistean completamente, mientras que las expresiones de función no. Entender scope y hoisting es crucial para evitar bugs comunes.",
        
        "Coerción de tipos y comparaciones": "JavaScript convierte automáticamente tipos cuando es necesario (coerción). Esto puede causar comportamientos inesperados, especialmente con == vs ===. == permite coerción (1 == '1' es true), mientras que === es estricto (1 === '1' es false). Es recomendable usar siempre === para comparaciones. La coerción puede ser útil en algunos casos, como convertir strings a números con + o Number(), pero debe usarse conscientemente para evitar bugs.",

        "Mejores prácticas y errores comunes": "**Mejores Prácticas:**\n\n1. **Nomenclatura de Variables**\n```javascript\n// ✅ Bueno - camelCase, descriptivo\nlet nombreUsuario = \"Juan\";\nlet edadUsuario = 25;\nlet esUsuarioActivo = true;\n\n// ❌ Malo - confuso, no descriptivo\nlet n = \"Juan\";\nlet e = 25;\nlet a = true;\n```\n\n2. **Uso de Constantes**\n```javascript\n// ✅ Usar const por defecto\nconst PI = 3.14159;\nconst NOMBRE_APLICACION = \"Mi App\";\n\n// ✅ Usar let solo cuando necesites cambiar\nlet contador = 0;\ncontador++; // Necesario cambiar el valor\n```\n\n3. **Comparaciones Estrictas**\n```javascript\n// ✅ Usar === (estricto)\nif (edad === 18) { }\n\n// ❌ Evitar == (con coerción)\nif (edad == \"18\") { } // Puede causar bugs\n```\n\n**Errores Comunes:**\n\n1. **Olvidar Declarar Variables**\n```javascript\n// ❌ Error - variable no declarada\nnombre = \"Juan\"; // ReferenceError\n\n// ✅ Correcto\nlet nombre = \"Juan\";\n```\n\n2. **Bucles Infinitos**\n```javascript\n// ❌ Bucle infinito\nlet i = 0;\nwhile (i < 10) {\n    console.log(i);\n    // Falta i++\n}\n\n// ✅ Correcto\nlet i = 0;\nwhile (i < 10) {\n    console.log(i);\n    i++; // Incrementar contador\n}\n```\n\n3. **No Manejar Errores**\n```javascript\n// ❌ Sin validación\nfunction dividir(a, b) {\n    return a / b; // Error si b = 0\n}\n\n// ✅ Con validación\nfunction dividir(a, b) {\n    if (b === 0) {\n        return \"Error: División por cero\";\n    }\n    return a / b;\n}\n```"
      },
      practical: [
        "Configurar entorno de desarrollo JavaScript",
        "Usar consola del navegador para probar código",
        "Declarar y usar variables correctamente",
        "Implementar condicionales y bucles",
        "Crear funciones para resolver problemas",
        "Ejercicios de lógica de programación",
        "Desarrollar mini-proyectos básicos",
        "Practicar debugging y solución de errores"
      ]
    },
    activities: [
      {
        title: "Configuración del entorno y primeras líneas de código",
        duration: "30 min",
        description: "Configurar entorno de desarrollo, usar consola del navegador y escribir primeras líneas de JavaScript"
      },
      {
        title: "Variables y tipos de datos",
        duration: "45 min",
        description: "Declarar variables con let, const, var, trabajar con diferentes tipos de datos y operadores"
      },
      {
        title: "Estructuras de control",
        duration: "60 min",
        description: "Implementar condicionales (if/else, switch) y bucles (for, while) para resolver problemas"
      },
      {
        title: "Funciones básicas",
        duration: "45 min",
        description: "Crear funciones con diferentes sintaxis, usar parámetros y valores de retorno"
      }
    ],
    homework: [
      "Crear calculadora básica con JavaScript",
      "Implementar validación de formularios",
      "Desarrollar juego de adivinanza de números",
      "Practicar en la consola del navegador diariamente"
    ],
    materials: [
      "Editor de código (VS Code) con extensiones JavaScript",
      "Navegador web (Chrome, Firefox, Safari)",
      "Consola de desarrollador (DevTools)",
      "Node.js (opcional para práctica avanzada)",
      "Editores online: CodePen, JSFiddle, Repl.it"
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
      },
      {
        title: "Validación de Edad",
        description: "Crea una función que valide la edad y determine la categoría de la persona.",
        code: `// Función para validar edad y categorizar persona
function validarEdad(edad) {
  // Tu código aquí
  // Categorías:
  // - 0-12: Niño
  // - 13-17: Adolescente  
  // - 18-64: Adulto
  // - 65+: Adulto mayor
  // - Edad negativa: Inválida
}

// Pruebas
console.log(validarEdad(8));    // "Niño"
console.log(validarEdad(15));   // "Adolescente"
console.log(validarEdad(25));   // "Adulto"
console.log(validarEdad(70));   // "Adulto mayor"
console.log(validarEdad(-5));   // "Edad inválida"`,
        solution: `// Solución completa de validación de edad

function validarEdad(edad) {
  // Validar que la edad sea un número
  if (typeof edad !== 'number') {
    return 'Error: La edad debe ser un número';
  }
  
  // Validar que la edad no sea negativa
  if (edad < 0) {
    return 'Edad inválida';
  }
  
  // Categorizar por edad
  if (edad >= 0 && edad <= 12) {
    return 'Niño';
  } else if (edad >= 13 && edad <= 17) {
    return 'Adolescente';
  } else if (edad >= 18 && edad <= 64) {
    return 'Adulto';
  } else {
    return 'Adulto mayor';
  }
}

// Función para probar la validación
function probarValidacionEdad() {
  console.log('=== PRUEBAS DE VALIDACIÓN DE EDAD ===');
  console.log('8 años:', validarEdad(8));      // Niño
  console.log('15 años:', validarEdad(15));    // Adolescente
  console.log('25 años:', validarEdad(25));    // Adulto
  console.log('70 años:', validarEdad(70));    // Adulto mayor
  console.log('-5 años:', validarEdad(-5));    // Edad inválida
  console.log('Texto:', validarEdad('abc'));   // Error
}

// Ejecutar pruebas
probarValidacionEdad();`
      },
      {
        title: "Contador de Vocales",
        description: "Crea una función que cuente las vocales en un texto dado.",
        code: `// Función para contar vocales en un texto
function contarVocales(texto) {
  // Tu código aquí
  // Debe contar: a, e, i, o, u (mayúsculas y minúsculas)
  // Retornar el número total de vocales
}

// Pruebas
console.log(contarVocales("Hola mundo"));        // 4 vocales
console.log(contarVocales("JavaScript"));        // 3 vocales
console.log(contarVocales("AEIOU"));             // 5 vocales
console.log(contarVocales("123456"));            // 0 vocales`,
        solution: `// Solución completa del contador de vocales

function contarVocales(texto) {
  // Validar que el texto sea un string
  if (typeof texto !== 'string') {
    return 'Error: El parámetro debe ser un texto';
  }
  
  let contador = 0;
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  
  // Convertir texto a minúsculas para comparar
  const textoMinusculas = texto.toLowerCase();
  
  // Iterar por cada carácter del texto
  for (let i = 0; i < textoMinusculas.length; i++) {
    const caracter = textoMinusculas[i];
    
    // Verificar si el carácter es una vocal
    if (vocales.includes(caracter)) {
      contador++;
    }
  }
  
  return contador;
}

// Función para probar el contador
function probarContadorVocales() {
  console.log('=== PRUEBAS DEL CONTADOR DE VOCALES ===');
  console.log('"Hola mundo":', contarVocales("Hola mundo"));        // 4
  console.log('"JavaScript":', contarVocales("JavaScript"));        // 3
  console.log('"AEIOU":', contarVocales("AEIOU"));                  // 5
  console.log('"123456":', contarVocales("123456"));                // 0
  console.log('"":', contarVocales(""));                            // 0
  console.log('Número:', contarVocales(123));                       // Error
}

// Ejecutar pruebas
probarContadorVocales();`
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
      "Dominar conceptos avanzados de JavaScript",
      "Implementar funciones de orden superior y callbacks",
      "Trabajar con closures y scope avanzado",
      "Desarrollar aplicaciones con manejo de errores"
    ],
    content: {
      theoretical: [
        "Funciones de orden superior y callbacks",
        "Closures y scope avanzado",
        "Template literals y string methods avanzados",
        "Date, Math y otros objetos nativos",
        "Error handling: try-catch, throw, finally",
        "Programación funcional básica",
        "Async/Await y Promises básicas",
        "Módulos ES6: import/export"
      ],
      theoreticalDetails: {
        "Funciones de orden superior y callbacks": "Las funciones de orden superior son funciones que toman otras funciones como parámetros o devuelven funciones. Los callbacks son funciones que se pasan como argumentos y se ejecutan en un momento específico. Son fundamentales para la programación asíncrona y funcional.\n\n**Ejemplos:**\n```javascript\n// Función de orden superior\nfunction procesarDatos(datos, callback) {\n  const resultado = datos.map(callback);\n  return resultado;\n}\n\n// Usar callback\nconst numeros = [1, 2, 3, 4, 5];\nconst cuadrados = procesarDatos(numeros, n => n * n);\nconsole.log(cuadrados); // [1, 4, 9, 16, 25]\n\n// Callback con setTimeout\nsetTimeout(() => {\n  console.log('Hola después de 1 segundo');\n}, 1000);\n\n// Callback con addEventListener\ndocument.addEventListener('click', function(event) {\n  console.log('Click en:', event.target);\n});\n\n// Función que devuelve función\nfunction crearMultiplicador(factor) {\n  return function(numero) {\n    return numero * factor;\n  };\n}\n\nconst multiplicarPor2 = crearMultiplicador(2);\nconsole.log(multiplicarPor2(5)); // 10\n\n// Callback con fetch\nfetch('https://api.ejemplo.com/datos')\n  .then(response => response.json())\n  .then(data => {\n    console.log('Datos recibidos:', data);\n  })\n  .catch(error => {\n    console.error('Error:', error);\n  });\n\n// Función de orden superior personalizada\nfunction filtrarYTransformar(array, filtro, transformacion) {\n  return array\n    .filter(filtro)\n    .map(transformacion);\n}\n\nconst resultado = filtrarYTransformar(\n  [1, 2, 3, 4, 5],\n  n => n % 2 === 0,\n  n => n * 2\n);\nconsole.log(resultado); // [4, 8]\n```",
        
        "Closures y scope avanzado": "Un closure es una función que tiene acceso a variables de su scope externo incluso después de que la función externa haya terminado. El scope determina dónde se puede acceder a una variable. Los closures son fundamentales para crear funciones privadas y mantener estado.\n\n**Ejemplos:**\n```javascript\n// Closure básico\nfunction crearContador() {\n  let contador = 0;\n  return function() {\n    contador++;\n    return contador;\n  };\n}\n\nconst miContador = crearContador();\nconsole.log(miContador()); // 1\nconsole.log(miContador()); // 2\nconsole.log(miContador()); // 3\n\n// Closure con parámetros\nfunction crearMultiplicador(factor) {\n  return function(numero) {\n    return numero * factor;\n  };\n}\n\nconst multiplicarPor3 = crearMultiplicador(3);\nconsole.log(multiplicarPor3(4)); // 12\n\n// Closure para crear funciones privadas\nfunction crearPersona(nombre) {\n  let edad = 0;\n  \n  return {\n    obtenerNombre: () => nombre,\n    obtenerEdad: () => edad,\n    cumplirAnos: () => {\n      edad++;\n      return edad;\n    }\n  };\n}\n\nconst persona = crearPersona('Juan');\nconsole.log(persona.obtenerNombre()); // Juan\nconsole.log(persona.cumplirAnos()); // 1\n\n// Scope con var, let, const\nfunction demostrarScope() {\n  var varVariable = 'var';\n  let letVariable = 'let';\n  const constVariable = 'const';\n  \n  if (true) {\n    var varVariable2 = 'var2';\n    let letVariable2 = 'let2';\n    const constVariable2 = 'const2';\n  }\n  \n  console.log(varVariable); // var\n  console.log(varVariable2); // var2 (hoisting)\n  // console.log(letVariable2); // Error: no definida\n  // console.log(constVariable2); // Error: no definida\n}\n\n// Closure con bucle\nfunction crearFunciones() {\n  const funciones = [];\n  \n  for (let i = 0; i < 3; i++) {\n    funciones.push(function() {\n      return i;\n    });\n  }\n  \n  return funciones;\n}\n\nconst funciones = crearFunciones();\nconsole.log(funciones[0]()); // 0\nconsole.log(funciones[1]()); // 1\nconsole.log(funciones[2]()); // 2\n```",
        
        "Template literals y string methods avanzados": "Los template literals permiten crear strings con interpolación de variables y expresiones. Los métodos de string proporcionan funcionalidades avanzadas para manipular texto. Son herramientas esenciales para trabajar con texto en JavaScript de manera eficiente.\n\n**Ejemplos:**\n```javascript\n// Template literals con funciones\nfunction formatearUsuario(usuario) {\n  return `\n    <div class=\"usuario-card\">\n      <h3>${usuario.nombre.toUpperCase()}</h3>\n      <p>Email: ${usuario.email}</p>\n      <p>Edad: ${usuario.edad} años</p>\n      <p>Estado: ${usuario.activo ? 'Activo' : 'Inactivo'}</p>\n    </div>\n  `;\n}\n\nconst usuario = { nombre: 'Juan', email: 'juan@ejemplo.com', edad: 25, activo: true };\nconsole.log(formatearUsuario(usuario));\n\n// Template literals con expresiones complejas\nconst productos = [\n  { nombre: 'Laptop', precio: 1000, descuento: 0.1 },\n  { nombre: 'Mouse', precio: 25, descuento: 0.05 }\n];\n\nconst resumen = productos.map(producto => \n  `${producto.nombre}: $${producto.precio} (Descuento: ${producto.descuento * 100}%) = $${producto.precio * (1 - producto.descuento)}`\n).join('\\n');\n\nconsole.log(resumen);\n\n// Métodos de string avanzados\nconst texto = 'JavaScript es genial para desarrollo web';\n\n// Métodos de búsqueda y validación\nconsole.log(texto.includes('JavaScript')); // true\nconsole.log(texto.startsWith('JavaScript')); // true\nconsole.log(texto.endsWith('web')); // true\nconsole.log(texto.indexOf('genial')); // 15\nconsole.log(texto.lastIndexOf('a')); // 25\n\n// Métodos de manipulación avanzada\nconst email = '  USUARIO@EJEMPLO.COM  ';\nconst emailLimpio = email.trim().toLowerCase();\nconsole.log(emailLimpio); // usuario@ejemplo.com\n\n// Validación de email simple\nfunction validarEmail(email) {\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(email.trim());\n}\n\nconsole.log(validarEmail('usuario@ejemplo.com')); // true\nconsole.log(validarEmail('email-invalido')); // false\n\n// Formateo de texto\nconst numero = 1234.5678;\nconst numeroFormateado = numero.toLocaleString('es-ES', {\n  style: 'currency',\n  currency: 'EUR'\n});\nconsole.log(numeroFormateado); // 1.234,57 €\n\n// Template literals con tagged templates\nfunction etiquetar(strings, ...valores) {\n  return strings.reduce((resultado, string, i) => {\n    const valor = valores[i] ? `[${valores[i]}]` : '';\n    return resultado + string + valor;\n  }, '');\n}\n\nconst nombre = 'Juan';\nconst edad = 25;\nconst mensaje = etiquetar`Hola ${nombre}, tienes ${edad} años`;\nconsole.log(mensaje); // Hola [Juan], tienes [25] años\n\n// Métodos de string para procesamiento de datos\nconst csvData = 'nombre,edad,ciudad\\nJuan,25,Madrid\\nMaría,30,Barcelona';\nconst lineas = csvData.split('\\n');\nconst headers = lineas[0].split(',');\nconst datos = lineas.slice(1).map(linea => {\n  const valores = linea.split(',');\n  return headers.reduce((obj, header, i) => {\n    obj[header] = valores[i];\n    return obj;\n  }, {});\n});\n\nconsole.log(datos); // [{ nombre: 'Juan', edad: '25', ciudad: 'Madrid' }, ...]\n```",
        
        "Date, Math y otros objetos nativos": "JavaScript proporciona objetos nativos para trabajar con fechas, matemáticas y otras funcionalidades comunes. Date maneja fechas y horas, Math proporciona funciones matemáticas, y otros objetos como JSON, RegExp ofrecen utilidades adicionales.\n\n**Ejemplos:**\n```javascript\n// Objeto Date\nconst ahora = new Date();\nconsole.log(ahora); // Fecha actual\n\nconst fechaEspecifica = new Date('2024-12-25');\nconsole.log(fechaEspecifica); // 25 de diciembre de 2024\n\n// Métodos de Date\nconsole.log(ahora.getFullYear()); // 2024\nconsole.log(ahora.getMonth()); // 11 (diciembre, 0-indexado)\nconsole.log(ahora.getDate()); // 15\nconsole.log(ahora.getDay()); // 0 (domingo)\nconsole.log(ahora.getHours()); // 14\nconsole.log(ahora.getMinutes()); // 30\n\n// Formatear fecha\nconst fechaFormateada = ahora.toLocaleDateString('es-ES');\nconsole.log(fechaFormateada); // 15/12/2024\n\n// Objeto Math\nconsole.log(Math.PI); // 3.141592653589793\nconsole.log(Math.E); // 2.718281828459045\nconsole.log(Math.abs(-5)); // 5\nconsole.log(Math.ceil(4.1)); // 5\nconsole.log(Math.floor(4.9)); // 4\nconsole.log(Math.round(4.5)); // 5\nconsole.log(Math.max(1, 5, 3)); // 5\nconsole.log(Math.min(1, 5, 3)); // 1\nconsole.log(Math.random()); // Número aleatorio entre 0 y 1\nconsole.log(Math.sqrt(16)); // 4\nconsole.log(Math.pow(2, 3)); // 8\n\n// Generar número aleatorio en rango\nfunction numeroAleatorio(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log(numeroAleatorio(1, 10)); // Número entre 1 y 10\n\n// Objeto JSON\nconst objeto = { nombre: 'Juan', edad: 25 };\nconst jsonString = JSON.stringify(objeto);\nconsole.log(jsonString); // '{\"nombre\":\"Juan\",\"edad\":25}'\n\nconst objetoParseado = JSON.parse(jsonString);\nconsole.log(objetoParseado); // { nombre: 'Juan', edad: 25 }\n\n// Objeto RegExp\nconst patron = /\\d+/g;\nconst texto = 'Tengo 25 años y 3 hermanos';\nconst numeros = texto.match(patron);\nconsole.log(numeros); // ['25', '3']\n\n// Validar email\nconst emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst email = 'usuario@ejemplo.com';\nconsole.log(emailPattern.test(email)); // true\n```",
        
        "Error handling: try-catch, throw, finally": "El manejo de errores permite controlar situaciones excepcionales en el código. try-catch captura errores, throw lanza errores personalizados, y finally ejecuta código independientemente del resultado. Es fundamental para crear aplicaciones robustas.\n\n**Ejemplos:**\n```javascript\n// Try-catch básico\ntry {\n  const resultado = 10 / 0;\n  console.log(resultado);\n} catch (error) {\n  console.error('Error:', error.message);\n}\n\n// Try-catch con finally\ntry {\n  console.log('Ejecutando código...');\n  throw new Error('Error personalizado');\n} catch (error) {\n  console.error('Error capturado:', error.message);\n} finally {\n  console.log('Siempre se ejecuta');\n}\n\n// Lanzar errores personalizados\nfunction dividir(a, b) {\n  if (b === 0) {\n    throw new Error('División por cero no permitida');\n  }\n  return a / b;\n}\n\ntry {\n  const resultado = dividir(10, 0);\n  console.log(resultado);\n} catch (error) {\n  console.error('Error:', error.message);\n}\n\n// Manejo de errores con fetch\nasync function obtenerDatos(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error al obtener datos:', error.message);\n    return null;\n  }\n}\n\n// Validación con errores personalizados\nfunction validarEmail(email) {\n  if (!email) {\n    throw new Error('Email es requerido');\n  }\n  if (!email.includes('@')) {\n    throw new Error('Email debe contener @');\n  }\n  return true;\n}\n\ntry {\n  validarEmail('usuario@ejemplo.com');\n  console.log('Email válido');\n} catch (error) {\n  console.error('Error de validación:', error.message);\n}\n\n// Manejo de errores en arrays\ntry {\n  const numeros = [1, 2, 3];\n  const resultado = numeros.map(n => {\n    if (n === 2) {\n      throw new Error('Número 2 no permitido');\n    }\n    return n * 2;\n  });\n  console.log(resultado);\n} catch (error) {\n  console.error('Error en procesamiento:', error.message);\n}\n```",
        
        "Async/Await y Promises básicas": "Las Promises y async/await permiten manejar operaciones asíncronas de manera más elegante. Las Promises representan un valor que puede estar disponible ahora, en el futuro, o nunca. async/await es una sintaxis más limpia para trabajar con Promises.\n\n**Ejemplos:**\n```javascript\n// Promise básica\nconst miPromise = new Promise((resolve, reject) => {\n  const exito = true;\n  \n  if (exito) {\n    resolve('Operación exitosa');\n  } else {\n    reject('Operación falló');\n  }\n});\n\nmiPromise\n  .then(resultado => console.log(resultado))\n  .catch(error => console.error(error));\n\n// Promise con setTimeout\nfunction esperar(ms) {\n  return new Promise(resolve => {\n    setTimeout(resolve, ms);\n  });\n}\n\nconsole.log('Inicio');\nesperar(1000)\n  .then(() => console.log('Después de 1 segundo'));\n\n// Async/Await\nasync function procesoAsincrono() {\n  try {\n    console.log('Iniciando proceso...');\n    await esperar(1000);\n    console.log('Paso 1 completado');\n    \n    await esperar(1000);\n    console.log('Paso 2 completado');\n    \n    return 'Proceso completado';\n  } catch (error) {\n    console.error('Error en proceso:', error);\n  }\n}\n\nprocesoAsincrono();\n\n// Fetch con async/await\nasync function obtenerUsuario(id) {\n  try {\n    const response = await fetch(`https://api.ejemplo.com/usuarios/${id}`);\n    if (!response.ok) {\n      throw new Error(`Error HTTP: ${response.status}`);\n    }\n    const usuario = await response.json();\n    return usuario;\n  } catch (error) {\n    console.error('Error al obtener usuario:', error.message);\n    return null;\n  }\n}\n\n// Usar la función\nobtenerUsuario(1).then(usuario => {\n  if (usuario) {\n    console.log('Usuario obtenido:', usuario);\n  }\n});\n\n// Múltiples Promises\nasync function obtenerDatosMultiples() {\n  try {\n    const [usuarios, posts, comentarios] = await Promise.all([\n      fetch('https://api.ejemplo.com/usuarios').then(r => r.json()),\n      fetch('https://api.ejemplo.com/posts').then(r => r.json()),\n      fetch('https://api.ejemplo.com/comentarios').then(r => r.json())\n    ]);\n    \n    return { usuarios, posts, comentarios };\n  } catch (error) {\n    console.error('Error al obtener datos:', error);\n    return null;\n  }\n}\n\n// Promise.race - la primera que se resuelve\nasync function obtenerDatosRapido() {\n  const promise1 = fetch('https://api.lenta.com/datos');\n  const promise2 = fetch('https://api.rapida.com/datos');\n  \n  try {\n    const response = await Promise.race([promise1, promise2]);\n    return await response.json();\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```",
        
        "Módulos ES6: import/export": "Los módulos ES6 permiten dividir el código en archivos separados y reutilizar código entre diferentes partes de la aplicación. export permite exportar funciones, variables o clases, e import permite importarlas en otros archivos.\n\n**Ejemplos:**\n```javascript\n// archivo: utils.js\n// Exportación nombrada\nexport function sumar(a, b) {\n  return a + b;\n}\n\nexport function restar(a, b) {\n  return a - b;\n}\n\nexport const PI = 3.14159;\n\n// Exportación por defecto\nexport default function multiplicar(a, b) {\n  return a * b;\n}\n\n// archivo: math.js\n// Exportación de múltiples elementos\nconst sumar = (a, b) => a + b;\nconst restar = (a, b) => a - b;\nconst multiplicar = (a, b) => a * b;\nconst dividir = (a, b) => a / b;\n\n// Exportar todo junto\nexport { sumar, restar, multiplicar, dividir };\n\n// Exportar con nombres diferentes\nexport { sumar as add, restar as subtract };\n\n// archivo: main.js\n// Importación nombrada\nimport { sumar, restar, PI } from './utils.js';\nimport { multiplicar, dividir } from './math.js';\n\n// Importación por defecto\nimport multiplicarDefault from './utils.js';\n\n// Importación con alias\nimport { sumar as add, restar as subtract } from './utils.js';\n\n// Importación de todo\nimport * as utils from './utils.js';\nconsole.log(utils.sumar(2, 3)); // 5\n\n// Importación mixta\nimport multiplicarDefault, { sumar, restar } from './utils.js';\n\n// Uso de las funciones importadas\nconsole.log(sumar(5, 3)); // 8\nconsole.log(restar(5, 3)); // 2\nconsole.log(multiplicar(5, 3)); // 15\nconsole.log(PI); // 3.14159\n\n// archivo: user.js\n// Clase exportada\nexport class Usuario {\n  constructor(nombre, email) {\n    this.nombre = nombre;\n    this.email = email;\n  }\n  \n  saludar() {\n    return `Hola, soy ${this.nombre}`;\n  }\n}\n\n// Función exportada\nexport function crearUsuario(nombre, email) {\n  return new Usuario(nombre, email);\n}\n\n// archivo: app.js\n// Importar clase y función\nimport { Usuario, crearUsuario } from './user.js';\n\nconst usuario1 = new Usuario('Juan', 'juan@ejemplo.com');\nconst usuario2 = crearUsuario('María', 'maria@ejemplo.com');\n\nconsole.log(usuario1.saludar()); // Hola, soy Juan\nconsole.log(usuario2.saludar()); // Hola, soy María\n\n// Re-exportación\n// archivo: index.js\nexport { sumar, restar } from './math.js';\nexport { Usuario } from './user.js';\nexport { default as multiplicar } from './utils.js';\n\n// archivo: main.js\n// Importar desde el archivo índice\nimport { sumar, Usuario, multiplicar } from './index.js';\n```",
        
        "Programación funcional básica": "La programación funcional es un paradigma que trata la computación como la evaluación de funciones matemáticas. Se enfoca en funciones puras, inmutabilidad, y composición de funciones. JavaScript soporta este paradigma con características como funciones de orden superior y métodos de arrays.\n\n**Ejemplos:**\n```javascript\n// Función pura (sin efectos secundarios)\nfunction sumar(a, b) {\n  return a + b;\n}\n\n// Función impura (con efectos secundarios)\nlet contador = 0;\nfunction incrementar() {\n  contador++;\n  return contador;\n}\n\n// Inmutabilidad\nconst numeros = [1, 2, 3, 4, 5];\nconst numerosDuplicados = numeros.map(n => n * 2);\nconsole.log(numeros); // [1, 2, 3, 4, 5] (sin cambios)\nconsole.log(numerosDuplicados); // [2, 4, 6, 8, 10]\n\n// Composición de funciones\nfunction sumar(a, b) {\n  return a + b;\n}\n\nfunction multiplicar(a, b) {\n  return a * b;\n}\n\nfunction componer(f, g) {\n  return function(x) {\n    return f(g(x));\n  };\n}\n\nconst sumarYMultiplicar = componer(x => x * 2, x => x + 1);\nconsole.log(sumarYMultiplicar(3)); // 8 ((3 + 1) * 2)\n\n// Funciones de orden superior\nfunction crearFiltro(condicion) {\n  return function(array) {\n    return array.filter(condicion);\n  };\n}\n\nconst filtrarPares = crearFiltro(n => n % 2 === 0);\nconst filtrarImpares = crearFiltro(n => n % 2 !== 0);\n\nconsole.log(filtrarPares([1, 2, 3, 4, 5])); // [2, 4]\nconsole.log(filtrarImpares([1, 2, 3, 4, 5])); // [1, 3, 5]\n\n// Currying\nfunction curriedSum(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\n\nconst sumar3 = curriedSum(1)(2)(3);\nconsole.log(sumar3); // 6\n\n// Pipeline de funciones\nfunction pipe(...funciones) {\n  return function(valor) {\n    return funciones.reduce((acc, fn) => fn(acc), valor);\n  };\n}\n\nconst procesarTexto = pipe(\n  texto => texto.toUpperCase(),\n  texto => texto.replace(/\\s/g, '-'),\n  texto => `Resultado: ${texto}`\n);\n\nconsole.log(procesarTexto('hola mundo')); // Resultado: HOLA-MUNDO\n\n// Función de orden superior para crear validadores\nfunction crearValidador(regla) {\n  return function(valor) {\n    return regla(valor);\n  };\n}\n\nconst esPositivo = crearValidador(n => n > 0);\nconst esPar = crearValidador(n => n % 2 === 0);\n\nconsole.log(esPositivo(5)); // true\nconsole.log(esPar(4)); // true\n```"
      },
      practical: [
        "Implementar funciones de orden superior",
        "Trabajar con closures y scope",
        "Crear funciones con manejo de errores",
        "Desarrollar aplicaciones con async/await",
        "Organizar código con módulos ES6"
      ]
    },
    activities: [
      {
        title: "Funciones de orden superior",
        duration: "60 min",
        description: "Crear y usar funciones que toman otras funciones como parámetros"
      },
      {
        title: "Closures y scope",
        duration: "45 min",
        description: "Implementar closures y entender el scope avanzado"
      },
      {
        title: "Manejo de errores y async/await",
        duration: "45 min",
        description: "Implementar try-catch y trabajar con Promises"
      }
    ],
    homework: [
      "Crear calculadora con funciones de orden superior",
      "Implementar sistema de validación con manejo de errores",
      "Desarrollar aplicación con módulos ES6"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web",
      "Consola de desarrollador"
    ],
    exercises: [
      {
        title: "Sistema de Validación con Funciones de Orden Superior",
        description: "Crea un sistema de validación usando funciones de orden superior, closures y manejo de errores.",
        code: `// Sistema de validación con funciones de orden superior
class Validador {
  constructor() {
    this.reglas = [];
  }
  
  // Agregar regla de validación
  agregarRegla(campo, regla) {
    // Tu código aquí
  }
  
  // Validar un objeto completo
  validar(objeto) {
    // Tu código aquí
  }
  
  // Crear validador personalizado
  crearValidadorPersonalizado(regla) {
    // Tu código aquí
  }
  }
  
// Funciones de validación
function esEmail(email) {
    // Tu código aquí
  }

function esRequerido(valor) {
  // Tu código aquí
}

function longitudMinima(min) {
  // Tu código aquí
}

// Ejemplo de uso
const validador = new Validador();`,
        solution: `// Sistema de validación con funciones de orden superior - Solución
class Validador {
  constructor() {
    this.reglas = new Map();
  }
  
  // Agregar regla de validación
  agregarRegla(campo, regla) {
    if (!this.reglas.has(campo)) {
      this.reglas.set(campo, []);
    }
    this.reglas.get(campo).push(regla);
  }
  
  // Validar un objeto completo
  validar(objeto) {
    const errores = {};
    
    for (const [campo, reglas] of this.reglas) {
      const valor = objeto[campo];
      const erroresCampo = [];
      
      for (const regla of reglas) {
        try {
          const resultado = regla(valor);
          if (resultado !== true) {
            erroresCampo.push(resultado);
          }
        } catch (error) {
          erroresCampo.push(error.message);
        }
      }
      
      if (erroresCampo.length > 0) {
        errores[campo] = erroresCampo;
      }
    }
    
    return {
      esValido: Object.keys(errores).length === 0,
      errores
    };
  }
  
  // Crear validador personalizado
  crearValidadorPersonalizado(regla) {
    return function(valor) {
      return regla(valor);
    };
  }
}

// Funciones de validación usando closures
function esEmail(email) {
  return function(valor) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(valor)) {
      return 'Debe ser un email válido';
    }
    return true;
  };
}

function esRequerido(valor) {
  return function(valor) {
    if (!valor || valor.toString().trim() === '') {
      return 'Este campo es requerido';
    }
    return true;
  };
}

function longitudMinima(min) {
  return function(valor) {
    if (valor && valor.toString().length < min) {
      return \`Debe tener al menos \${min} caracteres\`;
    }
    return true;
  };
}

// Función de orden superior para crear validadores
function crearValidador(reglas) {
  return function(valor) {
    for (const regla of reglas) {
      const resultado = regla(valor);
      if (resultado !== true) {
        return resultado;
      }
    }
    return true;
  };
}

// Función de orden superior para validar múltiples campos
function validarFormulario(validadores) {
  return function(objeto) {
    const errores = {};
    
    for (const [campo, validador] of Object.entries(validadores)) {
      const resultado = validador(objeto[campo]);
      if (resultado !== true) {
        errores[campo] = resultado;
      }
    }
    
    return {
      esValido: Object.keys(errores).length === 0,
      errores
    };
  };
}

// Ejemplo de uso completo
const validador = new Validador();

// Configurar reglas de validación
validador.agregarRegla('nombre', esRequerido());
validador.agregarRegla('nombre', longitudMinima(2));
validador.agregarRegla('email', esRequerido());
validador.agregarRegla('email', esEmail());
validador.agregarRegla('edad', esRequerido());
validador.agregarRegla('edad', validador.crearValidadorPersonalizado(valor => {
  const edad = parseInt(valor);
  if (isNaN(edad) || edad < 18) {
    return 'Debe ser mayor de 18 años';
  }
  return true;
}));

// Datos a validar
const usuario = {
  nombre: 'Juan',
  email: 'juan@ejemplo.com',
  edad: '25'
};

// Validar
const resultado = validador.validar(usuario);
console.log('Resultado de validación:', resultado);

// Usar función de orden superior
const validarUsuario = validarFormulario({
  nombre: crearValidador([esRequerido(), longitudMinima(2)]),
  email: crearValidador([esRequerido(), esEmail()]),
  telefono: validador.crearValidadorPersonalizado(valor => {
    if (valor && !/^\\d{10}$/.test(valor)) {
      return 'El teléfono debe tener 10 dígitos';
    }
    return true;
  })
});

const usuario2 = {
  nombre: 'María',
  email: 'maria@ejemplo.com',
  telefono: '1234567890'
};

const resultado2 = validarUsuario(usuario2);
console.log('Resultado de validación 2:', resultado2);

// Ejemplo con manejo de errores
try {
  const usuarioInvalido = {
    nombre: '',
    email: 'email-invalido',
    edad: '15'
  };
  
  const resultado3 = validador.validar(usuarioInvalido);
  console.log('Resultado de validación 3:', resultado3);
} catch (error) {
  console.error('Error en validación:', error.message);
}`
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
        "¿Qué es el DOM?": "El DOM (Document Object Model) es una representación en memoria de la estructura HTML de una página web. Es un árbol de nodos donde cada elemento HTML es un nodo que puede ser manipulado con JavaScript. El DOM permite acceder, modificar y crear elementos dinámicamente.\n\n**HTML necesario:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mi Página - DOM</title>\n  <style>\n    .contenedor {\n      padding: 20px;\n      border: 2px solid #333;\n      margin: 20px;\n    }\n    .info {\n      background: #f0f0f0;\n      padding: 10px;\n      margin: 10px 0;\n    }\n  </style>\n</head>\n<body>\n  <div id=\"contenedor\" class=\"contenedor destacado\">\n    <h1>Título Principal</h1>\n    <p class=\"descripcion\">Este es un párrafo de ejemplo</p>\n    <ul id=\"lista\">\n      <li>Item 1</li>\n      <li>Item 2</li>\n    </ul>\n  </div>\n  \n  <div id=\"info\" class=\"info\"></div>\n  \n  <script src=\"script.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript (script.js):**\n```javascript\n// Acceder al documento\nconsole.log('Objeto document:', document);\nconsole.log('Elemento <html>:', document.documentElement);\nconsole.log('Elemento <body>:', document.body);\nconsole.log('Elemento <head>:', document.head);\n\n// Navegar por el DOM\nconst contenedor = document.getElementById('contenedor');\nconsole.log('Elemento padre:', contenedor.parentNode);\nconsole.log('Nodos hijos:', contenedor.childNodes);\nconsole.log('Primer hijo:', contenedor.firstChild);\nconsole.log('Último hijo:', contenedor.lastChild);\nconsole.log('Hermano siguiente:', contenedor.nextSibling);\nconsole.log('Hermano anterior:', contenedor.previousSibling);\n\n// Tipos de nodos\nconsole.log('Tipo de document:', document.nodeType); // 9 (DOCUMENT_NODE)\nconsole.log('Tipo de body:', document.body.nodeType); // 1 (ELEMENT_NODE)\n\n// Propiedades del nodo\nconst elemento = document.getElementById('contenedor');\nconsole.log('Nombre del nodo:', elemento.nodeName); // DIV\nconsole.log('Valor del nodo:', elemento.nodeValue); // null (para elementos)\nconsole.log('Tag name:', elemento.tagName); // DIV\nconsole.log('ID:', elemento.id); // contenedor\nconsole.log('Clases:', elemento.className); // contenedor destacado\nconsole.log('HTML interno:', elemento.innerHTML);\nconsole.log('Texto:', elemento.textContent);\n\n// Mostrar info en la página\nconst infoDiv = document.getElementById('info');\ninfoDiv.innerHTML = '<h3>Información del DOM</h3>' +\n  '<p>Número de elementos hijos: ' + contenedor.children.length + '</p>' +\n  '<p>Clases del contenedor: ' + elemento.className + '</p>' +\n  '<p>ID del contenedor: ' + elemento.id + '</p>';\n```",
        
        "Selección de elementos: getElementById, querySelector": "JavaScript proporciona varios métodos para seleccionar elementos del DOM. getElementById selecciona por ID, querySelector usa selectores CSS, y otros métodos permiten seleccionar múltiples elementos. Cada método tiene sus ventajas y casos de uso específicos.\n\n**HTML necesario:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Selección de Elementos</title>\n  <style>\n    .mi-clase { color: blue; }\n    .destacado { font-weight: bold; }\n    .interno { padding: 5px; background: #f0f0f0; }\n    #resultados { margin: 20px; padding: 10px; border: 1px solid #ccc; }\n  </style>\n</head>\n<body>\n  <h1>Ejemplos de Selección de Elementos</h1>\n  \n  <div id=\"contenedor\" class=\"mi-clase\">\n    <p class=\"destacado\">Primer párrafo destacado</p>\n    <p class=\"interno\">Segundo párrafo interno</p>\n    <p data-id=\"123\">Párrafo con atributo data</p>\n  </div>\n  \n  <div class=\"mi-clase\">\n    <span class=\"interno\">Elemento interno 1</span>\n    <span class=\"interno\">Elemento interno 2</span>\n  </div>\n  \n  <form id=\"mi-formulario\">\n    <input type=\"text\" name=\"nombre\" placeholder=\"Nombre\">\n    <input type=\"email\" name=\"email\" placeholder=\"Email\">\n    <button type=\"submit\">Enviar</button>\n  </form>\n  \n  <div id=\"resultados\"></div>\n  \n  <script src=\"seleccion.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript (seleccion.js):**\n```javascript\n// getElementById - Seleccionar por ID\nconst miElemento = document.getElementById('contenedor');\nconsole.log('Elemento por ID:', miElemento);\n\n// querySelector - Selector CSS (devuelve el primero)\nconst primerParrafo = document.querySelector('p');\nconst elementoConClase = document.querySelector('.mi-clase');\nconst elementoConAtributo = document.querySelector('[data-id=\"123\"]');\nconst elementoAnidado = document.querySelector('#contenedor .destacado');\n\nconsole.log('Primer párrafo:', primerParrafo.textContent);\nconsole.log('Elemento con clase:', elementoConClase.tagName);\n\n// querySelectorAll - Múltiples elementos (devuelve NodeList)\nconst todosLosParrafos = document.querySelectorAll('p');\nconst elementosConClase = document.querySelectorAll('.mi-clase');\nconst elementosAnidados = document.querySelectorAll('#contenedor .interno');\n\nconsole.log('Total de párrafos:', todosLosParrafos.length);\n\n// Iterar sobre NodeList\ntodosLosParrafos.forEach((parrafo, index) => {\n  console.log('Párrafo ' + (index + 1) + ':', parrafo.textContent);\n});\n\n// getElementsByClassName - Devuelve HTMLCollection (en vivo)\nconst elementosPorClase = document.getElementsByClassName('mi-clase');\nconsole.log('Elementos por clase:', elementosPorClase.length);\n\n// getElementsByTagName - Devuelve HTMLCollection (en vivo)\nconst elementosPorTag = document.getElementsByTagName('p');\nconsole.log('Elementos por tag:', elementosPorTag.length);\n\n// Selección dentro de un elemento específico\nconst contenedor = document.getElementById('contenedor');\nconst elementoInterno = contenedor.querySelector('.interno');\nconst elementosInternos = contenedor.querySelectorAll('.interno');\n\nconsole.log('Elementos internos del contenedor:', elementosInternos.length);\n\n// Verificar si existe elemento\nconst elementoExiste = document.getElementById('contenedor');\nconst elementoNoExiste = document.getElementById('no-existe');\n\nif (elementoExiste) {\n  console.log('Contenedor encontrado');\n}\n\nif (!elementoNoExiste) {\n  console.log('Elemento no encontrado');\n}\n\n// Selección con múltiples criterios\nconst elementos = document.querySelectorAll('div.mi-clase, p.destacado');\nconsole.log('Elementos con múltiples criterios:', elementos.length);\n\n// Selección de formularios y sus elementos\nconst formulario = document.querySelector('form');\nconst inputs = formulario.querySelectorAll('input');\nconst boton = formulario.querySelector('button[type=\"submit\"]');\n\nconsole.log('Formulario encontrado:', formulario.id);\nconsole.log('Inputs en formulario:', inputs.length);\n\n// Mostrar resultados en la página\nconst resultados = document.getElementById('resultados');\nresultados.innerHTML = '<h3>Resultados de Selección</h3>' +\n  '<p>Total de párrafos: ' + todosLosParrafos.length + '</p>' +\n  '<p>Elementos con clase \"mi-clase\": ' + elementosConClase.length + '</p>' +\n  '<p>Inputs en formulario: ' + inputs.length + '</p>';\n```",
        
        "Manipulación de contenido: innerHTML, textContent": "La manipulación del contenido permite cambiar el texto, HTML y atributos de los elementos. innerHTML permite insertar HTML, textContent solo texto, y otros métodos permiten manipular atributos y clases. Es fundamental para crear contenido dinámico.\n\n**HTML necesario:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Manipulación de Contenido</title>\n  <style>\n    .mi-elemento { padding: 15px; margin: 10px; border: 2px solid #333; }\n    .nueva-clase { background: #e3f2fd; }\n    .clase-activa { box-shadow: 0 0 10px rgba(0,0,0,0.3); }\n    .error { border-color: red; }\n    button { margin: 5px; padding: 10px 20px; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <h1>Manipulación de Contenido</h1>\n  \n  <div id=\"mi-elemento\" class=\"mi-elemento clase-antigua\">\n    <h2>Título Original</h2>\n    <p>Contenido original del elemento</p>\n  </div>\n  \n  <div class=\"controles\">\n    <button id=\"btn-html\">Cambiar HTML</button>\n    <button id=\"btn-texto\">Cambiar Texto</button>\n    <button id=\"btn-clase\">Toggle Clase</button>\n    <button id=\"btn-estilo\">Cambiar Estilo</button>\n  </div>\n  \n  <form>\n    <input type=\"email\" name=\"email\" placeholder=\"Tu email\">\n    <img src=\"imagen.jpg\" alt=\"Imagen original\" width=\"200\">\n  </form>\n  \n  <script src=\"manipulacion.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript (manipulacion.js):**\n```javascript\n// Seleccionar elemento\nconst elemento = document.getElementById('mi-elemento');\n\n// innerHTML - Contenido HTML\nconst btnHtml = document.getElementById('btn-html');\nbtnHtml.addEventListener('click', function() {\n  elemento.innerHTML = '<h2>Nuevo título</h2><p>Nuevo párrafo</p><span>Texto adicional</span>';\n});\n\n// textContent - Solo texto (sin HTML)\nconst btnTexto = document.getElementById('btn-texto');\nbtnTexto.addEventListener('click', function() {\n  elemento.textContent = 'Solo texto sin HTML - Texto adicional';\n});\n\n// Manipular atributos\nelemento.setAttribute('data-id', '123');\nelemento.setAttribute('title', 'Nuevo título');\n\nconst valorAtributo = elemento.getAttribute('data-id');\nconsole.log('Atributo data-id:', valorAtributo); // 123\n\nconst tieneAtributo = elemento.hasAttribute('data-id');\nconsole.log('Tiene atributo:', tieneAtributo); // true\n\n// Manipular clases CSS\nconst btnClase = document.getElementById('btn-clase');\nbtnClase.addEventListener('click', function() {\n  elemento.classList.add('nueva-clase');\n  elemento.classList.remove('clase-antigua');\n  elemento.classList.toggle('clase-activa');\n  \n  const tieneClase = elemento.classList.contains('nueva-clase');\n  console.log('Tiene clase nueva-clase:', tieneClase);\n});\n\n// Manipular estilos\nconst btnEstilo = document.getElementById('btn-estilo');\nbtnEstilo.addEventListener('click', function() {\n  elemento.style.color = 'white';\n  elemento.style.backgroundColor = 'blue';\n  elemento.style.fontSize = '18px';\n  elemento.style.padding = '20px';\n  \n  // Obtener estilos computados\n  const estilos = window.getComputedStyle(elemento);\n  console.log('Color:', estilos.color);\n  console.log('Tamaño de fuente:', estilos.fontSize);\n});\n\n// Manipular formularios\nconst input = document.querySelector('input[name=\"email\"]');\ninput.value = 'usuario@ejemplo.com';\ninput.placeholder = 'Ingresa tu email';\n\n// Agregar validación visual\ninput.addEventListener('input', function() {\n  if (!this.value.includes('@')) {\n    this.classList.add('error');\n  } else {\n    this.classList.remove('error');\n  }\n});\n\nconst valorInput = input.value;\nconsole.log('Valor del input:', valorInput);\n\n// Manipular imágenes\nconst imagen = document.querySelector('img');\nsetTimeout(function() {\n  imagen.src = 'nueva-imagen.jpg';\n  imagen.alt = 'Nueva imagen cargada';\n  imagen.width = 300;\n  imagen.height = 200;\n}, 2000);\n```",
        
        "Eventos del navegador: click, submit, change": "Los eventos son acciones que ocurren en el navegador y pueden ser detectadas por JavaScript. Los eventos comunes incluyen click, submit, change, input, focus, blur, y muchos otros. Cada evento proporciona información sobre la acción que lo desencadenó.\n\n**HTML necesario:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Eventos del Navegador</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }\n    .caja { width: 200px; height: 200px; background: #3f51b5; color: white; display: flex; align-items: center; justify-content: center; margin: 20px; border-radius: 10px; cursor: pointer; transition: all 0.3s; }\n    .caja:hover { background: #303f9f; transform: scale(1.05); }\n    .formulario { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }\n    input, textarea { width: 100%; padding: 10px; margin: 10px 0; border: 2px solid #ddd; border-radius: 4px; font-size: 14px; }\n    input:focus, textarea:focus { outline: none; border-color: #3f51b5; box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.1); }\n    button { background: #4caf50; color: white; padding: 12px 30px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }\n    button:hover { background: #45a049; }\n    #log { background: #263238; color: #00ff00; padding: 15px; border-radius: 4px; font-family: 'Courier New', monospace; max-height: 300px; overflow-y: auto; }\n    .log-item { margin: 5px 0; padding: 3px 0; border-bottom: 1px solid #37474f; }\n  </style>\n</head>\n<body>\n  <h1>⚡ Demostración de Eventos</h1>\n  \n  <!-- Eventos de Mouse -->\n  <section>\n    <h2>1. Eventos de Mouse</h2>\n    <div class=\"caja\" id=\"caja-mouse\">\n      Pasa el mouse aquí\n    </div>\n    <p id=\"info-mouse\">Posición: -</p>\n  </section>\n  \n  <!-- Eventos de Teclado -->\n  <section>\n    <h2>2. Eventos de Teclado</h2>\n    <div class=\"formulario\">\n      <label>Escribe algo (presiona Enter para ver el mensaje):</label>\n      <input type=\"text\" id=\"input-teclado\" placeholder=\"Escribe aquí...\">\n      <p id=\"info-teclado\"></p>\n    </div>\n  </section>\n  \n  <!-- Eventos de Formulario -->\n  <section>\n    <h2>3. Eventos de Formulario</h2>\n    <form id=\"mi-formulario\" class=\"formulario\">\n      <label>Nombre:</label>\n      <input type=\"text\" id=\"nombre\" required>\n      \n      <label>Email:</label>\n      <input type=\"email\" id=\"email-form\" required>\n      \n      <label>Mensaje:</label>\n      <textarea id=\"mensaje\" rows=\"4\" required></textarea>\n      \n      <button type=\"submit\">Enviar Formulario</button>\n    </form>\n    <div id=\"resultado-form\"></div>\n  </section>\n  \n  <!-- Log de Eventos -->\n  <section>\n    <h2>4. Registro de Eventos</h2>\n    <div id=\"log\"></div>\n    <button id=\"btn-limpiar\">Limpiar Log</button>\n  </section>\n  \n  <script src=\"eventos.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript (eventos.js):**\n```javascript\nconst log = document.getElementById('log');\n\n// Función para registrar eventos\nfunction registrarEvento(mensaje) {\n  const timestamp = new Date().toLocaleTimeString();\n  const logItem = document.createElement('div');\n  logItem.className = 'log-item';\n  logItem.textContent = `[${timestamp}] ${mensaje}`;\n  log.insertBefore(logItem, log.firstChild);\n}\n\n// 1. EVENTOS DE MOUSE\nconst cajaMouse = document.getElementById('caja-mouse');\nconst infoMouse = document.getElementById('info-mouse');\n\ncajaMouse.addEventListener('click', function(event) {\n  registrarEvento('🖱️ Click en la caja');\n  this.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);\n});\n\ncajaMouse.addEventListener('mouseenter', function() {\n  registrarEvento('➡️ Mouse entró a la caja');\n  this.textContent = '¡Haz click!';\n});\n\ncajaMouse.addEventListener('mouseleave', function() {\n  registrarEvento('⬅️ Mouse salió de la caja');\n  this.textContent = 'Pasa el mouse aquí';\n});\n\ncajaMouse.addEventListener('mousemove', function(event) {\n  infoMouse.textContent = `Posición: X=${event.clientX}, Y=${event.clientY}`;\n});\n\n// 2. EVENTOS DE TECLADO\nconst inputTeclado = document.getElementById('input-teclado');\nconst infoTeclado = document.getElementById('info-teclado');\n\ninputTeclado.addEventListener('keydown', function(event) {\n  registrarEvento(`⌨️ Tecla presionada: ${event.key}`);\n  \n  if (event.key === 'Enter') {\n    infoTeclado.textContent = `Mensaje: \"${this.value}\"`;\n    infoTeclado.style.color = '#4caf50';\n    infoTeclado.style.fontWeight = 'bold';\n  }\n});\n\ninputTeclado.addEventListener('input', function(event) {\n  if (this.value.length > 0) {\n    infoTeclado.textContent = `Caracteres: ${this.value.length}`;\n    infoTeclado.style.color = '#666';\n    infoTeclado.style.fontWeight = 'normal';\n  }\n});\n\ninputTeclado.addEventListener('focus', function() {\n  registrarEvento('🔍 Input recibió foco');\n  this.style.background = '#fff9c4';\n});\n\ninputTeclado.addEventListener('blur', function() {\n  registrarEvento('👁️ Input perdió foco');\n  this.style.background = 'white';\n});\n\n// 3. EVENTOS DE FORMULARIO\nconst formulario = document.getElementById('mi-formulario');\nconst resultadoForm = document.getElementById('resultado-form');\n\nformulario.addEventListener('submit', function(event) {\n  event.preventDefault(); // ¡IMPORTANTE! Prevenir envío\n  \n  registrarEvento('📮 Formulario enviado');\n  \n  const datos = {\n    nombre: document.getElementById('nombre').value,\n    email: document.getElementById('email-form').value,\n    mensaje: document.getElementById('mensaje').value\n  };\n  \n  resultadoForm.innerHTML = `\n    <div style=\"background: #e8f5e9; padding: 20px; border-radius: 8px; margin-top: 20px;\">\n      <h3>✅ Datos Recibidos:</h3>\n      <p><strong>Nombre:</strong> ${datos.nombre}</p>\n      <p><strong>Email:</strong> ${datos.email}</p>\n      <p><strong>Mensaje:</strong> ${datos.mensaje}</p>\n    </div>\n  `;\n  \n  formulario.reset();\n});\n\n// Validación en tiempo real\ndocument.getElementById('email-form').addEventListener('input', function() {\n  if (this.value.includes('@')) {\n    this.style.borderColor = '#4caf50';\n  } else if (this.value.length > 0) {\n    this.style.borderColor = '#f44336';\n  } else {\n    this.style.borderColor = '#ddd';\n  }\n});\n\n// 4. LIMPIAR LOG\ndocument.getElementById('btn-limpiar').addEventListener('click', function() {\n  log.innerHTML = '';\n  registrarEvento('🗑️ Log limpiado');\n});\n\n// Evento de carga\nwindow.addEventListener('load', function() {\n  registrarEvento('🚀 Página completamente cargada');\n});\n\n// Registrar evento inicial\nregistrarEvento('✨ Sistema de eventos iniciado');\n```",
        
        "Event listeners: addEventListener, removeEventListener": "Los event listeners permiten escuchar eventos específicos en elementos del DOM. addEventListener agrega un listener, removeEventListener lo elimina, y se pueden usar diferentes opciones para controlar el comportamiento. Es la forma moderna y recomendada de manejar eventos.\n\n**HTML necesario:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Event Listeners</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }\n    .demo-section { margin: 30px 0; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }\n    button { padding: 10px 20px; margin: 5px; cursor: pointer; border: none; border-radius: 4px; }\n    .btn-primary { background: #007bff; color: white; }\n    .btn-success { background: #28a745; color: white; }\n    .btn-danger { background: #dc3545; color: white; }\n    .btn-warning { background: #ffc107; color: black; }\n    .contenedor { padding: 20px; background: #f8f9fa; border-radius: 4px; margin: 10px 0; }\n    .log { background: #343a40; color: #28a745; padding: 15px; border-radius: 4px; font-family: monospace; max-height: 200px; overflow-y: auto; }\n    .log-item { margin: 3px 0; }\n    input { padding: 8px; margin: 5px; border: 1px solid #ddd; border-radius: 4px; }\n    .highlight { background: #fff3cd; padding: 5px; border-radius: 3px; }\n  </style>\n</head>\n<body>\n  <h1>🎧 Event Listeners - addEventListener & removeEventListener</h1>\n  \n  <!-- Básicos -->\n  <div class=\"demo-section\">\n    <h2>1. Event Listeners Básicos</h2>\n    <button id=\"btn-basico\" class=\"btn-primary\">Click Me (Básico)</button>\n    <button id=\"btn-remover\" class=\"btn-danger\">Remover Listener</button>\n    <div id=\"log-basico\" class=\"log\"></div>\n  </div>\n  \n  <!-- Opciones -->\n  <div class=\"demo-section\">\n    <h2>2. Event Listeners con Opciones</h2>\n    <button id=\"btn-once\" class=\"btn-success\">Solo Una Vez (once: true)</button>\n    <button id=\"btn-passive\" class=\"btn-warning\">Passive (passive: true)</button>\n    <button id=\"btn-capture\" class=\"btn-primary\">Capture (capture: true)</button>\n    <div id=\"log-opciones\" class=\"log\"></div>\n  </div>\n  \n  <!-- Múltiples Listeners -->\n  <div class=\"demo-section\">\n    <h2>3. Múltiples Event Listeners</h2>\n    <button id=\"btn-multi\" class=\"btn-primary\">Múltiples Listeners</button>\n    <div id=\"log-multi\" class=\"log\"></div>\n  </div>\n  \n  <!-- Event Delegation -->\n  <div class=\"demo-section\">\n    <h2>4. Event Delegation</h2>\n    <div id=\"contenedor\" class=\"contenedor\">\n      <button class=\"btn-dinamico btn-primary\">Botón Dinámico 1</button>\n      <button class=\"btn-dinamico btn-success\">Botón Dinámico 2</button>\n      <button class=\"btn-dinamico btn-warning\">Botón Dinámico 3</button>\n    </div>\n    <button id=\"btn-agregar\" class=\"btn-primary\">Agregar Botón</button>\n    <div id=\"log-delegation\" class=\"log\"></div>\n  </div>\n  \n  <!-- Debounce -->\n  <div class=\"demo-section\">\n    <h2>5. Debounce en Input</h2>\n    <input type=\"text\" id=\"input-debounce\" placeholder=\"Escribe aquí (debounce 500ms)\">\n    <div id=\"log-debounce\" class=\"log\"></div>\n  </div>\n  \n  <!-- Stop Propagation -->\n  <div class=\"demo-section\">\n    <h2>6. Stop Propagation</h2>\n    <div id=\"padre\" style=\"padding: 20px; background: #e3f2fd; border-radius: 8px;\">\n      <p>Padre (click aquí)</p>\n      <button id=\"btn-hijo\" class=\"btn-danger\">Hijo (stopPropagation)</button>\n      <button id=\"btn-hijo-normal\" class=\"btn-primary\">Hijo (normal)</button>\n    </div>\n    <div id=\"log-propagation\" class=\"log\"></div>\n  </div>\n  \n  <script src=\"event-listeners.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript (event-listeners.js):**\n```javascript\n// Función helper para logging\nfunction log(message, logElement) {\n  const timestamp = new Date().toLocaleTimeString();\n  const logItem = document.createElement('div');\n  logItem.className = 'log-item';\n  logItem.textContent = `[${timestamp}] ${message}`;\n  logElement.insertBefore(logItem, logElement.firstChild);\n}\n\n// 1. EVENT LISTENERS BÁSICOS\nconst btnBasico = document.getElementById('btn-basico');\nconst btnRemover = document.getElementById('btn-remover');\nconst logBasico = document.getElementById('log-basico');\n\n// Función para manejar click\nfunction manejarClick(event) {\n  log('🖱️ Botón clickeado', logBasico);\n  log(`Target: ${event.target.id}`, logBasico);\n  log(`TimeStamp: ${event.timeStamp}`, logBasico);\n}\n\n// Agregar listener\nbtnBasico.addEventListener('click', manejarClick);\nlog('✅ Event listener agregado', logBasico);\n\n// Remover listener\nbtnRemover.addEventListener('click', function() {\n  btnBasico.removeEventListener('click', manejarClick);\n  log('❌ Event listener removido', logBasico);\n});\n\n// 2. EVENT LISTENERS CON OPCIONES\nconst btnOnce = document.getElementById('btn-once');\nconst btnPassive = document.getElementById('btn-passive');\nconst btnCapture = document.getElementById('btn-capture');\nconst logOpciones = document.getElementById('log-opciones');\n\n// once: true - Solo se ejecuta una vez\nbtnOnce.addEventListener('click', function(event) {\n  log('🎯 Listener ejecutado (una sola vez)', logOpciones);\n}, { once: true });\n\n// passive: true - Optimización de rendimiento\nbtnPassive.addEventListener('click', function(event) {\n  log('⚡ Listener pasivo ejecutado', logOpciones);\n}, { passive: true });\n\n// capture: true - Se ejecuta en fase de captura\nbtnCapture.addEventListener('click', function(event) {\n  log('🔍 Listener de captura ejecutado', logOpciones);\n}, { capture: true });\n\n// 3. MÚLTIPLES EVENT LISTENERS\nconst btnMulti = document.getElementById('btn-multi');\nconst logMulti = document.getElementById('log-multi');\n\n// Primer listener\nbtnMulti.addEventListener('click', function(event) {\n  log('📢 Primer listener ejecutado', logMulti);\n});\n\n// Segundo listener\nbtnMulti.addEventListener('click', function(event) {\n  log('📢 Segundo listener ejecutado', logMulti);\n});\n\n// Tercer listener con arrow function\nbtnMulti.addEventListener('click', (event) => {\n  log('📢 Tercer listener (arrow function)', logMulti);\n});\n\n// 4. EVENT DELEGATION\nconst contenedor = document.getElementById('contenedor');\nconst btnAgregar = document.getElementById('btn-agregar');\nconst logDelegation = document.getElementById('log-delegation');\nlet contador = 3;\n\n// Event delegation - Un listener para múltiples elementos\ncontenedor.addEventListener('click', function(event) {\n  if (event.target.classList.contains('btn-dinamico')) {\n    log(`🎯 Botón clickeado: ${event.target.textContent}`, logDelegation);\n    log(`Clase: ${event.target.className}`, logDelegation);\n  }\n});\n\n// Agregar botones dinámicamente\nbtnAgregar.addEventListener('click', function() {\n  contador++;\n  const nuevoBoton = document.createElement('button');\n  nuevoBoton.className = 'btn-dinamico btn-primary';\n  nuevoBoton.textContent = `Botón Dinámico ${contador}`;\n  contenedor.appendChild(nuevoBoton);\n  log(`➕ Nuevo botón agregado: ${nuevoBoton.textContent}`, logDelegation);\n});\n\n// 5. DEBOUNCE\nconst inputDebounce = document.getElementById('input-debounce');\nconst logDebounce = document.getElementById('log-debounce');\n\n// Función debounce\nfunction debounce(func, wait) {\n  let timeout;\n  return function executedFunction(...args) {\n    const later = () => {\n      clearTimeout(timeout);\n      func(...args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n}\n\n// Búsqueda con debounce\nconst debouncedSearch = debounce(function(event) {\n  log(`🔍 Búsqueda: \"${event.target.value}\"`, logDebounce);\n}, 500);\n\ninputDebounce.addEventListener('input', debouncedSearch);\n\n// 6. STOP PROPAGATION\nconst padre = document.getElementById('padre');\nconst btnHijo = document.getElementById('btn-hijo');\nconst btnHijoNormal = document.getElementById('btn-hijo-normal');\nconst logPropagation = document.getElementById('log-propagation');\n\n// Listener del padre\npadre.addEventListener('click', function(event) {\n  log('👨‍👩‍👧‍👦 Click en PADRE', logPropagation);\n});\n\n// Hijo con stopPropagation\nbtnHijo.addEventListener('click', function(event) {\n  event.stopPropagation();\n  log('🚫 Hijo con stopPropagation', logPropagation);\n});\n\n// Hijo normal\nbtnHijoNormal.addEventListener('click', function(event) {\n  log('👶 Hijo normal', logPropagation);\n});\n\n// Evento inicial\nlog('🚀 Sistema de Event Listeners iniciado', logBasico);\n```",
        
        "Validación de formularios con JavaScript": "La validación de formularios permite verificar que los datos ingresados cumplan con los requisitos antes de enviarlos. Se puede hacer validación en tiempo real, al enviar el formulario, o ambos. Es fundamental para mejorar la experiencia del usuario y la seguridad.\n\n**HTML necesario:**\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Validación de Formularios</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; background: #f5f5f5; }\n    .formulario { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }\n    h1 { text-align: center; color: #333; margin-bottom: 30px; }\n    .form-group { margin-bottom: 20px; }\n    label { display: block; margin-bottom: 5px; font-weight: bold; color: #555; }\n    input, textarea, select { width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box; transition: border-color 0.3s; }\n    input:focus, textarea:focus, select:focus { outline: none; border-color: #4caf50; box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1); }\n    .error { border-color: #f44336; }\n    .success { border-color: #4caf50; }\n    .error-message { color: #f44336; font-size: 12px; margin-top: 5px; display: none; }\n    .error-message.active { display: block; }\n    .success-message { color: #4caf50; font-size: 12px; margin-top: 5px; display: none; }\n    .success-message.active { display: block; }\n    button { background: #4caf50; color: white; padding: 12px 30px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; width: 100%; transition: background 0.3s; }\n    button:hover { background: #45a049; }\n    button:disabled { background: #ccc; cursor: not-allowed; }\n    .password-strength { margin-top: 5px; height: 4px; background: #eee; border-radius: 2px; overflow: hidden; }\n    .password-strength-bar { height: 100%; transition: width 0.3s; }\n    .strength-weak { background: #f44336; width: 25%; }\n    .strength-medium { background: #ff9800; width: 50%; }\n    .strength-strong { background: #4caf50; width: 100%; }\n    .summary { margin-top: 20px; padding: 15px; border-radius: 6px; display: none; }\n    .summary.success { background: #e8f5e9; border: 1px solid #4caf50; color: #2e7d32; }\n    .summary.error { background: #ffebee; border: 1px solid #f44336; color: #c62828; }\n  </style>\n</head>\n<body>\n  <div class=\"formulario\">\n    <h1>📝 Validación de Formularios</h1>\n    \n    <form id=\"mi-formulario\" novalidate>\n      <!-- Nombre -->\n      <div class=\"form-group\">\n        <label for=\"nombre\">Nombre completo *</label>\n        <input type=\"text\" id=\"nombre\" name=\"nombre\" placeholder=\"Ingresa tu nombre completo\" required>\n        <div class=\"error-message\" id=\"error-nombre\"></div>\n        <div class=\"success-message\" id=\"success-nombre\">✓ Nombre válido</div>\n      </div>\n      \n      <!-- Email -->\n      <div class=\"form-group\">\n        <label for=\"email\">Email *</label>\n        <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"ejemplo@correo.com\" required>\n        <div class=\"error-message\" id=\"error-email\"></div>\n        <div class=\"success-message\" id=\"success-email\">✓ Email válido</div>\n      </div>\n      \n      <!-- Teléfono -->\n      <div class=\"form-group\">\n        <label for=\"telefono\">Teléfono *</label>\n        <input type=\"tel\" id=\"telefono\" name=\"telefono\" placeholder=\"1234567890\" required>\n        <div class=\"error-message\" id=\"error-telefono\"></div>\n        <div class=\"success-message\" id=\"success-telefono\">✓ Teléfono válido</div>\n      </div>\n      \n      <!-- Password -->\n      <div class=\"form-group\">\n        <label for=\"password\">Contraseña *</label>\n        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Mínimo 8 caracteres\" required>\n        <div class=\"password-strength\">\n          <div class=\"password-strength-bar\" id=\"strength-bar\"></div>\n        </div>\n        <div class=\"error-message\" id=\"error-password\"></div>\n        <div class=\"success-message\" id=\"success-password\">✓ Contraseña válida</div>\n      </div>\n      \n      <!-- Confirmar Password -->\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirmar contraseña *</label>\n        <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Repite tu contraseña\" required>\n        <div class=\"error-message\" id=\"error-confirmPassword\"></div>\n        <div class=\"success-message\" id=\"success-confirmPassword\">✓ Contraseñas coinciden</div>\n      </div>\n      \n      <!-- Edad -->\n      <div class=\"form-group\">\n        <label for=\"edad\">Edad *</label>\n        <input type=\"number\" id=\"edad\" name=\"edad\" placeholder=\"18\" min=\"18\" max=\"120\" required>\n        <div class=\"error-message\" id=\"error-edad\"></div>\n        <div class=\"success-message\" id=\"success-edad\">✓ Edad válida</div>\n      </div>\n      \n      <!-- País -->\n      <div class=\"form-group\">\n        <label for=\"pais\">País *</label>\n        <select id=\"pais\" name=\"pais\" required>\n          <option value=\"\">Selecciona tu país</option>\n          <option value=\"es\">España</option>\n          <option value=\"mx\">México</option>\n          <option value=\"co\">Colombia</option>\n          <option value=\"ar\">Argentina</option>\n          <option value=\"pe\">Perú</option>\n          <option value=\"cl\">Chile</option>\n          <option value=\"ve\">Venezuela</option>\n        </select>\n        <div class=\"error-message\" id=\"error-pais\"></div>\n        <div class=\"success-message\" id=\"success-pais\">✓ País seleccionado</div>\n      </div>\n      \n      <!-- Comentarios -->\n      <div class=\"form-group\">\n        <label for=\"comentarios\">Comentarios</label>\n        <textarea id=\"comentarios\" name=\"comentarios\" rows=\"4\" placeholder=\"Cuéntanos algo sobre ti...\"></textarea>\n        <div class=\"error-message\" id=\"error-comentarios\"></div>\n      </div>\n      \n      <!-- Archivo -->\n      <div class=\"form-group\">\n        <label for=\"archivo\">Foto de perfil (opcional)</label>\n        <input type=\"file\" id=\"archivo\" name=\"archivo\" accept=\"image/*\">\n        <div class=\"error-message\" id=\"error-archivo\"></div>\n      </div>\n      \n      <!-- Botón de envío -->\n      <button type=\"submit\" id=\"btn-enviar\">Crear Cuenta</button>\n    </form>\n    \n    <!-- Resumen -->\n    <div id=\"summary\" class=\"summary\"></div>\n  </div>\n  \n  <script src=\"validacion.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript (validacion.js):**\n```javascript\n// Elementos del formulario\nconst formulario = document.getElementById('mi-formulario');\nconst btnEnviar = document.getElementById('btn-enviar');\nconst summary = document.getElementById('summary');\n\n// Campos del formulario\nconst campos = {\n  nombre: document.getElementById('nombre'),\n  email: document.getElementById('email'),\n  telefono: document.getElementById('telefono'),\n  password: document.getElementById('password'),\n  confirmPassword: document.getElementById('confirmPassword'),\n  edad: document.getElementById('edad'),\n  pais: document.getElementById('pais'),\n  comentarios: document.getElementById('comentarios'),\n  archivo: document.getElementById('archivo')\n};\n\n// Estado de validación\nlet validacionEstado = {\n  nombre: false,\n  email: false,\n  telefono: false,\n  password: false,\n  confirmPassword: false,\n  edad: false,\n  pais: false,\n  comentarios: true, // Opcional\n  archivo: true // Opcional\n};\n\n// FUNCIONES DE VALIDACIÓN\nfunction validarNombre(valor) {\n  if (!valor || valor.trim().length < 2) {\n    return 'El nombre debe tener al menos 2 caracteres';\n  }\n  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$/.test(valor)) {\n    return 'El nombre solo puede contener letras y espacios';\n  }\n  return null;\n}\n\nfunction validarEmail(valor) {\n  if (!valor) {\n    return 'El email es requerido';\n  }\n  const patron = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  if (!patron.test(valor)) {\n    return 'Formato de email inválido';\n  }\n  return null;\n}\n\nfunction validarTelefono(valor) {\n  if (!valor) {\n    return 'El teléfono es requerido';\n  }\n  const patron = /^\\d{10}$/;\n  if (!patron.test(valor)) {\n    return 'El teléfono debe tener exactamente 10 dígitos';\n  }\n  return null;\n}\n\nfunction validarPassword(valor) {\n  if (!valor) {\n    return 'La contraseña es requerida';\n  }\n  if (valor.length < 8) {\n    return 'La contraseña debe tener al menos 8 caracteres';\n  }\n  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(valor)) {\n    return 'La contraseña debe contener al menos una mayúscula, una minúscula y un número';\n  }\n  return null;\n}\n\nfunction validarConfirmPassword(valor, password) {\n  if (!valor) {\n    return 'Debes confirmar tu contraseña';\n  }\n  if (valor !== password) {\n    return 'Las contraseñas no coinciden';\n  }\n  return null;\n}\n\nfunction validarEdad(valor) {\n  const edad = parseInt(valor);\n  if (!valor || isNaN(edad)) {\n    return 'La edad es requerida';\n  }\n  if (edad < 18) {\n    return 'Debes ser mayor de 18 años';\n  }\n  if (edad > 120) {\n    return 'Edad inválida';\n  }\n  return null;\n}\n\nfunction validarPais(valor) {\n  if (!valor) {\n    return 'Debes seleccionar un país';\n  }\n  return null;\n}\n\nfunction validarArchivo(archivo) {\n  if (!archivo || archivo.files.length === 0) {\n    return null; // Opcional\n  }\n  const file = archivo.files[0];\n  if (file.size > 5 * 1024 * 1024) { // 5MB\n    return 'El archivo no puede ser mayor a 5MB';\n  }\n  if (!file.type.startsWith('image/')) {\n    return 'Solo se permiten archivos de imagen';\n  }\n  return null;\n}\n\n// FUNCIONES DE UI\nfunction mostrarError(campoId, mensaje) {\n  const campo = campos[campoId];\n  const errorElement = document.getElementById(`error-${campoId}`);\n  const successElement = document.getElementById(`success-${campoId}`);\n  \n  campo.classList.remove('success');\n  campo.classList.add('error');\n  \n  if (errorElement) {\n    errorElement.textContent = mensaje;\n    errorElement.classList.add('active');\n  }\n  \n  if (successElement) {\n    successElement.classList.remove('active');\n  }\n  \n  validacionEstado[campoId] = false;\n}\n\nfunction mostrarExito(campoId) {\n  const campo = campos[campoId];\n  const errorElement = document.getElementById(`error-${campoId}`);\n  const successElement = document.getElementById(`success-${campoId}`);\n  \n  campo.classList.remove('error');\n  campo.classList.add('success');\n  \n  if (errorElement) {\n    errorElement.classList.remove('active');\n  }\n  \n  if (successElement) {\n    successElement.classList.add('active');\n  }\n  \n  validacionEstado[campoId] = true;\n}\n\nfunction actualizarPasswordStrength(password) {\n  const strengthBar = document.getElementById('strength-bar');\n  let strength = 0;\n  \n  if (password.length >= 8) strength++;\n  if (/[a-z]/.test(password)) strength++;\n  if (/[A-Z]/.test(password)) strength++;\n  if (/\\d/.test(password)) strength++;\n  if (/[^a-zA-Z\\d]/.test(password)) strength++;\n  \n  strengthBar.className = 'password-strength-bar';\n  if (strength <= 2) {\n    strengthBar.classList.add('strength-weak');\n  } else if (strength <= 4) {\n    strengthBar.classList.add('strength-medium');\n  } else {\n    strengthBar.classList.add('strength-strong');\n  }\n}\n\nfunction actualizarBotonEnviar() {\n  const todosValidos = Object.values(validacionEstado).every(valido => valido);\n  btnEnviar.disabled = !todosValidos;\n  \n  if (todosValidos) {\n    btnEnviar.textContent = 'Crear Cuenta ✓';\n  } else {\n    btnEnviar.textContent = 'Completa todos los campos requeridos';\n  }\n}\n\nfunction mostrarSummary(datos, esValido) {\n  if (esValido) {\n    summary.className = 'summary success';\n    summary.innerHTML = `\n      <h3>✅ ¡Formulario Enviado Exitosamente!</h3>\n      <p><strong>Nombre:</strong> ${datos.nombre}</p>\n      <p><strong>Email:</strong> ${datos.email}</p>\n      <p><strong>Teléfono:</strong> ${datos.telefono}</p>\n      <p><strong>Edad:</strong> ${datos.edad} años</p>\n      <p><strong>País:</strong> ${datos.pais}</p>\n      ${datos.comentarios ? `<p><strong>Comentarios:</strong> ${datos.comentarios}</p>` : ''}\n      ${datos.archivo ? `<p><strong>Archivo:</strong> ${datos.archivo}</p>` : ''}\n    `;\n  } else {\n    summary.className = 'summary error';\n    summary.innerHTML = `\n      <h3>❌ Errores en el formulario</h3>\n      <p>Por favor corrige los errores antes de enviar.</p>\n    `;\n  }\n  \n  summary.style.display = 'block';\n}\n\n// EVENT LISTENERS\n// Validación en tiempo real\ncampos.nombre.addEventListener('blur', function() {\n  const error = validarNombre(this.value);\n  if (error) {\n    mostrarError('nombre', error);\n  } else {\n    mostrarExito('nombre');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.email.addEventListener('blur', function() {\n  const error = validarEmail(this.value);\n  if (error) {\n    mostrarError('email', error);\n  } else {\n    mostrarExito('email');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.telefono.addEventListener('blur', function() {\n  const error = validarTelefono(this.value);\n  if (error) {\n    mostrarError('telefono', error);\n  } else {\n    mostrarExito('telefono');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.password.addEventListener('input', function() {\n  actualizarPasswordStrength(this.value);\n});\n\ncampos.password.addEventListener('blur', function() {\n  const error = validarPassword(this.value);\n  if (error) {\n    mostrarError('password', error);\n  } else {\n    mostrarExito('password');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.confirmPassword.addEventListener('blur', function() {\n  const error = validarConfirmPassword(this.value, campos.password.value);\n  if (error) {\n    mostrarError('confirmPassword', error);\n  } else {\n    mostrarExito('confirmPassword');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.edad.addEventListener('blur', function() {\n  const error = validarEdad(this.value);\n  if (error) {\n    mostrarError('edad', error);\n  } else {\n    mostrarExito('edad');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.pais.addEventListener('change', function() {\n  const error = validarPais(this.value);\n  if (error) {\n    mostrarError('pais', error);\n  } else {\n    mostrarExito('pais');\n  }\n  actualizarBotonEnviar();\n});\n\ncampos.archivo.addEventListener('change', function() {\n  const error = validarArchivo(this);\n  if (error) {\n    mostrarError('archivo', error);\n  } else {\n    mostrarExito('archivo');\n  }\n  actualizarBotonEnviar();\n});\n\n// Envío del formulario\nformulario.addEventListener('submit', function(event) {\n  event.preventDefault();\n  \n  // Validar todos los campos\n  let esValido = true;\n  const datos = {};\n  \n  // Validar campos requeridos\n  Object.keys(campos).forEach(campoId => {\n    if (campoId === 'comentarios' || campoId === 'archivo') return;\n    \n    const campo = campos[campoId];\n    let error = null;\n    \n    switch (campoId) {\n      case 'nombre':\n        error = validarNombre(campo.value);\n        break;\n      case 'email':\n        error = validarEmail(campo.value);\n        break;\n      case 'telefono':\n        error = validarTelefono(campo.value);\n        break;\n      case 'password':\n        error = validarPassword(campo.value);\n        break;\n      case 'confirmPassword':\n        error = validarConfirmPassword(campo.value, campos.password.value);\n        break;\n      case 'edad':\n        error = validarEdad(campo.value);\n        break;\n      case 'pais':\n        error = validarPais(campo.value);\n        break;\n    }\n    \n    if (error) {\n      mostrarError(campoId, error);\n      esValido = false;\n    } else {\n      mostrarExito(campoId);\n      datos[campoId] = campo.value;\n    }\n  });\n  \n  // Campos opcionales\n  datos.comentarios = campos.comentarios.value;\n  if (campos.archivo.files.length > 0) {\n    datos.archivo = campos.archivo.files[0].name;\n  }\n  \n  // Mostrar resultado\n  mostrarSummary(datos, esValido);\n  \n  if (esValido) {\n    console.log('Datos del formulario:', datos);\n    // Aquí enviarías los datos al servidor\n    // formulario.reset();\n  }\n});\n\n// Inicializar\nactualizarBotonEnviar();\n```"
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
        title: "Interactividad de DOM y Eventos",
        description: "Crea una mini app que manipule el DOM y maneje eventos: añadir ítems, alternar estilos y validar input en tiempo real.",
        code: `<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>DOM y Eventos</title>\n  <style>\n    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }\n    .app { max-width: 680px; margin: 0 auto; }\n    .toolbar { display: flex; gap: 8px; margin: 12px 0; }\n    .list { margin-top: 12px; padding: 0; list-style: none; }\n    .item { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 8px; }\n    .item.highlight { background: #fffde7; border-color: #fdd835; }\n    .item .remove { margin-left: auto; background: #ef5350; color: white; border: 0; padding: 6px 10px; border-radius: 4px; cursor: pointer; }\n    .error { color: #d32f2f; font-size: 12px; margin-top: 4px; display: none; }\n    .error.active { display: block; }\n  </style>\n</head>\n<body>\n  <div class=\"app\">\n    <h1>DOM y Eventos</h1>\n    <label>Nuevo ítem</label>\n    <input id=\"input-texto\" type=\"text\" placeholder=\"Escribe y presiona Agregar\" />\n    <div id=\"error\" class=\"error\">Debes escribir al menos 3 caracteres</div>\n    <div class=\"toolbar\">\n      <button id=\"btn-agregar\">Agregar</button>\n      <button id=\"btn-toggle\">Alternar resaltado</button>\n      <button id=\"btn-limpiar\">Limpiar lista</button>\n    </div>\n    <ul id=\"lista\" class=\"list\"></ul>\n  </div>\n  <script>\n    const input = document.getElementById('input-texto');\n    const error = document.getElementById('error');\n    const lista = document.getElementById('lista');\n    const btnAgregar = document.getElementById('btn-agregar');\n    const btnToggle = document.getElementById('btn-toggle');\n    const btnLimpiar = document.getElementById('btn-limpiar');\n    input.addEventListener('input', function () {\n      const ok = this.value.trim().length >= 3;\n      error.classList.toggle('active', !ok && this.value.length > 0);\n    });\n    function agregar() {\n      const texto = input.value.trim();\n      if (texto.length < 3) {\n        error.classList.add('active');\n        return;\n      }\n      const li = document.createElement('li');\n      li.className = 'item';\n      li.innerHTML = '<input type=\\"checkbox\\" /> <span>' + texto + '</span> <button class=\\"remove\\">Eliminar</button>';\n      lista.appendChild(li);\n      input.value = '';\n      error.classList.remove('active');\n    }\n    btnAgregar.addEventListener('click', agregar);\n    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') agregar(); });\n    lista.addEventListener('click', function (e) {\n      if (e.target.classList.contains('remove')) {\n        e.target.closest('.item').remove();\n      }\n    });\n    btnToggle.addEventListener('click', function () {\n      document.querySelectorAll('.item').forEach(el => el.classList.toggle('highlight'));\n    });\n    btnLimpiar.addEventListener('click', function () { lista.innerHTML = ''; });\n  </script>\n</body>\n</html>`,
        solution: `<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>DOM y Eventos - Solución</title>\n  <style>\n    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }\n    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }\n    .app { max-width: 720px; margin: 0 auto; }\n    .toolbar { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }\n    .list { margin-top: 12px; padding: 0; list-style: none; }\n    .item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 8px; background: #fff; }\n    .item.highlight { background: #fffde7; border-color: #fdd835; }\n    .item .remove { margin-left: auto; background: #e53935; color: white; border: 0; padding: 6px 12px; border-radius: 6px; cursor: pointer; }\n    .item .remove:hover { background: #c62828; }\n    .error { color: #d32f2f; font-size: 12px; margin-top: 6px; display: none; }\n    .error.active { display: block; }\n  </style>\n</head>\n<body>\n  <div class=\"app\">\n    <h1>Interactividad con DOM y Eventos</h1>\n    <label for=\"input-texto\">Nuevo ítem</label>\n    <input id=\"input-texto\" type=\"text\" aria-describedby=\"error\" placeholder=\"Ej: Estudiar DOM\" />\n    <div id=\"error\" class=\"error\" role=\"alert\" aria-live=\"polite\">Debes escribir al menos 3 caracteres</div>\n    <div class=\"toolbar\">\n      <button id=\"btn-agregar\">Agregar</button>\n      <button id=\"btn-toggle\">Alternar resaltado</button>\n      <button id=\"btn-limpiar\">Limpiar lista</button>\n    </div>\n    <ul id=\"lista\" class=\"list\"></ul>\n  </div>\n  <script>\n    const qs = (s, r=document) => r.querySelector(s);\n    const qsa = (s, r=document) => Array.from(r.querySelectorAll(s));\n    const input = qs('#input-texto');\n    const error = qs('#error');\n    const lista = qs('#lista');\n    function validar(valor) { return valor.trim().length >= 3; }\n    input.addEventListener('input', (e) => {\n      const ok = validar(e.target.value);\n      error.classList.toggle('active', !ok && e.target.value.length>0);\n      e.target.setAttribute('aria-invalid', String(!ok));\n    });\n    function crearItem(texto) {\n      const li = document.createElement('li');\n      li.className = 'item';\n      li.innerHTML = '<input aria-label=\\"Marcar\\" type=\\"checkbox\\" /> <span></span> <button class=\\"remove\\" aria-label=\\"Eliminar\\">Eliminar</button>';\n      li.querySelector('span').textContent = texto;\n      return li;\n    }\n    function agregar() {\n      const texto = input.value.trim();\n      if (!validar(texto)) { error.classList.add('active'); input.focus(); return; }\n      lista.appendChild(crearItem(texto));\n      input.value='';\n      error.classList.remove('active');\n    }\n    qs('#btn-agregar').addEventListener('click', agregar);\n    input.addEventListener('keydown', (e)=>{ if(e.key==='Enter') agregar(); });\n    lista.addEventListener('click', (e)=>{ const item = e.target.closest('.item'); if (!item) return; if (e.target.classList.contains('remove')) { item.remove(); } });\n    qs('#btn-toggle').addEventListener('click', ()=>{ qsa('.item').forEach(el=> el.classList.toggle('highlight')); });\n    qs('#btn-limpiar').addEventListener('click', ()=>{ lista.innerHTML=''; });\n  </script>\n</body>\n</html>`
      }
    ]
  },
  {
    id: 12,
    title: "JavaScript - Arrays y Objetos Avanzados",
    duration: "3 horas",
    level: "Intermedio",
    completed: false,
    objectives: [
      "Dominar métodos avanzados de arrays",
      "Trabajar con estructuras de datos complejas",
      "Implementar algoritmos de búsqueda y ordenamiento",
      "Crear aplicaciones con persistencia de datos"
    ],
    content: {
      theoretical: [
        "Fundamentos: arrays, objetos y clases básicas",
        "Métodos avanzados de arrays: sort, splice, slice, concat",
        "Destructuring avanzado: arrays y objetos anidados",
        "Spread operator y rest parameters",
        "Map, Set y WeakMap/WeakSet",
        "Algoritmos de búsqueda y ordenamiento",
        "Estructuras de datos complejas y recursión"
      ],
      theoreticalDetails: {
        "Fundamentos: arrays, objetos y clases básicas": "Los arrays, objetos y clases son estructuras fundamentales en JavaScript. Los arrays almacenan listas de elementos, los objetos representan entidades con propiedades y métodos, y las clases son plantillas para crear objetos con comportamiento específico. Dominar estos conceptos es esencial para el desarrollo avanzado.\n\n**CASO REAL: Sistema de Gestión de Biblioteca**\n\n## 1. ARRAYS - Listas de Datos\n```javascript\n// Array de libros en la biblioteca\nconst libros = [\n  'El Quijote',\n  '1984',\n  'Cien años de soledad',\n  'Rayuela',\n  'Don Juan Tenorio'\n];\n\n// Sintaxis básica de arrays\nconsole.log(libros[0]); // 'El Quijote' (primer elemento)\nconsole.log(libros.length); // 5 (cantidad de elementos)\n\n// Agregar elementos\nlibros.push('La Odisea'); // Al final\nlibros.unshift('La Ilíada'); // Al inicio\n\n// Eliminar elementos\nconst ultimoLibro = libros.pop(); // Elimina y retorna el último\nconst primerLibro = libros.shift(); // Elimina y retorna el primero\n\n// Buscar elementos\nconst indice = libros.indexOf('1984'); // 2\nconst existe = libros.includes('Rayuela'); // true\n\n// Iterar sobre arrays\nlibros.forEach(libro => {\n  console.log(`Libro: ${libro}`);\n});\n\n// Transformar arrays\nconst librosEnMayusculas = libros.map(libro => libro.toUpperCase());\nconst librosLargos = libros.filter(libro => libro.length > 10);\n```\n\n## 2. OBJETOS - Entidades con Propiedades\n```javascript\n// Objeto representando un libro\nconst libro = {\n  titulo: 'El Quijote',\n  autor: 'Miguel de Cervantes',\n  año: 1605,\n  genero: 'Novela',\n  disponible: true,\n  prestadoPor: null\n};\n\n// Sintaxis básica de objetos\nconsole.log(libro.titulo); // Acceso con punto\nconsole.log(libro['autor']); // Acceso con corchetes\n\n// Modificar propiedades\nlibro.disponible = false;\nlibro.prestadoPor = 'Juan Pérez';\n\n// Agregar nuevas propiedades\nlibro.isbn = '978-84-376-0494-7';\nlibro.editorial = 'Cátedra';\n\n// Eliminar propiedades\ndelete libro.prestadoPor;\n\n// Verificar si existe una propiedad\nif ('isbn' in libro) {\n  console.log('ISBN disponible:', libro.isbn);\n}\n\n// Iterar sobre propiedades\nfor (const clave in libro) {\n  console.log(`${clave}: ${libro[clave]}`);\n}\n\n// Obtener claves y valores\nconst claves = Object.keys(libro); // ['titulo', 'autor', 'año', ...]\nconst valores = Object.values(libro); // ['El Quijote', 'Miguel de Cervantes', ...]\nconst entradas = Object.entries(libro); // [['titulo', 'El Quijote'], ...]\n```\n\n## 3. CLASES - Plantillas para Objetos\n```javascript\n// Clase para representar un libro en la biblioteca\nclass Libro {\n  // Constructor - se ejecuta al crear una instancia\n  constructor(titulo, autor, año, genero) {\n    this.titulo = titulo;\n    this.autor = autor;\n    this.año = año;\n    this.genero = genero;\n    this.disponible = true;\n    this.prestadoPor = null;\n    this.fechaPrestamo = null;\n  }\n  \n  // Métodos - funciones que pertenecen a la clase\n  prestar(usuario) {\n    if (this.disponible) {\n      this.disponible = false;\n      this.prestadoPor = usuario;\n      this.fechaPrestamo = new Date();\n      return `Libro prestado a ${usuario}`;\n    } else {\n      return 'El libro no está disponible';\n    }\n  }\n  \n  devolver() {\n    if (!this.disponible) {\n      const usuario = this.prestadoPor;\n      this.disponible = true;\n      this.prestadoPor = null;\n      this.fechaPrestamo = null;\n      return `Libro devuelto por ${usuario}`;\n    } else {\n      return 'El libro ya está disponible';\n    }\n  }\n  \n  // Método para obtener información\n  obtenerInfo() {\n    return `${this.titulo} por ${this.autor} (${this.año})`;\n  }\n  \n  // Método estático - pertenece a la clase, no a las instancias\n  static esAntiguo(libro) {\n    return (new Date().getFullYear() - libro.año) > 100;\n  }\n}\n\n// Crear instancias (objetos) de la clase\nconst quijote = new Libro('El Quijote', 'Miguel de Cervantes', 1605, 'Novela');\nconst libro1984 = new Libro('1984', 'George Orwell', 1949, 'Ficción distópica');\nconst rayuela = new Libro('Rayuela', 'Julio Cortázar', 1963, 'Novela experimental');\n\n// Usar los métodos\nconsole.log(quijote.obtenerInfo()); // 'El Quijote por Miguel de Cervantes (1605)'\nconsole.log(quijote.prestar('María García')); // 'Libro prestado a María García'\nconsole.log(quijote.disponible); // false\nconsole.log(quijote.devolver()); // 'Libro devuelto por María García'\n\n// Usar método estático\nconsole.log(Libro.esAntiguo(quijote)); // true\nconsole.log(Libro.esAntiguo(libro1984)); // false\n```\n\n## 4. ARRAYS DE OBJETOS - Colecciones Complejas\n```javascript\n// Array de objetos Libro\nconst biblioteca = [\n  new Libro('El Quijote', 'Miguel de Cervantes', 1605, 'Novela'),\n  new Libro('1984', 'George Orwell', 1949, 'Ficción distópica'),\n  new Libro('Rayuela', 'Julio Cortázar', 1963, 'Novela experimental'),\n  new Libro('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Realismo mágico'),\n  new Libro('Don Juan Tenorio', 'José Zorrilla', 1844, 'Drama romántico')\n];\n\n// Buscar libros por criterios\nconst librosAntiguos = biblioteca.filter(libro => libro.año < 1900);\nconst librosPorAutor = biblioteca.filter(libro => libro.autor.includes('Cervantes'));\nconst primerLibro = biblioteca.find(libro => libro.disponible);\n\n// Transformar arrays\nconst titulos = biblioteca.map(libro => libro.titulo);\nconst infoLibros = biblioteca.map(libro => libro.obtenerInfo());\n\n// Ordenar libros\nconst librosPorAño = biblioteca.sort((a, b) => a.año - b.año);\nconst librosPorTitulo = biblioteca.sort((a, b) => a.titulo.localeCompare(b.titulo));\n\n// Calcular estadísticas\nconst totalLibros = biblioteca.length;\nconst librosDisponibles = biblioteca.filter(libro => libro.disponible).length;\nconst añoPromedio = biblioteca.reduce((suma, libro) => suma + libro.año, 0) / totalLibros;\n\nconsole.log(`Total de libros: ${totalLibros}`);\nconsole.log(`Libros disponibles: ${librosDisponibles}`);\nconsole.log(`Año promedio: ${Math.round(añoPromedio)}`);\n```\n\n## 5. HERENCIA - Clases que Extienden Otras\n```javascript\n// Clase base para todos los materiales\nclass Material {\n  constructor(titulo, autor, año) {\n    this.titulo = titulo;\n    this.autor = autor;\n    this.año = año;\n    this.disponible = true;\n  }\n  \n  prestar() {\n    this.disponible = false;\n    return `${this.titulo} prestado`;\n  }\n  \n  devolver() {\n    this.disponible = true;\n    return `${this.titulo} devuelto`;\n  }\n}\n\n// Clase que extiende Material\nclass Libro extends Material {\n  constructor(titulo, autor, año, paginas, genero) {\n    super(titulo, autor, año); // Llama al constructor de la clase padre\n    this.paginas = paginas;\n    this.genero = genero;\n  }\n  \n  // Método específico de libros\n  obtenerDensidad() {\n    return this.paginas / (new Date().getFullYear() - this.año);\n  }\n}\n\n// Clase para revistas\nclass Revista extends Material {\n  constructor(titulo, editor, año, numero, tema) {\n    super(titulo, editor, año);\n    this.numero = numero;\n    this.tema = tema;\n  }\n  \n  // Método específico de revistas\n  esActual() {\n    const añoActual = new Date().getFullYear();\n    return (añoActual - this.año) <= 1;\n  }\n}\n\n// Crear instancias\nconst libro = new Libro('El Quijote', 'Cervantes', 1605, 863, 'Novela');\nconst revista = new Revista('National Geographic', 'NG Society', 2023, 245, 'Naturaleza');\n\n// Usar métodos heredados y propios\nconsole.log(libro.prestar()); // Método heredado\nconsole.log(libro.obtenerDensidad()); // Método propio\nconsole.log(revista.esActual()); // Método propio\n```",
        
        "Métodos avanzados de arrays: sort, splice, slice, concat": "Los métodos avanzados de arrays permiten manipular, ordenar y combinar arrays de manera eficiente. sort ordena elementos, splice modifica arrays in-place, slice extrae secciones, y concat combina arrays. Son fundamentales para el manejo avanzado de datos.\n\n**Ejemplos:**\n```javascript\n// sort: Ordenar arrays\nconst numeros = [3, 1, 4, 1, 5, 9, 2, 6];\nconst numerosOrdenados = [...numeros].sort((a, b) => a - b);\nconsole.log(numerosOrdenados); // [1, 1, 2, 3, 4, 5, 6, 9]\n\nconst personas = [\n  { nombre: 'Juan', edad: 25 },\n  { nombre: 'María', edad: 30 },\n  { nombre: 'Pedro', edad: 20 }\n];\n\n// Ordenar por edad\nconst personasPorEdad = [...personas].sort((a, b) => a.edad - b.edad);\nconsole.log(personasPorEdad); // [{ nombre: 'Pedro', edad: 20 }, ...]\n\n// Ordenar por nombre\nconst personasPorNombre = [...personas].sort((a, b) => a.nombre.localeCompare(b.nombre));\nconsole.log(personasPorNombre); // [{ nombre: 'Juan', edad: 25 }, ...]\n\n// splice: Modificar array in-place\nconst frutas = ['manzana', 'banana', 'naranja', 'uva'];\nconst eliminadas = frutas.splice(1, 2, 'kiwi', 'mango');\nconsole.log(frutas); // ['manzana', 'kiwi', 'mango', 'uva']\nconsole.log(eliminadas); // ['banana', 'naranja']\n\n// Agregar elementos\nfrutas.splice(2, 0, 'pera', 'durazno');\nconsole.log(frutas); // ['manzana', 'kiwi', 'pera', 'durazno', 'mango', 'uva']\n\n// slice: Extraer sección sin modificar original\nconst numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst primeros3 = numeros2.slice(0, 3);\nconsole.log(primeros3); // [1, 2, 3]\n\nconst ultimos3 = numeros2.slice(-3);\nconsole.log(ultimos3); // [8, 9, 10]\n\nconst delMedio = numeros2.slice(3, 7);\nconsole.log(delMedio); // [4, 5, 6, 7]\n\n// concat: Combinar arrays\nconst array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nconst array3 = [7, 8, 9];\n\nconst combinado = array1.concat(array2, array3);\nconsole.log(combinado); // [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n// Con spread operator\nconst combinado2 = [...array1, ...array2, ...array3];\nconsole.log(combinado2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n// Métodos de búsqueda avanzados\nconst productos = [\n  { id: 1, nombre: 'Laptop', precio: 1000, categoria: 'electronica' },\n  { id: 2, nombre: 'Mouse', precio: 25, categoria: 'electronica' },\n  { id: 3, nombre: 'Libro', precio: 15, categoria: 'libros' },\n  { id: 4, nombre: 'Silla', precio: 200, categoria: 'muebles' }\n];\n\n// findLast: Encontrar último elemento (ES2023)\nconst ultimoElectronico = productos.findLast(p => p.categoria === 'electronica');\nconsole.log(ultimoElectronico); // { id: 2, nombre: 'Mouse', ... }\n\n// findLastIndex: Índice del último elemento\nconst indiceUltimo = productos.findLastIndex(p => p.precio < 100);\nconsole.log(indiceUltimo); // 2\n\n// flat: Aplanar arrays anidados\nconst arraysAnidados = [1, [2, 3], [4, [5, 6]]];\nconst aplanado = arraysAnidados.flat();\nconsole.log(aplanado); // [1, 2, 3, 4, [5, 6]]\n\nconst completamenteAplanado = arraysAnidados.flat(2);\nconsole.log(completamenteAplanado); // [1, 2, 3, 4, 5, 6]\n\n// flatMap: Mapear y aplanar en una operación\nconst frases = ['Hola mundo', 'JavaScript es genial'];\nconst palabras = frases.flatMap(frase => frase.split(' '));\nconsole.log(palabras); // ['Hola', 'mundo', 'JavaScript', 'es', 'genial']\n\n// Métodos de verificación\nconst numeros3 = [1, 2, 3, 4, 5];\nconsole.log(numeros3.includes(3)); // true\nconsole.log(numeros3.includes(6)); // false\n\n// Con objetos\nconst tieneProducto = productos.some(p => p.precio > 500);\nconsole.log(tieneProducto); // true\n\nconst todosBaratos = productos.every(p => p.precio < 1000);\nconsole.log(todosBaratos); // false\n```",
        
        "Destructuring avanzado: arrays y objetos anidados": "El destructuring avanzado permite extraer valores de estructuras de datos complejas de manera elegante. Se puede usar con arrays anidados, objetos anidados, y combinaciones complejas. Es una característica poderosa para trabajar con datos estructurados.\n\n**Ejemplos:**\n```javascript\n// Destructuring de arrays anidados\nconst datos = [1, [2, 3], [4, [5, 6]]];\nconst [primero, [segundo, tercero], [cuarto, [quinto, sexto]]] = datos;\nconsole.log(primero, segundo, tercero, cuarto, quinto, sexto); // 1 2 3 4 5 6\n\n// Destructuring con valores por defecto\nconst colores = ['rojo', 'verde'];\nconst [color1, color2, color3 = 'azul'] = colores;\nconsole.log(color1, color2, color3); // rojo verde azul\n\n// Destructuring de objetos anidados\nconst usuario = {\n  nombre: 'Juan',\n  edad: 25,\n  direccion: {\n    calle: 'Calle Mayor',\n    numero: 123,\n    ciudad: 'Madrid',\n    coordenadas: {\n      lat: 40.4168,\n      lng: -3.7038\n    }\n  },\n  hobbies: ['leer', 'cocinar', 'viajar']\n};\n\n// Destructuring anidado\nconst {\n  nombre,\n  edad,\n  direccion: {\n    calle,\n    numero,\n    ciudad,\n    coordenadas: { lat, lng }\n  },\n  hobbies: [hobby1, hobby2, hobby3]\n} = usuario;\n\nconsole.log(nombre, calle, lat, hobby1); // Juan Calle Mayor 40.4168 leer\n\n// Destructuring con renombrado\nconst {\n  nombre: nombreUsuario,\n  direccion: {\n    calle: direccionCalle,\n    ciudad: ciudadUsuario\n  }\n} = usuario;\n\nconsole.log(nombreUsuario, direccionCalle, ciudadUsuario); // Juan Calle Mayor Madrid\n\n// Destructuring con valores por defecto anidados\nconst configuracion = {\n  tema: 'oscuro',\n  notificaciones: {\n    email: true\n  }\n};\n\nconst {\n  tema = 'claro',\n  notificaciones: {\n    email = false,\n    push = false,\n    sms = false\n  } = {},\n  idioma = 'es'\n} = configuracion;\n\nconsole.log(tema, email, push, sms, idioma); // oscuro true false false es\n\n// Destructuring en parámetros de función\nfunction procesarUsuario({\n  nombre,\n  edad,\n  direccion: { ciudad } = {},\n  hobbies = []\n}) {\n  console.log(`Usuario: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);\n  console.log(`Hobbies: ${hobbies.join(', ')}`);\n}\n\nprocesarUsuario(usuario);\n\n// Destructuring con rest operator\nconst numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst [primero, segundo, ...resto] = numeros;\nconsole.log(primero, segundo); // 1 2\nconsole.log(resto); // [3, 4, 5, 6, 7, 8, 9, 10]\n\n// Destructuring de objetos con rest\nconst persona = {\n  nombre: 'María',\n  edad: 30,\n  ciudad: 'Barcelona',\n  profesion: 'Desarrolladora',\n  salario: 50000\n};\n\nconst { nombre, edad, ...otrosDatos } = persona;\nconsole.log(nombre, edad); // María 30\nconsole.log(otrosDatos); // { ciudad: 'Barcelona', profesion: 'Desarrolladora', salario: 50000 }\n\n// Destructuring en bucles\nconst estudiantes = [\n  { nombre: 'Juan', calificaciones: [8, 9, 7] },\n  { nombre: 'María', calificaciones: [9, 8, 9] },\n  { nombre: 'Pedro', calificaciones: [7, 8, 6] }\n];\n\nfor (const { nombre, calificaciones: [primera, segunda, tercera] } of estudiantes) {\n  console.log(`${nombre}: ${primera}, ${segunda}, ${tercera}`);\n}\n\n// Destructuring con arrays de objetos\nconst empleados = [\n  { id: 1, nombre: 'Juan', departamento: 'IT', salario: 50000 },\n  { id: 2, nombre: 'María', departamento: 'HR', salario: 45000 },\n  { id: 3, nombre: 'Pedro', departamento: 'IT', salario: 55000 }\n];\n\n// Extraer solo nombres y departamentos\nconst nombresYDepartamentos = empleados.map(({ nombre, departamento }) => ({ nombre, departamento }));\nconsole.log(nombresYDepartamentos);\n\n// Destructuring condicional\nfunction obtenerUsuario(id) {\n  // Simular datos de usuario\n  const usuarios = {\n    1: { nombre: 'Juan', edad: 25, activo: true },\n    2: { nombre: 'María', edad: 30, activo: false }\n  };\n  \n  return usuarios[id] || null;\n}\n\nconst usuario1 = obtenerUsuario(1);\nif (usuario1) {\n  const { nombre, edad, activo } = usuario1;\n  console.log(`Usuario activo: ${nombre}, edad: ${edad}`);\n}\n\n// Destructuring con funciones que retornan arrays\nfunction obtenerCoordenadas() {\n  return [40.4168, -3.7038];\n}\n\nconst [latitud, longitud] = obtenerCoordenadas();\nconsole.log(`Latitud: ${latitud}, Longitud: ${longitud}`);\n\n// Destructuring con funciones que retornan objetos\nfunction obtenerConfiguracion() {\n  return {\n    tema: 'oscuro',\n    idioma: 'es',\n    notificaciones: true\n  };\n}\n\nconst { tema, idioma, notificaciones } = obtenerConfiguracion();\nconsole.log(`Tema: ${tema}, Idioma: ${idioma}, Notificaciones: ${notificaciones}`);\n```",
        
        "Spread operator y rest parameters": "El spread operator (...) y rest parameters son características poderosas de ES6+ que permiten trabajar con arrays y objetos de manera más flexible. El spread operator expande elementos, mientras que rest parameters captura elementos restantes. Son fundamentales para la programación moderna en JavaScript.\n\n**Ejemplos:**\n```javascript\n// Spread operator con arrays\nconst numeros1 = [1, 2, 3];\nconst numeros2 = [4, 5, 6];\nconst numeros3 = [7, 8, 9];\n\n// Combinar arrays\nconst todosNumeros = [...numeros1, ...numeros2, ...numeros3];\nconsole.log(todosNumeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n// Agregar elementos\nconst numerosConCero = [0, ...numeros1, 10];\nconsole.log(numerosConCero); // [0, 1, 2, 3, 10]\n\n// Copiar arrays\nconst numerosCopia = [...numeros1];\nnumerosCopia.push(4);\nconsole.log(numeros1); // [1, 2, 3] (sin cambios)\nconsole.log(numerosCopia); // [1, 2, 3, 4]\n\n// Spread operator con objetos\nconst persona = {\n  nombre: 'Juan',\n  edad: 25,\n  ciudad: 'Madrid'\n};\n\nconst personaActualizada = {\n  ...persona,\n  edad: 26,\n  profesion: 'Desarrollador'\n};\nconsole.log(personaActualizada); // { nombre: 'Juan', edad: 26, ciudad: 'Madrid', profesion: 'Desarrollador' }\n\n// Combinar objetos\nconst configuracion = {\n  tema: 'oscuro',\n  idioma: 'es'\n};\n\nconst configuracionUsuario = {\n  notificaciones: true,\n  sonido: false\n};\n\nconst configuracionCompleta = {\n  ...configuracion,\n  ...configuracionUsuario,\n  tema: 'claro' // Sobrescribe el tema\n};\nconsole.log(configuracionCompleta); // { tema: 'claro', idioma: 'es', notificaciones: true, sonido: false }\n\n// Rest parameters en funciones\nfunction sumar(...numeros) {\n  return numeros.reduce((acc, num) => acc + num, 0);\n}\n\nconsole.log(sumar(1, 2, 3, 4, 5)); // 15\nconsole.log(sumar(10, 20)); // 30\n\n// Rest parameters con otros parámetros\nfunction crearUsuario(nombre, edad, ...hobbies) {\n  return {\n    nombre,\n    edad,\n    hobbies\n  };\n}\n\nconst usuario = crearUsuario('María', 30, 'leer', 'cocinar', 'viajar');\nconsole.log(usuario); // { nombre: 'María', edad: 30, hobbies: ['leer', 'cocinar', 'viajar'] }\n\n// Destructuring con rest\nconst [primero, segundo, ...resto] = [1, 2, 3, 4, 5, 6];\nconsole.log(primero, segundo); // 1 2\nconsole.log(resto); // [3, 4, 5, 6]\n\nconst { nombre, edad, ...otrosDatos } = {\n  nombre: 'Pedro',\n  edad: 28,\n  ciudad: 'Barcelona',\n  profesion: 'Diseñador',\n  salario: 45000\n};\nconsole.log(nombre, edad); // Pedro 28\nconsole.log(otrosDatos); // { ciudad: 'Barcelona', profesion: 'Diseñador', salario: 45000 }\n\n// Spread con strings\nconst nombre = 'Juan';\nconst letras = [...nombre];\nconsole.log(letras); // ['J', 'u', 'a', 'n']\n\n// Spread con NodeList\nconst elementos = document.querySelectorAll('.mi-clase');\nconst arrayElementos = [...elementos];\nconsole.log(arrayElementos); // Array de elementos DOM\n\n// Spread en llamadas a funciones\nfunction encontrarMaximo(...numeros) {\n  return Math.max(...numeros);\n}\n\nconst numeros = [1, 5, 3, 9, 2];\nconsole.log(encontrarMaximo(...numeros)); // 9\n\n// Spread con objetos y arrays anidados\nconst datos = {\n  usuarios: [\n    { nombre: 'Juan', edad: 25 },\n    { nombre: 'María', edad: 30 }\n  ],\n  configuracion: {\n    tema: 'oscuro',\n    idioma: 'es'\n  }\n};\n\n// Clonar objeto con arrays anidados\nconst datosClonados = {\n  ...datos,\n  usuarios: [...datos.usuarios],\n  configuracion: { ...datos.configuracion }\n};\n\n// Modificar clon sin afectar original\ndatosClonados.usuarios.push({ nombre: 'Pedro', edad: 28 });\ndatosClonados.configuracion.tema = 'claro';\n\nconsole.log(datos.usuarios.length); // 2 (sin cambios)\nconsole.log(datosClonados.usuarios.length); // 3\n\n// Rest en objetos (ES2018)\nconst objeto = {\n  a: 1,\n  b: 2,\n  c: 3,\n  d: 4,\n  e: 5\n};\n\nconst { a, b, ...resto } = objeto;\nconsole.log(a, b); // 1 2\nconsole.log(resto); // { c: 3, d: 4, e: 5 }\n\n// Spread con Map y Set\nconst mapa = new Map([['a', 1], ['b', 2]]);\nconst arrayDelMapa = [...mapa];\nconsole.log(arrayDelMapa); // [['a', 1], ['b', 2]]\n\nconst set = new Set([1, 2, 3, 3, 4]);\nconst arrayDelSet = [...set];\nconsole.log(arrayDelSet); // [1, 2, 3, 4]\n\n// Ejemplo práctico: función de merge profundo\nfunction mergeProfundo(...objetos) {\n  return objetos.reduce((resultado, objeto) => {\n    for (const [clave, valor] of Object.entries(objeto)) {\n      if (typeof valor === 'object' && valor !== null && !Array.isArray(valor)) {\n        resultado[clave] = mergeProfundo(resultado[clave] || {}, valor);\n      } else {\n        resultado[clave] = valor;\n      }\n    }\n    return resultado;\n  }, {});\n}\n\nconst obj1 = { a: 1, b: { c: 2 } };\nconst obj2 = { b: { d: 3 }, e: 4 };\nconst obj3 = { f: 5 };\n\nconst resultado = mergeProfundo(obj1, obj2, obj3);\nconsole.log(resultado); // { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }\n```",
        
        "Map, Set y WeakMap/WeakSet": "Map, Set, WeakMap y WeakSet son estructuras de datos avanzadas en JavaScript que ofrecen capacidades específicas para diferentes casos de uso. Map permite claves de cualquier tipo, Set almacena valores únicos, y las versiones Weak permiten garbage collection automático.\n\n**Ejemplos:**\n```javascript\n// Map: Estructura clave-valor con claves de cualquier tipo\nconst mapa = new Map();\n\n// Agregar elementos\nmapa.set('nombre', 'Juan');\nmapa.set(123, 'número como clave');\nmapa.set({ id: 1 }, 'objeto como clave');\nmapa.set(true, 'booleano como clave');\n\nconsole.log(mapa.get('nombre')); // Juan\nconsole.log(mapa.get(123)); // número como clave\nconsole.log(mapa.has('nombre')); // true\nconsole.log(mapa.size); // 4\n\n// Iterar sobre Map\nfor (const [clave, valor] of mapa) {\n  console.log(`${clave}: ${valor}`);\n}\n\n// Map con arrays de inicialización\nconst mapaInicial = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3]\n]);\n\n// Convertir Map a Array\nconst arrayDelMapa = Array.from(mapaInicial);\nconsole.log(arrayDelMapa); // [['a', 1], ['b', 2], ['c', 3]]\n\n// Set: Colección de valores únicos\nconst conjunto = new Set();\n\n// Agregar elementos\nconjunto.add(1);\nconjunto.add(2);\nconjunto.add(2); // Duplicado, no se agrega\nconjunto.add('texto');\nconjunto.add({ id: 1 });\nconjunto.add({ id: 1 }); // Objetos diferentes, ambos se agregan\n\nconsole.log(conjunto.size); // 5\nconsole.log(conjunto.has(2)); // true\n\n// Iterar sobre Set\nfor (const valor of conjunto) {\n  console.log(valor);\n}\n\n// Set con array de inicialización\nconst conjuntoInicial = new Set([1, 2, 3, 3, 4, 4, 5]);\nconsole.log(conjuntoInicial); // Set {1, 2, 3, 4, 5}\n\n// Operaciones con Set\nconst set1 = new Set([1, 2, 3, 4]);\nconst set2 = new Set([3, 4, 5, 6]);\n\n// Unión\nconst union = new Set([...set1, ...set2]);\nconsole.log(union); // Set {1, 2, 3, 4, 5, 6}\n\n// Intersección\nconst interseccion = new Set([...set1].filter(x => set2.has(x)));\nconsole.log(interseccion); // Set {3, 4}\n\n// Diferencia\nconst diferencia = new Set([...set1].filter(x => !set2.has(x)));\nconsole.log(diferencia); // Set {1, 2}\n\n// WeakMap: Map con referencias débiles\nconst weakMap = new WeakMap();\nconst obj1 = { id: 1 };\nconst obj2 = { id: 2 };\n\nweakMap.set(obj1, 'datos del objeto 1');\nweakMap.set(obj2, 'datos del objeto 2');\n\nconsole.log(weakMap.get(obj1)); // datos del objeto 1\nconsole.log(weakMap.has(obj1)); // true\n\n// Eliminar referencia\nobj1 = null; // El objeto puede ser garbage collected\n\n// WeakSet: Set con referencias débiles\nconst weakSet = new WeakSet();\nconst obj3 = { id: 3 };\nconst obj4 = { id: 4 };\n\nweakSet.add(obj3);\nweakSet.add(obj4);\n\nconsole.log(weakSet.has(obj3)); // true\n\n// Casos de uso prácticos\n// 1. Cache con Map\nclass Cache {\n  constructor() {\n    this.cache = new Map();\n    this.maxSize = 100;\n  }\n  \n  set(key, value) {\n    if (this.cache.size >= this.maxSize) {\n      const firstKey = this.cache.keys().next().value;\n      this.cache.delete(firstKey);\n    }\n    this.cache.set(key, value);\n  }\n  \n  get(key) {\n    return this.cache.get(key);\n  }\n  \n  has(key) {\n    return this.cache.has(key);\n  }\n  \n  clear() {\n    this.cache.clear();\n  }\n}\n\nconst cache = new Cache();\ncache.set('usuario:1', { nombre: 'Juan', edad: 25 });\ncache.set('usuario:2', { nombre: 'María', edad: 30 });\nconsole.log(cache.get('usuario:1')); // { nombre: 'Juan', edad: 25 }\n\n// 2. Eliminar duplicados con Set\nconst numeros = [1, 2, 3, 3, 4, 4, 5, 5, 6];\nconst numerosUnicos = [...new Set(numeros)];\nconsole.log(numerosUnicos); // [1, 2, 3, 4, 5, 6]\n\n// 3. Contar elementos únicos\nconst palabras = ['hola', 'mundo', 'hola', 'javascript', 'mundo', 'hola'];\nconst palabrasUnicas = new Set(palabras);\nconsole.log(`Palabras únicas: ${palabrasUnicas.size}`); // 3\n\n// 4. Mapeo de objetos con WeakMap\nconst metadata = new WeakMap();\n\nfunction agregarMetadata(objeto, datos) {\n  metadata.set(objeto, datos);\n}\n\nfunction obtenerMetadata(objeto) {\n  return metadata.get(objeto);\n}\n\nconst usuario = { nombre: 'Pedro' };\nagregarMetadata(usuario, { creado: new Date(), version: 1 });\nconsole.log(obtenerMetadata(usuario)); // { creado: Date, version: 1 }\n\n// 5. Tracking de objetos con WeakSet\nconst objetosProcesados = new WeakSet();\n\nfunction procesarObjeto(objeto) {\n  if (objetosProcesados.has(objeto)) {\n    console.log('Objeto ya procesado');\n    return;\n  }\n  \n  objetosProcesados.add(objeto);\n  console.log('Procesando objeto:', objeto);\n}\n\nconst obj = { id: 1 };\nprocesarObjeto(obj); // Procesando objeto: { id: 1 }\nprocesarObjeto(obj); // Objeto ya procesado\n\n// 6. Sistema de eventos con Map\nclass EventEmitter {\n  constructor() {\n    this.events = new Map();\n  }\n  \n  on(evento, callback) {\n    if (!this.events.has(evento)) {\n      this.events.set(evento, new Set());\n    }\n    this.events.get(evento).add(callback);\n  }\n  \n  off(evento, callback) {\n    if (this.events.has(evento)) {\n      this.events.get(evento).delete(callback);\n    }\n  }\n  \n  emit(evento, ...args) {\n    if (this.events.has(evento)) {\n      for (const callback of this.events.get(evento)) {\n        callback(...args);\n      }\n    }\n  }\n}\n\nconst emitter = new EventEmitter();\nconst callback1 = (data) => console.log('Callback 1:', data);\nconst callback2 = (data) => console.log('Callback 2:', data);\n\nemitter.on('test', callback1);\nemitter.on('test', callback2);\nemitter.emit('test', 'Hola mundo');\n// Callback 1: Hola mundo\n// Callback 2: Hola mundo\n\nemitter.off('test', callback1);\nemitter.emit('test', 'Segundo mensaje');\n// Callback 2: Segundo mensaje\n```",
        
        "Algoritmos de búsqueda y ordenamiento": "Los algoritmos de búsqueda y ordenamiento son fundamentales en programación. JavaScript proporciona métodos nativos como sort(), pero entender los algoritmos subyacentes es crucial para optimizar el rendimiento y resolver problemas complejos. Incluyen búsqueda lineal, binaria, y algoritmos de ordenamiento como bubble sort, quick sort, y merge sort.\n\n**Ejemplos:**\n```javascript\n// Búsqueda lineal (Linear Search)\nfunction busquedaLineal(array, elemento) {\n  for (let i = 0; i < array.length; i++) {\n    if (array[i] === elemento) {\n      return i; // Retorna el índice\n    }\n  }\n  return -1; // No encontrado\n}\n\nconst numeros = [1, 3, 5, 7, 9, 11, 13, 15];\nconsole.log(busquedaLineal(numeros, 7)); // 3\nconsole.log(busquedaLineal(numeros, 4)); // -1\n\n// Búsqueda binaria (Binary Search) - requiere array ordenado\nfunction busquedaBinaria(array, elemento) {\n  let inicio = 0;\n  let fin = array.length - 1;\n  \n  while (inicio <= fin) {\n    const medio = Math.floor((inicio + fin) / 2);\n    \n    if (array[medio] === elemento) {\n      return medio;\n    } else if (array[medio] < elemento) {\n      inicio = medio + 1;\n    } else {\n      fin = medio - 1;\n    }\n  }\n  \n  return -1;\n}\n\nconsole.log(busquedaBinaria(numeros, 7)); // 3\nconsole.log(busquedaBinaria(numeros, 4)); // -1\n\n// Búsqueda en objetos\nfunction busquedaPorPropiedad(array, propiedad, valor) {\n  return array.findIndex(item => item[propiedad] === valor);\n}\n\nconst estudiantes = [\n  { nombre: 'Juan', edad: 20, calificacion: 85 },\n  { nombre: 'María', edad: 22, calificacion: 92 },\n  { nombre: 'Pedro', edad: 21, calificacion: 78 }\n];\n\nconsole.log(busquedaPorPropiedad(estudiantes, 'nombre', 'María')); // 1\nconsole.log(busquedaPorPropiedad(estudiantes, 'calificacion', 78)); // 2\n\n// Bubble Sort (Ordenamiento burbuja)\nfunction bubbleSort(array) {\n  const arr = [...array]; // Copia para no modificar el original\n  const n = arr.length;\n  \n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        // Intercambiar elementos\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  \n  return arr;\n}\n\nconst numerosDesordenados = [64, 34, 25, 12, 22, 11, 90];\nconsole.log(bubbleSort(numerosDesordenados)); // [11, 12, 22, 25, 34, 64, 90]\n\n// Quick Sort (Ordenamiento rápido)\nfunction quickSort(array) {\n  if (array.length <= 1) {\n    return array;\n  }\n  \n  const pivot = array[Math.floor(array.length / 2)];\n  const menores = array.filter(x => x < pivot);\n  const iguales = array.filter(x => x === pivot);\n  const mayores = array.filter(x => x > pivot);\n  \n  return [...quickSort(menores), ...iguales, ...quickSort(mayores)];\n}\n\nconsole.log(quickSort(numerosDesordenados)); // [11, 12, 22, 25, 34, 64, 90]\n\n// Merge Sort (Ordenamiento por mezcla)\nfunction mergeSort(array) {\n  if (array.length <= 1) {\n    return array;\n  }\n  \n  const medio = Math.floor(array.length / 2);\n  const izquierda = array.slice(0, medio);\n  const derecha = array.slice(medio);\n  \n  return merge(mergeSort(izquierda), mergeSort(derecha));\n}\n\nfunction merge(izquierda, derecha) {\n  const resultado = [];\n  let i = 0, j = 0;\n  \n  while (i < izquierda.length && j < derecha.length) {\n    if (izquierda[i] <= derecha[j]) {\n      resultado.push(izquierda[i]);\n      i++;\n    } else {\n      resultado.push(derecha[j]);\n      j++;\n    }\n  }\n  \n  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));\n}\n\nconsole.log(mergeSort(numerosDesordenados)); // [11, 12, 22, 25, 34, 64, 90]\n\n// Ordenamiento de objetos por propiedad\nfunction ordenarPorPropiedad(array, propiedad, orden = 'asc') {\n  return array.sort((a, b) => {\n    if (orden === 'asc') {\n      return a[propiedad] - b[propiedad];\n    } else {\n      return b[propiedad] - a[propiedad];\n    }\n  });\n}\n\nconst productos = [\n  { nombre: 'Laptop', precio: 1000, stock: 5 },\n  { nombre: 'Mouse', precio: 25, stock: 20 },\n  { nombre: 'Teclado', precio: 75, stock: 15 }\n];\n\nconsole.log(ordenarPorPropiedad(productos, 'precio', 'asc'));\n// [{ nombre: 'Mouse', precio: 25, stock: 20 }, { nombre: 'Teclado', precio: 75, stock: 15 }, { nombre: 'Laptop', precio: 1000, stock: 5 }]\n\n// Ordenamiento personalizado con función de comparación\nfunction ordenarPersonalizado(array, comparar) {\n  return array.sort(comparar);\n}\n\n// Ordenar por múltiples criterios\nconst empleados = [\n  { nombre: 'Juan', departamento: 'IT', salario: 50000, antiguedad: 3 },\n  { nombre: 'María', departamento: 'HR', salario: 45000, antiguedad: 5 },\n  { nombre: 'Pedro', departamento: 'IT', salario: 55000, antiguedad: 2 },\n  { nombre: 'Ana', departamento: 'HR', salario: 48000, antiguedad: 4 }\n];\n\n// Ordenar por departamento, luego por salario\nconst empleadosOrdenados = ordenarPersonalizado(empleados, (a, b) => {\n  if (a.departamento !== b.departamento) {\n    return a.departamento.localeCompare(b.departamento);\n  }\n  return b.salario - a.salario; // Mayor salario primero\n});\n\nconsole.log(empleadosOrdenados);\n\n// Algoritmo de búsqueda de texto (Búsqueda de subcadena)\nfunction busquedaTexto(texto, patron) {\n  const indices = [];\n  let posicion = 0;\n  \n  while (posicion < texto.length) {\n    const indice = texto.indexOf(patron, posicion);\n    if (indice === -1) break;\n    \n    indices.push(indice);\n    posicion = indice + 1;\n  }\n  \n  return indices;\n}\n\nconst texto = 'JavaScript es genial. JavaScript es poderoso.';\nconsole.log(busquedaTexto(texto, 'JavaScript')); // [0, 25]\n\n// Búsqueda con expresiones regulares\nfunction busquedaRegex(texto, patron) {\n  const regex = new RegExp(patron, 'gi');\n  const coincidencias = [];\n  let match;\n  \n  while ((match = regex.exec(texto)) !== null) {\n    coincidencias.push({\n      texto: match[0],\n      indice: match.index,\n      longitud: match[0].length\n    });\n  }\n  \n  return coincidencias;\n}\n\nconsole.log(busquedaRegex(texto, 'javascript')); // [{ texto: 'JavaScript', indice: 0, longitud: 10 }, { texto: 'JavaScript', indice: 25, longitud: 10 }]\n\n// Algoritmo de búsqueda en árbol binario\nclass NodoArbol {\n  constructor(valor) {\n    this.valor = valor;\n    this.izquierda = null;\n    this.derecha = null;\n  }\n}\n\nclass ArbolBinario {\n  constructor() {\n    this.raiz = null;\n  }\n  \n  insertar(valor) {\n    const nuevoNodo = new NodoArbol(valor);\n    \n    if (!this.raiz) {\n      this.raiz = nuevoNodo;\n      return;\n    }\n    \n    this._insertarNodo(this.raiz, nuevoNodo);\n  }\n  \n  _insertarNodo(nodo, nuevoNodo) {\n    if (nuevoNodo.valor < nodo.valor) {\n      if (!nodo.izquierda) {\n        nodo.izquierda = nuevoNodo;\n      } else {\n        this._insertarNodo(nodo.izquierda, nuevoNodo);\n      }\n    } else {\n      if (!nodo.derecha) {\n        nodo.derecha = nuevoNodo;\n      } else {\n        this._insertarNodo(nodo.derecha, nuevoNodo);\n      }\n    }\n  }\n  \n  buscar(valor) {\n    return this._buscarNodo(this.raiz, valor);\n  }\n  \n  _buscarNodo(nodo, valor) {\n    if (!nodo) return false;\n    \n    if (valor === nodo.valor) return true;\n    \n    if (valor < nodo.valor) {\n      return this._buscarNodo(nodo.izquierda, valor);\n    } else {\n      return this._buscarNodo(nodo.derecha, valor);\n    }\n  }\n}\n\nconst arbol = new ArbolBinario();\narbol.insertar(50);\narbol.insertar(30);\narbol.insertar(70);\narbol.insertar(20);\narbol.insertar(40);\narbol.insertar(60);\narbol.insertar(80);\n\nconsole.log(arbol.buscar(40)); // true\nconsole.log(arbol.buscar(45)); // false\n\n// Medición de rendimiento\nfunction medirTiempo(funcion, ...args) {\n  const inicio = performance.now();\n  const resultado = funcion(...args);\n  const fin = performance.now();\n  \n  return {\n    resultado,\n    tiempo: fin - inicio\n  };\n}\n\nconst arrayGrande = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));\n\nconst resultadoBubble = medirTiempo(bubbleSort, arrayGrande);\nconst resultadoQuick = medirTiempo(quickSort, arrayGrande);\nconst resultadoMerge = medirTiempo(mergeSort, arrayGrande);\n\nconsole.log(`Bubble Sort: ${resultadoBubble.tiempo.toFixed(2)}ms`);\nconsole.log(`Quick Sort: ${resultadoQuick.tiempo.toFixed(2)}ms`);\nconsole.log(`Merge Sort: ${resultadoMerge.tiempo.toFixed(2)}ms`);\n```",
        
        "Estructuras de datos complejas y recursión": "Las estructuras de datos complejas y la recursión son conceptos avanzados que permiten resolver problemas complejos de manera elegante. La recursión es una técnica donde una función se llama a sí misma, y es especialmente útil para trabajar con estructuras de datos anidadas, árboles, y algoritmos complejos.\n\n**Ejemplos:**\n```javascript\n// Recursión básica - Factorial\nfunction factorial(n) {\n  // Caso base\n  if (n <= 1) {\n    return 1;\n  }\n  // Caso recursivo\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // 120\nconsole.log(factorial(0)); // 1\n\n// Recursión con Fibonacci\nfunction fibonacci(n) {\n  if (n <= 1) {\n    return n;\n  }\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nconsole.log(fibonacci(10)); // 55\n\n// Fibonacci optimizado con memoización\nconst memo = new Map();\nfunction fibonacciMemo(n) {\n  if (memo.has(n)) {\n    return memo.get(n);\n  }\n  \n  if (n <= 1) {\n    memo.set(n, n);\n    return n;\n  }\n  \n  const resultado = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);\n  memo.set(n, resultado);\n  return resultado;\n}\n\nconsole.log(fibonacciMemo(50)); // 12586269025 (mucho más rápido)\n\n// Recursión con arrays anidados\nfunction aplanarArray(array) {\n  const resultado = [];\n  \n  for (const elemento of array) {\n    if (Array.isArray(elemento)) {\n      resultado.push(...aplanarArray(elemento));\n    } else {\n      resultado.push(elemento);\n    }\n  }\n  \n  return resultado;\n}\n\nconst arrayAnidado = [1, [2, 3], [4, [5, 6]], 7];\nconsole.log(aplanarArray(arrayAnidado)); // [1, 2, 3, 4, 5, 6, 7]\n\n// Recursión con objetos anidados\nfunction buscarEnObjeto(objeto, clave) {\n  for (const [key, value] of Object.entries(objeto)) {\n    if (key === clave) {\n      return value;\n    }\n    \n    if (typeof value === 'object' && value !== null) {\n      const resultado = buscarEnObjeto(value, clave);\n      if (resultado !== undefined) {\n        return resultado;\n      }\n    }\n  }\n  \n  return undefined;\n}\n\nconst objetoComplejo = {\n  usuario: {\n    nombre: 'Juan',\n    direccion: {\n      ciudad: 'Madrid',\n      coordenadas: {\n        lat: 40.4168,\n        lng: -3.7038\n      }\n    }\n  },\n  configuracion: {\n    tema: 'oscuro'\n  }\n};\n\nconsole.log(buscarEnObjeto(objetoComplejo, 'lat')); // 40.4168\nconsole.log(buscarEnObjeto(objetoComplejo, 'tema')); // oscuro\n\n// Estructura de árbol con recursión\nclass NodoArbol {\n  constructor(valor) {\n    this.valor = valor;\n    this.hijos = [];\n  }\n  \n  agregarHijo(nodo) {\n    this.hijos.push(nodo);\n  }\n  \n  // Recorrido en profundidad (DFS)\n  recorrerProfundidad(callback) {\n    callback(this.valor);\n    \n    for (const hijo of this.hijos) {\n      hijo.recorrerProfundidad(callback);\n    }\n  }\n  \n  // Buscar nodo por valor\n  buscar(valor) {\n    if (this.valor === valor) {\n      return this;\n    }\n    \n    for (const hijo of this.hijos) {\n      const resultado = hijo.buscar(valor);\n      if (resultado) {\n        return resultado;\n      }\n    }\n    \n    return null;\n  }\n  \n  // Contar nodos\n  contarNodos() {\n    let contador = 1;\n    \n    for (const hijo of this.hijos) {\n      contador += hijo.contarNodos();\n    }\n    \n    return contador;\n  }\n}\n\n// Crear árbol\nconst raiz = new NodoArbol('A');\nconst nodoB = new NodoArbol('B');\nconst nodoC = new NodoArbol('C');\nconst nodoD = new NodoArbol('D');\nconst nodoE = new NodoArbol('E');\n\nraiz.agregarHijo(nodoB);\nraiz.agregarHijo(nodoC);\nnodoB.agregarHijo(nodoD);\nnodoB.agregarHijo(nodoE);\n\n// Recorrer árbol\nconst valores = [];\nraiz.recorrerProfundidad(valor => valores.push(valor));\nconsole.log(valores); // ['A', 'B', 'D', 'E', 'C']\n\n// Buscar en árbol\nconst nodoEncontrado = raiz.buscar('D');\nconsole.log(nodoEncontrado?.valor); // 'D'\n\n// Contar nodos\nconsole.log(raiz.contarNodos()); // 5\n\n// Recursión con división y conquista\nfunction busquedaBinariaRecursiva(array, elemento, inicio = 0, fin = array.length - 1) {\n  if (inicio > fin) {\n    return -1;\n  }\n  \n  const medio = Math.floor((inicio + fin) / 2);\n  \n  if (array[medio] === elemento) {\n    return medio;\n  } else if (array[medio] < elemento) {\n    return busquedaBinariaRecursiva(array, elemento, medio + 1, fin);\n  } else {\n    return busquedaBinariaRecursiva(array, elemento, inicio, medio - 1);\n  }\n}\n\nconst arrayOrdenado = [1, 3, 5, 7, 9, 11, 13, 15];\nconsole.log(busquedaBinariaRecursiva(arrayOrdenado, 7)); // 3\nconsole.log(busquedaBinariaRecursiva(arrayOrdenado, 4)); // -1\n\n// Merge Sort recursivo\nfunction mergeSortRecursivo(array) {\n  if (array.length <= 1) {\n    return array;\n  }\n  \n  const medio = Math.floor(array.length / 2);\n  const izquierda = mergeSortRecursivo(array.slice(0, medio));\n  const derecha = mergeSortRecursivo(array.slice(medio));\n  \n  return merge(izquierda, derecha);\n}\n\nfunction merge(izquierda, derecha) {\n  const resultado = [];\n  let i = 0, j = 0;\n  \n  while (i < izquierda.length && j < derecha.length) {\n    if (izquierda[i] <= derecha[j]) {\n      resultado.push(izquierda[i]);\n      i++;\n    } else {\n      resultado.push(derecha[j]);\n      j++;\n    }\n  }\n  \n  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));\n}\n\nconst numerosDesordenados = [64, 34, 25, 12, 22, 11, 90];\nconsole.log(mergeSortRecursivo(numerosDesordenados)); // [11, 12, 22, 25, 34, 64, 90]\n\n// Recursión con validación de estructura\nfunction validarEstructura(objeto, esquema) {\n  for (const [clave, tipo] of Object.entries(esquema)) {\n    if (!(clave in objeto)) {\n      return false;\n    }\n    \n    if (typeof tipo === 'object' && tipo !== null) {\n      if (!validarEstructura(objeto[clave], tipo)) {\n        return false;\n      }\n    } else if (typeof objeto[clave] !== tipo) {\n      return false;\n    }\n  }\n  \n  return true;\n}\n\nconst esquema = {\n  nombre: 'string',\n  edad: 'number',\n  direccion: {\n    calle: 'string',\n    ciudad: 'string',\n    coordenadas: {\n      lat: 'number',\n      lng: 'number'\n    }\n  }\n};\n\nconst objetoValido = {\n  nombre: 'Juan',\n  edad: 25,\n  direccion: {\n    calle: 'Calle Mayor',\n    ciudad: 'Madrid',\n    coordenadas: {\n      lat: 40.4168,\n      lng: -3.7038\n    }\n  }\n};\n\nconsole.log(validarEstructura(objetoValido, esquema)); // true\n\n// Recursión con generación de combinaciones\nfunction generarCombinaciones(array, tamaño) {\n  if (tamaño === 0) {\n    return [[]];\n  }\n  \n  if (array.length === 0) {\n    return [];\n  }\n  \n  const [primerElemento, ...resto] = array;\n  const combinacionesConPrimero = generarCombinaciones(resto, tamaño - 1)\n    .map(combinacion => [primerElemento, ...combinacion]);\n  \n  const combinacionesSinPrimero = generarCombinaciones(resto, tamaño);\n  \n  return [...combinacionesConPrimero, ...combinacionesSinPrimero];\n}\n\nconst elementos = ['A', 'B', 'C', 'D'];\nconsole.log(generarCombinaciones(elementos, 2));\n// [['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'D']]\n\n// Recursión con backtracking - N-Queens\nfunction resolverNQueens(n) {\n  const tablero = Array(n).fill().map(() => Array(n).fill(0));\n  const soluciones = [];\n  \n  function esSeguro(fila, columna) {\n    // Verificar columna\n    for (let i = 0; i < fila; i++) {\n      if (tablero[i][columna] === 1) {\n        return false;\n      }\n    }\n    \n    // Verificar diagonal superior izquierda\n    for (let i = fila, j = columna; i >= 0 && j >= 0; i--, j--) {\n      if (tablero[i][j] === 1) {\n        return false;\n      }\n    }\n    \n    // Verificar diagonal superior derecha\n    for (let i = fila, j = columna; i >= 0 && j < n; i--, j++) {\n      if (tablero[i][j] === 1) {\n        return false;\n      }\n    }\n    \n    return true;\n  }\n  \n  function resolver(fila) {\n    if (fila === n) {\n      soluciones.push(tablero.map(fila => [...fila]));\n      return;\n    }\n    \n    for (let columna = 0; columna < n; columna++) {\n      if (esSeguro(fila, columna)) {\n        tablero[fila][columna] = 1;\n        resolver(fila + 1);\n        tablero[fila][columna] = 0; // Backtrack\n      }\n    }\n  }\n  \n  resolver(0);\n  return soluciones;\n}\n\nconst soluciones4Queens = resolverNQueens(4);\nconsole.log(`Número de soluciones para 4-Queens: ${soluciones4Queens.length}`); // 2\n\n// Recursión con memoización para problemas complejos\nconst cacheRecursivo = new Map();\n\nfunction problemaComplejo(n, m) {\n  const clave = `${n},${m}`;\n  \n  if (cacheRecursivo.has(clave)) {\n    return cacheRecursivo.get(clave);\n  }\n  \n  if (n === 0 || m === 0) {\n    cacheRecursivo.set(clave, 1);\n    return 1;\n  }\n  \n  const resultado = problemaComplejo(n - 1, m) + problemaComplejo(n, m - 1);\n  cacheRecursivo.set(clave, resultado);\n  return resultado;\n}\n\nconsole.log(problemaComplejo(10, 10)); // 184756\n```"
      },
      practical: [
        "Implementar métodos avanzados de arrays",
        "Trabajar con destructuring y spread operator",
        "Crear estructuras de datos con Map y Set",
        "Desarrollar algoritmos de búsqueda y ordenamiento",
        "Resolver problemas con recursión"
      ]
    },
    activities: [
      {
        title: "Fundamentos: arrays, objetos y clases",
        duration: "45 min",
        description: "Repasar conceptos básicos de arrays, objetos y clases con ejemplos prácticos del sistema de gestión de biblioteca. Crear instancias de clases y trabajar con arrays de objetos."
      },
      {
        title: "Métodos avanzados de arrays",
        duration: "45 min",
        description: "Implementar métodos avanzados como sort, splice, slice, concat, findLast, flat, flatMap y trabajar con algoritmos de ordenamiento."
      },
      {
        title: "Destructuring y estructuras de datos",
        duration: "30 min",
        description: "Trabajar con destructuring avanzado, spread operator, rest parameters, Map, Set, WeakMap y WeakSet para estructuras de datos complejas."
      },
      {
        title: "Algoritmos y recursión",
        duration: "30 min",
        description: "Desarrollar algoritmos de búsqueda y ordenamiento, implementar funciones recursivas y resolver problemas complejos con estructuras de datos anidadas."
      }
    ],
    homework: [
      "Crear sistema de gestión de inventario con Map y Set",
      "Implementar algoritmos de ordenamiento personalizados",
      "Desarrollar aplicación con estructuras de datos recursivas"
    ],
    materials: [
      "Editor de código con soporte para JavaScript ES6+",
      "Navegador web con DevTools",
      "Ejemplos de algoritmos de ordenamiento",
      "Documentación de Map, Set y estructuras de datos"
    ],
    exercises: [
      {
        title: "Sistema de Gestión de Inventario",
        description: "Crea un sistema de gestión de inventario usando Map, Set, algoritmos de ordenamiento y estructuras de datos recursivas.",
        code: `// Sistema de gestión de inventario
class Inventario {
  constructor() {
    this.productos = new Map();
    this.categorias = new Set();
    this.ventas = [];
  }

  // Agregar producto
  agregarProducto(id, producto) {
    // Tu código aquí
  }

  // Buscar producto
  buscarProducto(id) {
    // Tu código aquí
  }

  // Ordenar productos por precio
  ordenarPorPrecio(ascendente = true) {
    // Tu código aquí
  }

  // Obtener productos por categoría
  obtenerPorCategoria(categoria) {
    // Tu código aquí
  }

  // Calcular estadísticas
  calcularEstadisticas() {
    // Tu código aquí
  }
}

// Ejemplo de uso
const inventario = new Inventario();`,
        solution: `// Sistema de gestión de inventario - Solución
class Inventario {
  constructor() {
    this.productos = new Map();
    this.categorias = new Set();
    this.ventas = [];
  }

  // Agregar producto
  agregarProducto(id, producto) {
    this.productos.set(id, {
      ...producto,
      id,
      fechaRegistro: new Date(),
      stock: producto.stock || 0
    });
    
    if (producto.categoria) {
      this.categorias.add(producto.categoria);
    }
  }

  // Buscar producto
  buscarProducto(id) {
    return this.productos.get(id);
  }

  // Ordenar productos por precio
  ordenarPorPrecio(ascendente = true) {
    const productosArray = Array.from(this.productos.values());
    
    return productosArray.sort((a, b) => {
      return ascendente ? a.precio - b.precio : b.precio - a.precio;
    });
  }

  // Obtener productos por categoría
  obtenerPorCategoria(categoria) {
    const productos = [];
    
    for (const [id, producto] of this.productos) {
      if (producto.categoria === categoria) {
        productos.push(producto);
      }
    }
    
    return productos;
  }

  // Calcular estadísticas
  calcularEstadisticas() {
    const productos = Array.from(this.productos.values());
    
    if (productos.length === 0) {
      return {
        totalProductos: 0,
        precioPromedio: 0,
        categoriaMasComun: null,
        stockTotal: 0
      };
    }

    const precios = productos.map(p => p.precio);
    const categorias = productos.map(p => p.categoria);
    const stocks = productos.map(p => p.stock);

    // Calcular precio promedio
    const precioPromedio = precios.reduce((acc, precio) => acc + precio, 0) / precios.length;

    // Encontrar categoría más común
    const conteoCategorias = new Map();
    categorias.forEach(categoria => {
      conteoCategorias.set(categoria, (conteoCategorias.get(categoria) || 0) + 1);
    });

    let categoriaMasComun = null;
    let maxConteo = 0;
    for (const [categoria, conteo] of conteoCategorias) {
      if (conteo > maxConteo) {
        maxConteo = conteo;
        categoriaMasComun = categoria;
      }
    }

    return {
      totalProductos: productos.length,
      precioPromedio: Math.round(precioPromedio * 100) / 100,
      categoriaMasComun,
      stockTotal: stocks.reduce((acc, stock) => acc + stock, 0)
    };
  }

  // Algoritmo de búsqueda binaria para productos ordenados por precio
  buscarPorPrecio(precioObjetivo) {
    const productosOrdenados = this.ordenarPorPrecio(true);
    
    function busquedaBinaria(array, precio, inicio = 0, fin = array.length - 1) {
      if (inicio > fin) {
        return [];
      }

      const medio = Math.floor((inicio + fin) / 2);
      const producto = array[medio];

      if (producto.precio === precio) {
        // Encontrar todos los productos con el mismo precio
        const resultados = [producto];
        
        // Buscar hacia la izquierda
        let i = medio - 1;
        while (i >= 0 && array[i].precio === precio) {
          resultados.unshift(array[i]);
          i--;
        }
        
        // Buscar hacia la derecha
        let j = medio + 1;
        while (j < array.length && array[j].precio === precio) {
          resultados.push(array[j]);
          j++;
        }
        
        return resultados;
      } else if (producto.precio < precio) {
        return busquedaBinaria(array, precio, medio + 1, fin);
      } else {
        return busquedaBinaria(array, precio, inicio, medio - 1);
      }
    }

    return busquedaBinaria(productosOrdenados, precioObjetivo);
  }

  // Función recursiva para generar reporte de inventario
  generarReporte(nivel = 0) {
    const indentacion = '  '.repeat(nivel);
    let reporte = '';

    if (nivel === 0) {
      reporte += '=== REPORTE DE INVENTARIO ===\n';
      const stats = this.calcularEstadisticas();
      reporte += 'Total de productos: ' + stats.totalProductos + '\n';
      reporte += 'Precio promedio: $' + stats.precioPromedio + '\n';
      reporte += 'Categoría más común: ' + stats.categoriaMasComun + '\n';
      reporte += 'Stock total: ' + stats.stockTotal + '\n\n';
    }

    // Agrupar productos por categoría
    const productosPorCategoria = new Map();
    for (const [id, producto] of this.productos) {
      const categoria = producto.categoria || 'Sin categoría';
      if (!productosPorCategoria.has(categoria)) {
        productosPorCategoria.set(categoria, []);
      }
      productosPorCategoria.get(categoria).push(producto);
    }

    // Generar reporte por categoría
    for (const [categoria, productos] of productosPorCategoria) {
      reporte += indentacion + '📁 ' + categoria + ' (' + productos.length + ' productos)\n';
      
      // Ordenar productos por nombre
      const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      
      for (const producto of productosOrdenados) {
        reporte += indentacion + '  📦 ' + producto.nombre + ' - $' + producto.precio + ' (Stock: ' + producto.stock + ')\n';
      }
      reporte += '\n';
    }

    return reporte;
  }
}

// Ejemplo de uso completo
const inventario = new Inventario();

// Agregar productos
inventario.agregarProducto(1, {
  nombre: 'Laptop Gaming',
  precio: 1500,
  categoria: 'Electrónicos',
  stock: 10
});

inventario.agregarProducto(2, {
  nombre: 'Mouse Inalámbrico',
  precio: 25,
  categoria: 'Electrónicos',
  stock: 50
});

inventario.agregarProducto(3, {
  nombre: 'Teclado Mecánico',
  precio: 75,
  categoria: 'Electrónicos',
  stock: 30
});

inventario.agregarProducto(4, {
  nombre: 'Monitor 4K',
  precio: 300,
  categoria: 'Electrónicos',
  stock: 15
});

inventario.agregarProducto(5, {
  nombre: 'Silla Ergonómica',
  precio: 200,
  categoria: 'Muebles',
  stock: 8
});

// Probar funcionalidades
console.log('=== BÚSQUEDA DE PRODUCTO ===');
console.log(inventario.buscarProducto(1));

console.log('\n=== ORDENAMIENTO POR PRECIO ===');
const productosOrdenados = inventario.ordenarPorPrecio(true);
productosOrdenados.forEach(p => console.log(p.nombre + ': $' + p.precio));

console.log('\n=== PRODUCTOS POR CATEGORÍA ===');
const electronicos = inventario.obtenerPorCategoria('Electrónicos');
console.log('Electrónicos:', electronicos.map(p => p.nombre));

console.log('\n=== ESTADÍSTICAS ===');
const stats = inventario.calcularEstadisticas();
console.log(stats);

console.log('\n=== BÚSQUEDA POR PRECIO ===');
const productos25 = inventario.buscarPorPrecio(25);
console.log('Productos de $25:', productos25.map(p => p.nombre));

console.log('\n=== REPORTE COMPLETO ===');
console.log(inventario.generarReporte());

// Función recursiva para encontrar productos con stock bajo
function encontrarStockBajo(inventario, limite = 20) {
  const productos = Array.from(inventario.productos.values());
  const productosStockBajo = [];

  function buscarRecursivo(productos, indice = 0) {
    if (indice >= productos.length) {
      return;
    }

    const producto = productos[indice];
    if (producto.stock < limite) {
      productosStockBajo.push(producto);
    }

    buscarRecursivo(productos, indice + 1);
  }

  buscarRecursivo(productos);
  return productosStockBajo;
}

console.log('\n=== PRODUCTOS CON STOCK BAJO ===');
const stockBajo = encontrarStockBajo(inventario, 20);
stockBajo.forEach(p => console.log(p.nombre + ': ' + p.stock + ' unidades'));`
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
      "Comprender programación asíncrona con analogías del mundo real",
      "Dominar la evolución: Callbacks → Promises → Async/Await",
      "Consumir APIs REST con Fetch API y manejo de errores",
      "Crear aplicación práctica de clima con datos simulados",
      "Implementar estados de UI (cargando, éxito, error)"
    ],
    content: {
      theoretical: [
        "Programación asíncrona: analogía del restaurante y estados de Promise",
        "Evolución: Callbacks → Promises → Async/Await con ejemplos",
        "Fetch API: métodos HTTP y manejo de respuestas",
        "Manejo de errores: try-catch, validación y feedback al usuario",
        "APIs REST: estructura, consumo y autenticación",
        "JSON: parse, stringify y validación de datos",
        "CORS: políticas de seguridad y soluciones",
        "Estados de UI: cargando, éxito, error con ejemplos prácticos"
      ],
      theoreticalDetails: {
        "Programación asíncrona: analogía del restaurante y estados de Promise": "La programación asíncrona permite ejecutar código sin bloquear el hilo principal. JavaScript maneja esto con callbacks, Promises y async/await. Es fundamental para operaciones que toman tiempo como llamadas a APIs, lectura de archivos o timers.\n\n**Ejemplos:**\n```javascript\n// Callbacks (forma tradicional)\nsetTimeout(() => {\n  console.log('Ejecutado después de 1 segundo');\n}, 1000);\n\nfunction obtenerDatos(callback) {\n  setTimeout(() => {\n    callback(null, { datos: 'Información importante' });\n  }, 1000);\n}\n\nobtenerDatos((error, datos) => {\n  if (error) {\n    console.error('Error:', error);\n  } else {\n    console.log('Datos recibidos:', datos);\n  }\n});\n\n// Promises (ES6)\nfunction obtenerDatosPromise() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const exito = Math.random() > 0.5;\n      if (exito) {\n        resolve({ datos: 'Información importante' });\n      } else {\n        reject(new Error('Error al obtener datos'));\n      }\n    }, 1000);\n  });\n}\n\nobtenerDatosPromise()\n  .then(datos => {\n    console.log('Datos recibidos:', datos);\n    return datos.datos;\n  })\n  .then(datosProcesados => {\n    console.log('Datos procesados:', datosProcesados);\n  })\n  .catch(error => {\n    console.error('Error:', error.message);\n  });\n\n// async/await (ES2017)\nasync function procesarDatos() {\n  try {\n    console.log('Iniciando proceso...');\n    const datos = await obtenerDatosPromise();\n    console.log('Datos recibidos:', datos);\n    \n    const datosProcesados = await procesarDatosAsincrono(datos);\n    console.log('Datos procesados:', datosProcesados);\n    \n    return datosProcesados;\n  } catch (error) {\n    console.error('Error en el proceso:', error.message);\n    throw error;\n  }\n}\n\nasync function procesarDatosAsincrono(datos) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({ ...datos, procesado: true });\n    }, 500);\n  });\n}\n\n// Usar async/await\nprocesarDatos()\n  .then(resultado => console.log('Proceso completado:', resultado))\n  .catch(error => console.error('Error final:', error));\n\n// Promise.all - Ejecutar múltiples promesas en paralelo\nasync function cargarDatosParalelo() {\n  try {\n    const [usuarios, posts, comentarios] = await Promise.all([\n      fetch('/api/usuarios').then(r => r.json()),\n      fetch('/api/posts').then(r => r.json()),\n      fetch('/api/comentarios').then(r => r.json())\n    ]);\n    \n    console.log('Todos los datos cargados:', { usuarios, posts, comentarios });\n    return { usuarios, posts, comentarios };\n  } catch (error) {\n    console.error('Error al cargar datos:', error);\n  }\n}\n\n// Promise.race - Primera promesa que se resuelve\nasync function cargarDatosRapido() {\n  try {\n    const datos = await Promise.race([\n      fetch('/api/datos-rapidos').then(r => r.json()),\n      new Promise((_, reject) => \n        setTimeout(() => reject(new Error('Timeout')), 5000)\n      )\n    ]);\n    \n    console.log('Datos cargados rápidamente:', datos);\n    return datos;\n  } catch (error) {\n    console.error('Error o timeout:', error.message);\n  }\n}\n```",
        
        "Fetch API: métodos HTTP y manejo de respuestas": "Fetch API es la forma moderna de hacer peticiones HTTP en JavaScript. Proporciona una interfaz simple y poderosa para consumir APIs REST. Es más flexible que XMLHttpRequest y devuelve Promises nativamente.\n\n**Ejemplos:**\n```javascript\n// GET - Obtener datos\nasync function obtenerUsuarios() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    \n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    const usuarios = await response.json();\n    console.log('Usuarios obtenidos:', usuarios);\n    return usuarios;\n  } catch (error) {\n    console.error('Error al obtener usuarios:', error);\n    throw error;\n  }\n}\n\n// GET con parámetros\nasync function obtenerUsuario(id) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);\n    \n    if (!response.ok) {\n      throw new Error(`Usuario no encontrado: ${response.status}`);\n    }\n    \n    const usuario = await response.json();\n    console.log('Usuario obtenido:', usuario);\n    return usuario;\n  } catch (error) {\n    console.error('Error al obtener usuario:', error);\n    throw error;\n  }\n}\n\n// POST - Crear datos\nasync function crearUsuario(datosUsuario) {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(datosUsuario)\n    });\n    \n    if (!response.ok) {\n      throw new Error(`Error al crear usuario: ${response.status}`);\n    }\n    \n    const nuevoUsuario = await response.json();\n    console.log('Usuario creado:', nuevoUsuario);\n    return nuevoUsuario;\n  } catch (error) {\n    console.error('Error al crear usuario:', error);\n    throw error;\n  }\n}\n\n// PUT - Actualizar datos\nasync function actualizarUsuario(id, datosActualizados) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(datosActualizados)\n    });\n    \n    if (!response.ok) {\n      throw new Error(`Error al actualizar usuario: ${response.status}`);\n    }\n    \n    const usuarioActualizado = await response.json();\n    console.log('Usuario actualizado:', usuarioActualizado);\n    return usuarioActualizado;\n  } catch (error) {\n    console.error('Error al actualizar usuario:', error);\n    throw error;\n  }\n}\n\n// DELETE - Eliminar datos\nasync function eliminarUsuario(id) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {\n      method: 'DELETE'\n    });\n    \n    if (!response.ok) {\n      throw new Error(`Error al eliminar usuario: ${response.status}`);\n    }\n    \n    console.log('Usuario eliminado exitosamente');\n    return true;\n  } catch (error) {\n    console.error('Error al eliminar usuario:', error);\n    throw error;\n  }\n}\n\n// Fetch con headers personalizados\nasync function obtenerDatosConAutenticacion(token) {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos', {\n      headers: {\n        'Authorization': `Bearer ${token}`,\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    });\n    \n    if (!response.ok) {\n      if (response.status === 401) {\n        throw new Error('Token de autenticación inválido');\n      }\n      throw new Error(`Error HTTP: ${response.status}`);\n    }\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    console.error('Error con autenticación:', error);\n    throw error;\n  }\n}\n\n// Fetch con timeout\nasync function obtenerDatosConTimeout(url, timeoutMs = 5000) {\n  try {\n    const controller = new AbortController();\n    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);\n    \n    const response = await fetch(url, {\n      signal: controller.signal\n    });\n    \n    clearTimeout(timeoutId);\n    \n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    if (error.name === 'AbortError') {\n      throw new Error('La petición fue cancelada por timeout');\n    }\n    throw error;\n  }\n}\n\n// Usar las funciones\nasync function ejemploCompleto() {\n  try {\n    // Obtener usuarios\n    const usuarios = await obtenerUsuarios();\n    console.log('Total de usuarios:', usuarios.length);\n    \n    // Crear nuevo usuario\n    const nuevoUsuario = await crearUsuario({\n      name: 'Juan Pérez',\n      email: 'juan@ejemplo.com',\n      username: 'juanperez'\n    });\n    \n    // Actualizar usuario\n    const usuarioActualizado = await actualizarUsuario(nuevoUsuario.id, {\n      name: 'Juan Carlos Pérez',\n      email: 'juancarlos@ejemplo.com'\n    });\n    \n    // Eliminar usuario\n    await eliminarUsuario(nuevoUsuario.id);\n    \n    console.log('Operaciones completadas exitosamente');\n  } catch (error) {\n    console.error('Error en el ejemplo:', error);\n  }\n}\n```",
        
        "Manejo de errores: try-catch, validación y feedback al usuario": "El manejo de errores es crucial en programación asíncrona. try-catch funciona con async/await, mientras que .catch() funciona con Promises. Es importante manejar diferentes tipos de errores y proporcionar mensajes útiles al usuario.\n\n**Ejemplos:**\n```javascript\n// try-catch con async/await\nasync function manejarErroresAsync() {\n  try {\n    console.log('Iniciando operación...');\n    \n    const response = await fetch('https://api.ejemplo.com/datos');\n    \n    if (!response.ok) {\n      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);\n    }\n    \n    const datos = await response.json();\n    console.log('Datos obtenidos:', datos);\n    \n    return datos;\n  } catch (error) {\n    console.error('Error en operación asíncrona:', error.message);\n    \n    // Manejar diferentes tipos de errores\n    if (error.name === 'TypeError') {\n      console.error('Error de red o URL inválida');\n    } else if (error.message.includes('HTTP error')) {\n      console.error('Error del servidor');\n    } else {\n      console.error('Error desconocido');\n    }\n    \n    throw error; // Re-lanzar el error si es necesario\n  }\n}\n\n// .catch() con Promises\nfunction manejarErroresPromise() {\n  return fetch('https://api.ejemplo.com/datos')\n    .then(response => {\n      if (!response.ok) {\n        throw new Error(`Error HTTP: ${response.status}`);\n      }\n      return response.json();\n    })\n    .then(datos => {\n      console.log('Datos obtenidos:', datos);\n      return datos;\n    })\n    .catch(error => {\n      console.error('Error en Promise:', error.message);\n      \n      // Manejar diferentes tipos de errores\n      if (error.name === 'TypeError') {\n        console.error('Error de red');\n      } else if (error.message.includes('HTTP error')) {\n        console.error('Error del servidor');\n      }\n      \n      throw error; // Re-lanzar el error\n    });\n}\n\n// Manejo de errores específicos\nasync function obtenerDatosConManejoEspecifico() {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos');\n    \n    switch (response.status) {\n      case 200:\n        return await response.json();\n      case 404:\n        throw new Error('Recurso no encontrado');\n      case 401:\n        throw new Error('No autorizado - token inválido');\n      case 403:\n        throw new Error('Acceso denegado');\n      case 500:\n        throw new Error('Error interno del servidor');\n      default:\n        throw new Error(`Error HTTP: ${response.status}`);\n    }\n  } catch (error) {\n    if (error.name === 'TypeError') {\n      throw new Error('Error de conexión - verifica tu internet');\n    }\n    throw error;\n  }\n}\n\n// Función helper para manejo de errores\nfunction crearManejadorErrores(contexto) {\n  return function(error) {\n    console.error(`Error en ${contexto}:`, error.message);\n    \n    // Log del error para debugging\n    console.error('Stack trace:', error.stack);\n    \n    // Mostrar mensaje al usuario\n    mostrarErrorAlUsuario(`Error en ${contexto}: ${error.message}`);\n    \n    // Enviar error a servicio de logging (opcional)\n    enviarErrorALogging(error, contexto);\n  };\n}\n\n// Usar el manejador de errores\nconst manejarErrorAPI = crearManejadorErrores('API');\n\nasync function ejemploConManejador() {\n  try {\n    const datos = await obtenerDatosConManejoEspecifico();\n    return datos;\n  } catch (error) {\n    manejarErrorAPI(error);\n    throw error;\n  }\n}\n\n// Manejo de errores con retry\nasync function obtenerDatosConRetry(url, maxIntentos = 3) {\n  let ultimoError;\n  \n  for (let intento = 1; intento <= maxIntentos; intento++) {\n    try {\n      console.log(`Intento ${intento} de ${maxIntentos}`);\n      \n      const response = await fetch(url);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP error: ${response.status}`);\n      }\n      \n      const datos = await response.json();\n      console.log('Datos obtenidos exitosamente');\n      return datos;\n      \n    } catch (error) {\n      ultimoError = error;\n      console.error(`Intento ${intento} falló:`, error.message);\n      \n      if (intento < maxIntentos) {\n        const delay = Math.pow(2, intento) * 1000; // Backoff exponencial\n        console.log(`Esperando ${delay}ms antes del siguiente intento...`);\n        await new Promise(resolve => setTimeout(resolve, delay));\n      }\n    }\n  }\n  \n  throw new Error(`Falló después de ${maxIntentos} intentos. Último error: ${ultimoError.message}`);\n}\n\n// Manejo de errores con fallback\nasync function obtenerDatosConFallback() {\n  try {\n    // Intentar obtener datos de la API principal\n    return await fetch('https://api.principal.com/datos').then(r => r.json());\n  } catch (error) {\n    console.warn('API principal falló, intentando API de respaldo...');\n    \n    try {\n      // Intentar API de respaldo\n      return await fetch('https://api.respaldo.com/datos').then(r => r.json());\n    } catch (errorRespaldo) {\n      console.error('Ambas APIs fallaron');\n      \n      // Usar datos en caché o datos por defecto\n      return obtenerDatosEnCache() || obtenerDatosPorDefecto();\n    }\n  }\n}\n\n// Funciones auxiliares\nfunction mostrarErrorAlUsuario(mensaje) {\n  // Implementar UI para mostrar error al usuario\n  console.log('Mostrando error al usuario:', mensaje);\n}\n\nfunction enviarErrorALogging(error, contexto) {\n  // Implementar envío de error a servicio de logging\n  console.log('Enviando error a logging:', { error: error.message, contexto });\n}\n\nfunction obtenerDatosEnCache() {\n  // Implementar lógica de caché\n  return null;\n}\n\nfunction obtenerDatosPorDefecto() {\n  // Implementar datos por defecto\n  return { datos: 'Datos por defecto' };\n}\n```",
        
        "APIs REST: estructura, consumo y autenticación": "REST (Representational State Transfer) es un estilo arquitectónico para diseñar APIs web. Las APIs REST usan HTTP para comunicarse y siguen principios específicos. Son la forma más común de consumir datos en aplicaciones web modernas.\n\n**Ejemplos:**\n```javascript\n// Estructura típica de API REST\nconst API_BASE_URL = 'https://jsonplaceholder.typicode.com';\n\n// Clase para manejar API REST\nclass ApiClient {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl;\n    this.defaultHeaders = {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    };\n  }\n  \n  // Método genérico para hacer peticiones\n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    const config = {\n      headers: { ...this.defaultHeaders, ...options.headers },\n      ...options\n    };\n    \n    try {\n      const response = await fetch(url, config);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      \n      return await response.json();\n    } catch (error) {\n      console.error(`Error en petición a ${endpoint}:`, error);\n      throw error;\n    }\n  }\n  \n  // GET - Obtener recursos\n  async get(endpoint) {\n    return this.request(endpoint, { method: 'GET' });\n  }\n  \n  // POST - Crear recurso\n  async post(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'POST',\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // PUT - Actualizar recurso completo\n  async put(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'PUT',\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // PATCH - Actualizar recurso parcialmente\n  async patch(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'PATCH',\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // DELETE - Eliminar recurso\n  async delete(endpoint) {\n    return this.request(endpoint, { method: 'DELETE' });\n  }\n}\n\n// Crear instancia del cliente API\nconst apiClient = new ApiClient(API_BASE_URL);\n\n// Ejemplos de uso de API REST\nclass UsuarioService {\n  constructor(apiClient) {\n    this.api = apiClient;\n  }\n  \n  // Obtener todos los usuarios\n  async obtenerUsuarios() {\n    return this.api.get('/users');\n  }\n  \n  // Obtener usuario por ID\n  async obtenerUsuario(id) {\n    return this.api.get(`/users/${id}`);\n  }\n  \n  // Crear nuevo usuario\n  async crearUsuario(datosUsuario) {\n    return this.api.post('/users', datosUsuario);\n  }\n  \n  // Actualizar usuario completo\n  async actualizarUsuario(id, datosUsuario) {\n    return this.api.put(`/users/${id}`, datosUsuario);\n  }\n  \n  // Actualizar usuario parcialmente\n  async actualizarUsuarioParcial(id, datosParciales) {\n    return this.api.patch(`/users/${id}`, datosParciales);\n  }\n  \n  // Eliminar usuario\n  async eliminarUsuario(id) {\n    return this.api.delete(`/users/${id}`);\n  }\n  \n  // Obtener posts de un usuario\n  async obtenerPostsUsuario(id) {\n    return this.api.get(`/users/${id}/posts`);\n  }\n  \n  // Obtener comentarios de un post\n  async obtenerComentariosPost(postId) {\n    return this.api.get(`/posts/${postId}/comments`);\n  }\n}\n\n// Crear servicio de usuarios\nconst usuarioService = new UsuarioService(apiClient);\n\n// Ejemplos de uso\nasync function ejemploUsoAPI() {\n  try {\n    // Obtener todos los usuarios\n    const usuarios = await usuarioService.obtenerUsuarios();\n    console.log('Usuarios obtenidos:', usuarios.length);\n    \n    // Obtener usuario específico\n    const usuario = await usuarioService.obtenerUsuario(1);\n    console.log('Usuario 1:', usuario.name);\n    \n    // Crear nuevo usuario\n    const nuevoUsuario = await usuarioService.crearUsuario({\n      name: 'Juan Pérez',\n      email: 'juan@ejemplo.com',\n      username: 'juanperez'\n    });\n    console.log('Usuario creado:', nuevoUsuario.id);\n    \n    // Actualizar usuario\n    const usuarioActualizado = await usuarioService.actualizarUsuarioParcial(nuevoUsuario.id, {\n      name: 'Juan Carlos Pérez'\n    });\n    console.log('Usuario actualizado:', usuarioActualizado.name);\n    \n    // Obtener posts del usuario\n    const posts = await usuarioService.obtenerPostsUsuario(1);\n    console.log('Posts del usuario 1:', posts.length);\n    \n    // Eliminar usuario\n    await usuarioService.eliminarUsuario(nuevoUsuario.id);\n    console.log('Usuario eliminado');\n    \n  } catch (error) {\n    console.error('Error en ejemplo de API:', error);\n  }\n}\n\n// API con autenticación\nclass ApiClientAutenticado extends ApiClient {\n  constructor(baseUrl, token) {\n    super(baseUrl);\n    this.token = token;\n    this.defaultHeaders.Authorization = `Bearer ${token}`;\n  }\n  \n  // Actualizar token\n  actualizarToken(nuevoToken) {\n    this.token = nuevoToken;\n    this.defaultHeaders.Authorization = `Bearer ${nuevoToken}`;\n  }\n  \n  // Método para refrescar token\n  async refrescarToken() {\n    try {\n      const response = await this.request('/auth/refresh', {\n        method: 'POST',\n        headers: { ...this.defaultHeaders, Authorization: `Bearer ${this.token}` }\n      });\n      \n      this.actualizarToken(response.token);\n      return response.token;\n    } catch (error) {\n      console.error('Error al refrescar token:', error);\n      throw error;\n    }\n  }\n}\n\n// API con paginación\nclass ApiClientConPaginacion extends ApiClient {\n  async obtenerConPaginacion(endpoint, pagina = 1, limite = 10) {\n    const params = new URLSearchParams({\n      _page: pagina.toString(),\n      _limit: limite.toString()\n    });\n    \n    return this.request(`${endpoint}?${params}`);\n  }\n  \n  async obtenerTodos(endpoint, limite = 100) {\n    let pagina = 1;\n    let todosLosDatos = [];\n    let hayMasDatos = true;\n    \n    while (hayMasDatos) {\n      const datos = await this.obtenerConPaginacion(endpoint, pagina, limite);\n      \n      if (datos.length === 0) {\n        hayMasDatos = false;\n      } else {\n        todosLosDatos = todosLosDatos.concat(datos);\n        pagina++;\n      }\n    }\n    \n    return todosLosDatos;\n  }\n}\n\n// Usar API con paginación\nconst apiConPaginacion = new ApiClientConPaginacion(API_BASE_URL);\n\nasync function ejemploPaginacion() {\n  try {\n    // Obtener primera página\n    const primeraPagina = await apiConPaginacion.obtenerConPaginacion('/posts', 1, 5);\n    console.log('Primera página:', primeraPagina.length);\n    \n    // Obtener todos los posts\n    const todosLosPosts = await apiConPaginacion.obtenerTodos('/posts');\n    console.log('Total de posts:', todosLosPosts.length);\n    \n  } catch (error) {\n    console.error('Error en paginación:', error);\n  }\n}\n```",
        
        "JSON: parse, stringify y validación de datos": "JSON (JavaScript Object Notation) es el formato estándar para intercambio de datos en APIs REST. JavaScript proporciona métodos nativos para convertir objetos a JSON y viceversa. Es fundamental para la comunicación entre cliente y servidor.\n\n**Ejemplos:**\n```javascript\n// Objeto JavaScript\nconst usuario = {\n  id: 1,\n  nombre: 'Juan Pérez',\n  email: 'juan@ejemplo.com',\n  activo: true,\n  fechaRegistro: new Date('2024-01-15'),\n  hobbies: ['leer', 'cocinar', 'viajar'],\n  direccion: {\n    calle: 'Calle Mayor 123',\n    ciudad: 'Madrid',\n    codigoPostal: '28001'\n  }\n};\n\n// JSON.stringify - Convertir objeto a JSON\nconst jsonString = JSON.stringify(usuario);\nconsole.log('JSON string:', jsonString);\n// '{\"id\":1,\"nombre\":\"Juan Pérez\",\"email\":\"juan@ejemplo.com\",\"activo\":true,\"fechaRegistro\":\"2024-01-15T00:00:00.000Z\",\"hobbies\":[\"leer\",\"cocinar\",\"viajar\"],\"direccion\":{\"calle\":\"Calle Mayor 123\",\"ciudad\":\"Madrid\",\"codigoPostal\":\"28001\"}}'\n\n// JSON.stringify con formato\nconst jsonFormateado = JSON.stringify(usuario, null, 2);\nconsole.log('JSON formateado:', jsonFormateado);\n// {\n//   \"id\": 1,\n//   \"nombre\": \"Juan Pérez\",\n//   \"email\": \"juan@ejemplo.com\",\n//   \"activo\": true,\n//   \"fechaRegistro\": \"2024-01-15T00:00:00.000Z\",\n//   \"hobbies\": [\"leer\", \"cocinar\", \"viajar\"],\n//   \"direccion\": {\n//     \"calle\": \"Calle Mayor 123\",\n//     \"ciudad\": \"Madrid\",\n//     \"codigoPostal\": \"28001\"\n//   }\n// }\n\n// JSON.stringify con replacer\nconst jsonConReplacer = JSON.stringify(usuario, ['nombre', 'email', 'activo']);\nconsole.log('JSON con replacer:', jsonConReplacer);\n// '{\"nombre\":\"Juan Pérez\",\"email\":\"juan@ejemplo.com\",\"activo\":true}'\n\n// JSON.stringify con función replacer\nconst jsonConFuncionReplacer = JSON.stringify(usuario, function(key, value) {\n  if (key === 'fechaRegistro') {\n    return value.toISOString().split('T')[0]; // Solo la fecha\n  }\n  if (key === 'email') {\n    return value.toLowerCase(); // Email en minúsculas\n  }\n  return value;\n});\nconsole.log('JSON con función replacer:', jsonConFuncionReplacer);\n\n// JSON.parse - Convertir JSON a objeto\nconst jsonString2 = '{\"nombre\":\"María García\",\"email\":\"maria@ejemplo.com\",\"activo\":true}';\nconst objeto = JSON.parse(jsonString2);\nconsole.log('Objeto parseado:', objeto);\n// { nombre: 'María García', email: 'maria@ejemplo.com', activo: true }\n\n// JSON.parse con reviver\nconst jsonConFecha = '{\"nombre\":\"Pedro López\",\"fechaRegistro\":\"2024-01-15\"}';\nconst objetoConFecha = JSON.parse(jsonConFecha, function(key, value) {\n  if (key === 'fechaRegistro') {\n    return new Date(value);\n  }\n  return value;\n});\nconsole.log('Objeto con fecha:', objetoConFecha);\n// { nombre: 'Pedro López', fechaRegistro: Date object }\n\n// Manejo de errores en JSON\nfunction parsearJSONSeguro(jsonString) {\n  try {\n    return JSON.parse(jsonString);\n  } catch (error) {\n    console.error('Error al parsear JSON:', error.message);\n    return null;\n  }\n}\n\nconst jsonInvalido = '{\"nombre\":\"Juan\",\"email\":\"juan@ejemplo.com\"}'; // JSON válido\nconst jsonInvalido2 = '{\"nombre\":\"Juan\",\"email\":\"juan@ejemplo.com\"}'; // JSON inválido\n\nconst objeto1 = parsearJSONSeguro(jsonInvalido);\nconsole.log('Objeto 1:', objeto1); // { nombre: 'Juan', email: 'juan@ejemplo.com' }\n\nconst objeto2 = parsearJSONSeguro(jsonInvalido2);\nconsole.log('Objeto 2:', objeto2); // null\n\n// Arrays JSON\nconst usuarios = [\n  { nombre: 'Juan', email: 'juan@ejemplo.com' },\n  { nombre: 'María', email: 'maria@ejemplo.com' },\n  { nombre: 'Pedro', email: 'pedro@ejemplo.com' }\n];\n\nconst jsonArray = JSON.stringify(usuarios);\nconsole.log('JSON array:', jsonArray);\n// '[{\"nombre\":\"Juan\",\"email\":\"juan@ejemplo.com\"},{\"nombre\":\"María\",\"email\":\"maria@ejemplo.com\"},{\"nombre\":\"Pedro\",\"email\":\"pedro@ejemplo.com\"}]'\n\nconst arrayParseado = JSON.parse(jsonArray);\nconsole.log('Array parseado:', arrayParseado);\n// Array de objetos\n\n// Clonar objetos con JSON\nconst objetoOriginal = { nombre: 'Juan', edad: 25 };\nconst objetoClonado = JSON.parse(JSON.stringify(objetoOriginal));\nobjetoClonado.edad = 30;\nconsole.log('Objeto original:', objetoOriginal); // { nombre: 'Juan', edad: 25 }\nconsole.log('Objeto clonado:', objetoClonado); // { nombre: 'Juan', edad: 30 }\n\n// Validar JSON\nfunction esJSONValido(jsonString) {\n  try {\n    JSON.parse(jsonString);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\nconsole.log(esJSONValido('{\"nombre\":\"Juan\"}')); // true\nconsole.log(esJSONValido('{\"nombre\":\"Juan\"}')); // false\n\n// JSON en APIs\nasync function ejemploJSONEnAPI() {\n  try {\n    // Enviar datos JSON\n    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        title: 'Mi Post',\n        body: 'Contenido del post',\n        userId: 1\n      })\n    });\n    \n    const nuevoPost = await response.json();\n    console.log('Post creado:', nuevoPost);\n    \n    // Recibir datos JSON\n    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n    const post = await response2.json();\n    console.log('Post obtenido:', post);\n    \n  } catch (error) {\n    console.error('Error en API:', error);\n  }\n}\n\n// JSON con tipos de datos especiales\nconst datosComplejos = {\n  fecha: new Date(),\n  numero: 42,\n  texto: 'Hola mundo',\n  booleano: true,\n  nulo: null,\n  indefinido: undefined,\n  funcion: function() { return 'Hola'; },\n  simbolo: Symbol('test')\n};\n\nconst jsonComplejo = JSON.stringify(datosComplejos);\nconsole.log('JSON complejo:', jsonComplejo);\n// '{\"fecha\":\"2024-12-15T10:30:00.000Z\",\"numero\":42,\"texto\":\"Hola mundo\",\"booleano\":true,\"nulo\":null}'\n// Nota: undefined, funciones y símbolos se omiten\n\n// JSON con espacios y caracteres especiales\nconst datosConEspacios = {\n  'nombre con espacios': 'Juan Pérez',\n  'email-con-guiones': 'juan@ejemplo.com',\n  'dirección': 'Calle Mayor 123'\n};\n\nconst jsonConEspacios = JSON.stringify(datosConEspacios);\nconsole.log('JSON con espacios:', jsonConEspacios);\n// '{\"nombre con espacios\":\"Juan Pérez\",\"email-con-guiones\":\"juan@ejemplo.com\",\"dirección\":\"Calle Mayor 123\"}'\n```",
        
        "CORS: políticas de seguridad y soluciones": "CORS (Cross-Origin Resource Sharing) es una política de seguridad que controla cómo las páginas web pueden acceder a recursos de otros dominios. Es fundamental para entender por qué algunas peticiones fallan y cómo solucionarlo.\n\n**Ejemplos:**\n```javascript\n// CORS básico\nasync function ejemploCORS() {\n  try {\n    // Esta petición puede fallar por CORS\n    const response = await fetch('https://api.ejemplo.com/datos');\n    const datos = await response.json();\n    console.log('Datos obtenidos:', datos);\n  } catch (error) {\n    if (error.message.includes('CORS')) {\n      console.error('Error de CORS:', error.message);\n    } else {\n      console.error('Otro error:', error.message);\n    }\n  }\n}\n\n// Headers CORS comunes\nconst headersCORS = {\n  'Access-Control-Allow-Origin': '*', // Permite cualquier origen\n  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',\n  'Access-Control-Allow-Headers': 'Content-Type, Authorization',\n  'Access-Control-Allow-Credentials': 'true' // Permite cookies\n};\n\n// Petición con credenciales\nasync function peticionConCredenciales() {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos', {\n      credentials: 'include', // Incluir cookies\n      headers: {\n        'Authorization': 'Bearer token123'\n      }\n    });\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    console.error('Error con credenciales:', error);\n  }\n}\n\n// Preflight request\nasync function peticionPreflight() {\n  try {\n    // Esta petición puede generar un preflight request\n    const response = await fetch('https://api.ejemplo.com/datos', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer token123'\n      },\n      body: JSON.stringify({ datos: 'test' })\n    });\n    \n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    console.error('Error en preflight:', error);\n  }\n}\n\n// Manejar CORS en el cliente\nclass ApiClientCORS {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl;\n  }\n  \n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    const config = {\n      ...options,\n      headers: {\n        'Content-Type': 'application/json',\n        ...options.headers\n      }\n    };\n    \n    try {\n      const response = await fetch(url, config);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      \n      return await response.json();\n    } catch (error) {\n      if (error.name === 'TypeError' && error.message.includes('CORS')) {\n        throw new Error('Error de CORS: El servidor no permite peticiones desde este origen');\n      }\n      throw error;\n    }\n  }\n}\n\n// Proxy para evitar CORS\nclass ProxyCORS {\n  constructor(proxyUrl) {\n    this.proxyUrl = proxyUrl;\n  }\n  \n  async obtenerDatos(url) {\n    try {\n      const response = await fetch(`${this.proxyUrl}?url=${encodeURIComponent(url)}`);\n      return await response.json();\n    } catch (error) {\n      console.error('Error en proxy:', error);\n      throw error;\n    }\n  }\n}\n\n// Usar proxy\nconst proxy = new ProxyCORS('https://cors-anywhere.herokuapp.com/');\n\nasync function ejemploProxy() {\n  try {\n    const datos = await proxy.obtenerDatos('https://api.ejemplo.com/datos');\n    console.log('Datos obtenidos via proxy:', datos);\n  } catch (error) {\n    console.error('Error con proxy:', error);\n  }\n}\n\n// CORS con diferentes orígenes\nconst origenesPermitidos = [\n  'https://mi-app.com',\n  'https://www.mi-app.com',\n  'http://localhost:3000',\n  'http://127.0.0.1:3000'\n];\n\nfunction verificarOrigen(origin) {\n  return origenesPermitidos.includes(origin);\n}\n\n// Headers CORS dinámicos\nfunction obtenerHeadersCORS(origin) {\n  const headers = {\n    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',\n    'Access-Control-Allow-Headers': 'Content-Type, Authorization'\n  };\n  \n  if (verificarOrigen(origin)) {\n    headers['Access-Control-Allow-Origin'] = origin;\n    headers['Access-Control-Allow-Credentials'] = 'true';\n  } else {\n    headers['Access-Control-Allow-Origin'] = '*';\n  }\n  \n  return headers;\n}\n\n// Manejo de errores CORS\nfunction manejarErrorCORS(error) {\n  if (error.name === 'TypeError' && error.message.includes('CORS')) {\n    console.error('Error de CORS detectado');\n    console.error('Posibles soluciones:');\n    console.error('1. Verificar que el servidor permita el origen');\n    console.error('2. Usar un proxy CORS');\n    console.error('3. Configurar el servidor para permitir CORS');\n  }\n}\n\n// Ejemplo de uso\nasync function ejemploCompletoCORS() {\n  try {\n    const response = await fetch('https://api.ejemplo.com/datos');\n    const datos = await response.json();\n    return datos;\n  } catch (error) {\n    manejarErrorCORS(error);\n    throw error;\n  }\n}\n```"
      },
      practical: [
        "Aplicación de clima con modo demo (datos simulados)",
        "Estados de UI: cargando, éxito, error con feedback visual",
        "Manejo de errores robusto con mensajes específicos",
        "Fetch API con timeout y validación de respuestas",
        "Proyecto completo: HTML, CSS, JavaScript integrado"
      ]
    },
    activities: [
      {
        title: "Teoría de Asincronía con Analogías",
        duration: "60 min",
        description: "Explicar programación asíncrona con analogía del restaurante y evolución Callbacks → Promises → Async/Await"
      },
      {
        title: "Aplicación de Clima en Modo Demo",
        duration: "60 min",
        description: "Construir aplicación completa con datos simulados, estados de UI y manejo de errores"
      },
      {
        title: "Ejercicios Prácticos Progresivos",
        duration: "60 min",
        description: "API de datos falsos, manejo de estados, peticiones en paralelo y aplicación de gatos"
      }
    ],
    homework: [
      "Crear aplicación que consuma API diferente (gatos, chistes, citas)",
      "Implementar modo demo con datos simulados",
      "Agregar estados de carga, éxito y error con feedback visual",
      "Integrar con la lista de tareas de la sesión anterior"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web con DevTools",
      "Aplicación de clima (modo demo incluido)",
      "APIs gratuitas: JSONPlaceholder, The Cat API, Quotable",
      "Guía completa con ejemplos paso a paso"
    ],
    exercises: [
      {
        title: "Aplicación de Clima con Modo Demo",
        description: "Aplicación completa que consume API de clima con datos simulados para demostración.",
        code: `// Aplicación de Clima - Modo Demo
const API_KEY = 'demo-key';
const MODO_DEMO = API_KEY === 'demo-key';

// Datos simulados para demo
function generarDatosSimulados(ciudad) {
  const temperaturas = [15, 18, 22, 25, 28, 30, 32, 20, 16, 12];
  const descripciones = ['cielo despejado', 'parcialmente nublado', 'nublado', 'lluvia ligera', 'soleado'];
  
  const temperatura = temperaturas[Math.floor(Math.random() * temperaturas.length)];
  const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
  
  return {
    name: ciudad,
    sys: { country: 'ES' },
    main: {
      temp: temperatura + 273.15,
      feels_like: (temperatura + Math.random() * 4 - 2) + 273.15,
      humidity: Math.floor(Math.random() * 40) + 40
    },
    weather: [{ description: descripcion }],
    wind: { speed: Math.random() * 10 + 2 }
  };
}

// Función principal para obtener clima
async function obtenerClima(ciudad) {
  try {
    mostrarEstado('cargando');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (MODO_DEMO) {
      console.log('🌤️ Modo DEMO: Usando datos simulados');
      return generarDatosSimulados(ciudad);
    }
    
    const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${ciudad}&appid=\${API_KEY}\`);
    
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error('Error al obtener datos del clima');
  }
}

// Mostrar estados de UI
function mostrarEstado(estado) {
  document.getElementById('cargando').classList.toggle('oculto', estado !== 'cargando');
  document.getElementById('error').classList.toggle('oculto', estado !== 'error');
  document.getElementById('resultado').classList.toggle('oculto', estado !== 'resultado');
}

// Procesar y mostrar datos
function mostrarDatosClima(datos) {
  const temp = Math.round(datos.main.temp - 273.15);
  document.getElementById('nombre-ciudad').textContent = \`\${datos.name}, \${datos.sys.country}\`;
  document.getElementById('temperatura').textContent = temp;
  document.getElementById('descripcion').textContent = datos.weather[0].description;
  mostrarEstado('resultado');
}

// Función principal
async function buscarClima(ciudad) {
  try {
    const datos = await obtenerClima(ciudad);
    mostrarDatosClima(datos);
  } catch (error) {
    document.getElementById('mensaje-error').textContent = error.message;
    mostrarEstado('error');
  }
}

// Event listener
document.getElementById('formulario-clima').addEventListener('submit', async (e) => {
  e.preventDefault();
  const ciudad = document.getElementById('ciudad').value;
  await buscarClima(ciudad);
});`,
        solution: `// Solución completa - Aplicación de Clima con Modo Demo
// HTML, CSS y JavaScript integrados

// 1. HTML Structure
\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Aplicación de Clima</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Aplicación de Clima</h1>
            <p>Consulta el clima de cualquier ciudad</p>
        </header>
        
        <main>
            <form id="formulario-clima">
                <input type="text" id="ciudad" placeholder="Ingresa el nombre de la ciudad" required>
                <button type="submit">Buscar Clima</button>
            </form>
            
            <div id="cargando" class="estado oculto">
                <div class="spinner"></div>
                <p>Consultando el clima...</p>
            </div>
            
            <div id="error" class="estado oculto">
                <div class="error-icon">⚠️</div>
                <h3>Error</h3>
                <p id="mensaje-error"></p>
                <button id="reintentar">Reintentar</button>
            </div>
            
            <div id="resultado" class="estado oculto">
                <h2 id="nombre-ciudad"></h2>
                <div class="temperatura">
                    <span id="temperatura"></span>
                    <span class="unidad">°C</span>
                </div>
                <p id="descripcion"></p>
            </div>
        </main>
    </div>
    <script src="app.js"></script>
</body>
</html>
\`\`\`

// 2. CSS Styles
\`\`\`css
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
    min-height: 100vh;
    margin: 0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 40px;
}

header h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

form {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    display: flex;
    gap: 10px;
}

#ciudad {
    flex: 1;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

button {
    padding: 15px 30px;
    background: #74b9ff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

.estado {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    text-align: center;
}

.oculto {
    display: none;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #74b9ff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.temperatura {
    font-size: 4rem;
    font-weight: bold;
    color: #2d3436;
    margin: 20px 0;
}
\`\`\`

// 3. JavaScript Logic
\`\`\`javascript
// Configuración
const API_KEY = 'demo-key';
const MODO_DEMO = API_KEY === 'demo-key';

// Datos simulados
function generarDatosSimulados(ciudad) {
  const temperaturas = [15, 18, 22, 25, 28, 30, 32, 20, 16, 12];
  const descripciones = ['cielo despejado', 'parcialmente nublado', 'nublado', 'lluvia ligera', 'soleado'];
  
  const temperatura = temperaturas[Math.floor(Math.random() * temperaturas.length)];
  const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
  
  return {
    name: ciudad,
    sys: { country: 'ES' },
    main: {
      temp: temperatura + 273.15,
      feels_like: (temperatura + Math.random() * 4 - 2) + 273.15,
      humidity: Math.floor(Math.random() * 40) + 40
    },
    weather: [{ description: descripcion }],
    wind: { speed: Math.random() * 10 + 2 }
  };
}

// Función principal
async function obtenerClima(ciudad) {
  try {
    mostrarEstado('cargando');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (MODO_DEMO) {
      console.log('🌤️ Modo DEMO: Usando datos simulados');
      return generarDatosSimulados(ciudad);
    }
    
    const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${ciudad}&appid=\${API_KEY}\`);
    
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error('Error al obtener datos del clima');
  }
}

// Estados de UI
function mostrarEstado(estado) {
  document.getElementById('cargando').classList.toggle('oculto', estado !== 'cargando');
  document.getElementById('error').classList.toggle('oculto', estado !== 'error');
  document.getElementById('resultado').classList.toggle('oculto', estado !== 'resultado');
}

// Mostrar datos
function mostrarDatosClima(datos) {
  const temp = Math.round(datos.main.temp - 273.15);
  document.getElementById('nombre-ciudad').textContent = \`\${datos.name}, \${datos.sys.country}\`;
  document.getElementById('temperatura').textContent = temp;
  document.getElementById('descripcion').textContent = datos.weather[0].description;
  mostrarEstado('resultado');
}

// Función principal
async function buscarClima(ciudad) {
  try {
    const datos = await obtenerClima(ciudad);
    mostrarDatosClima(datos);
  } catch (error) {
    document.getElementById('mensaje-error').textContent = error.message;
    mostrarEstado('error');
  }
}

// Event listeners
document.getElementById('formulario-clima').addEventListener('submit', async (e) => {
  e.preventDefault();
  const ciudad = document.getElementById('ciudad').value;
  await buscarClima(ciudad);
});

document.getElementById('reintentar').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudad').value;
  if (ciudad) buscarClima(ciudad);
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  if (MODO_DEMO) {
    console.log('🌤️ MODO DEMO activado - Usando datos simulados');
  }
});
\`\`\`

// Características implementadas:
// ✅ Modo demo con datos simulados
// ✅ Estados de UI (cargando, éxito, error)
// ✅ Manejo robusto de errores
// ✅ Interfaz moderna y responsive
// ✅ Funciona sin API key
// ✅ Perfecto para demostración en clase
  
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
      "Crear una aplicación completa de gestión de películas",
      "Implementar operaciones CRUD con API REST",
      "Aplicar todos los conceptos aprendidos en sesiones anteriores",
      "Desarrollar habilidades prácticas de programación frontend"
    ],
    content: {
      theoretical: [
        "Aplicación de gestión de películas con CRUD completo",
        "Consumo de APIs REST con Fetch API",
        "Manejo de estados de UI (cargando, éxito, error)",
        "Validación de formularios y manejo de errores",
        "Diseño responsive y animaciones CSS",
        "Transformación de datos entre formulario y API"
      ],
      theoreticalDetails: {
        "Aplicación de gestión de películas con CRUD completo": "En esta sesión crearemos una aplicación completa que permite gestionar películas con operaciones CRUD (Create, Read, Update, Delete):\n\n• **Create**: Agregar nuevas películas con formulario completo\n• **Read**: Mostrar lista de películas en tarjetas atractivas\n• **Update**: Editar películas existentes\n• **Delete**: Eliminar películas con confirmación\n\nLa aplicación incluye:\n- Formulario con validación en tiempo real\n- Búsqueda y filtros por género\n- Estados de carga, éxito y error\n- Diseño responsive para móviles y desktop\n- Animaciones y transiciones suaves\n\n```javascript\n// Ejemplo de estructura de datos de película\nconst movie = {\n  id: 1,\n  title: \"El Padrino\",\n  director: \"Francis Ford Coppola\",\n  year: 1972,\n  genre: \"Drama\",\n  rating: 9.2,\n  description: \"La historia de una familia de la mafia italiana...\"\n};\n```",
        
        "Consumo de APIs REST con Fetch API": "La aplicación consume una API REST para gestionar películas. Usamos Fetch API con async/await para operaciones asíncronas:\n\n```javascript\n// Cliente API reutilizable\nclass ApiClient {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl;\n    this.defaultHeaders = {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    };\n  }\n\n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    const config = {\n      headers: { ...this.defaultHeaders, ...options.headers },\n      ...options\n    };\n\n    const response = await fetch(url, config);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    return await response.json();\n  }\n\n  async get(endpoint) {\n    return this.request(endpoint, { method: 'GET' });\n  }\n\n  async post(endpoint, data) {\n    return this.request(endpoint, {\n      method: 'POST',\n      body: JSON.stringify(data)\n    });\n  }\n}\n\n// Uso en la aplicación\nconst apiClient = new ApiClient('http://localhost:4000');\nconst movies = await apiClient.get('/movies');\n```",
        
        "Manejo de estados de UI (cargando, éxito, error)": "La aplicación maneja diferentes estados de la interfaz para proporcionar feedback visual al usuario:\n\n```javascript\n// Estados de la aplicación\nconst APP_STATES = {\n  LOADING: 'loading',\n  SUCCESS: 'success',\n  ERROR: 'error',\n  EMPTY: 'empty'\n};\n\n// Función para mostrar estados\nfunction showState(state, message = '') {\n  // Ocultar todos los estados\n  elements.loadingState.style.display = 'none';\n  elements.errorState.style.display = 'none';\n  elements.emptyState.style.display = 'none';\n  elements.moviesContainer.style.display = 'none';\n  \n  switch (state) {\n    case APP_STATES.LOADING:\n      elements.loadingState.style.display = 'block';\n      break;\n    case APP_STATES.ERROR:\n      elements.errorState.style.display = 'block';\n      if (message) {\n        elements.errorMessage.textContent = message;\n      }\n      break;\n    case APP_STATES.EMPTY:\n      elements.emptyState.style.display = 'block';\n      break;\n    case APP_STATES.SUCCESS:\n      elements.moviesContainer.style.display = 'grid';\n      break;\n  }\n}\n\n// Uso en operaciones CRUD\nasync function fetchMovies() {\n  try {\n    showState(APP_STATES.LOADING);\n    const data = await apiClient.get('/movies');\n    // Procesar datos...\n    showState(APP_STATES.SUCCESS);\n  } catch (error) {\n    showState(APP_STATES.ERROR, 'Error al cargar las películas');\n  }\n}\n```",
        
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
        title: "Configuración del entorno y estructura HTML",
        duration: "30 min",
        description: "Crear la estructura HTML semántica para la aplicación de películas"
      },
      {
        title: "Implementación de estilos CSS y diseño responsive",
        duration: "45 min",
        description: "Desarrollar los estilos CSS con variables, Grid, Flexbox y responsive design"
      },
      {
        title: "Lógica JavaScript y consumo de API",
        duration: "90 min",
        description: "Implementar las operaciones CRUD, manejo de estados y consumo de la API REST"
      },
      {
        title: "Testing, validación y refinamiento",
        duration: "15 min",
        description: "Probar todas las funcionalidades, validar formularios y optimizar la experiencia"
      }
    ],
    homework: [
      "Agregar funcionalidad de favoritos para películas",
      "Implementar búsqueda avanzada con múltiples filtros",
      "Crear un modo de vista detallada para cada película",
      "Agregar validación de imagen de póster",
      "Implementar paginación para grandes cantidades de películas"
    ],
    materials: [
      "Editor de código (VS Code)",
      "Navegador web moderno",
      "API local corriendo en localhost:4000",
      "Servidor local para la aplicación web",
      "Documentación de la API (swagger.yaml)"
    ],
    exercises: [
      {
        title: "Aplicación de Gestión de Películas",
        description: "Crea una aplicación web completa para gestionar películas con operaciones CRUD, consumiendo una API REST.",
        code: `// Estructura del proyecto
/*
app-peliculas/
├── index.html          # Estructura HTML semántica
├── styles.css          # Estilos CSS modernos y responsivos
├── app.js             # Lógica JavaScript con CRUD completo
├── README.md          # Documentación del proyecto
├── API_CONFIG.md      # Configuración de la API
└── swagger.yaml       # Documentación de la API
*/

// Configuración de la API
const API_BASE_URL = 'http://localhost:4000';
const API_ENDPOINTS = {
  movies: '/movies',
  movieById: (id) => \`/movies/\${id}\`
};

// Mapeo de campos entre formulario y API
const FIELD_MAPPING = {
  formToApi: {
    title: 'title',
    director: 'tagline',
    year: 'release_date',
    genre: 'genres',
    rating: 'vote_average',
    description: 'overview'
  }
};`,
        solution: `// Solución: Aplicación de Gestión de Películas
// HTML (index.html)
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎬 Gestión de Películas - Sesión 15</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="header__title">
                <i class="fas fa-film"></i>
                Gestión de Películas
            </h1>
            <p class="header__subtitle">Aplicación CRUD con API REST - Sesión 15</p>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <!-- Formulario para agregar/editar películas -->
            <section class="form-section">
                <div class="form-container">
                    <h2 class="form-title">
                        <i class="fas fa-plus-circle"></i>
                        <span id="form-title-text">Agregar Nueva Película</span>
                    </h2>
                    
                    <form id="movie-form" class="movie-form">
                        <div class="form-group">
                            <label for="title" class="form-label">
                                <i class="fas fa-ticket-alt"></i>
                                Título
                            </label>
                            <input type="text" id="title" name="title" class="form-input" placeholder="Ej: El Padrino" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="director" class="form-label">
                                <i class="fas fa-user"></i>
                                Director
                            </label>
                            <input type="text" id="director" name="director" class="form-input" placeholder="Ej: Francis Ford Coppola" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="year" class="form-label">
                                <i class="fas fa-calendar"></i>
                                Año
                            </label>
                            <input type="number" id="year" name="year" class="form-input" placeholder="Ej: 1972" min="1888" max="2024" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="genre" class="form-label">
                                <i class="fas fa-tags"></i>
                                Género
                            </label>
                            <select id="genre" name="genre" class="form-select" required>
                                <option value="">Selecciona un género</option>
                                <option value="Acción">Acción</option>
                                <option value="Drama">Drama</option>
                                <option value="Comedia">Comedia</option>
                                <option value="Terror">Terror</option>
                                <option value="Ciencia Ficción">Ciencia Ficción</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="rating" class="form-label">
                                <i class="fas fa-star"></i>
                                Calificación (1-10)
                            </label>
                            <input type="number" id="rating" name="rating" class="form-input" placeholder="Ej: 9.2" min="1" max="10" step="0.1" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="description" class="form-label">
                                <i class="fas fa-align-left"></i>
                                Descripción
                            </label>
                            <textarea id="description" name="description" class="form-textarea" placeholder="Breve descripción de la película..." rows="3"></textarea>
                        </div>
                        
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary" id="submit-btn">
                                <i class="fas fa-save"></i>
                                <span id="submit-text">Agregar Película</span>
                            </button>
                            <button type="button" class="btn btn-secondary" id="cancel-btn" style="display: none;">
                                <i class="fas fa-times"></i>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <!-- Búsqueda y filtros -->
            <section class="search-section">
                <div class="search-container">
                    <div class="search-group">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" id="search-input" class="search-input" placeholder="Buscar películas por título, director o género...">
                    </div>
                    <div class="filter-group">
                        <select id="genre-filter" class="filter-select">
                            <option value="">Todos los géneros</option>
                            <option value="Acción">Acción</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedia">Comedia</option>
                            <option value="Terror">Terror</option>
                            <option value="Ciencia Ficción">Ciencia Ficción</option>
                        </select>
                    </div>
                </div>
            </section>

            <!-- Estados de la aplicación -->
            <section class="states-section">
                <div id="loading-state" class="state-container loading-state" style="display: none;">
                    <div class="spinner"></div>
                    <p class="state-message">Cargando películas...</p>
                </div>

                <div id="error-state" class="state-container error-state" style="display: none;">
                    <div class="error-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3 class="state-title">Error</h3>
                    <p class="state-message" id="error-message">Ha ocurrido un error al cargar las películas.</p>
                    <button class="btn btn-primary" id="retry-btn">
                        <i class="fas fa-redo"></i>
                        Reintentar
                    </button>
                </div>

                <div id="empty-state" class="state-container empty-state" style="display: none;">
                    <div class="empty-icon">
                        <i class="fas fa-film"></i>
                    </div>
                    <h3 class="state-title">No hay películas</h3>
                    <p class="state-message">Agrega tu primera película usando el formulario de arriba.</p>
                </div>
            </section>

            <!-- Lista de películas -->
            <section class="movies-section">
                <div class="movies-header">
                    <h2 class="movies-title">
                        <i class="fas fa-list"></i>
                        Lista de Películas
                        <span class="movies-count" id="movies-count">(0)</span>
                    </h2>
                </div>
                
                <div id="movies-container" class="movies-container">
                    <!-- Las películas se cargarán aquí dinámicamente -->
                </div>
            </section>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p class="footer-text">
                <i class="fas fa-code"></i>
                Desarrollado con HTML, CSS y JavaScript puro - Sesión 15
            </p>
            <p class="footer-api">
                <i class="fas fa-database"></i>
                API: MoviesAPI.ReactJS
            </p>
        </div>
    </footer>

    <script src="app.js"></script>
</body>
</html>

// JavaScript (app.js) - Funciones principales
// Configuración de la API
const API_BASE_URL = 'http://localhost:4000';
const API_ENDPOINTS = {
  movies: '/movies',
  movieById: (id) => \`/movies/\${id}\`
};

// Cliente API reutilizable
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseUrl}\${endpoint}\`;
    const config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      console.error(\`Error en petición a \${endpoint}:\`, error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

// Crear instancia del cliente API
const apiClient = new ApiClient(API_BASE_URL);

// Transformar datos del formulario a formato de API
function transformFormToApi(formData) {
  return {
    title: formData.title,
    tagline: formData.director,
    release_date: formData.year ? \`\${formData.year}-01-01\` : null,
    genres: formData.genre ? [formData.genre] : [],
    vote_average: parseFloat(formData.rating) || 0,
    overview: formData.description || '',
    poster_path: 'https://via.placeholder.com/300x450?text=No+Image',
    runtime: 120,
    budget: 0,
    revenue: 0,
    vote_count: 0
  };
}

// Obtener todas las películas
async function fetchMovies() {
  try {
    showState('loading');
    const response = await apiClient.get(API_ENDPOINTS.movies);
    let moviesData = [];
    if (response && Array.isArray(response.data)) {
      moviesData = response.data;
    }
    movies = moviesData;
    filteredMovies = [...movies];
    
    if (movies.length === 0) {
      showState('empty');
    } else {
      showState('success');
      renderMovies();
    }
    updateMoviesCount();
  } catch (error) {
    console.error('Error al obtener películas:', error);
    showState('error', 'Error al cargar las películas. Verifica tu conexión a internet.');
  }
}

// Crear nueva película
async function createMovie(formData) {
  try {
    const apiData = transformFormToApi(formData);
    const response = await apiClient.post(API_ENDPOINTS.movies, apiData);
    const newMovie = response;
    
    movies.unshift(newMovie);
    filteredMovies = [...movies];
    renderMovies();
    updateMoviesCount();
    clearForm();
    
    showNotification('Película agregada exitosamente', 'success');
  } catch (error) {
    console.error('Error al crear película:', error);
    showNotification('Error al agregar la película', 'error');
    throw error;
  }
}

// Renderizar películas
function renderMovies() {
  if (filteredMovies.length === 0) {
    elements.moviesContainer.innerHTML = \`
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
        <h3>No se encontraron películas</h3>
        <p>Intenta ajustar los filtros de búsqueda.</p>
      </div>
    \`;
    return;
  }
  
  elements.moviesContainer.innerHTML = filteredMovies.map(movie => createMovieCard(movie)).join('');
}

// Crear tarjeta de película
function createMovieCard(movie) {
  const title = movie.title || 'Sin título';
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const director = movie.tagline || 'Director desconocido';
  const genre = Array.isArray(movie.genres) && movie.genres.length > 0 ? movie.genres[0] : 'Sin género';
  const rating = movie.vote_average || 0;
  const description = movie.overview || '';
  const stars = generateStars(rating);
  
  return \`
    <div class="movie-card" data-id="\${movie.id}">
      <div class="movie-header">
        <div>
          <h3 class="movie-title">\${escapeHtml(title)}</h3>
          <p class="movie-year">\${year}</p>
        </div>
        <div class="movie-actions">
          <button class="btn btn-warning btn-sm" onclick="editMovie(\${movie.id})" title="Editar">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteMovie(\${movie.id})" title="Eliminar">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      
      <div class="movie-info">
        <div class="movie-director">
          <i class="fas fa-user"></i>
          <span>\${escapeHtml(director)}</span>
        </div>
        
        <div class="movie-genre">
          <i class="fas fa-tags"></i>
          <span>\${escapeHtml(genre)}</span>
        </div>
        
        <div class="movie-rating">
          <div class="rating-stars">\${stars}</div>
          <span class="rating-value">\${rating}/10</span>
        </div>
        
        \${description ? \`
          <div class="movie-description">
            \${escapeHtml(description)}
          </div>
        \` : ''}
      </div>
    </div>
  \`;
}

// Inicializar aplicación
async function init() {
  console.log('🎬 Iniciando aplicación de gestión de películas...');
  try {
    await fetchMovies();
    updateFormUI();
    console.log('✅ Aplicación iniciada correctamente');
  } catch (error) {
    console.error('❌ Error al inicializar la aplicación:', error);
    showState('error', 'Error al inicializar la aplicación');
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);`
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
      "Comprender React como librería de UI y su ecosistema moderno",
      "Configurar entorno de desarrollo: comparar Vite vs Create React App",
      "Dominar JSX: sintaxis, reglas y diferencias con HTML",
      "Crear componentes funcionales reutilizables y escalables",
      "Implementar props para comunicación entre componentes",
      "Aplicar estilos en React: CSS global, modules e inline",
      "Organizar estructura de proyecto React profesional",
      "Desarrollar aplicación práctica: Sistema de tarjetas de equipo"
    ],
    content: {
      theoretical: [
        "React: Librería de UI moderna y su ecosistema",
        "Configuración completa del entorno de desarrollo",
        "JSX: Sintaxis, reglas y diferencias con HTML",
        "Componentes funcionales: estructura y mejores prácticas",
        "Estilos en React: CSS, CSS Modules y estilos inline",
        "Props: Tipos, validación y comunicación entre componentes",
        "Estructura de proyecto React: archivos y organización",
        "Herramientas de desarrollo: DevTools y debugging"
      ],
      theoreticalDetails: {
        "React: Librería de UI moderna y su ecosistema": "React es una librería de JavaScript desarrollada por Meta (Facebook) para construir interfaces de usuario interactivas y escalables. Su filosofía se basa en componentes reutilizables, Virtual DOM para rendimiento óptimo, y un ecosistema maduro de herramientas.\n\n**¿Por qué React?**\n- **Componentes reutilizables**: Cada pieza de UI es independiente y reutilizable\n- **Virtual DOM**: Actualizaciones eficientes que mejoran el rendimiento\n- **Ecosistema maduro**: Miles de librerías y herramientas disponibles\n- **Comunidad activa**: Soporte continuo y actualizaciones regulares\n- **Flexibilidad**: Se puede usar con diferentes arquitecturas y librerías\n\n**Ecosistema React:**\n```javascript\n// Herramientas esenciales\n- Vite/Webpack: Bundling y desarrollo\n- React Router: Navegación\n- Redux/Context: Manejo de estado\n- Material-UI/Ant Design: Componentes UI\n- Jest/Testing Library: Testing\n- React DevTools: Debugging\n\n// Ejemplo de componente moderno\nfunction ProductCard({ product, onAddToCart }) {\n  return (\n    <div className=\"product-card\">\n      <img src={product.image} alt={product.name} />\n      <h3>{product.name}</h3>\n      <p className=\"price\">${product.price}</p>\n      <button onClick={() => onAddToCart(product)}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// Uso del componente\n<ProductCard \n  product={productData} \n  onAddToCart={handleAddToCart} \n/>\n```",
        
        "Configuración completa del entorno de desarrollo": "Configurar React puede hacerse con dos herramientas principales: Vite (moderno y rápido) o Create React App (tradicional y estable). Ambas ofrecen ventajas específicas según las necesidades del proyecto.\n\n**Paso 1: Verificar Node.js**\n```bash\n# Verificar versión de Node.js (requiere 16+)\nnode --version\nnpm --version\n\n# Si no tienes Node.js, descargar desde nodejs.org\n```\n\n**Paso 2: Crear proyecto React**\n\n**Opción A: Vite (Recomendado) ⚡**\n```bash\n# Crear proyecto con Vite\nnpm create vite@latest mi-app-react -- --template react\ncd mi-app-react\nnpm install\nnpm run dev\n```\n\n**Opción B: Create React App (CRA) 🏗️**\n```bash\n# Crear proyecto con CRA\nnpx create-react-app mi-app-react\ncd mi-app-react\nnpm start\n```\n\n**Comparativa Vite vs CRA:**\n| Característica | **Vite** ⚡ | **Create React App** 🏗️ |\n|---|---|---|\n| **Velocidad de inicio** | 1-3 segundos | 10-30 segundos |\n| **Hot Reload** | Instantáneo | Rápido |\n| **Puerto por defecto** | 5173 | 3000 |\n| **Configuración** | Mínima | Completa |\n| **Ecosistema** | Nuevo | Maduro |\n\n**Estructura del proyecto:**\n\n**Con Vite:**\n```\nmi-app-react/\n├── public/\n│   └── vite.svg\n├── src/\n│   ├── App.jsx          # Componente principal\n│   ├── main.jsx        # Punto de entrada\n│   └── index.css       # Estilos globales\n├── index.html          # HTML base\n├── package.json        # Dependencias\n└── vite.config.js      # Configuración de Vite\n```\n\n**Con Create React App:**\n```\nmi-app-react/\n├── public/\n│   ├── index.html      # HTML base\n│   ├── favicon.ico     # Favicon\n│   └── manifest.json   # Web App Manifest\n├── src/\n│   ├── App.js          # Componente principal\n│   ├── index.js        # Punto de entrada\n│   ├── index.css       # Estilos globales\n│   └── logo.svg        # Logo de React\n├── package.json        # Dependencias\n└── README.md           # Documentación\n```\n\n**Scripts disponibles:**\n\n**Vite:**\n```bash\nnpm run dev      # Servidor de desarrollo\nnpm run build    # Build para producción\nnpm run preview  # Preview del build\nnpm run lint     # Linting del código\n```\n\n**Create React App:**\n```bash\nnpm start        # Servidor de desarrollo\nnpm run build    # Build para producción\nnpm test         # Ejecutar pruebas\nnpm run eject    # Exponer configuración (¡CUIDADO!)\n```\n\n**Recomendación para la clase:**\n- **Vite**: Para proyectos nuevos, máxima velocidad y simplicidad\n- **CRA**: Para compatibilidad con proyectos legacy o equipos familiarizados\n- **Ambas**: Conocer las dos opciones para tomar decisiones informadas",
        
        "JSX: Sintaxis, reglas y diferencias con HTML": "JSX (JavaScript XML) es una extensión de sintaxis que permite escribir HTML-like code dentro de JavaScript. Se transpila a JavaScript puro usando React.createElement().\n\n**Reglas importantes de JSX:**\n- **CamelCase para atributos**: `className` en lugar de `class`\n- **Elementos auto-cerrados**: `<img />` en lugar de `<img>`\n- **Expresiones JavaScript**: Usar `{}` para variables y funciones\n- **Un solo elemento padre**: Envolver en `<div>` o React.Fragment\n\n**Ejemplos prácticos:**\n```javascript\n// Diferencias HTML vs JSX\n// ❌ HTML\n<div class=\"container\">\n  <img src=\"image.jpg\">\n  <input type=\"text\">\n</div>\n\n// ✅ JSX\n<div className=\"container\">\n  <img src=\"image.jpg\" alt=\"Imagen\" />\n  <input type=\"text\" />\n</div>\n\n// Expresiones JavaScript en JSX\nfunction UserProfile({ user, isOnline }) {\n  return (\n    <div className=\"user-card\">\n      <h2>{user.name}</h2>\n      <p>Email: {user.email}</p>\n      <span className={isOnline ? 'online' : 'offline'}>\n        {isOnline ? 'En línea' : 'Desconectado'}\n      </span>\n      {user.age >= 18 && <p>Usuario adulto</p>}\n    </div>\n  );\n}\n\n// Listas y keys\nfunction TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>\n          {todo.text}\n        </li>\n      ))}\n    </ul>\n  );\n}\n```",
        
        "Componentes funcionales: estructura y mejores prácticas": "Los componentes funcionales son la forma moderna y recomendada de crear componentes en React. Son más simples, legibles y optimizables que los componentes de clase.\n\n**Estructura básica:**\n```javascript\n// Componente funcional simple\nfunction Welcome({ name }) {\n  return <h1>¡Hola, {name}!</h1>;\n}\n\n// Componente con props complejas\nfunction ProductCard({ product, onAddToCart }) {\n  return (\n    <div className=\"product-card\">\n      <img src={product.image} alt={product.name} />\n      <h3>{product.name}</h3>\n      <p className=\"price\">${product.price}</p>\n      <button onClick={() => onAddToCart(product)}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// Componente con props complejas\nfunction UserCard({ user, onEdit, onDelete }) {\n  return (\n    <div className=\"user-card\">\n      <img src={user.avatar} alt={user.name} />\n      <h3>{user.name}</h3>\n      <p>{user.email}</p>\n      <div className=\"actions\">\n        <button onClick={() => onEdit(user.id)}>Editar</button>\n        <button onClick={() => onDelete(user.id)}>Eliminar</button>\n      </div>\n    </div>\n  );\n}\n```\n\n**Mejores prácticas:**\n- **Nombres descriptivos**: `UserProfile` en lugar de `Profile`\n- **Props destructuring**: `{ name, age }` en lugar de `props`\n- **Componentes pequeños**: Una responsabilidad por componente\n- **Reutilización**: Crear componentes genéricos y configurables",
        
        "Estilos en React: CSS, CSS Modules y estilos inline": "React ofrece múltiples formas de aplicar estilos a los componentes, cada una con sus ventajas y casos de uso específicos. La elección depende del tamaño del proyecto y las necesidades de mantenimiento.\n\n**1. CSS Global (Tradicional)**\n```javascript\n// styles/globals.css\n.user-card {\n  border: 2px solid #646cff;\n  border-radius: 12px;\n  padding: 20px;\n  margin: 15px;\n  background: #1a1a1a;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  transition: transform 0.3s ease;\n  max-width: 400px;\n}\n\n.user-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(100, 108, 255, 0.3);\n}\n\n.user-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #646cff;\n}\n\n// Componente React\nimport './styles/globals.css';\n\nfunction UserCard({ name, email, avatar }) {\n  return (\n    <div className=\"user-card\">\n      <img src={avatar} alt={name} className=\"user-avatar\" />\n      <div className=\"user-info\">\n        <h3 className=\"user-name\">{name}</h3>\n        <p className=\"user-email\">{email}</p>\n      </div>\n    </div>\n  );\n}\n```\n\n**2. CSS Modules (Recomendado)**\n```javascript\n// UserCard.module.css\n.card {\n  border: 2px solid #646cff;\n  border-radius: 12px;\n  padding: 20px;\n  margin: 15px;\n  background: #1a1a1a;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  transition: transform 0.3s ease;\n  max-width: 400px;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(100, 108, 255, 0.3);\n}\n\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #646cff;\n}\n\n.name {\n  color: #646cff;\n  margin: 0 0 8px 0;\n  font-size: 1.2rem;\n}\n\n.email {\n  color: #888;\n  margin: 5px 0;\n  font-size: 0.9rem;\n}\n\n// Componente con CSS Modules\nimport styles from './UserCard.module.css';\n\nfunction UserCard({ name, email, avatar }) {\n  return (\n    <div className={styles.card}>\n      <img src={avatar} alt={name} className={styles.avatar} />\n      <div className={styles.info}>\n        <h3 className={styles.name}>{name}</h3>\n        <p className={styles.email}>{email}</p>\n      </div>\n    </div>\n  );\n}\n```\n\n**3. Estilos Inline (Dinámicos)**\n```javascript\n// Estilos inline para valores dinámicos\nfunction UserCard({ name, email, avatar, isOnline, theme }) {\n  const cardStyle = {\n    border: `2px solid ${theme.primary}`,\n    borderRadius: '12px',\n    padding: '20px',\n    margin: '15px',\n    backgroundColor: theme.background,\n    display: 'flex',\n    alignItems: 'center',\n    gap: '15px',\n    transition: 'transform 0.3s ease',\n    maxWidth: '400px',\n    transform: isOnline ? 'translateY(-5px)' : 'none'\n  };\n\n  const avatarStyle = {\n    width: '80px',\n    height: '80px',\n    borderRadius: '50%',\n    objectFit: 'cover',\n    border: `3px solid ${theme.primary}`\n  };\n\n  const nameStyle = {\n    color: theme.primary,\n    margin: '0 0 8px 0',\n    fontSize: '1.2rem'\n  };\n\n  return (\n    <div style={cardStyle}>\n      <img src={avatar} alt={name} style={avatarStyle} />\n      <div>\n        <h3 style={nameStyle}>{name}</h3>\n        <p style={{ color: theme.text, margin: '5px 0' }}>{email}</p>\n        <span style={{ \n          color: isOnline ? theme.success : theme.error,\n          fontSize: '0.8rem'\n        }}>\n          {isOnline ? 'En línea' : 'Desconectado'}\n        </span>\n      </div>\n    </div>\n  );\n}\n```\n\n**4. Estilos con Variables CSS**\n```javascript\n// styles/variables.css\n:root {\n  --primary-color: #646cff;\n  --background-color: #1a1a1a;\n  --text-color: #ffffff;\n  --border-radius: 12px;\n  --spacing: 20px;\n  --transition: all 0.3s ease;\n}\n\n// styles/components.css\n.user-card {\n  border: 2px solid var(--primary-color);\n  border-radius: var(--border-radius);\n  padding: var(--spacing);\n  background: var(--background-color);\n  color: var(--text-color);\n  transition: var(--transition);\n}\n\n.user-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(100, 108, 255, 0.3);\n}\n```\n\n**5. Combinación de Métodos**\n```javascript\n// Componente que combina diferentes métodos\nimport './UserCard.css'; // CSS global\nimport styles from './UserCard.module.css'; // CSS Modules\n\nfunction UserCard({ name, email, avatar, isOnline, theme }) {\n  // Estilos inline para valores dinámicos\n  const dynamicStyle = {\n    borderColor: theme.primary,\n    backgroundColor: theme.background\n  };\n\n  return (\n    <div \n      className={`${styles.card} user-card`} // Combinar CSS Modules y global\n      style={dynamicStyle} // Estilos inline dinámicos\n    >\n      <img src={avatar} alt={name} className={styles.avatar} />\n      <div className={styles.info}>\n        <h3 className={styles.name}>{name}</h3>\n        <p className={styles.email}>{email}</p>\n        <span className={isOnline ? styles.online : styles.offline}>\n          {isOnline ? 'En línea' : 'Desconectado'}\n        </span>\n      </div>\n    </div>\n  );\n}\n```\n\n**Cuándo usar cada método:**\n- **CSS Global**: Estilos base, reset, tipografías\n- **CSS Modules**: Componentes específicos, evitar conflictos\n- **Estilos Inline**: Valores dinámicos, temas, estados\n- **Variables CSS**: Temas, valores reutilizables\n- **Combinación**: Proyectos complejos con múltiples necesidades",
        
        "Props: Tipos, validación y comunicación entre componentes": "Props son la forma de pasar datos de componentes padre a hijo en React. Son inmutables y permiten crear componentes reutilizables y configurables.\n\n**Tipos de props:**\n```javascript\n// Props primitivas\nfunction Button({ text, disabled, onClick }) {\n  return (\n    <button disabled={disabled} onClick={onClick}>\n      {text}\n    </button>\n  );\n}\n\n// Props de objeto\nfunction UserCard({ user, onEdit }) {\n  return (\n    <div className=\"user-card\">\n      <h3>{user.name}</h3>\n      <p>{user.email}</p>\n      <button onClick={() => onEdit(user.id)}>Editar</button>\n    </div>\n  );\n}\n\n// Props de función\nfunction TodoItem({ todo, onToggle, onDelete }) {\n  return (\n    <div className=\"todo-item\">\n      <input \n        type=\"checkbox\" \n        checked={todo.completed}\n        onChange={() => onToggle(todo.id)}\n      />\n      <span>{todo.text}</span>\n      <button onClick={() => onDelete(todo.id)}>Eliminar</button>\n    </div>\n  );\n}\n\n// Props con valores por defecto\nfunction Input({ placeholder = 'Escribe aquí...', type = 'text' }) {\n  return <input type={type} placeholder={placeholder} />;\n}\n```\n\n**Comunicación entre componentes:**\n```javascript\n// Componente padre que pasa datos a hijos\nfunction TeamApp() {\n  const teamMembers = [\n    { id: 1, name: 'Juan Pérez', role: 'Developer' },\n    { id: 2, name: 'María García', role: 'Designer' },\n    { id: 3, name: 'Carlos López', role: 'Manager' }\n  ];\n  \n  const handleEdit = (id) => {\n    console.log('Editando usuario:', id);\n  };\n  \n  const handleDelete = (id) => {\n    console.log('Eliminando usuario:', id);\n  };\n  \n  return (\n    <div>\n      <h1>Mi Equipo</h1>\n      {teamMembers.map(member => (\n        <UserCard \n          key={member.id}\n          user={member} \n          onEdit={handleEdit}\n          onDelete={handleDelete}\n        />\n      ))}\n    </div>\n  );\n}\n```",
        
        "Estructura de proyecto React: archivos y organización": "Una buena organización de archivos es fundamental para mantener proyectos React escalables y mantenibles. React no impone una estructura específica, pero hay convenciones establecidas por la comunidad.\n\n**Estructura recomendada para principiantes:**\n```\nmi-app-react/\n├── public/\n│   ├── index.html          # HTML base\n│   ├── favicon.ico         # Icono del sitio\n│   └── logo192.png         # Imágenes estáticas\n├── src/\n│   ├── components/         # Componentes reutilizables\n│   │   ├── Header.jsx\n│   │   ├── Footer.jsx\n│   │   └── Button.jsx\n│   ├── pages/             # Páginas/views\n│   │   ├── Home.jsx\n│   │   ├── About.jsx\n│   │   └── Contact.jsx\n│   ├── styles/            # Archivos CSS\n│   │   ├── globals.css\n│   │   ├── components.css\n│   │   └── pages.css\n│   ├── App.jsx            # Componente principal\n│   ├── main.jsx          # Punto de entrada\n│   └── index.css         # Estilos globales\n├── package.json           # Dependencias y scripts\n├── vite.config.js        # Configuración de Vite\n└── README.md             # Documentación\n```\n\n**Convenciones de nomenclatura:**\n- **Componentes**: PascalCase (`UserCard.jsx`)\n- **Archivos**: kebab-case (`user-card.jsx`)\n- **Carpetas**: kebab-case (`user-components/`)\n- **Variables**: camelCase (`userName`)\n- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)\n\n**Ejemplo de organización:**\n```javascript\n// components/UserCard.jsx\nfunction UserCard({ name, email, avatar }) {\n  return (\n    <div className=\"user-card\">\n      <img src={avatar} alt={name} />\n      <h3>{name}</h3>\n      <p>{email}</p>\n    </div>\n  );\n}\n\nexport default UserCard;\n\n// pages/Home.jsx\nimport UserCard from '../components/UserCard';\n\nfunction Home() {\n  return (\n    <div>\n      <h1>Mi Equipo</h1>\n      <UserCard name=\"Juan\" email=\"juan@email.com\" />\n    </div>\n  );\n}\n\nexport default Home;\n```",
      },
      practical: [
        "Configurar entorno React: comparar Vite vs Create React App",
        "Crear primer componente funcional con JSX",
        "Dominar sintaxis JSX: expresiones, condicionales y listas",
        "Aplicar estilos en React: CSS global, modules e inline",
        "Implementar props: tipos, validación y comunicación",
        "Organizar estructura de proyecto React profesional",
        "Proyecto: Sistema de tarjetas de equipo con estilos modernos"
      ]
    },
    activities: [
      {
        title: "Configuración del entorno React",
        duration: "30 min",
        description: "Comparar Vite vs Create React App, crear proyecto con ambas herramientas y configurar entorno de desarrollo"
      },
      {
        title: "Primeros pasos con React",
        duration: "45 min",
        description: "Entender JSX, crear primer componente funcional y explorar diferencias entre Vite y CRA"
      },
      {
        title: "Estilos en React",
        duration: "45 min",
        description: "Aplicar CSS global, CSS Modules y estilos inline en componentes React con ejemplos prácticos"
      },
      {
        title: "Componentes y Props",
        duration: "60 min",
        description: "Crear componentes reutilizables, implementar props con validación y construir sistema de tarjetas de usuario"
      },
      {
        title: "Proyecto práctico",
        duration: "45 min",
        description: "Desarrollar aplicación completa: Sistema de tarjetas de equipo con estilos modernos, estructura profesional y componentes personalizados"
      }
    ],
    homework: [
      "Crear aplicación React con Vite y otra con Create React App para comparar",
      "Implementar 3 componentes diferentes con props y validación",
      "Experimentar con JSX: condicionales, listas y expresiones",
      "Aplicar estilos CSS: global, modules e inline en diferentes componentes",
      "Crear tema personalizado con variables CSS y estilos dinámicos",
      "Organizar proyecto con estructura profesional y documentar el código"
    ],
    materials: [
      "Node.js v16+ instalado y configurado",
      "Editor de código (VS Code recomendado)",
      "Navegador web moderno (Chrome, Firefox, Safari)",
      "React DevTools instalado",
      "Conexión a internet para descargar dependencias",
      "Conocimiento básico de HTML, CSS y JavaScript",
      "Guía de configuración React (Vite vs CRA)"
    ],
    exercises: [
      {
        title: "Componente de Tarjeta de Usuario",
        description: "Crea un componente reutilizable para mostrar información de usuario con props.",
        code: `// Componente UserCard
function UserCard({ name, email, role, avatar }) {
  // Tu código aquí
}

// Usar el componente
function App() {
  return (
    <div className="app">
      <h1>Mi Equipo</h1>
      <UserCard 
        name="Juan Pérez"
        email="juan@email.com"
        role="Developer"
        avatar="https://via.placeholder.com/100"
      />
      <UserCard 
        name="María García"
        email="maria@email.com"
        role="Designer"
        avatar="https://via.placeholder.com/100"
      />
    </div>
  );
}`,
        solution: `// Componente UserCard - Solución
function UserCard({ name, email, role, avatar }) {
  return (
    <div className="user-card">
      <img 
        src={avatar} 
        alt={name}
        className="user-avatar"
      />
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
        <span className="user-role">{role}</span>
      </div>
    </div>
  );
}

// CSS para el componente
const styles = \`
.user-card {
  border: 2px solid #646cff;
  border-radius: 12px;
  padding: 20px;
  margin: 15px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
  max-width: 400px;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(100, 108, 255, 0.3);
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #646cff;
}

.user-info {
  flex: 1;
}

.user-name {
  color: #646cff;
  margin: 0 0 8px 0;
  font-size: 1.2rem;
}

.user-email {
  color: #888;
  margin: 5px 0;
  font-size: 0.9rem;
}

.user-role {
  display: inline-block;
  background: #646cff;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 8px;
}
\`;

// Uso del componente
function App() {
  return (
    <div className="app">
      <style>{styles}</style>
      <h1>Mi Equipo</h1>
      <div className="team-container">
        <UserCard 
          name="Juan Pérez"
          email="juan@email.com"
          role="Developer"
          avatar="https://via.placeholder.com/100"
        />
        <UserCard 
          name="María García"
          email="maria@email.com"
          role="Designer"
          avatar="https://via.placeholder.com/100"
        />
        <UserCard 
          name="Carlos López"
          email="carlos@email.com"
          role="Manager"
          avatar="https://via.placeholder.com/100"
        />
      </div>
    </div>
  );
}

// Conceptos aplicados:
// ✅ Componentes funcionales
// ✅ Props (name, email, role, avatar)
// ✅ JSX con expresiones JavaScript
// ✅ Estilos CSS
// ✅ Reutilización de componentes
// ✅ Estructura semántica HTML

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
      "Dominar useState: estado local, actualizaciones y mejores prácticas",
      "Implementar useEffect: efectos secundarios, cleanup y dependencias",
      "Crear hooks personalizados reutilizables para lógica común",
      "Manejar estado complejo con useReducer",
      "Optimizar rendimiento con useMemo y useCallback",
      "Proyecto: Aplicación de gestión de tareas con hooks avanzados"
    ],
    content: {
      theoretical: [
        "Hooks: Conceptos fundamentales y reglas de uso",
        "useState: Estado local, actualizaciones y mejores prácticas",
        "useEffect: Efectos secundarios, cleanup y dependencias",
        "useReducer: Estado complejo y lógica de actualización",
        "useMemo y useCallback: Optimización de rendimiento",
        "Hooks personalizados: Lógica reutilizable y mejores prácticas",
        "useContext: Estado global y comunicación entre componentes"
      ],
      theoreticalDetails: {
        "Hooks: Conceptos fundamentales y reglas de uso": "Los hooks son funciones especiales que permiten usar estado y otras características de React en componentes funcionales. Introducidos en React 16.8, revolucionaron la forma de escribir componentes al permitir que los componentes funcionales tengan estado y ciclo de vida.\n\n**¿Qué son los hooks?**\n- **Funciones especiales**: Comienzan con 'use' (useState, useEffect, etc.)\n- **Estado en funcionales**: Permiten usar estado sin clases\n- **Lógica reutilizable**: Pueden extraerse en hooks personalizados\n- **Composición**: Se pueden combinar múltiples hooks\n\n**Reglas fundamentales:**\n1. **Solo en el nivel superior**: Nunca dentro de bucles, condiciones o funciones anidadas\n2. **Solo en React**: Llamar hooks de React o hooks personalizados\n3. **Mismo orden**: Los hooks deben llamarse en el mismo orden en cada renderizado\n\n**Ejemplos de uso correcto:**\n```javascript\n// ✅ Correcto - nivel superior\nfunction MiComponente() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('');\n  \n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n  \n  return <div>{count}</div>;\n}\n\n// ❌ Incorrecto - dentro de condición\nfunction MiComponente() {\n  if (true) {\n    const [count, setCount] = useState(0); // ❌ Error!\n  }\n  \n  return <div>Hola</div>;\n}\n```\n\n**Hooks más comunes:**\n- **useState**: Estado local\n- **useEffect**: Efectos secundarios\n- **useContext**: Contexto global\n- **useReducer**: Estado complejo\n- **useMemo**: Memoización de valores\n- **useCallback**: Memoización de funciones",
        
        "useState: Estado local, actualizaciones y mejores prácticas": "useState es el hook más fundamental que permite agregar estado local a componentes funcionales. Retorna un array con dos elementos: el valor actual del estado y una función para actualizarlo.\n\n**Conceptos clave:**\n- **Estado local**: Cada componente tiene su propio estado\n- **Actualizaciones asíncronas**: Las actualizaciones pueden agruparse\n- **Re-renderizado**: El componente se re-renderiza cuando el estado cambia\n- **Inicialización**: Puede ser un valor o una función\n\n**Sintaxis básica:**\n```javascript\nconst [estado, setEstado] = useState(valorInicial);\n```\n\n**Ejemplos prácticos:**\n```javascript\nimport { useState } from 'react';\n\n// Estado simple\nfunction Contador() {\n  const [count, setCount] = useState(0);\n  \n  const incrementar = () => setCount(count + 1);\n  const decrementar = () => setCount(count - 1);\n  const resetear = () => setCount(0);\n  \n  return (\n    <div>\n      <h2>Contador: {count}</h2>\n      <button onClick={incrementar}>+</button>\n      <button onClick={decrementar}>-</button>\n      <button onClick={resetear}>Reset</button>\n    </div>\n  );\n}\n\n// Estado con objeto\nfunction FormularioUsuario() {\n  const [usuario, setUsuario] = useState({\n    nombre: '',\n    email: '',\n    edad: 0\n  });\n  \n  const actualizarCampo = (campo, valor) => {\n    setUsuario(prev => ({\n      ...prev,\n      [campo]: valor\n    }));\n  };\n  \n  return (\n    <form>\n      <input\n        value={usuario.nombre}\n        onChange={(e) => actualizarCampo('nombre', e.target.value)}\n        placeholder=\"Nombre\"\n      />\n      <input\n        value={usuario.email}\n        onChange={(e) => actualizarCampo('email', e.target.value)}\n        placeholder=\"Email\"\n      />\n      <input\n        type=\"number\"\n        value={usuario.edad}\n        onChange={(e) => actualizarCampo('edad', parseInt(e.target.value))}\n        placeholder=\"Edad\"\n      />\n    </form>\n  );\n}\n\n// Estado con array\nfunction ListaTareas() {\n  const [tareas, setTareas] = useState([]);\n  const [nuevaTarea, setNuevaTarea] = useState('');\n  \n  const agregarTarea = () => {\n    if (nuevaTarea.trim()) {\n      setTareas(prev => [...prev, {\n        id: Date.now(),\n        texto: nuevaTarea,\n        completada: false\n      }]);\n      setNuevaTarea('');\n    }\n  };\n  \n  const toggleTarea = (id) => {\n    setTareas(prev => prev.map(tarea =>\n      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea\n    ));\n  };\n  \n  return (\n    <div>\n      <input\n        value={nuevaTarea}\n        onChange={(e) => setNuevaTarea(e.target.value)}\n        placeholder=\"Nueva tarea\"\n      />\n      <button onClick={agregarTarea}>Agregar</button>\n      <ul>\n        {tareas.map(tarea => (\n          <li key={tarea.id}>\n            <input\n              type=\"checkbox\"\n              checked={tarea.completada}\n              onChange={() => toggleTarea(tarea.id)}\n            />\n            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>\n              {tarea.texto}\n            </span>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n```\n\n**Mejores prácticas:**\n- **Actualizaciones funcionales**: Usar `setEstado(prev => newValue)` para evitar problemas de closure\n- **Estado inmutable**: Nunca mutar el estado directamente\n- **Separación de responsabilidades**: Un estado por concepto\n- **Inicialización perezosa**: Usar función para cálculos costosos",
        
        "useEffect: Efectos secundarios, cleanup y dependencias": "useEffect permite realizar efectos secundarios en componentes funcionales, reemplazando los métodos de ciclo de vida de los componentes de clase.\n\n**Conceptos clave:**\n- **Efectos secundarios**: Operaciones que afectan el mundo exterior\n- **Dependencias**: Controlan cuándo se ejecuta el efecto\n- **Cleanup**: Limpieza de recursos para evitar memory leaks\n- **Timing**: Se ejecuta después del renderizado\n\n**Sintaxis:**\n```javascript\nuseEffect(() => {\n  // Efecto\n  return () => {\n    // Cleanup (opcional)\n  };\n}, [dependencias]);\n```\n\n**Tipos de dependencias:**\n- **`[]`**: Se ejecuta solo una vez (componentDidMount)\n- **`[valor]`**: Se ejecuta cuando `valor` cambia\n- **Sin array**: Se ejecuta en cada renderizado\n\n**Ejemplos prácticos:**\n```javascript\nimport { useState, useEffect } from 'react';\n\n// 1. Efecto con dependencias\nfunction Usuario({ userId }) {\n  const [usuario, setUsuario] = useState(null);\n  const [loading, setLoading] = useState(false);\n  \n  useEffect(() => {\n    if (!userId) return;\n    \n    setLoading(true);\n    fetch(`/api/usuarios/${userId}`)\n      .then(res => res.json())\n      .then(data => {\n        setUsuario(data);\n        setLoading(false);\n      })\n      .catch(error => {\n        console.error('Error:', error);\n        setLoading(false);\n      });\n  }, [userId]); // Se ejecuta cuando userId cambia\n  \n  if (loading) return <div>Cargando...</div>;\n  return <div>{usuario?.nombre}</div>;\n}\n\n// 2. Efecto con cleanup\nfunction Timer() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(prev => prev + 1);\n    }, 1000);\n    \n    return () => clearInterval(interval); // Cleanup\n  }, []); // Solo al montar\n  \n  return <div>Timer: {count}</div>;\n}\n\n// 3. Efecto para suscripciones\nfunction ChatRoom({ roomId }) {\n  const [messages, setMessages] = useState([]);\n  \n  useEffect(() => {\n    const socket = new WebSocket(`ws://localhost:8080/room/${roomId}`);\n    \n    socket.onmessage = (event) => {\n      const message = JSON.parse(event.data);\n      setMessages(prev => [...prev, message]);\n    };\n    \n    return () => socket.close(); // Cleanup\n  }, [roomId]);\n  \n  return (\n    <div>\n      {messages.map(msg => (\n        <div key={msg.id}>{msg.text}</div>\n      ))}\n    </div>\n  );\n}\n\n// 4. Efecto para manipulación del DOM\nfunction FocusInput() {\n  const [inputValue, setInputValue] = useState('');\n  const inputRef = useRef(null);\n  \n  useEffect(() => {\n    if (inputRef.current) {\n      inputRef.current.focus();\n    }\n  }, []);\n  \n  return (\n    <input\n      ref={inputRef}\n      value={inputValue}\n      onChange={(e) => setInputValue(e.target.value)}\n    />\n  );\n}\n\n// 5. Efecto para actualizar título\nfunction DocumentTitle({ title }) {\n  useEffect(() => {\n    document.title = title;\n  }, [title]);\n  \n  return null;\n}\n```\n\n**Mejores prácticas:**\n- **Dependencias exactas**: Incluir todas las variables del efecto\n- **Cleanup necesario**: Limpiar timers, suscripciones, event listeners\n- **Efectos separados**: Un useEffect por responsabilidad\n- **Evitar dependencias innecesarias**: Usar useCallback para funciones",
        
        "useReducer: Estado complejo y lógica de actualización": "useReducer es una alternativa a useState para manejar estado complejo. Es especialmente útil cuando el estado tiene múltiples subvalores o cuando las actualizaciones dependen del estado anterior.\n\n**Conceptos clave:**\n- **Reducer**: Función pura que toma estado y acción, retorna nuevo estado\n- **Dispatch**: Función para enviar acciones al reducer\n- **Acciones**: Objetos que describen qué cambio hacer\n- **Estado inmutable**: El reducer nunca muta el estado original\n\n**Sintaxis:**\n```javascript\nconst [estado, dispatch] = useReducer(reducer, estadoInicial);\n```\n\n**Ejemplos prácticos:**\n```javascript\nimport { useReducer } from 'react';\n\n// 1. Contador con useReducer\nconst initialState = { count: 0 };\n\nfunction counterReducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    case 'set':\n      return { count: action.payload };\n    default:\n      return state;\n  }\n}\n\nfunction Contador() {\n  const [state, dispatch] = useReducer(counterReducer, initialState);\n  \n  return (\n    <div>\n      <h2>Count: {state.count}</h2>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n      <button onClick={() => dispatch({ type: 'set', payload: 10 })}>\n        Set to 10\n      </button>\n    </div>\n  );\n}\n\n// 2. Formulario complejo con useReducer\nconst formInitialState = {\n  values: { name: '', email: '', age: 0 },\n  errors: {},\n  isSubmitting: false,\n  isSubmitted: false\n};\n\nfunction formReducer(state, action) {\n  switch (action.type) {\n    case 'SET_FIELD':\n      return {\n        ...state,\n        values: {\n          ...state.values,\n          [action.field]: action.value\n        },\n        errors: {\n          ...state.errors,\n          [action.field]: ''\n        }\n      };\n    case 'SET_ERROR':\n      return {\n        ...state,\n        errors: {\n          ...state.errors,\n          [action.field]: action.error\n        }\n      };\n    case 'SET_SUBMITTING':\n      return {\n        ...state,\n        isSubmitting: action.isSubmitting\n      };\n    case 'SUBMIT_SUCCESS':\n      return {\n        ...state,\n        isSubmitted: true,\n        isSubmitting: false\n      };\n    case 'RESET':\n      return formInitialState;\n    default:\n      return state;\n  }\n}\n\nfunction FormularioComplejo() {\n  const [state, dispatch] = useReducer(formReducer, formInitialState);\n  \n  const handleChange = (field, value) => {\n    dispatch({ type: 'SET_FIELD', field, value });\n  };\n  \n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    dispatch({ type: 'SET_SUBMITTING', isSubmitting: true });\n    \n    try {\n      // Simular envío\n      await new Promise(resolve => setTimeout(resolve, 1000));\n      dispatch({ type: 'SUBMIT_SUCCESS' });\n    } catch (error) {\n      dispatch({ type: 'SET_SUBMITTING', isSubmitting: false });\n    }\n  };\n  \n  if (state.isSubmitted) {\n    return <div>¡Formulario enviado exitosamente!</div>;\n  }\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        value={state.values.name}\n        onChange={(e) => handleChange('name', e.target.value)}\n        placeholder=\"Nombre\"\n      />\n      <input\n        value={state.values.email}\n        onChange={(e) => handleChange('email', e.target.value)}\n        placeholder=\"Email\"\n      />\n      <input\n        type=\"number\"\n        value={state.values.age}\n        onChange={(e) => handleChange('age', parseInt(e.target.value))}\n        placeholder=\"Edad\"\n      />\n      <button type=\"submit\" disabled={state.isSubmitting}>\n        {state.isSubmitting ? 'Enviando...' : 'Enviar'}\n      </button>\n    </form>\n  );\n}\n\n// 3. Lista de tareas con useReducer\nconst todoInitialState = {\n  todos: [],\n  filter: 'all', // all, active, completed\n  nextId: 1\n};\n\nfunction todoReducer(state, action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [...state.todos, {\n          id: state.nextId,\n          text: action.text,\n          completed: false\n        }],\n        nextId: state.nextId + 1\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map(todo =>\n          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo\n        )\n      };\n    case 'DELETE_TODO':\n      return {\n        ...state,\n        todos: state.todos.filter(todo => todo.id !== action.id)\n      };\n    case 'SET_FILTER':\n      return {\n        ...state,\n        filter: action.filter\n      };\n    default:\n      return state;\n  }\n}\n\nfunction TodoApp() {\n  const [state, dispatch] = useReducer(todoReducer, todoInitialState);\n  const [newTodo, setNewTodo] = useState('');\n  \n  const filteredTodos = state.todos.filter(todo => {\n    if (state.filter === 'active') return !todo.completed;\n    if (state.filter === 'completed') return todo.completed;\n    return true;\n  });\n  \n  const addTodo = () => {\n    if (newTodo.trim()) {\n      dispatch({ type: 'ADD_TODO', text: newTodo });\n      setNewTodo('');\n    }\n  };\n  \n  return (\n    <div>\n      <input\n        value={newTodo}\n        onChange={(e) => setNewTodo(e.target.value)}\n        placeholder=\"Nueva tarea\"\n      />\n      <button onClick={addTodo}>Agregar</button>\n      \n      <div>\n        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'all' })}>\n          Todas\n        </button>\n        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'active' })}>\n          Activas\n        </button>\n        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'completed' })}>\n          Completadas\n        </button>\n      </div>\n      \n      <ul>\n        {filteredTodos.map(todo => (\n          <li key={todo.id}>\n            <input\n              type=\"checkbox\"\n              checked={todo.completed}\n              onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}\n            />\n            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>\n              {todo.text}\n            </span>\n            <button onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}>\n              Eliminar\n            </button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n```\n\n**Cuándo usar useReducer vs useState:**\n- **useReducer**: Estado complejo, múltiples subvalores, lógica de actualización compleja\n- **useState**: Estado simple, actualizaciones directas\n- **useReducer**: Mejor para formularios complejos, listas con filtros, estado de autenticación",
        
        "useMemo y useCallback: Optimización de rendimiento": "useMemo y useCallback son hooks de optimización que ayudan a prevenir cálculos innecesarios y re-renderizados.\n\n**useMemo - Memoización de valores:**\n- **Propósito**: Memoriza el resultado de un cálculo costoso\n- **Cuándo usar**: Cálculos complejos, transformaciones de datos, filtros\n- **Dependencias**: Se recalcula solo cuando las dependencias cambian\n\n**useCallback - Memoización de funciones:**\n- **Propósito**: Memoriza una función para evitar recrearla en cada render\n- **Cuándo usar**: Funciones pasadas como props, dependencias de useEffect\n- **Dependencias**: Se recrea solo cuando las dependencias cambian\n\n**Ejemplos prácticos:**\n```javascript\nimport { useState, useMemo, useCallback } from 'react';\n\n// 1. useMemo para cálculos costosos\nfunction ListaProductos({ productos, filtro, orden }) {\n  // Cálculo costoso que se memoriza\n  const productosFiltrados = useMemo(() => {\n    console.log('Filtrando productos...'); // Solo se ejecuta cuando cambia filtro\n    \n    return productos\n      .filter(producto => \n        producto.nombre.toLowerCase().includes(filtro.toLowerCase())\n      )\n      .sort((a, b) => {\n        if (orden === 'precio') return a.precio - b.precio;\n        if (orden === 'nombre') return a.nombre.localeCompare(b.nombre);\n        return 0;\n      });\n  }, [productos, filtro, orden]); // Dependencias\n  \n  return (\n    <div>\n      {productosFiltrados.map(producto => (\n        <div key={producto.id}>\n          <h3>{producto.nombre}</h3>\n          <p>Precio: ${producto.precio}</p>\n        </div>\n      ))}\n    </div>\n  );\n}\n\n// 2. useCallback para funciones\nfunction Contador({ inicial, paso }) {\n  const [count, setCount] = useState(inicial);\n  \n  // Función memorizada que no se recrea en cada render\n  const incrementar = useCallback(() => {\n    setCount(prev => prev + paso);\n  }, [paso]); // Solo se recrea si cambia 'paso'\n  \n  const decrementar = useCallback(() => {\n    setCount(prev => prev - paso);\n  }, [paso]);\n  \n  const resetear = useCallback(() => {\n    setCount(inicial);\n  }, [inicial]);\n  \n  return (\n    <div>\n      <h2>Contador: {count}</h2>\n      <button onClick={incrementar}>+{paso}</button>\n      <button onClick={decrementar}>-{paso}</button>\n      <button onClick={resetear}>Reset</button>\n    </div>\n  );\n}\n\n// 3. Combinación de useMemo y useCallback\nfunction ListaTareas({ tareas, filtro }) {\n  const [nuevaTarea, setNuevaTarea] = useState('');\n  \n  // Memoizar la lista filtrada\n  const tareasFiltradas = useMemo(() => {\n    return tareas.filter(tarea => {\n      if (filtro === 'todas') return true;\n      if (filtro === 'activas') return !tarea.completada;\n      if (filtro === 'completadas') return tarea.completada;\n      return true;\n    });\n  }, [tareas, filtro]);\n  \n  // Memoizar estadísticas\n  const estadisticas = useMemo(() => {\n    const total = tareas.length;\n    const completadas = tareas.filter(t => t.completada).length;\n    const activas = total - completadas;\n    \n    return { total, completadas, activas };\n  }, [tareas]);\n  \n  // Funciones memoizadas\n  const agregarTarea = useCallback((texto) => {\n    if (texto.trim()) {\n      // Lógica para agregar tarea\n      console.log('Agregando tarea:', texto);\n    }\n  }, []); // Sin dependencias\n  \n  const toggleTarea = useCallback((id) => {\n    // Lógica para toggle tarea\n    console.log('Toggle tarea:', id);\n  }, []);\n  \n  const eliminarTarea = useCallback((id) => {\n    // Lógica para eliminar tarea\n    console.log('Eliminar tarea:', id);\n  }, []);\n  \n  return (\n    <div>\n      <div>\n        <p>Total: {estadisticas.total}</p>\n        <p>Activas: {estadisticas.activas}</p>\n        <p>Completadas: {estadisticas.completadas}</p>\n      </div>\n      \n      <input\n        value={nuevaTarea}\n        onChange={(e) => setNuevaTarea(e.target.value)}\n        placeholder=\"Nueva tarea\"\n      />\n      <button onClick={() => agregarTarea(nuevaTarea)}>\n        Agregar\n      </button>\n      \n      <ul>\n        {tareasFiltradas.map(tarea => (\n          <li key={tarea.id}>\n            <input\n              type=\"checkbox\"\n              checked={tarea.completada}\n              onChange={() => toggleTarea(tarea.id)}\n            />\n            <span>{tarea.texto}</span>\n            <button onClick={() => eliminarTarea(tarea.id)}>\n              Eliminar\n            </button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\n// 4. useMemo para objetos complejos\nfunction UsuarioCard({ usuario, onEdit, onDelete }) {\n  // Memoizar objeto de estilo para evitar recreación\n  const cardStyle = useMemo(() => ({\n    border: '1px solid #ccc',\n    borderRadius: '8px',\n    padding: '16px',\n    margin: '8px',\n    backgroundColor: usuario.activo ? '#f0f8ff' : '#f5f5f5'\n  }), [usuario.activo]);\n  \n  // Memoizar datos procesados\n  const datosProcesados = useMemo(() => ({\n    nombreCompleto: `${usuario.nombre} ${usuario.apellido}`,\n    edad: new Date().getFullYear() - usuario.añoNacimiento,\n    estado: usuario.activo ? 'Activo' : 'Inactivo'\n  }), [usuario.nombre, usuario.apellido, usuario.añoNacimiento, usuario.activo]);\n  \n  return (\n    <div style={cardStyle}>\n      <h3>{datosProcesados.nombreCompleto}</h3>\n      <p>Edad: {datosProcesados.edad}</p>\n      <p>Estado: {datosProcesados.estado}</p>\n      <button onClick={() => onEdit(usuario.id)}>Editar</button>\n      <button onClick={() => onDelete(usuario.id)}>Eliminar</button>\n    </div>\n  );\n}\n```\n\n**Mejores prácticas:**\n- **No sobre-optimizar**: Solo usar cuando hay problemas de rendimiento reales\n- **Dependencias exactas**: Incluir todas las variables que usa la función/valor\n- **Medir antes de optimizar**: Usar React DevTools Profiler\n- **useMemo para valores**: Cálculos costosos, objetos complejos\n- **useCallback para funciones**: Props de componentes hijos, dependencias de useEffect",
        
        "useContext para estado global": "useContext permite consumir un contexto de React sin necesidad de usar el patrón Provider/Consumer. Es útil para compartir datos entre componentes que están muy separados en el árbol de componentes, evitando el 'prop drilling'. useContext acepta un objeto de contexto creado con React.createContext() y retorna el valor actual de ese contexto. Es especialmente útil para temas, autenticación, configuración global, o cualquier dato que necesite ser accesible desde múltiples componentes."
      },
      practical: [
        "Implementar useState: estado simple y complejo con objetos y arrays",
        "Usar useEffect: efectos secundarios, cleanup y dependencias",
        "Crear hooks personalizados: lógica reutilizable y mejores prácticas",
        "Implementar useReducer: estado complejo y lógica de actualización",
        "Optimizar rendimiento: useMemo y useCallback en aplicaciones reales",
        "Proyecto: Aplicación de gestión de tareas con hooks avanzados"
      ]
    },
    activities: [
      {
        title: "useState y useEffect avanzados",
        duration: "60 min",
        description: "Implementar estado complejo con objetos y arrays, efectos secundarios con cleanup"
      },
      {
        title: "useReducer y estado complejo",
        duration: "45 min",
        description: "Manejar estado complejo con useReducer, formularios y listas"
      },
      {
        title: "Hooks personalizados",
        duration: "45 min",
        description: "Crear hooks reutilizables para lógica común y APIs"
      },
      {
        title: "Optimización de rendimiento",
        duration: "30 min",
        description: "Implementar useMemo y useCallback para optimizar aplicaciones"
      }
    ],
    homework: [
      "Crear aplicación con useReducer para manejo de estado complejo",
      "Implementar hooks personalizados: useForm, useApi, useLocalStorage",
      "Optimizar aplicación con useMemo y useCallback",
      "Crear sistema de tareas con filtros, búsqueda y estadísticas",
      "Implementar formularios complejos con validación y estados de carga"
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
      "Dominar React Router: configuración, componentes y hooks esenciales",
      "Implementar navegación declarativa y programática con ejemplos prácticos",
      "Crear rutas anidadas, layouts y sistemas de navegación complejos",
      "Implementar rutas protegidas con autenticación y autorización",
      "Manejar parámetros de URL, query strings y navegación avanzada",
      "Proyecto: Aplicación completa con sistema de routing profesional"
    ],
    content: {
      theoretical: [
        "Routing en SPA: Conceptos fundamentales y diferencias con aplicaciones tradicionales",
        "React Router v6: Instalación, configuración y componentes principales",
        "Navegación declarativa: Link, NavLink y componentes de navegación",
        "Navegación programática: useNavigate, useLocation y hooks de routing",
        "Rutas dinámicas: Parámetros, query strings y navegación avanzada",
        "Rutas anidadas y layouts: Estructura jerárquica y componentes compartidos",
        "Rutas protegidas: Autenticación, autorización y redirecciones",
        "Optimización: Lazy loading, code splitting y rendimiento de routing"
      ],
      theoreticalDetails: {
        "Routing en SPA: Conceptos fundamentales y diferencias con aplicaciones tradicionales": "El routing en Single Page Applications (SPA) permite navegar entre diferentes vistas sin recargar la página completa, proporcionando una experiencia de usuario fluida y rápida.\n\n**Conceptos fundamentales:**\n- **SPA vs MPA**: Una sola página HTML vs múltiples páginas del servidor\n- **Client-side routing**: Navegación manejada por JavaScript en el navegador\n- **History API**: Manipulación del historial del navegador sin recargas\n- **Estado de la aplicación**: Mantenimiento del estado entre navegaciones\n\n**Ventajas de SPA:**\n- **Rendimiento**: No recarga recursos estáticos (CSS, JS)\n- **Experiencia fluida**: Transiciones suaves entre vistas\n- **Estado persistente**: Mantiene datos en memoria\n- **Offline capability**: Funciona sin conexión (con service workers)\n\n**Desafíos de SPA:**\n- **SEO**: Contenido no indexable inicialmente\n- **Carga inicial**: Mayor tiempo de carga inicial\n- **Complejidad**: Manejo de estado y routing\n- **Navegación**: Botones atrás/adelante del navegador\n\n**Ejemplo de routing básico:**\n```javascript\n// Aplicación tradicional (MPA)\n// Página 1: /home.html\n// Página 2: /about.html\n// Página 3: /contact.html\n// Cada navegación = nueva solicitud al servidor\n\n// Aplicación SPA\n// Una página: /index.html\n// Navegación: /home, /about, /contact\n// Cambio de contenido sin recargar la página\n\n// Ejemplo de implementación básica\nfunction App() {\n  const [currentPage, setCurrentPage] = useState('home');\n  \n  const renderPage = () => {\n    switch(currentPage) {\n      case 'home': return <Home />;\n      case 'about': return <About />;\n      case 'contact': return <Contact />;\n      default: return <NotFound />;\n    }\n  };\n  \n  return (\n    <div>\n      <nav>\n        <button onClick={() => setCurrentPage('home')}>Home</button>\n        <button onClick={() => setCurrentPage('about')}>About</button>\n        <button onClick={() => setCurrentPage('contact')}>Contact</button>\n      </nav>\n      <main>{renderPage()}</main>\n    </div>\n  );\n}\n```",
        
        "React Router v6: Instalación, configuración y componentes principales": "React Router es la librería estándar para routing en aplicaciones React, proporcionando una solución completa para navegación client-side.\n\n**Instalación:**\n```bash\n# Instalar React Router v6\nnpm install react-router-dom\n\n# O con yarn\n yarn add react-router-dom\n```\n\n**Configuración básica:**\n```javascript\n// main.jsx o index.js\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { BrowserRouter } from 'react-router-dom';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\n\nroot.render(\n  <React.StrictMode>\n    <BrowserRouter>\n      <App />\n    </BrowserRouter>\n  </React.StrictMode>\n);\n```\n\n**Componentes principales:**\n\n**1. BrowserRouter:**\n- **Propósito**: Proporciona contexto de routing a toda la aplicación\n- **Características**: Usa HTML5 History API, URLs limpias sin hash\n- **Uso**: Envolver la aplicación completa\n\n**2. Routes:**\n- **Propósito**: Contenedor que agrupa múltiples Route\n- **Características**: Determina qué ruta renderizar basándose en la URL\n- **Uso**: Reemplaza Switch de versiones anteriores\n\n**3. Route:**\n- **Propósito**: Define una ruta específica\n- **Propiedades**: `path` (URL), `element` (componente a renderizar)\n- **Características**: Soporta rutas dinámicas y comodín\n\n**Ejemplo completo:**\n```javascript\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport About from './pages/About';\nimport Contact from './pages/Contact';\nimport NotFound from './pages/NotFound';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n        <Route path=\"/contact\" element={<Contact />} />\n        <Route path=\"*\" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n```\n\n**Diferencias con React Router v5:**\n- **Routes vs Switch**: Routes es más inteligente en matching\n- **element vs component**: Usar JSX directamente\n- **useNavigate vs useHistory**: API simplificada\n- **Rutas anidadas**: Estructura más clara y flexible",
        
        "Componentes: BrowserRouter, Routes, Route": "BrowserRouter es el componente principal que proporciona el contexto de routing a toda la aplicación. Routes actúa como un contenedor que agrupa múltiples Route y determina cuál renderizar basándose en la URL actual. Route define una ruta específica con propiedades como 'path' (la URL) y 'element' (el componente a renderizar). También soporta rutas dinámicas con parámetros usando ':param' y rutas comodín con '*'. Los componentes pueden ser elementos JSX o referencias a componentes.\n\n**Ejemplo básico de configuración:**\n```jsx\n// App.jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport About from './pages/About';\nimport Contact from './pages/Contact';\nimport UserProfile from './pages/UserProfile';\nimport NotFound from './pages/NotFound';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <div className=\"app\">\n        <Routes>\n          {/* Ruta exacta */}\n          <Route path=\"/\" element={<Home />} />\n          \n          {/* Rutas estáticas */}\n          <Route path=\"/about\" element={<About />} />\n          <Route path=\"/contact\" element={<Contact />} />\n          \n          {/* Ruta dinámica con parámetro */}\n          <Route path=\"/user/:id\" element={<UserProfile />} />\n          \n          {/* Ruta comodín para 404 */}\n          <Route path=\"*\" element={<NotFound />} />\n        </Routes>\n      </div>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n```\n\n**Ejemplo de rutas dinámicas:**\n```jsx\n// UserProfile.jsx\nimport { useParams } from 'react-router-dom';\n\nfunction UserProfile() {\n  const { id } = useParams();\n  \n  return (\n    <div>\n      <h1>Perfil del Usuario</h1>\n      <p>ID del usuario: {id}</p>\n    </div>\n  );\n}\n\nexport default UserProfile;\n```\n\n**Ejemplo con múltiples parámetros:**\n```jsx\n// Rutas con múltiples parámetros\n<Route path=\"/user/:userId/post/:postId\" element={<UserPost />} />\n\n// En el componente\nfunction UserPost() {\n  const { userId, postId } = useParams();\n  \n  return (\n    <div>\n      <h1>Post del Usuario</h1>\n      <p>Usuario: {userId}</p>\n      <p>Post: {postId}</p>\n    </div>\n  );\n}\n```\n\n**Ejemplo de rutas opcionales:**\n```jsx\n// Ruta con parámetro opcional\n<Route path=\"/blog/:slug?\" element={<BlogPost />} />\n\n// En el componente\nfunction BlogPost() {\n  const { slug } = useParams();\n  \n  if (slug) {\n    return <div>Mostrando post: {slug}</div>;\n  }\n  \n  return <div>Lista de todos los posts</div>;\n}\n```",
        
        "Navegación declarativa: Link, NavLink y componentes de navegación": "React Router proporciona componentes para navegación declarativa que permiten crear enlaces sin recargar la página. Link es el componente básico para navegación, similar a un enlace HTML pero con routing. NavLink extiende Link con funcionalidades adicionales como estilos activos cuando la ruta coincide. Los componentes Link y NavLink permiten navegación declarativa con props como 'to' para la ruta destino y 'replace' para reemplazar el historial. NavLink incluye props adicionales como 'className', 'activeClassName', 'style' y 'activeStyle' para personalizar la apariencia cuando la ruta está activa.\n\n**Ejemplo básico de Link:**\n```jsx\n// Navigation.jsx\nimport { Link } from 'react-router-dom';\n\nfunction Navigation() {\n  return (\n    <nav>\n      <ul>\n        <li>\n          <Link to=\"/\">Inicio</Link>\n        </li>\n        <li>\n          <Link to=\"/about\">Acerca de</Link>\n        </li>\n        <li>\n          <Link to=\"/contact\">Contacto</Link>\n        </li>\n        <li>\n          <Link to=\"/user/123\">Mi Perfil</Link>\n        </li>\n      </ul>\n    </nav>\n  );\n}\n\nexport default Navigation;\n```\n\n**Ejemplo con NavLink y estilos activos:**\n```jsx\n// NavigationWithStyles.jsx\nimport { NavLink } from 'react-router-dom';\nimport './Navigation.css';\n\nfunction NavigationWithStyles() {\n  return (\n    <nav className=\"main-nav\">\n      <ul>\n        <li>\n          <NavLink \n            to=\"/\" \n            className={({ isActive }) => \n              isActive ? 'nav-link active' : 'nav-link'\n            }\n          >\n            Inicio\n          </NavLink>\n        </li>\n        <li>\n          <NavLink \n            to=\"/about\"\n            className={({ isActive }) => \n              isActive ? 'nav-link active' : 'nav-link'\n            }\n          >\n            Acerca de\n          </NavLink>\n        </li>\n        <li>\n          <NavLink \n            to=\"/contact\"\n            className={({ isActive }) => \n              isActive ? 'nav-link active' : 'nav-link'\n            }\n          >\n            Contacto\n          </NavLink>\n        </li>\n      </ul>\n    </nav>\n  );\n}\n\nexport default NavigationWithStyles;\n```\n\n**CSS para estilos activos:**\n```css\n/* Navigation.css */\n.nav-link {\n  padding: 8px 16px;\n  text-decoration: none;\n  color: #333;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n\n.nav-link:hover {\n  background-color: #f0f0f0;\n  color: #007bff;\n}\n\n.nav-link.active {\n  background-color: #007bff;\n  color: white;\n  font-weight: bold;\n}\n```\n\n**Ejemplo con NavLink y estilos inline:**\n```jsx\n// NavigationInline.jsx\nimport { NavLink } from 'react-router-dom';\n\nfunction NavigationInline() {\n  return (\n    <nav>\n      <NavLink \n        to=\"/\"\n        style={({ isActive }) => ({\n          color: isActive ? 'red' : 'blue',\n          fontWeight: isActive ? 'bold' : 'normal',\n          textDecoration: 'none',\n          margin: '0 10px'\n        })}\n      >\n        Inicio\n      </NavLink>\n      \n      <NavLink \n        to=\"/about\"\n        style={({ isActive }) => ({\n          color: isActive ? 'red' : 'blue',\n          fontWeight: isActive ? 'bold' : 'normal',\n          textDecoration: 'none',\n          margin: '0 10px'\n        })}\n      >\n        Acerca de\n      </NavLink>\n    </nav>\n  );\n}\n\nexport default NavigationInline;\n```\n\n**Ejemplo con Link y replace:**\n```jsx\n// NavigationReplace.jsx\nimport { Link } from 'react-router-dom';\n\nfunction NavigationReplace() {\n  return (\n    <nav>\n      <Link to=\"/\" replace>\n        Inicio (reemplaza historial)\n      </Link>\n      \n      <Link to=\"/about\">\n        Acerca de (agrega al historial)\n      </Link>\n    </nav>\n  );\n}\n\nexport default NavigationReplace;\n```\n\n**Ejemplo de navegación con parámetros:**\n```jsx\n// UserNavigation.jsx\nimport { Link } from 'react-router-dom';\n\nfunction UserNavigation({ userId }) {\n  return (\n    <nav>\n      <Link to={`/user/${userId}`}>\n        Mi Perfil\n      </Link>\n      \n      <Link to={`/user/${userId}/posts`}>\n        Mis Posts\n      </Link>\n      \n      <Link to={`/user/${userId}/settings`}>\n        Configuración\n      </Link>\n    </nav>\n  );\n}\n\nexport default UserNavigation;\n```",
        
        "Rutas anidadas y layouts": "Las rutas anidadas permiten crear jerarquías de navegación donde componentes padre contienen componentes hijo. Esto es útil para layouts compartidos, como un header y sidebar que permanecen mientras cambia el contenido principal. Se implementan usando Route anidados dentro de otros Route, o usando Outlet para renderizar componentes hijo. Los layouts pueden ser componentes que envuelven el contenido y proporcionan estructura común, navegación, o funcionalidades compartidas como autenticación o temas.\n\n**Ejemplo básico de layout con Outlet:**\n```jsx\n// Layout.jsx\nimport { Outlet } from 'react-router-dom';\nimport Header from './Header';\nimport Sidebar from './Sidebar';\nimport Footer from './Footer';\n\nfunction Layout() {\n  return (\n    <div className=\"app-layout\">\n      <Header />\n      <div className=\"main-content\">\n        <Sidebar />\n        <main className=\"content\">\n          <Outlet />\n        </main>\n      </div>\n      <Footer />\n    </div>\n  );\n}\n\nexport default Layout;\n```\n\n**Configuración de rutas anidadas:**\n```jsx\n// App.jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Layout from './Layout';\nimport Home from './pages/Home';\nimport About from './pages/About';\nimport Contact from './pages/Contact';\nimport Dashboard from './pages/Dashboard';\nimport Profile from './pages/Profile';\nimport Settings from './pages/Settings';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        {/* Ruta con layout */}\n        <Route path=\"/\" element={<Layout />}>\n          <Route index element={<Home />} />\n          <Route path=\"about\" element={<About />} />\n          <Route path=\"contact\" element={<Contact />} />\n        </Route>\n        \n        {/* Ruta con layout de dashboard */}\n        <Route path=\"/dashboard\" element={<DashboardLayout />}>\n          <Route index element={<Dashboard />} />\n          <Route path=\"profile\" element={<Profile />} />\n          <Route path=\"settings\" element={<Settings />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n```\n\n**Ejemplo de DashboardLayout:**\n```jsx\n// DashboardLayout.jsx\nimport { Outlet, Link } from 'react-router-dom';\nimport './DashboardLayout.css';\n\nfunction DashboardLayout() {\n  return (\n    <div className=\"dashboard-layout\">\n      <aside className=\"sidebar\">\n        <nav>\n          <Link to=\"/dashboard\">Dashboard</Link>\n          <Link to=\"/dashboard/profile\">Perfil</Link>\n          <Link to=\"/dashboard/settings\">Configuración</Link>\n        </nav>\n      </aside>\n      \n      <main className=\"dashboard-content\">\n        <Outlet />\n      </main>\n    </div>\n  );\n}\n\nexport default DashboardLayout;\n```\n\n**CSS para el layout:**\n```css\n/* DashboardLayout.css */\n.dashboard-layout {\n  display: flex;\n  min-height: 100vh;\n}\n\n.sidebar {\n  width: 250px;\n  background-color: #2c3e50;\n  color: white;\n  padding: 20px;\n}\n\n.sidebar nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar a {\n  color: white;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n}\n\n.sidebar a:hover {\n  background-color: #34495e;\n}\n\n.dashboard-content {\n  flex: 1;\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n```\n\n**Ejemplo de rutas anidadas con parámetros:**\n```jsx\n// Rutas anidadas con parámetros\n<Route path=\"/user/:userId\" element={<UserLayout />}>\n  <Route index element={<UserProfile />} />\n  <Route path=\"posts\" element={<UserPosts />} />\n  <Route path=\"settings\" element={<UserSettings />} />\n  <Route path=\"posts/:postId\" element={<PostDetail />} />\n</Route>\n```\n\n**UserLayout con breadcrumbs:**\n```jsx\n// UserLayout.jsx\nimport { Outlet, Link, useParams, useLocation } from 'react-router-dom';\n\nfunction UserLayout() {\n  const { userId } = useParams();\n  const location = useLocation();\n  \n  const getBreadcrumbs = () => {\n    const pathnames = location.pathname.split('/').filter(x => x);\n    return pathnames.map((name, index) => {\n      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;\n      return {\n        name: name.charAt(0).toUpperCase() + name.slice(1),\n        route: routeTo\n      };\n    });\n  };\n  \n  return (\n    <div className=\"user-layout\">\n      <nav className=\"breadcrumbs\">\n        <Link to=\"/\">Inicio</Link>\n        {getBreadcrumbs().map((crumb, index) => (\n          <span key={index}>\n            {' > '}\n            <Link to={crumb.route}>{crumb.name}</Link>\n          </span>\n        ))}\n      </nav>\n      \n      <div className=\"user-content\">\n        <Outlet />\n      </div>\n    </div>\n  );\n}\n\nexport default UserLayout;\n```\n\n**Ejemplo de layout con autenticación:**\n```jsx\n// ProtectedLayout.jsx\nimport { Outlet, Navigate } from 'react-router-dom';\nimport { useAuth } from './AuthContext';\n\nfunction ProtectedLayout() {\n  const { isAuthenticated, user } = useAuth();\n  \n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" replace />;\n  }\n  \n  return (\n    <div className=\"protected-layout\">\n      <header>\n        <h1>Bienvenido, {user.name}</h1>\n        <button onClick={logout}>Cerrar Sesión</button>\n      </header>\n      \n      <main>\n        <Outlet />\n      </main>\n    </div>\n  );\n}\n\nexport default ProtectedLayout;\n```",
        
        "Navegación programática: useNavigate, useLocation y hooks de routing": "React Router v6 proporciona hooks para navegación programática que permiten cambiar de ruta desde JavaScript. useNavigate reemplaza useHistory de versiones anteriores y proporciona una API más simple. useLocation permite acceder a la información de la ubicación actual, incluyendo pathname, search, hash y state. Estos hooks son esenciales para navegación basada en eventos, formularios y lógica de aplicación.\n\n**Ejemplo básico de useNavigate:**\n```jsx\n// NavigationExample.jsx\nimport { useNavigate } from 'react-router-dom';\n\nfunction NavigationExample() {\n  const navigate = useNavigate();\n  \n  const handleGoHome = () => {\n    navigate('/');\n  };\n  \n  const handleGoBack = () => {\n    navigate(-1); // Ir a la página anterior\n  };\n  \n  const handleGoForward = () => {\n    navigate(1); // Ir a la página siguiente\n  };\n  \n  const handleGoToUser = (userId) => {\n    navigate(`/user/${userId}`);\n  };\n  \n  return (\n    <div>\n      <button onClick={handleGoHome}>Ir a Inicio</button>\n      <button onClick={handleGoBack}>Atrás</button>\n      <button onClick={handleGoForward}>Adelante</button>\n      <button onClick={() => handleGoToUser(123)}>Ver Usuario 123</button>\n    </div>\n  );\n}\n\nexport default NavigationExample;\n```\n\n**Ejemplo con useLocation:**\n```jsx\n// LocationExample.jsx\nimport { useLocation } from 'react-router-dom';\n\nfunction LocationExample() {\n  const location = useLocation();\n  \n  return (\n    <div>\n      <h2>Información de Ubicación</h2>\n      <p><strong>Pathname:</strong> {location.pathname}</p>\n      <p><strong>Search:</strong> {location.search}</p>\n      <p><strong>Hash:</strong> {location.hash}</p>\n      <p><strong>State:</strong> {JSON.stringify(location.state)}</p>\n    </div>\n  );\n}\n\nexport default LocationExample;\n```\n\n**Ejemplo de navegación con estado:**\n```jsx\n// NavigationWithState.jsx\nimport { useNavigate } from 'react-router-dom';\n\nfunction NavigationWithState() {\n  const navigate = useNavigate();\n  \n  const handleNavigateWithState = () => {\n    navigate('/profile', {\n      state: {\n        from: 'dashboard',\n        message: 'Navegación desde dashboard'\n      }\n    });\n  };\n  \n  const handleReplace = () => {\n    navigate('/login', { replace: true });\n  };\n  \n  return (\n    <div>\n      <button onClick={handleNavigateWithState}>\n        Ir a Perfil con Estado\n      </button>\n      <button onClick={handleReplace}>\n        Reemplazar con Login\n      </button>\n    </div>\n  );\n}\n\nexport default NavigationWithState;\n```\n\n**Ejemplo de navegación en formulario:**\n```jsx\n// FormWithNavigation.jsx\nimport { useState } from 'react';\nimport { useNavigate } from 'react-router-dom';\n\nfunction FormWithNavigation() {\n  const [formData, setFormData] = useState({ name: '', email: '' });\n  const navigate = useNavigate();\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    \n    // Procesar formulario\n    console.log('Form data:', formData);\n    \n    // Navegar a página de confirmación\n    navigate('/confirmation', {\n      state: { formData }\n    });\n  };\n  \n  const handleCancel = () => {\n    navigate('/dashboard');\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label>Nombre:</label>\n        <input\n          type=\"text\"\n          value={formData.name}\n          onChange={(e) => setFormData({...formData, name: e.target.value})}\n        />\n      </div>\n      \n      <div>\n        <label>Email:</label>\n        <input\n          type=\"email\"\n          value={formData.email}\n          onChange={(e) => setFormData({...formData, email: e.target.value})}\n        />\n      </div>\n      \n      <button type=\"submit\">Enviar</button>\n      <button type=\"button\" onClick={handleCancel}>Cancelar</button>\n    </form>\n  );\n}\n\nexport default FormWithNavigation;\n```\n\n**Ejemplo de navegación condicional:**\n```jsx\n// ConditionalNavigation.jsx\nimport { useNavigate, useLocation } from 'react-router-dom';\nimport { useEffect } from 'react';\n\nfunction ConditionalNavigation() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  \n  useEffect(() => {\n    // Redirigir si no hay permisos\n    if (location.pathname === '/admin' && !hasAdminAccess()) {\n      navigate('/unauthorized');\n    }\n  }, [location, navigate]);\n  \n  const hasAdminAccess = () => {\n    // Lógica para verificar permisos\n    return localStorage.getItem('userRole') === 'admin';\n  };\n  \n  const handleLogout = () => {\n    localStorage.removeItem('token');\n    navigate('/login', { replace: true });\n  };\n  \n  return (\n    <div>\n      <h1>Panel de Administración</h1>\n      <button onClick={handleLogout}>Cerrar Sesión</button>\n    </div>\n  );\n}\n\nexport default ConditionalNavigation;\n```\n\n**Ejemplo de navegación con query parameters:**\n```jsx\n// QueryNavigation.jsx\nimport { useNavigate, useLocation } from 'react-router-dom';\nimport { useSearchParams } from 'react-router-dom';\n\nfunction QueryNavigation() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const [searchParams, setSearchParams] = useSearchParams();\n  \n  const handleSearch = (query) => {\n    // Navegar con query parameters\n    navigate(`/search?q=${query}&page=1`);\n  };\n  \n  const handleFilter = (filter) => {\n    // Actualizar query parameters sin cambiar la ruta\n    setSearchParams({ filter, page: '1' });\n  };\n  \n  return (\n    <div>\n      <input\n        type=\"text\"\n        placeholder=\"Buscar...\"\n        onKeyPress={(e) => {\n          if (e.key === 'Enter') {\n            handleSearch(e.target.value);\n          }\n        }}\n      />\n      \n      <select onChange={(e) => handleFilter(e.target.value)}>\n        <option value=\"all\">Todos</option>\n        <option value=\"active\">Activos</option>\n        <option value=\"inactive\">Inactivos</option>\n      </select>\n    </div>\n  );\n}\n\nexport default QueryNavigation;\n```",
        
        "Rutas dinámicas: Parámetros, query strings y navegación avanzada": "Las rutas dinámicas permiten crear URLs con parámetros variables que pueden ser accedidos en los componentes. Los parámetros se definen con ':' en la ruta y se acceden con useParams. Los query strings se manejan con useSearchParams y permiten pasar datos adicionales en la URL. Esta funcionalidad es esencial para crear aplicaciones con navegación rica y URLs semánticas.\n\n**Ejemplo básico de parámetros de ruta:**\n```jsx\n// App.jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport UserProfile from './UserProfile';\nimport PostDetail from './PostDetail';\nimport ProductPage from './ProductPage';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        {/* Parámetro simple */}\n        <Route path=\"/user/:id\" element={<UserProfile />} />\n        \n        {/* Múltiples parámetros */}\n        <Route path=\"/user/:userId/post/:postId\" element={<PostDetail />} />\n        \n        {/* Parámetro opcional */}\n        <Route path=\"/product/:id?\" element={<ProductPage />} />\n        \n        {/* Parámetros con restricciones */}\n        <Route path=\"/user/:id(\\d+)\" element={<UserProfile />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n```\n\n**Ejemplo de uso de useParams:**\n```jsx\n// UserProfile.jsx\nimport { useParams, useNavigate } from 'react-router-dom';\nimport { useEffect, useState } from 'react';\n\nfunction UserProfile() {\n  const { id } = useParams();\n  const navigate = useNavigate();\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    const fetchUser = async () => {\n      try {\n        const response = await fetch(`/api/users/${id}`);\n        if (response.ok) {\n          const userData = await response.json();\n          setUser(userData);\n        } else {\n          navigate('/not-found');\n        }\n      } catch (error) {\n        console.error('Error fetching user:', error);\n        navigate('/error');\n      } finally {\n        setLoading(false);\n      }\n    };\n    \n    fetchUser();\n  }, [id, navigate]);\n  \n  if (loading) return <div>Cargando...</div>;\n  if (!user) return <div>Usuario no encontrado</div>;\n  \n  return (\n    <div>\n      <h1>Perfil de {user.name}</h1>\n      <p>ID: {id}</p>\n      <p>Email: {user.email}</p>\n      <button onClick={() => navigate(`/user/${id}/edit`)}>\n        Editar Perfil\n      </button>\n    </div>\n  );\n}\n\nexport default UserProfile;\n```\n\n**Ejemplo con query strings:**\n```jsx\n// SearchResults.jsx\nimport { useSearchParams, useNavigate } from 'react-router-dom';\nimport { useEffect, useState } from 'react';\n\nfunction SearchResults() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  const navigate = useNavigate();\n  const [results, setResults] = useState([]);\n  \n  const query = searchParams.get('q');\n  const page = searchParams.get('page') || '1';\n  const category = searchParams.get('category');\n  \n  useEffect(() => {\n    const fetchResults = async () => {\n      const params = new URLSearchParams({\n        q: query,\n        page: page,\n        ...(category && { category })\n      });\n      \n      const response = await fetch(`/api/search?${params}`);\n      const data = await response.json();\n      setResults(data.results);\n    };\n    \n    if (query) {\n      fetchResults();\n    }\n  }, [query, page, category]);\n  \n  const updateFilters = (newFilters) => {\n    const newParams = new URLSearchParams(searchParams);\n    \n    Object.entries(newFilters).forEach(([key, value]) => {\n      if (value) {\n        newParams.set(key, value);\n      } else {\n        newParams.delete(key);\n      }\n    });\n    \n    setSearchParams(newParams);\n  };\n  \n  const goToPage = (newPage) => {\n    navigate(`/search?q=${query}&page=${newPage}`);\n  };\n  \n  return (\n    <div>\n      <h1>Resultados de búsqueda para: {query}</h1>\n      \n      <div className=\"filters\">\n        <select \n          value={category || ''} \n          onChange={(e) => updateFilters({ category: e.target.value })}\n        >\n          <option value=\"\">Todas las categorías</option>\n          <option value=\"tech\">Tecnología</option>\n          <option value=\"business\">Negocios</option>\n        </select>\n      </div>\n      \n      <div className=\"results\">\n        {results.map(result => (\n          <div key={result.id} className=\"result-item\">\n            <h3>{result.title}</h3>\n            <p>{result.description}</p>\n          </div>\n        ))}\n      </div>\n      \n      <div className=\"pagination\">\n        <button onClick={() => goToPage(parseInt(page) - 1)} disabled={page === '1'}>\n          Anterior\n        </button>\n        <span>Página {page}</span>\n        <button onClick={() => goToPage(parseInt(page) + 1)}>\n          Siguiente\n        </button>\n      </div>\n    </div>\n  );\n}\n\nexport default SearchResults;\n```\n\n**Ejemplo de navegación con hash:**\n```jsx\n// HashNavigation.jsx\nimport { useLocation, useNavigate } from 'react-router-dom';\nimport { useEffect } from 'react';\n\nfunction HashNavigation() {\n  const location = useLocation();\n  const navigate = useNavigate();\n  \n  useEffect(() => {\n    // Scroll to element when hash changes\n    if (location.hash) {\n      const element = document.querySelector(location.hash);\n      if (element) {\n        element.scrollIntoView({ behavior: 'smooth' });\n      }\n    }\n  }, [location.hash]);\n  \n  const scrollToSection = (sectionId) => {\n    navigate(`#${sectionId}`);\n  };\n  \n  return (\n    <div>\n      <nav>\n        <button onClick={() => scrollToSection('intro')}>Introducción</button>\n        <button onClick={() => scrollToSection('features')}>Características</button>\n        <button onClick={() => scrollToSection('contact')}>Contacto</button>\n      </nav>\n      \n      <section id=\"intro\">\n        <h2>Introducción</h2>\n        <p>Contenido de introducción...</p>\n      </section>\n      \n      <section id=\"features\">\n        <h2>Características</h2>\n        <p>Contenido de características...</p>\n      </section>\n      \n      <section id=\"contact\">\n        <h2>Contacto</h2>\n        <p>Información de contacto...</p>\n      </section>\n    </div>\n  );\n}\n\nexport default HashNavigation;\n```\n\n**Ejemplo de navegación programática avanzada:**\n```jsx\n// AdvancedNavigation.jsx\nimport { useNavigate, useLocation } from 'react-router-dom';\nimport { useEffect, useRef } from 'react';\n\nfunction AdvancedNavigation() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const previousLocation = useRef();\n  \n  useEffect(() => {\n    // Guardar ubicación anterior\n    previousLocation.current = location;\n  }, [location]);\n  \n  const handleGoBack = () => {\n    if (previousLocation.current) {\n      navigate(previousLocation.current.pathname);\n    } else {\n      navigate(-1);\n    }\n  };\n  \n  const handleRedirect = (path) => {\n    // Redirigir con reemplazo\n    navigate(path, { replace: true });\n  };\n  \n  const handleNavigateWithState = (path, state) => {\n    navigate(path, { state });\n  };\n  \n  return (\n    <div>\n      <button onClick={handleGoBack}>Volver</button>\n      <button onClick={() => handleRedirect('/home')}>Ir a Home</button>\n      <button onClick={() => handleNavigateWithState('/profile', { from: 'dashboard' })}>\n        Ir a Perfil con Estado\n      </button>\n    </div>\n  );\n}\n\nexport default AdvancedNavigation;\n```",
        
        "Rutas protegidas y autenticación": "Las rutas protegidas requieren autenticación antes de permitir el acceso. Se implementan creando componentes wrapper que verifican el estado de autenticación y redirigen a login si es necesario. Esto puede incluir verificar tokens JWT, sesiones, o cualquier otro mecanismo de autenticación. Las rutas protegidas pueden tener diferentes niveles de acceso (admin, usuario, invitado) y pueden redirigir a diferentes páginas según el rol del usuario. También es importante manejar la expiración de sesiones y la renovación automática de tokens.\n\n**Ejemplo básico de componente ProtectedRoute:**\n```jsx\n// ProtectedRoute.jsx\nimport { Navigate } from 'react-router-dom';\nimport { useAuth } from './AuthContext';\n\nfunction ProtectedRoute({ children }) {\n  const { isAuthenticated, loading } = useAuth();\n  \n  if (loading) {\n    return <div>Cargando...</div>;\n  }\n  \n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" replace />;\n  }\n  \n  return children;\n}\n\nexport default ProtectedRoute;\n```\n\n**Uso de ProtectedRoute:**\n```jsx\n// App.jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport ProtectedRoute from './ProtectedRoute';\nimport Login from './pages/Login';\nimport Dashboard from './pages/Dashboard';\nimport Profile from './pages/Profile';\nimport AdminPanel from './pages/AdminPanel';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/login\" element={<Login />} />\n        \n        <Route path=\"/dashboard\" element={\n          <ProtectedRoute>\n            <Dashboard />\n          </ProtectedRoute>\n        } />\n        \n        <Route path=\"/profile\" element={\n          <ProtectedRoute>\n            <Profile />\n          </ProtectedRoute>\n        } />\n        \n        <Route path=\"/admin\" element={\n          <ProtectedRoute>\n            <AdminPanel />\n          </ProtectedRoute>\n        } />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n```\n\n**Ejemplo de AuthContext:**\n```jsx\n// AuthContext.jsx\nimport { createContext, useContext, useState, useEffect } from 'react';\n\nconst AuthContext = createContext();\n\nexport function useAuth() {\n  return useContext(AuthContext);\n}\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    // Verificar token almacenado\n    const token = localStorage.getItem('token');\n    if (token) {\n      // Validar token con el servidor\n      validateToken(token);\n    } else {\n      setLoading(false);\n    }\n  }, []);\n  \n  const validateToken = async (token) => {\n    try {\n      const response = await fetch('/api/validate-token', {\n        headers: {\n          'Authorization': `Bearer ${token}`\n        }\n      });\n      \n      if (response.ok) {\n        const userData = await response.json();\n        setUser(userData);\n      } else {\n        localStorage.removeItem('token');\n      }\n    } catch (error) {\n      console.error('Error validating token:', error);\n      localStorage.removeItem('token');\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  const login = async (email, password) => {\n    try {\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ email, password })\n      });\n      \n      if (response.ok) {\n        const { token, user } = await response.json();\n        localStorage.setItem('token', token);\n        setUser(user);\n        return { success: true };\n      } else {\n        return { success: false, error: 'Credenciales inválidas' };\n      }\n    } catch (error) {\n      return { success: false, error: 'Error de conexión' };\n    }\n  };\n  \n  const logout = () => {\n    localStorage.removeItem('token');\n    setUser(null);\n  };\n  \n  const value = {\n    user,\n    isAuthenticated: !!user,\n    loading,\n    login,\n    logout\n  };\n  \n  return (\n    <AuthContext.Provider value={value}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n```\n\n**Ejemplo de rutas con roles:**\n```jsx\n// RoleBasedRoute.jsx\nimport { Navigate } from 'react-router-dom';\nimport { useAuth } from './AuthContext';\n\nfunction RoleBasedRoute({ children, requiredRole }) {\n  const { user, isAuthenticated, loading } = useAuth();\n  \n  if (loading) {\n    return <div>Cargando...</div>;\n  }\n  \n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" replace />;\n  }\n  \n  if (user.role !== requiredRole) {\n    return <Navigate to=\"/unauthorized\" replace />;\n  }\n  \n  return children;\n}\n\nexport default RoleBasedRoute;\n```\n\n**Uso de rutas con roles:**\n```jsx\n// App.jsx con roles\n<Route path=\"/admin\" element={\n  <RoleBasedRoute requiredRole=\"admin\">\n    <AdminPanel />\n  </RoleBasedRoute>\n} />\n\n<Route path=\"/user\" element={\n  <RoleBasedRoute requiredRole=\"user\">\n    <UserDashboard />\n  </RoleBasedRoute>\n} />\n```\n\n**Ejemplo de componente de Login:**\n```jsx\n// Login.jsx\nimport { useState } from 'react';\nimport { useNavigate, useLocation } from 'react-router-dom';\nimport { useAuth } from './AuthContext';\n\nfunction Login() {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [error, setError] = useState('');\n  const { login } = useAuth();\n  const navigate = useNavigate();\n  const location = useLocation();\n  \n  const from = location.state?.from?.pathname || '/dashboard';\n  \n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    setError('');\n    \n    const result = await login(email, password);\n    \n    if (result.success) {\n      navigate(from, { replace: true });\n    } else {\n      setError(result.error);\n    }\n  };\n  \n  return (\n    <div className=\"login-container\">\n      <form onSubmit={handleSubmit}>\n        <h2>Iniciar Sesión</h2>\n        \n        {error && <div className=\"error\">{error}</div>}\n        \n        <div>\n          <label>Email:</label>\n          <input\n            type=\"email\"\n            value={email}\n            onChange={(e) => setEmail(e.target.value)}\n            required\n          />\n        </div>\n        \n        <div>\n          <label>Contraseña:</label>\n          <input\n            type=\"password\"\n            value={password}\n            onChange={(e) => setPassword(e.target.value)}\n            required\n          />\n        </div>\n        \n        <button type=\"submit\">Iniciar Sesión</button>\n      </form>\n    </div>\n  );\n}\n\nexport default Login;\n```\n\n**Ejemplo de middleware de autenticación:**\n```jsx\n// AuthMiddleware.jsx\nimport { useEffect } from 'react';\nimport { useAuth } from './AuthContext';\nimport { useNavigate } from 'react-router-dom';\n\nfunction AuthMiddleware({ children }) {\n  const { isAuthenticated, loading } = useAuth();\n  const navigate = useNavigate();\n  \n  useEffect(() => {\n    if (!loading && !isAuthenticated) {\n      navigate('/login');\n    }\n  }, [isAuthenticated, loading, navigate]);\n  \n  if (loading) {\n    return <div>Cargando...</div>;\n  }\n  \n  if (!isAuthenticated) {\n    return null;\n  }\n  \n  return children;\n}\n\nexport default AuthMiddleware;\n```"
      },
      practical: [
        "Configurar React Router v6: instalación, configuración y estructura básica",
        "Implementar navegación declarativa: Link, NavLink con estilos activos",
        "Crear navegación programática: useNavigate, useLocation y hooks de routing",
        "Implementar rutas dinámicas: parámetros, query strings y navegación avanzada",
        "Crear rutas anidadas y layouts: estructura jerárquica y componentes compartidos",
        "Implementar rutas protegidas: autenticación, autorización y redirecciones",
        "Proyecto: Aplicación completa con sistema de routing profesional"
      ]
    },
    activities: [
      {
        title: "Configuración de React Router v6",
        duration: "45 min",
        description: "Instalar, configurar y crear estructura básica de routing"
      },
      {
        title: "Navegación declarativa y programática",
        duration: "60 min",
        description: "Implementar Link, NavLink, useNavigate y useLocation"
      },
      {
        title: "Rutas dinámicas y parámetros",
        duration: "45 min",
        description: "Crear rutas con parámetros, query strings y navegación avanzada"
      },
      {
        title: "Rutas anidadas y layouts",
        duration: "45 min",
        description: "Implementar estructura jerárquica y componentes compartidos"
      },
      {
        title: "Rutas protegidas y autenticación",
        duration: "45 min",
        description: "Crear sistema de autenticación y autorización con redirecciones"
      }
    ],
    homework: [
      "Crear aplicación completa con React Router v6: múltiples rutas, navegación y layouts",
      "Implementar sistema de autenticación con rutas protegidas y redirecciones",
      "Crear navegación breadcrumb dinámica con useLocation",
      "Implementar rutas dinámicas con parámetros y query strings",
      "Agregar navegación programática con useNavigate en formularios y acciones",
      "Crear sistema de roles y permisos con rutas protegidas por nivel de acceso"
    ],
    materials: [
      "Node.js instalado",
      "Editor de código",
      "Navegador web"
    ],
    exercises: [
      {
        title: "Aplicación Completa con React Router y Permisos",
        description: "Crear una aplicación completa con React Router v6, navegación, rutas protegidas y sistema de permisos por roles.",
        code: `// EJERCICIO: Aplicación de Gestión de Usuarios con React Router
// Objetivo: Implementar navegación, rutas protegidas y permisos por roles

// 1. Estructura de archivos a crear:
// src/
//   components/
//     Layout.jsx
//     Navigation.jsx
//     ProtectedRoute.jsx
//     RoleBasedRoute.jsx
//   pages/
//     Home.jsx
//     Login.jsx
//     Dashboard.jsx
//     Users.jsx
//     Profile.jsx
//     Admin.jsx
//     NotFound.jsx
//   context/
//     AuthContext.jsx
//   App.jsx
//   index.js

// 2. Instalación de dependencias:
// npm install react-router-dom

// 3. Tu código aquí - Implementa la aplicación completa`,
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
      "Dominar Context API: createContext, useContext y patrones de uso",
      "Implementar estado global: Provider, Consumer y gestión de estado complejo",
      "Resolver prop drilling: comunicación entre componentes distantes",
      "Optimizar rendimiento: evitar re-renders innecesarios y mejores prácticas",
      "Crear sistemas de autenticación y temas con Context",
      "Proyecto: Aplicación con estado global y Context API avanzado"
    ],
    content: {
      theoretical: [
        "Context API: Conceptos fundamentales y casos de uso",
        "createContext y useContext: Creación y consumo de contexto",
        "Provider y Consumer: Patrones de implementación y mejores prácticas",
        "Estado global vs props drilling: Cuándo usar cada enfoque",
        "Optimización de Context: Evitar re-renders y mejorar rendimiento",
        "Context + useReducer: Manejo de estado complejo",
        "Sistemas de autenticación y temas con Context",
        "Alternativas: Redux, Zustand y cuándo usarlas"
      ],
      theoreticalDetails: {
        "Context API: Conceptos fundamentales y casos de uso": "Context API es una característica de React que permite compartir datos entre componentes sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes.\n\n**Conceptos fundamentales:**\n- **Prop drilling**: Problema de pasar props a través de múltiples niveles\n- **Estado global**: Datos accesibles desde cualquier componente\n- **Context**: Mecanismo para compartir datos sin prop drilling\n- **Provider/Consumer**: Patrón para proporcionar y consumir contexto\n\n**Casos de uso ideales:**\n- **Temas**: Colores, tipografías, estilos globales\n- **Autenticación**: Usuario actual, permisos, tokens\n- **Idioma**: Configuración de idioma y localización\n- **Configuración**: Configuraciones globales de la aplicación\n- **Estado de UI**: Modales, notificaciones, loading states\n\n**Ventajas:**\n- **Elimina prop drilling**: No pasar props innecesarias\n- **Estado global**: Acceso directo desde cualquier componente\n- **Flexibilidad**: Múltiples providers y consumers\n- **Integración nativa**: Parte de React, sin dependencias externas\n\n**Desventajas:**\n- **Re-renders**: Todos los consumers se re-renderizan\n- **Complejidad**: Puede hacer el código más difícil de seguir\n- **Debugging**: Más difícil de debuggear que props locales\n\n**Ejemplo completo: Sistema de E-commerce con Context:**\n```javascript\n// 🛒 EJEMPLO COMPLETO: Sistema de E-commerce\n// Este ejemplo demuestra todos los conceptos de Context API\n// en una aplicación real de e-commerce\n\nimport React, { createContext, useContext, useState, useReducer, useEffect } from 'react';\n\n// ========================================\n// 1. CONTEXTOS MÚLTIPLES (Separación de responsabilidades)\n// ========================================\n\n// Contexto para autenticación\nexport const AuthContext = createContext();\n\n// Contexto para carrito de compras\nexport const CartContext = createContext();\n\n// Contexto para tema y configuración\nexport const ThemeContext = createContext();\n\n// Contexto para notificaciones\nexport const NotificationContext = createContext();\n\n// ========================================\n// 2. REDUCER PARA ESTADO COMPLEJO (Cart)\n// ========================================\n\nconst cartReducer = (state, action) => {\n  switch (action.type) {\n    case 'ADD_ITEM':\n      const existingItem = state.items.find(item => item.id === action.payload.id);\n      \n      if (existingItem) {\n        return {\n          ...state,\n          items: state.items.map(item =>\n            item.id === action.payload.id\n              ? { ...item, quantity: item.quantity + 1 }\n              : item\n          ),\n          total: state.total + action.payload.price,\n          itemCount: state.itemCount + 1\n        };\n      } else {\n        return {\n          ...state,\n          items: [...state.items, { ...action.payload, quantity: 1 }],\n          total: state.total + action.payload.price,\n          itemCount: state.itemCount + 1\n        };\n      }\n      \n    case 'REMOVE_ITEM':\n      const itemToRemove = state.items.find(item => item.id === action.payload);\n      return {\n        ...state,\n        items: state.items.filter(item => item.id !== action.payload),\n        total: state.total - (itemToRemove.price * itemToRemove.quantity),\n        itemCount: state.itemCount - itemToRemove.quantity\n      };\n      \n    case 'UPDATE_QUANTITY':\n      const { id, quantity } = action.payload;\n      const item = state.items.find(item => item.id === id);\n      \n      if (quantity <= 0) {\n        return {\n          ...state,\n          items: state.items.filter(item => item.id !== id),\n          total: state.total - (item.price * item.quantity),\n          itemCount: state.itemCount - item.quantity\n        };\n      }\n      \n      const quantityDiff = quantity - item.quantity;\n      return {\n        ...state,\n        items: state.items.map(item =>\n          item.id === id ? { ...item, quantity } : item\n        ),\n        total: state.total + (item.price * quantityDiff),\n        itemCount: state.itemCount + quantityDiff\n      };\n      \n    case 'CLEAR_CART':\n      return {\n        items: [],\n        total: 0,\n        itemCount: 0\n      };\n      \n    default:\n      return state;\n  }\n};\n\n// ========================================\n// 3. PROVIDERS CON ESTADO COMPLEJO\n// ========================================\n\n// AuthProvider - Manejo de autenticación\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  // Simular carga inicial de usuario\n  useEffect(() => {\n    const savedUser = localStorage.getItem('user');\n    if (savedUser) {\n      setUser(JSON.parse(savedUser));\n    }\n    setLoading(false);\n  }, []);\n  \n  const login = async (credentials) => {\n    setLoading(true);\n    setError(null);\n    \n    try {\n      // Simular llamada a API\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(credentials)\n      });\n      \n      if (!response.ok) {\n        throw new Error('Credenciales inválidas');\n      }\n      \n      const userData = await response.json();\n      setUser(userData);\n      localStorage.setItem('user', JSON.stringify(userData));\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  const logout = () => {\n    setUser(null);\n    localStorage.removeItem('user');\n  };\n  \n  const value = {\n    user,\n    loading,\n    error,\n    login,\n    logout,\n    isAuthenticated: !!user\n  };\n  \n  return (\n    <AuthContext.Provider value={value}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// CartProvider - Manejo de carrito con useReducer\nexport function CartProvider({ children }) {\n  const [state, dispatch] = useReducer(cartReducer, {\n    items: [],\n    total: 0,\n    itemCount: 0\n  });\n  \n  const addItem = (product) => {\n    dispatch({ type: 'ADD_ITEM', payload: product });\n  };\n  \n  const removeItem = (id) => {\n    dispatch({ type: 'REMOVE_ITEM', payload: id });\n  };\n  \n  const updateQuantity = (id, quantity) => {\n    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });\n  };\n  \n  const clearCart = () => {\n    dispatch({ type: 'CLEAR_CART' });\n  };\n  \n  const value = {\n    ...state,\n    addItem,\n    removeItem,\n    updateQuantity,\n    clearCart\n  };\n  \n  return (\n    <CartContext.Provider value={value}>\n      {children}\n    </CartContext.Provider>\n  );\n}\n\n// ThemeProvider - Manejo de tema y configuración\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const [language, setLanguage] = useState('es');\n  const [fontSize, setFontSize] = useState('medium');\n  \n  // Cargar configuración guardada\n  useEffect(() => {\n    const savedTheme = localStorage.getItem('theme');\n    const savedLanguage = localStorage.getItem('language');\n    const savedFontSize = localStorage.getItem('fontSize');\n    \n    if (savedTheme) setTheme(savedTheme);\n    if (savedLanguage) setLanguage(savedLanguage);\n    if (savedFontSize) setFontSize(savedFontSize);\n  }, []);\n  \n  // Guardar configuración\n  useEffect(() => {\n    localStorage.setItem('theme', theme);\n  }, [theme]);\n  \n  useEffect(() => {\n    localStorage.setItem('language', language);\n  }, [language]);\n  \n  useEffect(() => {\n    localStorage.setItem('fontSize', fontSize);\n  }, [fontSize]);\n  \n  const toggleTheme = () => {\n    setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  };\n  \n  const changeLanguage = (lang) => {\n    setLanguage(lang);\n  };\n  \n  const changeFontSize = (size) => {\n    setFontSize(size);\n  };\n  \n  const value = {\n    theme,\n    language,\n    fontSize,\n    toggleTheme,\n    changeLanguage,\n    changeFontSize\n  };\n  \n  return (\n    <ThemeContext.Provider value={value}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// NotificationProvider - Sistema de notificaciones\nexport function NotificationProvider({ children }) {\n  const [notifications, setNotifications] = useState([]);\n  \n  const addNotification = (message, type = 'info', duration = 5000) => {\n    const id = Date.now() + Math.random();\n    const notification = { id, message, type, timestamp: new Date() };\n    \n    setNotifications(prev => [...prev, notification]);\n    \n    // Auto-remove notification\n    setTimeout(() => {\n      removeNotification(id);\n    }, duration);\n  };\n  \n  const removeNotification = (id) => {\n    setNotifications(prev => prev.filter(n => n.id !== id));\n  };\n  \n  const clearAllNotifications = () => {\n    setNotifications([]);\n  };\n  \n  const value = {\n    notifications,\n    addNotification,\n    removeNotification,\n    clearAllNotifications\n  };\n  \n  return (\n    <NotificationContext.Provider value={value}>\n      {children}\n    </NotificationContext.Provider>\n  );\n}\n\n// ========================================\n// 4. HOOKS PERSONALIZADOS\n// ========================================\n\n// Hook para autenticación\nexport function useAuth() {\n  const context = useContext(AuthContext);\n  if (!context) {\n    throw new Error('useAuth debe usarse dentro de AuthProvider');\n  }\n  return context;\n}\n\n// Hook para carrito\nexport function useCart() {\n  const context = useContext(CartContext);\n  if (!context) {\n    throw new Error('useCart debe usarse dentro de CartProvider');\n  }\n  return context;\n}\n\n// Hook para tema\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) {\n    throw new Error('useTheme debe usarse dentro de ThemeProvider');\n  }\n  return context;\n}\n\n// Hook para notificaciones\nexport function useNotifications() {\n  const context = useContext(NotificationContext);\n  if (!context) {\n    throw new Error('useNotifications debe usarse dentro de NotificationProvider');\n  }\n  return context;\n}\n\n// ========================================\n// 5. COMPONENTES QUE USAN CONTEXT\n// ========================================\n\n// Header con autenticación y tema\nfunction Header() {\n  const { user, isAuthenticated, logout } = useAuth();\n  const { theme, toggleTheme } = useTheme();\n  const { itemCount } = useCart();\n  \n  return (\n    <header className={`header ${theme}`}>\n      <div className=\"header-content\">\n        <h1>🛒 Mi E-commerce</h1>\n        \n        <div className=\"header-actions\">\n          <button onClick={toggleTheme} className=\"theme-toggle\">\n            {theme === 'light' ? '🌙' : '☀️'}\n          </button>\n          \n          <div className=\"cart-icon\">\n            🛒 {itemCount}\n          </div>\n          \n          {isAuthenticated ? (\n            <div className=\"user-menu\">\n              <span>Hola, {user.name}</span>\n              <button onClick={logout}>Cerrar Sesión</button>\n            </div>\n          ) : (\n            <button>Iniciar Sesión</button>\n          )}\n        </div>\n      </div>\n    </header>\n  );\n}\n\n// Producto con funcionalidad de carrito\nfunction ProductCard({ product }) {\n  const { addItem } = useCart();\n  const { addNotification } = useNotifications();\n  \n  const handleAddToCart = () => {\n    addItem(product);\n    addNotification(\n      `${product.name} agregado al carrito`, \n      'success'\n    );\n  };\n  \n  return (\n    <div className=\"product-card\">\n      <img src={product.image} alt={product.name} />\n      <h3>{product.name}</h3>\n      <p className=\"price\">${product.price}</p>\n      <button onClick={handleAddToCart} className=\"add-to-cart\">\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// Carrito de compras\nfunction ShoppingCart() {\n  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCart();\n  \n  if (itemCount === 0) {\n    return (\n      <div className=\"empty-cart\">\n        <h3>Tu carrito está vacío</h3>\n        <p>¡Agrega algunos productos!</p>\n      </div>\n    );\n  }\n  \n  return (\n    <div className=\"shopping-cart\">\n      <div className=\"cart-header\">\n        <h3>Carrito ({itemCount} items)</h3>\n        <button onClick={clearCart} className=\"clear-cart\">\n          Vaciar carrito\n        </button>\n      </div>\n      \n      <div className=\"cart-items\">\n        {items.map(item => (\n          <div key={item.id} className=\"cart-item\">\n            <img src={item.image} alt={item.name} />\n            <div className=\"item-details\">\n              <h4>{item.name}</h4>\n              <p>${item.price}</p>\n              \n              <div className=\"quantity-controls\">\n                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>\n                  -\n                </button>\n                <span>{item.quantity}</span>\n                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>\n                  +\n                </button>\n              </div>\n            </div>\n            \n            <button \n              onClick={() => removeItem(item.id)}\n              className=\"remove-item\"\n            >\n              ❌\n            </button>\n          </div>\n        ))}\n      </div>\n      \n      <div className=\"cart-footer\">\n        <div className=\"cart-total\">\n          <strong>Total: ${total.toFixed(2)}</strong>\n        </div>\n        <button className=\"checkout-btn\">\n          Proceder al pago\n        </button>\n      </div>\n    </div>\n  );\n}\n\n// Sistema de notificaciones\nfunction NotificationSystem() {\n  const { notifications, removeNotification } = useNotifications();\n  \n  return (\n    <div className=\"notification-container\">\n      {notifications.map(notification => (\n        <div \n          key={notification.id} \n          className={`notification ${notification.type}`}\n        >\n          <span>{notification.message}</span>\n          <button onClick={() => removeNotification(notification.id)}>\n            ×\n          </button>\n        </div>\n      ))}\n    </div>\n  );\n}\n\n// ========================================\n// 6. APLICACIÓN PRINCIPAL\n// ========================================\n\nfunction App() {\n  return (\n    <AuthProvider>\n      <CartProvider>\n        <ThemeProvider>\n          <NotificationProvider>\n            <div className=\"app\">\n              <Header />\n              \n              <main className=\"main-content\">\n                <div className=\"products-section\">\n                  <h2>Productos Destacados</h2>\n                  <div className=\"products-grid\">\n                    {products.map(product => (\n                      <ProductCard key={product.id} product={product} />\n                    ))}\n                  </div>\n                </div>\n                \n                <div className=\"cart-section\">\n                  <ShoppingCart />\n                </div>\n              </main>\n              \n              <NotificationSystem />\n            </div>\n          </NotificationProvider>\n        </ThemeProvider>\n      </CartProvider>\n    </AuthProvider>\n  );\n}\n\n// ========================================\n// 7. DATOS DE EJEMPLO\n// ========================================\n\nconst products = [\n  {\n    id: 1,\n    name: 'Laptop Gaming',\n    price: 1299.99,\n    image: '/images/laptop.jpg'\n  },\n  {\n    id: 2,\n    name: 'Smartphone Pro',\n    price: 899.99,\n    image: '/images/phone.jpg'\n  },\n  {\n    id: 3,\n    name: 'Auriculares Wireless',\n    price: 199.99,\n    image: '/images/headphones.jpg'\n  }\n];\n\nexport default App;\n```\n\n**Características del ejemplo:**\n\n✅ **Múltiples Contextos**: Separación clara de responsabilidades\n✅ **useReducer**: Para estado complejo del carrito\n✅ **Persistencia**: Datos guardados en localStorage\n✅ **Hooks personalizados**: Encapsulación de lógica\n✅ **Notificaciones**: Sistema global de notificaciones\n✅ **Tema dinámico**: Cambio de tema en tiempo real\n✅ **Autenticación**: Sistema completo de login/logout\n✅ **Carrito funcional**: Agregar, quitar, actualizar cantidades\n✅ **Validación de contexto**: Errores si se usa fuera del Provider\n✅ **Código real**: Aplicación funcional de e-commerce",
        
        "createContext y useContext: Creación y consumo de contexto": "createContext y useContext son las funciones fundamentales para crear y consumir contexto en React.\n\n**createContext:**\n- **Propósito**: Crear un objeto Context para compartir datos\n- **Sintaxis**: `createContext(defaultValue)`\n- **Valor por defecto**: Se usa cuando no hay Provider\n- **Retorna**: Objeto con Provider y Consumer\n\n**useContext:**\n- **Propósito**: Consumir el valor de un Context\n- **Sintaxis**: `useContext(Context)`\n- **Retorna**: Valor actual del Context\n- **Reglas**: Solo en componentes funcionales\n\n**Ejemplos prácticos:**\n```javascript\nimport { createContext, useContext, useState } from 'react';\n\n// 1. Crear contexto con valor por defecto\nconst UserContext = createContext({\n  user: null,\n  login: () => {},\n  logout: () => {}\n});\n\n// 2. Crear provider con estado\nfunction UserProvider({ children }) {\n  const [user, setUser] = useState(null);\n  \n  const login = (userData) => {\n    setUser(userData);\n  };\n  \n  const logout = () => {\n    setUser(null);\n  };\n  \n  return (\n    <UserContext.Provider value={{ user, login, logout }}>\n      {children}\n    </UserContext.Provider>\n  );\n}\n\n// 3. Consumir contexto en componente\nfunction UserProfile() {\n  const { user, logout } = useContext(UserContext);\n  \n  if (!user) {\n    return <div>No hay usuario logueado</div>;\n  }\n  \n  return (\n    <div>\n      <h2>Hola, {user.name}</h2>\n      <p>Email: {user.email}</p>\n      <button onClick={logout}>Cerrar Sesión</button>\n    </div>\n  );\n}\n\n// 4. Múltiples contextos\nconst ThemeContext = createContext('light');\nconst LanguageContext = createContext('es');\n\nfunction App() {\n  return (\n    <UserProvider>\n      <ThemeProvider>\n        <LanguageProvider>\n          <UserProfile />\n        </LanguageProvider>\n      </ThemeProvider>\n    </UserProvider>\n  );\n}\n\n// 5. Hook personalizado para contexto\nfunction useUser() {\n  const context = useContext(UserContext);\n  \n  if (!context) {\n    throw new Error('useUser debe usarse dentro de UserProvider');\n  }\n  \n  return context;\n}\n\n// 6. Usar hook personalizado\nfunction LoginForm() {\n  const { login } = useUser();\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    login({ name: 'Juan', email: 'juan@email.com' });\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Iniciar Sesión</button>\n    </form>\n  );\n}\n\n// 7. Contexto con múltiples valores\nconst AppContext = createContext();\n\nfunction AppProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const [language, setLanguage] = useState('es');\n  const [user, setUser] = useState(null);\n  \n  const value = {\n    theme: { current: theme, setTheme },\n    language: { current: language, setLanguage },\n    user: { current: user, setUser }\n  };\n  \n  return (\n    <AppContext.Provider value={value}>\n      {children}\n    </AppContext.Provider>\n  );\n}\n\n// 8. Consumir múltiples valores\nfunction Settings() {\n  const { theme, language, user } = useContext(AppContext);\n  \n  return (\n    <div>\n      <h2>Configuración</h2>\n      <p>Tema: {theme.current}</p>\n      <p>Idioma: {language.current}</p>\n      <p>Usuario: {user.current?.name || 'No logueado'}</p>\n    </div>\n  );\n}\n```\n\n**Mejores prácticas:**\n- **Valor por defecto**: Siempre proporcionar un valor por defecto\n- **Hook personalizado**: Crear hooks para encapsular lógica\n- **Validación**: Verificar que el contexto existe\n- **Separación**: Un contexto por responsabilidad\n- **Documentación**: Documentar la estructura del contexto",
        
        "Provider y Consumer patterns": "Provider es un componente que permite a los componentes consumidores suscribirse a cambios en el Context. Se coloca en un nivel superior del árbol de componentes y proporciona el valor del Context a todos sus descendientes. Consumer es un componente que permite consumir el valor del Context en componentes de clase, aunque con hooks es más común usar useContext. El patrón Provider/Consumer permite que múltiples componentes accedan al mismo estado sin prop drilling.\n\n**Ejemplos prácticos:**\n\n**1. Provider básico con useState:**\n```javascript\nimport React, { createContext, useContext, useState } from 'react';\n\n// Crear el contexto\nexport const ThemeContext = createContext();\n\n// Provider con estado\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const [language, setLanguage] = useState('es');\n  \n  const toggleTheme = () => {\n    setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  };\n  \n  const changeLanguage = (lang) => {\n    setLanguage(lang);\n  };\n  \n  const value = {\n    theme,\n    language,\n    toggleTheme,\n    changeLanguage\n  };\n  \n  return (\n    <ThemeContext.Provider value={value}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// Hook personalizado para usar el contexto\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) {\n    throw new Error('useTheme debe usarse dentro de ThemeProvider');\n  }\n  return context;\n}\n\n// Uso en componentes\nfunction Header() {\n  const { theme, toggleTheme } = useTheme();\n  \n  return (\n    <header className={`header ${theme}`}>\n      <h1>Mi Aplicación</h1>\n      <button onClick={toggleTheme}>\n        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}\n      </button>\n    </header>\n  );\n}\n\nfunction Footer() {\n  const { language, changeLanguage } = useTheme();\n  \n  return (\n    <footer>\n      <p>Idioma actual: {language}</p>\n      <button onClick={() => changeLanguage('en')}>English</button>\n      <button onClick={() => changeLanguage('es')}>Español</button>\n    </footer>\n  );\n}\n\n// App principal\nfunction App() {\n  return (\n    <ThemeProvider>\n      <div className=\"app\">\n        <Header />\n        <main>Contenido principal</main>\n        <Footer />\n      </div>\n    </ThemeProvider>\n  );\n}\n```\n\n**2. Provider con useReducer para estado complejo:**\n```javascript\nimport React, { createContext, useContext, useReducer } from 'react';\n\n// Estado inicial\nconst initialState = {\n  user: null,\n  isAuthenticated: false,\n  loading: false,\n  error: null\n};\n\n// Reducer para manejar acciones\nauthReducer(state, action) {\n  switch (action.type) {\n    case 'LOGIN_START':\n      return { ...state, loading: true, error: null };\n    case 'LOGIN_SUCCESS':\n      return {\n        ...state,\n        user: action.payload,\n        isAuthenticated: true,\n        loading: false,\n        error: null\n      };\n    case 'LOGIN_ERROR':\n      return {\n        ...state,\n        loading: false,\n        error: action.payload\n      };\n    case 'LOGOUT':\n      return {\n        ...state,\n        user: null,\n        isAuthenticated: false\n      };\n    default:\n      return state;\n  }\n}\n\n// Crear contexto\nexport const AuthContext = createContext();\n\n// Provider con useReducer\nexport function AuthProvider({ children }) {\n  const [state, dispatch] = useReducer(authReducer, initialState);\n  \n  const login = async (credentials) => {\n    dispatch({ type: 'LOGIN_START' });\n    try {\n      // Simular llamada a API\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        body: JSON.stringify(credentials)\n      });\n      const user = await response.json();\n      dispatch({ type: 'LOGIN_SUCCESS', payload: user });\n    } catch (error) {\n      dispatch({ type: 'LOGIN_ERROR', payload: error.message });\n    }\n  };\n  \n  const logout = () => {\n    dispatch({ type: 'LOGOUT' });\n  };\n  \n  const value = {\n    ...state,\n    login,\n    logout\n  };\n  \n  return (\n    <AuthContext.Provider value={value}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// Hook personalizado\nexport function useAuth() {\n  const context = useContext(AuthContext);\n  if (!context) {\n    throw new Error('useAuth debe usarse dentro de AuthProvider');\n  }\n  return context;\n}\n```\n\n**3. Consumer pattern (para componentes de clase):**\n```javascript\nimport React, { Component } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\n// Componente de clase usando Consumer\nclass ThemeDisplay extends Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme, toggleTheme }) => (\n          <div className={`theme-display ${theme}`}>\n            <p>Tema actual: {theme}</p>\n            <button onClick={toggleTheme}>\n              Cambiar tema\n            </button>\n          </div>\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n\n// Equivalente con hooks (más moderno)\nfunction ThemeDisplayHook() {\n  const { theme, toggleTheme } = useTheme();\n  \n  return (\n    <div className={`theme-display ${theme}`}>\n      <p>Tema actual: {theme}</p>\n      <button onClick={toggleTheme}>\n        Cambiar tema\n      </button>\n    </div>\n  );\n}\n```",
        
        "Estado global vs props drilling": "Props drilling ocurre cuando se pasa la misma prop a través de múltiples niveles de componentes, incluso cuando algunos componentes intermedios no necesitan esa prop. Esto hace el código más difícil de mantener y entender. El estado global con Context resuelve este problema permitiendo que cualquier componente acceda directamente a los datos que necesita, sin pasar por componentes intermedios. Sin embargo, es importante usar Context solo cuando sea necesario, ya que puede causar re-renders innecesarios.\n\n**Ejemplos prácticos:**\n\n**1. Problema de Props Drilling (ANTES):**\n```javascript\n// ❌ PROBLEMA: Props drilling\n// App.js - Estado en el componente raíz\nfunction App() {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState('light');\n  \n  return (\n    <div>\n      <Header user={user} theme={theme} setTheme={setTheme} />\n      <MainContent user={user} theme={theme} />\n      <Sidebar user={user} />\n    </div>\n  );\n}\n\n// Header.js - No necesita user, pero debe pasarlo\nfunction Header({ user, theme, setTheme }) {\n  return (\n    <header className={theme}>\n      <h1>Mi App</h1>\n      <ThemeToggle theme={theme} setTheme={setTheme} />\n      {/* user no se usa aquí, pero debe pasarse */}\n    </header>\n  );\n}\n\n// ThemeToggle.js - No necesita user\nfunction ThemeToggle({ theme, setTheme }) {\n  return (\n    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>\n      {theme === 'light' ? '🌙' : '☀️'}\n    </button>\n  );\n}\n\n// MainContent.js - Pasa user a componentes hijos\nfunction MainContent({ user, theme }) {\n  return (\n    <main className={theme}>\n      <WelcomeMessage user={user} />\n      <UserProfile user={user} />\n    </main>\n  );\n}\n\n// WelcomeMessage.js - Finalmente usa user\nfunction WelcomeMessage({ user }) {\n  return <h2>¡Hola, {user?.name || 'Invitado'}!</h2>;\n}\n\n// UserProfile.js - También usa user\nfunction UserProfile({ user }) {\n  if (!user) return <p>No hay usuario logueado</p>;\n  \n  return (\n    <div>\n      <p>Email: {user.email}</p>\n      <p>Rol: {user.role}</p>\n    </div>\n  );\n}\n\n// Sidebar.js - También necesita user\nfunction Sidebar({ user }) {\n  return (\n    <aside>\n      <h3>Menú</h3>\n      {user ? (\n        <ul>\n          <li>Dashboard</li>\n          <li>Perfil</li>\n          <li>Configuración</li>\n        </ul>\n      ) : (\n        <ul>\n          <li>Iniciar Sesión</li>\n          <li>Registrarse</li>\n        </ul>\n      )}\n    </aside>\n  );\n}\n```\n\n**2. Solución con Context (DESPUÉS):**\n```javascript\n// ✅ SOLUCIÓN: Context API\n// contexts/AppContext.js\nimport { createContext, useContext, useState } from 'react';\n\nconst AppContext = createContext();\n\nexport function AppProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState('light');\n  \n  const login = (userData) => setUser(userData);\n  const logout = () => setUser(null);\n  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  \n  const value = {\n    user,\n    theme,\n    login,\n    logout,\n    toggleTheme\n  };\n  \n  return (\n    <AppContext.Provider value={value}>\n      {children}\n    </AppContext.Provider>\n  );\n}\n\nexport function useApp() {\n  const context = useContext(AppContext);\n  if (!context) {\n    throw new Error('useApp debe usarse dentro de AppProvider');\n  }\n  return context;\n}\n\n// App.js - Mucho más limpio\nfunction App() {\n  return (\n    <AppProvider>\n      <div>\n        <Header />\n        <MainContent />\n        <Sidebar />\n      </div>\n    </AppProvider>\n  );\n}\n\n// Header.js - Solo usa lo que necesita\nfunction Header() {\n  const { theme, toggleTheme } = useApp();\n  \n  return (\n    <header className={theme}>\n      <h1>Mi App</h1>\n      <ThemeToggle />\n    </header>\n  );\n}\n\n// ThemeToggle.js - Acceso directo al contexto\nfunction ThemeToggle() {\n  const { theme, toggleTheme } = useApp();\n  \n  return (\n    <button onClick={toggleTheme}>\n      {theme === 'light' ? '🌙' : '☀️'}\n    </button>\n  );\n}\n\n// MainContent.js - No necesita pasar props\nfunction MainContent() {\n  const { theme } = useApp();\n  \n  return (\n    <main className={theme}>\n      <WelcomeMessage />\n      <UserProfile />\n    </main>\n  );\n}\n\n// WelcomeMessage.js - Acceso directo a user\nfunction WelcomeMessage() {\n  const { user } = useApp();\n  \n  return <h2>¡Hola, {user?.name || 'Invitado'}!</h2>;\n}\n\n// UserProfile.js - Acceso directo a user\nfunction UserProfile() {\n  const { user } = useApp();\n  \n  if (!user) return <p>No hay usuario logueado</p>;\n  \n  return (\n    <div>\n      <p>Email: {user.email}</p>\n      <p>Rol: {user.role}</p>\n    </div>\n  );\n}\n\n// Sidebar.js - Acceso directo a user\nfunction Sidebar() {\n  const { user } = useApp();\n  \n  return (\n    <aside>\n      <h3>Menú</h3>\n      {user ? (\n        <ul>\n          <li>Dashboard</li>\n          <li>Perfil</li>\n          <li>Configuración</li>\n        </ul>\n      ) : (\n        <ul>\n          <li>Iniciar Sesión</li>\n          <li>Registrarse</li>\n        </ul>\n      )}\n    </aside>\n  );\n}\n```\n\n**3. Comparación de complejidad:**\n```javascript\n// ❌ CON PROPS DRILLING (Complejo)\n// Cada componente intermedio debe recibir y pasar props\nfunction App() {\n  const [user, setUser] = useState(null);\n  return <Header user={user} setUser={setUser} />;\n}\n\nfunction Header({ user, setUser }) {\n  return <Navigation user={user} setUser={setUser} />;\n}\n\nfunction Navigation({ user, setUser }) {\n  return <UserMenu user={user} setUser={setUser} />;\n}\n\nfunction UserMenu({ user, setUser }) {\n  // Finalmente usa user\n  return user ? <LogoutButton setUser={setUser} /> : <LoginButton />;\n}\n\n// ✅ CON CONTEXT (Simple)\nfunction App() {\n  return (\n    <UserProvider>\n      <Header />\n    </UserProvider>\n  );\n}\n\nfunction Header() {\n  return <Navigation />;\n}\n\nfunction Navigation() {\n  return <UserMenu />;\n}\n\nfunction UserMenu() {\n  const { user, setUser } = useUser();\n  return user ? <LogoutButton /> : <LoginButton />;\n}\n```\n\n**4. Cuándo usar cada enfoque:**\n```javascript\n// ✅ USAR PROPS cuando:\n// - Solo 1-2 niveles de profundidad\n// - Datos específicos del componente padre\n// - No se comparte entre muchos componentes\n\nfunction ProductCard({ product, onAddToCart }) {\n  return (\n    <div>\n      <h3>{product.name}</h3>\n      <p>${product.price}</p>\n      <button onClick={() => onAddToCart(product)}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// ✅ USAR CONTEXT cuando:\n// - 3+ niveles de profundidad\n// - Datos compartidos globalmente\n// - Estado de autenticación, temas, configuración\n\n// Ejemplo: Sistema de notificaciones global\nconst NotificationContext = createContext();\n\nexport function NotificationProvider({ children }) {\n  const [notifications, setNotifications] = useState([]);\n  \n  const addNotification = (message, type = 'info') => {\n    const id = Date.now();\n    setNotifications(prev => [...prev, { id, message, type }]);\n    \n    // Auto-remove after 5 seconds\n    setTimeout(() => {\n      setNotifications(prev => prev.filter(n => n.id !== id));\n    }, 5000);\n  };\n  \n  const removeNotification = (id) => {\n    setNotifications(prev => prev.filter(n => n.id !== id));\n  };\n  \n  return (\n    <NotificationContext.Provider value={{\n      notifications,\n      addNotification,\n      removeNotification\n    }}>\n      {children}\n    </NotificationContext.Provider>\n  );\n}\n\n// Cualquier componente puede mostrar notificaciones\nexport function useNotifications() {\n  const context = useContext(NotificationContext);\n  if (!context) {\n    throw new Error('useNotifications debe usarse dentro de NotificationProvider');\n  }\n  return context;\n}\n\n// Uso en cualquier componente\nfunction ProductCard({ product }) {\n  const { addNotification } = useNotifications();\n  \n  const handleAddToCart = () => {\n    // Lógica para agregar al carrito\n    addNotification(`${product.name} agregado al carrito`, 'success');\n  };\n  \n  return (\n    <div>\n      <h3>{product.name}</h3>\n      <button onClick={handleAddToCart}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n```",
        
        "Optimización de Context": "Context puede causar re-renders de todos los componentes consumidores cuando el valor cambia, incluso si solo necesitan una parte del estado. Para optimizar, se pueden crear múltiples Contexts para diferentes tipos de datos, usar useMemo para valores calculados, o implementar patrones como Context + useReducer para manejar estado complejo. También es importante evitar crear el objeto Context dentro del render, ya que esto crea un nuevo objeto en cada renderizado.\n\n**Ejemplos prácticos:**\n\n**1. Problema: Re-renders innecesarios:**\n```javascript\n// ❌ PROBLEMA: Todos los componentes se re-renderizan\nconst AppContext = createContext();\n\nfunction AppProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState('light');\n  const [notifications, setNotifications] = useState([]);\n  \n  // ❌ PROBLEMA: Nuevo objeto en cada render\n  const value = {\n    user,\n    theme,\n    notifications,\n    setUser,\n    setTheme,\n    setNotifications\n  };\n  \n  return (\n    <AppContext.Provider value={value}>\n      {children}\n    </AppContext.Provider>\n  );\n}\n\n// ❌ PROBLEMA: Se re-renderiza cuando cambia cualquier valor\nfunction Header() {\n  const { theme, setTheme } = useContext(AppContext);\n  console.log('Header re-renderizado'); // Se ejecuta siempre\n  \n  return (\n    <header className={theme}>\n      <h1>Mi App</h1>\n      <button onClick={() => setTheme('dark')}>\n        Cambiar tema\n      </button>\n    </header>\n  );\n}\n\n// ❌ PROBLEMA: Se re-renderiza cuando cambia user o theme\nfunction NotificationList() {\n  const { notifications } = useContext(AppContext);\n  console.log('NotificationList re-renderizado'); // Se ejecuta innecesariamente\n  \n  return (\n    <div>\n      {notifications.map(notification => (\n        <div key={notification.id}>{notification.message}</div>\n      ))}\n    </div>\n  );\n}\n```\n\n**2. Solución: Múltiples Contexts:**\n```javascript\n// ✅ SOLUCIÓN: Separar en múltiples contextos\n// contexts/UserContext.js\nexport const UserContext = createContext();\n\nexport function UserProvider({ children }) {\n  const [user, setUser] = useState(null);\n  \n  // ✅ Memoizar el valor para evitar re-renders\n  const value = useMemo(() => ({\n    user,\n    setUser\n  }), [user]);\n  \n  return (\n    <UserContext.Provider value={value}>\n      {children}\n    </UserContext.Provider>\n  );\n}\n\n// contexts/ThemeContext.js\nexport const ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  \n  const value = useMemo(() => ({\n    theme,\n    setTheme\n  }), [theme]);\n  \n  return (\n    <ThemeContext.Provider value={value}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// contexts/NotificationContext.js\nexport const NotificationContext = createContext();\n\nexport function NotificationProvider({ children }) {\n  const [notifications, setNotifications] = useState([]);\n  \n  const addNotification = useCallback((message) => {\n    const id = Date.now();\n    setNotifications(prev => [...prev, { id, message }]);\n  }, []);\n  \n  const removeNotification = useCallback((id) => {\n    setNotifications(prev => prev.filter(n => n.id !== id));\n  }, []);\n  \n  const value = useMemo(() => ({\n    notifications,\n    addNotification,\n    removeNotification\n  }), [notifications, addNotification, removeNotification]);\n  \n  return (\n    <NotificationContext.Provider value={value}>\n      {children}\n    </NotificationContext.Provider>\n  );\n}\n\n// App.js - Combinar providers\nfunction App() {\n  return (\n    <UserProvider>\n      <ThemeProvider>\n        <NotificationProvider>\n          <Header />\n          <MainContent />\n          <NotificationList />\n        </NotificationProvider>\n      </ThemeProvider>\n    </UserProvider>\n  );\n}\n\n// ✅ SOLUCIÓN: Solo se re-renderiza cuando cambia theme\nfunction Header() {\n  const { theme, setTheme } = useContext(ThemeContext);\n  console.log('Header re-renderizado'); // Solo cuando cambia theme\n  \n  return (\n    <header className={theme}>\n      <h1>Mi App</h1>\n      <button onClick={() => setTheme('dark')}>\n        Cambiar tema\n      </button>\n    </header>\n  );\n}\n\n// ✅ SOLUCIÓN: Solo se re-renderiza cuando cambian notifications\nfunction NotificationList() {\n  const { notifications } = useContext(NotificationContext);\n  console.log('NotificationList re-renderizado'); // Solo cuando cambian notifications\n  \n  return (\n    <div>\n      {notifications.map(notification => (\n        <div key={notification.id}>{notification.message}</div>\n      ))}\n    </div>\n  );\n}\n```\n\n**3. Optimización con useMemo y useCallback:**\n```javascript\n// ✅ OPTIMIZACIÓN: useMemo para valores calculados\nfunction ExpensiveProvider({ children }) {\n  const [data, setData] = useState([]);\n  const [filter, setFilter] = useState('');\n  \n  // ✅ Memoizar cálculos costosos\n  const filteredData = useMemo(() => {\n    console.log('Filtrando datos...'); // Solo se ejecuta cuando cambia data o filter\n    return data.filter(item => \n      item.name.toLowerCase().includes(filter.toLowerCase())\n    );\n  }, [data, filter]);\n  \n  // ✅ Memoizar funciones para evitar re-renders\n  const handleFilterChange = useCallback((newFilter) => {\n    setFilter(newFilter);\n  }, []);\n  \n  const handleDataUpdate = useCallback((newData) => {\n    setData(newData);\n  }, []);\n  \n  // ✅ Memoizar el valor del contexto\n  const value = useMemo(() => ({\n    data: filteredData,\n    filter,\n    onFilterChange: handleFilterChange,\n    onDataUpdate: handleDataUpdate\n  }), [filteredData, filter, handleFilterChange, handleDataUpdate]);\n  \n  return (\n    <ExpensiveContext.Provider value={value}>\n      {children}\n    </ExpensiveContext.Provider>\n  );\n}\n\n// ✅ OPTIMIZACIÓN: useCallback para funciones estables\nfunction SearchProvider({ children }) {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState([]);\n  \n  // ✅ Función estable que no cambia en cada render\n  const search = useCallback(async (searchQuery) => {\n    if (!searchQuery.trim()) {\n      setResults([]);\n      return;\n    }\n    \n    try {\n      const response = await fetch(`/api/search?q=${searchQuery}`);\n      const data = await response.json();\n      setResults(data.results);\n    } catch (error) {\n      console.error('Error en búsqueda:', error);\n      setResults([]);\n    }\n  }, []);\n  \n  // ✅ Debounced search para evitar muchas llamadas\n  const debouncedSearch = useMemo(() => {\n    return debounce(search, 300);\n  }, [search]);\n  \n  const value = useMemo(() => ({\n    query,\n    results,\n    search: debouncedSearch,\n    setQuery\n  }), [query, results, debouncedSearch]);\n  \n  return (\n    <SearchContext.Provider value={value}>\n      {children}\n    </SearchContext.Provider>\n  );\n}\n\n// Función debounce helper\nfunction debounce(func, wait) {\n  let timeout;\n  return function executedFunction(...args) {\n    const later = () => {\n      clearTimeout(timeout);\n      func(...args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n}\n```\n\n**4. Context + useReducer para estado complejo:**\n```javascript\n// ✅ OPTIMIZACIÓN: useReducer para estado complejo\nconst initialState = {\n  user: null,\n  isAuthenticated: false,\n  loading: false,\n  error: null,\n  preferences: {\n    theme: 'light',\n    language: 'es',\n    notifications: true\n  }\n};\n\nfunction authReducer(state, action) {\n  switch (action.type) {\n    case 'LOGIN_START':\n      return { ...state, loading: true, error: null };\n    case 'LOGIN_SUCCESS':\n      return {\n        ...state,\n        user: action.payload,\n        isAuthenticated: true,\n        loading: false,\n        error: null\n      };\n    case 'LOGIN_ERROR':\n      return {\n        ...state,\n        loading: false,\n        error: action.payload\n      };\n    case 'UPDATE_PREFERENCES':\n      return {\n        ...state,\n        preferences: { ...state.preferences, ...action.payload }\n      };\n    case 'LOGOUT':\n      return {\n        ...state,\n        user: null,\n        isAuthenticated: false,\n        preferences: initialState.preferences\n      };\n    default:\n      return state;\n  }\n}\n\nexport function AuthProvider({ children }) {\n  const [state, dispatch] = useReducer(authReducer, initialState);\n  \n  // ✅ Funciones estables con useCallback\n  const login = useCallback(async (credentials) => {\n    dispatch({ type: 'LOGIN_START' });\n    try {\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        body: JSON.stringify(credentials)\n      });\n      const user = await response.json();\n      dispatch({ type: 'LOGIN_SUCCESS', payload: user });\n    } catch (error) {\n      dispatch({ type: 'LOGIN_ERROR', payload: error.message });\n    }\n  }, []);\n  \n  const logout = useCallback(() => {\n    dispatch({ type: 'LOGOUT' });\n  }, []);\n  \n  const updatePreferences = useCallback((preferences) => {\n    dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences });\n  }, []);\n  \n  // ✅ Memoizar el valor del contexto\n  const value = useMemo(() => ({\n    ...state,\n    login,\n    logout,\n    updatePreferences\n  }), [state, login, logout, updatePreferences]);\n  \n  return (\n    <AuthContext.Provider value={value}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n```\n\n**5. Patrón de Context Selector personalizado:**\n```javascript\n// ✅ OPTIMIZACIÓN: Selector personalizado para evitar re-renders\nfunction createContextSelector(context) {\n  return function useContextSelector(selector) {\n    const contextValue = useContext(context);\n    \n    return useMemo(() => {\n      return selector(contextValue);\n    }, [contextValue, selector]);\n  };\n}\n\n// Usar el selector personalizado\nconst useUserSelector = createContextSelector(UserContext);\nconst useThemeSelector = createContextSelector(ThemeContext);\n\n// ✅ Solo se re-renderiza cuando cambia user.name\nfunction UserName() {\n  const userName = useUserSelector(useCallback(\n    (state) => state.user?.name,\n    []\n  ));\n  \n  console.log('UserName re-renderizado'); // Solo cuando cambia user.name\n  \n  return <h2>{userName || 'Invitado'}</h2>;\n}\n\n// ✅ Solo se re-renderiza cuando cambia theme\nfunction ThemeButton() {\n  const theme = useThemeSelector(useCallback(\n    (state) => state.theme,\n    []\n  ));\n  \n  console.log('ThemeButton re-renderizado'); // Solo cuando cambia theme\n  \n  return (\n    <button className={theme}>\n      Tema: {theme}\n    </button>\n  );\n}\n```\n\n**6. Mejores prácticas de optimización:**\n```javascript\n// ✅ MEJORES PRÁCTICAS\n\n// 1. Evitar crear objetos en el render\n// ❌ MALO\nfunction BadProvider({ children }) {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <Context.Provider value={{ count, setCount }}> {/* Nuevo objeto cada render */}\n      {children}\n    </Context.Provider>\n  );\n}\n\n// ✅ BUENO\nfunction GoodProvider({ children }) {\n  const [count, setCount] = useState(0);\n  \n  const value = useMemo(() => ({ count, setCount }), [count]);\n  \n  return (\n    <Context.Provider value={value}>\n      {children}\n    </Context.Provider>\n  );\n}\n\n// 2. Separar contextos por responsabilidad\n// ❌ MALO: Un contexto gigante\nconst EverythingContext = createContext();\n\n// ✅ BUENO: Múltiples contextos específicos\nconst UserContext = createContext();\nconst ThemeContext = createContext();\nconst NotificationContext = createContext();\n\n// 3. Usar useCallback para funciones\n// ❌ MALO\nfunction BadProvider({ children }) {\n  const [data, setData] = useState([]);\n  \n  const addItem = (item) => { // Nueva función cada render\n    setData(prev => [...prev, item]);\n  };\n  \n  return (\n    <Context.Provider value={{ data, addItem }}>\n      {children}\n    </Context.Provider>\n  );\n}\n\n// ✅ BUENO\nfunction GoodProvider({ children }) {\n  const [data, setData] = useState([]);\n  \n  const addItem = useCallback((item) => {\n    setData(prev => [...prev, item]);\n  }, []);\n  \n  const value = useMemo(() => ({ data, addItem }), [data, addItem]);\n  \n  return (\n    <Context.Provider value={value}>\n      {children}\n    </Context.Provider>\n  );\n}\n\n// 4. Lazy loading de contextos\nfunction LazyProvider({ children }) {\n  const [isLoaded, setIsLoaded] = useState(false);\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    // Cargar datos pesados de forma asíncrona\n    loadHeavyData().then(result => {\n      setData(result);\n      setIsLoaded(true);\n    });\n  }, []);\n  \n  if (!isLoaded) {\n    return <div>Cargando...</div>;\n  }\n  \n  return (\n    <HeavyDataContext.Provider value={data}>\n      {children}\n    </HeavyDataContext.Provider>\n  );\n}\n```",
        
        "Alternativas: Redux, Zustand": "Redux es una librería de manejo de estado que proporciona un store global predecible usando principios de programación funcional. Es más complejo que Context pero ofrece herramientas poderosas para debugging y manejo de estado complejo. Zustand es una librería más ligera que Redux, con menos boilerplate y una API más simple. Ambas son alternativas cuando Context no es suficiente para manejar estado complejo o cuando se necesita mejor rendimiento y herramientas de desarrollo.\n\n**Ejemplos prácticos:**\n\n**1. Redux Toolkit - Configuración básica:**\n```javascript\n// store/index.js\nimport { configureStore } from '@reduxjs/toolkit';\nimport userSlice from './slices/userSlice';\nimport themeSlice from './slices/themeSlice';\nimport cartSlice from './slices/cartSlice';\n\nexport const store = configureStore({\n  reducer: {\n    user: userSlice,\n    theme: themeSlice,\n    cart: cartSlice\n  },\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      serializableCheck: {\n        ignoredActions: ['persist/PERSIST']\n      }\n    })\n});\n\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\n\n// App.js\nimport { Provider } from 'react-redux';\nimport { store } from './store';\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className=\"app\">\n        <Header />\n        <MainContent />\n        <Sidebar />\n      </div>\n    </Provider>\n  );\n}\n```\n\n**2. Redux Toolkit - Slices (Reducers):**\n```javascript\n// store/slices/userSlice.js\nimport { createSlice, createAsyncThunk } from '@reduxjs/toolkit';\n\n// Async thunk para login\nconst loginUser = createAsyncThunk(\n  'user/login',\n  async (credentials, { rejectWithValue }) => {\n    try {\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        body: JSON.stringify(credentials)\n      });\n      \n      if (!response.ok) {\n        throw new Error('Login failed');\n      }\n      \n      return await response.json();\n    } catch (error) {\n      return rejectWithValue(error.message);\n    }\n  }\n);\n\nconst userSlice = createSlice({\n  name: 'user',\n  initialState: {\n    data: null,\n    isAuthenticated: false,\n    loading: false,\n    error: null\n  },\n  reducers: {\n    logout: (state) => {\n      state.data = null;\n      state.isAuthenticated = false;\n      state.error = null;\n    },\n    clearError: (state) => {\n      state.error = null;\n    }\n  },\n  extraReducers: (builder) => {\n    builder\n      .addCase(loginUser.pending, (state) => {\n        state.loading = true;\n        state.error = null;\n      })\n      .addCase(loginUser.fulfilled, (state, action) => {\n        state.loading = false;\n        state.data = action.payload;\n        state.isAuthenticated = true;\n      })\n      .addCase(loginUser.rejected, (state, action) => {\n        state.loading = false;\n        state.error = action.payload;\n      });\n  }\n});\n\nexport const { logout, clearError } = userSlice.actions;\nexport { loginUser };\nexport default userSlice.reducer;\n\n// store/slices/themeSlice.js\nimport { createSlice } from '@reduxjs/toolkit';\n\nconst themeSlice = createSlice({\n  name: 'theme',\n  initialState: {\n    mode: 'light',\n    primaryColor: '#007bff',\n    fontSize: 'medium'\n  },\n  reducers: {\n    toggleTheme: (state) => {\n      state.mode = state.mode === 'light' ? 'dark' : 'light';\n    },\n    setPrimaryColor: (state, action) => {\n      state.primaryColor = action.payload;\n    },\n    setFontSize: (state, action) => {\n      state.fontSize = action.payload;\n    }\n  }\n});\n\nexport const { toggleTheme, setPrimaryColor, setFontSize } = themeSlice.actions;\nexport default themeSlice.reducer;\n\n// store/slices/cartSlice.js\nimport { createSlice } from '@reduxjs/toolkit';\n\nconst cartSlice = createSlice({\n  name: 'cart',\n  initialState: {\n    items: [],\n    total: 0,\n    itemCount: 0\n  },\n  reducers: {\n    addItem: (state, action) => {\n      const existingItem = state.items.find(item => item.id === action.payload.id);\n      \n      if (existingItem) {\n        existingItem.quantity += 1;\n      } else {\n        state.items.push({ ...action.payload, quantity: 1 });\n      }\n      \n      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);\n      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);\n    },\n    removeItem: (state, action) => {\n      state.items = state.items.filter(item => item.id !== action.payload);\n      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);\n      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);\n    },\n    updateQuantity: (state, action) => {\n      const { id, quantity } = action.payload;\n      const item = state.items.find(item => item.id === id);\n      \n      if (item) {\n        item.quantity = quantity;\n        if (quantity <= 0) {\n          state.items = state.items.filter(item => item.id !== id);\n        }\n      }\n      \n      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);\n      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);\n    },\n    clearCart: (state) => {\n      state.items = [];\n      state.total = 0;\n      state.itemCount = 0;\n    }\n  }\n});\n\nexport const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;\nexport default cartSlice.reducer;\n```\n\n**3. Redux - Hooks personalizados:**\n```javascript\n// hooks/useRedux.js\nimport { useSelector, useDispatch } from 'react-redux';\nimport { useCallback } from 'react';\nimport type { RootState, AppDispatch } from '../store';\n\n// Hook tipado para dispatch\nexport const useAppDispatch = () => useDispatch<AppDispatch>();\n\n// Hook tipado para selector\nexport const useAppSelector = <T>(selector: (state: RootState) => T) => \n  useSelector(selector);\n\n// Hook personalizado para user\nexport function useUser() {\n  const user = useAppSelector(state => state.user.data);\n  const isAuthenticated = useAppSelector(state => state.user.isAuthenticated);\n  const loading = useAppSelector(state => state.user.loading);\n  const error = useAppSelector(state => state.user.error);\n  \n  const dispatch = useAppDispatch();\n  \n  const login = useCallback((credentials) => {\n    dispatch(loginUser(credentials));\n  }, [dispatch]);\n  \n  const logout = useCallback(() => {\n    dispatch(logout());\n  }, [dispatch]);\n  \n  const clearError = useCallback(() => {\n    dispatch(clearError());\n  }, [dispatch]);\n  \n  return {\n    user,\n    isAuthenticated,\n    loading,\n    error,\n    login,\n    logout,\n    clearError\n  };\n}\n\n// Hook personalizado para theme\nexport function useTheme() {\n  const theme = useAppSelector(state => state.theme);\n  const dispatch = useAppDispatch();\n  \n  const toggleTheme = useCallback(() => {\n    dispatch(toggleTheme());\n  }, [dispatch]);\n  \n  const setPrimaryColor = useCallback((color) => {\n    dispatch(setPrimaryColor(color));\n  }, [dispatch]);\n  \n  const setFontSize = useCallback((size) => {\n    dispatch(setFontSize(size));\n  }, [dispatch]);\n  \n  return {\n    ...theme,\n    toggleTheme,\n    setPrimaryColor,\n    setFontSize\n  };\n}\n\n// Hook personalizado para cart\nexport function useCart() {\n  const cart = useAppSelector(state => state.cart);\n  const dispatch = useAppDispatch();\n  \n  const addItem = useCallback((item) => {\n    dispatch(addItem(item));\n  }, [dispatch]);\n  \n  const removeItem = useCallback((id) => {\n    dispatch(removeItem(id));\n  }, [dispatch]);\n  \n  const updateQuantity = useCallback((id, quantity) => {\n    dispatch(updateQuantity({ id, quantity }));\n  }, [dispatch]);\n  \n  const clearCart = useCallback(() => {\n    dispatch(clearCart());\n  }, [dispatch]);\n  \n  return {\n    ...cart,\n    addItem,\n    removeItem,\n    updateQuantity,\n    clearCart\n  };\n}\n```\n\n**4. Redux - Uso en componentes:**\n```javascript\n// components/Header.jsx\nimport React from 'react';\nimport { useTheme, useUser } from '../hooks/useRedux';\n\nfunction Header() {\n  const { mode, toggleTheme } = useTheme();\n  const { user, isAuthenticated, logout } = useUser();\n  \n  return (\n    <header className={`header ${mode}`}>\n      <h1>Mi App</h1>\n      \n      <div className=\"header-actions\">\n        <button onClick={toggleTheme}>\n          {mode === 'light' ? '🌙' : '☀️'}\n        </button>\n        \n        {isAuthenticated ? (\n          <div className=\"user-menu\">\n            <span>Hola, {user.name}</span>\n            <button onClick={logout}>Cerrar Sesión</button>\n          </div>\n        ) : (\n          <button>Iniciar Sesión</button>\n        )}\n      </div>\n    </header>\n  );\n}\n\n// components/ProductCard.jsx\nimport React from 'react';\nimport { useCart } from '../hooks/useRedux';\n\nfunction ProductCard({ product }) {\n  const { addItem } = useCart();\n  \n  const handleAddToCart = () => {\n    addItem(product);\n  };\n  \n  return (\n    <div className=\"product-card\">\n      <h3>{product.name}</h3>\n      <p>${product.price}</p>\n      <button onClick={handleAddToCart}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// components/Cart.jsx\nimport React from 'react';\nimport { useCart } from '../hooks/useRedux';\n\nfunction Cart() {\n  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCart();\n  \n  if (itemCount === 0) {\n    return <div>El carrito está vacío</div>;\n  }\n  \n  return (\n    <div className=\"cart\">\n      <h2>Carrito ({itemCount} items)</h2>\n      \n      {items.map(item => (\n        <div key={item.id} className=\"cart-item\">\n          <h4>{item.name}</h4>\n          <p>${item.price}</p>\n          \n          <div className=\"quantity-controls\">\n            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>\n              -\n            </button>\n            <span>{item.quantity}</span>\n            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>\n              +\n            </button>\n          </div>\n          \n          <button onClick={() => removeItem(item.id)}>\n            Eliminar\n          </button>\n        </div>\n      ))}\n      \n      <div className=\"cart-total\">\n        <strong>Total: ${total.toFixed(2)}</strong>\n      </div>\n      \n      <button onClick={clearCart}>\n        Vaciar carrito\n      </button>\n    </div>\n  );\n}\n```\n\n**5. Zustand - Configuración básica:**\n```javascript\n// store/useUserStore.js\nimport { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nconst useUserStore = create(\n  persist(\n    (set, get) => ({\n      // Estado\n      user: null,\n      isAuthenticated: false,\n      loading: false,\n      error: null,\n      \n      // Acciones\n      login: async (credentials) => {\n        set({ loading: true, error: null });\n        \n        try {\n          const response = await fetch('/api/login', {\n            method: 'POST',\n            body: JSON.stringify(credentials)\n          });\n          \n          if (!response.ok) {\n            throw new Error('Login failed');\n          }\n          \n          const user = await response.json();\n          set({ \n            user, \n            isAuthenticated: true, \n            loading: false, \n            error: null \n          });\n        } catch (error) {\n          set({ \n            loading: false, \n            error: error.message \n          });\n        }\n      },\n      \n      logout: () => {\n        set({ \n          user: null, \n          isAuthenticated: false, \n          error: null \n        });\n      },\n      \n      clearError: () => {\n        set({ error: null });\n      },\n      \n      // Selectores computados\n      getUserName: () => {\n        const { user } = get();\n        return user?.name || 'Invitado';\n      }\n    }),\n    {\n      name: 'user-storage', // Clave para localStorage\n      partialize: (state) => ({ \n        user: state.user, \n        isAuthenticated: state.isAuthenticated \n      }) // Solo persistir user e isAuthenticated\n    }\n  )\n);\n\nexport default useUserStore;\n\n// store/useThemeStore.js\nimport { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nconst useThemeStore = create(\n  persist(\n    (set, get) => ({\n      // Estado\n      mode: 'light',\n      primaryColor: '#007bff',\n      fontSize: 'medium',\n      \n      // Acciones\n      toggleTheme: () => {\n        set((state) => ({ \n          mode: state.mode === 'light' ? 'dark' : 'light' \n        }));\n      },\n      \n      setPrimaryColor: (color) => {\n        set({ primaryColor: color });\n      },\n      \n      setFontSize: (size) => {\n        set({ fontSize: size });\n      },\n      \n      // Selectores computados\n      getThemeClasses: () => {\n        const { mode, fontSize } = get();\n        return `theme-${mode} font-${fontSize}`;\n      }\n    }),\n    {\n      name: 'theme-storage'\n    }\n  )\n);\n\nexport default useThemeStore;\n\n// store/useCartStore.js\nimport { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nconst useCartStore = create(\n  persist(\n    (set, get) => ({\n      // Estado\n      items: [],\n      \n      // Acciones\n      addItem: (product) => {\n        set((state) => {\n          const existingItem = state.items.find(item => item.id === product.id);\n          \n          if (existingItem) {\n            return {\n              items: state.items.map(item =>\n                item.id === product.id\n                  ? { ...item, quantity: item.quantity + 1 }\n                  : item\n              )\n            };\n          } else {\n            return {\n              items: [...state.items, { ...product, quantity: 1 }]\n            };\n          }\n        });\n      },\n      \n      removeItem: (id) => {\n        set((state) => ({\n          items: state.items.filter(item => item.id !== id)\n        }));\n      },\n      \n      updateQuantity: (id, quantity) => {\n        set((state) => {\n          if (quantity <= 0) {\n            return {\n              items: state.items.filter(item => item.id !== id)\n            };\n          }\n          \n          return {\n            items: state.items.map(item =>\n              item.id === id ? { ...item, quantity } : item\n            )\n          };\n        });\n      },\n      \n      clearCart: () => {\n        set({ items: [] });\n      },\n      \n      // Selectores computados\n      getTotal: () => {\n        const { items } = get();\n        return items.reduce((total, item) => total + (item.price * item.quantity), 0);\n      },\n      \n      getItemCount: () => {\n        const { items } = get();\n        return items.reduce((total, item) => total + item.quantity, 0);\n      },\n      \n      getItemById: (id) => {\n        const { items } = get();\n        return items.find(item => item.id === id);\n      }\n    }),\n    {\n      name: 'cart-storage'\n    }\n  )\n);\n\nexport default useCartStore;\n```\n\n**6. Zustand - Uso en componentes:**\n```javascript\n// components/Header.jsx\nimport React from 'react';\nimport useThemeStore from '../store/useThemeStore';\nimport useUserStore from '../store/useUserStore';\n\nfunction Header() {\n  const { mode, toggleTheme, getThemeClasses } = useThemeStore();\n  const { user, isAuthenticated, logout, getUserName } = useUserStore();\n  \n  return (\n    <header className={getThemeClasses()}>\n      <h1>Mi App</h1>\n      \n      <div className=\"header-actions\">\n        <button onClick={toggleTheme}>\n          {mode === 'light' ? '🌙' : '☀️'}\n        </button>\n        \n        {isAuthenticated ? (\n          <div className=\"user-menu\">\n            <span>Hola, {getUserName()}</span>\n            <button onClick={logout}>Cerrar Sesión</button>\n          </div>\n        ) : (\n          <button>Iniciar Sesión</button>\n        )}\n      </div>\n    </header>\n  );\n}\n\n// components/ProductCard.jsx\nimport React from 'react';\nimport useCartStore from '../store/useCartStore';\n\nfunction ProductCard({ product }) {\n  const addItem = useCartStore(state => state.addItem);\n  \n  const handleAddToCart = () => {\n    addItem(product);\n  };\n  \n  return (\n    <div className=\"product-card\">\n      <h3>{product.name}</h3>\n      <p>${product.price}</p>\n      <button onClick={handleAddToCart}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// components/Cart.jsx\nimport React from 'react';\nimport useCartStore from '../store/useCartStore';\n\nfunction Cart() {\n  const {\n    items,\n    getTotal,\n    getItemCount,\n    removeItem,\n    updateQuantity,\n    clearCart\n  } = useCartStore();\n  \n  const total = getTotal();\n  const itemCount = getItemCount();\n  \n  if (itemCount === 0) {\n    return <div>El carrito está vacío</div>;\n  }\n  \n  return (\n    <div className=\"cart\">\n      <h2>Carrito ({itemCount} items)</h2>\n      \n      {items.map(item => (\n        <div key={item.id} className=\"cart-item\">\n          <h4>{item.name}</h4>\n          <p>${item.price}</p>\n          \n          <div className=\"quantity-controls\">\n            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>\n              -\n            </button>\n            <span>{item.quantity}</span>\n            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>\n              +\n            </button>\n          </div>\n          \n          <button onClick={() => removeItem(item.id)}>\n            Eliminar\n          </button>\n        </div>\n      ))}\n      \n      <div className=\"cart-total\">\n        <strong>Total: ${total.toFixed(2)}</strong>\n      </div>\n      \n      <button onClick={clearCart}>\n        Vaciar carrito\n      </button>\n    </div>\n  );\n}\n```\n\n**7. Comparación: Context vs Redux vs Zustand:**\n```javascript\n// 📊 COMPARACIÓN DE ENFOQUES\n\n// ✅ CONTEXT API - Para casos simples\n// Ventajas:\n// - Nativo de React\n// - Sin dependencias externas\n// - Ideal para temas, autenticación básica\n\n// Desventajas:\n// - Re-renders innecesarios\n// - No hay DevTools avanzadas\n// - Difícil de escalar\n\n// ✅ REDUX - Para aplicaciones complejas\n// Ventajas:\n// - DevTools poderosas\n// - Time-travel debugging\n// - Patrones predecibles\n// - Gran ecosistema\n\n// Desventajas:\n// - Mucho boilerplate\n// - Curva de aprendizaje empinada\n// - Overkill para casos simples\n\n// ✅ ZUSTAND - Balance perfecto\n// Ventajas:\n// - API simple\n// - Menos boilerplate\n// - DevTools incluidas\n// - TypeScript friendly\n// - Persistencia fácil\n\n// Desventajas:\n// - Menos maduro que Redux\n// - Ecosistema más pequeño\n\n// 🎯 CUÁNDO USAR CADA UNO\n\n// Context API:\n// - Aplicaciones pequeñas-medianas\n// - Estado simple (tema, usuario actual)\n// - Equipos nuevos en React\n\n// Redux:\n// - Aplicaciones grandes y complejas\n// - Estado complejo con muchas interacciones\n// - Necesidad de DevTools avanzadas\n// - Equipos experimentados\n\n// Zustand:\n// - Aplicaciones medianas-grandes\n// - Quieres simplicidad pero con poder\n// - Migración desde Redux\n// - Proyectos con TypeScript\n\n// 📝 INSTALACIÓN\n\n// Context API (nativo)\n// No requiere instalación\n\n// Redux Toolkit\n// npm install @reduxjs/toolkit react-redux\n\n// Zustand\n// npm install zustand\n```",
      },
      practical: [
        "Crear Context API: createContext, useContext y patrones de implementación",
        "Implementar Provider y Consumer: gestión de estado global",
        "Resolver prop drilling: comunicación entre componentes distantes",
        "Optimizar rendimiento: evitar re-renders innecesarios",
        "Crear sistemas de autenticación y temas con Context",
        "Implementar Context + useReducer para estado complejo",
        "Proyecto: Aplicación con estado global y Context API avanzado"
      ]
    },
    activities: [
      {
        title: "Context API básico",
        duration: "45 min",
        description: "Crear Context, Provider y usar useContext en componentes"
      },
      {
        title: "Estado global y prop drilling",
        duration: "60 min",
        description: "Resolver prop drilling con Context y crear estado global"
      },
      {
        title: "Optimización de Context",
        duration: "45 min",
        description: "Evitar re-renders innecesarios y mejorar rendimiento"
      },
      {
        title: "Context + useReducer",
        duration: "45 min",
        description: "Manejar estado complejo con Context y useReducer"
      },
      {
        title: "Sistemas de autenticación y temas",
        duration: "45 min",
        description: "Crear sistemas completos con Context para autenticación y temas"
      }
    ],
    homework: [
      "Crear aplicación completa con Context API: múltiples contextos y estado global",
      "Implementar sistema de autenticación global con Context y rutas protegidas",
      "Crear sistema de temas con Context: modo claro/oscuro y persistencia",
      "Implementar Context + useReducer para manejo de estado complejo",
      "Crear hooks personalizados para Context: useAuth, useTheme, useSettings",
      "Optimizar rendimiento: evitar re-renders innecesarios con useMemo y useCallback"
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
      "Desarrollar aplicación React completa: arquitectura, estructura y organización",
      "Implementar formularios avanzados: validación, manejo de errores y UX",
      "Crear sistema de routing completo: navegación, rutas protegidas y layouts",
      "Aplicar hooks avanzados: useState, useEffect, useReducer y hooks personalizados",
      "Implementar estado global: Context API, autenticación y gestión de datos",
      "Proyecto: Aplicación de gestión de tareas con todas las funcionalidades React"
    ],
    content: {
      theoretical: [
        "Arquitectura de aplicaciones React: estructura, organización y mejores prácticas",
        "Formularios avanzados: controlados, no controlados y validación en tiempo real",
        "Validación de formularios: client-side, server-side y UX de validación",
        "Hooks avanzados: useState, useEffect, useReducer y hooks personalizados",
        "Routing y navegación: React Router, rutas protegidas y layouts",
        "Estado global: Context API, autenticación y gestión de datos",
        "Optimización de rendimiento: React.memo, useMemo, useCallback",
        "Buenas prácticas: testing, debugging y mantenimiento de código"
      ],
      theoreticalDetails: {
        "Arquitectura de aplicaciones React: estructura, organización y mejores prácticas": "Una buena arquitectura de aplicación React se basa en la separación de responsabilidades, organización modular y escalabilidad. Los principios fundamentales incluyen componentes pequeños y enfocados, reutilización de código, flujo de datos claro, y separación entre lógica de negocio y presentación. La estructura de carpetas recomendada organiza el código por funcionalidad con carpetas para components, pages, hooks, context, services, utils y styles. Los patrones de arquitectura incluyen Container/Presentational, Custom Hooks para lógica, y Context para estado global. Las mejores prácticas incluyen naming descriptivo, interfaces claras, error boundaries, testing, optimización de rendimiento y accesibilidad.",
        
        "Formularios avanzados: controlados, no controlados y validación en tiempo real": "Los formularios controlados tienen su valor controlado por React a través del estado del componente, permitiendo validación en tiempo real y control total sobre los datos. Los formularios no controlados permiten que el DOM maneje el estado del formulario, usando refs para acceder a los valores cuando sea necesario. Los formularios controlados son más predecibles y fáciles de testear, mientras que los no controlados pueden ser más eficientes para formularios simples. La validación puede ocurrir en tiempo real mientras el usuario escribe, al perder el foco del campo, o al enviar el formulario.",
        
        "Validación de formularios: client-side, server-side y UX de validación": "La validación de formularios puede ser realizada en el lado del cliente usando JavaScript, en el servidor, o ambos. En React, la validación puede ocurrir en tiempo real mientras el usuario escribe, al perder el foco del campo, o al enviar el formulario. Las librerías como Formik, React Hook Form, o Yup proporcionan herramientas para manejar formularios complejos con validación. Es importante proporcionar feedback claro al usuario sobre errores y validaciones, usando estados de error y mensajes descriptivos.",
        
        "Hooks avanzados: useState, useEffect, useReducer y hooks personalizados": "Los hooks useState y useEffect son fundamentales para manejar estado en componentes funcionales. useState permite agregar estado local, mientras que useEffect maneja efectos secundarios como llamadas a APIs o suscripciones. Para estado más complejo, useReducer proporciona un patrón similar a Redux para manejar múltiples valores de estado relacionados. Los hooks personalizados permiten extraer lógica de estado reutilizable y hacer que los componentes sean más limpios y enfocados.",
        
        "Routing y navegación: React Router, rutas protegidas y layouts": "React Router proporciona navegación declarativa y programática en aplicaciones de una sola página. Las rutas pueden ser estáticas o dinámicas con parámetros, y pueden incluir rutas protegidas que requieren autenticación. La navegación puede ser declarativa usando componentes Link o programática usando el hook useNavigate. Es importante manejar estados de carga, errores de navegación, y proporcionar una experiencia de usuario fluida durante las transiciones entre páginas.",
        
        "Estado global: Context API, autenticación y gestión de datos": "Context API permite compartir datos entre componentes sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Es especialmente útil para datos que son considerados 'globales' para un árbol de componentes, como temas, idioma preferido, o información de autenticación. Context proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props hacia abajo manualmente en cada nivel.",
        
        "Optimización de rendimiento: React.memo, useMemo, useCallback": "React.memo, useMemo y useCallback son herramientas de optimización que ayudan a prevenir cálculos innecesarios y re-renderizados. React.memo memoriza el resultado del renderizado de un componente. useMemo memoriza el resultado de un cálculo costoso. useCallback memoriza una función para evitar recrearla en cada render. Es importante usar estas herramientas solo cuando hay problemas de rendimiento reales y medir antes de optimizar.",
        
        "Buenas prácticas: testing, debugging y mantenimiento de código": "Las buenas prácticas incluyen mantener componentes pequeños y enfocados, usar nombres descriptivos para componentes y props, evitar mutaciones directas del estado, usar keys apropiadas en listas, y optimizar el rendimiento con React.memo, useMemo, y useCallback cuando sea necesario. También es importante manejar errores apropiadamente, usar PropTypes o TypeScript para validación de tipos, y seguir convenciones de naming consistentes. El código debe ser legible, mantenible, y seguir principios SOLID."
      },
      practical: [
        "Crear aplicación React completa: arquitectura, estructura y organización",
        "Implementar formularios avanzados: validación, manejo de errores y UX",
        "Desarrollar sistema de routing completo: navegación, rutas protegidas y layouts",
        "Aplicar hooks avanzados: useState, useEffect, useReducer y hooks personalizados",
        "Implementar estado global: Context API, autenticación y gestión de datos",
        "Optimizar rendimiento: React.memo, useMemo, useCallback y mejores prácticas",
        "Proyecto: Aplicación de gestión de tareas con todas las funcionalidades React"
      ]
    },
    activities: [
      {
        title: "Arquitectura y estructura del proyecto",
        duration: "30 min",
        description: "Crear estructura de proyecto React, configurar dependencias y organizar carpetas"
      },
      {
        title: "Desarrollo de componentes y hooks",
        duration: "90 min",
        description: "Implementar componentes principales, hooks personalizados y lógica de negocio"
      },
      {
        title: "Formularios y validación",
        duration: "45 min",
        description: "Crear formularios avanzados con validación en tiempo real y manejo de errores"
      },
      {
        title: "Routing y navegación",
        duration: "45 min",
        description: "Implementar sistema de routing completo con rutas protegidas y layouts"
      },
      {
        title: "Estado global y optimización",
        duration: "30 min",
        description: "Implementar Context API, autenticación y optimizar rendimiento"
      }
    ],
    homework: [
      "Completar aplicación de gestión de tareas: todas las funcionalidades y optimizaciones",
      "Implementar sistema de autenticación completo: login, registro, rutas protegidas",
      "Agregar funcionalidades avanzadas: filtros, búsqueda, categorías y prioridades",
      "Implementar tests unitarios: componentes, hooks y funciones utilitarias",
      "Optimizar rendimiento: React.memo, useMemo, useCallback y lazy loading",
      "Mejorar UX: loading states, error handling, notificaciones y feedback visual"
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
