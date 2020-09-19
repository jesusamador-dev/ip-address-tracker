import React, { useContext } from 'react';
import IpContext from '../context/IpContext';

const Results = () => {
  const { info } = useContext(IpContext);

  return (
    <section className="results">
      <article className="results__item">
        <h3 className="results__title">ip address</h3>
        <h2 className="results__info">
          {info?.ip}
        </h2>
      </article>
      <article className="results__item">
        <h3 className="results__title">location</h3>
        <h2 className="results__info">
          {info?.location?.region}, {info?.location?.country} {info?.location?.postalCode}
        </h2>
      </article>
      <article className="results__item">
        <h3 className="results__title">timezone</h3>
        <h2 className="results__info">
          {info?.location?.timezone}
        </h2>
      </article>
      <article className="results__item">
        <h3 className="results__title">isp</h3>
        <h2 className="results__info">
          {info?.isp}
        </h2>
      </article>
    </section>
  );
}

export default Results;