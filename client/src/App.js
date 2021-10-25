import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInputs, addInput } from './redux/actions/input';
import {
  TextField,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3rem',
  },
  inputs: {
    display: 'flex',
    margin: '2rem',
    justifyContent: 'space-around',
  },
  list: {
    margin: '2rem',
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.inputReducer.inputs);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(text);
    dispatch(getInputs(text));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      input: text,
    };
    dispatch(addInput(data));
  };
  return (
    <div>
      <Container component='main' maxWidth='md'>
        <div className={classes.root}>
          <form className={classes.inputs} onSubmit={(e) => onSubmit(e)}>
            <TextField
              id='outlined-basic'
              label='Enter your text'
              variant='outlined'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Button
              color='secondary'
              variant='contained'
              startIcon={<SearchIcon />}
              onClick={(e) => {
                handleSearch(e);
              }}>
              Search
            </Button>
            <Button type='submit' color='primary' variant='contained'>
              Submit
            </Button>
          </form>
          <div className={classes.list}>
            <Typography variant='h4'> Query Results</Typography>
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
              }}>
              {data.map((item) => (
                <ListItem key={item._id} disableGutters>
                  <ListItemText primary={item.input} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
