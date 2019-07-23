import React from 'react';
import Waves from '../svgs/Waves';
import Boat from '../svgs/Boat'
import '../styles/header.css';

function Header(props) {
  return (
      <header className="waveHeader">

            <div className="boatHolder"><Boat /></div>
            <Waves />
      </header>
  );
}



export default Header;
