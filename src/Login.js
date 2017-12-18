import React, { Component } from 'react';
import {connect} from 'react-redux';
// import store from './store';
// import default from 'react-redux/lib/connect/connect';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder } = this.props;

    return (
      <div className="login">

{/* ///short-circuiting/// */}
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button">Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    //if this key was changed, you would need to change prop name in header and footer and where we are using the prop. 
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder
  }
};

////This set of lines...
// const connector = connect(mapStateToProps);
// const connectedLogin = connector(Login);
// export default connectedLogin;


////...does the same thing as this. This is more common.
export default connect(mapStateToProps)(Login);
