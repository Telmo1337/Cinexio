import type { ReactNode } from 'react';


import PublicNavbar from '../../components/navigation/PublicNavbar.tsx';

export default function PublicLayout({ children}: { children: ReactNode }) {
    return (
        <PublicNavbar>
            {children}
        </PublicNavbar>
    );
}