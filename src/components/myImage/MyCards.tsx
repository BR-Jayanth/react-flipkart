import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

import img from '../../static/images/pexels-pixabay-60597.jpg'

export const MyCards:React.FC<{img:any}>=(prop)=>{

    return<>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prop.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
}