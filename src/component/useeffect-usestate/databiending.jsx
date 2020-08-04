import React, { useState} from 'react';

function Binding() {
  const [value, setValue] = useState('');
  const [name, setName] = useState([]);
//   const [touched, setTouched] = useState(false);
//   const [valid, setValid] = useState(false);
//   useEffect(() => {
//   });
   

  return (
    <div>
        <form onSubmit={e => {
        e.preventDefault()
        if(!value.length) { return false }
        setName(value)
        setValue('')
       }}>
           <input type="text" value={value} onChange={e => setValue(e.target.value)} />
       </form>
    <p>name : { value }</p>
    <br/>
    {/* <ul>
    {name.map((item) => {
          return (
             <li>{item}</li>
          );
        })}
        </ul> */}
    <p>name : { name }</p>
    </div>
  );
}

export default Binding;