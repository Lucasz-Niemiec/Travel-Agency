//use
import { useRef } from "react";
import { useFecthDestinations } from "../../customHooks/UseFetchDestinations";
//components
import Cards from "../Cards";
import Loading from "../Loading";
import Error from "../Error";
//styles
import {
  MainConatiner,
  SliderContainer,
  Slide,
  Controllers,
  Button,
  Span,
} from "./Slider.styled";

const Slider = () => {
  const slider = useRef(null);
  const { destinations, fetchError, isLoading } = useFecthDestinations();

  const next = () => {
    //checking if slider has content
    if (slider.current.children.length > 0) {
      //getting first slide
      const firsSlide = slider.current.children[0];

      //getting slides width
      const slideWidth = slider.current.children[0].offsetWidth + 30;

      //getting slides
      let slides = slider.current.children;
      // apliying translate to slides moving slides

      for (let slide of slides) {
        slide.style.transform = `translateX(-${slideWidth}px)`;
        slide.style.transition = ` 400ms ease-in-out`;
      }

      const transition = () => {
        for (let slide of slides) {
          slide.style.transform = `translateX(50px)`;
          slide.style.transition = `none`;
        }
        slider.current.appendChild(firsSlide);
        slider.current.removeEventListener("transitionend", transition);
      };
      slider.current.addEventListener("transitionend", transition);
    }
  };

  const previous = () => {
    if (slider.current.children.length > 0) {
      const lastIndex = slider.current.children.length - 1;
      const lastElement = slider.current.children[lastIndex];
      slider.current.insertBefore(lastElement, slider.current.firstChild);

      let slides = slider.current.children;

      for (let slide of slides) {
        slide.style.transition = `none`;
      }

      const slideWidth = slider.current.children[0].offsetWidth;
      for (let slide of slides) {
        slide.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
          for (let slide of slides) {
            slide.style.transform = `translateX(50px)`;
            slide.style.transition = `400ms`;
          }
        }, 40);
      }
    }
  };
  const handleEnterNext = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      next();
    }
  };
  const handleEnterPrevious = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      previous();
    }
  };

  return (
    <MainConatiner>
      <SliderContainer ref={slider}>
        {destinations.map(
          ({
            destinationName,
            country,
            description,
            price,
            packageDescription,
            imageurl,
            _id,
          }) => {
            return (
              <Slide aria-label={`destination ${destinationName}`} key={_id}>
                <Cards
                  name={destinationName}
                  country={country}
                  description={description}
                  price={price}
                  pack={packageDescription}
                  imgurl={imageurl}
                  id={_id}
                ></Cards>
              </Slide>
            );
          }
        )}
      </SliderContainer>
      <Controllers>
        <Button
          right
          onKeyPress={handleEnterNext}
          onClick={() => next()}
          tabIndex={0}
        >
          <Span right></Span>
        </Button>
        <Button
          onKeyPress={handleEnterPrevious}
          onClick={() => previous()}
          tabIndex={0}
        >
          <Span></Span>
        </Button>
        {isLoading && <Loading />}
        {fetchError && <Error />}
      </Controllers>
    </MainConatiner>
  );
};

export default Slider;
