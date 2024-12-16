import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import FormInput from '../common/FormInput';

const AddressTab = ({ addresses, setFormData }) => {
  const addAddress = () => {
    setFormData(prev => ({
      ...prev,
      addresses: [
        ...prev.addresses,
        { id: Date.now(), company: '', position: '', duration: '', responsibilities: '' }
      ]
    }));
  };

  const removeAddress = (addressId) => {
    setFormData(prev => ({
      ...prev,
      addresses: prev.addresses.filter(addr => addr.id !== addressId)
    }));
  };

  const updateAddress = (addressId, field, value) => {
    setFormData(prev => ({
      ...prev,
      addresses: prev.addresses.map(addr =>
        addr.id === addressId ? { ...addr, [field]: value } : addr
      )
    }));
  };

  return (
    <div className="space-y-6">
      {addresses.map((address, index) => (
        <div key={address.id} className="p-4 border rounded-lg relative">
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => removeAddress(address.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
          
          <h3 className="font-medium mb-4">Experience {index + 1}</h3>

          <div className="space-y-4">
            <FormInput
              label="Company"
              id={`company-${address.id}`}
              value={address.company}
              onChange={(e) => updateAddress(address.id, 'company', e.target.value)}
              placeholder="Enter company name"
            />
            <FormInput
              label="Position"
              id={`position-${address.id}`}
              value={address.position}
              onChange={(e) => updateAddress(address.id, 'position', e.target.value)}
              placeholder="Enter position"
            />
            <FormInput
              label="Duration"
              id={`duration-${address.id}`}
              value={address.duration}
              onChange={(e) => updateAddress(address.id, 'duration', e.target.value)}
              placeholder="Enter duration"
            />
            <FormInput
              label="Responsibilities"
              id={`responsibilities-${address.id}`}
              value={address.responsibilities}
              onChange={(e) => updateAddress(address.id, 'responsibilities', e.target.value)}
              placeholder="Enter responsibilities"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addAddress}
        className="w-full py-3 border-2 border-dashed border-blue-300 rounded-lg
          text-blue-500 hover:border-blue-500 hover:text-blue-700
          flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add New Experience
      </button>
    </div>
  );
};

export default AddressTab;