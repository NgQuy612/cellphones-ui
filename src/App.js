import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Mac from './pages/Mac';
import Contact from './pages/Contact';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/iphone"
                        element={
                            <DefaultLayout>
                                <Iphone />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/ipad"
                        element={
                            <DefaultLayout>
                                <Ipad />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/mac"
                        element={
                            <DefaultLayout>
                                <Mac />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <DefaultLayout>
                                <Contact />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
