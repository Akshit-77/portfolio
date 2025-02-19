import React from 'react';
import './Resume.css';

const Resume = () => {
  // Update the PDF file path to match your resume filename
  const resumePDFPath = '/assets/resume.pdf';

  return (
    <div className="resume">
      <h1 className="section-title">Resume</h1>
      
      <div className="resume-content">
        {/* PDF Viewer */}
        <div className="pdf-container">
          <iframe
            src={resumePDFPath}
            title="Resume PDF"
            className="pdf-viewer"
          />
        </div>

        <div className="resume-actions">
          <a 
            href={resumePDFPath}
            download="YourName_Resume.pdf"
            className="download-button"
          >
            Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume; 