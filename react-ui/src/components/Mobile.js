import React from 'react'
import { Link } from 'react-router'
import dime from '../images/dime.svg'
import donate from '../images/donate.svg'
import discover from '../images/discover.svg'
import invest from '../images/invest.svg'
import Carousel from 'nuka-carousel'

const Decorators = [
  {
   component: React.createClass({
     render() {
       return (
         <button
           style={this.getButtonStyles(this.props.currentSlide === 0)}
           onClick={this.props.previousSlide}>PREV</button>
       )
     },
     getButtonStyles(disabled) {
       return {
         display: 'none',
       }
     }
   }),
 },
 {
   component: React.createClass({
     render() {
       return (
         <button
           style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
           onClick={this.props.nextSlide}>NEXT</button>
       )
     },
     getButtonStyles(disabled) {
       return {
         display: 'none',
       }
     }
   }),
 }
]

export default class Mobile extends React.Component{
  autoScroll() {
    window.scroll({
    top: 550,
    left: 0,
    behavior: 'smooth'
    });
  }

  render() {
    return (<div>
      <div className='container' style={{ display: 'stretch' }}>
        {/*dime logo*/}
        <div className='row col s8 center-align' style={{ paddingTop: '5rem'}}>
          <img className='center-align dime' src={dime}/>
        </div>
        {/*app pitch graphics*/}
        <div className='card-content center-align' style={{ paddingTop: '5rem'}}>
          <Carousel
            autoplay='true'
            autoplayInterval='3000'
            initialSlideWidth='10'
            swiping='true'
            wrapAround='true'
            decorators={Decorators}>
              <img src={donate} style={{ height: '13rem'}}/>
              <img src={discover} style={{ height: '13rem'}}/>
              <img src={invest} style={{ height: '13rem'}}/>
          </Carousel>
        </div>
        <div className='center-align' style={{ paddingTop: '2.5rem' }}>
           <a className='btn-floating btn-large transparent z-depth-0' onClick={this.autoScroll}><i className="material-icons" style={{ fontSize: '2.5rem' }}>keyboard_arrow_down</i></a>
        </div>
        {/*email signup form*/}
      </div>
    </div>
  )
  }
}
