import { Outlet } from 'react-router';
import CustomNavbar from '../components/CustomNavbar';
import Loader from '../components/Loader';
import { useContext } from 'react';
import GlobalContext from '../contexts/globalContext';

export default function DefaultLayout() {
    const { isLoading } = useContext(GlobalContext);

    return (
        <>
            <header>
                <CustomNavbar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            {isLoading && <Loader />}
        </>
    );
}
