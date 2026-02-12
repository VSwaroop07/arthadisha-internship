CREATE TABLE Departments (
	DepartmentID INT PRIMARY KEY,
	DepartmentName VARCHAR(50)
);

CREATE TABLE Students (
	StudentID INT PRIMARY KEY,
	Name VARCHAR(50),
	DepartmentID INT
);

CREATE TABLE Courses (
	CourseID INT PRIMARY KEY,
	CourseName VARCHAR(50)
);

CREATE TABLE Enrollments (
	StudentID INT,
	CourseID INT
);
