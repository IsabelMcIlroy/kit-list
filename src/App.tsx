import type { Component } from 'solid-js';
import netlifyIdentity from 'netlify-identity-widget';

import styles from './App.module.css';

netlifyIdentity.init({
  //container: '#netlify-modal', // defaults to document.body
  locale: 'en' // defaults to 'en'
});

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1 class="text-3xl font-bold underline text-red-600 dark:text-purple-300">polar bear</h1>
      <button onClick={()=>{console.log(netlifyIdentity)
      netlifyIdentity.open()}}>Login</button>
    </div>
  );
};

export default App;
