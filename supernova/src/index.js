import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root');
const appComponents = document.getElementsByClassName('components-container')[0];
/*
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = (
      <div className = 'profile-container'>
        <img className = 'image' src = {this.props.image} onMouseMove = {this.chil} onMouseOut = {this.outChil} />
        <span className = 'titles name'> {this.props.name} </span>
        <span className = 'titles title'> {this.props.title} </span>
        <span className = 'titles address'> {this.props.address} </span>
      </div>
    );
    return profile;
  }

  chil(e) {
    if (e.target.className != 'image') return
    e.target.classList.add('hover');
  }
  outChil(e) {
    document.getElementsByClassName('image')[0].classList.remove('hover');
  }
}

const url = 'https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/images/mostafa.jpg';
ReactDOM.render(<Profile image = {url} name = 'Mostafa Mohamed' title = 'Front-End Developer' address = 'Poland, Warsaw' />,
appComponents
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render() {
    const timer = (
      <div className = 'timer'>
        <div className = 'view-timer'>
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
    return timer;
  }

  componentDidMount() {
   this.start = setInterval( () => this.setState({date: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.start);
  }
}

function del(e) {
  e.target.parentElement.remove();
}

function Row(props) {
  return (
    <div className = 'row-line'>
      <div className = 'name-place'>{props.name}</div>
      <div className = 'close' onClick = {del}>delete</div>
    </div>
  )
  
}


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
    this.addValue = this.addValue.bind(this);
  }

  render() {
    return (
      <div className = 'container-list'>
        <button className = 'btn' onClick = {this.addValue}>Add value</button>
        <input type = 'text' />
        <div className = 'list-board'>{this.state.names.map(a => <Row name = {a} /> )}</div>
      </div>
    );
  }
  addValue() {
   let arr = []
   let userValue = document.getElementsByTagName('input')[0].value;
   let inp = document.getElementsByTagName('input')[0];
   if (!userValue) {
     inp.style.border = '2px solid red';
     return;
   }
   //arr.push(userValue);

   for (let i = 0; i < this.state.names.length; i++) {
     if (this.state.names[i] == arr[i]) {
       const active = window.confirm('This Values inserted before. do you want add it more?');
       if (!active) return;

     }
   }
   
   inp.style.border = '';
   this.setState(() => this.state.names.push(userValue))
  }
}

//Conditional...

class ButtonLogin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const btn = <div className = 'divBtn' onClick = {this.props.onClick}>Log In</div>;
      return btn;
  }
}
class ButtonLogout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const btn = <div className = 'divBtn-2' onClick = {this.props.onClick}>Log out</div>;
      return btn;
  }
}


class Logging extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn() {
    this.setState({isLogged: true});
  }

  logOut() {
    this.setState({isLogged: false});
  }

  render() {
    let log = this.state.isLogged;
    let msg ;
    let button;

    if (log == false) {
      button = <ButtonLogout onClick = {this.logIn} />;
      msg = 'Welcome Back!';
    } else {
      button = <ButtonLogin onClick = {this.logOut} />
      msg = 'You logged out';
    }

    return (
      <div className = 'conta'>
        {button}
        <div className = 'message'>{msg}</div>
      </div>
    );
  }

}


class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lot = this.props.msg.length;
    console.log(lot);
    return (
      <div className = 'not'>
    You have {this.props.msg} unread message
  </div>
    );
  }
}

const notifications = ['JavaScript', 'NodeJs', 'ReactJs', 'Express', 'PostgreSQL'];

// creating list....


class Lists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {notifications.map((a) => <li>{a}</li>)}
      </div>
    )
  }
}



function addValues() {
  const userValue = document.getElementsByClassName('user-input')[0].value;
  notifications.push(userValue);
  ReactDOM.render(<Lists />, appComponents);
}

const userClick = document.getElementById('btnaddList');
userClick.onclick = addValues;

*/

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.logThere = this.logThere.bind(this);
    this.handlChange = this.handlChange.bind(this);
  }
  logThere(e) {
    const name = document.getElementsByClassName('user-name-input')[0].value;
    alert(name);
  }
  handlChange(e) {
    const show = document.getElementsByClassName('conf')[0];
    show.textContent = e.target.value;
  }

  render() {
    return (
      <div className = 'form-container'>
        <div className = 'user-name'>
          <input className = 'user-name-input' type = 'text' placeholder = 'example@user' required onChange = {this.handlChange}/>
        </div>
        <div className = 'user-password'>
          <input className = 'user-password-input' type = 'password' placeholder = 'your password' required />
        </div>
        <div className = 'user-sub'>
          <button className = 'user-btn-sub' onClick = {this.logThere}>submit</button>
        </div>
        <div className = 'conf'></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Form />,
  appComponents
);