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
      title: (<>Secure and Efficient Transactions</>),
      desc: (<>Trade with confidence on our secure platform powered by GAPX Token's advanced blockchain technology, ensuring fast and reliable transactions.</>),
      img: "/assets/img/images/features_img01.png",
   },
   {
      id: 2,
      title: (<>Reduced Trading Fees</>),
      desc: (<>Enjoy lower transaction costs when trading GAPX Token pairs on ExBit Global, maximizing your profitability with every trade.</>),
      img: "/assets/img/images/features_img02.png",
   },
   {
      id: 3,
      title: (<>Liquidity Rewards</>),
      desc: (<>Stake your GAPX Tokens to earn passive income through liquidity rewards, enhancing your portfolio's growth potential.</>),
      img: "/assets/img/images/features_img03.png",
   },
   {
      id: 4,
      title: (<>Exclusive Trading Opportunities</>),
      desc: (<>Access exclusive trading pairs and opportunities available only through GAPX Token integration, diversifying your investment strategy.</>),
      img: "/assets/img/images/features_img04.png",
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Explore the Power of GAPX Token Integration on Exbitglobal</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content">
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

export default FeatureOne
