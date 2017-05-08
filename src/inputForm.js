import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const InputForm = () => (
  <MuiThemeProvider>
    <div>
      <TextField
        hintText="San Francisco"
        floatingLabelText="Type name of a city"
        floatingLabelFixed={true}
      /><br />
      <TextField
        hintText="Password Field"
        floatingLabelText="Password"
        type="password"
      /><br />
      <TextField
        hintText="MultiLine with rows: 2 and rowsMax: 4"
        multiLine={true}
        rows={2}
        rowsMax={4}
      /><br />
    </div>
  </MuiThemeProvider>
);

export default InputForm;