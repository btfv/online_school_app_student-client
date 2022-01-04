import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@mui/material/Link';

export default function CustomLink(props) {
  const { to, children, ...others } = props;
  return (
    <RouterLink to={to}>
      <MuiLink {...others}>{children}</MuiLink>
    </RouterLink>
  );
}
