import { useState } from "react";
import RightBlok from "../dashboard1/RightBlok";
import LeftNav from '../dashboard1/LeftNav';
import '../style/DashBlok.css'

const Dashbord3 = () => {

    const [toogle, setToogle]=useState(false)

    let Nav3 = "navbar"
    return (<>
        <section className='DashBlok'>
            <LeftNav toogle={toogle} setToogle={setToogle} />
            <RightBlok toogle={toogle} setToogle={setToogle} Nav3={Nav3} />
        </section>
    </>);
}
export default Dashbord3;