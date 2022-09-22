import React, {useState} from 'react';

import {Main} from '../views/Main';
import {Board} from '../views/Board';
import {Quiz} from '../views/Quiz';

const TAG = '[router]';

const views = {
  main: props => Main(props),
  board: props => Board(props),
  quiz: props => Quiz(props),
};

class Router {
  static instance = null;
  constructor() {
    if (Router.instance instanceof Router) {
      return Router.instance;
    }
    this.history = [];
    this.name = 'main';
    this.callback = () => {
      throw new Error('router callback is not defined yet');
    };
    Router.instance = this;
    return Router.instance;
  }
  to(name) {
    if (!(name in views)) {
      return;
    }
    const idx = this.history.indexOf(name);
    if (idx > -1) {
      this.history = this.history.slice(0, idx);
    }
    this.history.push(this.name);
    this.name = name;
    this.callback(name);
  }
  back() {
    const prev = this.history.pop() || null;
    if (prev === null) {
      return false;
    }
    this.name = prev;
    this.callback(prev);
    return true;
  }
  onChange(cb) {
    this.callback = cb;
  }
}

export const router = new Router();

export const RouterView = () => {
  const [routerName, setRouterName] = useState(router.name);
  router.onChange(name => setRouterName(name));
  const View = views[routerName];

  return <View router={router} />;
};
