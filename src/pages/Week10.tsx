import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';

import img1 from '../assets/week10/image1.png';
import img2 from '../assets/week10/image2.png';
import img3 from '../assets/week10/image3.png';
import img4 from '../assets/week10/image4.png';
import img5 from '../assets/week10/image5.png';
import img6 from '../assets/week10/image6.png';

export default function Week10({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={10}
      title="JDBC Template with In-Memory Database (H2)"
      category="Spring Boot JdbcTemplate & In-Memory RDBMS"
      pdfUrl="/records/Week10.docx"
      onNavigate={onNavigate}
      prevWeek="week9"
      nextWeek="week11"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To develop a Spring Boot application using JdbcTemplate with an in-memory H2 database to create an Author table, insert author records and retrieve the stored records.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Java Development Kit (JDK)',
            'Apache NetBeans IDE / STS',
            'Spring Boot with Spring Web',
            'Spring Data JDBC / JdbcTemplate',
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
          <strong>JdbcTemplate</strong> is a core Spring Framework utility that automates JDBC connection management, statement creation, exception translation, and resource closing.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>H2 Database</strong> is an embedded, lightweight, in-memory relational engine. Data persists during the lifecycle of the application JVM. The browser-based <strong>H2 Console</strong> provides an interactive SQL environment to inspect schema and records.
        </p>
      </Section>

      <Section title="Implementation Steps & Verification Captures" badge="Interactive Workflow">
        <div className="space-y-8">
          
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 1: Create the Author Model Class</h3>
            <p className="text-sm text-slate-600 mb-3">
              Define <code className="font-mono text-xs">Author.java</code> containing <code className="font-mono text-xs">firstName</code> and <code className="font-mono text-xs">lastName</code> properties with getters, setters and constructors.
            </p>
            <ScreenshotFigure 
              src={img1} 
              alt="Author.java class in Apache NetBeans IDE" 
              caption="Screenshot 1: Author.java class in Apache NetBeans IDE"
              figNum="Capture 10.1"
            />
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 2: Create AuthorService with JdbcTemplate</h3>
            <p className="text-sm text-slate-600 mb-3">
              Annotate <code className="font-mono text-xs">AuthorService.java</code> with <code className="font-mono text-xs">@Service</code> and autowire <code className="font-mono text-xs">JdbcTemplate</code>. The <code className="font-mono text-xs">@PostConstruct</code> lifecycle hook creates the table, inserts records, and executes queries.
            </p>
            <ScreenshotFigure 
              src={img2} 
              alt="AuthorService.java using JdbcTemplate in NetBeans" 
              caption="Screenshot 2: AuthorService.java using JdbcTemplate in NetBeans"
              figNum="Capture 10.2"
            />
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 3: Configure application.properties</h3>
            <p className="text-sm text-slate-600 mb-2">
              Set the server port and enable the H2 web console endpoint:
            </p>
            <CodeBlock language="properties" title="application.properties" code={`server.port=83\nspring.h2.console.enabled=true`} />
            <div className="mt-4">
              <ScreenshotFigure 
                src={img3} 
                alt="application.properties configuration" 
                caption="Screenshot 3: application.properties configuration"
                figNum="Capture 10.3"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 4: Run Spring Boot Application</h3>
            <p className="text-sm text-slate-600 mb-3">
              Launch the application. Check the console for Tomcat listening on port 83, table creation, record insertion, and printed author records.
            </p>
            <ScreenshotFigure 
              src={img4} 
              alt="Application console showing database initialization and retrieved author records" 
              caption="Screenshot 4: Application console showing database initialization and retrieved author records"
              figNum="Capture 10.4"
            />
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 5: Connect to the H2 Console</h3>
            <p className="text-sm text-slate-600 mb-3">
              Open <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-xs">http://localhost:83/h2-console</code> in Chrome. Use the active JDBC URL from console output, enter username <code className="font-mono text-xs">sa</code>, and click <strong>Connect</strong>.
            </p>
            <ScreenshotFigure 
              src={img5} 
              alt="H2 Console login page in Google Chrome" 
              caption="Screenshot 5: H2 Console login page in Google Chrome"
              figNum="Capture 10.5"
            />
          </div>

          {/* Step 6 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 6: Query and Verify Stored Author Records</h3>
            <p className="text-sm text-slate-600 mb-2">
              Execute SQL query in the console:
            </p>
            <CodeBlock language="sql" code="SELECT * FROM author;" />
            <div className="mt-4">
              <ScreenshotFigure 
                src={img6} 
                alt="H2 Console displaying records from the AUTHOR table" 
                caption="Screenshot 6: H2 Console displaying records from the AUTHOR table"
                figNum="Capture 10.6"
              />
            </div>
          </div>

        </div>
      </Section>

      <ResultBox>
        The Spring Boot application was developed using JdbcTemplate and the in-memory H2 database. The Author table was automatically created, records were inserted, and data was retrieved and inspected through the interactive H2 Console.
      </ResultBox>
    </WeekLayout>
  );
}
