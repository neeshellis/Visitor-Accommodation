// hooks are usually named exports rather than default
import { useState, useEffect } from "react";

export function useData(url) {
  // state variable for holding fetched json data
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      let ignore = false;

      // could use axios here instead of 'fetch' - axios means you do not need to convert from JSON
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setData(json);
          }
        })
        .catch(error => {
          if (!ignore) {
            console.error('Error fetching data:', error);
            // Optionally set an error state here
          }
        });

      // cleanup function, in case url changes before complete
      return () => {
        ignore = true;
      };
    }
  }, [url]); // re-run effect if url changes

  // return the data fetched from the given url
  return data;
}

// save as useData.jsx in the 'hooks' folder