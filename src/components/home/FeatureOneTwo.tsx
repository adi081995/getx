import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: string;
}
const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Launchpad </>),
      desc: (<>Earn rewards by staking GAPX Tokens, contributing to network security and liquidity provision.</>),
      img: "/assets/img/banner/banner_1.png",
   },
   {
      id: 2,
      title: (<>Presale </>),
      desc: (<>Invite friends to join ExBit Global and earn rewards through our referral program, expanding your earnings with each new member.</>),
      img: "/assets/img/images/features_img02.png",
   },
   {
      id: 3,
      title: (<>Development </>),
      desc: (<>Participate in token launch events via our launchpad, gaining early access to promising projects and potential investment opportunities.</>),
      img: "/assets/img/images/features_img03.png",
   },
   {
      id: 4,
      title: (<>Team </>),
      desc: (<>Engage in regular promotions and giveaways to win GAPX Tokens and other exciting rewards, recognizing your loyalty and active participation.</>),
      img: "/assets/img/images/features_img04.png",
   },
   {
      id: 5,
      title: (<>Staking Partners Bonus </>),
      desc: (<>Reserved for incentivizing staking activities, encouraging active participation in the ecosystem and promoting token liquidity.</>),
      img: "/assets/img/banner/banner_1.png",
   },
   {
      id: 6,
      title: (<>Reserve </>),
      desc: (<>Held in reserve to support liquidity management, strategic partnerships, and unforeseen operational needs, ensuring stability and sustainability.</>),
      img: "/assets/img/images/features_img02.png",
   },
]
const FeatureOneTwo = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Join the GAPX Token Ecosystem</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content features-item-join">
                           <h2 className="title"><Link to="#!">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <img src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FeatureOneTwo
