using TaskManagerApi.DTOs;

namespace TaskManagerApi.Services;

public interface ITaskService
{
    Task<TaskResponseDto> CreateAsync(TaskCreateDto dto);
    Task<List<TaskResponseDto>> GetAllAsync();
}
