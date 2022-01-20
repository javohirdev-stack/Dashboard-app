import LeftNav from "./LeftNav";
import '../style/DashBlok.css'
import RightBlok from "./RightBlok";
import { useState } from "react";
import Demograpic from "./Charts/Demograpic";
import TopChanel from "./Charts/TopChannel";
import ChartLine from "./Charts/ChartLine";
import ChartLineTop from "./Charts/ChartLineTop";

const Dashboard1 = () => {
    const [toogle, setToogle] = useState(false)
    return (<>


        <section className="DashBlok">
            <LeftNav toogle={toogle} setToogle={setToogle} />

            <section className="dashbord">
                <RightBlok toogle={toogle} setToogle={setToogle} />

                <div className="Dashbord_table">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="demograp">
                                    <ChartLineTop />
                                    <ChartLine />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="row">

                                    <Demograpic />
                                    <TopChanel />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </section>



    </>);
}
export default Dashboard1;