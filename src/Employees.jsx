import TeamCard from './TeamCard';
import TeamSelection from './TeamSelection';

const Employees = ({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}) => {
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <TeamSelection 
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>
      
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map(employee => (
                <TeamCard 
                  employee={employee}
                  selectedTeam={selectedTeam}
                  handleEmployeeCardClick={handleEmployeeCardClick}
                />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees;