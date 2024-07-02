import "./App.css";
import Header from "./Components/Header";
import { UserCity } from "./Components/UserCity";
import { UserGeo } from "./Components/UserGeo";
import { useState } from "react";
import { TabSection } from "./Components/TabSection";
import { UserGeoWeek } from "./Components/UserGeoWeek";
import { UserCityWeek } from "./Components/UserCityWeek";

export const KEY: string = "15fbdc51ea7fa6a010dfab1c26227026";

const App: React.FC = () => {
  const [tab, setTad] = useState("userGeo");

  return (
    <>
      <Header />
      <main>
        <TabSection
          active={tab}
          onChange={(current: React.SetStateAction<string>) =>
            setTad(current)
          }
        />
        {tab === "userGeo" && <UserGeo />}
        {tab === "userGeoWeek" && <UserGeoWeek />}
        {tab === "userCity" && <UserCity />}
        {tab === "userCityWeek" && <UserCityWeek />}
      </main>
    </>
  );
};

export default App;
