using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.WebEncoders.Testing;
using video_hoster.Data;
using VideoHoster.DAL.Interface;
using VideoHoster.Domain;


namespace video_hoster.ApiControllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TitleBasesController : ControllerBase
    {
        private readonly IValut _valut;


        public TitleBasesController(IValut valut)
        {
            _valut = valut;
        }
        [HttpGet]
        public IEnumerable<TitleBase> Get([FromQuery] TitleFilterData titleFilter)
        {
            var titleBases = _valut.GetTitles();
            var filter = new FilterTitleBases();
            if (titleFilter != null)
             titleBases = filter.Filter(titleBases, titleFilter);
            
            
     
            
            return titleBases;
            
            
            
            
        }
        
        
        // GET api/<TitleController>/5
        [HttpGet("{id}")]
        public TitleBase Get(int id)
        {
            throw new Exception();
            //return _valut.GetTitle(id);
        }

        // POST api/<TitleController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<TitleController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<TitleController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
