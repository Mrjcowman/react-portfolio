import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"><Index /></Route>
        <Route exact path="/portfolio"><Portfolio /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route path="*"><Page404 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
