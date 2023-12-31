import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Mac from './pages/Mac';
import Watch from './pages/Watch';
import DefaultLayout from './components/Layout/DefaultLayout';
import IphoneProduct from './pages/DetailProduct/IphoneProduct';
import IpadProduct from './pages/DetailProduct/IpadProduct';
import MacProduct from './pages/DetailProduct/MacProduct';
import WatchProduct from './pages/DetailProduct/WatchProduct';
import Admin from './components/Admin';
import DetailOrder from './components/Admin/DetailOrder';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/buy_product/:id" element={<DetailOrder />} />
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
                        path="/iphone/detail-iphone/:id"
                        element={
                            <DefaultLayout>
                                <IphoneProduct />
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
                        path="/ipad/detail-ipad/:id"
                        element={
                            <DefaultLayout>
                                <IpadProduct />
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
                        path="/mac/detail-mac/:id"
                        element={
                            <DefaultLayout>
                                <MacProduct />
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
                    />{' '}
                    <Route
                        path="/watch/detail-watch/:id"
                        element={
                            <DefaultLayout>
                                <WatchProduct />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
