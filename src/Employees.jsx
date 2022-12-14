import { useContext } from 'react';
import DataContext from './context/DataContext';
import TeamCard from './TeamCard';
import TeamSelection from './TeamSelection';

const Employees = () => {
  const {employees} = useContext(DataContext);
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <TeamSelection />
        </div>
      </div>
      
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map(employee => (
                <TeamCard 
                  key={employee.id}
                  employee={employee}
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