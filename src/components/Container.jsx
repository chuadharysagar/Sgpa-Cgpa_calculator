import React, { useContext, useRef, useState } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';
import '../components/Container.css';

const Container = () => {
   const { gradeMap, deatial_List, setDeatil_List } = useContext(StoreContext);
   const credit = useRef();
   const subject = useRef();
   const [selectedGrade, setSelectedGrade] = useState("none");

   const onSubmitHandler = (event) => {
      event.preventDefault();
      const sub = subject.current.value;
      const inCredit = credit.current.value;
      const inGrade = selectedGrade;

      subject.current.value = "";
      setSelectedGrade("none"); // Reset to default value
      credit.current.value = "";

      setDeatil_List(prevlist => [...prevlist, {
         subject: sub,
         credit: inCredit,
         grade: inGrade
      }]);
   }

   return (
      <div className='input-container'>
         <form onSubmit={onSubmitHandler}>
            <input className='subjects' type="text" placeholder='Enter subject name' ref={subject} />
            <input className='credits' type="number" placeholder='Credit' min="1" ref={credit} />
            <select value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)} className='grades'>
               <option value="none" disabled>Grade</option>
               {Object.entries(gradeMap).map(([grade]) => (
                  <option key={grade} value={grade}>{grade}</option>
               ))}
            </select>
            <button type='submit' className='btn add'>Add</button>
         </form>
      </div>
   );
};

export default Container;
