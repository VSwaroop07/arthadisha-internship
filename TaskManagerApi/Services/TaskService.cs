using TaskManagerApi.DTOs;
using TaskManagerApi.Models;
using TaskManagerApi.Repositories;

namespace TaskManagerApi.Services;

public class TaskService : ITaskService
{
    private readonly ITaskRepository _repository;

    public TaskService(ITaskRepository repository)
    {
        _repository = repository;
    }

    public async Task<TaskResponseDto> CreateAsync(TaskCreateDto dto)
    {
        var task = new TaskItem
        {
            Title = dto.Title,
            IsCompleted = false
        };

        var created = await _repository.AddAsync(task);

        return new TaskResponseDto
        {
            Id = created.Id,
            Title = created.Title,
            IsCompleted = created.IsCompleted
        };
    }

    public async Task<List<TaskResponseDto>> GetAllAsync()
    {
        var tasks = await _repository.GetAllAsync();

        return tasks.Select(t => new TaskResponseDto
        {
            Id = t.Id,
            Title = t.Title,
            IsCompleted = t.IsCompleted
        }).ToList();
    }
}
