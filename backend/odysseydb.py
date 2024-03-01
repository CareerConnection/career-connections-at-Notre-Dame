#db.py
import mysql.connector
import csv

# Establish a connection to the MySQL server
host = 'odyssey2024.czyq8ucg24sg.us-east-2.rds.amazonaws.com'
user = 'admin'
password = 'OpenSource123'
database = 'odyssey2024'
port = 3306

connection = mysql.connector.connect(
    host= host,
    user= user,
    password= password,
    database= database,
    port= port
)

# Create a cursor object to interact with the server
cursor = connection.cursor()

# Create a new database
cursor.execute(f"CREATE DATABASE IF NOT EXISTS {database}")
print(f"Database '{database}' created successfully")

# Switch to the newly created database
cursor.execute(f"USE {database}")

# Create a table
class_table = 'classes'
create_table_query = """
CREATE TABLE IF NOT EXISTS {table} (
  id INT AUTO_INCREMENT PRIMARY KEY,
  class VARCHAR(255) NOT NULL,
  class_id VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  professor VARCHAR(255) NOT NULL,
  rating INT NOT NULL,
  difficulty INT NOT NULL
)
"""

cursor.execute(create_table_query.format(table=class_table))
print(f"Table '{class_table}' created successfully")


# Classes Table

# Insert data into the table from csv
with open('ClassData.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        insert_query = f"INSERT INTO {class_table} (class, class_id, description, professor, rating, difficulty) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(insert_query, (row[0], row[1], row[2], row[3], 0, 0))# Insert data into the table

#insert_query = f"INSERT INTO {class_table} (class, description, professor, rating, difficulty) VALUES (%s, %s, %s, %s, %s)"
#cursor.execute(insert_query, (class_data['class'], class_data['description'], class_data['professor'], class_data['rating'], class_data['difficulty']))

connection.commit()
print(f"Data inserted into '{class_table}' successfully")

# Print the ID of the inserted record
print(f"Data inserted with ID: {cursor.lastrowid}")


# Create users table
user_table = 'users'
create_table_query = """
CREATE TABLE IF NOT EXISTS {table} (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
"""

cursor.execute(create_table_query.format(table=user_table))
print(f"Table '{user_table}' created successfully")

# # Add user data
# user_data = {
#     'username': 'chase',
#     'password_hash': 'odyssey',
#     'email': 'cdixon5@nd.edu'
# }

# insert_query = f"INSERT INTO {user_table} (username, password_hash, email) VALUES (%s, %s, %s)"
# cursor.execute(insert_query, (user_data['username'], user_data['password_hash'], user_data['email']))
# connection.commit()
# print(f"Data inserted into '{user_table}' successfully")

# Close the cursor and connection
cursor.close()
connection.close()
