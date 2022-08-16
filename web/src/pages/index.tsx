import MapView from '../components/MapView'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const render = (status: Status) => {
  return <h1>{status}</h1>;
};

function Main() {
  return <Wrapper
    apiKey="AIzaSyDlEsJrvF8GJE_L7ca8CovzFXaXnFEsteE"
    render={render}
  >
    <MapView />
  </Wrapper>
  
}

export default Main
