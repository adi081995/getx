// import { Link } from "react-router-dom"

const Contribution = () => {
   return (
      <section id="contribution" className="contribution-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="contribution-title">
                     <h2 className="title"><span></span> About </h2>
                  </div>
                  <div className="section-title section-title-two text-center">
                        <p className="title title-font" >Discover Gapx, where innovation meets reliability in the digital realm. Our mission is to foster a strong community through a dynamic referral program and a robust ecosystem. Gapx introduces a secure token tailored for seamless functionality across gaming, the metaverse, and digital transactions. Explore our cutting-edge offerings: the Gapx Chain, a state-of-the-art blockchain network; the Gapx Wallet, an intuitive digital wallet solution; the Gapx Exchange, your trusted platform for cryptocurrency trading; and the Gapx Gaming Portal, revolutionizing gaming experiences with blockchain integration. Step into the future of secure digital interactions with Gapx today.</p>
                        <p className="title title-font" >Embark on the Gapx journey, launched in June 2024 on the BNB Smart Chain with an impressive total supply of 900 crore tokens. Immerse yourself in a world of possibilities: earn generous rewards through our dynamic referral program. Seamlessly acquire Gapx from our dedicated exchange and effortlessly swap it with USDT. Experience enhanced trading on GapXbit, where every transaction is streamlined for your convenience and tailored for unparalleled trading experiences.</p>
                     </div>
                  {/* <div className="progress-wrap">
                     <ul className="list-wrap">
                        <li>Pre-Sale</li>
                        <li>soft cap</li>
                        <li>bonus</li>
                     </ul>
                     <div className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "83%" }}></div>
                     </div>
                     <h6 className="progress-title"> 65 target raised <span>1 BNB Smart Chain  = 0 GAPX</span></h6>
                  </div> */}
                  {/* <div className="contribution-btn">
                     <Link to="/contact" className="btn">Purchase a Token</Link>
                     <Link to="/assets/white-paper-PDF-final-Gapx-file.pdf" download className="btn btn-two">Read White Paper</Link>
                  </div> */}
               </div>
            </div>
         </div>
         <div className="contribution-shape-wrap">
            <img src="/assets/img/images/contribution_shape01.png" alt="" className="alltuchtopdown" />
            <img src="/assets/img/images/contribution_shape02.png" alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default Contribution
