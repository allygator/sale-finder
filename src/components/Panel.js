import React from 'react';
import Card from '@material-ui/core/Card';
import SettingsIcon from '@material-ui/icons/Settings';
import StoreIcon from '@material-ui/icons/Store';
import IconButton from '@material-ui/core/IconButton';
import Uniqlo from '../svgs/Uniqlo'

function Panel(props) {
    let site = <StoreIcon />;
    if(props.data.site === 'uniqlo') {
        site = <Uniqlo />
    }
  return (
      <Card className="panel">
          <div className="icons">{site}<IconButton aria-label="Settings">
            <SettingsIcon />
          </IconButton>
          </div>
          <h2>{props.data.itemName}</h2>
          <p>Current: ${props.data.curPrice.toFixed(2)}</p>
          <p>Goal: ${props.data.goalPrice.toFixed(2)}</p>
    </Card>
  );
}

export default Panel;
