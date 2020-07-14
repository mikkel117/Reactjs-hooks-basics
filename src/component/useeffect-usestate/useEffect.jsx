import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(value.length <= 10);
    // if(!valid){alert('no more space')}
    // document.title = `${name}`;
  });

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const isValid = touched && valid;
          if (isValid) {
            setName(value);
            setValue('');
          }
          console.log(e.value);
        }}
        
        
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setTouched(true);
            setValue(e.target.value);
          }}
        />
      </form>
      <p>youer name {value}</p>
      <p>name : {name}</p>
      <p className={`small ${!valid ? 'highlight' : ''}`}>you have 10</p>
    </section>
  );
}