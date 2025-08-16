
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Role } from '../types';
import Icons from '../components/common/Icons';
import { SCHOOL_NAME } from '../constants';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Role>(Role.STUDENT);
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(activeTab);
  };
  
  const getTabClass = (role: Role) =>
    `w-full py-3 text-center font-semibold rounded-t-lg focus:outline-none transition-colors duration-300 ${
      activeTab === role ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
    }`;

  const getInputBorderClass = () => {
      switch(activeTab) {
          case Role.STUDENT: return 'focus:ring-blue-500 focus:border-blue-500';
          case Role.TEACHER: return 'focus:ring-green-500 focus:border-green-500';
          case Role.ADMIN: return 'focus:ring-purple-500 focus:border-purple-500';
      }
  }

  const getButtonClass = () => {
    switch(activeTab) {
        case Role.STUDENT: return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
        case Role.TEACHER: return 'bg-green-600 hover:bg-green-700 focus:ring-green-500';
        case Role.ADMIN: return 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500';
    }
}


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full mx-auto">
        <div className="flex justify-center items-center mb-6">
            <Icons name="logo" className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">{SCHOOL_NAME}</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex">
            <button onClick={() => setActiveTab(Role.STUDENT)} className={getTabClass(Role.STUDENT)}>Student</button>
            <button onClick={() => setActiveTab(Role.TEACHER)} className={getTabClass(Role.TEACHER)}>Teacher</button>
            <button onClick={() => setActiveTab(Role.ADMIN)} className={getTabClass(Role.ADMIN)}>Admin</button>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Welcome Back!</h2>
            <p className="text-center text-gray-500 mb-8">Login as a {activeTab}</p>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="id" className="text-sm font-medium text-gray-700 sr-only">ID</label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  className={`block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${getInputBorderClass()}`}
                  placeholder={activeTab === Role.STUDENT ? 'Student ID (NIS)' : (activeTab === Role.TEACHER ? 'Teacher ID (NIP)' : 'Admin Email')}
                  required
                />
              </div>
              <div>
                <label htmlFor="password"className="text-sm font-medium text-gray-700 sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${getInputBorderClass()}`}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
                {activeTab !== Role.STUDENT && (
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                  </div>
                )}
              </div>
              <div>
                <button type="submit" className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${getButtonClass()} focus:outline-none focus:ring-2 focus:ring-offset-2`}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
