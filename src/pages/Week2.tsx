import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';
import { CheckCircle2 } from 'lucide-react';

export default function Week2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <WeekLayout
      weekNumber={2}
      title="Installation and Configuration of OpenJDK & Oracle JDK SE 26 on Ubuntu"
      category="Linux Environment & JDK Configuration"
      pdfUrl="/records/Week2.pdf"
      onNavigate={onNavigate}
      prevWeek="week1"
      nextWeek="week3"
    >
      <Section title="Aim" badge="Objective">
        <p className="text-slate-700 leading-relaxed font-medium">
          To install OpenJDK and Oracle JDK SE 26 on the Ubuntu operating system, configure the Java environment, and verify that Java is installed and working correctly.
        </p>
      </Section>

      <Section title="Requirements" badge="Prerequisites">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Ubuntu Operating System',
            'Stable internet connection',
            'Terminal application',
            'Oracle JDK SE 26 (Linux x64 Archive)',
            'Administrator (sudo) access',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Procedure" badge="Step-by-Step Execution">
        <div className="space-y-8">
          
          {/* Part A */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center font-bold">A</span>
              <span>Part A: Install OpenJDK</span>
            </h3>
            
            <p className="text-sm text-slate-600 mb-2"><strong>Step 1:</strong> Update the Ubuntu package repository index.</p>
            <CodeBlock language="terminal" code="sudo apt update" />

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 2:</strong> Install the OpenJDK package.</p>
            <CodeBlock language="terminal" code="sudo apt install openjdk-21-jdk -y" />
            <p className="text-xs text-slate-500 italic mt-1">
              Note: If another OpenJDK version is available in your Ubuntu release, install that version.
            </p>

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 3:</strong> Confirm that Java runtime is installed.</p>
            <CodeBlock language="terminal" code="java -version" />

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 4:</strong> Verify the Java compiler.</p>
            <CodeBlock language="terminal" code="javac -version" />
          </div>

          {/* Part B */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center font-bold">B</span>
              <span>Part B: Download Oracle JDK SE 26</span>
            </h3>
            <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1.5">
              <li>Launch a web browser in Ubuntu.</li>
              <li>Visit the official Oracle Java Downloads website.</li>
              <li>Download the Oracle JDK SE 26 Linux x64 Archive (<code className="text-xs bg-slate-200/80 px-1 py-0.5 rounded text-slate-800">jdk-26_linux-x64_bin.tar.gz</code>).</li>
              <li>Save the downloaded archive in the <code className="text-xs bg-slate-200/80 px-1 py-0.5 rounded text-slate-800">~/Downloads</code> directory.</li>
            </ol>
          </div>

          {/* Part C */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center font-bold">C</span>
              <span>Part C: Install Oracle JDK SE 26</span>
            </h3>

            <p className="text-sm text-slate-600 mb-2"><strong>Step 1:</strong> Open Terminal and navigate to the Downloads folder.</p>
            <CodeBlock language="terminal" code="cd ~/Downloads" />

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 2:</strong> Create a system directory for Java installations.</p>
            <CodeBlock language="terminal" code="sudo mkdir -p /usr/lib/jvm" />

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 3:</strong> Extract the Oracle JDK archive into the target installation directory.</p>
            <CodeBlock language="terminal" code="sudo tar -xvzf jdk-26_linux-x64_bin.tar.gz -C /usr/lib/jvm" />
          </div>

          {/* Part D */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center font-bold">D</span>
              <span>Part D: Configure the Java Environment</span>
            </h3>

            <p className="text-sm text-slate-600 mb-2"><strong>Step 1:</strong> Open the system profile file in nano editor.</p>
            <CodeBlock language="terminal" code="sudo nano /etc/profile" />

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 2:</strong> Append the following environment variables at the end of the file.</p>
            <CodeBlock language="bash" title="/etc/profile environment variables" code={`export JAVA_HOME=/usr/lib/jvm/jdk-26\nexport PATH=$JAVA_HOME/bin:$PATH`} />
            <p className="text-xs text-slate-500 mt-1">Save the file (Ctrl+O, Enter) and close the editor (Ctrl+X).</p>

            <p className="text-sm text-slate-600 mb-2 mt-4"><strong>Step 3:</strong> Apply the updated profile changes to the current shell.</p>
            <CodeBlock language="terminal" code="source /etc/profile" />
          </div>

          {/* Part E */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center font-bold">E</span>
              <span>Part E: Set Oracle JDK as the Default Version</span>
            </h3>

            <p className="text-sm text-slate-600 mb-2">Configure the default Java runtime alternative:</p>
            <CodeBlock language="terminal" code="sudo update-alternatives --config java" />
            <p className="text-xs text-slate-500 mb-3">Select the Oracle JDK SE 26 entry number from the interactive prompt.</p>

            <p className="text-sm text-slate-600 mb-2">Next, configure the default Java compiler alternative:</p>
            <CodeBlock language="terminal" code="sudo update-alternatives --config javac" />
            <p className="text-xs text-slate-500">Choose the corresponding Oracle JDK compiler option.</p>
          </div>

          {/* Part F */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center font-bold">F</span>
              <span>Part F: Verify the Final Installation</span>
            </h3>

            <p className="text-sm text-slate-600 mb-2">Display the active Java runtime version:</p>
            <CodeBlock language="terminal" code="java -version" />

            <p className="text-sm text-slate-600 mb-2 mt-4">Display the active Java compiler version:</p>
            <CodeBlock language="terminal" code="javac -version" />
            
            <div className="mt-3 p-3 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200">
              ✓ If both commands show Oracle JDK SE 26, the installation and environment configuration have completed successfully.
            </div>
          </div>

        </div>
      </Section>

      <ResultBox>
        The installation and configuration of OpenJDK and Oracle JDK SE 26 on Ubuntu Linux were completed successfully. The Java Runtime Environment (JRE) and Java Compiler (javac) were verified using the <code className="font-mono text-xs bg-emerald-100 px-1 py-0.5 rounded">java -version</code> and <code className="font-mono text-xs bg-emerald-100 px-1 py-0.5 rounded">javac -version</code> commands, confirming that the system is ready for Advanced Java application development.
      </ResultBox>
    </WeekLayout>
  );
}
