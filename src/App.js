import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageComponent from './main/main';


function App() {
  return (
    
    <div className="App">
      <div className='top-area'>
        <h1 className='h1-area'>Travel Reviews</h1>
      </div>
      <MainPageComponent></MainPageComponent>
      <div className='bottom-section'/>
    </div>
  );
}

export default App;
