import React from 'react'
import Alert from "./Components/Alert/Alert";
import IPadPro from "./Components/IPadPro/IPadPro";
import MacBookAir from "./Components/MacBookAir/MacBookAir";
import Iphone11Pro from "./Components/Iphone11Pro/Iphone11Pro";
import Iphone11 from "./Components/Iphone11/Iphone11";
import TvAndWatch from "./Components/TvAndWatch/TvAndWatch";
import AppleArcadsAndCrds from "./Components/AppleArcadsAndCrds/AppleArcadsAndCrds";

function Main() {
  return (
    <div>
      <Alert />
      <IPadPro />
      <MacBookAir />
      <Iphone11Pro />
      <Iphone11 />
      <TvAndWatch />
      <AppleArcadsAndCrds />
    </div>
  );
}

export default Main

