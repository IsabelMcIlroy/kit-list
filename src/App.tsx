import type { Component } from 'solid-js';
import TripList from "./tripList"
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class="bg-light-gray">
      <TripList/>
    </div>
  );
};

export default App;
