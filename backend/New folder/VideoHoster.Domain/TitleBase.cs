using System;
using System.Collections.Generic;
using System.Text;
using VideoHoster.Domain.Base;

namespace VideoHoster.Domain
{
    public class TitleBase: NamedEntity
    {
        public string PosterUrl { get; set; }
        public int TreeId { get; set; }
        public int TitleDetailsId { get; set; }
        public double UserRating { get; set; }
        public List<Genere> Generes { get; set; }
        public IEnumerable<string> GenereIds { get; set; }
    }
}
