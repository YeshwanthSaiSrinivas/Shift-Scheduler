import useFetch from "../hooks/useFetch";
import Layout from "./Layout";
import Loading from "./Loading";

const Home = () => {
  const { error, isPending, data: shifts } = useFetch('http://localhost:8000/shifts') 
  return (
    <>
      { error && <div style={{display: "flex", justifyContent:"center"}}>{ error }</div> }
      { isPending && <Loading/> }
      { shifts && <Layout shifts={shifts} /> }
    </>
  );
}

export default Home;
