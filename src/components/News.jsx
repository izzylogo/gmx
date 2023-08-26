import React from 'react'
import '../styles/News.css'

const News = (props) => {
  return (
    <div className='news'>
        <div className="news-cover">
            <h1>{props.topic}</h1>
            <div className="news-contain">
                <div className="news-left">
                    <img src={props.img1} alt="" />
                    <h6 className='white'>{props.title1}</h6>
                    <h2>{props.head}</h2>
                    <h5 >{props.detail}</h5>
                    <br />
                    {/* <span>12 minutes</span> */}
                </div>
                <div className="news-right">
                    <div className="right-side">
                        <img src={props.img2} alt="" />
                        <h6 className='white'>{props.title2}</h6>
                        <h2>{props.head2}</h2>
                    </div>
                    <div className="right-side">
                        <img src="https://img.ui-portal.de/eigenwerbung/WEB.Cent/Reise/gmx_hpt-s_native_ll.jpg" alt="" />
                        <h6 className='white'>Advrtisement</h6>
                        <h2>Book a trip + save Get cashback on a trip booking now</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News