import { Link } from 'react-router-dom';
import ShiftCard from './ShiftCard';
import shiftlistCSS from '../cssModules/shiftList.module.css';

const ShiftList = ({ shifts }) => {
  return (
    <div className={shiftlistCSS["shift-list"]} style={styles.pin_container}>
      { 
        shifts.map(shift => (
        <div className={shiftlistCSS["shift-preview"]} key={shift.id} >
          <Link to={`/shifts/${shift.id}`}>
            {/* <h2>{ shift.name }</h2>
            <p>{ shift.body }</p> */}
            <ShiftCard shift={shift}/>
          </Link>
        </div>
      ))}
    </div>
  );
}

const styles = {
  pin_container: {
      margin: 0,
      padding: 0,
      width: '80vw',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 400px)',
      gridAutoRows: '200px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      justifyContent: 'center',
  }
}

export default ShiftList;