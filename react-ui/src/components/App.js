import React, { Component } from 'react';
import { Link } from 'react-router'
import give from '../images/give.png'
import donate from '../images/donate.svg'
import discover from '../images/discover.svg'
import invest from '../images/invest.svg'
import Mobile from './Mobile.js'
import MobileCard from './MobileCard.js'
import Desktop from './Desktop.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
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
          <Mobile />
          <MobileCard />
        </div>
      )
    } else {
      return (
        <div>
          <Desktop />
        </div>
      )
    }
  }
}
