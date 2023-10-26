import useFetch from "../hooks/useFetch";
import Layout from "./Layout";

const Home = () => {
  const { error, isPending, data: shifts } = useFetch('http://localhost:8000/shifts') 
  return (
    <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { shifts && <Layout shifts={shifts} /> }
    </>
  );
}

export default Home;
