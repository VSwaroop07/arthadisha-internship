CREATE PROCEDURE AddStudent
	@StudentID INT,
	@Name VARCHAR(50),
	@Marks INT
AS
BEGIN
	INSERT INTO StudentsF (StudentID, Name, Marks)
	VALUES (@StudentID, @Name, @Marks);
END;