
import './ChartStyle/TopChanel.css'
const TopChanel = () => {
    return (<>

        <div className="col-lg-4 col-md-4">
            <div className="demograp pb-4">
                <div className="d-flex align-items-center justify-content-between ">
                    <div className='d-flex align-items-center  pt-2 pb-2'>
                        <img src="./image/Group 136.png" alt="" />
                        <h2 >Top Channels</h2>
                    </div>
                    <div>
                    <a href=""> See Dail <i className="fas fa-chevron-right"></i></a>
                    </div>
                </div>

                <div className="demo"> </div>

                <div className="d-flex  source">
                    <span >Source</span>
                    <span>Visit</span>
                </div>

                <div className="social">
                    <div className='soci'>
                        <img src="./image/face.png" alt="" />
                        <b>Facebook</b>
                        <b>124K</b>
                    </div>
                    <div className='bllue'>
                        <small text-succes>+24%</small>
                        <div style={{ width: '5rem' }} className="blue">
                        </div>
                    </div>
                </div>

                <div className="social">
                    <div className="soci">
                        <img src="./image/image 29.png" alt="" />
                        <b>Instagram</b>
                        <b>124K</b>
                    </div>
                    <div className="bllue">
                        <small text-succes>+24%</small>
                        <div style={{ width: '3rem' }} className="blue"> </div>

                    </div>

                </div>

                <div className="social">
                    <div className="soci">
                        <img src="./image/image 30.png" alt="" />
                        <b>LinkedIn</b>
                        <b>124K</b>
                    </div>
                    <div className="bllue">
                        <small text-succes>+24%</small>
                        <div style={{ width: '6rem' }} className="blue"></div>
                    </div>
                </div>

                <div className="social">
                    <div className="soci">
                        <img src="./image/image 31.png" alt="" />
                        <b>YouTube</b>
                        <b>124K</b>
                    </div>
                    <div className="bllue">
                        <small text-succes>+24%</small>
                        <div className="blue"> </div>
                    </div>



                </div>
            </div>
        </div>

    </>);
}
export default TopChanel;