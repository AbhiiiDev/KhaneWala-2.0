

import Navbar from './components/Navbar'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Home from './scenes/Home/Home.jsx'
import Login from './scenes/Auth/Login.jsx'
import SignUp from './scenes/Auth/SignUp.jsx'


function App() {
  return (
    
      <div>
   
<Router>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    
  </Routes>
</Router>

      </div>
 
  )
}

export default App;
