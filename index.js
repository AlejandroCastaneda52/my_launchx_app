const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo")
const Ale = new MissionCommander("Ale")
const Rodr = new MissionCommander("Rodri")

console.log(carlo.name)
console.log(Ale.name)
console.log(Rodr.name)

const myMissionCommander = new MissionCommander("Woopa")