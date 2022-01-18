import { Route, Routes } from 'react-router-dom'
import Dashboard1 from '../dashboard1/Dashboard1';
import Dashbord2 from '../dashbord2/Dashbord2';
const RouterJs = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Dashboard1/>}/>
            <Route path="/dashbord2" element={<Dashbord2/>}/>

        </Routes>
    </>);
}
export default RouterJs;