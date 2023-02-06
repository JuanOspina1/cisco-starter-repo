import "./App.css";
import Banner from "./components/Banner";
import Content from "./components/Content";
import IpAddress from "./components/IpAddress";

function App() {
  return (
    <div className="App">
      <Banner />
      <Content>
        <IpAddress request={"ipv4"} />
        <IpAddress request={"ipv6"} />
      </Content>
    </div>
  );
}

export default App;
