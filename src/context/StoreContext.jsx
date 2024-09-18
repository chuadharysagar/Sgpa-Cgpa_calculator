import { createContext, useState } from "react";


export const StoreContext = createContext()

const StoreContextProvider = (props) => {
   const [deatial_List, setDeatil_List] = useState([]);

   const handleDelete = (subject) => {
      setDeatil_List(prev_itms => prev_itms.filter(item => item.subject !== subject));
   }


   const gradeMap = {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'D': 4,
      'E': 2,
      'F': 0
   };


   const calculateSgpa = (deatial_List) => {
      let numerator = 0;
      let denominator = 0;
    
      deatial_List.forEach((item) => {
        numerator += (Number(item.credit) * gradeMap[item.grade]);
        denominator += (Number(item.credit));
      });
     
      return (numerator / denominator);
    }    

   const storeVale = {
      gradeMap, deatial_List, setDeatil_List, handleDelete, calculateSgpa
   }


   return (
      <StoreContext.Provider value={storeVale}>
         {props.children}
      </StoreContext.Provider>
   )
}


export default StoreContextProvider;