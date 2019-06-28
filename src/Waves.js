import React from 'react';

function Waves() {
    return (
        <div className="wave"><svg width="100%" height="410px" viewBox="0 0 1200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-20,80)">
            <path id="curveone" d="
                        M -50 60
                        L -50 140
                        L 1300 140
                        L 1300 60
                        S 1098 0 1028 52 S 584 -26 469 64 S 122 -80 -50 60"/>
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
