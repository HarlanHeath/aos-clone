import React, { Component } from "react";
import Battalions from "./Components/Battalions/Battalions";
import Behemoths from "./Components/Behemoths/Behemoths";
import EndlessSpelss from "./Components/EndlessSpells/EndlessSpells";
import Leaders from "./Components/Leaders/Leaders";
import Notes from "./Components/Notes/Notes";
import Units from "./Components/Units/Units";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Battalion Builder</h1>
        <Leaders />
        <Units />
        <Behemoths />
        <Battalions />
        <EndlessSpelss />
        <Notes />
        <div>
          <h3>Point Total: </h3>
        </div>
      </div>
    );
  }
}

export default App;
