import '../style/RightBlok.css'
import Navbar from './Navbar';
const RightBlok = ({toogle, setToogle, search}) => {
    return (<>
        <section className="RightBlok">
         <Navbar toogle={toogle} setToogle={setToogle} search={search}/>
        </section>
    </>);
}
export default RightBlok;