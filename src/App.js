import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Model } from './Model';
import { Navbar } from './Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/test" element={<Model />} />
            </Routes>
        </BrowserRouter> 
    );
}   

export default App;
