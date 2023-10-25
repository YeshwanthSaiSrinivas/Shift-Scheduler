import { useParams, useNavigate } from "react-router-dom"; 
import useFetch from "../hooks/useFetch";
import shiftListCSS from "../cssModules/shiftList.module.css"

const ShiftDetails = () => {
  const { id } = useParams();
  const { data: shift, error, isPending } = useFetch('http://localhost:8000/shifts/' + id);
  const navigate = useNavigate(); 

  const handleClick = () => {
    fetch('http://localhost:8000/shifts/' + shift.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  return (
    <div className={shiftListCSS["shift-details"]}>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { shift && (
        <article>
          <h2>{ shift.name }</h2>
          <p>{ shift.date }</p>
          <div>{ shift.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}

export default ShiftDetails;