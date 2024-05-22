import { useParams } from "react-router-dom"
import Callback from "./Callback"
import Memo from "./Memo"
import Ref from "./Ref"
import Id from "./Id"


const Comps = () => {

    const params = useParams()
    const id = params.id;
    const colorstyles = {
        padding: "8px 15px",
        marginLeft: "10px",
        color: "white",
        backgroundColor: "red",
        fontSize: "20px"
    }

    return (
        <div>
            <Id />
            <div>
                <h2>useParams HOOK</h2>
                <p>The Current URL is <span style={colorstyles}>{id}</span></p>
            </div>
            <Memo />
            <Callback />
            <Ref />
        </div>
    )
}

export default Comps