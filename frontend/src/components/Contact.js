import React, { Component} from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div className='Cotactn '>
            <div className='Contact col-lg-6 col-md-12 col-sm-12 d-flex  slide-in-bottom text-white '>
          <div>
        <h className='nimate-charctera'>CONTACT</h>
        <p></p>
        <a className='img-circle' href='https://www.facebook.com/profile.php?id=100050265402859&mibextid=LQQJ4d
            '><img alt="" src="./images/face.png" width={100} height=""></img></a>
        <p></p>
        <p className='nimate-charctera'>FACEBOOK: ธีรภัทร์ สิมสินธุ์</p>
        <a className='contact' href=''><img alt="" src="./images/line.png" width={100} height=""></img></a>
        <p></p>
        <p className='nimate-charctera'>LINE: Thiraphat simsin</p>
        <a className='contact' href=''><img alt="" src="./images/ig.jpg" width={100} height=""></img></a>
        <p></p>
        <p className='nimate-charctera'>IG:Teera._.ss</p>
        <a className='contact' href=''><img alt="" src="./images/github.png" width={100} height=""></img></a>
        <p></p>
        <p className='nimate-charctera'>GITHUB: TEERA</p>
            </div>
            </div>
        </div>
      )
  }
}