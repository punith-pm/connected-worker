import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const CurrentLocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError("Failed to retrieve location: " + err.message);
        setLoading(false);
      }
    );
  };

  return (
    <Box padding='10px'>
      <Button colorPalette='green' onClick={fetchLocation}>
        Get My Location
      </Button>

      {loading && <p>Fetching location...</p>}
      {error && <p className="current-location-error">{error}</p>}

      {location.lat && location.lon && !loading && (
        <Box marginTop='10px'>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </Box>
      )}
    </Box>
  );
};

export default CurrentLocation;
