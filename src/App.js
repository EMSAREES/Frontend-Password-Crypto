
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordForm from './pages/PasswordForm.jsx';
import PasswordEncriptForm from './pages/PasswordEncriptForm.jsx';

function App() {
  return (
      <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Gestor de Contraseñas
      </h1>
      <div>
        <PasswordForm />
      </div>
      
      <div>
        <PasswordEncriptForm />
      </div>
    </div>
  );
}



export default App;
