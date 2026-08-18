import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import ResultBox from '../components/ResultBox';

export default function Week1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={1}
      title="Java Assignment: Architectural Concepts & Comparative Study"
      category="Assignment & Theoretical Study"
      pdfUrl="/records/Week1.pdf"
      onNavigate={onNavigate}
      nextWeek="week2"
    >
      {/* Question 1 */}
      <Section title="1. Difference Between Core Java and Advanced Java" badge="Core Concepts">
        <p className="text-slate-700 leading-relaxed">
          Java is divided into two major areas: <strong>Core Java</strong> and <strong>Advanced Java</strong>. Core Java covers the basic programming concepts required to build Java applications, whereas Advanced Java extends these concepts to develop web-based and enterprise-level software.
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 border-r border-slate-200 w-1/2">Core Java</th>
                <th className="px-4 py-3 w-1/2">Advanced Java</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Used to create standalone desktop and console applications.</td>
                <td className="px-4 py-3">Used to create web and enterprise applications.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Includes OOP, exception handling, collections, multithreading, file handling, and JDBC basics.</td>
                <td className="px-4 py-3">Includes Servlets, JSP, Spring, Spring Boot, Hibernate, and web services.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Programs execute on a single computer.</td>
                <td className="px-4 py-3">Applications work in distributed and client-server environments.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Does not require a web server.</td>
                <td className="px-4 py-3">Requires a web/application server such as Apache Tomcat.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Mainly focuses on programming fundamentals.</td>
                <td className="px-4 py-3">Focuses on developing scalable business applications.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Suitable for desktop software.</td>
                <td className="px-4 py-3">Suitable for banking, e-commerce, ERP, and online portals.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Easier for beginners to learn.</td>
                <td className="px-4 py-3">Requires a good understanding of Core Java concepts.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200 font-medium">Example: Calculator, Text Editor.</td>
                <td className="px-4 py-3 font-medium text-emerald-800">Example: Online Banking System, Shopping Website.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
          <strong>Conclusion:</strong> Core Java provides the foundation of Java programming, while Advanced Java builds upon these concepts to develop dynamic, secure, and enterprise-scale web applications.
        </div>
      </Section>

      {/* Question 2 */}
      <Section title="2. Important Features of Java Applets" badge="Client-side GUI">
        <p>
          An <strong>Applet</strong> is a Java program that executes inside a web browser or an applet viewer. Although applets are rarely used today, they were once popular for developing interactive web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            { num: '1', title: 'Runs on the Client Side', desc: 'The applet executes on the user’s computer instead of the web server.' },
            { num: '2', title: 'Platform Independent', desc: 'Compiled into Java bytecode, runs on any OS supporting JVM.' },
            { num: '3', title: 'Secure Environment', desc: 'Runs inside a sandbox, limiting access to local files and system resources.' },
            { num: '4', title: 'Lifecycle Methods', desc: 'Controlled through methods: init(), start(), paint(), stop(), and destroy().' },
            { num: '5', title: 'Graphical User Interface', desc: 'Supports graphical components using AWT and Swing for rich interfaces.' },
            { num: '6', title: 'Event Handling', desc: 'Responds to user actions such as mouse clicks, keyboard input, and button events.' },
            { num: '7', title: 'Multimedia Capabilities', desc: 'Can display images, play audio files, and show animations.' },
            { num: '8', title: 'Dynamic Interaction', desc: 'Content updates dynamically without requiring full webpage reloads.' },
          ].map((feat, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-emerald-700 mb-1">{feat.num}. {feat.title}</div>
              <div className="text-xs text-slate-600 leading-relaxed">{feat.desc}</div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
          <strong>Conclusion:</strong> Although applets introduced interactive features to web browsers, they are now obsolete because of browser security restrictions and modern web standards like HTML5, CSS3, and JavaScript.
        </div>
      </Section>

      {/* Question 3 */}
      <Section title="3. Important Features of Java Servlets" badge="Server-side Architecture">
        <p>
          A <strong>Servlet</strong> is a Java program that runs on the server to process client requests and generate dynamic web content. Servlets are commonly deployed using servlet containers like Apache Tomcat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          {[
            { title: '1. Server-Side Processing', desc: 'Processes requests on the server and returns generated dynamic HTTP responses.' },
            { title: '2. Platform Independence', desc: 'Written in standard Java bytecode, portable across any servlet container.' },
            { title: '3. High Performance', desc: 'Handles concurrent client requests efficiently using lightweight multithreading.' },
            { title: '4. Managed Lifecycle', desc: 'Lifecycle managed by container via init(), service(), and destroy() methods.' },
            { title: '5. Session Tracking', desc: 'Supports state retention via Cookies, URL Rewriting, and HttpSession API.' },
            { title: '6. Database Integration', desc: 'Directly integrates with JDBC to execute queries and update relational records.' },
            { title: '7. Robust Security', desc: 'Execution remains protected behind the firewall in the server environment.' },
            { title: '8. High Scalability', desc: 'Designed to handle thousands of simultaneous enterprise client connections.' },
            { title: '9. Easy Integration', desc: 'Integrates natively with JSP, Spring Framework, Spring Boot, and Hibernate.' },
          ].map((item, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
              <div className="text-xs text-slate-600 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
          <strong>Conclusion:</strong> Servlets are the foundational backbone of Java web technologies, delivering request dispatching, session state tracking, database connectivity, and enterprise scalability.
        </div>
      </Section>

      {/* Question 4 */}
      <Section title="4. Difference Between Applets and Servlets" badge="Client vs Server">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 border-r border-slate-200 w-1/2">Applet</th>
                <th className="px-4 py-3 w-1/2">Servlet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Executes on the client machine.</td>
                <td className="px-4 py-3">Executes on the web server.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Runs inside a web browser or Applet Viewer.</td>
                <td className="px-4 py-3">Runs inside a servlet container such as Apache Tomcat.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Mainly used for graphical user interaction.</td>
                <td className="px-4 py-3">Mainly used for request processing and business logic.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Requires a browser with JVM plugin support.</td>
                <td className="px-4 py-3">Requires a web server or application server.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Has restricted access to local system resources (sandbox).</td>
                <td className="px-4 py-3">Has access to server resources, filesystem, and databases.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Suitable for interactive desktop-style web GUIs.</td>
                <td className="px-4 py-3">Suitable for dynamic websites and enterprise web systems.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Rarely used today because modern browsers deprecated NPAPI plugins.</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Still widely used as the core foundation of Java web technologies.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
          <strong>Conclusion:</strong> Applets are client-side programs designed for graphical interaction, while Servlets are server-side components responsible for handling client requests, processing business logic, and returning responses.
        </div>
      </Section>

      {/* Question 5 */}
      <Section title="5. Role of JDBC and ODBC in Database Connectivity" badge="Database APIs">
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">JDBC (Java Database Connectivity)</h3>
            <p className="text-sm text-slate-600 mb-3">
              JDBC is a standard Java API that allows Java applications to connect with relational databases.
            </p>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Functions of JDBC:</div>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1 mb-3">
              <li>Establishes a connection between Java programs and relational databases.</li>
              <li>Executes SQL statements such as SELECT, INSERT, UPDATE, and DELETE.</li>
              <li>Retrieves data from database tables into ResultSet objects.</li>
              <li>Supports transaction processing (commit, rollback) and exception handling.</li>
              <li>Works with databases like MySQL, Oracle, PostgreSQL, MS Access, and SQL Server.</li>
            </ul>
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Advantages:</div>
            <div className="text-xs text-slate-600">Platform independent, optimized specifically for Java, high-performance direct communication, robust security.</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">ODBC (Open Database Connectivity)</h3>
            <p className="text-sm text-slate-600 mb-3">
              ODBC is a standard interface developed by Microsoft that enables applications in different programming languages (C, C++, VB) to access databases using ODBC drivers.
            </p>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Functions of ODBC:</div>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1 mb-3">
              <li>Provides a common API interface for diverse DBMS products.</li>
              <li>Uses native ODBC driver managers to communicate with database drivers.</li>
              <li>Allows applications to switch backends with minimal application code modifications.</li>
            </ul>
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Advantages:</div>
            <div className="text-xs text-slate-600">Language independent, broad legacy DBMS compatibility, widely utilized in Windows desktop software.</div>
          </div>
        </div>

        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
          <strong>Conclusion:</strong> JDBC is the native and optimal standard for Java database development, whereas ODBC serves as a language-independent standard across multi-language environments.
        </div>
      </Section>

      {/* Question 6 */}
      <Section title="6. Difference Between JDBC and ODBC" badge="Connectivity Matrix">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 border-r border-slate-200 w-1/2">JDBC</th>
                <th className="px-4 py-3 w-1/2">ODBC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200 font-semibold">Java Database Connectivity</td>
                <td className="px-4 py-3 font-semibold">Open Database Connectivity</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Designed specifically for Java applications.</td>
                <td className="px-4 py-3">Designed for applications written in C, C++, and various languages.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Uses JDBC drivers (Type 1 to Type 4).</td>
                <td className="px-4 py-3">Uses native C-based ODBC drivers.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Included as part of the core Java API (java.sql).</td>
                <td className="px-4 py-3">Requires separate ODBC driver installation on the host OS.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Platform independent through Java Virtual Machine.</td>
                <td className="px-4 py-3">Platform dependent (tightly coupled with operating system).</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200 font-semibold text-emerald-800">Faster for Java applications (direct bytecode execution).</td>
                <td className="px-4 py-3">Slightly slower for Java due to translation layers (like JDBC-ODBC bridge).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Easily integrated into Spring, Hibernate, JPA.</td>
                <td className="px-4 py-3">Requires additional wrapping for modern Java enterprise frameworks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Question 7 */}
      <Section title="7. Difference Between Cookies and Sessions in Web Applications" badge="State Management">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 border-r border-slate-200 w-1/2">Cookies</th>
                <th className="px-4 py-3 w-1/2">Sessions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Information is stored in the user’s web browser.</td>
                <td className="px-4 py-3">Information is stored securely on the web server.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Data is transmitted with every HTTP request header.</td>
                <td className="px-4 py-3">Only the Session ID (JSESSIONID) is exchanged with the client.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Less secure since users can view/modify cookie values.</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Highly secure as sensitive user data remains on the server.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Storage capacity is limited (approx 4 KB per cookie).</td>
                <td className="px-4 py-3">Can store arbitrarily large structured objects (limited by server RAM).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Can persist across browser restarts if expiry time is set.</td>
                <td className="px-4 py-3">Typically expires on browser closure, logout, or session timeout.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Ideal for: User preferences, UI themes, remember-me tokens.</td>
                <td className="px-4 py-3">Ideal for: User authentication, shopping cart items, sensitive profile data.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Question 8 */}
      <Section title="8. Difference Between Spring Framework and Spring Boot" badge="Framework Comparison">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 border-r border-slate-200 w-1/2">Spring Framework</th>
                <th className="px-4 py-3 w-1/2">Spring Boot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Requires extensive manual configuration.</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Provides automatic configuration (Auto-Configuration).</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Frequently uses XML or detailed Java configuration classes.</td>
                <td className="px-4 py-3">Relies on opinionated annotations and convention-over-configuration.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Deployment requires an external web server (Tomcat WAR deployment).</td>
                <td className="px-4 py-3">Includes embedded web servers (Tomcat, Jetty, Undertow) within executable JARs.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">More setup time required before writing business code.</td>
                <td className="px-4 py-3">Rapid application bootstrapping via Spring Initializr.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Suitable for legacy enterprise projects requiring fine-grained config.</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Standard for modern Cloud-Native applications and Microservices.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Question 9 */}
      <Section title="9. Difference Between Standalone Applications and Web Applications" badge="Application Types">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 border-r border-slate-200 w-1/2">Standalone Application</th>
                <th className="px-4 py-3 w-1/2">Web Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Installed and executed locally on a single computer.</td>
                <td className="px-4 py-3">Accessed remotely via a web browser over a network.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Operates without an internet connection.</td>
                <td className="px-4 py-3">Requires internet or intranet connectivity.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Stores data locally or in an embedded database.</td>
                <td className="px-4 py-3">Stores data on centralized cloud or enterprise database servers.</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 border-r border-slate-200">Runs independently without web/application server.</td>
                <td className="px-4 py-3">Requires web servers (Apache, Nginx) and servlet containers (Tomcat).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200 font-medium">Example: Calculator, Notepad, VLC Media Player.</td>
                <td className="px-4 py-3 font-medium text-emerald-800">Example: Gmail, Amazon, Internet Banking Portals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Question 10 */}
      <Section title="10. Basic Requirements for Running a Web Application" badge="Infrastructure">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">1. Client Requirements</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li>Modern web browser (Google Chrome, Firefox, Edge, Safari).</li>
              <li>Operating system (Windows, Linux, macOS, Android).</li>
              <li>Network connectivity (HTTP/HTTPS access).</li>
              <li>Adequate device hardware (CPU, RAM).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">2. Server Requirements</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li>Web Server (Apache HTTP Server, Nginx).</li>
              <li>Servlet Container / Application Server (Apache Tomcat).</li>
              <li>DBMS (MySQL, Oracle, PostgreSQL, SQL Server).</li>
              <li>Server-side runtime (Java JDK, Python, Node.js, PHP).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">3. Network Requirements</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li>HTTP / HTTPS protocols for encrypted communication.</li>
              <li>Reliable broadband or local area network.</li>
              <li>DNS service for domain name resolution.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">4. Development Tools</h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li>Java Development Kit (JDK 17/21).</li>
              <li>IDE (Apache NetBeans, Eclipse, IntelliJ IDEA).</li>
              <li>Build automation tools (Maven, Gradle).</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Comprehensive Language Comparison */}
      <Section title="Comparison of Java, C, C++, Python, and JavaScript" badge="Full Benchmark Matrix">
        <p className="text-slate-700 text-sm mb-4">
          Programming languages differ in terms of execution models, memory management, performance, and application domains. The following table provides the comprehensive academic comparison from the record:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 text-xs">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="px-3 py-2.5 border-r border-slate-200">Feature</th>
                <th className="px-3 py-2.5 border-r border-slate-200 text-emerald-800">Java</th>
                <th className="px-3 py-2.5 border-r border-slate-200">C</th>
                <th className="px-3 py-2.5 border-r border-slate-200">C++</th>
                <th className="px-3 py-2.5 border-r border-slate-200">Python</th>
                <th className="px-3 py-2.5">JavaScript</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Programming Style</td>
                <td className="px-3 py-2 border-r border-slate-200 font-medium">Object-Oriented</td>
                <td className="px-3 py-2 border-r border-slate-200">Procedural</td>
                <td className="px-3 py-2 border-r border-slate-200">Multi-Paradigm</td>
                <td className="px-3 py-2 border-r border-slate-200">OOP / Scripting</td>
                <td className="px-3 py-2">Scripting / Multi-Paradigm</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Developed By</td>
                <td className="px-3 py-2 border-r border-slate-200">Sun / Oracle</td>
                <td className="px-3 py-2 border-r border-slate-200">Dennis Ritchie</td>
                <td className="px-3 py-2 border-r border-slate-200">Bjarne Stroustrup</td>
                <td className="px-3 py-2 border-r border-slate-200">PSF (Guido van Rossum)</td>
                <td className="px-3 py-2">Brendan Eich (Netscape/ECMA)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Execution Method</td>
                <td className="px-3 py-2 border-r border-slate-200">Bytecode (JVM)</td>
                <td className="px-3 py-2 border-r border-slate-200">Compiled Machine Code</td>
                <td className="px-3 py-2 border-r border-slate-200">Compiled Machine Code</td>
                <td className="px-3 py-2 border-r border-slate-200">Interpreted Bytecode</td>
                <td className="px-3 py-2">JIT in Modern Engines</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Platform Independence</td>
                <td className="px-3 py-2 border-r border-slate-200 font-bold text-emerald-700">Yes (WORA)</td>
                <td className="px-3 py-2 border-r border-slate-200 text-rose-600">No</td>
                <td className="px-3 py-2 border-r border-slate-200 text-rose-600">No</td>
                <td className="px-3 py-2 border-r border-slate-200 text-emerald-700">Yes</td>
                <td className="px-3 py-2 text-emerald-700">Yes</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Memory Management</td>
                <td className="px-3 py-2 border-r border-slate-200">Auto Garbage Collection</td>
                <td className="px-3 py-2 border-r border-slate-200">Manual (malloc/free)</td>
                <td className="px-3 py-2 border-r border-slate-200">Manual (new/delete)</td>
                <td className="px-3 py-2 border-r border-slate-200">Automatic GC</td>
                <td className="px-3 py-2">Automatic GC</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Performance</td>
                <td className="px-3 py-2 border-r border-slate-200 font-medium">High (JIT)</td>
                <td className="px-3 py-2 border-r border-slate-200 font-bold text-slate-900">Very High</td>
                <td className="px-3 py-2 border-r border-slate-200 font-bold text-slate-900">Very High</td>
                <td className="px-3 py-2 border-r border-slate-200">Moderate</td>
                <td className="px-3 py-2">High (V8 Engine)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Security</td>
                <td className="px-3 py-2 border-r border-slate-200 font-bold text-emerald-700">High (Sandbox, Type-Safe)</td>
                <td className="px-3 py-2 border-r border-slate-200 text-rose-600">Low (Pointers)</td>
                <td className="px-3 py-2 border-r border-slate-200">Medium</td>
                <td className="px-3 py-2 border-r border-slate-200">High</td>
                <td className="px-3 py-2">Medium (Browser Sandbox)</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">DB Connectivity</td>
                <td className="px-3 py-2 border-r border-slate-200 font-mono text-emerald-800">JDBC</td>
                <td className="px-3 py-2 border-r border-slate-200">External C APIs</td>
                <td className="px-3 py-2 border-r border-slate-200">Database Drivers</td>
                <td className="px-3 py-2 border-r border-slate-200">DB-API / SQLAlchemy</td>
                <td className="px-3 py-2">Node.js Drivers / REST</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-slate-200 bg-slate-50">Main Application Areas</td>
                <td className="px-3 py-2 border-r border-slate-200">Enterprise Systems, Android</td>
                <td className="px-3 py-2 border-r border-slate-200">OS, Embedded Systems</td>
                <td className="px-3 py-2 border-r border-slate-200">Games, Systems Software</td>
                <td className="px-3 py-2 border-r border-slate-200">AI/ML, Data Science</td>
                <td className="px-3 py-2">Web Frontend & Backend</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Suitability Guide */}
        <div className="mt-6">
          <h4 className="text-sm font-bold text-slate-900 mb-3">Suitability of Programming Languages by Domain</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
            {[
              { domain: 'Operating Systems', lang: 'C, C++' },
              { domain: 'Embedded Systems', lang: 'C' },
              { domain: 'Enterprise Software', lang: 'Java' },
              { domain: 'Android Apps', lang: 'Java' },
              { domain: 'AI & Machine Learning', lang: 'Python' },
              { domain: 'Data Science', lang: 'Python' },
              { domain: 'Game Development', lang: 'C++' },
              { domain: 'Web Frontend', lang: 'JavaScript' },
              { domain: 'Web Backend', lang: 'Java, Node.js, Python' },
              { domain: 'Automation / Scripting', lang: 'Python' },
              { domain: 'Desktop Software', lang: 'Java, C++, Python' },
            ].map((s, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="text-slate-500 font-medium">{s.domain}</div>
                <div className="font-bold text-slate-900 mt-0.5">{s.lang}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ResultBox>
        The comprehensive study of Core Java, Advanced Java, Applets, Servlets, JDBC, ODBC, and Web architectures was completed successfully. The multi-language comparison confirms Java&apos;s strength in enterprise scalability, platform portability, and secure database connectivity.
      </ResultBox>
    </WeekLayout>
  );
}
