import React from 'react';
import { render } from 'react-dom';
import './App.css'
import { Header, PostList } from './components'

function App(){
  return (
  <>
    <Header/>
    <main>
      <PostList/>
    </main>
  </>
  );
}

export default App;