using TaskManagerApi.Models;

namespace TaskManagerApi.Repositories;

public interface ITaskRepository
{
    Task<TaskItem> AddAsync(TaskItem task);
    Task<List<TaskItem>> GetAllAsync();
}
