using System.Collections.Generic;

namespace VideoHoster.Domain
{
    public class TItleDetails
    {
        public TitleType TitleType { get; set; }
        public TitleStatus TitleStatus { get; set; }
        public DateRange ReleaseDateRange { get; set; }
        public string Description { get; set; }
        public IEnumerable<string> Screenshots { get; set; }
        public IEnumerable<Episode> Episodes { get; set; }
    }
}