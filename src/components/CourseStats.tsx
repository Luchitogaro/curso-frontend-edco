import React from 'react';
import { BookOpen, Users, Clock, Award, Code, Target, Zap } from 'lucide-react';
import { courseConfig, getCourseStats } from '../config/courseConfig';

const CourseStats: React.FC = () => {
  const stats = getCourseStats();

  const features = [
    {
      icon: Code,
      title: 'Desarrollo Práctico',
      description: '70% práctica, 30% teoría con proyectos reales desde el primer día'
    },
    {
      icon: Target,
      title: 'Objetivos Claros',
      description: 'Cada sesión tiene objetivos específicos y medibles'
    },
    {
      icon: Zap,
      title: 'Tecnologías Modernas',
      description: 'HTML5, CSS3, JavaScript ES6+, React, Git y más'
    }
  ];

  return (
    <div>
      {/* Estadísticas principales */}
      <div className="stats-grid">
        <div className="stat-card">
          <BookOpen size={32} color="#4f46e5" style={{ marginBottom: '0.5rem' }} />
          <div className="stat-number">{stats.totalSessions}</div>
          <div className="stat-label">Sesiones</div>
        </div>
        
        <div className="stat-card">
          <Clock size={32} color="#4f46e5" style={{ marginBottom: '0.5rem' }} />
          <div className="stat-number">{stats.totalHours}</div>
          <div className="stat-label">Horas Totales</div>
        </div>
        
        <div className="stat-card">
          <Award size={32} color="#4f46e5" style={{ marginBottom: '0.5rem' }} />
          <div className="stat-number">{stats.deliverables}</div>
          <div className="stat-label">Proyectos</div>
        </div>
      </div>

      {/* Características del curso */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: '#1f2937', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          ¿Por qué elegir nuestro curso?
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white'
                }}>
                  <IconComponent size={28} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  color: '#1f2937', 
                  marginBottom: '0.75rem' 
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estructura del curso */}
      <div style={{ 
        marginTop: '3rem', 
        background: 'white', 
        borderRadius: '20px', 
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#1f2937', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Estructura del Curso
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {courseConfig.phases.map((phase, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: '700'
              }}>
                {phase.sessions[0]}-{phase.sessions[phase.sessions.length - 1]}
              </div>
              <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                {phase.name}
              </h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologías */}
      <div style={{ 
        marginTop: '3rem', 
        background: 'white', 
        borderRadius: '20px', 
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#1f2937', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Tecnologías que Aprenderás
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '1rem' 
        }}>
          {courseConfig.technologies.map((tech, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '0.75rem',
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#475569'
            }}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
