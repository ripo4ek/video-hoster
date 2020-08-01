using System;
using System.Collections.Generic;
using System.Text;
using VideoHoster.Domain.Base;

namespace VideoHoster.Domain
{
    public class Episode : NamedEntity
    {
        public string VideoUrl { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int EpisodeNumber { get; set; }
    }
}
