﻿using System.Collections.Generic;

namespace VideoHoster.Domain
{
    public class Title
    {
        
        public string PosterUrl { get; set; }
        public int TreeId { get; set; }
        public int TitleDetailsId { get; set; }
        public double UserRating { get; set; }
        public List<Genere> Generes { get; set; }
        public IEnumerable<string> GenereIds { get; set; }

        public string Description { get; set; }
        public IEnumerable<string> Screenshots { get; set; }
        public IEnumerable<Episode> Episodes { get; set; }
    }
}