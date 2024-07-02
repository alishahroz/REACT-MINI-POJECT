import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_PIC = "./dusty weather.avif";
    const HOT_PIC = "./hot.webp";
    const COLD_PIC = "./cold.avif";
    const RAINY_PIC = "./rain.jpg";

//     let info = {  
// city: "Lahore",
// description: "broken clouds",
// feelsLike: 38.69,
// humidity: 46,
// temp: 34.77,
// tempMax: 34.77, 
// tempMin: 34.77,
// };
    return (
        <div className="infoBOx">    
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAINY_PIC : info.temp > 15 ?  HOT_PIC : COLD_PIC }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>  }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <div>{info.description}</div>
           <div>Humidity: {info.humidity}</div>
           <div>Temperature: {info.temp}&deg;C</div>
           <div>Feels Like: {info.feelsLike}&deg;C</div>
           <div>Tem Max:{info.tempMax}&deg;C</div>
           <div>Tem Min:{info.tempMin}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}