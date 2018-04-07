

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {userInfo} from './../crud/CRUD';
import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import AnimalContainer from './AnimalContainer';
import "./../css/App.css";
import App from './App';
import { shallow } from 'enzyme';


it('App renders without error', () => {
  shallow(<App />),
  document.getElementById('root') || document.createElement('div');
});
