import React, { useState } from 'react';

export function Square(props:{value: string, onClick: ()=> any}) {
    const {value, onClick} = props;
    return (
        <button className="square" onClick={()=> onClick()}>
            {value}
        </button>
    );
}
