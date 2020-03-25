import React from 'react'
import ReactDOM from 'react-dom'

const user1 = {
  name : 'Brus', 
  age : 21,
  country : 'Mexico'
}


function getInfo (user) {
  return `My name is ${user.name} and I from ${user.country}. I have ${user.age} years old.`
}

const App = <h1> {getInfo(user1)} <br></br> {getInfo(user1)} </h1> 

ReactDOM.render(App, document.getElementById('root'))