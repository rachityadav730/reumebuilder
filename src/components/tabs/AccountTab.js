import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import FormInput from '../common/FormInput';

const AccountTab = ({ projects, setFormData }) => {
    console.log("chchchchc",projects)
  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        { id: Date.now(), project_name: '', description: '' }
      ]
    }));
  };

  const removeProject = (projectsId) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(addr => addr.id !== projectsId)
    }));
  };

  const updateProject = (projectsId, field, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(addr =>
        addr.id === projectsId ? { ...addr, [field]: value } : addr
      )
    }));
  };

  return (
    <div className="space-y-6">
      {projects.map((projects, index) => (
        <div key={projects.id} className="p-4 border rounded-lg relative">
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => removeProject(projects.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
          
          <h3 className="font-medium mb-4">Project {index + 1}</h3>

          <div className="space-y-4">
            <FormInput
              label="Project Name"
              id={`project_name-${projects.id}`}
              value={projects.project_name}
              onChange={(e) => updateProject(projects.id, 'project_name', e.target.value)}
              placeholder="Enter Project Name"
            />
            <FormInput
              label="Description"
              id={`description-${projects.id}`}
              value={projects.description}
              onChange={(e) => updateProject(projects.id, 'description', e.target.value)}
              placeholder="Enter Description"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addProject}
        className="w-full py-3 border-2 border-dashed border-blue-300 rounded-lg
          text-blue-500 hover:border-blue-500 hover:text-blue-700
          flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add New Project
      </button>
    </div>
  );
};

export default AccountTab;