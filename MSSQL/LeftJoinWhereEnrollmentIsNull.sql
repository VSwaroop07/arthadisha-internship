SELECT s.Name
FROM Students s
LEFT JOIN Enrollments e
ON s.StudentID = e.StudentID
WHERE e.StudentID IS NULL;