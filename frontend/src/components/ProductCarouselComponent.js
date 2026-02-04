import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const categoryCarouselImages = {
  Books: "/images/carousel/books.png",
  Bicycles: "/images/carousel/bicycles.png"
};

const ProductCarouselComponent = ({ bestSellers }) => {
  return bestSellers.length > 0 ? (
    <Carousel>
      {bestSellers.map((item, idx) => (
        <Carousel.Item key={idx}>
          <LinkContainer
            to={`/product-details/${item._id}`}
            style={{ cursor: "pointer" }}
          >
            <img
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              src={
                categoryCarouselImages[item.category] ||
                "/carousel/default.jpg"
              }
              alt={item.category}
            />
          </LinkContainer>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null;
};

export default ProductCarouselComponent;
