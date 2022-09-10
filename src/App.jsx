import { useState, useEffect } from "react"; 
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import InitialTeam from './Constants'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
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
  
  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter(employee => employee.teamName === selectedTeam).length}
      />
      <Routes>
        <Route 
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleTeamSelectionChange={handleTeamSelectionChange}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          }
        />
        <Route 
          path="/GroupedTeamMembers"
          element={<GroupedTeamMembers
                     employees={employees}
                     selectedTeam={selectedTeam}
                     setSelectedTeam={setSelectedTeam}
                    />}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}
