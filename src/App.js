import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './Components/AppWithRouterAccess';



function App() {
  return (
    <div className="App">
      <Router>
    <AppWithRouterAccess/>
  </Router>
    </div>
  );
}

export default App;

