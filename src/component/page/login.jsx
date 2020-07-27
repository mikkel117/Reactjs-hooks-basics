import React, { useState, useEffect } from 'react';

// makes a fetch that gets the user 
// note that it dose not work with the form. It works if its hardcode in 
const FetchUser = (namevalue) => {

  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

      let urlencoded = new URLSearchParams();
      urlencoded.append('username', 'mikkel');
      urlencoded.append('password', '12345');


      fetch('https://api.mediehuset.net/token', {
        method: 'POST',
        headers: fetchHeaders,
        body: urlencoded,
        redirect: 'follow',
      })
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((err) => console.log(err));
    }
    console.log('data', apiData && apiData);
    
  });
  return(
    <>
    </>
  )
  
};
// makes a componten called Login
export default function Login() {
  const [namevalue, setNameValue] = useState('');
  const [name, setName] = useState('');
  console.log(namevalue);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.value);
        setName(namevalue);
      }}
    >
      <input
        type="text"
        value={namevalue}
        onChange={(e) => {
          setNameValue(e.target.value);
        }}
      />
      <FetchUser />
    </form>
  );
}