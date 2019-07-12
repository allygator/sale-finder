import React from 'react';
import items from './userdata.js';
// import Header from './Header';
import Panel from './Panel';

require('dotenv').config()

function Dashboard() {
    const panels = items.map((item) => <Panel data={item} key={item.itemName}/> );
    return (
        <div className="dashboard">
        <div id="content">
            <div id="panels">{panels}</div>
        </div>
    </div>
);
}

export default Dashboard;
