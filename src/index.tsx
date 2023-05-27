/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";
import netlifyIdentity from 'netlify-identity-widget'; 

import './index.css';
import Header from './header';
import App from './App';
import Trip from './Trip';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

netlifyIdentity.init({
  //container: '#netlify-modal', // defaults to document.body
  locale: 'en' // defaults to 'en'
});

render(() =>
  <>
    <Header/> 
      <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/trip/:id" component={Trip} />
      </Routes>
    </Router>
  </>, root!);
