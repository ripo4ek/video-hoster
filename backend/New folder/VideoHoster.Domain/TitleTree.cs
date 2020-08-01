using System;
using System.Collections.Generic;
using System.Text;
using QuickGraph;
using QuickGraph.Data;
using VideoHoster.Domain.Base;
using System.Linq;

namespace VideoHoster.Domain
{
    public class TitleTree : NamedEntity
    {
        private class Edge : IEdge<TitleBase>
        {
            public string Name { get; set; }
            public TitleBase Source { get; set; }
            public TitleBase Target { get; set; }
            public Edge(TitleBase source, TitleBase target, string name)
            {
                Name = name;
                Source = source;
                Target = target;
            }
        }
        private BidirectionalGraph<TitleBase, Edge> _graph;
        public TitleTree(TitleBase firstTitleBase)
        {
            _graph = new BidirectionalGraph<TitleBase, Edge>();
            _graph.AddVertex(firstTitleBase);
        }
        public void AddTitle(TitleConnection connection)
        {
            if (!_graph.ContainsVertex(connection.Source))
                throw new Exception("Node not in the tree");

            _graph.AddVertex(connection.Target);
            var edges = new List<Edge>()
            {
                new Edge(connection.Source,connection.Target, connection.SourceTarget),
                new Edge(connection.Target,connection.Source, connection.SourceTarget)
            };
            _graph.AddEdgeRange(edges);
        }
        public void RemoveTitle(TitleBase titleBase)
        {
            if (!_graph.ContainsVertex(titleBase))
                throw new Exception("Node not in the tree");

            var edgesForDeletion = _graph.Edges.Where(e=>e.Source == titleBase || e.Target == titleBase).ToList();
            edgesForDeletion.ForEach(e => _graph.RemoveEdge(e));
            _graph.RemoveVertex(titleBase);
             
        }
    }
}
