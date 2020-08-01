using System;
using System.Collections.Generic;
using System.Text;
using VideoHoster.Domain.Base;

namespace VideoHoster.Domain
{
    public class TitleInfo : BaseEntity
    {
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public bool IsFinished { get; set; }
        public string TitleType { get; set; }
        public int AllEpisodes { get; set; }
        public int ReleseadEpisodes { get; set; }
        public DateTime EpisodeDuration { get; set; }
        public Author Author { get; set; }
        public ICollection<Studio> Studios { get; set; }
        public ICollection<Genere> Genres { get; set; }
    }
}
