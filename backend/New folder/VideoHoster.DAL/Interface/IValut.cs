using System;
using System.Collections.Generic;
using System.Text;
using VideoHoster.Domain;

namespace VideoHoster.DAL.Interface
{
    public interface IValut
    {
        IEnumerable<TitleBase> GetTitles();
        TitleBase GetTitle(string id);
        void UpdateTitle(TitleBase titleBase);
        void DeleteTitle(string id);
        void AddTitle(TitleBase titleBase);

        IEnumerable<TitleTree> GetTitleTrees();
        TitleTree GetTitleTree(string id);
        void UpdateTitleTree(TitleTree title);
        void DeleteTitleTree(string id);
        void AddTitleTree(TitleTree titleTree);

        TItleDetails GetTitleDetails(string id);
        Genere GetGenere(string id);
        IEnumerable<TItleDetails> GetTitleDetails();
        
        void DeleteTitleDetails(string id);

        void UpdateTitleDetails(TItleDetails titleDetails);
    }
}
