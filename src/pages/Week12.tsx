import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';

import img1 from '../assets/week12/image1.png';
import img2 from '../assets/week12/image2.png';
import img3 from '../assets/week12/image3.png';
import img4 from '../assets/week12/image4.png';
import img5 from '../assets/week12/image5.png';
import img6 from '../assets/week12/image6.png';
import img7 from '../assets/week12/image7.png';
import img8 from '../assets/week12/image8.png';

export default function Week12({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={12}
      title="JDBC with MySQL & Spring Boot"
      category="Spring Boot REST Services & MySQL Relational Persistence"
      pdfUrl="/records/Week12.docx"
      onNavigate={onNavigate}
      prevWeek="week11"
      nextWeek="week13"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To develop a Spring Boot application that connects to a MySQL database, stores employee details in an employee table and retrieves all employee records using a REST endpoint.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Java Development Kit (JDK 17)',
            'Spring Tool Suite (STS) / NetBeans IDE',
            'Spring Boot with Maven',
            'MySQL Server 8.x & Client / Workbench',
            'MySQL Connector/J driver',
            'Google Chrome or any web browser',
          ].map((req, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Theory" badge="Core Concepts">
        <p className="text-sm text-slate-700 leading-relaxed mb-3">
          <strong>MySQL</strong> is a production-grade relational database management system. In modern Spring Boot applications, database connectivity is managed via DataSource properties, while <strong>Spring Data JPA</strong> automatically binds database tables to entity classes.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          The <code className="font-mono text-xs">Employee</code> entity is mapped to the <code className="font-mono text-xs">employee</code> table. The <code className="font-mono text-xs">EmployeeRepository</code> interface extends <code className="font-mono text-xs">JpaRepository&lt;Employee, Integer&gt;</code>, and <code className="font-mono text-xs">EmployeeController</code> provides the <code className="font-mono text-xs">/employees</code> REST service.
        </p>
      </Section>

      <Section title="Implementation Steps & Verification Captures" badge="Step-by-Step Workflow">
        <div className="space-y-8">
          
          {/* Step 1 & 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 1 & 2: Employee Entity & Repository Interface</h3>
            <p className="text-sm text-slate-600 mb-3">
              Define <code className="font-mono text-xs">Employee.java</code> with fields <code className="font-mono text-xs">id</code>, <code className="font-mono text-xs">name</code>, and <code className="font-mono text-xs">department</code>. Create <code className="font-mono text-xs">EmployeeRepository.java</code> extending <code className="font-mono text-xs">JpaRepository&lt;Employee, Integer&gt;</code>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img1} 
                alt="Employee.java class in Apache NetBeans IDE" 
                caption="Screenshot 1: Employee.java class in Apache NetBeans IDE"
                figNum="Capture 12.1"
              />
              <ScreenshotFigure 
                src={img2} 
                alt="EmployeeRepository interface in Apache NetBeans IDE" 
                caption="Screenshot 2: EmployeeRepository interface in Apache NetBeans IDE"
                figNum="Capture 12.2"
              />
            </div>
          </div>

          {/* Step 3 & 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 3 & 4: REST Controller & MySQL Datasource Configuration</h3>
            <p className="text-sm text-slate-600 mb-2">
              Implement <code className="font-mono text-xs">EmployeeController</code> mapped to <code className="font-mono text-xs">/employees</code>. Configure server port 85 and local MySQL credentials in <code className="font-mono text-xs">application.properties</code>:
            </p>
            <CodeBlock language="properties" title="application.properties" code={`spring.application.name=ramesh
server.port=85
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db?useSSL=false
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.sql.init.mode=always
spring.sql.init.platform=mysql
spring.jpa.defer-datasource-initialization=true`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ScreenshotFigure 
                src={img3} 
                alt="EmployeeController.java in Apache NetBeans IDE" 
                caption="Screenshot 3: EmployeeController.java in Apache NetBeans IDE"
                figNum="Capture 12.3"
              />
              <ScreenshotFigure 
                src={img4} 
                alt="MySQL datasource configuration in application.properties" 
                caption="Screenshot 4: MySQL datasource configuration in application.properties"
                figNum="Capture 12.4"
              />
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 5: Database Schema & Sample Records</h3>
            <p className="text-sm text-slate-600 mb-2">
              Execute database initialization script creating <code className="font-mono text-xs">employee_db</code> and inserting test records:
            </p>
            <CodeBlock language="sql" title="data.sql" code={`CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100)
);

INSERT INTO employee VALUES
(1, 'Ramesh', 'IT'),
(2, 'Suresh', 'CSE'),
(3, 'Mahesh', 'ECE');`} />
            <div className="mt-4">
              <ScreenshotFigure 
                src={img5} 
                alt="MySQL database, employee table and sample records" 
                caption="Screenshot 5: MySQL database, employee table and sample records"
                figNum="Capture 12.5"
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 6: Run Application</h3>
            <p className="text-sm text-slate-600 mb-3">
              Run the main class as Spring Boot App. Console confirms Tomcat started on port 85 and connected to MySQL.
            </p>
            <ScreenshotFigure 
              src={img6} 
              alt="Spring Boot application startup console" 
              caption="Screenshot 6: Spring Boot application startup console on port 85"
              figNum="Capture 12.6"
            />
          </div>

          {/* Step 7 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 7: View Employee Records in Google Chrome</h3>
            <p className="text-sm text-slate-600 mb-3">
              Open <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-xs">http://localhost:85/employees</code> in Google Chrome. The REST service queries the database and outputs JSON employee objects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img7} 
                alt="/employees endpoint opened in Google Chrome" 
                caption="Screenshot 7: /employees endpoint opened in Google Chrome"
                figNum="Capture 12.7"
              />
              <ScreenshotFigure 
                src={img8} 
                alt="Employee records displayed in browser" 
                caption="Screenshot 8: Employee records displayed in browser"
                figNum="Capture 12.8"
              />
            </div>
          </div>

        </div>
      </Section>

      <ResultBox>
        A Spring Boot application was configured to connect with a MySQL database. The employee_db database and employee table were prepared, sample employee records were inserted and the /employees endpoint was used to retrieve employee details.
      </ResultBox>
    </WeekLayout>
  );
}
