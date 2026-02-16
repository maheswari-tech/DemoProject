import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer'; // Capital 'F' use pannunga
import Reviews from './components/Reviews';

function App() {
  return (
    /* flex-column and min-vh-100 makes sure footer stays at the bottom */
    <div className="d-flex flex-column min-vh-100">
      
      {/* 1. Navigation Bar */}
      <Navbar />
      
      {/* 2. Hero Section (iPhone 15 Pro Details) */}
      <main className="flex-grow-1">
        <Hero />

         {/* Reviews Section */}
        <div className="container mt-4">
          <Reviews />   {/* ⬅️ Reviews component added here */}
        </div>
        
        {/* Future-la vera content venum na inga add pannalam */}
        <div className="container mt-4">
          {/* Example: <ProductList /> */}
        </div>
      </main>

      {/* 3. Footer Section (Oru thadava render panna pothum) */}
      <Footer />
      
    </div>
  );
}

export default App;