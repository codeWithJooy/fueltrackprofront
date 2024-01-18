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
import Items from './Pages/Headquarters/Items';
import Ledger from './Pages/Headquarters/Ledger';
import Stock from "./Pages/Headquarters/Stock"
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
         <Route path="/items" component={Items}/>
         <Route path="/ledger" component={Ledger} />
         <Route path="/stock" component={Stock} />
       </Switch>
       <Toasty />
     </BrowserRouter>
  );
}

export default App;
