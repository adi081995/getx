// interface DataType {
//    id: number;
//    title: string;
//    img: string;
// }

// const feature_dataa: DataType[] = [
//    {
//       id: 1,
//       title: "Lifetime free and transaction",
//       img: "/assets/img/images/features_two_img01.png"
//    },
//    {
//       id: 2,
//       title: "Security & Control over money",
//       img: "/assets/img/images/features_two_img02.png"
//    },
//    {
//       id: 3,
//       title: "Mobile Payment Make Easy",
//       img: "/assets/img/images/features_two_img03.png"
//    }
// ]

const FeatureThree = () => {
   return (
      <section className="features-area-two features-bg" style={{ backgroundImage: `url(/assets/img/bg/features_bg.png)` }}>
         <div className="container">
            <div className="features-inner-wrap">
               {/* <div className="features-item-wrap">
                  <div className="row justify-content-center">
                     {feature_data.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                           <div className="features-item-two">
                              <div className="features-img-two">
                                 <img src={item.img} alt="" />
                              </div>
                              <div className="features-content-two">
                                 <h2 className="title">{item.title}</h2>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div> */}
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title section-title-two text-center">
                        <h2 className="title" style={{fontSize: '26px'}} >Welcome to GAPX Token, where cutting-edge cryptocurrency meets versatile digital transactions across gaming, utility sectors, metaverses, and virtual product payments. Built on a unique mechanism, GAPX Token guarantees unparalleled security and efficiency with every transaction. Our platform pioneers reliability and innovation, offering a secure environment for users worldwide. Embrace simplicity and excellence in digital transactions across diverse industries with GAPX Token as your ultimate gateway. Join the future today.</h2>
                     </div>
                  </div>
               </div>
               <div className="features-line-shape"></div>
            </div>
         </div>
         <div className="features-shape-wrap">
            <img src="/assets/img/images/features_shape01.png" alt="" className="alltuchtopdown" />
            <img src="/assets/img/images/features_shape02.png" alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default FeatureThree
