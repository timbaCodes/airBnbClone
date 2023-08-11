import heroImage from "/images/mainImage.png";

const Main = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="heroImage" className="heroImage" />
      <div>
        <h1 className="heroHeader">Online Experience</h1>
        <p className="heroText">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Main;
