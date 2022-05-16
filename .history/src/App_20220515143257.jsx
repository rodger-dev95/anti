import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NonAuthenticated from "./pages/NonAuthenticated";
import Profile from './pages/Profile';
import Settings from "./pages/Settings";

const App = ({isServerInfo}) => {
  
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  return (

    {isAuthenticated ? (
      <div id='modal' />
      <div id='page' >
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </Router>
      </div>
    ) : (
      <NonAuthenticated />
    )}
  );
}

export default App;
