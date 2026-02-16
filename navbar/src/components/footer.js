function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Company */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Help</a></li>
              <li><a href="#" className="text-white text-decoration-none">Support</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms</a></li>
              <li><a href="#" className="text-white text-decoration-none">Policy</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">About</h5>
            <p className="small">
              DemoProject footer using React and Bootstrap. Clean and responsive layout.
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          © 2026 DemoProject. All rights reserved.
        </div>


      </div>
    </footer>
  );
}

export default Footer;