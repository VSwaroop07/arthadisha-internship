SELECT s.Name, d.DepartmentName
FROM Students s
RIGHT JOIN Departments d
ON s.DepartmentID = d.DepartmentID;