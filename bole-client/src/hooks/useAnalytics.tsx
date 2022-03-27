import React from 'react';
import ReactGa from 'react-ga';

export function useAnalytics() {
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if (window.location.href.includes('localhost')) {
      ReactGa.initialize(
        process.env.REACT_APP_BOLE_GOOGLE_ANALYTICS_TRACK_ID as string,
      );
      setInitialized(true);
    }
  }, []);

  return {
    initialized,
  };
}
