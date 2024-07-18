
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App(props) {
  return (
    
    <>
    
      <Navbar about="about us" />
      <div className="container my-5">
      <TextForm heading="Enter your Text"/>

      </div>
     
      

      
    </>
  );
}

export default App;
