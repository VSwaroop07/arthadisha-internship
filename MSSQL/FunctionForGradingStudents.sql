CREATE FUNCTION dbo.GetGrade (@Marks INT)
RETURNS VARCHAR(10)
AS
BEGIN 
	DECLARE @Grade VARCHAR(10);

	IF @Marks >= 90
		SET @Grade = 'A';
	ELSE IF @Marks >= 75
		SET @Grade = 'B';
	ELSE IF @Marks >= 50
		SET @Grade = 'C';
	ELSE 
		SET @Grade = 'Fail';

	RETURN @Grade;
END;