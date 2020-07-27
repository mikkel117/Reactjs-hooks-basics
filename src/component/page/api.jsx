import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

      fetch('https://swapi.dev/api/people', {
        method: 'GET',
        headers: fetchHeaders,
        redirect: 'follow',
      })
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((err) => console.log(err));
    }
  });

  // a variable that maps thow the data you get out of the api and then returns the data you want out
  let apiDataMap =
    apiData &&
    apiData.results.slice(0, 8).map((result) => {
      return <p key={result.id}>
        {result.name}
      </p>;
    });
  // return the api map so it can be used later
  return <>{apiDataMap}</>;
};

export default function Api() {
  return (
    <section>
      <Fetch />
    </section>
  );
}
