import { useState } from "react";
import RightBlok from "../dashboard1/RightBlok";
import LeftNav from '../dashboard1/LeftNav';
import '../style/DashBlok.css'
import Visitor from "./Chart3/Visitor";
import Audence from "./Chart3/Auidence";

const Dashbord3 = () => {

    const [toogle, setToogle] = useState(false)

    let Nav3 = "navbar"
    
    return (<>
        <section className='DashBlok'>
            <LeftNav toogle={toogle} setToogle={setToogle} />

            <div className="dashbord">
                <RightBlok toogle={toogle} setToogle={setToogle} Nav3={Nav3} />
                <div className="Dashbord_table">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-9">
                                <Visitor />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-9">
                                <div style={{background:'transparent'}} className="demograp">
                                    <Audence/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default Dashbord3;