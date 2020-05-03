using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataContext;
using Microsoft.AspNetCore.Cors;
using API.Db.Dtos;

namespace API.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/user")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public UsersController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/user?email=...&password=...
        [HttpGet("")]
        public async Task<ActionResult<User>> GetItem(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password)) 
                return NotFound();

            var item = await _context.Users.Where(x => x.email == email && x.password == password).FirstOrDefaultAsync();

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // GET: api/user
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetItem(int id)
        {
            var item = await _context.Users.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // PUT: api/user/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(int id, User item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/user
        [HttpPost]
        public async Task<ActionResult<User>> PostItem(User item)
        {
            _context.Users.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItem", new { id = item.Id }, item);
        }

        // DELETE: api/user/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteItem(int id)
        {
            var item = await _context.Users.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Users.Remove(item);
            await _context.SaveChangesAsync();

            return item;
        }

        private bool ItemExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
