import { Link } from "react-router-dom";
import '../../components.css';

function CallToAction({props,val}){
    return (
        <Link to={props} className="button">{val}</Link>
    );
}

export default CallToAction;