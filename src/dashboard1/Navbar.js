
import '../style/Navbar.css'
const Navbar = ({ toogle, setToogle, search }) => {

    return (<>

        <header className='header'>
            <button onClick={() => setToogle(!toogle)}
                className={toogle === true ? "toogle line" : "toogle"}><i className="fas fa-angle-left"></i>
            </button>
            <nav>
                <h1>Dashboard</h1>
                <div className='infoAvatar'>
                    {!search ?
                        <i className="fas fa-search"></i>
                        : <span><i className="fas fa-search"></i><input type="text" placeholder="search.." /></span>
                    }
                     <span className="art"></span>
                    <i className="far fa-bell"></i>
                    <img src="./image/Ellipse 20.png" alt="" />
                    <h6> Erza Miller</h6>

                    <div class="dropdown p-0 m-0">
                        <button class=" drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-angle-left"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    </>);
}
export default Navbar;