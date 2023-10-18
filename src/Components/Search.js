import React from 'react';
import TextField from '@mui/material/TextField';

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={handleSearch}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default Search;
