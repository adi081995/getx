import { useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const tab_title: string[] = ["Total Supply and Allocation"];//"Token Distribution",
const chart_List_1: string[] = ["Launchpad: 10%", "Presale: 40%", "Development : 15%", "Team: 15%", "Staking Partners Bonus : 10%", "Reserve : 10%"]
// const chart_List_2: string[] = ["Czech Republic: 50%", "Poland: 15%", "Legal & Regulation: 20%", "Contingency: 70%", "Business Development: 20%", "Investor: 30%"]

const ChartArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };


   // const chartData = [
   //    [10, 40, 15, 15, 10, 10], // Funding Allocation percentages
   //    // [50, 15, 20, 70, 20, 30]  // Token Distribution percentages
   // ];

   // const data = {
   //    // labels: ["Contingency", "Business Development", "Investor", "Poland", "Legal & Regulation", "Czech Republic"],
   //    datasets: [
   //       {
   //          label: 'Total Supply and Allocation',
   //          data: chartData[activeTab],
   //          backgroundColor: ["#44A08D", "#136F84", "#0B446D", "#033356", "#012641", "#191F28"]
   //       }
   //    ],
   // };

   return (
      <div id="chart" className="chart-area pt-140">
         <div className="container">
            <div className="chart-inner-wrap">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="chart-wrap">
                        <div className="chart" style={{width:'unset'}}>
                           <div id="doughnutChart">
                              {/* {chartData[activeTab] && <Doughnut data={data} />} */}
                              <img src="/assets/img/images/tokenallocation.png" alt="" />
                           </div>
                        </div>
                        <div className="chart-tab">
                           <ul className="nav nav-tabs" id="myTab" role="tablist" style={{display:'none'}}>
                              {tab_title.map((tab, index) => (
                                 <li key={index} className="nav-item">
                                    <button onClick={() => handleTabClick(index)}
                                       className={activeTab === index ? 'nav-link active' : ' nav-link'}>{tab}
                                    </button>
                                 </li>
                              ))}
                           </ul>
                           <div className="tab-content" id="myTabContent">
                              <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="description">
                                 <div className="chart-list">
                                    <ul className="list-wrap">
                                       {chart_List_1.map((list, index) => (<li key={index}>{list}</li>))}
                                    </ul>
                                 </div>
                              </div>
                              {/* <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="description">
                                 <div className="chart-list">
                                    <ul className="list-wrap">
                                       {chart_List_2.map((list, i) => (<li key={i}>{list}</li>))}
                                    </ul>
                                 </div>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="right-side-content">
                        <img src="/assets/img/banner/banner_1.png" alt="" />
                        <p>BNB Smart Chain is a decentralized, open-source <br /> blockchain with smart contract</p>
                        <ul className="list-wrap">
                           <li><span>1</span>Symbol: Gapx</li>
                           <li><span>2</span>Initial Value : 1 GAPX = 0.000099 USDT</li>
                           <li><span>3</span>Type : - BEP20 </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChartArea
