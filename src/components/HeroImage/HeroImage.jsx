import './HeroImage.css';

const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <div className="hero-image-wrapper">
        <img 
          src="src/assets/homologo.gif" 
          alt="Digital Transformation"
          className="animated-hero-image" 
        />
       
      </div>
    </div>
  );
};

export default HeroImage;
