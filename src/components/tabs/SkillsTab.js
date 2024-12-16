import React from 'react';
import FormInput from '../common/FormInput';

const SkillsTab = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      SkillsInfo: {
        ...prev.SkillsInfo,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Technical Skills"
        id="technical_skills"
        value={formData.technical_skills}
        onChange={(e) => handleChange('technical_skills', e.target.value)}
        placeholder="Enter your Technical Skills"
      />
      <FormInput
        label="Certificates"
        id="certificates"
        value={formData.certificates}
        onChange={(e) => handleChange('certificates', e.target.value)}
        placeholder="Enter your certificates"
      />
    </div>
  );
};

export default SkillsTab;