import React from "react";
import Button from "./Component/Button";
import Card from "./Component/Card";
import Container from "./Component/Container";
import Input from "./Component/Input";
import { useState } from "react";
import Layout, {
  headerStyle,
  sidebarStyle,
  mainStyle,
  footerStyle,
} from "./Component/Layout";

function App() {
  const [data, setData] = useState([
    {
      title: "React",
      image: "https://via.placeholder.com/200",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      title: "Vue",
      image: "https://via.placeholder.com/300",
      description: "The Progressive JavaScript Framework.",
    },
  ]);

  function removeData(index) {
    setData(data.filter((_, i) => index != i));
  }

  return (
    <>
      <Layout>
        <div style={mainStyle}> Main</div>
        <div style={headerStyle}> Header</div>
        <div style={footerStyle}> Footer</div>
        <div style={sidebarStyle}> Sidebar</div>
      </Layout>

      <Input type="number" action={(v) => console.log(v)} />
      <Input
        type="number"
        action={(v) => console.log(v)}
        style={{ backgroundColor: "gray" }}
      />

      <div>
              
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            remove={() => removeData(index)}
            description={item.description}
          />
        ))}
            
      </div>

      <Container style={{ maxWidth: "400px", margin: "20px auto" }}>
              <h1>Reusable Container</h1>
              <p>This is a container that accepts children.</p>
              
        <Button text="Click Me" onClick={() => alert("Inside Container")} />
            
      </Container>
    </>
  );
}

export default App;
