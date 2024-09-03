import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
   <footer className= {`${style.footerColor} bg-dark`} >
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
      <div className="start_item">
        <div className="item_footer">
          <span>21 revolution</span>
          <span>paris, France</span>
        </div>
        <div className="item_footer">
          <span>+ 1 555 12345</span>
        </div>
        <div className="item_footer">
          <span>support@company.com</span>
        </div>
        </div>
      </div>
      <div className="col-lg-6 ">
        <div className="end_footer" >
        <div className=" d-flex flex-column">
          <h3>About the company</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, sed!</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</footer>

  )
}
