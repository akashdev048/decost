import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SideBar from './component/sidebar/SideBar';
import Header from './component/Header/Header';
import Dashboard from './Views/Dashboard/Dashboard';
import Monitors from './Views/Monitors/Monitors';
import CostCutter from './Views/Costcutter/CostCutter'
// import AppRoutes from './AppRoutes';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App(props) {
  // const { location, match } = props;

  // if (location.pathname === "/") {
  //     return <Redirect to={"/login"} />;
  // }

  return (
    <>
    <Header />
    <div className="App">
      
      <SideBar />
        <div className='content-wrapper-div'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitors" element={<Monitors />} />
            <Route path="/cost-cutter" element={<CostCutter />} />
          </Routes>
        </div>
      

      {/* <Router>
        <Switch>
        <Route path="/" component={AppRoutes} /> */}

          {/* <Route path="/" component={Login} />
          <Route path="/aligned" component={AlignedTickets} />
          <Route path="/login" component={Login} />
          <Route path="/activated" component={ActivatedOnlineTickets} /> */}
        {/* </Switch>
      </Router> */}

      {/* <Login /> */}
      {/* <AlignedTickets />  */}
      {/* < /> */}
    </div>
    </>
  );
}

export default App;
