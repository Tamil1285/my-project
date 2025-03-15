import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LocationFinder = () => {
  const [location, setLocation] = useState({ lat: null, lon: null, city: "", area: "", pincode: "", state: "", district: "", nation: "" });
  const [error, setError] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation((prev) => ({ ...prev, lat, lon }));
          setLocationFetched(true);
          setError(null);

          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
            const data = await response.json();
            if (data.address) {
              setLocation((prev) => ({
                ...prev,
                city: data.address.city || data.address.town || data.address.village || "Unknown",
                area: data.address.neighbourhood || data.address.suburb || "Unknown",
                pincode: data.address.postcode || "Unknown",
                state: data.address.state || "Unknown",
                district: data.address.county || "Unknown",
                nation: data.address.country || "Unknown",
              }));
            }
          } catch (err) {
            setError("Unable to fetch location details.");
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Location Finder</h2>

      {/* Initially, show an image. Hide when location is fetched */}
      {!locationFetched && (
        <div className="mb-3">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/831/288/small_2x/3d-render-red-pin-map-location-pointer-icon-png.png"
            alt="Location Placeholder"
            className="img-fluid rounded "
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {locationFetched && (
        <div className="table-responsive mx-auto mt-3" style={{ maxWidth: "600px" }}>
          <table className="table table-bordered table-success">
            <tbody>
              <tr><th>Latitude</th><td>{location.lat}</td></tr>
              <tr><th>Longitude</th><td>{location.lon}</td></tr>
              <tr><th>Nation</th><td>{location.nation}</td></tr>
              <tr><th>State</th><td>{location.state}</td></tr>
              <tr><th>District</th><td>{location.district}</td></tr>
              <tr><th>City</th><td>{location.city}</td></tr>
              <tr><th>Pincode</th><td>{location.pincode}</td></tr>
            </tbody>
          </table>
        </div>
      )}
      <button className="btn btn-primary mb-3" onClick={getLocation}>
        Get My Location
      </button>
    </div>
  );
};

export default LocationFinder;
