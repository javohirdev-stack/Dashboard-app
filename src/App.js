import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterJs from './routers/RouterJs';
import { useState } from 'react'
import './App.css'
function App() {


   setTimeout(()=>{
    setUp(true)
   }, 10000)
  const [up, setUp] = useState(true)
  return (<>

    <Router>
      <div className={up === false ? 'TopNav UP' : 'TopNav'}>
        <Link to='/'><button className='btn btn-outline-info'>Tema 1</button></Link>
        <Link to='dashbord2'><button className='btn btn-outline-info'>Tema 2</button></Link>
        <Link to='dashbord3'><button className='btn btn-outline-info'>Tema 3</button></Link>
        <button 
        onClick={() => setUp(!up)} className='btn btn-outline-warning up'> Slick</button>
      </div>
      <RouterJs />
    </Router>

  </>);
}

export default App;
