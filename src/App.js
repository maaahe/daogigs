import React, {useState} from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import GigList from "./components/GigList";
import "./css/main.css";
import { v4 as uuidv4 } from 'uuid';

// TODO:
// DONE - Implement UUID
// Add filtering to menu
//  - DONE - Get tag attribute from menu links 
//  - Pass tag attribites into setGigs function
//  - Inside setGigs function filter gigs to only include those whos tags array contains a tag attribute from menu links
// Add Wallet login
// Add functionality to add new projects for logged in users
// Connect gigs list to a JSON file
// Turn menu links into React components

function App() {

  const sampleGigs = [
    {
        id: uuidv4(),
        title: "Need a web3 developer",
        dao: "Carbon fund",
        url: "https://google.com",
        image: null,
        tags: ["development", "design"],
        date: null
    },

    {
        id: uuidv4(),
        title: "Looking for a designer",
        dao: "Web3.co",
        url: "https://nytimes.com",
        image: null,
        tags: ["design"],
        date: null
    },

    {
      id: uuidv4(),
      title: "Need a community manager",
      dao: "Communiti",
      url: "https://ethereum.org",
      image: null,
      tags: ["community"],
      date: null
  }
  ]

  const [gigs, setGigs] = useState(sampleGigs)



  return (
    <>
      <Header />
      <Menu setGigs={setGigs}/>
      <GigList gigs={gigs}/>
    </>
  );


  
}

export default App;
