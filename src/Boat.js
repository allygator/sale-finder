import React from 'react';

function Boat() {
    return (<div className="boat">
        <svg width="100%" height="410px" viewBox="0 0 200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="dropshadow" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="2" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.2"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0"/>
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="3"/>
                    <feOffset dx="5" dy="5" result="offsetblur"/>
                    <feFlood floodColor="rgb(55, 37, 36)" result="color"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feComposite in2="SourceAlpha" operator="in"/>
                    <feMerge>
                        <feMergeNode in="SourceGraphic"/>
                        <feMergeNode/>
                    </feMerge>
                </filter>
            </defs>
            <path id="mast" d="M 87.5 1 v 134"/>
            <path id="hull" d="
                M 4 133
                A 11 -5 4 0 0 9 137
                c 3 8 7 13 10 14
                c 6 4 70 7 145 -1
                c 4 -4 6 -10 6 -13 Z" filter="url(#inset-shadow)"/>
            <g id="sails"><path id="smallsail" d="
                M 88 117
                s 39 7 57 1
                c -10 -36 -47 -106 -57 -116
                C 88 0 90 108 88 117 z"/>
                <path id="bigsail" d="
                M 87 2 s -65 63 -83 123
                c 21 6 103 2 101 0
                C 66 89 88 -1 87 2 Z" filter="url(#dropshadow)"/>
            </g>
        </svg>
    </div>);
}

export default Boat;
