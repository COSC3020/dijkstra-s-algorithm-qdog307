const fs = require('fs');
const jsc = require('jsverify');

// Load Dijkstra's implementation
eval(fs.readFileSync('code.js') + '');

// Custom generator for a graph with non-negative weights
const graphGen = jsc.record({
    A: jsc.record({ B: jsc.nat, C: jsc.nat }),
    B: jsc.record({ A: jsc.nat, C: jsc.nat, D: jsc.nat }),
    C: jsc.record({ A: jsc.nat, B: jsc.nat, D: jsc.nat }),
    D: jsc.record({ B: jsc.nat, C: jsc.nat })
});

// Test Dijkstra's algorithm with a valid graph
const testDijkstra = jsc.forall(graphGen, function (graph) {
    const result = dijkstra(graph, 'A');

    // Verify triangle inequality for all distances
    return Object.keys(graph).every(node =>
        Object.entries(graph[node] || {}).every(
            ([neighbor, weight]) => result[neighbor] <= result[node] + weight
        )
    );
});

// Run the property-based test
jsc.assert(testDijkstra);

// Edge case: Single edge
console.assert(
    JSON.stringify(dijkstra({ A: { B: 5 }, B: {} }, 'A')) === JSON.stringify({ A: 0, B: 5 }),
    "Single edge test failed"
);

// Edge case: Disconnected graph
console.assert(
    JSON.stringify(dijkstra({ A: {}, B: {}, C: {} }, 'A')) === JSON.stringify({ A: 0, B: Infinity, C: Infinity }),
    "Disconnected graph test failed"
);
