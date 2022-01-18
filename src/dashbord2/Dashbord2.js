import { useState } from "react";
import RightBlok from "../dashboard1/RightBlok";
import LeftNav from "../dashboard1/LeftNav";
import '../style/DashBlok.css'


const Dashbord2 = () => {
    
    const [toogle, setToogle]=useState(false)
    
    let search= "jquery"
    return (<>

        <section className="DashBlok">
            <LeftNav toogle={toogle} setToogle={setToogle}  />
            <RightBlok toogle={toogle} setToogle={setToogle} search={search}/>
        </section>
    </>);
}
export default Dashbord2;