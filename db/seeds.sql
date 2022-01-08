INSERT INTO department (department_name)
VALUES
('Sales'),
('Finance'),
('Legal'),
('Marketing');


INSERT INTO roles (job_title, salary, department_id)
VALUES
('Sales Rep', 50000, 1),
('Accountant', 80000, 2),
('Attorney', 90000, 3),
('Account Manager', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('John', 'Doe', 1),
('Jane', 'Doe', 2),
('Micahel', 'Scott', 3),
('Dwight', 'Schrute', 4);
