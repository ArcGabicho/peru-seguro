export interface User {
  id: string;
  email: string;
  name: string;
  lastname: string;
  role: 'admin' | 'member';
  createdAt: Date;
  isActive: boolean;
  phone?: string;
  avatarUrl?: string | File;
}