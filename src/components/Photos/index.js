import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"20px 10px"
  },
});
const theme = {
  spacing: 8,
}
function Photos() {
  const classes = useStyles();
  const URL = "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=50";
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const response = await axios.get(URL);
    setPhotos(response.data);
  };

  return (
    <>
      {photos.map((item) => {
        return (
          <div key={item.id}>
            <Card className={classes.root} m={theme.spacing}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
            <Divider />
          </div>
        )

      })
      }
    </>
  );

}
export default Photos;
