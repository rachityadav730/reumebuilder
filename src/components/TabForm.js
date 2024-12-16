import React, { useState } from 'react';
import TabHeader from './TabHeader';
import PersonalInfoTab from './tabs/PersonalInfoTab';
import AddressTab from './tabs/AddressTab';
import AccountTab from './tabs/AccountTab';
import NavigationButtons from './NavigationButtons';
import EducationTab from './tabs/EducationTab'
import SkillsTab from './tabs/SkillsTab'


const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      phone: '',
      email: '',
      linkedin: '',
      github: ''
    },
    educationInfo: {
        college_university: '',
        degree: '',
        graduation_date: ''
    },
    addresses: [],
    projects: [],
    account: {
      username: '',
      password: '',
      confirmPassword: ''
    },
    SkillsInfo: {
        technical_skills: '',
        certificates: ''
    },
  });

  const tabs = [
    { id: 1, title: 'Personal Info' },
    { id: 2, title: 'Education' },
    { id: 3, title: 'Experience' },
    { id: 4, title: 'Project' },
    { id: 5, title: 'Skills' }
  ];

  const handleNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <PersonalInfoTab
            formData={formData.personalInfo}
            setFormData={setFormData}
          />
        );
      case 1:
            return (
              <EducationTab
                formData={formData.educationInfo}
                setFormData={setFormData}
              />
            );  
      case 2:
        return (
          <AddressTab
            addresses={formData.addresses}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <AccountTab
            projects={formData.projects}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <SkillsTab
            formData={formData.account}
            setFormData={setFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
       <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
        <p className="text-gray-600 mt-2">
          Create your professional resume step by step
        </p>
      </header>
      <TabHeader tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderTabContent()}
        
        <NavigationButtons
          activeTab={activeTab}
          totalTabs={tabs.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </form>
    </div>
  );
};

export default TabForm;