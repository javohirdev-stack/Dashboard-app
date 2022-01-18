import { useState } from 'react';
import '../style/LeftNav.css'
import HelpSenter from '../ULComponent/HelpSenter';

const LeftNav = ({ toogle, setToogle }) => {



    return (
        <>
            <section className={toogle === true ? "LeftNav left" : "LeftNav"}>

                <div className="UlButton">
                    <img src='./image/top.png' alt="png" />
                    <h4>Dash</h4>
                </div>
                <div className="tagsName">
                    <h5>Main Menu</h5>
                </div>
                {/* ==========================dashborsd================ */}
                <div className="menu">
                    <button className='active'>
                        <img src="./image/dash.png" alt="" />Dashboard
                    </button>
                </div>

                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/Chat.png" alt="" />Inbox
                        <span className='inbox'>1</span>
                    </button>
                </div>

                {/* ==========================tagneme================= */}
                <div className="tagname">
                    <h6>Workspace</h6>
                </div>

                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/Chat.png" alt="" />Accounts
                    </button>
                </div>

                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/Calendar.png" alt="" />Schedule Post
                    </button>
                </div>
                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/search.png" alt="" />Communities
                    </button>
                </div>
                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/chart.png" alt="" />Analystic
                    </button>
                </div>

                {/* ==========================tagneme================= */}
                <div className="tagname">
                    <h6>Generals</h6>
                </div>

                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/Folder_alt.png" alt="" />File Folders
                    </button>
                </div>

                {/* =======================Inbox=================== */}
                <div className="menu">
                    <button>
                        <img src="./image/settin.png" alt="" />Settings
                    </button>
                </div>
                <HelpSenter />

            </section>
        </>
    );
}
export default LeftNav;