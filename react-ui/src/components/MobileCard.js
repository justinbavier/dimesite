import React from 'react'
import { Link } from 'react-router'
import dime from '../images/dime.svg'
import donate from '../images/donate.svg'
import discover from '../images/discover.svg'
import invest from '../images/invest.svg'
import Carousel from 'nuka-carousel'

export default class MobileCard extends React.Component{
  constructor() {
    super()
    this.state = {
      email:'',
      FNAME:'',
      LNAME:''
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
        {/*card with the words*/}
        <div className='section' style={{ height: '2rem' }} />
        <div className='card wordCard'>
          <div className='row'>
            <div className='center-align col s12'>
              <p style={{ fontFamily: 'Roboto', fontSize: '1.25rem', color: 'white' }}>{` Hey Nashville, we're Dime. `}</p>
              <p style={{ fontFamily: 'Roboto', fontSize: '1rem', color: 'white' }}>{` We've been working hard to make it easier for you to give to the charities you believe in. Sign up for our email list and we'll keep you updated. `}</p>
              <p style={{ fontFamily: 'Roboto', fontSize: '1rem', color: 'white' }}>{` See you in 2018. `}</p>
              <div className='row'>
                <form action="/api/signup" method="POST">
                  <div className='input-field col s8 offset-s2'>
                    <input className='form-input' placeholder='First Name' id='FNAME' type='text' name='FNAME' value={this.state.FNAME} onChange={this.handleFNAMEChange} style={{ backgroundColor: '#ffffff', paddingLeft: 15, borderRadius: 10 }}/>
                  </div>
                  <div className='input-field col s8 offset-s2'>
                    <input className='form-input' placeholder='Last Name' id='LNAME' type='text' name='LNAME' value={this.state.LNAME} onChange={this.handleLNAMEChange} style={{ backgroundColor: '#ffffff', paddingLeft: 15, borderRadius: 10 }}/>
                  </div>
                  <div className='input-field col s8 offset-s2'>
                    <input className='form-input' placeholder='Email' id='email' type='text' name='email' value={this.state.email} onChange={this.handleEmailChange} style={{ backgroundColor: '#ffffff', paddingLeft: 15, borderRadius: 10 }} />
                  </div>
                  <input className='btn col s6 offset-s3 z-depth-5' type='submit' value='sign up!' style={{ borderRadius: 10 }}/>
                </form>
              </div>
            </div>
          </div>
          <div className='section' style={{ height: '5rem' }}/>
        {/*email signup form*/}
        </div>
        <div className='section' style={{ height: '7rem' }} />
      </div>
    </div>
  )
  }
}
