# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Sources 

For this I used the pseudocode that was provided. I used geeks for geeks https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/ to get an idea on runtime analysis and the code. I used https://www.w3schools.com/dsa/dsa_algo_graphs_dijkstra.php for more understanding. I used ChatGPT for the test code and setting up the actions workflow to constanly test newly uploaded code. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

### Runtime Analysis

The algorithm processes the graph by iterating through all vertices, represented by `n`. During the initialization step, the algorithm sets the distances to all `n` vertices to infinity (`∞`), which takes `Θ(n)`. This prepares the graph for the main processing loop.

In the main loop, the algorithm iterates through each unvisited vertex and selects the one with the smallest distance. Since the priority queue is implemented as a simple array, finding the smallest element requires a worst-case runtime of `Θ(n)` per iteration. This selection process is repeated for all `n` vertices, resulting in a total runtime for vertex selection of `Θ(n^2)`.

For each vertex, the algorithm iterates over its neighbors to relax the edges. As there are `E` total edges in the graph, the edge relaxation step runs in `Θ(E)`. 

Combining these components, the overall runtime complexity of the algorithm is `Θ(n^2 + E)`. 

