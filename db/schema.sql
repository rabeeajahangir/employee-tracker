CREATE TABLE employees (
   id INTEGER AUTO_INCREMENT PRIMARY KEY,    
   first_name VARCHAR(30) NOT NULL,    
   last_name VARCHAR(30) NOT NULL,
   job_title VARCHAR(50) NOT NULL,
   departments VARCHAR(30) NOT NULL,
   salary NUMERIC,
   manager_name VARCHAR(30) NOT NULL
   );