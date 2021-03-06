import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Settings from "./pages/Settings";
import HomeRedirect from "./pages/HomeRedirect";
import { ClipLoader } from "react-spinners";

const App = ({isServerInfo}) => {
  const [loading, setLoading] = useState(true);
  
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 400)
  }, [])



  return (

    <>

    {loading ? 
      <div className="justify-center items-center flex text-center w-screen h-screen">
    <ClipLoader
    size={60}
    color={'#FFFFFF'}
    loading={loading}
    /> 
    </div>
    :
    <div>
      <div id='modal'>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/u/*' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<HomeRedirect />} />
          </Routes>
        </Router>
      </div>
    </div>

    }
    </>

  )
}

export default App;
