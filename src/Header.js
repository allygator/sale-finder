import React from 'react';
import Waves from './Waves';
import Boat from './Boat'
import './header.css';

function Header(props) {
  return (
      <header className="waveHeader">

            <div className="boatHolder"><Boat /></div>
            <Waves />
      </header>
  );
}



export default Header;
