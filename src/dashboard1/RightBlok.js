import '../style/RightBlok.css'
import Navbar from './Navbar';
const RightBlok = ({toogle, setToogle, search, Nav3}) => {
    return (<>
        <section className="RightBlok">
         <Navbar toogle={toogle} setToogle={setToogle} search={search} Nav3={Nav3}/>
        </section>
    </>);
}
export default RightBlok;