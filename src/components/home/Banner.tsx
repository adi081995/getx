// import CountdownClock from "../../ui/CountDownClock"

const Banner = () => {
   return (
      <section className="banner-area banner-bg" style={{ backgroundImage: `url(/assets/img/banner/features_bg.png)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="banner-content text-center">
                     <h2 className="title">Shaping Your Secure Digital Future with Gap’X<br /> </h2>
                     <p>A new smart block chain based marketplace for trading digital <br /> goods & assets according.</p>
                     <div className="banner-countdown-wrap">
                        <div className="coming-time" data-countdown="2024/8/29">
                           {/* <CountdownClock /> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="banner-scroll-down">
               <a href="#contribution" className="section-link">
                  <span></span>
                  <span></span>
                  <span></span>
               </a>
         </div>
         <div className="banner-shape-wrap">
            {/* <img src="/assets/img/banner/banner_1.png" alt="" className="leftToRight" /> */}
            <img src="/assets/img/banner/banner_2.png" alt="" className="alltuchtopdown" />
         </div>
      </section>
   )
}

export default Banner
