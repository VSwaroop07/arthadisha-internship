CREATE FUNCTION dbo.GetTopStudents (@MinMarks INT)
RETURNS TABLE
AS 
RETURN
(
	SELECT * 
	FROM StudentsF
	WHERE Marks >= @MinMarks
);