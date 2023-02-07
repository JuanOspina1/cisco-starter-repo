import React, { useEffect, useRef, useState } from "react";

const PacketLatency = () => {
  const [val, setVal] = useState(null);

  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:55455");

    socket.onopen = () => {
      console.log("opened");
    };

    socket.onclose = () => {
      console.log("closed");
    };

    socket.onmessage = (event) => {
      //   console.log(
      //     "got message",
      //     event.data,
      //     Date.now(),
      //     Date.now() - event.data
      //   );
      setVal(Date.now() - event.data);
    };

    ws.current = socket;
    return () => {
      socket.close();
    };
  }, []);

  return <div>Packet Latency: {val}</div>;
};

export default PacketLatency;
