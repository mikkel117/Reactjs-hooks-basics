import React, { useState, useEffect } from 'react';


// export const EffectDemo = () => {
export default function EffectDemo() {
  // State
    const [fullName, setFullName ] = useState({ name: 'name', familyName: 'family'});
    const [title, setTitle] = useState( 'useEffect() in Hooks');

    // useEffect
    useEffect(() => {
      setFullName({name: 'Marco', familyName: 'Shaw'})
    })

  return (
    <section className="newUseEffect">
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </section>
  );
};
