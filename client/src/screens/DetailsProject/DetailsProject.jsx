import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './DetailsProject.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DetailsProject() {
  const classes = useStyles();
  return (
    <div id='main-project-div'>
      <div id="card1" className='main-card-container'>
        <Card className='card-container' className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            id="card-image"
            image="/assets/86list.png"
            title="Main Page of Site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                86List
            </Typography>
            <Typography gutterBottom component="h5">
              React.js, Ruby on Rails, Postgresql, CSS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            86List is a community for service-industry professionals to talk about the clients that they serve. 
                Built with Ruby on Rails and React.js, 86List requires login authentication and registration in order to 
                view and interact with co-workers' posts. In future iterations, I want to allow users to create their own
                accounts and request to be a part of a community with a community leader's approval.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://86list.netlify.app/" target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
        <a href="https://github.com/aawferris/86list" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
        </CardActions>
          </Card>
      </div>
      
      <div id="card2" className='main-card-container'>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/teacher-source.png"
            title="Main Page of Site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Teacher Source
            </Typography>
            <Typography gutterBottom component="h5">
            React.js, Express.js, MongoDB, CSS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Teacher Source is the result of a cross-discipline collaboration with a UX team using Agile workflow. 
              My team of programmers and I took the UX Team's designs and brought them to life. This project uses MongoDB
              and React.js to create a dashboard for teachers to upload and share lesson planning resources.  The Team
              and I have decided to continue to work on this project together.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <a href="https://teacher-source.netlify.app/" target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
            <a href="https://github.com/aawferris/teachersource" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
        </CardActions>
          </Card>
      </div>
      
      <div id="card3" className='main-card-container'>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/productively.png"
            title="Main Page of Site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Productive.ly
            </Typography>
            <Typography gutterBottom component="h5">
            React.js, Express.js, CSS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Productive.ly is a React.js app that leverages AirTable API to allow users to stay focused and
               get work done.  This app has a place for note-taking and task lists.  I want to make this app
              into a browser extension.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://productively.netlify.app/" target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
          <a href="https://github.com/aawferris/productive.ly" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
        </CardActions>
          </Card>
      </div>

      <div id="card4" className='main-card-container'>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/cia.png"
            title="Main Page of Site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                CIA Cover Story Generator
            </Typography>
            <Typography gutterBottom component="h5">
            Vanilla Javascript, CSS, HTML5
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            This is the first site I ever programmed using code. I used Javascript as well as made 
               axios calls to RESTFUL APIs to to create this silly random person generator, styled to be a 
              tool for CIA operatives to generate a cover story.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://aawferris.github.io/CIA-cover-story/index.html" target="_blank" rel="noopener"><img src="/assets/internet.png" alt="link to github" className="deploy-link" /></a>
          <a href="https://github.com/aawferris/CIA-cover-story" target="_blank" rel="noopener"><img src="/assets/github-logo.png" alt="link to deployment" className="repo-link"/></a>
        </CardActions>
          </Card>
      </div>
    </div>
  )
}
