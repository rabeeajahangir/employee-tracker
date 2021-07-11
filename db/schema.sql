DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

CREATE TABLE employees (
   id INTEGER AUTO_INCREMENT PRIMARY KEY,    
   first_name VARCHAR(30) NOT NULL,    
   last_name VARCHAR(30) NOT NULL,
   job_title VARCHAR(50) NOT NULL,
   departments VARCHAR(30) NOT NULL,
   salary NUMERIC,
   manager_name VARCHAR(30),
   );

   CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
    );

    CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30),
    department_name VARCHAR(30));

    