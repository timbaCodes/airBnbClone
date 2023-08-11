import "./App.css";
// import Test from "./components/Test";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import cardsData from "./cardsdata";

function App() {
  const cardElements = cardsData.map((data) => (
    <Card
      key={data.id}
      data={data}
      // this {...data} replace all the downlines!!!!!!!(distruction of data)
      // img={data.coverImg}
      // rating={data.stats.rating}
      // reviewCount={data.stats.reviewCount}
      // country={data.location}
      // title={data.title}
      // price={data.price}
      // openSpots={data.openSpots}
    />
  ));
  return (
    <>
      {/* <Test /> */}
      <Navbar />
      <Main />
      <section className="cards-list">{cardElements}</section>
    </>
  );
}

export default App;

{
  /* <Card
        img="cardImage1.png"
        rating={5}
        reviewCount={6}
        country="tunisia"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="cardImage2.png"
        rating={5}
        reviewCount={6}
        country="tunisia"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="cardImage3.png"
        rating={5}
        reviewCount={6}
        country="tunisia"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */
}
