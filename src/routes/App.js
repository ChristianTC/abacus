import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
const App = () => {
    <BrowserRouter>
        <Route exact path="/"><Home></Home></Route>
    </BrowserRouter>
}

export default App;
