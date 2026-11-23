import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';

import img1 from '../assets/week8/image1.png';
import img2 from '../assets/week8/image2.png';
import img3 from '../assets/week8/image3.png';
import img4 from '../assets/week8/image4.png';
import img5 from '../assets/week8/image5.png';
import img6 from '../assets/week8/image6.png';
import img7 from '../assets/week8/image7.png';
import img8 from '../assets/week8/image8.png';
import img9 from '../assets/week8/image9.png';
import img10 from '../assets/week8/image10.png';
import img11 from '../assets/week8/image11.png';
import img12 from '../assets/week8/image12.png';

export default function Week8({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={8}
      title="Servlets: NetBeans & Apache Tomcat Web Deployment"
      category="Java Web Applications & Tomcat Deployment"
      pdfUrl="/records/Week8.docx"
      onNavigate={onNavigate}
      prevWeek="week7"
      nextWeek="week9"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To develop servlet applications using HttpServlet, GenericServlet and the Servlet interface; process HTML form data; connect Java servlets to MySQL using JDBC; implement a simple online order processing application; and generate dynamic responses from client requests.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'JDK 8 or later',
            'Apache NetBeans IDE',
            'Apache Tomcat 9.0 Server',
            'MySQL Server & Connector/J JDBC driver',
            'Google Chrome or another web browser',
          ].map((req, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Theory" badge="Core Concepts">
        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          A <strong>Servlet</strong> is a server-side Java component that runs inside a servlet container such as Apache Tomcat. It receives client requests, processes business data, and returns dynamic HTML or JSON responses to the browser.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">HttpServlet & GenericServlet</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>HttpServlet:</strong> An HTTP-specific class that provides <code className="font-mono text-emerald-700">doGet()</code> (data retrieval) and <code className="font-mono text-emerald-700">doPost()</code> (form submissions).<br/>
              <strong>GenericServlet:</strong> An abstract, protocol-independent class implementing Servlet, requiring subclasses to override <code className="font-mono text-emerald-700">service()</code>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Servlet Interface & JDBC</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Servlet Interface:</strong> Defines <code className="font-mono">init()</code>, <code className="font-mono">service()</code>, <code className="font-mono">destroy()</code>, <code className="font-mono">getServletConfig()</code> and <code className="font-mono">getServletInfo()</code>.<br/>
              <strong>JDBC:</strong> Standard Java API used to connect servlets to MySQL and execute SQL queries.
            </p>
          </div>
        </div>
      </Section>

      <Section title="General Project Setup in Apache NetBeans" badge="Project Workspace">
        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
          <li>Create a Java Web Application named <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">Week8Servlets</code> in NetBeans.</li>
          <li>Select Apache Tomcat 9.0 and use the <code className="font-mono text-xs">javax.servlet</code> API supported by Tomcat 9.</li>
          <li>Create package <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">com.example</code> under Source Packages.</li>
          <li>Create the servlet classes and HTML files listed in each task.</li>
          <li>Use <code className="font-mono text-xs">@WebServlet</code> annotations for URL mappings.</li>
          <li>For the JDBC task, add MySQL Connector/J to project Libraries.</li>
        </ol>

        <div className="mt-4">
          <ScreenshotFigure 
            src={img1} 
            alt="HttpServlet source code in Apache NetBeans IDE" 
            caption="Screenshot 1: HttpServlet source code in Apache NetBeans IDE"
            figNum="Capture 8.1"
          />
        </div>
      </Section>

      {/* Task 1 */}
      <Section title="1. Develop an HTTP Servlet using HttpServlet and Demonstrate GET and POST Requests" badge="Task 1">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Procedure</h4>
        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1 mb-3">
          <li>Create <code className="font-mono text-xs">HttpMethodServlet</code> in package <code className="font-mono text-xs">com.example</code>.</li>
          <li>Extend <code className="font-mono text-xs">HttpServlet</code> and override <code className="font-mono text-xs">doGet()</code> and <code className="font-mono text-xs">doPost()</code>.</li>
          <li>Map the servlet to <code className="font-mono text-xs">/methods</code> using <code className="font-mono text-xs">@WebServlet</code>.</li>
          <li>Run the project and test the GET URL in Google Chrome.</li>
          <li>Submit a POST form to test <code className="font-mono text-xs">doPost()</code>.</li>
        </ol>
        <p className="text-xs text-slate-600 mb-3">
          <strong>Output:</strong> GET displays a GET request message. POST reads the submitted name and displays it in the response.
        </p>

        <ScreenshotFigure 
          src={img2} 
          alt="HTTP GET response in Google Chrome" 
          caption="Screenshot 2: HTTP GET response in Google Chrome"
          figNum="Capture 8.2"
        />
      </Section>

      {/* Task 2 */}
      <Section title="2. Develop a Servlet by Extending the GenericServlet Class" badge="Task 2">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Procedure</h4>
        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1 mb-3">
          <li>Create <code className="font-mono text-xs">GenericInfoServlet</code>.</li>
          <li>Extend <code className="font-mono text-xs">GenericServlet</code> and override <code className="font-mono text-xs">service()</code>.</li>
          <li>Set the response content type to <code className="font-mono text-xs">text/html</code>.</li>
          <li>Write the response using <code className="font-mono text-xs">PrintWriter</code>.</li>
          <li>Open <code className="font-mono text-xs">/generic-info</code> in the browser.</li>
        </ol>
        <p className="text-xs text-slate-600 mb-3">
          <strong>Output:</strong> The browser displays the GenericServlet Example heading and a successful request message.
        </p>

        <ScreenshotFigure 
          src={img3} 
          alt="GenericServlet source code in NetBeans" 
          caption="Screenshot 3: GenericServlet source code in NetBeans"
          figNum="Capture 8.3"
        />
      </Section>

      {/* Task 3 */}
      <Section title="3. Implement the Servlet Interface and Demonstrate Servlet Life-Cycle Methods" badge="Task 3">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Procedure</h4>
        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1 mb-3">
          <li>Create <code className="font-mono text-xs">ServletInterfaceDemo</code> implementing <code className="font-mono text-xs">Servlet</code>.</li>
          <li>Implement <code className="font-mono text-xs">init()</code>, <code className="font-mono text-xs">getServletConfig()</code>, <code className="font-mono text-xs">service()</code>, <code className="font-mono text-xs">getServletInfo()</code> and <code className="font-mono text-xs">destroy()</code>.</li>
          <li>Store <code className="font-mono text-xs">ServletConfig</code> in <code className="font-mono text-xs">init()</code>.</li>
          <li>Write the response inside <code className="font-mono text-xs">service()</code>.</li>
          <li>Access <code className="font-mono text-xs">/interface-demo</code>; container invokes life-cycle methods.</li>
        </ol>
        <p className="text-xs text-slate-600 mb-3">
          <strong>Output:</strong> The browser displays a message confirming that the Servlet interface implementation processed the request.
        </p>

        <ScreenshotFigure 
          src={img4} 
          alt="Servlet interface implementation in NetBeans" 
          caption="Screenshot 4: Servlet interface implementation in NetBeans"
          figNum="Capture 8.4"
        />
      </Section>

      {/* Task 4 */}
      <Section title="4. Develop an HTML Form and Process Its Data Using a Java Servlet" badge="Task 4">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">HTML Program: student-form.html</h4>
        <CodeBlock language="html" title="student-form.html" code={`<!DOCTYPE html>
<html>
<head><title>Student Form</title></head>
<body>
    <h2>Student Registration</h2>
    <form action="process-form" method="post">
        Name: <input type="text" name="name"><br>
        Course: <input type="text" name="course"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <ScreenshotFigure 
            src={img5} 
            alt="FormServlet source code in NetBeans" 
            caption="Screenshot 5: FormServlet source code in NetBeans"
            figNum="Capture 8.5"
          />
          <ScreenshotFigure 
            src={img6} 
            alt="Form submission response in Google Chrome" 
            caption="Screenshot 6: Form submission response in Google Chrome"
            figNum="Capture 8.6"
          />
        </div>
      </Section>

      {/* Task 5 */}
      <Section title="5. Develop a Servlet Application That Connects to a MySQL Database Using JDBC" badge="Task 5">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Database Preparation</h4>
        <CodeBlock language="sql" title="college_schema.sql" code={`CREATE DATABASE college;
USE college;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);`} />

        <div className="mt-4">
          <ScreenshotFigure 
            src={img7} 
            alt="JDBC DatabaseServlet source code in NetBeans" 
            caption="Screenshot 7: JDBC DatabaseServlet source code in NetBeans"
            figNum="Capture 8.7"
          />
        </div>
      </Section>

      {/* Task 6 */}
      <Section title="6. Develop an Online Order Processing Application Using HTML and Java Servlet" badge="Task 6">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">HTML Program: order.html</h4>
        <CodeBlock language="html" title="order.html" code={`<!DOCTYPE html>
<html>
<head><title>Online Order</title></head>
<body>
    <h2>Online Order Form</h2>
    <form action="place-order" method="post">
        Item: <input type="text" name="item"><br>
        Quantity: <input type="number" name="quantity"><br>
        Unit Price: <input type="number" step="0.01" name="price"><br>
        <input type="submit" value="Place Order">
    </form>
</body>
</html>`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <ScreenshotFigure 
            src={img8} 
            alt="OrderServlet source code in NetBeans" 
            caption="Screenshot 8: OrderServlet source code in NetBeans"
            figNum="Capture 8.8"
          />
          <ScreenshotFigure 
            src={img9} 
            alt="Online order confirmation in Google Chrome" 
            caption="Screenshot 9: Online order confirmation in Google Chrome"
            figNum="Capture 8.9"
          />
        </div>
      </Section>

      {/* Task 7 */}
      <Section title="7. Develop a Servlet That Reads Client Data and Sends a Dynamic Response" badge="Task 7">
        <p className="text-xs text-slate-600 mb-2">
          Dynamic client parameter processing: accessing <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/dynamic?user=Nikhil</code> generates a personalized greeting response.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <ScreenshotFigure 
            src={img10} 
            alt="DynamicResponseServlet source code in NetBeans" 
            caption="Screenshot 10: DynamicResponseServlet source code in NetBeans"
            figNum="Capture 8.10"
          />
          <ScreenshotFigure 
            src={img11} 
            alt="Dynamic response in Google Chrome showing user=Nikhil" 
            caption="Screenshot 11: Dynamic response in Google Chrome (Welcome, Nikhil!)"
            figNum="Capture 8.11"
          />
        </div>
      </Section>

      {/* Server Deployment */}
      <Section title="Running the Application Using Apache Tomcat" badge="Tomcat Deployment">
        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1 mb-4">
          <li>Open <code className="font-mono text-xs">Week8Servlets</code> in NetBeans.</li>
          <li>Confirm Apache Tomcat 9.0 is selected as the runtime server.</li>
          <li>Right-click project and select <strong>Run</strong>.</li>
          <li>Wait for Tomcat to start and deploy the application.</li>
          <li>Open URLs in Google Chrome: <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">http://localhost:8080/Week8Servlets/dynamic?user=Nikhil</code>.</li>
        </ol>

        <ScreenshotFigure 
          src={img12} 
          alt="Apache Tomcat startup and Week8Servlets deployment console" 
          caption="Screenshot 12: Apache Tomcat startup and Week8Servlets deployment console"
          figNum="Capture 8.12"
        />
      </Section>

      <ResultBox>
        Servlet applications were developed to demonstrate HTTP GET and POST handling, GenericServlet, implementation of the Servlet interface and its life-cycle methods, HTML form processing, JDBC connectivity with MySQL, online order processing and dynamic client responses.
      </ResultBox>
    </WeekLayout>
  );
}
