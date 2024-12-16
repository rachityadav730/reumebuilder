import React from 'react';

const TabHeader = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mb-8">
      <div className="border border-gray-200 rounded-lg p-1 bg-gray-50">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`
                flex-1 px-4 py-2 text-sm font-medium rounded-md
                transition-colors duration-150 ease-in-out
                ${index === activeTab
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabHeader;