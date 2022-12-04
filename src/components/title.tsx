import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function Title(props: PropsWithChildren) {
  return (
    <div style={{ marginBottom: 30 }}>
      <Typography variant="h4" sx={{ color: 'black', textAlign: 'center' }}>
        {props.children}
      </Typography>
      <hr className="divider" />
    </div>
  );
}
