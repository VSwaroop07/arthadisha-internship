SELECT s.Name, d.DepartmentName
FROM Students s
LEFT JOIN Departments d
ON s.DepartmentID = d.DepartmentID;