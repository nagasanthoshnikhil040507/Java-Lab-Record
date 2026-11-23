import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import { CheckCircle2 } from 'lucide-react';

export default function Week6({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={6}
      title="JDBC CRUD Operations & Stored Procedures using MySQL Database"
      category="CRUD & Stored Procedures"
      pdfUrl="/records/Week6.pdf"
      onNavigate={onNavigate}
      prevWeek="week5"
      nextWeek="week7"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To connect a Java application to a MySQL database using JDBC and perform complete CRUD (Create, Read, Update, Delete) operations using PreparedStatement and CallableStatement.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            'WAMP Server (MySQL)',
            'Apache NetBeans IDE',
            'Java JDK (Java SE)',
            'MySQL Connector/J (JDBC Driver)',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Theory" badge="Architecture & Models">
        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>JDBC (Java Database Connectivity)</strong> is an API that allows Java applications to communicate with relational databases. It provides classes and interfaces to establish database connections, execute SQL statements, and process query result sets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">JDBC Architecture Components</h4>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {['JDBC Driver', 'DriverManager', 'Connection', 'Statement', 'PreparedStatement', 'CallableStatement', 'ResultSet'].map((comp, idx) => (
                <span key={idx} className="px-2 py-1 bg-white rounded border border-slate-200 text-slate-800 font-semibold">
                  {comp}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">CRUD Operations Paradigm</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li><strong>Create:</strong> Insert new records into a relational table.</li>
              <li><strong>Read:</strong> Retrieve records matching criteria from a table.</li>
              <li><strong>Update:</strong> Modify existing attributes in stored records.</li>
              <li><strong>Delete:</strong> Remove obsolete records from a table.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Procedure" badge="Step-by-Step">
        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
          <li>Started WAMP Server and enabled MySQL service.</li>
          <li>Opened MySQL Console.</li>
          <li>Created a database named <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">college</code>.</li>
          <li>Created required tables: <em>Person, Employee, Product, Department, Book</em>.</li>
          <li>Created stored procedures: <em>InsertPerson, DeleteDepartment</em>.</li>
          <li>Created a Java project in NetBeans.</li>
          <li>Added MySQL Connector/J driver to project libraries.</li>
          <li>Established database connection using JDBC.</li>
          <li>Developed Java programs using PreparedStatement and CallableStatement.</li>
          <li>Executed programs and verified results in MySQL console.</li>
        </ol>
      </Section>

      {/* Step 1 & 2 */}
      <Section title="Step 1 & 2: Database and Schema Creation" badge="SQL Initialization">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Database Initialization</h4>
        <CodeBlock language="sql" code={`CREATE DATABASE college;\nUSE college;`} />

        <div className="space-y-4 mt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">1. Person Table</h4>
            <CodeBlock language="sql" code={`CREATE TABLE Person(
    PersonID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    City VARCHAR(255)
);`} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">2. Employee Table & Seed Data</h4>
            <CodeBlock language="sql" code={`CREATE TABLE Employee(
    EmpNo INT PRIMARY KEY,
    EmpName VARCHAR(100),
    Salary DOUBLE
);

INSERT INTO Employee VALUES
(101, 'Rahul', 35000),
(102, 'Ravi', 45000),
(103, 'Priya', 60000);`} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">3. Product Table</h4>
            <CodeBlock language="sql" code={`CREATE TABLE Product(
    ProductNo INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Price DOUBLE
);`} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">4. Department Table</h4>
            <CodeBlock language="sql" code={`CREATE TABLE Department(
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(255),
    City VARCHAR(255)
);`} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">5. Book Table</h4>
            <CodeBlock language="sql" code={`CREATE TABLE Book(
    BookNo INT PRIMARY KEY,
    BookName VARCHAR(100),
    Price DOUBLE
);`} />
          </div>
        </div>
      </Section>

      {/* Step 3: Stored Procedures */}
      <Section title="Step 3: Creating Stored Procedures" badge="MySQL Procedures">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Insert Person Procedure</h4>
            <CodeBlock language="sql" code={`DELIMITER $$
CREATE PROCEDURE InsertPerson(
    IN pid INT,
    IN pname VARCHAR(255),
    IN pcity VARCHAR(255))
BEGIN
    INSERT INTO Person VALUES(pid, pname, pcity);
END$$
DELIMITER ;`} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Delete Department Procedure</h4>
            <CodeBlock language="sql" code={`DELIMITER $$
CREATE PROCEDURE DeleteDepartment(IN did INT)
BEGIN
    DELETE FROM Department
    WHERE DepartmentID = did;
END$$
DELIMITER ;`} />
          </div>
        </div>
      </Section>

      {/* Task 1 */}
      <Section title="Task 1: Insert Data into Person Table using CallableStatement" badge="CallableStatement">
        <CodeBlock language="java" title="InsertPerson.java" code={`import java.sql.*;

public class InsertPerson {
    public static void main(String args[]) {
        try {
            Connection con = DBConnection.getConnection();
            CallableStatement cs = con.prepareCall("{call InsertPerson(?,?,?)}");
            
            cs.setInt(1, 101);
            cs.setString(2, "Rahul");
            cs.setString(3, "Hyderabad");
            cs.execute();
            
            System.out.println("Record Inserted Successfully");
            con.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`} />
        <CodeBlock language="output" title="NetBeans Execution Output" code={`Record Inserted Successfully`} />
        
        <p className="text-xs text-slate-500 font-semibold mt-3 mb-1 uppercase tracking-wider">SQL Record Verification:</p>
        <CodeBlock language="sql" code={`SELECT * FROM Person;`} />
        <CodeBlock language="output" title="MySQL Console Verification" code={`101 Rahul Hyderabad`} />
      </Section>

      {/* Task 2 */}
      <Section title="Task 2: Select Employee whose Salary is Greater than X using PreparedStatement" badge="PreparedStatement">
        <CodeBlock language="java" title="SelectEmployee.java" code={`import java.sql.*;
import java.util.Scanner;

public class SelectEmployee {
    public static void main(String args[]) {
        try {
            Connection con = DBConnection.getConnection();
            Scanner sc = new Scanner(System.in);
            
            System.out.print("Enter Salary: ");
            double x = sc.nextDouble();
            
            PreparedStatement ps = con.prepareStatement("SELECT * FROM Employee WHERE Salary > ?");
            ps.setDouble(1, x);
            
            ResultSet rs = ps.executeQuery();
            while(rs.next()) {
                System.out.println(
                    rs.getInt(1) + " " +
                    rs.getString(2) + " " +
                    rs.getDouble(3)
                );
            }
            con.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`} />
        <CodeBlock language="output" title="Output for Salary Value 40000" code={`102 Ravi 45000
103 Priya 60000`} />
      </Section>

      {/* Task 3 */}
      <Section title="Task 3: Insert and Display Product Details using PreparedStatement" badge="Insert & Select">
        <CodeBlock language="java" title="ProductDemo.java" code={`import java.sql.*;

public class ProductDemo {
    public static void main(String args[]) {
        try {
            Connection con = DBConnection.getConnection();
            
            // Insert parameterized record
            PreparedStatement ps = con.prepareStatement("INSERT INTO Product VALUES(?,?,?)");
            ps.setInt(1, 101);
            ps.setString(2, "Laptop");
            ps.setDouble(3, 65000);
            ps.executeUpdate();
            System.out.println("Product Inserted Successfully");
            
            // Display all products
            PreparedStatement ps2 = con.prepareStatement("SELECT * FROM Product");
            ResultSet rs = ps2.executeQuery();
            while(rs.next()) {
                System.out.println(
                    rs.getInt(1) + " " +
                    rs.getString(2) + " " +
                    rs.getDouble(3)
                );
            }
            con.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`} />
        <CodeBlock language="output" title="Console Output" code={`Product Inserted Successfully
101 Laptop 65000`} />
      </Section>

      {/* Task 4 */}
      <Section title="Task 4: Delete Department using CallableStatement" badge="Procedure Call">
        <CodeBlock language="java" title="DeleteDepartment.java" code={`import java.sql.*;

public class DeleteDepartment {
    public static void main(String args[]) {
        try {
            Connection con = DBConnection.getConnection();
            CallableStatement cs = con.prepareCall("{call DeleteDepartment(?)}");
            cs.setInt(1, 1);
            cs.execute();
            
            System.out.println("Department Deleted Successfully");
            con.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`} />
        <CodeBlock language="output" title="Console Output" code={`Department Deleted Successfully`} />
        
        <p className="text-xs text-slate-500 font-semibold mt-3 mb-1 uppercase tracking-wider">MySQL Verification After Deletion:</p>
        <CodeBlock language="sql" code={`SELECT * FROM Department;`} />
        <CodeBlock language="output" title="Remaining Department Records" code={`2 Mechanical Chennai
3 Electrical Bangalore`} />
      </Section>

      {/* Task 5 */}
      <Section title="Task 5: Complete CRUD Operations on Book Table" badge="Full Lifecycle CRUD">
        <p className="text-xs text-slate-600 mb-2">Operations performed in <code className="font-mono bg-slate-100 px-1 rounded">BookCRUD.java</code>:</p>
        <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mb-3">
          <li><strong>Create:</strong> Inserted new book record (101, &quot;Java Programming&quot;, 650).</li>
          <li><strong>Read:</strong> Displayed active book records from MySQL.</li>
          <li><strong>Update:</strong> Updated book price.</li>
          <li><strong>Delete:</strong> Deleted the book record.</li>
        </ul>

        <CodeBlock language="output" title="CRUD Execution Log" code={`Insert Successful
Book Details:
101 Java Programming 650
Update Successful
Delete Successful`} />
      </Section>

      <ResultBox>
        The Java application was successfully connected to the MySQL database using JDBC. Complete CRUD operations were performed using <code className="font-mono text-xs bg-emerald-100 px-1 py-0.5 rounded">PreparedStatement</code> and <code className="font-mono text-xs bg-emerald-100 px-1 py-0.5 rounded">CallableStatement</code>. Records across multiple tables were inserted, retrieved, updated, and deleted, with procedures executing on the MySQL database engine.
      </ResultBox>

      <Section title="Conclusion" badge="Summary">
        <p className="text-sm text-slate-700 leading-relaxed">
          JDBC provides a high-performance, unified API for Java applications to communicate with relational database engines. Utilizing parameterized <code className="font-mono text-xs bg-slate-100 px-1 rounded">PreparedStatement</code>s eliminates SQL injection risks and speeds query execution, while <code className="font-mono text-xs bg-slate-100 px-1 rounded">CallableStatement</code>s efficiently encapsulate business logic within database stored procedures.
        </p>
      </Section>
    </WeekLayout>
  );
}
