INSERT INTO department (dept_name)
VALUES
('Sales'),
('Finance'),
('Legal');


INSERT INTO roles (job_title, salary, dept_id)
VALUES
('Sales Rep', 50000, 1),
('Accountant', 80000, 2),
('Attorney', 90000, 3),
('Manager', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, 123),
('Jane', 'Doe', 2, 234),
('Micahel', 'Scott', 3, 345),
('Dwight', 'Schrute', 4, 456);
