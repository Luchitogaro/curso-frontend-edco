import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Code, Monitor, Package, GitBranch, Download, Play, Settings, Star } from 'lucide-react';
import './ToolsShowcase.css';

interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
  installation: string;
  popular: boolean;
}

const tools: Tool[] = [
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'Editor de Código',
    description: 'El IDE más popular para desarrollo web',
    icon: <Code className="tool-icon" />,
    color: '#007ACC',
    features: [
      'Autocompletado inteligente',
      'Depuración integrada',
      'Control de versiones',
      'Extensiones extensas',
      'Terminal integrado'
    ],
    installation: 'Descargar desde code.visualstudio.com',
    popular: true
  },
  {
    id: 'chrome',
    name: 'Chrome DevTools',
    category: 'Herramientas de Navegador',
    description: 'Herramientas de desarrollo del navegador',
    icon: <Monitor className="tool-icon" />,
    color: '#4285F4',
    features: [
      'Inspector de elementos',
      'Consola de JavaScript',
      'Análisis de rendimiento',
      'Debugging de red',
      'Emulación de dispositivos'
    ],
    installation: 'Incluido en Chrome',
    popular: true
  },
  {
    id: 'npm',
    name: 'npm',
    category: 'Gestor de Paquetes',
    description: 'Gestor de paquetes de Node.js',
    icon: <Package className="tool-icon" />,
    color: '#CB3837',
    features: [
      'Instalación de dependencias',
      'Scripts personalizados',
      'Gestión de versiones',
      'Publicación de paquetes',
      'Repositorio global'
    ],
    installation: 'Incluido con Node.js',
    popular: true
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Control de Versiones',
    description: 'Sistema de control de versiones',
    icon: <GitBranch className="tool-icon" />,
    color: '#F05032',
    features: [
      'Control de versiones',
      'Ramas y fusiones',
      'Colaboración',
      'Historial completo',
      'Backup distribuido'
    ],
    installation: 'Descargar desde git-scm.com',
    popular: true
  }
];

const ToolsShowcase: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(tools.map(tool => tool.category)))];
  
  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const openToolDetails = (tool: Tool) => {
    setSelectedTool(tool);
    document.body.classList.add('modal-open');
  };

  const closeToolDetails = () => {
    setSelectedTool(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="tools-showcase">
      <div className="showcase-header">
        <h2>Herramientas Esenciales para Desarrolladores</h2>
        <p>Explora las herramientas que todo desarrollador frontend debe conocer</p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'Todas' : category}
          </button>
        ))}
      </div>

      <div className="tools-grid">
        {filteredTools.map((tool, index) => (
          <div
            key={tool.id}
            className={`tool-card ${hoveredTool === tool.id ? 'hovered' : ''} ${tool.popular ? 'popular' : ''}`}
            style={{ 
              '--tool-color': tool.color,
              animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
            onMouseEnter={() => setHoveredTool(tool.id)}
            onMouseLeave={() => setHoveredTool(null)}
            onClick={() => openToolDetails(tool)}
          >
            {tool.popular && (
              <div className="popular-badge">
                <Star className="star-icon" />
                Popular
              </div>
            )}
            
            <div className="tool-header">
              <div className="tool-icon-container" style={{ backgroundColor: tool.color }}>
                {tool.icon}
              </div>
              <div className="tool-info">
                <h3>{tool.name}</h3>
                <span className="tool-category">{tool.category}</span>
              </div>
            </div>

            <div className="tool-description">
              <p>{tool.description}</p>
            </div>

            <div className="tool-features">
              <h4>Características principales:</h4>
              <ul>
                {tool.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
                {tool.features.length > 3 && (
                  <li className="more-features">+{tool.features.length - 3} más...</li>
                )}
              </ul>
            </div>

            <div className="tool-actions">
              <button 
                className="install-btn" 
                style={{ backgroundColor: tool.color }}
                onClick={(e) => {
                  e.stopPropagation();
                  openToolDetails(tool);
                }}
              >
                <Download />
                Instalar
              </button>
              <button 
                className="learn-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  openToolDetails(tool);
                }}
              >
                <Play />
                Aprender
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTool && createPortal(
        <div className="tool-modal-overlay" onClick={closeToolDetails}>
          <div className="tool-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon" style={{ backgroundColor: selectedTool.color }}>
                {selectedTool.icon}
              </div>
              <div className="modal-title">
                <h2>{selectedTool.name}</h2>
                <span className="modal-category">{selectedTool.category}</span>
              </div>
              <button className="close-btn" onClick={closeToolDetails}>×</button>
            </div>

            <div className="modal-content">
              <div className="modal-description">
                <p>{selectedTool.description}</p>
              </div>

              <div className="modal-features">
                <h3>Características completas:</h3>
                <ul>
                  {selectedTool.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-bullet" style={{ backgroundColor: selectedTool.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-installation">
                <h3>Instalación:</h3>
                <div className="installation-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Descargar</h4>
                      <p>{selectedTool.installation}</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Configurar</h4>
                      <p>Configurar extensiones y preferencias</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Usar</h4>
                      <p>¡Comienza a desarrollar!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="modal-install-btn" style={{ backgroundColor: selectedTool.color }}>
                <Download />
                Instalar Ahora
              </button>
              <button className="modal-learn-btn">
                <Play />
                Ver Tutorial
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ToolsShowcase;
