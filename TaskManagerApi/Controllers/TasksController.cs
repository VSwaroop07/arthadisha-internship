using Microsoft.AspNetCore.Mvc;
using TaskManagerApi.DTOs;
using TaskManagerApi.Services;

namespace TaskManagerApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase

{
    private readonly ITaskService _service;

    public TasksController(ITaskService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create(TaskCreateDto dto)
    {
        var result = await _service.CreateAsync(dto);
        return Ok(result);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _service.GetAllAsync();
        return Ok(result);
    }
}
