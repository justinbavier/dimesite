import React, { Component } from 'react';
import { Link } from 'react-router'
import dime from '../images/dime.svg'
import success from '../images/success.svg'

class DesktopSuccess extends Component {
  render() {
    return (
      <div className='container'>
        {/*dime logo*/}
        <div className='row col s8' style={{ paddingTop: '5%' }}>
          <img className='responsive-img col s6 offset-s3' src={dime}/>
        </div>
        <div className="card z-depth-5" style={{ height: '40rem'}}>
        <div className='row col s8 offset-s2'>
          <img className='responsive-img col s2 offset-s5' src={success} />
        </div>
        <div className='row center-align col s8 offset-s2'>
          <span classsName='card-title' style={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'white' }}>{` Thank you! `}</span>
          <p style={{ fontFamily: 'Roboto', fontSize: '1.125rem', color: 'white' }}>{` You're in! Check your email to verify it and we'll be in touch! `}</p>
        </div>
        </div>
      </div>
    )
  }
}

class MobileSuccess extends Component {
  render() {
    return (
      <div className='container' style={{ display: 'stretch' }}>
        <div className='row col s8 center-align' style={{ paddingTop: '5rem' }}>
          <img className='center-align dime' src={dime}/>
        </div>
        <div className='row col s8 center-align' style={{ paddingTop: '3rem' }}>
          <img src={success} style={{ height: '10rem' }}/>
        </div>
        <div className='row col s8 center-align'>
          <p style={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'white' }}>{` Thank you! `}</p>
          <p style={{ fontFamily: 'Roboto', fontSize: '1.125rem', color: 'white' }}> {` Check your email to verify it and we'll be in touch! `}</p>
        </div>
      </div>
    )
  }
}

export default class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <div>
          <MobileSuccess />
        </div>
      )
    } else {
      return (
        <div>
          <DesktopSuccess />
        </div>
      )
    }
  }
}
