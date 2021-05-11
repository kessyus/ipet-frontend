import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

function Copyright () {
  return (
    <Typography color='textSecondary' align='center'>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'. Todos os direitos reservados.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
  },
}))

export default function Footer (props) {
  const classes = useStyles()
  const { description, title } = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography align='center' gutterBottom>
          {title}
        </Typography>
        <Typography
          align='center'
          color='textSecondary'
          component='p'
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}
