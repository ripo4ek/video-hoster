using System.Collections.Generic;
using VideoHoster.Domain;

namespace video_hoster.Data
{
    public class TitleFilter
    {
        public YearRange YearRange { get; set; }
        public IEnumerable<Genere> Generes { get; set; }
        public TitleType TitleType { get; set; }
        public TitleStatus TitleStatus { get; set; }
    }
}