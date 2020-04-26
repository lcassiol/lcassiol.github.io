import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Curriculum from '../pages/Curriculum';
import Projects from '../pages/Projects';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/curriculum" exact component={Curriculum} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
  );
}
