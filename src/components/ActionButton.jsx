import React from 'react';

const ActionButton = () => {
  return (
    <div className="fixed bottom-10 right-10 space-y-4">
      <button className="bg-pink-500 p-4 rounded-full shadow-lg">
        <span className="material-icons text-white">add</span>
      </button>
      <button className="bg-blue-500 p-4 rounded-full shadow-lg">
        <span className="material-icons text-white">edit</span>
      </button>
    </div>
  );
};

export default ActionButton;
