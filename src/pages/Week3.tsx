import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import { CheckCircle2 } from 'lucide-react';

export default function Week3({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={3}
      title="Connecting a Microsoft Access Database (.accdb) with Java using UCanAccess JDBC Driver"
      category="Type-4 Pure Java JDBC Connectivity"
      pdfUrl="/records/Week3.pdf"
      onNavigate={onNavigate}
      prevWeek="week2"
      nextWeek="week4"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To establish a connection between a Java application and a Microsoft Access database (.accdb) using the UCanAccess pure Java JDBC driver and retrieve records from the student table.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Ubuntu Linux Operating System',
            'Java JDK (17 or later)',
            'Microsoft Access Database (.accdb)',
            'UCanAccess JDBC Driver (5.1.3)',
            'Terminal / Bash Shell',
            'Text Editor (Nano / Vim)',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Files Used" badge="Dependencies">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { file: 'AccessDemo.java', desc: 'Main Java source code connecting to MS Access' },
            { file: 'Database1.accdb', desc: 'Microsoft Access database file containing student table' },
            { file: 'ucanaccess-5.1.3.jar', desc: 'Core UCanAccess Type-4 JDBC driver' },
            { file: 'commons-logging-1.3.5.jar', desc: 'Apache Commons Logging library dependency' },
            { file: 'hsqldb-2.7.4.jar', desc: 'HyperSQL Database engine dependency for in-memory processing' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-emerald-800">{item.file}</div>
              <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Procedure" badge="Step-by-Step Execution">
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Step 1: Create a Working Directory</h3>
            <p className="text-xs text-slate-600 mb-2">Create a dedicated folder to store all project files, database, and JAR dependencies.</p>
            <CodeBlock language="terminal" code={`mkdir ~/Downloads/ucanaccess\ncd ~/Downloads/ucanaccess`} />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Step 2: Download UCanAccess Library & Dependencies</h3>
            <p className="text-xs text-slate-600 mb-2">Download the UCanAccess driver and its required supporting JARs from Maven Central repository:</p>
            <CodeBlock language="terminal" code={`wget https://repo1.maven.org/maven2/io/github/spannm/ucanaccess/5.1.3/ucanaccess-5.1.3.jar\nwget https://repo1.maven.org/maven2/commons-logging/commons-logging/1.3.5/commons-logging-1.3.5.jar\nwget https://repo1.maven.org/maven2/org/hsqldb/hsqldb/2.7.4/hsqldb-2.7.4.jar`} />
            
            <p className="text-xs text-slate-600 mb-2 mt-3">Verify downloaded files in directory:</p>
            <CodeBlock language="terminal" code="ls" />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Step 3: Create Java Source File</h3>
            <p className="text-xs text-slate-600 mb-2">Open the nano editor to create the AccessDemo program.</p>
            <CodeBlock language="terminal" code="nano AccessDemo.java" />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Step 4: Compile the Java Program</h3>
            <p className="text-xs text-slate-600 mb-2">Compile the Java source file using the Java compiler.</p>
            <CodeBlock language="terminal" code="javac AccessDemo.java" />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Step 5: Execute with Classpath</h3>
            <p className="text-xs text-slate-600 mb-2">Run the compiled application including the UCanAccess driver in the classpath:</p>
            <CodeBlock language="terminal" code={`java -cp ".:ucanaccess-5.1.2-uber.jar" AccessDemo`} />
            <p className="text-xs text-slate-500 mt-2 bg-amber-50 p-2.5 rounded border border-amber-200 text-amber-900">
              Note: Initially, if a <em>&quot;given file does not exist&quot;</em> error occurs, verify that the absolute path to <code className="bg-amber-100 px-1 rounded">Database1.accdb</code> in the connection string matches your system path. Once updated, the application connects and executes successfully.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Java Program" badge="AccessDemo.java">
        <CodeBlock language="java" title="AccessDemo.java" code={`import java.sql.*;

public class AccessDemo {
    public static void main(String[] args) {
        try {
            // Absolute path to the Microsoft Access Database (.accdb)
            String url = "jdbc:ucanaccess:///home/itlab3/Downloads/ucanaccess/Database1.accdb";
            Connection con = DriverManager.getConnection(url);
            System.out.println("Connected Successfully");
            
            // Execute query on student table
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM student");
            
            while(rs.next()) {
                System.out.println(
                    rs.getInt("ID") + " " +
                    rs.getString("NAME") + " " +
                    rs.getInt("MARKS")
                );
            }
            con.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}`} />
      </Section>

      <Section title="Output" badge="Execution Results">
        <CodeBlock language="output" title="Console Output" code={`Connected Successfully
1 RAMESH 10
2 MAHESH 20
3 SURESH 30
4 RAJESH 40`} />
      </Section>

      <ResultBox>
        The Java application successfully established a connection with the Microsoft Access (<code className="font-mono text-xs bg-emerald-100 px-1 py-0.5 rounded">.accdb</code>) database using the UCanAccess Type-4 JDBC driver. Records stored in the student table were retrieved and displayed on the console with accurate IDs, Names, and Marks.
      </ResultBox>
    </WeekLayout>
  );
}
