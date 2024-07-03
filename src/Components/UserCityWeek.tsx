import { Button } from "./Button/Button";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { KEY } from "../App";
import { CardWeatherWeek } from "./CardWeather/CardWeatherWeek";

export const UserCityWeek: () => JSX.Element = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setValueError("");
  };
  const [valueError, setValueError] = useState(
    "Заполните поле поиска населенного пункта!"
  );
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (valueError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [valueError]);

  const getUserCity: () => Promise<void> = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${KEY}`
    );
    const coords = await response.json();
    const latitude: number = coords[0].lat;
    const longitude: number = coords[0].lon;
    getWeather(latitude, longitude, 40);
  };

  const getWeather: (
    latitude: number,
    longitude: number,
    count: number
  ) => Promise<void> = async (latitude, longitude, count) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?&appid=a7d9b4024c4d5af4afcf1a2f5bbfeb73&cnt=${count}&lat=${latitude}&lon=${longitude}&units=metric&lang=RU`
    );
    const result = await response.json();
    setCity(result.city.name);
    setData(result.list);
  };

  return (
    <>
      <form className="user__form">
        {valueError && <div className="error">{valueError}</div>}
        <Input value={value} onChange={changeCity} />
        <Button disabled={!formValid} onClick={getUserCity}>
          Найти
        </Button>
      </form>
      <CardWeatherWeek city={city} data={data} />
    </>
  );
};
