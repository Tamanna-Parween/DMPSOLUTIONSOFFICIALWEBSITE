import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  const handleViewMore = (serviceId) => {
    window.location.hash = serviceId;
  };

  return (
    <section id="services" className="services">
      <h2>Solutions We Offer</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard 
            key={service.id}
            service={service}
            onViewMore={handleViewMore}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
