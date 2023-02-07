import "./App.css";
import Banner from "./components/Banner";
import Content from "./components/Content";
import IpAddress from "./components/IpAddress";
import PacketLatency from "./components/PacketLatency";

function App() {
  return (
    <div className="App">
      <Banner />
      <Content>
        <IpAddress request={"ipv4"} />
        <IpAddress request={"ipv6"} />
        <PacketLatency request={"Latency"} />
      </Content>
    </div>
  );
}

export default App;
