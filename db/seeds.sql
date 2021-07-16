INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', '1', 1),
('Mike', 'Chan', '2', 2),
('Ashley', 'Rodrigues', '3', 5),
('Kevin', 'Tupik', '4', 4),
('Malia', 'Brown', '5', 6),
('Sarah', 'Lourd', '6', 7),
('Tom', 'Allen', '7', 3),
('Tammer', 'Galal', '4', 4);


INSERT INTO departments
    (dept_name)
    VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

    INSERT INTO roles
   (title, salary, dept_id)
    VALUES
   ('Sales Manager',100000, 1),
   ('Engineering Manager',120000, 2),
   ('Accounting Manager',125000, 3),
   ('Legal Team Manager',250000, 4);
