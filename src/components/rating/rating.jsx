import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

 const  RatingComp = ({itemRating}) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={itemRating} readOnly />
    </Box>
  );
}
export default RatingComp