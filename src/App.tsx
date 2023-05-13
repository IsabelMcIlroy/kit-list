import type { Component } from 'solid-js';
import netlifyIdentity from 'netlify-identity-widget';
import Header from "./header"

import styles from './App.module.css';

netlifyIdentity.init({
  //container: '#netlify-modal', // defaults to document.body
  locale: 'en' // defaults to 'en'
});
const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header/>
    </div>
  );
};

export default App;
