namespace TaskManagerApi.DTOs;

public class TaskResponseDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
}
