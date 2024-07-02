import { useState } from "react";
import SearchBox from "./SearchBx";
import Infobox from "./Infobox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Lahore",
        description: "broken clouds",
        feelsLike: 38.69,
        humidity: 46,
        temp: 34.77,
        tempMax: 34.77, 
        tempMin: 34.77,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="container" style={{textAlign: "center"}}>
            <h1>Weather App by Ali</h1>
            <SearchBox updateInfo = {updateInfo} />
            <Infobox info = {weatherInfo} />
        </div>
    );
}