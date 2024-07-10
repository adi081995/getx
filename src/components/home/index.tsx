import Banner from "./Banner";
// import Brand from "./Brand";
import ChartArea from "./ChartArea";
import Contribution from "./Contribution";
import DownloadArea from "./DownloadArea";
import FAQ from "./Faq";
import FeatureOne from "./FeatureOne";
import FeatureOneTwo from "./FeatureOneTwo";
// import FeatureTwo from "./FeatureTwo";
// import FeatureThree from "./FeatureThree";
import RoadMapArea from "./RoadMapArea";
// import WorldMap from "./WorldMap";
// import Team from "./Team";

const Home = () => {
   return (
      <>
         <Banner />
         {/* <FeatureThree /> */}
         <Contribution />
         {/* <Brand /> */}
         <FeatureOne />
         {/* <FeatureTwo /> */}
         <FeatureOneTwo />
         <ChartArea />
         <RoadMapArea />
         {/* <Team /> */}
         <FAQ />
         <DownloadArea />
         {/* <WorldMap /> */}
      </>
   )
}

export default Home;
