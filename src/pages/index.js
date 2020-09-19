import React, { useState } from 'react';
import { SearchForm, Map, Results } from '../components'
import IpContext from '../context/IpContext';

function Home() {
  const [info, setInfo]=useState("");
  const value = {info, setInfo}; 
  return (
    
  <>
      <header className="header">
      </header>
      <IpContext.Provider value={value}>
        <section className="content">
          <h1 className="content__title">Ip Address Tracker</h1>
          <div className="container">
            <SearchForm />
          </div>
          <Results />
        </section>
        <Map />
      </IpContext.Provider>
  </>
    
  );
}

export default Home;