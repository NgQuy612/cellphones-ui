import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Mac from './pages/Mac';
import Watch from './pages/Watch';
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
                        path="/watch"
                        element={
                            <DefaultLayout>
                                <Watch />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
