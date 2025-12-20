import type { ReactNode } from 'react';


import AdminNavbar from '../../components/navigation/AdminNavbar.tsx';

export default function AdminLayout({ children}: { children: ReactNode }) {
    return (
        <AdminNavbar>
            {children}
        </AdminNavbar>
    );
}