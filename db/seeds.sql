INSERT INTO employees
(first_name, last_name, job_title, departments, salary, manager_name)
VALUES
('John', 'Doe', 'Sales Lead', 'Sales', 100000, 'Ashley Rodriguez'),
('Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'John Doe'),
('Ashley', 'Rodrigues', 'Lead Engineer', 'Engineer', 120000, ''),
('Kevin', 'Tupik', 'Software Engineer', 'Engineer', 120000, ''),
('Malia', 'Brown', 'Accountant', 'Finance', 125000, ''),
('Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, ''),
('Tom', 'Allen', 'Lawyer', 'Legal', 190000, 'Sarah Lourd'),
('Tammer', 'Galal', 'Software Engineer', 'Engineering', 120000, 'Kevin Tupik');


INSERT INTO departments
    (department_name)
    VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

    INSERT INTO roles
   (job_title, department_name)
    VALUES
   ('Sales Lead', 'Sales'),
   ('Salesperson', 'Sales'),
   ('Lead Engineer', 'Engineering'),
   ('Software Engineer', 'Engineering'),
   ('Accountant', 'Finance'),
   ('Legal Team Lead', 'Legal'),
   ('Lawyer', 'Legal');