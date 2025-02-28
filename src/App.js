import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: "Rima Rzouga",
        bio: "Développeur Fullstack passionné par React.",
        imgSrc: "/logo192.png",
        profession: "Développeur Web"
      },
      show: false,
      timeElapsed: 0
    };

    // Bind de la méthode toggleShow
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? "Masquer" : "Afficher"} le profil
        </button>

        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage: {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
