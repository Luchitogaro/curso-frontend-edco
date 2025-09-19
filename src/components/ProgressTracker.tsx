import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressTrackerProps {
  currentSessionId: number;
  onSessionComplete: (sessionId: number) => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  currentSessionId, 
  onSessionComplete 
}) => {
  const [completedSessions, setCompletedSessions] = useState<number[]>(() => {
    const saved = localStorage.getItem('completedSessions');
    return saved ? JSON.parse(saved) : [];
  });

  const totalSessions = 20;
  const progressPercentage = (completedSessions.length / totalSessions) * 100;

  useEffect(() => {
    localStorage.setItem('completedSessions', JSON.stringify(completedSessions));
  }, [completedSessions]);

  const toggleSessionComplete = (sessionId: number) => {
    setCompletedSessions(prev => {
      if (prev.includes(sessionId)) {
        return prev.filter(id => id !== sessionId);
      } else {
        return [...prev, sessionId];
      }
    });
  };

  const getSessionStatus = (sessionId: number) => {
    if (completedSessions.includes(sessionId)) return 'completed';
    if (sessionId === currentSessionId) return 'current';
    if (sessionId < currentSessionId) return 'available';
    return 'locked';
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1f2937',
          margin: 0
        }}>
          Progreso del Curso
        </h3>
        <span style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          fontWeight: '500'
        }}>
          {completedSessions.length} de {totalSessions} sesiones
        </span>
      </div>

      {/* Barra de progreso */}
      <div style={{
        width: '100%',
        height: '8px',
        background: '#f3f4f6',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: `${progressPercentage}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #10b981, #059669)',
          borderRadius: '4px',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Indicador de porcentaje */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#6b7280',
        fontWeight: '500'
      }}>
        {Math.round(progressPercentage)}% completado
      </div>

      {/* Botón para marcar sesión actual como completada */}
      {currentSessionId <= totalSessions && (
        <div style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid #e5e7eb'
        }}>
          <button
            onClick={() => toggleSessionComplete(currentSessionId)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: completedSessions.includes(currentSessionId) 
                ? '#10b981' 
                : '#f3f4f6',
              color: completedSessions.includes(currentSessionId) 
                ? 'white' 
                : '#374151',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            {completedSessions.includes(currentSessionId) ? (
              <>
                <CheckCircle size={16} />
                Sesión Completada
              </>
            ) : (
              <>
                <Circle size={16} />
                Marcar como Completada
              </>
            )}
          </button>
        </div>
      )}

      {/* Estadísticas adicionales */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#10b981'
          }}>
            {completedSessions.length}
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: '#6b7280'
          }}>
            Completadas
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#f59e0b'
          }}>
            {totalSessions - completedSessions.length}
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: '#6b7280'
          }}>
            Pendientes
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#4f46e5'
          }}>
            {Math.round((completedSessions.length / totalSessions) * 100)}%
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: '#6b7280'
          }}>
            Progreso
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
