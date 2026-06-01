import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, isAdmin }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {task.title}
        </h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      
      {task.description && (
        <p className="text-gray-600 text-sm mb-3">
          {task.description}
        </p>
      )}
      
      {/* Show creator info for Admin */}
      {isAdmin && task.createdBy && (
        <div className="text-xs text-purple-600 mb-2">
          👤 Created by: {task.createdBy.name || task.createdBy.email}
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500 hover:text-red-700 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;