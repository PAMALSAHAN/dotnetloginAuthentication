using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        static List<string> myList = new List<string>()
        {
            "value0","value1","value2"
        };
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()   // read
        {
            return myList;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return myList[id];
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)  // create 
        {
            myList.Add(value);

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) //update
        {
            myList[id] = value;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id) // delete
        {
            myList.RemoveAt(id);
        }
    }
}
