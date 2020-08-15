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

        public bool IsFinished { get; set; }
        public DateTime LastUpdated { get; set; }
        
        public DateTime EpisodeReleaseTime { get; set; }
        
        public DateTime AddedOnSite { get; set; }

        public int LastReleasedEpisodeNumber { get; set; }

        public TitleType TitleType { get; set; }
        
        public Status Status { get; set; }
        
        public DateRange ReleaseDateRange { get; set; }
        
        public string Description { get; set; }
        
    }
}
