import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMessage } from './redux/messagesSlice';
import Greeting from './Greeting';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessage());
    }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Greeting />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;