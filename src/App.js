import React from 'react';
import './App.css'
import DrawerAppBar from './DrawerAppBar';
import { Routes , Route } from 'react-router-dom';
import MainUsers from './MainUsers';
import FormExampleSubcomponentControl from './FormExampleFieldControl';
import PageEror from './PageError';
import { connect } from 'react-redux';
import Home from './Home';
import UserDetails from './UserDetails'


const App = ({pre,next,prev})=>{

  return (
    <>
    <div className="App">
      <div>
        <DrawerAppBar/>
      </div>
    </div>
    <Routes >
      <Route exact path='/' element={<Home/> } />
      <Route path='/users' element={<MainUsers/>} />
      <Route path='users/createUser' element={<FormExampleSubcomponentControl />} />
      <Route path='/users/:userId' element={<UserDetails />} />
      <Route path='*' element={<PageEror /> } />
    </Routes>
    <div style={{textAlign:'center'}}>
      <h1>{pre}</h1>
      <button onClick={next} >next</button>
      <button onClick={prev} >prev</button>
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  fibo: state.fibo,
  temp:state.temp,
  pre:state.pre

});

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch({ type: 'NEXT' }),
  prev: () =>dispatch({type:'PREV'})
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
