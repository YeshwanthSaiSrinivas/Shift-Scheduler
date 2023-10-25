import ShiftList from "./ShiftList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { error, isPending, data: shifts } = useFetch('http://localhost:8000/shifts') 
  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { shifts && <ShiftList shifts={shifts} /> }
    </div>
  );
}

export default Home;
