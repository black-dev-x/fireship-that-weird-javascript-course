// BFS Breadth First Search
const bfs = (list, start, end) => {
  const visited = new Set()
  const queue = [start]
  while(queue.length > 0) {
    const node = queue.shift()
    const destinations = list.get(node)
    for(destination of destinations){
      console.log(destination)
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
