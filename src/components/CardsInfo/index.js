///uses
import { useParams } from "react-router-dom";
import { useFecthDestinations } from "../../customHooks/UseFetchDestinations";
///componets
import Loading from "../Loading";
import Error from "../Error";
///styles
import { Wrapper, Content, Img, TextContent } from "./CardsInfo.styled";
///

const CardsInfo = () => {
  const { destinations, fetchError, isLoading } = useFecthDestinations();
  let { id } = useParams();

  const sigleDestination = destinations.filter(
    (destination) => destination._id == id
  );

  return (
    <Wrapper>
      {fetchError && <Error />}
      {isLoading && <Loading />}
      {sigleDestination.map((el) => (
        <Content key={id}>
          <Img src={sigleDestination[0].imageurl} />
          <TextContent>
            <h1>{sigleDestination[0].destinationName}</h1>
            <h2>{sigleDestination[0].country}</h2>
            <p>
              <b>{sigleDestination[0].packageDescription}</b>
            </p>
            <p>${sigleDestination[0].price}</p>
            <p>{sigleDestination[0].description}</p>
          </TextContent>
        </Content>
      ))}
    </Wrapper>
  );
};

export default CardsInfo;
