import React from 'react';

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

export default function Array() {
  return (
    <section>
      <div>
        {names.map((name) => (
          <p>{name}</p>
        ))}
      </div>
      <br/>
      <p>go to this site to lorn <a href="https://upmostly.com/tutorials/how-to-for-loop-in-react-with-examples" target="blank">more</a></p>
    </section>
  );
}
