import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ChatBot from './Components/ChatBot/ChatBot';
import Logo from './Components/Logo/Logo';
import User from './Components/User/User';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import 'tachyons';

const initialState = {
  route: 'signin',
  isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      joined: ''
    }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
      const { isSignedIn, route } = this.state;
        return(
          <div className="App">
              <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
              { route === 'home'
                ? <div>
                    <Logo/>
                    <User name={this.state.user.name}/>
                  </div>
                : (
                    route === 'signin' 
                    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                  )
              }
          </div>
    );
  }
}

export default App;
