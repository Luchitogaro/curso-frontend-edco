export interface CourseConfig {
  title: string;
  subtitle: string;
  description: string;
  totalSessions: number;
  totalHours: number;
  studentRange: string;
  instructor: {
    name: string;
    email: string;
    linkedin?: string;
    github?: string;
  };
  schedule: {
    frequency: string;
    days: string[];
    duration: string;
  };
  phases: {
    name: string;
    sessions: number[];
    description: string;
    color: string;
  }[];
  evaluation: {
    projects: number;
    homework: number;
    finalProject: number;
    participation: number;
  };
  technologies: string[];
  deliverables: string[];
  support: {
    email: string;
    slack?: string;
    whatsapp?: string;
    github?: string;
    officeHours: string;
  };
}

export const courseConfig: CourseConfig = {
  title: "Desarrollo Frontend Moderno",
  subtitle: "Universidad de los Andes - Educación Continua",
  description: "Aprende a crear aplicaciones web modernas e interactivas con las mejores tecnologías del mercado. Un curso completo de 20 sesiones diseñado para llevarte de principiante a desarrollador frontend profesional, ofrecido por la Universidad de los Andes a través de su programa de Educación Continua.",
  totalSessions: 20,
  totalHours: 60,
  studentRange: "30-40",
  instructor: {
    name: "Luis Hernando Gaviria Roa",
    email: "l.gaviria2@uniandes.edu.co",
    linkedin: "https://linkedin.com/in/tu-perfil",
    github: "https://github.com/tu-usuario"
  },
  schedule: {
    frequency: "Lunes, Miércoles y Viernes",
    days: ["Lunes", "Miércoles", "Viernes"],
    duration: "3 horas por sesión"
  },
  phases: [
    {
      name: "Fundamentos",
      sessions: [1, 2, 3, 4, 5],
      description: "HTML5, CSS3, JavaScript básico",
      color: "#10b981"
    },
    {
      name: "Desarrollo Avanzado",
      sessions: [6, 7, 8, 9, 10, 11, 12],
      description: "React, Git, APIs, herramientas modernas",
      color: "#f59e0b"
    },
    {
      name: "Proyecto Integrador",
      sessions: [13, 14, 15, 16, 17, 18, 19, 20],
      description: "Aplicación completa desde cero hasta deployment",
      color: "#8b5cf6"
    }
  ],
  evaluation: {
    projects: 40,
    homework: 30,
    finalProject: 20,
    participation: 10
  },
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript ES6+",
    "React",
    "Git & GitHub",
    "Node.js",
    "APIs REST",
    "Responsive Design",
    "Testing",
    "Deployment"
  ],
  deliverables: [
    "Página de portafolio personal",
    "Aplicación de tareas (To-Do)",
    "Aplicación React completa",
    "Proyecto integrador",
    "Repositorio en GitHub"
  ],
  support: {
    email: "educacioncontinua@uniandes.edu.co",
    slack: "#curso-frontend",
    whatsapp: "Grupo del curso",
    github: "uniandes/frontend-course",
    officeHours: "Viernes 6:00 PM - 7:00 PM"
  }
};

// Función para obtener estadísticas del curso
export const getCourseStats = () => {
  return {
    totalSessions: courseConfig.totalSessions,
    totalHours: courseConfig.totalHours,
    studentRange: courseConfig.studentRange,
    technologies: courseConfig.technologies.length,
    deliverables: courseConfig.deliverables.length
  };
};

// Función para obtener información de una fase
export const getPhaseInfo = (sessionId: number) => {
  return courseConfig.phases.find(phase => 
    phase.sessions.includes(sessionId)
  );
};

// Función para obtener el progreso por fase
export const getPhaseProgress = (completedSessions: number[]) => {
  return courseConfig.phases.map(phase => {
    const completedInPhase = phase.sessions.filter(sessionId => 
      completedSessions.includes(sessionId)
    ).length;
    
    return {
      ...phase,
      completed: completedInPhase,
      total: phase.sessions.length,
      percentage: Math.round((completedInPhase / phase.sessions.length) * 100)
    };
  });
};
