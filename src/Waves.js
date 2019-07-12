import React from 'react';

function Waves() {
    return (
        <div className="wave"><svg width="100%" height="410px" viewBox="0 0 1200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-20,40)">
            <path id="curveone" d="
                M-63 66
                V175
                H1520
                V90
                C1520 90 1444 -44 1273 19
                C1013 153 860 -79 545 71
                C384 175 138 -125 -63 66Z"/>
            <path id="curvetwo" d="
                        M -50 30
                        L -50 140
                        L 1300 140
                        L 1300 30
                        S 1000 -2 846 49 S 420 -17 275 22 S 143 51 -50 30
                        "/>
            <path id="curvethree" d="
                        M -50 50
                        L -50 140
                        L 1300 140
                        L 1300 50
                        S 1089 9 994 51 891 -16 714 55 608 -2 400 51 59 -19 -50 50
                        "/>
            <path id="curvefour" d="
                        M -50 40
                        L -50 140
                        L 1300 140
                        L 1300 50
                        S 1119 73 942 44 S 652 83 544 42 S 391 75 296 38 S 91 74 -50 40"/>
        </g>
    </svg></div>);
}

export default Waves;
