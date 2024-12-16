import React from 'react';
import FormInput from '../common/FormInput';

const PersonalInfoTab = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Full Name"
        id="firstName"
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
        placeholder="Enter your first name"
      />
      <FormInput
        label="Phone"
        id="phone"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        placeholder="Enter your phone number"
      />
      <FormInput
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="Enter your email address"
      />
      <FormInput
        label="LinkedIn"
        id="linkedin"
        value={formData.linkedin}
        onChange={(e) => handleChange('linkedin', e.target.value)}
        placeholder="Enter your linkedin account"
      />
      <FormInput
        label="GitHub"
        type="github"
        value={formData.github}
        onChange={(e) => handleChange('github', e.target.value)}
        placeholder="Enter your github account"
      />
    </div>
  );
};

export default PersonalInfoTab;