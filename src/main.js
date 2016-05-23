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
    let toolbarButton;

    if (!ons.platform.isAndroid()) {
      toolbarButton = <ToolbarButton onClick={this.signIn}>
        <Icon icon={{default: 'ion-log-in'}} />
      </ToolbarButton>;
    }
    return (
       <div class="tile">
         <Page id="login"
           renderToolbar={() =>
             <Toolbar>
               <div className="center">Login</div>
               <div className="right">
                 {toolbarButton}
               </div>
             </Toolbar>
             }>

             <img id='logo' src='img/logo_react.png' />
             <div>
               <img src='img/logo_title.png' />
             </div>

           <Input value={this.state.email} onChange={this.emailChange} placeholder="Email" type="text" modifier="underbar" float />
           <Input value={this.state.password} onChange={this.passwordChange} placeholder="Password" type="password" modifier="underbar" float />
           <Button id='signIn' onClick={this.signIn} modifier="large">Sign In</Button>
           <Button id='forgetBtn'  onClick={this.forgotPassword} modifier="quiet">FORGOT PASSWORD?</Button>
          </Page>
        </div>
    );
  }
});

ReactDOM.render(<LoginPage />, document.getElementById('app'));
