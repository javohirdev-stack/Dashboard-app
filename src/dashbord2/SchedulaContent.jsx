import '../style/SchedulaContent.css'
import Table from './Table';
const SchedulaContent = () => {
    return (<>

        <div className="demograp schedula">

            <div className="d-flex align-items-center justify-content-between ">
                <div className='d-flex align-items-center  pt-2 pb-2'>
                    <img src="./image/Group 136.png" alt="" />
                    <h2 >Schedule Content</h2>
                </div>
                <div>
                    <a href=""> See Dail</a>
                </div>
            </div>

            <div className="demo"></div>
            <div className="row">
                <div className="col-lg-5">
                    <h4>
                        Upcoming Event
                    </h4>

                    <div className="upcov">
                        <div className='d-flex'>
                            <img src="./image/desk.png" alt="" />
                            <p>New Store Product Campaign</p>
                        </div>
                        <div>
                            <span>M</span>
                        </div>
                    </div>

                    <div className="upcov">
                        <div className='d-flex'>
                            <img src="./image/desk.png" alt="" />
                            <p>New Store Product Campaign</p>
                        </div>
                        <div>
                            <span>M</span>
                        </div>
                    </div>

                    <div className="upcov">
                        <div className='d-flex'>
                            <img src="./image/desk.png" alt="" />
                            <p>New Store Product Campaign</p>
                        </div>
                        <div>
                            <span>M</span>
                        </div>
                    </div>

                    <div className="upcov">
                        <div className='d-flex'>
                            <img src="./image/desk.png" alt="" />
                            <p>New Store Product Campaign</p>
                        </div>
                        <div>
                            <span>M</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <Table />
                </div>

            </div>

        </div>
    </>);
}
export default SchedulaContent;