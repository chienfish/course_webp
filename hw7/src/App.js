import './App.css';
import login from './component/login';
import userName from './component/userName';
import password from './component/password';
import button from './component/button';

function App() {
  return (
    <div className = "App">
        <div className = 'login'> {login()} </div>
        <div className = 'input'> {userName()} </div>
        <div className = 'input'> {password()} </div>
        <div className = 'btn'> {button()} </div>
      </div>
  );
}

export default App;
