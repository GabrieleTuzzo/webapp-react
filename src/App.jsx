import { BrowserRouter, Route, Routes } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css';
import { useState } from 'react';
import GlobalContext from './contexts/globalContext';

function App() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route path=":id" element={<Detail />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
