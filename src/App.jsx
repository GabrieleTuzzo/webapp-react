import { BrowserRouter, Route, Routes } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/detail/:id" element={<Detail />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
