CREATE PROCEDURE GetStudentCountF
	@TotalStudents INT OUTPUT
AS
BEGIN
	SELECT @TotalStudents = COUNT(*) FROM StudentsF;
END;