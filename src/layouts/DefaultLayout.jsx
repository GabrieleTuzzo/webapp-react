import { Outlet } from 'react-router';

export default function DefaultLayout() {
    return (
        <>
            <header>Hello Layout</header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}
