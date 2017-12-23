import React from 'react'
import { Link } from 'react-router'
import dime from '../images/dime.svg'
import donate from '../images/donate.svg'
import discover from '../images/discover.svg'
import invest from '../images/invest.svg'


export default class Desktop extends React.Component{
    constructor() {
      super()
      this.state = {
        email:'',
        FNAME:'',
        LNAME:'',
        url: '/api/signup'
      };

      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleFNAMEChange = this.handleFNAMEChange.bind(this);
      this.handleLNAMEChange = this.handleLNAMEChange.bind(this);


    }

    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handleFNAMEChange(event) {
      this.setState({FNAME: event.target.value});
    }

    handleLNAMEChange(event) {
      this.setState({LNAME: event.target.value});
    }

    render() {
      return (<div>
      <div className='container'>


        {/*dime logo*/}
        <div className='row col s8' style={{ paddingTop: '5%' }}>
          <img className='responsive-img col s6 offset-s3' src={dime}/>
        </div>
        {/*app pitch graphics*/}
        <div className='card z-depth-5'>
          <div className='card-content'>
            <div className='row col s8'>
              <img className='responsive-img col s2 offset-s1' src={donate}/>
              <img className='responsive-img col s2 offset-s2' src={discover}/>
              <img className='responsive-img col s2 offset-s2' src={invest}/>
            </div>

            <div className='row'>
              <div className='center-align col s8 offset-s2'>
                <span className='card-title' style={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'white' }}>{` Hey, we're Dime. `}</span>
                <p style={{ fontFamily: 'Roboto', fontSize: '1.125rem', color: 'white' }}>{` We've been working hard to make it easier for you to give to the charities you believe in. Sign up for our email list and we''ll keep you updated. `}</p>
                <p style={{ fontFamily: 'Roboto', fontSize: '1.125rem', color: 'white' }}>{` See you in 2018. `}</p>
              </div>
            </div>
            {/*email signup form*/}
            <div className='row'>
              <form action={this.state.url} method='POST'>
                <div className='input-field col s4 offset-s2'>
                  <input className='form-input' placeholder='First Name' id='FNAME' type='text' name='FNAME' value={this.state.FNAME} onChange={this.handleFNAMEChange} style={{ backgroundColor: '#ffffff', paddingLeft: 15, borderRadius: 10 }}/>
                </div>
                <div className='input-field col s4'>
                  <input className='form-input' placeholder='Last Name' id='LNAME' type='text' name='LNAME' value={this.state.LNAME} onChange={this.handleLNAMEChange} style={{ backgroundColor: '#ffffff', paddingLeft: 15, borderRadius: 10 }}/>
                </div>
                <div className='input-field col s8 offset-s2'>
                  <input className='form-input' placeholder='Email' id='email' type='text' name='email' value={this.state.email} onChange={this.handleEmailChange} style={{ backgroundColor: '#ffffff', paddingLeft: 15, borderRadius: 10 }} />
                </div>
                <input className='btn col s2 offset-s5' type='submit' value='thanks!' style={{ borderRadius: 10 }}/>
              </form>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      </div>
    )
    }
  }
