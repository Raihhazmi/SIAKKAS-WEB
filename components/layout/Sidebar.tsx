
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { SIDEBAR_LINKS, SCHOOL_NAME } from '../../constants';
import Icons from '../common/Icons';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const links = SIDEBAR_LINKS[user.role];

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 z-40 transition-transform duration-300 ease-in-out`}>
      <div className="flex flex-col h-full w-64 bg-gray-800 text-white">
        <div className="flex items-center justify-center h-20 shadow-md">
           <Icons name="logo" className="h-8 w-8 text-blue-400 mr-2" />
           <h1 className="text-2xl font-semibold">{SCHOOL_NAME}</h1>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.path}`}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                location.pathname === link.path
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Icons name={link.icon} className="mr-3 h-6 w-6" />
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
