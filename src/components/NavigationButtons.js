import React from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const NavigationButtons = ({ activeTab, totalTabs, onPrevious, onNext }) => {
  return (
    <div className="flex justify-between pt-4">
      <button
        type="button"
        onClick={onPrevious}
        disabled={activeTab === 0}
        className={`flex items-center px-4 py-2 rounded-md
          ${activeTab === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
          }`}
      >
        <ChevronLeft size={20} className="mr-1" />
        Previous
      </button>
      
      {activeTab === totalTabs - 1 ? (
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          Submit
          <Check size={20} className="ml-1" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          Next
          <ChevronRight size={20} className="ml-1" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;