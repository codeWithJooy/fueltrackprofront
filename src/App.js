import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Toasty from "../src/Components/Toasty/Toasty"
import CashBook from './Pages/CashBook/CashBook';
import Cash from './Pages/Cash/Cash';
import Stocks from './Pages/Stocks/Stocks';
import Credit from './Pages/Credit/Credit';
import Bank from './Pages/Bank/Bank';
import Sales from './Pages/Sales/Sales';
import Login from './Pages/Signup/Login';
import Signup from './Pages/Signup/Signup';

import PumpSetup from './Pages/Headquarters/Pumpsetup';
import Pump from './Pages/Headquarters/Pump';
function App() {
  return (
     <BrowserRouter>
       <Switch>
         <Route path="/cashbook" component={CashBook}/>
         <Route path="/cash" component={Cash} />
         <Route path="/stocks" component={Stocks} />
         <Route path="/credit" component={Credit} />
         <Route path="/bank" component={Bank} />
         <Route path="/sales" component={Sales} />

         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/pumpsetup" component={PumpSetup} />
         <Route path="/pumps" component={Pump} />
       </Switch>
       <Toasty />
     </BrowserRouter>
  );
}

export default App;
