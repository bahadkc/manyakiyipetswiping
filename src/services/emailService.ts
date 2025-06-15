interface FormSubmission {
  name: string;
  businessType: string;
  businessName: string;
  petTypes: string[];
  city: string;
  district: string;
}

const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return false;
  }
};

const showNotification = (formData: FormSubmission) => {
  const notification = new Notification('New Partner Application', {
    body: `${formData.businessName} (${formData.businessType}) from ${formData.city}, ${formData.district}`,
    icon: '/logo192.png', // You can add your logo here
    tag: 'partner-application',
    requireInteraction: true,
  });

  notification.onclick = () => {
    window.focus();
    notification.close();
  };
};

export const submitPartnerForm = async (formData: FormSubmission): Promise<boolean> => {
  try {
    // Request notification permission if not already granted
    const hasPermission = await requestNotificationPermission();
    
    if (hasPermission) {
      showNotification(formData);
    }

    // Log the submission to console for backup
    console.log('New partner application:', {
      ...formData,
      submittedAt: new Date().toISOString()
    });

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}; 