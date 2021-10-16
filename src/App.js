import About from './components/about'
import Experiences from './components/experiences'
import Education from './components/education'
import Skills from './components/skills'
import Interests from './components/interests'
import Awards from './components/awards'
import Nav from './components/nav'
import Projects from './components/projects'

import { API, Storage, Logger } from 'aws-amplify';
import { listProfiles, listResumes } from './graphql/queries';
import React, { Component, useState, useEffect } from 'react'

function App() {

  const [profiles, setProfiles] = useState([]);

  async function fetchProfiles() {
    const apiData = await API.graphql({ query: listProfiles });
    const profilesFromAPI = apiData.data.listProfiles.items;
    await Promise.all(profilesFromAPI.map(async profile =>{
      if (profile.image){
        const image = await Storage.get(profile.image);
        profile.image = image
      }
      return profile
    }))
    const logger = new Logger('fetchProfiles');
    logger.error(apiData.data.listProfiles.items);
    setProfiles(apiData.data.listProfiles.items);
  }

  function ListProfile(){
    return(
      <div style={{marginBottom: 30}}>
      <h1>Profile</h1>
      <button onClick={() => fetchProfiles()}>get profile</button>
        {
          profiles.map(p => (
            <div key={p.id}>
              <h2>{p.firstname + " " + p.lastname}</h2>
              <p>{p.address}</p>
              <p>{p.email}</p>
              <p>{p.intro}</p>
              {
                p.image && <img src={p.image} style={{width: 100}} />
              }
            </div>
          ))
        }
      </div>
    );
  }

    return (
        <div>
            <Nav />
            <div className="container-fluid p-0">
               <ListProfile />
                <About />
                <Experiences />
                <Projects />
                <Awards />
                <Skills />
                <Education />
                <Interests />
            </div>
        </div>
    );
}

export default App;
