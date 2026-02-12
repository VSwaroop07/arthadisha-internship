CREATE PROCEDURE AddStudentWithValidation
	@StudentID INT,
	@Name VARCHAR(50),
	@Marks INT
AS
BEGIN
	IF @Marks > 100
	BEGIN
		PRINT 'Marks cannot exceed 100';
		RETURN;
	END

	INSERT INTO StudentsF (StudentID, Name, Marks)
	VALUES (@StudentID, @Name, @Marks);
END;