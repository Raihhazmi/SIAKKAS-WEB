
import React from 'react';
import Card from '../components/common/Card';
import { mockAdminData } from '../data/mockData';
import Icons from '../components/common/Icons';

const AdminDashboard: React.FC = () => {
    const { stats, auditLog } = mockAdminData;
    
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Students">
            <div className="flex items-center">
                <Icons name="users" className="h-8 w-8 text-purple-500 mr-4"/>
                <p className="text-4xl font-bold text-purple-600">{stats.totalStudents}</p>
            </div>
        </Card>
        <Card title="Total Teachers">
            <div className="flex items-center">
                <Icons name="classes" className="h-8 w-8 text-purple-500 mr-4"/>
                <p className="text-4xl font-bold text-purple-600">{stats.totalTeachers}</p>
            </div>
        </Card>
        <Card title="Total Revenue">
            <div className="flex items-center">
                <Icons name="payments" className="h-8 w-8 text-purple-500 mr-4"/>
                <p className="text-3xl font-bold text-purple-600">{stats.totalRevenue}</p>
            </div>
        </Card>
        <Card title="Pending Payments">
            <div className="flex items-center">
                <Icons name="reports" className="h-8 w-8 text-purple-500 mr-4"/>
                <p className="text-4xl font-bold text-purple-600">{stats.pendingPayments}</p>
            </div>
        </Card>
      </div>

      <div className="grid grid-cols-1">
        <Card title="Recent Audit Log">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {auditLog.map((log, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.user}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
