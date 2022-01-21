import { useState } from "react";
import RightBlok from "../dashboard1/RightBlok";
import LeftNav from '../dashboard1/LeftNav';
import '../style/DashBlok.css'
import Visitor from "./Chart3/Visitor";
import Audence from "./Chart3/Auidence";
import TopChannel from '../dashboard1/Charts/TopChannel'
import Schedula from "./Schedula";
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
                            <div className="col-lg-4">
                                <div className="Title">
                                    <h3>Dashboard</h3>
                                    <p>Welcome back, Erza Miller!</p>
                                </div>
                                <Schedula />
                            </div>

                            <div className="col-lg-8">

                                <div style={{ marginTop: '33px' }} className="w-100 d-lg-flex justify-content-between">
                                    <h3 style={{ fontSize: '1.2rem' }}>Content Reach Summary</h3>
                                    <div class="dropdown p-0 m-0">
                                        <button style={{ background: 'transparent', border: 'none', outline: 'none' }} className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Monthly  <i style={{ transform: 'rotate(-90deg)' }} className="fas fa-angle-left"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap', alignItems: 'center' }} className="demograp boxs">
                                    <div style={{ display: 'flex' }}>
                                        <div className="d3name">
                                            <div>
                                                <img src="./image/v1.png" alt="" />
                                                <span>Total Reach</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ margin: '0' }}>
                                                    150K <span>12%</span>
                                                </h5>
                                                <small>vs last 1 month</small>
                                            </div>
                                        </div>

                                        <div className="d3name">
                                            <div>
                                                <img src="./image/v1.png" alt="" />
                                                <span>Total Reach</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ margin: '0' }}>
                                                    150K <span>12%</span>
                                                </h5>
                                                <small>vs last 1 month</small>
                                            </div>
                                        </div>

                                        <div className="d3name">
                                            <div>
                                                <img src="./image/v1.png" alt="" />
                                                <span>Total Reach</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ margin: '0' }}>
                                                    150K <span>12%</span>
                                                </h5>
                                                <small>vs last 1 month</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="svDown">
                                        <button><i className="fas fa-download"></i> CSV</button>
                                    </div>

                                </div>
                                <div style={{ background: 'transparent' }} className="demograp">
                                    <Visitor />
                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <TopChannel />

                            <div className="col-lg-8">

                                <div className=" d-flex bg-transparent justify-content-between align-items-end demograp">
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem' }}>Audience VIsitor</h3>
                                        <div className="d-flex but">
                                            <b style={{ border: '1px solid gray', padding: '2px 5px', borderRadius: '6px', marginRight: '5px' }}> <img src="./image/round1.png" alt="" /> Male (234k)</b>
                                            <b style={{ border: '1px solid gray', padding: '2px 5px', borderRadius: '6px', }}><img src="./image/dec.png" alt="" />FeMale (254k)</b>
                                        </div>
                                    </div>

                                    <div class="dropdown p-0 m-0">
                                        <button style={{ background: 'transparent', border: 'none', outline: 'none' }} className="bold " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            April 2021 - September 2021 <i style={{ transform: 'rotate(-90deg)' }} className="fas fa-angle-left"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ background: 'transparent' }} className="demograp">
                                    <Audence />
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