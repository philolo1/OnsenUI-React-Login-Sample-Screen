import React from 'react';
import ReactDOM from 'react-dom';
import {
  Page,
  Button,
  Toolbar,
  Icon,
  Input,
  ToolbarButton,
  Row
} from 'react-onsenui';

// load Onsen UI library
import ons from 'onsenui';

var LoginPage = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },

  signIn: function() {
    ons.notification.alert({
      message: `You entered '${this.state.email}' & '${this.state.password}' `
    });
  },

  forgotPassword: function() {
    ons.notification.prompt({
      message: 'What is your email?',
      callback: function(email) {
        ons.notification.alert({
          message: 'The new password will be send to ' + email
        });
      }
    });
  },

  emailChange: function(event) {
    this.setState({
      email: event.target.value
    });
  },

  passwordChange: function(event) {
    this.setState({
      password: event.target.value
    });
  },

  render: function() {
    return (
       <div class="tile">
         <Page id="login"
           renderToolbar={() =>
             <Toolbar>
               <div className="center">Login</div>
               <div className="right">
                 <ToolbarButton onClick={this.signIn}>
                   <Icon icon={{default: 'ion-log-in', material: 'md-sign-in'}} />
                 </ToolbarButton>
               </div>
             </Toolbar>
             }>

           <Input value={this.state.email} onChange={this.emailChange} placeholder="Email" type="text" modifier="underbar" float />
           <Input value={this.state.password} onChange={this.passwordChange} placeholder="Password" type="password" modifier="underbar" float />
           <Button onClick={this.signIn} modifier="large">Sign In</Button>
           <Button onClick={this.forgotPassword} modifier="quiet">Forgot password?</Button>
          </Page>
        </div>
    );
  }
});

ReactDOM.render(<LoginPage />, document.getElementById('app'));
