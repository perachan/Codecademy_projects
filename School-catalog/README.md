NYC Department of Education School Catalog
The NYC Department of Education School Catalog is a digital catalog designed to provide quick 
reference material for each school in the New York City school system. The catalog serves as 
a centralized repository of information about schools, including their names, levels, 
number of students, and specific details relevant to each school type.

Project Overview
The objective of this project is to create a comprehensive catalog that enables easy access 
to vital information about primary, middle, and high schools in New York City. The catalog 
is implemented using JavaScript classes, utilizing the concept of inheritance to efficiently 
manage shared properties and behaviors across different school levels.

Features and Functionality
The School Catalog project comprises the following classes:

School: The base class representing a generic school. It contains properties such as 
the school's name, level, and number of students. It also provides methods to retrieve 
quick facts about the school and to randomly pick substitute teachers.

PrimarySchool: A subclass of School, representing primary schools. It extends the School 
class by adding a property to store the pickup policy specific to primary schools.

MiddleSchool: A subclass of School, representing middle schools. It inherits the properties 
and methods of the base School class.

HighSchool: A subclass of School, representing high schools. It extends the School class by 
including an additional property to store an array of sports teams associated with the high school.

The provided code showcases the implementation of these classes, demonstrating how they can 
be used to create instances of various schools and access their respective properties and methods.
