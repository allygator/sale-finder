import React, {useContext} from 'react';
import items from '../userdata.js';
import Panel from './Panel';
import 'firebase/auth';
import  UserContext from './UserContext';


function Dashboard() {
    const panels = items.map((item) => <Panel data={item} key={item.itemName}/> );
    const userContext = useContext(UserContext);
    const userData = userContext.authUser;
    if(userData){console.log(userData);}
    return (
        <div className="dashboard">
            {userData && <h1>Hello, {userData.displayName}</h1>}
            <div id="content">
                <div id="panels">{panels}</div>
            </div>
        </div>
);
}

export default Dashboard;
