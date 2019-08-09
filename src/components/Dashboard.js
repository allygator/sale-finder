import React, {useContext} from 'react';
// import items from '../userdata.js';
import Panel from './Panel';
import Add from './Add';
import 'firebase/auth';
import  UserContext from './UserContext';


function Dashboard() {
    const panels = null;
    const userContext = useContext(UserContext);
    const userData = userContext.authUser;
    let items;
    if(items) {
        panels = items.map((item) => <Panel data={item} key={item.itemName}/> );
    }
    return (
        <div className="dashboard">
            {userData && <h1>Hello, {userData.displayName}</h1>}
            <div id="content">
                {
                    panels
                        ? <div id="panels">{panels}</div>
                        : <p>oh no, looks like you dont have any items! Lets go ahead and add one!</p>
                }
                <Add />
            </div>
        </div>
);
}

export default Dashboard;
