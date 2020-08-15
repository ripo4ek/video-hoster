using System.Collections.Generic;

namespace VideoHoster.Domain
{
    public class TItleDetails
    {
       
        public int EpisodeDurationInMin { get; set; }
        public int EposodesCount { get; set; }
        public IEnumerable<string> Screenshots { get; set; }
        
        public string TrailerUrl { get; set; }
        
        public IEnumerable<Episode> Episodes { get; set; }
    }
}