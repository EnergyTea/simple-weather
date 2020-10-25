import './App.css';
import WeatherDisplay from './WeatherDisplay';
import PLACES from './CITYS';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace =  this.state.activePlace;
    return (
      <div className="App">
        <WeatherDisplay zip={"12345"} />
        {PLACES.map((PLACES, index) => (
          <button
            key={index}
            onClick={() => {
                console.log('Clicked index '+index);
              }
            }
          >
            {PLACES.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          zip={PLACES[activePlace].zip}
        />
      </div>
    );
  }  
}

export default App;
