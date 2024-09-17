import React, { useContext ,useState} from 'react';
import { StoreContext } from '../context/StoreContext';
import './DisplaySubjects.css'

const DisplaySubjects = () => {
   const { deatial_List, handleDelete, calculateSgpa } = useContext(StoreContext);
   console.log(deatial_List);

   const [sgpa, setSgpa] = useState(0);
   const [showResult,setShowResult] = useState(false);

   const onClickHandler = (deatial_List) => {
      setShowResult(true)
      const calculatedSgpa = calculateSgpa(deatial_List);
      setSgpa(calculatedSgpa);
      console.log(calculatedSgpa);
   };

   return (
      <>
         <div className='display-subjects'>
            {deatial_List.map((item, index) => (
               <div key={index} className='subject-item'>
                  <div className="subject">{item.subject}</div>
                  <div className="credit">{item.credit}</div>
                  <div className="grade">{item.grade}</div>
                  <button className="btn remove" onClick={() => handleDelete(item.subject)}>Remove</button>
               </div>
            ))}
            {deatial_List.length > 0 ? <button className='btn calulate' onClick={() => onClickHandler(deatial_List)}>Calculate</button> : <></>}
         </div>
         {showResult && deatial_List.length>0?<p className='result'>Your Sgpa is :{sgpa.toFixed(2)}</p>:<></>}
      </>
   );
};

export default DisplaySubjects;
