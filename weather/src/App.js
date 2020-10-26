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
        <h1>React Simple Weather App</h1>
        <div className="App-main">
          <div>
            <h3>Select a city</h3>
            <div  
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
            >
              {PLACES.map((place, index) => (
                <p key={index} eventKey={index} onClick={() => this.setState({activePlace: index})}>{place.name}</p>                
              ))}
            </div>
          </div>
          <WeatherDisplay
            key={activePlace}
            zip={PLACES[activePlace].zip}
          />
        </div>        
      </div>
    );
  }  
}

export default App;
