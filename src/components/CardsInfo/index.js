///uses
import { useParams } from "react-router-dom";
import { useFecthDestinations } from "../../customHooks/UseFetchDestinations";
///
///styles
import { Wrapper, Content, Img } from "./CardsInfo.styled";
///

const CardsInfo = () => {
  const { destinations, fetchError, isLoading } = useFecthDestinations();
  let { id } = useParams();

  const sigleDestination = destinations.filter(
    (destination) => destination._id == id
  );

  return (
    <Wrapper>
      {sigleDestination.map((el) => (
        <Content key={id}>
          <Img src={sigleDestination[0].imageurl} />
          <h1>{sigleDestination[0].destinationName}</h1>
          <h2>{sigleDestination[0].country}</h2>
          <p>{sigleDestination[0].description}</p>
          <p>
            <b>{sigleDestination[0].packageDescription}</b>
          </p>
          <p>${sigleDestination[0].price}</p>
        </Content>
      ))}
    </Wrapper>
  );
};

export default CardsInfo;
