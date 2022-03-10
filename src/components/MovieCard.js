import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function MovieCard({ movie }) {
  // const [value, setValue] = React.useState(4);
  return (
    <div className="moviecard" key={movie.id}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          width="30%"
          height={400}
          image={movie.image}
          alt={movie.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name}
          </Typography>
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={movie.rating} readOnly />
          {movie.date}
          {movie.type}
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
