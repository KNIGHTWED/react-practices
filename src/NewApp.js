import React, {useState, useEffect} from 'react';

function PressEnter(f){
  if(f.keyCode === 13){

  }
}

function NewApp(){
  const [age, setAge] = useState(26);
  const [fruit, setFruit] = useState('kiwi');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = 'You clicked ${count} times';
  });

  return(
    <div>
      <h2>Hello, React!</h2>
      <div>
        <p>
          나이 <input id='InputAge' type='test' maxLength='3' placeholder={age} autoFocus></input>
          <button id='btnAge' onClick={()=>{
            let age = document.getElementById('InputAge').value
            if(age === null){
              document.getElementById('ShowAge').style.display='none';
              setAge(null);
            } else{
              setAge(age);
            }

          }}>입력</button>
        </p>
      </div>
      <div id='ShowAge'>
        {age}
      </div>
      <div> 
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  )
}
export default NewApp;