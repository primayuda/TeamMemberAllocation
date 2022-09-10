import { createContext, useState, useEffect } from 'react';
import InitialTeam from '../Constants';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || InitialTeam);

  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees))
    
  },[employees])

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
    
  },[selectedTeam])
  
  function handleTeamSelectionChange(event) {
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map(employee => employee.id === parseInt(event.currentTarget.id)
                                              ?(employee.teamName === selectedTeam) ? {...employee, teamName:''}:{...employee, teamName:selectedTeam}
                                              :employee);
    setEmployees(transformedEmployees);
  }
  
  return <DataContext.Provider
            value={{employees, selectedTeam, setSelectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}}
          >
          {children}
        </DataContext.Provider>
  
}

export default DataContext;