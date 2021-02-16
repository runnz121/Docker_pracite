import React, {useEffect, useState} from 'react';
import axios from 'axios'; //package.json의 dependency에 종속성 추가 해주어야 함 
import logo from './logo.svg';
import './App.css';

function App() {


  useEffect(() => {
    //여기서 데이터베이스에 있는 값을 가져온다.
    axios.get('/api/values')
      .then(response => {
        console.log('response', response)
        setLists(response.data)
      })
  }, [])


  //onchange 발생할때마다 changehandler 발생
  const changeHandler = (event) =>{
    setValue(event.currentTarget.value)
  }

  //submit evnet 발생시 submithandler 발생
  const submitHandler =(event) => {
    event.preventDefault();

    axios.post('/api/value', {value: value})
    .then(response => {
      if(response.data.success) { //server.js에 success인 경우에 대한 조건이 적혀있기 때문에 가능
        console.log('response', response)
        setLists([...lists, response.data]) //...lists : 원래 있던 데이터, 이후 response.data는 새로운 데이터로 들어간다
        setValue("");
      } else {
        alert('값을 DB에 넣는데 실패했습니다.')
      }
    })
  } 




  const [lists, setLists] = useState([])
  const [value, setValue] = useState("")



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="container">

        {lists && lists.map((list, index) => (
            <li key={index}>{list.value} </li> //index 사용시 고유 키값 지정 필요
          ))}




        <form className="example" onsubmit = {submitHandler}>
          <input
            type="text"
            placeholder="입력해주세요..."
            onChange={changeHandler}
            value={value}
            />
            <button type ="submit">확인</button>
        </form>
      </div> 
      </header>
    </div>
  );
}

export default App;
