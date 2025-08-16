
import React, { useState } from 'react';
import Card from '../components/common/Card';
import GradeChart from '../components/charts/GradeChart';
import { mockStudentData } from '../data/mockData';
import type { Payment, Attendance } from '../types';

const StudentDashboard: React.FC = () => {
  const { grades, attendance, payments } = mockStudentData;
  const [selectedSemester, setSelectedSemester] = useState(2);

  const getPaymentStatusColor = (status: Payment['status']) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Unpaid': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
    }
  };
  
  const getAttendanceStatusColor = (status: Attendance['status']) => {
    switch (status) {
      case 'Present': return 'bg-green-100 text-green-800';
      case 'Late': return 'bg-yellow-100 text-yellow-800';
      case 'Absent': return 'bg-red-100 text-red-800';
      case 'Excused': return 'bg-blue-100 text-blue-800';
    }
  };

  const currentGrades = grades.filter(g => g.semester === selectedSemester);
  const averageScore = currentGrades.length > 0 ? (currentGrades.reduce((acc, g) => acc + g.score, 0) / currentGrades.length).toFixed(1) : 'N/A';
  const attendanceSummary = {
      present: attendance.filter(a => a.status === 'Present').length,
      late: attendance.filter(a => a.status === 'Late').length,
      absent: attendance.filter(a => a.status === 'Absent').length,
  };

  return (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Average Score" className="text-center">
                <p className="text-5xl font-bold text-blue-600">{averageScore}</p>
                <p className="text-gray-500 mt-2">Semester {selectedSemester}</p>
            </Card>
            <Card title="Attendance (Last 5 Days)" className="text-center">
                <div className="flex justify-around items-center h-full">
                    <div><p className="text-3xl font-bold text-green-600">{attendanceSummary.present}</p><p className="text-sm text-gray-500">Present</p></div>
                    <div><p className="text-3xl font-bold text-yellow-600">{attendanceSummary.late}</p><p className="text-sm text-gray-500">Late</p></div>
                    <div><p className="text-3xl font-bold text-red-600">{attendanceSummary.absent}</p><p className="text-sm text-gray-500">Absent</p></div>
                </div>
            </Card>
            <Card title="Pending Payments">
                <p className="text-3xl font-bold text-red-600">{payments.filter(p => p.status !== 'Paid').length}</p>
                <p className="text-gray-500 mt-1">bills require attention</p>
            </Card>
             <Card title="Upcoming Due Date">
                <p className="text-2xl font-bold text-gray-800">{new Date(payments.find(p=>p.status ==='Unpaid')?.dueDate ?? '').toLocaleDateString('en-GB', {day: 'numeric', month:'short'})}</p>
                <p className="text-gray-500 mt-1">{payments.find(p=>p.status ==='Unpaid')?.description}</p>
            </Card>
        </div>

      <Card title="Academic Performance">
        <div className="flex justify-end mb-4">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value={1}>Semester 1</option>
            <option value={2}>Semester 2</option>
          </select>
        </div>
        <GradeChart data={grades} semester={selectedSemester} />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Payment Status">
          <ul className="space-y-3">
            {payments.map(payment => (
              <li key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium text-gray-800">{payment.description}</p>
                  <p className="text-sm text-gray-500">Due: {payment.dueDate}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(payment.status)}`}>{payment.status}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Recent Attendance">
          <ul className="space-y-3">
            {attendance.slice(0, 5).map(att => (
              <li key={att.date} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <p className="font-medium text-gray-800">{new Date(att.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getAttendanceStatusColor(att.status)}`}>{att.status}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
