import React from 'react';

export function Square(props: any) {
  return (
    <button className="square">
        {props.value}
    </button>
  );
}
