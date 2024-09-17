import React, { useContext, useRef } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';
import '../components/Container.css'

const Container = () => {
   const { gradeMap, deatial_List, setDeatil_List } = useContext(StoreContext);
   const credit = useRef();
   const grade = useRef();
   const subject = useRef();


   const onSubmitHandler = (event) => {
      event.preventDefault();
      const sub = subject.current.value;
      const inCredit = credit.current.value;
      const inGrade = grade.current.value;

      console.log(sub, inCredit, inGrade);

      subject.current.value = "";
      grade.current.value ="";
      credit.current.value = 0;

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
            <input className='credits' type="number" placeholder='Credit' min={"1"} ref={credit} />
            <select ref={grade} className='grades'>
               {Object.entries(gradeMap).map(([grade, points]) => (
                  <option key={grade} value={points}>{grade}</option>
               ))}
            </select>
            <button type='submit' className='btn add'>Add</button>
         </form>
      </div>
   );
};

export default Container;
