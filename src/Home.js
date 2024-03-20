import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Home(){

    return (
        <div style={{textAlign:'center'}} >
            <h1>Home Page</h1>
            <Link to='/users'>
                <Button >Show Users</Button>
            </Link>
        </div>
    )
}

export default Home;