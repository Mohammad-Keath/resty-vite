import React, { useState } from 'react';

import './form.scss';

function Form(props) {
  const [URL,setURL] = useState('')
  const [method,setMethod]= useState('GET')

  const changeMethod = (e)=>{
    setMethod(e.target.value)
  }

  const changeURL = (e)=>{
    setURL(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method:method,
      url: URL,
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <select className="methods" onChange={changeMethod}>
            <option id="get" value='GET' >GET</option>
            <option id="post" value='POST' >POST</option>
            <option id="put" value='PUT' >PUT</option>
            <option id="delete" value='DELETE' >DELETE</option>
          </select>
          <label >
            {/* <span>URL: </span> */}
            <input name='url' type='text' onChange={changeURL}/>
            <button type="submit">GO!</button>
          </label>
          
        </form>
      </>
    );
}

export default Form;
