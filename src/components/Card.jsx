// import card1 from "../assets/cardImage1.png"
import star from "/images/star.png";
import PropTypes from "prop-types";

const Card = (props) => {
  // console.log(openSpots);
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`/images/${props.data.coverImg}`}
        alt=""
        className="card-image"
      />
      <div className="card-stats">
        <img src={star} alt="starImage" className="card-star" />
        <span>{props.data.stats.rating}</span>
        <span>({props.data.stats.reviewCount})</span>
        <span>{props.data.location}</span>
        <p className="card-title">{props.data.title}</p>
        <p>
          <span className="price">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.shape({
    coverImg: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    openSpots: PropTypes.number.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
};
export default Card;
