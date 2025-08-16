
import type { User, StudentData } from '../types';
import { Role } from '../types';

export const mockUsers: Record<Role, User> = {
  [Role.STUDENT]: {
    id: 'S12345',
    name: 'Budi Hartono',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/student/100/100',
  },
  [Role.TEACHER]: {
    id: 'T67890',
    name: 'Siti Aminah',
    role: Role.TEACHER,
    avatar: 'https://picsum.photos/seed/teacher/100/100',
  },
  [Role.ADMIN]: {
    id: 'A00001',
    name: 'Agus Setiawan',
    role: Role.ADMIN,
    avatar: 'https://picsum.photos/seed/admin/100/100',
  },
};

export const mockStudentData: StudentData = {
    grades: [
        { subject: 'Mathematics', semester: 1, score: 85 },
        { subject: 'Science', semester: 1, score: 92 },
        { subject: 'History', semester: 1, score: 78 },
        { subject: 'English', semester: 1, score: 88 },
        { subject: 'Mathematics', semester: 2, score: 90 },
        { subject: 'Science', semester: 2, score: 89 },
        { subject: 'History', semester: 2, score: 82 },
        { subject: 'English', semester: 2, score: 91 },
    ],
    attendance: [
        { date: '2023-10-02', status: 'Present' },
        { date: '2023-10-03', status: 'Present' },
        { date: '2023-10-04', status: 'Late' },
        { date: '2023-10-05', status: 'Present' },
        { date: '2023-10-06', status: 'Absent' },
    ],
    payments: [
        { id: 'SPP-OCT', description: 'SPP October 2023', amount: 500000, dueDate: '2023-10-10', status: 'Paid' },
        { id: 'SPP-NOV', description: 'SPP November 2023', amount: 500000, dueDate: '2023-11-10', status: 'Paid' },
        { id: 'BOOK-FEE', description: 'Book Fee 2023/2024', amount: 750000, dueDate: '2023-09-15', status: 'Paid' },
        { id: 'SPP-DEC', description: 'SPP December 2023', amount: 500000, dueDate: '2023-12-10', status: 'Unpaid' },
    ]
};

export const mockTeacherData = {
  classes: [
    { id: 'C10A', name: 'Class 10-A', subject: 'Mathematics', studentCount: 32 },
    { id: 'C11B', name: 'Class 11-B', subject: 'Mathematics', studentCount: 30 },
  ],
  notifications: [
    "Parent-teacher meetings are scheduled for next week.",
    "Mid-term grade submission deadline is this Friday.",
    "School-wide assembly on Monday at 8 AM.",
  ]
};

export const mockAdminData = {
  stats: {
    totalStudents: 850,
    totalTeachers: 52,
    totalRevenue: 'Rp 4,250,000,000',
    pendingPayments: 45,
  },
  auditLog: [
    { timestamp: '2023-11-20 10:05:12', user: 'Agus Setiawan', action: 'Updated payment status for S12345' },
    { timestamp: '2023-11-20 09:30:01', user: 'Siti Aminah', action: 'Input grades for Class 10-A' },
    { timestamp: '2023-11-19 15:22:45', user: 'System', action: 'Generated monthly financial report' },
  ]
}
