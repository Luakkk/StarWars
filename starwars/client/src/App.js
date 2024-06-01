import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import PlanetSearch from './components/PlanetSearch';
import StarshipSearch from './components/StarshipSearch';
import PersonSearch from './components/PersonSearch';
import PlanetDetail from './components/PlanetDetail';
import StarshipDetail from './components/StarshipDetail';
import PersonDetail from './components/PersonDetail';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/planets" exact component={PlanetSearch} />
                <Route path="/planets/:id" component={PlanetDetail} />
                <Route path="/starships" exact component={StarshipSearch} />
                <Route path="/starships/:id" component={StarshipDetail} />
                <Route path="/people" exact component={PersonSearch} />
                <Route path="/people/:id" component={PersonDetail} />
            </Switch>
        </Router>
    );
};

export default App;
