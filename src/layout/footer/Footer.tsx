import { Link } from "react-router-dom";
// import NewsletterForm from "../../components/forms/NewsletterForm";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [
   {
      id: 1,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
      title: "Usefull Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/#feature", link_title: "About Us" },]
   },
   {
      id: 2,
      class_name: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
      title: "SOLUTIONS",
      footer_link: [{ link: "/#chart", link_title: "Tokenomics" }, { link: "/#roadMap", link_title: "RoadMap" },]
   },
   {
      id: 3,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
      title: "Usefull Links",
      footer_link: [{ link: "/#referandearn", link_title: "Refer & Earn" }, { link: "/#download-area", link_title: "Contact" },]
   },
]

const Footer = () => {
   return (
      <footer>
         <div className="footer-area footer-bg" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}>
            <div className="container">
               <div className="footer-top">
                  <div className="row">
                     {footer_data.map((item) => (
                        <div key={item.id} className={item.class_name}>
                           <div className="footer-widget">
                              <h4 className="fw-title">{item.title}</h4>
                              <div className="footer-link">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((li, i) => (
                                       <li key={i}><Link to={li.link}>{li.link_title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="col-xl-3 col-lg-4 col-sm-8">
                        <div className="footer-widget">
                           <h4 className="fw-title">Follow Us on Social Media</h4>
                           <div className="footer-newsletter">
                              <div className="social-icon-right mt-30">
                                 <Link to="https://www.facebook.com/profile.php?id=61562116088413&sk=about"><i className="fab fa-facebook-f"></i></Link>
                                 <Link to="https://x.com/GapXbit"><i className="fab fa-twitter"></i></Link>
                                 <Link to="https://medium.com/@gapxbit"><i className="fab fa-medium"></i></Link>
                                 <Link to="https://www.quora.com/profile/GAP-X-BIT"><i className="fab fa-quora"></i></Link>
                                 <Link to="https://coinmarketcap.com/community/profile/Gapx/"><i className="fas fa-users"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="footer-bottom">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text">
                           <p>Copyright © 2024 Gapx. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-shape-wrap">
               <img src="/assets/img/images/footer_shape01.png" alt="" className="alltuchtopdown" />
               <img src="/assets/img/images/footer_shape02.png" alt="" className="leftToRight" />
            </div>
         </div>
      </footer>
   )
}

export default Footer;
