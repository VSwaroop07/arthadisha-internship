CREATE FUNCTION dbo.GetPassedStudents()
RETURNS @Result TABLE (
	StudentID INT,
	Name VARCHAR(50),
	Marks INT
)
AS
BEGIN 
	INSERT INTO @Result
	SELECT StudentID, Name, Marks
	FROM StudentsF
	WHERE Marks >= 50;

	RETURN;
END;