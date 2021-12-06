import React, {useState} from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import GigList from "./components/GigList";
import "./css/main.css"

// TODO:
// Implement UUID
// Add filtering to menu
// Add Wallet login
// Add functionality to add new projects for logged in users
// Connect gigs list to a JSON file

function App() {

  const sampleGigs = [
    {
        id: null,
        title: "Need a web3 developer",
        dao: "Carbon fund",
        url: "https://google.com",
        image: null,
        tags: ["development", "design"],
        date: null
    },

    {
        id: null,
        title: "Looking for a designer",
        dao: "Web3.co",
        url: "https://nytimes.com",
        image: null,
        tags: ["design"],
        date: null
    },

    {
      id: null,
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
      <Menu />
      <GigList gigs={gigs} />
    </>
  );


  
}

export default App;
