import React, {useContext, useState} from 'react';
import items from '../userdata.js';
import Panel from './Panel';
import Add from './Add';
import Button from '@material-ui/core/Button';
import 'firebase/auth';
import  UserContext from './UserContext';

function Dashboard() {
    let panels = [];
    const [addPanel, togglePanel] = useState(false);
    const userContext = useContext(UserContext);
    const userData = userContext.authUser;
    // // let items = items;
    if(items) {
        panels = items.map((item) => <Panel data={item} key={item.itemName}/> );
    }

    function closePanel() {
        togglePanel(false);
    }

    return (
        <div className="dashboard">
            <div id="header">
                {userData && <h1>Hello, {userData.displayName}</h1>}
                <Button variant="contained" onClick={()=> togglePanel(!addPanel)}>Add Item</Button>
            </div>
            <div id="content">
                {
                    panels
                        ? <div id="panels">{panels}</div>
                        : <p>oh no, looks like you dont have any items! Lets go ahead and add one!</p>
                }

                {addPanel && <div id="addOverlay"><Add closePanel={closePanel}/></div>}

            </div>
        </div>
);
}

export default Dashboard;
