import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';

import img1 from '../assets/week11/image1.png';
import img2 from '../assets/week11/image2.png';
import img3 from '../assets/week11/image3.png';
import img4 from '../assets/week11/image4.png';
import img5 from '../assets/week11/image5.png';
import img6 from '../assets/week11/image6.png';
import img7 from '../assets/week11/image7.png';
import img8 from '../assets/week11/image8.png';
import img9 from '../assets/week11/image9.png';
import img10 from '../assets/week11/image10.png';

export default function Week11({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={11}
      title="Spring JPA with H2 In-Memory Database"
      category="Spring Data JPA, REST Controller & H2 Persistence"
      pdfUrl="/records/Week11.docx"
      onNavigate={onNavigate}
      prevWeek="week10"
      nextWeek="week12"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To develop a Spring Boot application using Spring Data JPA and an in-memory H2 database to add student details, retrieve all student records through browser URLs and view the STUDENT table using the H2 Console.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Java Development Kit (JDK)',
            'Spring Tool Suite (STS) / Apache NetBeans',
            'Spring Web Starter',
            'Spring Data JPA Starter',
            'H2 In-Memory Database',
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
          <strong>Spring Data JPA</strong> simplifies object-relational mapping and persistence operations by providing repository abstractions. Extending <code className="font-mono text-emerald-800">JpaRepository&lt;T, ID&gt;</code> provides automatic CRUD implementations (<code className="font-mono text-xs">save()</code>, <code className="font-mono text-xs">findAll()</code>, <code className="font-mono text-xs">findById()</code>) without manual boilerplate SQL.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          An <strong>Entity</strong> is annotated with <code className="font-mono text-xs">@Entity</code> and mapped to a relational table. <code className="font-mono text-xs">@Id</code> and <code className="font-mono text-xs">@GeneratedValue(strategy = GenerationType.IDENTITY)</code> generate primary keys automatically.
        </p>
      </Section>

      <Section title="Procedure & Implementation Captures" badge="Step-by-Step Workflow">
        <div className="space-y-8">
          
          {/* Step 1 & 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 1 & 2: Entity & Repository Interface</h3>
            <p className="text-sm text-slate-600 mb-3">
              Create <code className="font-mono text-xs">Student.java</code> with fields <code className="font-mono text-xs">id</code>, <code className="font-mono text-xs">name</code> and <code className="font-mono text-xs">city</code>. Define <code className="font-mono text-xs">StudentRepository</code> extending <code className="font-mono text-xs">JpaRepository&lt;Student, Long&gt;</code>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img1} 
                alt="Student entity class in the IDE" 
                caption="Screenshot 1: Student entity class in the IDE"
                figNum="Capture 11.1"
              />
              <ScreenshotFigure 
                src={img2} 
                alt="StudentRepository interface in the IDE" 
                caption="Screenshot 2: StudentRepository interface in the IDE"
                figNum="Capture 11.2"
              />
            </div>
          </div>

          {/* Step 3 & 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 3 & 4: REST Controller & application.properties</h3>
            <p className="text-sm text-slate-600 mb-2">
              Implement <code className="font-mono text-xs">StudentController</code> exposing <code className="font-mono text-xs">/</code>, <code className="font-mono text-xs">/add</code>, and <code className="font-mono text-xs">/students</code> endpoints. Configure datasource and H2 console properties:
            </p>
            <CodeBlock language="properties" title="application.properties" code={`spring.application.name=ramesh
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ScreenshotFigure 
                src={img3} 
                alt="StudentController source in the IDE" 
                caption="Screenshot 3: StudentController source in the IDE"
                figNum="Capture 11.3"
              />
              <ScreenshotFigure 
                src={img4} 
                alt="application.properties configuration" 
                caption="Screenshot 4: application.properties configuration"
                figNum="Capture 11.4"
              />
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 5: Run Spring Boot Application</h3>
            <p className="text-sm text-slate-600 mb-3">
              Execute as Spring Boot App. Console records embedded Tomcat startup on port 8080 and Hibernate DDL generation.
            </p>
            <ScreenshotFigure 
              src={img5} 
              alt="Spring Boot application console" 
              caption="Screenshot 5: Spring Boot application console"
              figNum="Capture 11.5"
            />
          </div>

          {/* Step 6: Testing */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 6: REST Endpoints Verification in Google Chrome</h3>
            <p className="text-sm text-slate-600 mb-3">
              Verify root URL, insert student using <code className="font-mono text-xs">/add?name=Anand&city=Vijayawada</code>, and retrieve JSON records from <code className="font-mono text-xs">/students</code>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ScreenshotFigure 
                src={img6} 
                alt="Home endpoint in Google Chrome" 
                caption="Screenshot 6: Home endpoint in browser"
                figNum="Capture 11.6"
              />
              <ScreenshotFigure 
                src={img7} 
                alt="Student added successfully in Google Chrome" 
                caption="Screenshot 7: Record insertion confirmation"
                figNum="Capture 11.7"
              />
              <ScreenshotFigure 
                src={img8} 
                alt="Student records displayed as JSON in Google Chrome" 
                caption="Screenshot 8: JSON response at /students"
                figNum="Capture 11.8"
              />
            </div>
          </div>

          {/* Step 7 & 8 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 7 & 8: H2 Database Console Verification</h3>
            <p className="text-sm text-slate-600 mb-3">
              Connect to <code className="font-mono text-xs">http://localhost:8080/h2-console</code> with JDBC URL <code className="font-mono text-xs">jdbc:h2:mem:testdb</code>. Query the <code className="font-mono text-xs">STUDENT</code> table to verify stored records.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img9} 
                alt="H2 Console login page in Google Chrome" 
                caption="Screenshot 9: H2 Console login page in Google Chrome"
                figNum="Capture 11.9"
              />
              <ScreenshotFigure 
                src={img10} 
                alt="STUDENT table and stored record in H2 Console" 
                caption="Screenshot 10: STUDENT table and stored record in H2 Console"
                figNum="Capture 11.10"
              />
            </div>
          </div>

        </div>
      </Section>

      <ResultBox>
        The Spring Boot application was developed using Spring Data JPA and the in-memory H2 database. Student records were added through browser URL parameters, retrieved via a JSON REST endpoint, and verified inside the H2 database console.
      </ResultBox>
    </WeekLayout>
  );
}
