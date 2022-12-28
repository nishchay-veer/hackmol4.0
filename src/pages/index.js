import TrackAndPrices from "../components/TrackAndPrices";
import FAQ from "../components/FAQ";

import Announcement from "../components/Announcement";

import Footer from "../components/Footer";

import RuleCard from "../components/RulesCard";
import Sponsers from "../components/Sponsers";
import Testimonies from "../components/Testimonies";

export default function Home() {
  return (
    <div className="">
      {/* Announcement start */}

      <Announcement />

      {/* Announcement ends */}
      {/* rule section */}
      <RuleCard />
      {/* rule section end */}

      {/* Tracks And Prices starts */}
      <TrackAndPrices />
      {/* Tracks And Prices end */}

      {/*FAQ and footer starts*/}
      <Sponsers></Sponsers>
      <Testimonies/>
      <FAQ></FAQ>
      <Footer></Footer>

      {/*FAQ and footer ends*/}
    </div>
  );
}
