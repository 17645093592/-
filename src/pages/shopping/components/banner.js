import React, { Component } from 'react'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import "../../../assets/shooping/css/banner.css"
export default class banner extends Component {
        componentDidMount(){
        new Swiper('.swiper-container', {
            loop: true,//无缝轮播
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
        })
    }
    render() {
        return (
            <div className="shoop-banner">
                 <div className="swiper-container">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a><img className="banner-img" src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F11%2F22%2F165612.96935414.jpg&width=750&height=500&clipType=4"/></a>
                        </div>
                        <div className="swiper-slide">
                            <a><img className="banner-img" src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F09%2F19%2F104138.65713207.jpg&width=750&height=500&clipType=4"/></a>
                        </div>
                        <div className="swiper-slide">
                            <a><img className="banner-img" src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F09%2F02%2F111000.90305900.jpg&width=750&height=500&clipType=4"/></a>
                        </div>
                        <div className="swiper-slide">
                            <a><img className="banner-img" src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F19%2F152249.72244334.jpg&width=750&height=500&clipType=4"/></a>
                        </div>
                     </div>
                     <div className="swiper-pagination"></div>
                 </div>
            </div>
        )
    }
}
