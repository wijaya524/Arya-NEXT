import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props: {children: string}) {
  const {children} = props
  return (
    <div className=' mt-10'>
    <Stack>
      <Button type='submit' variant="contained">{children}</Button>
    </Stack>
    </div>
  );
}