import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Middle from './components/Middle/Middle';
import 'bootstrap/dist/css/bootstrap.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"



function App() {
  return (
    <div className="App">
        <div className='left'>
          <Sidebar/>
        </div>
        <div className='middle'>
          <Middle/>
        </div>
    </div>
  );
}

export default App;
