import Card from "./components/card/Card";
import "./App.css";
import { data } from "./data";

function App() {
  console.log(data);

  return (
    <main
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 1px 1px 1px rgba(0, 0, 0, 0.25)",
      }}
      className="main"
    >
      {data.map((el, i) => (
        <Card
          key={i}
          title={el.title}
          textContent={el.textContent}
          carSrc={el.carSrc}
          hover={el.hover}
          btnTxtColor={el.btnTxtColor}
          bg={el.bg}
        />
      ))}
    </main>
  );
}

export default App;
