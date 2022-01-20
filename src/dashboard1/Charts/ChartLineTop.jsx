import './ChartStyle/ChartLineTop.css'

const ChartLineTop = ({ dash2 }) => {
    return (<>

        <div className="ChartTop">

            {dash2
                ?
                <>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center  pt-2 pb-2'>
                            <img src="./image/Group 136.png" alt="" />
                            <h2 >Content Reach Summary</h2>
                        </div>

                    </div>
                    <div className='menu'>
                        <button>Daily</button>
                        <button>Weekly</button>
                        <button>Month</button>
                    </div>
                </>
                :
                <>
                    <div className="Kinfo">
                        <div className='d-flex align-items-center mr-5 kk'>
                            <img src="./image/Group 125.png" alt="" />
                            <div className='Kins'>
                                <small>Total Reach</small>
                                <b>9K</b>
                            </div>
                        </div>

                        <div className='d-flex align-items-center mr-5 kk'>
                            <img src="./image/Group 126 (1).png" alt="" />
                            <div className='Kins'>
                                <small>Total Paid Reach</small>
                                <b>10K</b>
                            </div>
                        </div>

                        <div className='d-flex align-items-center kk'>
                            <img src="./image/Group 126.jpg" alt="" />
                            <div className='Kins'>
                                <small>Total Organic Reach</small>
                                <b>5K</b>
                            </div>
                        </div>
                    </div>

                    <div className='menu'>
                        <button>Daily</button>
                        <button>Weekly</button>
                        <button>Month</button>

                    </div>
                </>
            }


        </div>

    </>);
}
export default ChartLineTop;