import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import ShowStudent from "./Component/ShowStudent"
import AddStudent from "./Component/AddStudent"
import EditStudent from "./Component/EditStudent"
import Register from "./Component/Register"
import Login from "./Component/Login"
import Home from "./Component/Home"


function isTokenValid(){
  let token = window.localStorage.getItem('token')
  if(token !== null){
    return true
  }
  else{
    return false
  }
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/showstudent" render={() => isTokenValid() ? <ShowStudent />: <Redirect to="/"/>} />
          <Route path="/addStudent" render={() =>  isTokenValid() ?  <AddStudent />: <Redirect to="/"/>} />
          <Route path="/editStudent" render={() =>  isTokenValid() ?  <EditStudent />: <Redirect to="/"/>} />
          <Route path="/register" render={()=> <Register />} />
          <Route path="/login" render={()=> <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}