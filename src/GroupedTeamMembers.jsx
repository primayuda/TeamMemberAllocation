import { useState } from 'react';

const GroupedTeamMembers = ({employees, selectedTeam, setSelectedTeam}) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    const teams = [];

    const teamAMembers = employees.filter(employee => employee.teamName === 'TeamA');
    const teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false:true}
    teams.push(teamA);
    
    const teamBMembers = employees.filter(employee => employee.teamName === 'TeamB');
    const teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false:true}
    teams.push(teamB);
    
    const teamCMembers = employees.filter(employee => employee.teamName === 'TeamC');
    const teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false:true}
    teams.push(teamC);
    
    const teamDMembers = employees.filter(employee => employee.teamName === 'TeamD');
    const teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false:true}
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    const transformedGroupedData = groupedEmployees.map(groupedData => groupedData.team === event.currentTarget.id
                                                               ? {...groupedData, collapsed: !groupedData.collapsed}
                                                               : groupedData);
    setGroupedEmployees(transformedGroupedData);
    setSelectedTeam(event.currentTarget.id)
  }
  
  return(
    <main className="container">
      {
        groupedEmployees.map(item => {
          return (
            <div key={item.team} className="card mt-2" style={{cursor: 'pointer'}}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick} >
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse":""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers;