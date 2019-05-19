import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

let posts = [
  {id: 1, message: 'Hi bro', likes: 10},
  {id: 2, message: 'My second post', likes: 15}
]

let dialogs = [
  {id: 1, name: 'Savva'},
  {id: 2, name: 'Alexey'},
  {id: 3, name: 'Serega'}
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Savva'},
  {id: 3, message: 'Tensy'}
]

const App = (props) => {
  return (
    <BrowserRouter>  
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages}/>} />
          <Route path='/profile' render={ () => <Profile posts={posts}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
