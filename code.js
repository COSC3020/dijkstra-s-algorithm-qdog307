function dijkstra(graph, sourceNode) {
    const distances = {};
    const visited = new Set();
    const priorityQueue = [];

    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[sourceNode] = 0;

    priorityQueue.push({ node: sourceNode, distance: 0 });

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const { node: currentNode, distance: currentDistance } = priorityQueue.shift();

        if (visited.has(currentNode)) continue;

        visited.add(currentNode);

        for (const [neighbor, weight] of Object.entries(graph[currentNode])) {
            const newDistance = currentDistance + weight;
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.push({ node: neighbor, distance: newDistance });
            }
        }
    }

    return distances;
}
