import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import store from "./store/index"
import {addArticle} from "./actions/index"

import Exam from './Exam'
import List from './components/List'
import Form from './components/Form'
window.store = store;
window.addArticle = addArticle;

const App = () => {
  return (
      <Provider store={store}>
        <div>
          <p>React here! good</p>

            <div>

                <Exam></Exam>


            </div>
            <div>

                <List/>
            </div>

            <div>
                <Form/>
            </div>

        </div>
      </Provider>
  );
};

export default App;

ReactDOM.render(  <App/>    , document.getElementById("app"));
