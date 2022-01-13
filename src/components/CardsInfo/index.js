///uses
import { useParams } from "react-router-dom";
import { useFecthDestinations } from "../../customHooks/UseFetchDestinations";
///
///styles
import { Wrapper, Content } from "./CardsInfo.styled";
///

const CardsInfo = () => {
  const { destinations, fetchError, isLoading } = useFecthDestinations();

  const sigleDestination = destinations.filter(
    (destination) => destination._id === id
  );
  const { id } = useParams();
  console.log(sigleDestination);
  const cardTitle = sigleDestination.map((el) => el.destinationName);

  return (
    <Wrapper>
      <Content>
        <p>asdasd</p>
        <h1>asdkasdlkñ</h1>
      </Content>
    </Wrapper>
  );
};

export default CardsInfo;
