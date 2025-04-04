import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

const cohortName = "2412-ftb-mt-web-pt";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
