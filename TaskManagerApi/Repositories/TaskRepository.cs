using Microsoft.EntityFrameworkCore;
using TaskManagerApi.Data;
using TaskManagerApi.Models;

namespace TaskManagerApi.Repositories;

public class TaskRepository : ITaskRepository
{
    private readonly AppDbContext _context;

    public TaskRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<TaskItem> AddAsync(TaskItem task)
    {
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
        return task;
    }

    public async Task<List<TaskItem>> GetAllAsync()
    {
        return await _context.Tasks.ToListAsync();
    }
}
