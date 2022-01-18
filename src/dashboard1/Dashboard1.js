import LeftNav from "./LeftNav";
import '../style/DashBlok.css'
import RightBlok from "./RightBlok";
import { useState } from "react";

const Dashboard1 = () => {
    const [toogle, setToogle]=useState(false)
    return (<>

    
        <section className="DashBlok">
            <LeftNav toogle={toogle} setToogle={setToogle} />
            <RightBlok toogle={toogle} setToogle={setToogle}/>
        </section>



    </>);
}
export default Dashboard1;