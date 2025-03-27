using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypesController : ControllerBase
    {
        private readonly UserTypeService _userTypeService;

        public UserTypesController(UserTypeService userTypeService)
        {
            _userTypeService = userTypeService;
        }

        // GET: api/UserTypes
        [HttpGet]
        public async Task<ActionResult<List<UserTypes>>> GetAllUserTypes()
        {
            try
            {
                var userTypes = await _userTypeService.GetAllUserTypes();
                return Ok(userTypes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // GET: api/UserTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserTypes>> GetUserTypeById(int id)
        {
            try
            {
                var userType = await _userTypeService.GetAllUserById(id);

                if (userType == null)
                {
                    return NotFound();
                }

                return Ok(userType);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // POST: api/UserTypes
        [HttpPost]
        public async Task<ActionResult<UserTypes>> AddUserType([FromBody] UserTypes userType)
        {
            if (userType == null)
            {
                return BadRequest("UserType cannot be null");
            }

            try
            {
                var result = await _userTypeService.AddUserType(userType);
                return CreatedAtAction(nameof(GetUserTypeById), new { id = result.UserTypeId }, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PUT: api/UserTypes/5
        [HttpPut("{id}")]
        public async Task<ActionResult<UserTypes>> UpdateUserType(int id, [FromBody] UserTypes userType)
        {
            if (userType == null || userType.UserTypeId != id)
            {
                return BadRequest("UserType data is invalid");
            }

            try
            {
                var updatedUserType = await _userTypeService.UpdateUserTypeAsync(userType);
                return Ok(updatedUserType);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // DELETE: api/UserTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserType(int id)
        {
            try
            {
                await _userTypeService.DeleteUserType(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}

