import { Button } from "./Button/Button";

interface ITabSection {
  active: string;
  onChange: (arg0: string) => void;
}

export const TabSection: React.FC<ITabSection> = ({ active, onChange }) => {
  return (
    <section>
      <Button
        isActive={active === "userGeo"}
        onClick={() => onChange("userGeo")}
      >
        userGeo
      </Button>
      <Button
        isActive={active === "userGeoWeek"}
        onClick={() => onChange("userGeoWeek")}
      >
        userGeoWeek
      </Button>
      <Button
        isActive={active === "userCity"}
        onClick={() => onChange("userCity")}
      >
        userCity
      </Button>
      <Button
        isActive={active === "userCityWeek"}
        onClick={() => onChange("userCityWeek")}
      >
        userCityWeek
      </Button>
    </section>
  );
};
