import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import ScreenshotFigure from '../components/ScreenshotFigure';

import img1 from '../assets/week9/image1.jpeg';
import img2 from '../assets/week9/image2.jpeg';
import img3 from '../assets/week9/image3.jpeg';
import img4 from '../assets/week9/image4.jpeg';
import img5 from '../assets/week9/image5.jpeg';
import img6 from '../assets/week9/image6.jpeg';
import img7 from '../assets/week9/image7.jpeg';
import img8 from '../assets/week9/image8.jpeg';
import img9 from '../assets/week9/image9.jpeg';
import img10 from '../assets/week9/image10.jpeg';
import img11 from '../assets/week9/image11.jpeg';
import img12 from '../assets/week9/image12.jpeg';
import img13 from '../assets/week9/image13.jpeg';

export default function Week9({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={9}
      title="Building an Application using Maven in Spring Tool Suite (STS)"
      category="Build Automation & Spring Boot Web Application"
      pdfUrl="/records/Week9.docx"
      onNavigate={onNavigate}
      prevWeek="week8"
      nextWeek="week10"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To create a Maven project in Spring Tool Suite (STS), configure it using pom.xml, develop a simple Spring Boot web application, build the project and run it in a web browser.
        </p>
      </Section>

      <Section title="Software Requirements" badge="Environment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Java Development Kit (JDK)',
            'Spring Tool Suite (STS)',
            'Apache Maven Build Tool',
            'Internet connection for Maven dependencies',
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
          <strong>Apache Maven</strong> is a build automation and dependency management tool for Java projects. It uses the Project Object Model (POM), stored in <code className="font-mono text-emerald-800">pom.xml</code>, to define project details, third-party libraries, packaging options and compilation plugins.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>Spring Tool Suite (STS)</strong> is an Eclipse-powered IDE customized for developing Spring applications. In this laboratory module, a Maven-based Spring Boot web project is bootstrapped with a REST controller returning responses to browser clients.
        </p>
      </Section>

      <Section title="Procedure & Implementation Captures" badge="Step-by-Step Workflow">
        <div className="space-y-8">
          
          {/* Step 1 & 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 1 & 2: Project Creation in STS</h3>
            <p className="text-sm text-slate-600 mb-3">
              Launch Spring Tool Suite (STS), select your workspace, and navigate to <code className="bg-slate-200 px-1 py-0.5 rounded text-xs font-mono">File → New → Maven Project</code>. Choose project location and continue to archetype configuration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img1} 
                alt="New Maven Project configuration window" 
                caption="Screenshot 1: New Maven Project configuration window"
                figNum="Capture 9.1"
              />
              <ScreenshotFigure 
                src={img2} 
                alt="Spring Boot main application class" 
                caption="Screenshot 2: Spring Boot main application class"
                figNum="Capture 9.2"
              />
            </div>
          </div>

          {/* Step 3 & 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 3 & 4: Maven Coordinates & Project Verification</h3>
            <p className="text-sm text-slate-600 mb-1">
              Enter Group Id: <strong className="font-mono text-slate-800">com.example</strong>, Artifact Id: <strong className="font-mono text-slate-800">springmavendemo</strong>, Version: <strong className="font-mono text-slate-800">1.0.0</strong>, Packaging: <strong className="font-mono text-slate-800">JAR</strong>.
            </p>
            <p className="text-sm text-slate-600 mb-3">
              Verify that <code className="font-mono text-xs">springmavendemo</code> appears in STS Project Explorer with standard source directories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenshotFigure 
                src={img3} 
                alt="Maven project displayed in Project Explorer" 
                caption="Screenshot 3: Maven project displayed in Project Explorer"
                figNum="Capture 9.3"
              />
              <ScreenshotFigure 
                src={img4} 
                alt="pom.xml configuration" 
                caption="Screenshot 4: pom.xml configuration in STS"
                figNum="Capture 9.4"
              />
            </div>
          </div>

          {/* Step 5, 6, 7 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 5, 6 & 7: Application Code & Controller Implementation</h3>
            <p className="text-sm text-slate-600 mb-3">
              Configure <code className="font-mono text-xs">pom.xml</code> with Spring Boot parent and Web starter. Create main class with <code className="font-mono text-xs">@SpringBootApplication</code>, and create <code className="font-mono text-xs">HelloController.java</code> returning greeting text.
            </p>
            <CodeBlock language="java" title="HelloController.java" code={`package com.example.springmavendemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello, Maven + Spring Boot!";
    }
}`} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <ScreenshotFigure 
                src={img5} 
                alt="HelloController file in the STS editor" 
                caption="Screenshot 5: HelloController in STS editor"
                figNum="Capture 9.5"
              />
              <ScreenshotFigure 
                src={img6} 
                alt="Project structure with source packages" 
                caption="Screenshot 6: Project package hierarchy"
                figNum="Capture 9.6"
              />
              <ScreenshotFigure 
                src={img7} 
                alt="Controller code in the editor" 
                caption="Screenshot 7: Controller code in editor"
                figNum="Capture 9.7"
              />
            </div>
          </div>

          {/* Step 8, 9, 10 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 8, 9 & 10: Maven Build & JAR Verification</h3>
            <p className="text-sm text-slate-600 mb-2">
              Run <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-xs">clean install</code> in Goals. Verify the generated <code className="font-mono text-xs">springmavendemo-1.0.0.jar</code> inside the <code className="font-mono text-xs">target/</code> directory via IDE and Command Prompt (<code className="font-mono text-xs">dir target</code>).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ScreenshotFigure 
                src={img8} 
                alt="Maven build output in STS" 
                caption="Screenshot 8: Maven build output in STS"
                figNum="Capture 9.8"
              />
              <ScreenshotFigure 
                src={img9} 
                alt="Generated JAR file in target folder" 
                caption="Screenshot 9: Generated JAR file in target"
                figNum="Capture 9.9"
              />
              <ScreenshotFigure 
                src={img10} 
                alt="Target directory contents in Command Prompt" 
                caption="Screenshot 10: Target contents in CMD"
                figNum="Capture 9.10"
              />
            </div>
          </div>

          {/* Step 11, 12, 13 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Step 11, 12 & 13: Execution, Browser Verification & Port Diagnostic</h3>
            <p className="text-sm text-slate-600 mb-3">
              Launch Spring Boot app in STS, verify embedded Tomcat startup on port 8080, and test in Google Chrome. Diagnostic screenshot records port conflict handling when 8080 is already bound.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ScreenshotFigure 
                src={img11} 
                alt="Spring Boot application running in STS console" 
                caption="Screenshot 11: Spring Boot console startup"
                figNum="Capture 9.11"
              />
              <ScreenshotFigure 
                src={img12} 
                alt="Application response in Google Chrome" 
                caption="Screenshot 12: Google Chrome response (Hello, Maven + Spring Boot!)"
                figNum="Capture 9.12"
              />
              <ScreenshotFigure 
                src={img13} 
                alt="JAR launch attempt showing port 8080 already in use" 
                caption="Screenshot 13: Terminal port conflict diagnosis"
                figNum="Capture 9.13"
              />
            </div>
          </div>

        </div>
      </Section>

      <Section title="Observation & Analysis" badge="Findings">
        <p className="text-sm text-slate-700 leading-relaxed">
          The Maven project and its Spring Boot configuration files were created successfully in STS. The Maven build pipeline compiled sources and packaged the executable JAR in the <code className="font-mono text-xs">target</code> directory. The browser output displays <strong className="text-emerald-800">“Hello, Maven + Spring Boot!”</strong> at <code className="font-mono text-xs">http://localhost:8080/</code>. The terminal screenshot demonstrates port conflict diagnostic when port 8080 is held by an active background process.
        </p>
      </Section>

      <ResultBox>
        A Maven-based Spring Boot web application was created, configured and built successfully in Spring Tool Suite (STS). The standalone executable JAR was generated, and browser execution was verified through the embedded Tomcat server.
      </ResultBox>
    </WeekLayout>
  );
}
