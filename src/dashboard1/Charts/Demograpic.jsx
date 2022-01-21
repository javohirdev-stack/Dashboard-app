
import './ChartStyle/Demograpic.css'
import RoundInfo from './RoundInfo';
const Demograpic = () => {

    return (<>
        <div className="col-lg-8 col-md-8">
            <div className="demograp">
                <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-between ">
                        <div className='d-flex align-items-center  pt-2 pb-2'>
                            <img src="./image/Group 136.png" alt="" />
                            <h2 >Demographic</h2>
                        </div>
                        <div>
                            <a href=""> See Dail <i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className=" demo"></div>
                    <div className="col-lg-5">
                        <RoundInfo />
                    </div>

                    <div className="col-lg-7">
                        <div className='auther'>
                            <div>
                                <h5>Audience Age</h5>
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

                </div>
            </div>
        </div>

    </>);
}
export default Demograpic;