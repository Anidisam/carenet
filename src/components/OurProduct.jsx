import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ourproduct.css";

// Import images directly
import telemedicineImg from "../assets/images/telemedecine.jpg";
import medicalResourcesImg from "../assets/images/medical-resources 2.jpg";
import networkingImg from "../assets/images/networking.jpg";
import aiSymptomCheckerImg from "../assets/images/AI-Powered.png";
import pharmacyImg from "../assets/images/pharmacy-blogg.jpg";

const OurProduct = () => {
  const navigate = useNavigate();

  return (
    <section className="our-product">
      <h2>Our Products & Services</h2>
      <p>
        Explore the powerful features that make Carenet a trusted healthcare
        platform.
      </p>

      <div className="product-grid">
        {/* Product 1 */}
        <div className="product-item">
          <img
            src={telemedicineImg}
            alt="Telemedicine"
            className="product-image"
          />
          <h2>Telemedicine Services</h2>
          <p>
            Connect with doctors online for quick and professional medical
            advice.
          </p>
        </div>

        {/* Product 2 */}
        <div className="product-item">
          <img
            src={medicalResourcesImg}
            alt="Medical Resources"
            className="product-image"
          />
          <h2>Medical Resources</h2>
          <p>
            Access high-quality medical articles, courses, and training
            materials.
          </p>
        </div>

        {/* Product 3 */}
        <div className="product-item">
          <img src={networkingImg} alt="Networking" className="product-image" />
          <h2>Healthcare Networking</h2>
          <p>
            Connect with professionals to discuss cases, research, and
            opportunities.
          </p>
        </div>

        {/* Product 4 */}
        <div className="product-item">
          <img
            src={aiSymptomCheckerImg}
            alt="AI Symptom Checker"
            className="product-image"
          />
          <h2>AI Symptom Checker</h2>
          <p>Get AI-powered health advice based on your symptoms.</p>
        </div>

        {/* Product 5 */}
        <div className="product-item">
          <img src={pharmacyImg} alt="Pharmacy" className="product-image" />
          <h2>Online Pharmacy</h2>
          <p>
            Order medicines and track prescriptions from trusted pharmacies.
          </p>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="back-home-btn">
        ← Back to Home
      </button>
    </section>
  );
};

export default OurProduct;
