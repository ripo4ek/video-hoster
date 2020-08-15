using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using VideoHoster.Domain;

namespace video_hoster.Data
{
    public class TitleFilterData
    {
        public DateTime ReleaseFrom { get; set; }
        public DateTime ReleaseTo { get; set; }
        
        public int? ItemsToTake { get; set; }
        
        public int? SkipItems { get; set; }
        
        [FromQuery(Name = "genereIds[]")]
        public List<string> GenereIds { get; set; }
        public string TitleTypeId { get; set; }
        public string TitleStatusId { get; set; }
        public string FilterBy { get; set; }
    }
}