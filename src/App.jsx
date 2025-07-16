import {Route, Routes, useLocation, useNavigate} from 'react-router';
import {Main} from "./Pages/Main/Main.jsx";
import {useEffect} from "react";
import './Styles/_fonts.scss'
import './Styles/_normalize.scss';

export default function App() {

    const goToPage = useNavigate();
    const location = useLocation();

    useEffect(() => {

        if (location.pathname === '/') {

            goToPage('/main');
        }
    }, []);

    return (

        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
        </Routes>
    )
}