import React from 'react';
import Post from './Post'
import PostCC from "./PostCC";
import './App.css';

function App() {
  return (
    <div className="App" >
      <PostCC title="เบื่อจัง กักตัว" username="ซันดิว"/>
      <PostCC/>

      <Post title="เบื่อจัง กักตัว" username="ซันดิว"/>
      <Post title="กินไรดีครับ" username="แพง"/>
      <Post title="อยากไป dev camp จังครับ"/>
    </div>
  );
}

export default App;
