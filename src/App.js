import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Toasty from "../src/Components/Toasty/Toasty"
import CashBook from './Pages/CashBook/CashBook';
import Cash from './Pages/Cash/Cash';
import Stocks from './Pages/Stocks/Stocks';
import Credit from './Pages/Credit/Credit';
import Bank from './Pages/Pump/Bank/Bank';
import Sales from './Pages/Pump/Sales/Sales';
import Login from './Pages/Signup/Login';
import Signup from './Pages/Signup/Signup';
import Party from './Pages/Pump/Party/Party';

import PumpSetup from './Pages/Headquarters/Pumpsetup';
import Pump from './Pages/Headquarters/Pump';
import Items from './Pages/Headquarters/Items';
import Ledger from './Pages/Headquarters/Ledger';
import Stock from "./Pages/Headquarters/Stock"
import Users from './Pages/Headquarters/Users';
import Expenditure from './Pages/Pump/Expenditure/Expenditure';
import Purchase from './Pages/Pump/Purchase/Purchase';
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
         <Route path="/party" component={Party} />
         <Route path="/expenditure" component={Expenditure} />
         <Route path="/purchase" component={Purchase} />

         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/pumpsetup" component={PumpSetup} />
         <Route path="/pumps" component={Pump} />
         <Route path="/items" component={Items}/>
         <Route path="/ledger" component={Ledger} />
         <Route path="/stock" component={Stock} />
         <Route path="/users" component={Users} />
       </Switch>
       <Toasty />
     </BrowserRouter>
  );
}

export default App;
