
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Dashboard from'./compDashBoard/Dashboard'


const App = () => {
  return (
   
      <Routes>


        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
       </Routes>
    
  )
}

export default App;