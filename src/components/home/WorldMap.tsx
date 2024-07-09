// import { Link } from "react-router-dom"

const WorldMap = () => {
    return (
       <section className="download-area pt-130 pb-130" id="referandearn">
          <div className="container">
             <div className="download-inner-wrap">
                <div className="row align-items-end">
                   <div className="col-lg-6">
                      <div className="download-content">
                         <div className="section-title mb-40">
                            <h2 className="title">Bangladesh &nbsp; <span>Nigeria</span> &nbsp; <span>Australia</span></h2>
                            <h2 className="title">India &nbsp; <span>Pakistan</span> &nbsp; <span>Pillipines</span></h2>
                            <h2 className="title">Germany &nbsp; <span>Canada</span></h2>
                         </div>
                         <div className="download-list">
                            <ul className="list-wrap">
                               {/* <li><span>1</span>White Paper</li>
                               <li><span>2</span>Privacy & Policy</li> */}
                            </ul>
                         </div>
                         {/* <div className="download-btn-wrap">
                            <Link to="#" className="download-btn"><img src="/assets/img/images/download_btn01.png" alt="" /></Link>
                            <Link to="#" className="download-btn"><img src="/assets/img/images/download_btn02.png" alt="" /></Link>
                         </div> */}
                      </div>
                   </div>
                   <div className="col-lg-6">
                      <div className="download-img">
                         <img src="/assets/img/images/map.jpg" alt="" />
                         {/* <img src="/assets/img/images/download_img02.png" alt="" /> */}
                      </div>
                   </div>
                </div>
                <div className="download-shape-wrap">
                   {/* <img src="/assets/img/images/download_shape01.png" alt="" /> */}
                   {/* <img src="/assets/img/images/download_shape02.png" alt="" /> */}
                </div>
             </div>
          </div>
       </section>
    )
 }
 
 export default WorldMap
 