const fs = require('fs');
const { exec } = require('child_process');

// Función para generar PDF desde markdown
function generatePDF() {
  console.log('🔄 Generando PDF del Plan de Clases...');
  
  // Verificar si pandoc está instalado
  exec('pandoc --version', (error, stdout, stderr) => {
    if (error) {
      console.log('❌ Pandoc no está instalado. Instalando alternativas...');
      installAlternatives();
      return;
    }
    
    // Generar PDF con pandoc
    const command = `pandoc PLAN_DE_CLASES_VIRTUAL.md -o PLAN_DE_CLASES_VIRTUAL.pdf --pdf-engine=wkhtmltopdf --css=styles.css`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log('❌ Error generando PDF con pandoc:', error.message);
        installAlternatives();
        return;
      }
      
      console.log('✅ PDF generado exitosamente: PLAN_DE_CLASES_VIRTUAL.pdf');
    });
  });
}

// Función para instalar alternativas
function installAlternatives() {
  console.log('📋 Instrucciones para generar PDF:');
  console.log('');
  console.log('Opción 1 - Instalar Pandoc:');
  console.log('  macOS: brew install pandoc');
  console.log('  Windows: choco install pandoc');
  console.log('  Linux: sudo apt-get install pandoc');
  console.log('');
  console.log('Opción 2 - Usar herramientas online:');
  console.log('  1. Copiar contenido de PLAN_DE_CLASES_VIRTUAL.md');
  console.log('  2. Ir a https://www.markdowntopdf.com/');
  console.log('  3. Pegar contenido y generar PDF');
  console.log('');
  console.log('Opción 3 - Usar VS Code:');
  console.log('  1. Instalar extensión "Markdown PDF"');
  console.log('  2. Abrir PLAN_DE_CLASES_VIRTUAL.md');
  console.log('  3. Ctrl+Shift+P > "Markdown PDF: Export (pdf)"');
  console.log('');
  console.log('Opción 4 - Usar navegador:');
  console.log('  1. Abrir PLAN_DE_CLASES_VIRTUAL.md en VS Code');
  console.log('  2. Ctrl+Shift+V para preview');
  console.log('  3. Imprimir como PDF desde el navegador');
}

// Ejecutar función
generatePDF();
