
export enum Role {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar: string;
}

export interface Grade {
  subject: string;
  semester: number;
  score: number;
}

export interface Attendance {
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
}

export interface Payment {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Unpaid' | 'Overdue';
}

export interface StudentData {
    grades: Grade[];
    attendance: Attendance[];
    payments: Payment[];
}
