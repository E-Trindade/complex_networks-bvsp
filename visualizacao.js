<!DOCTYPE html>
<html lang='en'>

<head>
    <style>
        body {
            margin: 0;
        }
    </style>

    <meta charset="utf-8">
    <script src="https://unpkg.com/3d-force-graph"></script>
    <script src="edges.js"></script>
    <!--<script src="../../dist/3d-force-graph.js"></script>-->
</head>

<body>
    <div id="3d-graph"></div>

    <script>
     const links = document.edges.filter((l) => l.source != l.target)
        const ids = new Set()
        links.forEach(l => {
            ids.add(l.source);
            ids.add(l.target);
        });
        const gData = {
            nodes: Array.from(ids).map(id => {
                return {
                    id: id
                }
            }),
            links: links
        }
     const Graph = ForceGraph3D({
     })(document.getElementById('3d-graph'))
         .dagMode('td')
         .dagLevelDistance(5)
         .linkOpacity(0.7)
         .linkCurvature('curvature')
         .graphData(gData);
    </script>
</body>

</html>
