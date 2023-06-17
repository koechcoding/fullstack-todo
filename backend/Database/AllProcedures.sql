
CREATE OR ALTER  PROCEDURE getTodos 
AS
BEGIN
SELECT * FROM TodoTable 
END


CREATE OR ALTER  PROCEDURE getTodo(@id VARCHAR(255)) 
AS
BEGIN
SELECT * FROM TodoTable WHERE id =@id
END
 

CREATE OR ALTER  PROCEDURE insertTodos(@id VARCHAR(255),@title VARCHAR(2550),
@description VARCHAR(2550) ,@endDate VARCHAR(255))
AS
BEGIN
INSERT INTO TodoTable(id,title,description ,endDate) 
VALUES(@id,@title, @description, @endDate)
END



CREATE OR ALTER  PROCEDURE UpdateTodo(@id VARCHAR(255),@title VARCHAR(2550),
@description VARCHAR(2550) ,@endDate VARCHAR(255))
AS
BEGIN
UPDATE TodoTable SET title=@title,description=@description ,endDate=@endDate WHERE id=@id
END



CREATE OR ALTER  PROCEDURE deleteTodo(@id VARCHAR(255))
AS
BEGIN
DELETE FROM TodoTable WHERE id=@id
END