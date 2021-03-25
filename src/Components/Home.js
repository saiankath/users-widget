import React, { useState } from 'react'
import Display from './Display'
import {fetchPosts} from './Actions'
import { useDispatch } from "react-redux";

function Home() {
    const dispatch = useDispatch();

    const [name, setName] = useState(false);


    const viewUsers = ()=> {
        setName(true);
        return fetchPosts()
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={()=>dispatch(viewUsers())}>Get Users</button>
             { name ? <Display /> : null}
        </div>
    )
}

export default Home;