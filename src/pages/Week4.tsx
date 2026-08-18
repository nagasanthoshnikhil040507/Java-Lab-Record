import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import { CheckCircle2 } from 'lucide-react';

export default function Week4({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={4}
      title="Java & MySQL Database Connections: Simple, Prepared & Callable Execution Types"
      category="MySQL Relational Database & Execution Types"
      pdfUrl="/records/Week4.pdf"
      onNavigate={onNavigate}
      prevWeek="week3"
      nextWeek="week5"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To connect a Java application with a MySQL database using JDBC and perform database operations using Statement, PreparedStatement, and CallableStatement execution models.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Ubuntu Linux Operating System',
            'Java JDK (OpenJDK / Oracle)',
            'MySQL Server 8.x / 9.x',
            'MySQL Connector/J (JDBC Driver 9.4.0)',
            'Terminal Shell',
            'MySQL Client Console',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Theory" badge="Core Concepts">
        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>Java Database Connectivity (JDBC)</strong> is a Java API that enables Java applications to interact with relational databases. JDBC provides standard interfaces to establish database connections, execute SQL queries, retrieve data in tabular formats, and manage database transactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-emerald-800 mb-2">1. Statement</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
              <li>Used to execute simple, static SQL queries at runtime.</li>
              <li>Suitable for DDL or one-time SQL execution.</li>
              <li>Does not support parameterized inputs.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-emerald-800 mb-2">2. PreparedStatement</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
              <li>Used for executing parameterized, pre-compiled SQL queries.</li>
              <li>Significantly improves performance for repeated queries.</li>
              <li>Prevents SQL Injection vulnerabilities by binding parameters.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-emerald-800 mb-2">3. CallableStatement</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
              <li>Used to execute stored procedures stored inside the RDBMS.</li>
              <li>Allows execution of database-side business logic.</li>
              <li>Supports IN, OUT, and INOUT parameter binding.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Database Creation" badge="MySQL Schema Setup">
        <p className="text-xs text-slate-600 mb-2">Create the database schema and insert initial student records in MySQL console:</p>
        <CodeBlock language="sql" title="college_schema.sql" code={`CREATE DATABASE college;
USE college;

CREATE TABLE student(
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO student VALUES
(101, 'Ramesh'),
(102, 'Haswika'),
(103, 'Harshith');`} />
      </Section>

      <Section title="Download JDBC Driver" badge="Connector/J Installation">
        <p className="text-xs text-slate-600 mb-2">Download and extract the MySQL Connector/J driver archive:</p>
        <CodeBlock language="terminal" code={`wget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-9.4.0.tar.gz`} />
        
        <p className="text-xs text-slate-600 mb-2 mt-4">Extract the archive:</p>
        <CodeBlock language="terminal" code={`tar -xzf mysql-connector-j-9.4.0.tar.gz`} />
      </Section>

      <Section title="Java Program – Statement" badge="JdbcDemo.java">
        <CodeBlock language="java" title="JdbcDemo.java" code={`import java.sql.*;

public class JdbcDemo {
    public static void main(String args[]) {
        try {
            // Establish connection to MySQL college database
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "password"
            );
            
            // Create Statement and execute SELECT query
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM student");
            
            while(rs.next()){
                System.out.println(rs.getInt("id") + " " + rs.getString("name"));
            }
            
            con.close();
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}`} />
      </Section>

      <Section title="Compilation and Execution" badge="Linux Terminal Commands">
        <p className="text-xs text-slate-600 mb-2"><strong>Compilation:</strong></p>
        <CodeBlock language="terminal" code={`javac -cp .:~/mysql-connector-j-9.4.0/mysql-connector-j-9.4.0.jar JdbcDemo.java`} />

        <p className="text-xs text-slate-600 mb-2 mt-4"><strong>Execution:</strong></p>
        <CodeBlock language="terminal" code={`java -cp .:~/mysql-connector-j-9.4.0/mysql-connector-j-9.4.0.jar JdbcDemo`} />
      </Section>

      <Section title="Output" badge="Console Output">
        <CodeBlock language="output" title="Statement Output" code={`101 Ramesh
102 Haswika
103 Harshith`} />
      </Section>

      <ResultBox>
        The Java application was successfully connected to the MySQL database using JDBC. Database querying and record manipulation were executed via Statement, PreparedStatement, and CallableStatement, with expected record retrieval matching the underlying table contents.
      </ResultBox>
    </WeekLayout>
  );
}
