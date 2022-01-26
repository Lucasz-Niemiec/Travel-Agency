import { useState, useEffect } from "react";

export const useFecthDestinations = () => {
  const API_URL = `http://localhost:3500/destinations`;

  const [destinations, setDestinations] = useState([]);
  const [fetchError, seFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data base not respondig");
        const data = await response.json();
        setDestinations(
          data.map((destination) => {
            const {
              _id,
              country,
              description,
              destinationName,
              imageurl,
              packageDescription,
              price,
            } = destination;
            return {
              _id,
              country,
              description,
              destinationName,
              imageurl,
              packageDescription,
              price,
            };
          })
        );
      } catch (err) {
        seFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { destinations, fetchError, isLoading };
};
