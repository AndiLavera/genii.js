import React from 'react';
import {
  FormControl, InputLabel, Select,
} from '@material-ui/core';

const ToolbarDropdown = ({
  title, value, onChange, children,
}: any) => (
  <FormControl>
    <InputLabel>{title}</InputLabel>
    <Select native value={value} onChange={(e) => onChange(e.target.value)}>
      {children}
    </Select>
  </FormControl>
);

export { ToolbarDropdown };
