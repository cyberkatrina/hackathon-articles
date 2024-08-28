import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  const {filterSearch, searchTerm, handleChange, articles, handleSubmit} = props

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50vw' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Search:" variant="filled" style={{backgroundColor: "whitesmoke"}} 
      onChange={handleChange}
      value={searchTerm}
      onSubmit={handleSubmit}
      />
      {/* for some reason deleting this button breaks the search form??? even tho it doesn't do anything... */}
      <button style={{position: 'absolute', visibility: 'hidden'}} onClick={handleSubmit}>Submit Search</button> 
    </Box>
  );
}