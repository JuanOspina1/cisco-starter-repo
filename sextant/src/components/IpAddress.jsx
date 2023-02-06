import React, { useEffect, useState } from "react";

const IpAddress = (props) => {
  const [returnedIP, setReturnedIP] = useState();

  useEffect(() => {
    const getIP = async () => {
      if (props.request === "ipv6") {
        try {
          const response = await fetch("https://api64.ipify.org?format=json");
          const data = await response.json();
          //   console.log(data);
          setReturnedIP(data?.ip);
        } catch (err) {
          console.error(err);
          return err;
        }
      }

      if (props.request === "ipv4") {
        try {
          const response = await fetch("https://api.ipify.org?format=json");
          const data = await response.json();
          //   console.log(data);
          setReturnedIP(data?.ip);
        } catch (err) {
          console.error(err);
          return err;
        }
      }
    };
    getIP();
  });

  return (
    <div>
      {props.request.toUpperCase()}: {returnedIP}
    </div>
  );
};

export default IpAddress;
