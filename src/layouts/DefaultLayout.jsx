import { Outlet } from 'react-router';
import CustomNavbar from '../components/CustomNavbar';

export default function DefaultLayout() {
    return (
        <>
            <header>
                <CustomNavbar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}
