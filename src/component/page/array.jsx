import React from 'react';

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
const ages = [3, 5, 10, 30, 19];

function checkAge(age) {
  return age <= 15;
}

export default function Array() {
  return (
    <section>
      <div>

        {names.map((name) => (
          <p>{name}</p>
        ))}

        <br/>
        <br/>

        <p>this is the array filter</p>
        { ages.filter(checkAge) }

        <br/>
        <br/>

        <p>this is the array find</p>
        { ages.find(checkAge) }

      </div>
      <br/>
      <p>go to this site to lorn <a href="https://upmostly.com/tutorials/how-to-for-loop-in-react-with-examples" target="blank">more</a></p>
    </section>
  );
}
