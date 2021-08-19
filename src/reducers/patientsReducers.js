export const patientState ={
    patients:[]
} 
export const patientsReducers = (state ,action) =>{
    switch(action.type) {
        case "ADD_PATIENTS" :
            const newPatients = {
                id:action.id,
                name:action.name 
            };
            const allPatients = [...state.patients, newPatients];
            return {patients:allPatients};
            case "REMOVE_PATIENTS" :
                const remainingPatients = state.patients.filter(pt=>pt.id !== action.id)
                // const filterPatients = remainingPatients
                console.log(action)
            return {patients:remainingPatients};
            default:
               return state;
    }


}