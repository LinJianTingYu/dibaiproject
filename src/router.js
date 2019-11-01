import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './App'
import Home from './pages/Home/Home'
import Message from './pages/Message/Message'
import Environment from './pages/Environment/Environment'
import Devices from './pages/Devices/Devices'
import Eat from './pages/Eat/Eat'
import Work from './pages/Work/Work'
import User from './pages/User/User'
import UserInfo from './components/User/UserInfo'
import Organization from './components/User/Organization'
import UserAdmin from './components/User/UserAdmin'

const Router = () => 
  <BrowserRouter>
    <Switch>
      <Route path='/' render={()=>
        <App>
          <Switch>
            <Route path='/admin/home' component={Home}></Route>
            <Route path='/admin/user' render={() =>
              <User>
                <Switch>
                  <Route path='/admin/user/info' component={UserInfo}></Route>
                  <Route path='/admin/user/organization' component={Organization}></Route>
                  <Route path='/admin/user/admin' component={UserAdmin}></Route>
                  <Redirect to="/admin/user/info" />
                </Switch>
              </User>
            }></Route>
            <Route path='/admin/environment' component={Environment}></Route>
            <Route path='/admin/devices' component={Devices}></Route>
            <Route path='/admin/eat' component={Eat}></Route>
            <Route path='/admin/work' component={Work}></Route>
            <Route path='/admin/message' component={Message}></Route>
            <Redirect to="/admin/home" />
          </Switch>
        </App>}>
      </Route>
    </Switch>
  </BrowserRouter>

export default Router

//component={Message}