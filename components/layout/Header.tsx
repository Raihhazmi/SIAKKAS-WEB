
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Icons from '../common/Icons';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
                onClick={toggleSidebar}
                className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
                >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900 ml-4 lg:ml-0">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
                <span className="hidden md:inline text-gray-600 mr-3">{user?.name}</span>
                <img className="h-10 w-10 rounded-full" src={user?.avatar} alt="User avatar" />
              <button
                onClick={logout}
                className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">Log out</span>
                <Icons name="logout" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
