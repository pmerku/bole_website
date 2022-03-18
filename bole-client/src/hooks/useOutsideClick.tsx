import React, { useEffect } from 'react';

export function useOutsideClick(ref: any) {
  const [isOutside, setIsOutside] = React.useState(false);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutside(true);
      } else setIsOutside(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return { isOutside };
}
