import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RegisterPage from "./components/pages/register_page";
import LoginPage from "./components/pages/login_page";
import MainPage from "./components/pages/main_page";
import AnimationCreationPage from "./components/pages/animation_creation_page";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={''}/>
                    <Route path="/main/*" element={<MainPage/>}/>
                    <Route path={'/reg'} element={<RegisterPage/>}/>
                    <Route path={'/log'} element={<LoginPage/>}/>
                    <Route path={'/animation_creation'} element={<AnimationCreationPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
