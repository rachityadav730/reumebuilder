import React from 'react';

const FormInput = ({ label, id, type = 'text', value, onChange, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1 text-left"
        >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
};

export default FormInput;