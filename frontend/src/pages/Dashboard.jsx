import React, { useState, useEffect } from 'react';
import { taskService } from '../services/auth';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import TaskForm from './TaskForm';
import Alert from '../components/Alert';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth(); // Get logged in user
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const isAdmin = user?.role === 'admin'; // Check if admin

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskService.getAll();
      if (response.success) {
        setTasks(response.data);
      }
    } catch (error) {
      setAlert({ message: 'Failed to load tasks', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await taskService.create(taskData);
      if (response.success) {
        setTasks([response.data, ...tasks]);
        setShowForm(false);
        setAlert({ message: 'Task created successfully!', type: 'success' });
        setTimeout(() => setAlert({ message: '', type: '' }), 3000);
      }
    } catch (error) {
      setAlert({ message: 'Failed to create task', type: 'error' });
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const response = await taskService.update(editingTask._id, taskData);
      if (response.success) {
        setTasks(tasks.map(task => 
          task._id === editingTask._id ? response.data : task
        ));
        setEditingTask(null);
        setShowForm(false);
        setAlert({ message: 'Task updated successfully!', type: 'success' });
        setTimeout(() => setAlert({ message: '', type: '' }), 3000);
      }
    } catch (error) {
      setAlert({ message: 'Failed to update task', type: 'error' });
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      const response = await taskService.delete(taskId);
      if (response.success) {
        setTasks(tasks.filter(task => task._id !== taskId));
        setAlert({ message: 'Task deleted successfully!', type: 'success' });
        setTimeout(() => setAlert({ message: '', type: '' }), 3000);
      }
    } catch (error) {
      setAlert({ message: 'Failed to delete task', type: 'error' });
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          {/* Different title for Admin vs Member */}
          <h2 className="text-2xl font-bold text-gray-800">
            {isAdmin ? '📊 Admin Dashboard - All Tasks' : '📝 My Tasks'}
          </h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            + New Task
          </button>
        </div>

        {/* Admin info banner */}
        {isAdmin && (
          <div className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded mb-4">
            🔐 Admin Mode: You can see and delete all users' tasks
          </div>
        )}

        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ message: '', type: '' })}
        />

        {showForm && (
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            onClose={handleCloseForm}
            initialData={editingTask}
          />
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading tasks...</div>
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No tasks yet. Create your first task!</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDeleteTask}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;