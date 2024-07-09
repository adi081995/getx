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
      title: (<>Mission</>),
      desc: (<>Our mission at Gapx is to empower a dynamic community through an innovative referral program and a resilient ecosystem. We redefine digital interactions with a secure token that elevates gaming, the metaverse, and digital transactions. Delve into our Gapx Chain, Wallet, Exchange, and Gaming Portal, where cutting-edge blockchain integration sets revolutionary standards in technology and user experience.</>),
      img: "/assets/img/banner/banner_1.png",
   },
   {
      id: 2,
      title: (<>Vision</>),
      desc: (<>To lead the evolution of digital interaction through Gapx, enhancing global connectivity and innovation. We envision a future where our secure token, integrated across gaming, the metaverse, and digital transactions, fosters seamless and empowered communities worldwide. Join us in shaping tomorrow's digital landscape with confidence and trust.</>),
      img: "/assets/img/images/features_img02.png",
   },
   {
      id: 3,
      title: (<>Vision</>),
      desc: (<>To lead the evolution of digital interaction through Gapx, enhancing global connectivity and innovation. We envision a future where our secure token, integrated across gaming, the metaverse, and digital transactions, fosters seamless and empowered communities worldwide. Join us in shaping tomorrow's digital landscape with confidence and trust.</>),
      img: "/assets/img/images/vm.png",
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Our Mission And Vision</h2>
                  </div>
               </div>
            </div>
            <div className="row">
            {feature_data.map((item) => (
               (item.id === 1 || item.id === 2) ? (
                  <div key={item.id} className="col-lg-4">
                     <div className="features-item">
                     <div className="features-content" style={{width:'unset'}}>
                        <h2 className="title" style={{textAlign:'center'}}><Link to="#!">{item.title}</Link></h2>
                        <p style={{textAlign:'justify'}}>{item.desc}</p>
                     </div>
                     </div>
                  </div>
               ) : (
                  <div key={item.id} className="col-lg-4">
                     <div key={item.id} className="features-img">
                        <img src={item.img} alt="" />
                     </div>
                  </div>
               )
               ))}



            </div>
         </div>
      </section>
   )
}

export default FeatureOne
