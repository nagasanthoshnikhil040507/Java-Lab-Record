import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';
import { CheckCircle2 } from 'lucide-react';

import img1 from '../assets/week5/image_1.png';
import img2 from '../assets/week5/image_2.png';
import img3 from '../assets/week5/image_3.png';
import img4 from '../assets/week5/image_4.png';
import img5 from '../assets/week5/image_5.png';
import img6 from '../assets/week5/image_6.png';
import img7 from '../assets/week5/image_7.png';
import img8 from '../assets/week5/image_8.png';

export default function Week5({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={5}
      title="Java Application Connectivity with MySQL Database using JDBC in NetBeans"
      category="NetBeans IDE & WAMP / MySQL Integration"
      pdfUrl="/records/Week5.pdf"
      onNavigate={onNavigate}
      prevWeek="week4"
      nextWeek="week6"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To develop a Java application in NetBeans IDE that connects to a MySQL database using JDBC, executes SQL manipulations, and retrieves data from the employee table.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Operating System: Windows 10/11',
            'Java JDK (Java SE)',
            'Apache NetBeans IDE',
            'WAMP Server (Apache, MySQL)',
            'MySQL Database',
            'MySQL JDBC Driver (Connector/J)',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Algorithm" badge="Implementation Steps">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1.5">
            <li>Open Apache NetBeans IDE.</li>
            <li>Create a new Java Application project named <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">JavaApplication26</code>.</li>
            <li>Start the WAMP Server and open the MySQL console.</li>
            <li>Create the database <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">it</code> and the table <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">employee</code>.</li>
            <li>Insert sample employee records into the table.</li>
            <li>Add the MySQL JDBC Driver (<code className="bg-slate-200 px-1 py-0.5 rounded text-xs">mysql-connector-java.jar</code>) to the project libraries.</li>
            <li>Write the JDBC connection and record retrieval logic in the Java source file.</li>
            <li>Compile and run the application in NetBeans.</li>
            <li>Verify that employee records are printed in the output console.</li>
          </ol>
        </div>
      </Section>

      <Section title="Procedure with Recorded Captures" badge="Interactive Workflow">
        <div className="space-y-10">
          
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Step 1: Open NetBeans IDE</h3>
            <p className="text-xs text-slate-600 mb-3">Launch Apache NetBeans IDE from the desktop or start menu.</p>
            <ScreenshotFigure 
              src={img1} 
              alt="NetBeans Home Screen" 
              caption="Screenshot 1: NetBeans Home Screen" 
              figNum="Capture 5.1"
            />
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Step 2: Create New Java Application Project</h3>
            <p className="text-xs text-slate-600 mb-1">Navigate to: <code className="bg-slate-200 px-1 rounded text-xs">File → New Project → Java → Java Application</code></p>
            <p className="text-xs text-slate-600 mb-3">Enter Project Name: <strong className="text-slate-900">JavaApplication26</strong> and click Finish.</p>
            <ScreenshotFigure 
              src={img2} 
              alt="Creating Java Project" 
              caption="Screenshot 2: Creating Java Project in NetBeans" 
              figNum="Capture 5.2"
            />
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Step 3: Java Source Code Implementation</h3>
            <p className="text-xs text-slate-600 mb-3">Write the database connection and statement execution logic inside the project source file.</p>
            <ScreenshotFigure 
              src={img3} 
              alt="Java Source Code in NetBeans" 
              caption="Screenshot 3: Java Source Code in NetBeans Editor" 
              figNum="Capture 5.3"
            />
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Step 4: WAMP Server & MySQL Table Setup</h3>
            <p className="text-xs text-slate-600 mb-2">Start WAMP Server, launch MySQL Console, and execute database initialization scripts:</p>
            
            <CodeBlock language="sql" title="MySQL Console Commands" code={`create database it;
use it;

create table employee(
    rollno varchar(10),
    name varchar(100) primary key
);

insert into employee values(1,'ramesh');
insert into employee values(2,'harshith');
insert into employee values(3,'haswika');
insert into employee values(4,'rajesh');
insert into employee values(5,'suresh');`} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <ScreenshotFigure 
                src={img4} 
                alt="Database Creation" 
                caption="Screenshot 4: Database Creation" 
                figNum="Capture 5.4"
              />
              <ScreenshotFigure 
                src={img5} 
                alt="Employee Table Created" 
                caption="Screenshot 5: Employee Table Created" 
                figNum="Capture 5.5"
              />
              <ScreenshotFigure 
                src={img6} 
                alt="Records Inserted Successfully" 
                caption="Screenshot 6: Records Inserted" 
                figNum="Capture 5.6"
              />
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Step 5: Add MySQL JDBC Driver to Libraries</h3>
            <p className="text-xs text-slate-600">
              In NetBeans: <code className="bg-slate-200 px-1 rounded text-xs">Projects Panel → JavaApplication26 → Right Click Libraries → Add JAR/Folder</code> and select the MySQL Connector/J driver.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Step 6: Run and Verify Execution</h3>
            <p className="text-xs text-slate-600 mb-3">Click the green Run button to execute the Java application.</p>
            <ScreenshotFigure 
              src={img7} 
              alt="Program Execution" 
              caption="Screenshot 8: Program Execution in NetBeans" 
              figNum="Capture 5.7"
            />
          </div>

        </div>
      </Section>

      <Section title="Java Program" badge="JavaApplication26.java">
        <CodeBlock language="java" title="JavaApplication26.java" code={`package javaapplication26;
import java.sql.*;
import java.util.*;

public class JavaApplication26 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.jdbc.Driver");
            
            // Connect to MySQL server on localhost database 'it'
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost/it", "root", "");
            Statement st = con.createStatement();
            
            // Execute deletion on specified rollno
            int delete = st.executeUpdate("delete from employee where rollno=4");
            
            // Execute query and display employee records
            ResultSet rs = st.executeQuery("select * from employee");
            while(rs.next()) {
                System.out.println(rs.getInt(1) + "  " + rs.getString(2));
            }
            
            con.close();
        } catch(Exception e) { 
            System.out.println(e);
        }
    }
}`} />
      </Section>

      <Section title="Expected Output & Execution Capture" badge="Verified Outcome">
        <CodeBlock language="output" title="Output Console" code={`Roll No    Name

1          ramesh
2          harshith
3          haswika
4          rajesh
5          suresh`} />

        <ScreenshotFigure 
          src={img8} 
          alt="Final Output Window" 
          caption="Screenshot 9: Final Output Window in NetBeans" 
          figNum="Capture 5.8"
        />
      </Section>

      <ResultBox>
        The Java application was successfully connected to the MySQL database using JDBC in the Apache NetBeans IDE environment. The records stored in the employee table were retrieved, processed, and displayed on the NetBeans output console.
      </ResultBox>
    </WeekLayout>
  );
}
