import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
          <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-item-canter'>
                <div>
                <h1 className='nimate-charctera m=0 slide-in-bottom'>PERSONAL RECORD</h1>
                    <p className='nimate-charctera ls-2 mt-2 slide-in-bottom'>My name is Mr. Teeraphat Simsin. My nickname is Teera.</p>
                    <p className='nimate-charctera m=0 slide-in-bottom'>Birth date: 3 November 2003</p>
                    <p className='nimate-charctera m=0 slide-in-bottom'>Easy to get along with and a person who smiles easily.</p>
                    <p className='nimate-charctera m=0 slide-in-bottom'>Studying a bachelor's degree at NORTH BANGKOK UNIVERSITY</p>
                    <p className='nimate-charctera picass'>Special skill: Playing the guitar</p>
                    <p className='nimate-charctera after'>Future career: I want to work in IT.</p>
                    <p className='nimate-charctera skill'>skill: can write code language java,Python,javascript,Html</p>
                    </div>
              </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                  <img className='img-circle' src="./images/TEERA2.jpg" alt="flower" width="500" height="500"/>{''}
              </div>
              </div>
      </Fragment>
    )
  }
}