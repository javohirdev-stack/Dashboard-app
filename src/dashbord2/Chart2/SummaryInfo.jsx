import './Chart2Style/SummaryInfo.css'
const SummaryInfo = () => {
    return (<>
        <div className="col-lg-2 col-md-2">
            <div className='summarInfo'>
                <div className='bottom'>
                    <h3>150K </h3>
                    <span>Total Reach</span>
                </div>

                <div className='bottom'>
                    <h3>150K <small style={{ fontSize: '10px', color: '#30D988' }}>12%</small></h3>
                    <span><i></i> Total Reach</span>
                </div>
                <div className='bottom'>
                    <h3>150K <small style={{ fontSize: '10px', color: 'red' }}>8%</small></h3>
                    <span> <i style={{ background: '#FD1F9B' }}></i> Total Reach</span>
                </div>
            </div>
            <div className='summarText'>
                <div><img src="./image/icon.png" alt="" /></div>
                <div>
                    <h4>You’re doing good!</h4>
                    <p>Your reach performance is 12% better compate to last year</p>
                </div>
            </div>
        </div>
    </>);
}
export default SummaryInfo;