SELECT s.Name, d.DepartmentName
FROM Students s
INNER JOIN Departments d
ON s.DepartmentID = d.DepartmentID;