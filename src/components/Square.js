import React from 'react';

function Square({ value, onClick }) {
  console.log('Button REndered');
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
