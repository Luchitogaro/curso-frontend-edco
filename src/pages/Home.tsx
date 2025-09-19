import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CourseStats from '../components/CourseStats';
import { courseConfig } from '../config/courseConfig';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">
          {courseConfig.title}
        </h1>
        <p className="home-subtitle">
          {courseConfig.description}
        </p>
      </div>

      <CourseStats />

      <div className="cta-section">
        <h2 className="cta-title">¡Comienza tu viaje en el desarrollo frontend!</h2>
        <p className="cta-description">
          Únete a más de {courseConfig.studentRange} estudiantes que están transformando sus carreras con nuestro curso integral. 
          Aprende las tecnologías más demandadas del mercado y construye un portfolio profesional.
        </p>
        <Link to="/sesion/1" className="cta-button">
          Comenzar Primera Sesión
          <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
