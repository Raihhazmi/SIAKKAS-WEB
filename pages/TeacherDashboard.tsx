
import React from 'react';
import Card from '../components/common/Card';
import { mockTeacherData } from '../data/mockData';
import Icons from '../components/common/Icons';

const TeacherDashboard: React.FC = () => {
  const { classes, notifications } = mockTeacherData;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Classes">
            <p className="text-5xl font-bold text-green-600">{classes.length}</p>
        </Card>
        <Card title="Total Students">
            <p className="text-5xl font-bold text-green-600">{classes.reduce((sum, c) => sum + c.studentCount, 0)}</p>
        </Card>
        <Card title="Urgent Notifications">
            <p className="text-5xl font-bold text-red-600">{notifications.length}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="My Classes">
          <div className="space-y-4">
            {classes.map(c => (
              <div key={c.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-bold text-lg text-gray-800">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.subject}</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold text-gray-700">{c.studentCount} Students</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Important Notifications">
           <ul className="space-y-3">
            {notifications.map((note, index) => (
              <li key={index} className="flex items-start p-3 bg-yellow-50 rounded-md">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
