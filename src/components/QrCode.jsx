import './QrCode.css'
import React from "react";
import qrcode from '../imgs/qrcode.png'

export default props => {
    return (
        <div className="container">
            <div className='card'>
                <img src={qrcode} alt='QrCode' />
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level</p>
            </div>
        </div>
    )
}