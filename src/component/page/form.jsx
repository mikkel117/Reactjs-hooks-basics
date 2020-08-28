import React, { useState } from 'react';
// import useForm from 'react-hook-form';
import { useForm } from 'react-hook-form';

export default function ReactForm() {
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (data) => {
    setEmail(data.email);
    setPassword(data.password);
    // log()
  };

  //   const log = () =>{
  //       console.log('email', email);
  //       console.log('password', password);
  //   }

  return (
    <section className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label> <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address',
            },
          })}
        />
        <br />
        {errors.email && <span> {errors.email.message} </span>}
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
    </section>
  );
}
