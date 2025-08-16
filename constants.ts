
import type { Role } from './types';

export const SCHOOL_NAME = "SIAKKAS High School";

export const SIDEBAR_LINKS: Record<Role, { name: string; path: string; icon: string }[]> = {
  student: [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Grades', path: '/grades', icon: 'grades' },
    { name: 'Attendance', path: '/attendance', icon: 'attendance' },
    { name: 'Payments', path: '/payments', icon: 'payments' },
  ],
  teacher: [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'My Classes', path: '/classes', icon: 'classes' },
    { name: 'Enter Grades', path: '/enter-grades', icon: 'grades' },
    { name: 'Take Attendance', path: '/take-attendance', icon: 'attendance' },
  ],
  admin: [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Manage Users', path: '/users', icon: 'users' },
    { name: 'Manage Payments', path: '/manage-payments', icon: 'payments' },
    { name: 'Reports', path: '/reports', icon: 'reports' },
    { name: 'Audit Log', path: '/audit-log', icon: 'audit' },
  ],
};
