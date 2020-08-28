import React, { useState, useEffect } from 'react';
//import react hook form
import { useForm } from 'react-hook-form';

export default function ReactForm() {
  //sets the hook from useForm
  const { register, handleSubmit, errors } = useForm();
  // seting the username and password so it can be frtch
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [apiData, setApiData] = useState('');
  //the token
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);
  const [findError, setFindError] = useState(false);
  const [test, setTest] = useState(false);

  if (localStorage.getItem('token')) {
    if (test === false) {
      setToken(localStorage.getItem('token'));
      setTest(true);
    }
  }

  useEffect(() => {
    // see if the auth is true
    if (auth === true) {
      if (!apiData) {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');

        let urlencoded = new URLSearchParams();
        urlencoded.append('username', userName);
        urlencoded.append('password', userPassword);

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
      //call clear
      setTimeout(clear, 150);

      //set the token in setToken
      setToken(apiData && apiData.access_token);
      //set token in the local storage
      localStorage.setItem('token', apiData && apiData.access_token);

      // if the access_token in data is undefined it will set setFindError to true
      if (apiData && apiData.access_token === undefined) {
        setFindError(true);
      }
    }
  }, [auth, apiData, userName, userPassword]);

  //sets the UserName and UserPassword to nothing
  const clear = () => {
    setUserName('');
    setUserPassword('');
  };

  //handle the submit
  const onSubmit = (data) => {
    setUserName(data.username);
    setUserPassword(data.password);
    setAuth(true);
    setFindError(false);
    setApiData('');
  };
  //shows when the user is login or the username or password worng
  const Showlogin = () => {
    if (findError === true) {
      return <p>wrong password or user name</p>;
    } else {
      return <p>{token ? <span>you are loged in</span> : <span></span>}</p>;
    }
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Showlogin />
        <label htmlFor="username">User name:</label> <br />
        <input
          type="text"
          placeholder="user name"
          name="username"
          ref={register({
            required: 'User name is required',
          })}
        />
        <br />
        {errors.username && <span> {errors.username.message} </span>}
        <br />
        <label htmlFor="password">Password:</label> <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({
            required: 'password is required',
            minLength: { value: 5, message: 'password is too shot' },
            maxLength: { value: 7, message: 'password is too long' },
          })}
        />
        <br />
        {errors.password && <span> {errors.password.message} </span>}
        <br />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          setToken('');
          setApiData('');
          setAuth(false);
          setFindError(false);
        }}
      >
        log out
      </button>
    </section>
  );
}
