import React from 'react';

function Hero() {
  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center rounded-4 border shadow-lg bg-white">
        
        {/* Left Content: Phone Details */}
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 mb-3 text-primary" style={{ color: '#6f42c1' }}>
            iPhone 15 Pro
          </h1>
          <p className="lead mb-4 text-secondary">
            Forged in titanium. Powered by the A17 Pro chip. Featuring a customizable 
            Action button and a more versatile Pro camera system.
          </p>
          
          <div className="row mb-4">
            <div className="col-6 mb-3">
              <h6 className="fw-bold mb-0">Processor</h6>
              <small className="text-muted">A17 Pro Chip</small>
            </div>
            <div className="col-6 mb-3">
              <h6 className="fw-bold mb-0">Camera</h6>
              <small className="text-muted">48MP Main | Ultra Wide</small>
            </div>
            <div className="col-6">
              <h6 className="fw-bold mb-0">Display</h6>
              <small className="text-muted">6.1" Super Retina XDR</small>
            </div>
            <div className="col-6">
              <h6 className="fw-bold mb-0">Battery</h6>
              <small className="text-muted">Up to 23 hrs Video Playback</small>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" style={{ backgroundColor: '#6f42c1', border: 'none' }}>
              Pre-order Now
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Specifications
            </button>
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="col-lg-5 p-0 overflow-hidden">
          <img 
            className="rounded-4 img-fluid" 
            src="https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop" 
            alt="iPhone 15 Pro Display" 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;