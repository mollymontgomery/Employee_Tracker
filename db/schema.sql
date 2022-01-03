CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30)
    salary DECIMAL
    dept_id INTEGER,
    CONSTRAINT fk_departments FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INTEGER,
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INTEGER,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id)
);
