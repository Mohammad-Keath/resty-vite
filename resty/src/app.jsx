import React, { useState,useEffect,useReducer } from 'react';

import './app.scss';

import History from './components/history/history';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const reducer = (state,action)=>{
  switch(action.type){
    case 'addToHistory':
      return {...state,historyData : [action.payload,...state.historyData]}
    case 'setDataArray':
      return {...state,dataArray : [action.payload,...state.dataArray]}
    case 'setMydata':
      return {...state,mydata : action.payload}
    default:
      return state
  }
}

function App (){
  const [mydata,setMydata]= useState(null)
 

  const initialState = {
    historyData : [],
    mydata :null,
    dataArray:[]
  }
  const [state,dispatch] = useReducer(reducer,initialState)

  const callApi = (requestParams) => {
    const {method,url} = requestParams
    fetch(url,{
      method:method
    })
      .then(result => result.json())
      .then(result => {
        dispatch({type:'setDataArray',payload:result})
        dispatch({type:'setMydata',payload:result})
        dispatch({type:'addToHistory',payload:{method:method,url:url,result:result}})
      })

  }
useEffect(() => {
  console.log(state.historyData) 
}, [state.mydata]);

    return (
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} />
        <Results  data={state.mydata} />
        <History dispatch={dispatch} state={state}/>
        <Footer />
      </React.Fragment>
    );
}

export default App;
