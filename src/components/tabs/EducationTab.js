import React from 'react';
import FormInput from '../common/FormInput';

const EducationTab = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      educationInfo: {
        ...prev.educationInfo,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="College/University"
        id="college_university"
        value={formData.college_university}
        onChange={(e) => handleChange('college_university', e.target.value)}
        placeholder="Enter your college name"
      />
      <FormInput
        label="Degree"
        id="degree"
        value={formData.degree}
        onChange={(e) => handleChange('degree', e.target.value)}
        placeholder="Enter your degree"
      />
      <FormInput
        label="Graduation Date"
        id="graduation_date"
        value={formData.graduation_date}
        onChange={(e) => handleChange('graduation_date', e.target.value)}
        placeholder="Enter your graduation date"
      />
    </div>
  );
};

export default EducationTab;