import React, { useState,useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App (){
  const [mydata,setMydata]= useState(null)
  const [reqparams,setReqparams]= useState({})
  const [dataArray, setDataArray] = useState([]);

  const callApi = (requestParams) => {
    const {method,url} = requestParams
    fetch(url,{
      method:method
    })
      .then(result => result.json())
      .then(result => {
        setDataArray([...dataArray,result])
        setMydata(result)})

    setReqparams(requestParams)
  }
useEffect(() => {
  callApi(requestParams);   
}, [mydata]);

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {reqparams.method}</div>
        <div>URL: {reqparams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={mydata} />
        <Footer />
      </React.Fragment>
    );
}

export default App;
