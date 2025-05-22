import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleViewMore = (serviceId) => {
    switch(serviceId) {
      case 'web':
        navigate('/services/web-development');
        break;
      case 'erp':
        navigate('/services/erp');
        break;
      // Add more cases for other services
      default:
        navigate('/');
    }
  };

  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.shortDesc}</p>
      <button 
        className="view-more-btn"
        onClick={() => handleViewMore(service.id)}
      >
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
