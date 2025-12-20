import type { ReactNode } from 'react';


import UserNavbar from '../../components/navigation/UserNavbar.tsx';

export default function UserLayout({ children}: { children: ReactNode }) {
    return (
        <UserNavbar>
            {children}
        </UserNavbar>
    );
}