import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Cash from './Pages/Cash/Cash';
import Stocks from './Pages/Stocks/Stocks';
import Credit from './Pages/Credit/Credit';
import Bank from './Pages/Bank/Bank';
import Sales from './Pages/Sales/Sales';

function App() {
  return (
     <BrowserRouter>
       <Switch>
         <Route path="/dashboard" />
         <Route path="/cash" component={Cash} />
         <Route path="/stocks" component={Stocks} />
         <Route path="/credit" component={Credit} />
         <Route path="/bank" component={Bank} />
         <Route path="/sales" component={Sales} />
       </Switch>
     </BrowserRouter>
  );
}

export default App;
