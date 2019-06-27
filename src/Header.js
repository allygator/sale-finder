import React from 'react';

function Header(props) {
  return (
      <header className="waveHeader">
        <div className="wave">
            <svg width="100%" height="410px" viewBox="0 0 700 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0,80)">
                    <path id="curveone" d="
                        M -1 60
                        L -1 140
                        L 785 140
                        L 785 60
                        S 512 -11 401 59 S 102 -103 -17 47"/>
                    <path id="curvetwo" d="
                        M -1 30
                        L -1 140
                        L 785 140
                        L 785 30
                        S 600 -57, 494 51, 335 -48,227 -12, 144 53, -1 30
                        "/>
                    <path id="curvethree" d="
                        M -1 50
                        L -1 140
                        L 785 140
                        L 785 50
                        S 555 -19 500 31 368 -18 268 41 126 -59 -1 50
                        "/>
                    <path id="curvefour" d="
                        M -1 40
                        L -1 140
                        L 785 140
                        L 785 50
                        S 671 127 584 62 419 81 329 38 91 74 -2 40"
                        />
                    </g>
            </svg>
        </div>
      </header>
  );
}



export default Header;
