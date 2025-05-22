import schoolData from './schooolmanagement';

const productInfo = {
  ...schoolData,
  mobile: {
    title: 'Mobile Application Development',
    description: 'Custom mobile solutions for both Android and iOS platforms',
    features: [
      'Native App Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'API Integration',
      'Push Notifications',
      'Analytics Integration'
    ],
    // ...existing mobile data...
  },
  billing: {
    title: 'Billing Software',
    description: 'Advanced billing and invoicing solution designed for businesses of all sizes',
    features: [
      'Invoice Generation & Customization',
      'GST Compliance & Tax Calculations',
      // ...existing billing data...
    ],
    // ...existing billing data...
  }
};

export default productInfo;
