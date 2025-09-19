# 🎓 Curso Frontend EDCO - Material de Enseñanza

Una aplicación React moderna y interactiva diseñada para presentar el contenido del curso de desarrollo frontend de EDCO. Incluye 20 sesiones completas con ejercicios, soluciones y guías detalladas.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz atractiva con gradientes y animaciones
- **📱 Responsive**: Optimizado para todos los dispositivos
- **🎯 Contenido Estructurado**: 20 sesiones organizadas por niveles
- **💻 Ejercicios Interactivos**: Código base y soluciones para cada ejercicio
- **🧭 Navegación Intuitiva**: Sidebar con progreso y navegación entre sesiones
- **📋 Material Completo**: Objetivos, actividades, tareas y materiales para cada sesión

## 🚀 Tecnologías Utilizadas

- **React 18** con TypeScript
- **React Router** para navegación
- **Framer Motion** para animaciones
- **Lucide React** para iconos
- **CSS3** con diseño moderno y responsive

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar o descargar el proyecto
cd curso-frontend-edco

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

La aplicación se abrirá en `http://localhost:3000`

### Scripts Disponibles

```bash
# Desarrollo
npm start

# Construcción para producción
npm run build

# Ejecutar tests
npm test

# Eject (no recomendado)
npm run eject
```

## 📚 Estructura del Curso

### Fase 1: Fundamentos (Sesiones 1-5)
- **Sesión 1**: Introducción al Desarrollo Web
- **Sesión 2**: HTML - Estructura y Semántica
- **Sesión 3**: CSS - Estilos y Diseño
- **Sesión 4**: CSS - Layout y Responsive Design
- **Sesión 5**: JavaScript - Fundamentos

### Fase 2: Desarrollo Avanzado (Sesiones 6-12)
- **Sesión 6**: JavaScript - DOM y Eventos
- **Sesión 7**: JavaScript - Arrays y Objetos
- **Sesión 8**: JavaScript - Asincronía y APIs
- **Sesión 9**: Git y Control de Versiones
- **Sesión 10**: Introducción a React
- **Sesión 11**: React - Hooks y Estado
- **Sesión 12**: React - Routing y Navegación

### Fase 3: Proyecto Integrador (Sesiones 13-20)
- **Sesión 13**: Proyecto Integrador - Planificación
- **Sesión 14**: Proyecto Integrador - Desarrollo Frontend
- **Sesión 15**: Proyecto Integrador - Estilos y UX
- **Sesión 16**: Proyecto Integrador - Optimización
- **Sesión 17**: Proyecto Integrador - Testing y Debugging
- **Sesión 18**: Proyecto Integrador - Deployment
- **Sesión 19**: Proyecto Integrador - Presentación
- **Sesión 20**: Cierre y Siguientes Pasos

## 🎯 Características de Cada Sesión

Cada sesión incluye:

- **📋 Objetivos de Aprendizaje**: Metas claras y medibles
- **📖 Contenido Teórico**: Conceptos fundamentales
- **🛠️ Contenido Práctico**: Actividades hands-on
- **⏰ Actividades Detalladas**: Con duración y descripción
- **📝 Tareas**: Para la próxima sesión
- **🔧 Materiales**: Necesarios para la clase
- **💻 Ejercicios**: Con código base y soluciones

## 🎨 Personalización

### Agregar Nuevas Sesiones
1. Edita `src/data/sessionsData.ts`
2. Agrega el objeto de la nueva sesión al array `sessionsData`
3. Actualiza el sidebar en `src/components/Sidebar.tsx` si es necesario

### Modificar Estilos
- Los estilos principales están en `src/App.css`
- Usa variables CSS para colores y espaciado
- El diseño es completamente responsive

### Agregar Ejercicios
Cada sesión puede incluir múltiples ejercicios con:
- Título y descripción
- Código base (opcional)
- Solución completa

## 📱 Uso en Clase

### Para el Instructor
1. **Presentación**: Usa la página de inicio para dar contexto
2. **Navegación**: Usa el sidebar para cambiar entre sesiones
3. **Ejercicios**: Muestra el código base y revela soluciones gradualmente
4. **Progreso**: Marca sesiones completadas en el sidebar

### Para los Estudiantes
1. **Seguimiento**: Pueden ver el progreso del curso
2. **Material**: Acceso a todo el contenido y ejercicios
3. **Práctica**: Código base para empezar y soluciones para verificar
4. **Navegación**: Fácil acceso a cualquier sesión

## 🚀 Deployment

### Netlify (Recomendado)
```bash
# Construir para producción
npm run build

# Subir la carpeta 'build' a Netlify
```

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script al package.json
"homepage": "https://tu-usuario.github.io/curso-frontend-edco"

# Deploy
npm run build
npm run deploy
```

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-sesion`)
3. Commit tus cambios (`git commit -am 'Agregar nueva sesión'`)
4. Push a la rama (`git push origin feature/nueva-sesion`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte o preguntas:
- **Email**: [tu-email@ejemplo.com]
- **GitHub Issues**: [Crear un issue](https://github.com/tu-usuario/curso-frontend-edco/issues)

## 🎉 Agradecimientos

- **EDCO** por la oportunidad de crear este material
- **React Team** por el framework increíble
- **Lucide** por los iconos hermosos
- **Framer Motion** por las animaciones suaves

---

**¡Disfruta enseñando y aprendiendo desarrollo frontend! 🚀**