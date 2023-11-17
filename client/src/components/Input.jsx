import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({label, type, id, placeholder}) {
  return (
    <Box>
      <TextField id={id} label={label} variant="outlined" placeholder={placeholder}/>
    </Box>
  )
}


