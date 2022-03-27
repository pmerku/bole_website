import React from 'react';
import ReactGa from 'react-ga';
import { useLocation } from 'react-router-dom';

export function Wrapper(props: {
  initialized: any;
  children: React.PropsWithChildren<any>;
}) {
  const location = useLocation();

  React.useEffect(() => {
    if (props.initialized) {
      ReactGa.pageview(location.pathname + location.search);
    }
  }, [props.initialized, location]);

  return props.children;
}
