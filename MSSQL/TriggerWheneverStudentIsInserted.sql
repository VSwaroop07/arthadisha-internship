CREATE TRIGGER trg_AfterInsertStudentT
ON StudentsT
AFTER INSERT
AS 
BEGIN
	INSERT INTO StudentLog(StudentID, ActionType, ActionTime)
	SELECT StudentID, 'INSERT', GETDATE()
	FROM inserted;
END;