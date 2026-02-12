SELECT s.Name, d.DepartmentName
FROM Students s
FULL JOIN Departments d
ON s.DepartmentID = d.DepartmentID;