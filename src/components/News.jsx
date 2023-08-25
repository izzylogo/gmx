import React from 'react'
import '../styles/News.css'

const News = () => {
  return (
    <div className='news'>
        <div className="news-cover">
            <h1>News</h1>
            <div className="news-contain">
                <div className="news-left">
                    <img src="https://i0.gmx.net/image/084/38564084,pd=3,h=360,w=630/tiktok.jpg" alt="" />
                    <h6 className='white'>Internet</h6>
                    <h2>Stricter rules: EU puts Tiktok and Co. on a leash</h2>
                    <h5 >Child pornography, terror propaganda and offers with counterfeit branded shoes: the internet is full of illegal content. Facebook, Tiktok and Co. should take stricter action against this in the future.</h5>
                    <br />
                    {/* <span>12 minutes</span> */}
                </div>
                <div className="news-right">
                    <div className="right-side">
                        <img src="https://img.ui-portal.de/eigenwerbung/WEB.Cent/Reise/gmx_hpt-s_native_ll.jpg" alt="" />
                        <h6 className='white'>Advrtisement</h6>
                        <h2>Book a trip + save Get cashback on a trip booking now</h2>
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