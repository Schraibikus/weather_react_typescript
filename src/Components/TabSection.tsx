import { Button } from "./Button/Button";

interface ITabSection {
  active: string;
  onChange: (arg0: string) => void;
}

export const TabSection: React.FC<ITabSection> = ({ active, onChange }) => {
  return (
    <section className="section__tabs">
      <div className="section__tabs-items">
        <Button
          isActive={active === "Узнать погоду"}
          onClick={() => onChange("Узнать погоду")}
        >
          погода по текущей геолокации пользователя
        </Button>
        <Button
          isActive={active === "Узнать погоду на 5 дней"}
          onClick={() => onChange("Узнать погоду на 5 дней")}
        >
          погода по текущей геолокации пользователя на ближайшие 5 дней
        </Button>
        <Button
          isActive={active === "userCity"}
          onClick={() => onChange("userCity")}
        >
          погода в любом городе по запросу
        </Button>
        <Button
          isActive={active === "userCityWeek"}
          onClick={() => onChange("userCityWeek")}
        >
          погода в любом городе по запросу на ближайшие 5 дней
        </Button>
      </div>
      <p className="section__tabs-text">
        Для получения информации о погоде нажмите на кнопку ниже
      </p>
    </section>
  );
};
