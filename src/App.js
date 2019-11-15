import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdoptionPage from './components/AdoptionPage';

class App extends React.Component {
  render(){
  return (
    <div className="App">
     <main className='App_main'>
       <Switch>
         <Route exact path={'/'} component={LandingPage} />
         <Route path={'/adoption'} component={AdoptionPage} />
       </Switch>
     </main>
    </div>
  );
  }
}

export default App;
