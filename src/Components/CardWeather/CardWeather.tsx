import { FunctionComponent } from "react";
import classes from "./CardWeather.module.css";

interface ICardWeather {
  city: string;
  temp: any;
  description: string;
  srcIcon: string;
  pressure: string;
  humidity: string;
  windSpeed: string;
  sunrise: any;
  sunset: any;
}

export const CardWeather: FunctionComponent<ICardWeather> = ({
  city,
  temp,
  description,
  srcIcon,
  pressure,
  humidity,
  windSpeed,
  sunrise,
  sunset,
}) => {
  const convertTime: (timeData: number) => string = (timeData: number) => {
    const timeUtc: Date = new Date(timeData * 1000);
    timeUtc.setHours(timeUtc.getHours() + 3);
    const hours: number = timeUtc.getHours();
    const minutes: number = timeUtc.getMinutes();
    const time: string = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    return time;
  };
  if (city) {
    return (
      <>
        <ul className={classes.card__list}>
          <h1 className={classes.card__cityName}>{city}</h1>
          <li className={classes.card__item}>
            {"Температура воздуха: "}
            <span>{`${Math.round(temp) + " C°"}`}</span>
          </li>
          <li className={classes.card__item}>
            {"Погодные условия: "}
            <img
              src={`https://openweathermap.org/img/w/${srcIcon}.png`}
              alt="иконка погоды"
            />
            <span>{description}</span>
          </li>
          <li className={classes.card__item}>
            {"Атмосферное давление: "}
            <span> {pressure} </span>
            {"гПа"}
          </li>
          <li className={classes.card__item}>
            {"Влажность: "}
            <span> {humidity} </span>
            {"%"}
          </li>
          <li className={classes.card__item}>
            {"Скорость ветра: "}
            <span> {windSpeed} </span>
            {"м/с"}
          </li>
          <li className={classes.card__item}>
            {"Восход:"}
            <span> {convertTime(sunrise)} </span>
          </li>
          <li className={classes.card__item}>
            {"Закат:"}
            <span> {convertTime(sunset)} </span>
          </li>
        </ul>
      </>
    );
  }
  return <></>;
};
