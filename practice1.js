function teamComp(str) {
  const composition = {}
  const TEAM = ['p', 'm', 'b', 's', 'e'];

  const teamArr = str.split('');

  teamArr.forEach(student => {
    composition[student] = composition[student] || 0
    composition[student] += 1
  })

  const numOfTeams = TEAM.map(type => composition[type])
  return numOfTeams.sort()[0]
}


console.log(teamComp('pmbsepasdfasdfmbse'));