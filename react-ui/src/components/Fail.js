import React, { Component } from 'react';
import { Link } from 'react-router'
import dime from '../images/dime.svg'
import error from '../images/error.svg'

class DesktopFail extends Component {
  constructor() {
    super();
    this.back = this.back.bind(this);
  }
  back() {
    window.location = '/'
  }
  render() {
    return (
      <div className='container'>
        {/*dime logo*/}
        <div className='row col s8' style={{ paddingTop: '5%' }}>
          <img className='responsive-img col s6 offset-s3' src={dime}/>
        </div>
        {/*error */}
        <div className="card z-depth-5" style={{ height: '40rem'}}>
          <div className='row col s8 offset-s2'>
            <img className='responsive-img col s2 offset-s5' src={error} />
          </div>
          <div className='row center-align col s8 offset-s2'>
            <span classsName='card-title' style={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'white' }}>{` Well, that didn't go so well...`}</span>
            <p style={{ fontFamily: 'Roboto', fontSize: '1.125rem', color: 'white' }}>{` Maybe try heading back to home base and giving it another shot? `}</p>
          </div>
          <div className='row center-align col s8 offset-s2'>
            <div className='btn' style={{ borderRadius: '10' }} onClick={this.back} >Go back</div>
          </div>
        </div>
      </div>
    )
  }
}

class MobileFail extends Component {
  constructor() {
    super();
    this.back = this.back.bind(this);
  }
  back() {
    window.location = '/'
  }
  render() {
    return (
      <div className='container' style={{ display: 'stretch' }}>
        <div className='row col s8 center-align' style={{ paddingTop: '5rem' }}>
          <img className='center-align dime' src={dime}/>
        </div>
        <div className='row col s8 center-align' style={{ paddingTop: '3rem' }}>
          <img src={error} style={{ height: '10rem' }}/>
        </div>
        <div className='row col s8 center-align'>
          <p style={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'white' }}>{` Oh no... `}</p>
          <p style={{ fontFamily: 'Roboto', fontSize: '1.125rem', color: 'white' }}> {` Maybe try heading back to home base and giving it another shot? `}</p>
        </div>
        <div className='row center-align col s8 offset-s2'>
          <div className='btn' style={{ borderRadius: '10' }} onClick={this.back} >Go back</div>
        </div>
      </div>
    )
  }
}
export default class Fail extends Component {
  constructor(props) {
    super(props)
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
          <MobileFail />
        </div>
      )
    } else {
      return (
        <div>
          <DesktopFail />
        </div>
      )
    }
  }
}
