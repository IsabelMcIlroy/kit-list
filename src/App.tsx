import type { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1 class="text-3xl font-bold underline text-red-600 dark:text-purple-300">polar bear</h1>
    </div>
  );
};

export default App;
