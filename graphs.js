const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map()

const addNode = (airport) => {
  adjacencyList.set(airport, [])
}

const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}
// BFS Breadth First Search
const bfs = (list, start, end) => {
  const visited = new Set()
  const queue = [start]
  while(queue.length > 0) {
    const node = queue.shift()
    const destinations = list.get(node)
    for(destination of destinations){
      console.log(`${start}->${destination}`)
      if(!visited.has(destination)){
        visited.add(destination)
        queue.push(destination)
      }
      if(node === end){
        console.log('found it')
      }
    }
  }
}
// DFS Depth First Search
const dfs = (list, start, end, visited = new Set()) => {
  visited.add(start)
  const destinations = list.get(start)
  for(destination of destinations){
    console.log(`${start}->${destination}`)
    if(destination === end){
      console.log('found it')
      return
    }
    if(!visited.has(destination)){
      dfs(list, destination, end, visited)
    }
  }
}

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

console.log('bfs algorithm')
bfs(adjacencyList, "PHX", "BKK")

console.log('dfs algorithm')
dfs(adjacencyList, "PHX", "BKK")
