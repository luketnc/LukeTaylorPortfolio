import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    const { pathname } = useLocation();

    // Tag the body with the current route so the ambient light layer can differ per page.
    useEffect(() => {
        const route = pathname.startsWith('/projects') ? 'projects'
            : pathname.startsWith('/contact') ? 'contact'
            : 'home';
        document.body.dataset.route = route;
    }, [pathname]);

    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
