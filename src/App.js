import React from "react"
import Signup from "./Components/Signup"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Profile from "./Components/Profile"
import Login from "./Components/Login"
import PrivateRoute from "./Components/PrivateRoute"
import ForgotPassword from "./Components/ForgotPassword"
import UpdateProfile from "./Components/UpdateProfile"
import Dashboard from "./Components/storage/Home"

function App() {
  return (
    <Router>
      <AuthProvider>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
      </AuthProvider>
    </Router>
  )
}

export default App
