import { useState } from "react";
import RightBlok from "../dashboard1/RightBlok";
import LeftNav from "../dashboard1/LeftNav";
import '../style/DashBlok.css'
import ChartLineTop from '../dashboard1/Charts/ChartLineTop'
import SummaryInfo from "./Chart2/SummaryInfo";
import OrderTime from "./Chart2/OrderTIme";
import Profiles from "./Chart2/Profiles";
import SchedulaContent from "./SchedulaContent";
import ContentReach from "./Chart2/ContentReach"

const Dashbord2 = () => {

    const [toogle, setToogle] = useState(false)

    let search = "jquery"
    let dash2 = "salom"
    return (<>

        <section className="DashBlok">
            <LeftNav toogle={toogle} setToogle={setToogle} />
            <div className="dashbord">
                <RightBlok toogle={toogle} setToogle={setToogle} search={search} />
                <div className="Dashbord_table">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9 ">
                                <div className="demograp">
                                    <ChartLineTop dash2={dash2} />
                                    <div className=" demo"></div>

                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 right">
                                        <ContentReach/>
                                        </div>
                                        <SummaryInfo />
                                    </div>
                                </div>

                                <SchedulaContent/>
                            </div> 

                            <div className="col-lg-3 col-10 mx-auto">

                                <div className="demograp">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center  pt-2 pb-2'>
                                            <img src="./image/Group 136.png" alt="" />
                                            <h2 >Audience Demographic</h2>
                                        </div>

                                    </div>

                                    <div className=" demo"></div>
                                    <OrderTime />

                                    <div style={{ background: 'transparent', padding: '5px', marginTop: '10px' }} className='auther'>
                                        <div>
                                            <h5 style={{ fontSize: '1rem' }}>Audience Age</h5>
                                        </div>
                                        <div className='colr'>
                                            <div className='color'></div>
                                            <div className='color'></div>
                                            <div className='color'></div>
                                            <div className='color'></div>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div className='reds'></div>
                                            <p> 15 years old</p>
                                            <b> 21K</b>
                                            <span>27%</span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div style={{ background: '#017EFA' }} className='reds'></div>
                                            <p> 20 - 35 years old</p>
                                            <b> 64K</b>
                                            <span>40%</span>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div style={{ background: '#30D987' }} className='reds'></div>
                                            <p> 40 - 50 years old</p>
                                            <b> 18K</b>
                                            <span>16%</span>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div style={{ background: '#6342FF' }} className='reds'></div>
                                            <p> 40 - 50 years old</p>
                                            <b> 5K</b>
                                            <span>8%</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="demograp">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center  pt-2 pb-2'>
                                            <img src="./image/Group 136.png" alt="" />
                                            <h2 >Most Engangge Audience</h2>
                                        </div>
                                    </div>
                                    <div className="demo"></div>
                                 <Profiles/>
                                    
                                </div>
                            </div>

                     
                                
                         
                           


                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>);
}
export default Dashbord2;