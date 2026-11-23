import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';

import img1 from '../assets/week13/image1.png';
import img2 from '../assets/week13/image2.png';
import img3 from '../assets/week13/image3.png';
import img4 from '../assets/week13/image4.png';
import img5 from '../assets/week13/image5.png';
import img6 from '../assets/week13/image6.png';
import img7 from '../assets/week13/image7.png';
import img8 from '../assets/week13/image8.png';
import img9 from '../assets/week13/image9.png';
import img10 from '../assets/week13/image10.png';

export default function Week13({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={13}
      title="Spring JPA with Relational Database & Thymeleaf"
      category="Spring Data JPA, MySQL Relational Database & Thymeleaf UI"
      pdfUrl="/records/Week13.docx"
      onNavigate={onNavigate}
      prevWeek="week12"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To develop a Spring Boot application using Spring Data JPA and a MySQL relational database, retrieve employee records and display the data through an HTML page and a REST API.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Java Development Kit (JDK)',
            'Spring Tool Suite (STS) / Eclipse IDE',
            'Spring Boot and Apache Maven',
            'MySQL Server and MySQL Workbench',
            'Thymeleaf Template Engine',
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
          <strong>Spring Data JPA</strong> simplifies database operations in Spring applications. It maps Java entity classes to relational database tables and provides repository methods for executing database queries. Hibernate serves as the underlying JPA object-relational mapping implementation.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          In this capstone laboratory experiment, an <code className="font-mono text-xs">Employee</code> entity is mapped to MySQL. <code className="font-mono text-xs">EmployeeRepository</code> provides persistence operations. Dual controllers deliver both a server-rendered HTML presentation layer using <strong>Thymeleaf</strong> and a decoupled REST JSON endpoint.
        </p>
      </Section>

      <Section title="Procedure with Screenshots" badge="Step-by-Step Workflow">
        <div className="space-y-8">
          
          {/* Step 1 & 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 1 & 2: Project Setup & application.properties</h3>
            <p className="text-sm text-slate-600 mb-2">
              Configure dependencies in STS and define datasource properties specifying server port 88, MySQL testdb URL, and Hibernate dialect:
            </p>
            <CodeBlock language="properties" title="application.properties" code={`spring.application.name=SpringJPAMySQL
server.port=88
spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ScreenshotFigure 
                src={img1} 
                alt="Application properties in STS" 
                caption="Screenshot 1: Application properties in STS"
                figNum="Capture 13.1"
              />
              <ScreenshotFigure 
                src={img2} 
                alt="Creating MySQL database and sample employee records" 
                caption="Screenshot 2: MySQL database and sample employee records setup"
                figNum="Capture 13.2"
              />
            </div>
          </div>

          {/* Step 3 & 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 3 & 4: MySQL Schema & Employee Entity Class</h3>
            <p className="text-sm text-slate-600 mb-3">
              Create the MySQL database <code className="font-mono text-xs">testdb</code> and map <code className="font-mono text-xs">Employee.java</code> with <code className="font-mono text-xs">@Entity</code>, <code className="font-mono text-xs">@Id</code> and <code className="font-mono text-xs">@GeneratedValue</code>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img3} 
                alt="Employee entity class" 
                caption="Screenshot 3: Employee entity class implementation"
                figNum="Capture 13.3"
              />
              <ScreenshotFigure 
                src={img4} 
                alt="EmployeeRepository interface" 
                caption="Screenshot 4: EmployeeRepository interface"
                figNum="Capture 13.4"
              />
            </div>
          </div>

          {/* Step 5 & 6 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 5 & 6: Dual Controllers & Thymeleaf Template</h3>
            <p className="text-sm text-slate-600 mb-3">
              Implement the REST controller at <code className="font-mono text-xs">/api/employees</code> and the HTML controller at <code className="font-mono text-xs">/employees</code>. Create <code className="font-mono text-xs">employees.html</code> with Thymeleaf table tags.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img5} 
                alt="REST controller source" 
                caption="Screenshot 5: REST controller source"
                figNum="Capture 13.5"
              />
              <ScreenshotFigure 
                src={img6} 
                alt="Thymeleaf employee list template" 
                caption="Screenshot 6: Thymeleaf employee list HTML template"
                figNum="Capture 13.6"
              />
            </div>
          </div>

          {/* Step 7 & 8 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 7 & 8: Maven Dependencies & Application Startup</h3>
            <p className="text-sm text-slate-600 mb-3">
              Verify <code className="font-mono text-xs">pom.xml</code> dependencies (Spring Web, Spring Data JPA, MySQL Connector, Thymeleaf) and launch the application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img7} 
                alt="Maven dependencies in pom.xml" 
                caption="Screenshot 7: Maven dependencies in pom.xml"
                figNum="Capture 13.7"
              />
              <ScreenshotFigure 
                src={img8} 
                alt="Spring Boot application console" 
                caption="Screenshot 8: Spring Boot startup and database connection console"
                figNum="Capture 13.8"
              />
            </div>
          </div>

          {/* Step 9 & 10 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 9 & 10: Browser Verification of HTML Page & REST JSON API</h3>
            <p className="text-sm text-slate-600 mb-3">
              Verify that <code className="font-mono text-xs">http://localhost:88/employees</code> renders the styled Thymeleaf HTML table, while <code className="font-mono text-xs">http://localhost:88/api/employees</code> returns the JSON payload.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img9} 
                alt="Employee records displayed in browser" 
                caption="Screenshot 9: Employee records displayed in HTML browser table"
                figNum="Capture 13.9"
              />
              <ScreenshotFigure 
                src={img10} 
                alt="JSON response from REST API" 
                caption="Screenshot 10: JSON response from REST API"
                figNum="Capture 13.10"
              />
            </div>
          </div>

        </div>
      </Section>

      <ResultBox>
        A complete Spring Boot application using Spring Data JPA and MySQL was developed and tested. Relational database records were accessed through repository interfaces and presented simultaneously through a Thymeleaf web interface and a decoupled JSON REST API.
      </ResultBox>

      <Section title="Conclusion" badge="Capstone Summary">
        <p className="text-sm text-slate-700 leading-relaxed">
          This comprehensive laboratory curriculum demonstrates modern Java enterprise application development: progressing from core Java paradigms, Linux JDK environments and UCanAccess/MySQL JDBC drivers, to enterprise Servlets, Apache Tomcat, Maven lifecycle management, and full-stack Spring Boot architectures leveraging Spring Data JPA, H2, MySQL and Thymeleaf.
        </p>
      </Section>
    </WeekLayout>
  );
}
