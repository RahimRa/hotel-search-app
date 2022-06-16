
import './App.css';
import { Route, Routes } from 'react-router';
import {AuthPage} from './pages/AuthPage/AuthPage'
import { PersonalArea } from './pages/PersonalArea/PersonalArea';

function App() {
  return (
    <div className="App">

     <Routes>
       <Route path='/'element={<AuthPage/>}/>
       <Route path='/main'element={<PersonalArea/>}/>

     </Routes>
    </div>
  );
}

export default App;
