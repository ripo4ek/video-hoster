using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using VideoHoster.Domain;

namespace video_hoster.Data
{
    public  class FilterTitleBases
    {
        public IEnumerable<TitleBase> Filter(IEnumerable<TitleBase> titles,TitleFilterData data)
        {
            var titlesQuery = titles.AsQueryable();
            if (data.TitleStatusId != null)
                titlesQuery = titlesQuery.Where(tq=>tq.Status !=null &&  tq.Status.Id == data.TitleStatusId);
            if(data.TitleTypeId != null)
                titlesQuery = titlesQuery.Where(tq =>tq.TitleType !=null &&   tq.TitleType.Id == data.TitleTypeId);
            /*if(data.ReleaseFrom != null && data.ReleaseTo != null)
                titlesQuery = titlesQuery.Where(tq => InRange(, tq.ReleaseDateRange));*/
            if (data.GenereIds != null)
                titlesQuery = titlesQuery.Where(tq => tq.Generes !=null && ContainsGenres(tq.Generes,data.GenereIds));

            if (data.FilterBy != null)
            {
                PropertyDescriptor prop = TypeDescriptor.GetProperties(typeof(TitleBase)).Find(data.FilterBy,true);
                titlesQuery = titlesQuery.OrderBy(tq => prop.GetValue(tq));
            }

            if (data.SkipItems.HasValue)
                titlesQuery = titlesQuery.Skip(data.SkipItems.Value);
            
            if (data.ItemsToTake.HasValue)
                titlesQuery = titlesQuery.Take(data.ItemsToTake.Value);
            
            return titlesQuery;
        }

        private bool ContainsGenres(IEnumerable<Genere> generes, IEnumerable<string> filter)
        {
            return generes.Any(genere => filter.Contains(genere.Id));
        }
        private bool InRange(DateRange filter, DateRange title)
        {
            return filter.From < title.From || filter.To > title.To;
        }
    }
}