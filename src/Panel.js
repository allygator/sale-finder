import React from 'react';
import Card from '@material-ui/core/Card';
import SettingsIcon from '@material-ui/icons/Settings';
import StoreIcon from '@material-ui/icons/Store';
import IconButton from '@material-ui/core/IconButton';
import Uniqlo from './Uniqlo'

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
          <p>{props.data.curPrice}</p>
          <p>{props.data.goalPrice}</p>
    </Card>
  );
}

export default Panel;
