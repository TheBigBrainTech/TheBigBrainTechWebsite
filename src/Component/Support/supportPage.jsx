import React from 'react';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import Footer from "../Homepage/Footer/Footer";
import Navigation from "../Homepage/Navbar/Navbar";

const sections = [
    {
        title: 'How to Install VS Code',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Download the VS Code installer for Windows from <a href="https://code.visualstudio.com/download"
                                                                           target="_blank"
                                                                           rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Once the download is complete, run the installer.</li>
                    <li>Follow the setup instructions, accept the agreement, and choose the installation location.</li>
                    <li>Select additional tasks (e.g., creating a desktop icon, adding to PATH).</li>
                    <li>Click &quot;Install&quot; and wait for the installation to complete.</li>
                    <li>Click &quot;Finish&quot; and launch VS Code.</li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Download the VS Code installer for Mac from <a href="https://code.visualstudio.com/download"
                                                                       target="_blank"
                                                                       rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Open the downloaded `.zip` file and drag the Visual Studio Code.app to the Applications
                        folder.
                    </li>
                    <li>Open the Applications folder and launch VS Code.</li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install PostgreSQL',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Download the PostgreSQL installer for Windows from <a
                        href="https://www.postgresql.org/download/windows/" target="_blank"
                        rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Run the installer and follow the setup instructions.</li>
                    <li>Select the installation directory and choose components to install.</li>
                    <li>Set a password for the database superuser (postgres).</li>
                    <li>Select the port number (default is 5432).</li>
                    <li>Complete the installation and launch pgAdmin to manage your databases.</li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Download the PostgreSQL installer for Mac from <a
                        href="https://www.postgresql.org/download/macosx/" target="_blank"
                        rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Open the downloaded `.dmg` file and follow the installation instructions.</li>
                    <li>Set a password for the database superuser (postgres).</li>
                    <li>Select the port number (default is 5432).</li>
                    <li>Complete the installation and launch pgAdmin to manage your databases.</li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install Figma',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Go to the Figma download page <a href="https://www.figma.com/downloads/" target="_blank"
                                                         rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Download the Windows app.</li>
                    <li>Open the downloaded installer and follow the setup instructions.</li>
                    <li>Once installed, launch Figma and sign in with your account.</li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Go to the Figma download page <a href="https://www.figma.com/downloads/" target="_blank"
                                                         rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Download the Mac app.</li>
                    <li>Open the downloaded `.dmg` file and drag the Figma icon to the Applications folder.</li>
                    <li>Launch Figma from the Applications folder and sign in with your account.</li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install IntelliJ Community Edition',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Download the IntelliJ IDEA Community Edition installer from <a
                        href="https://www.jetbrains.com/idea/download/" target="_blank"
                        rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Run the installer and follow the setup instructions.</li>
                    <li>Select the installation location and additional components.</li>
                    <li>Complete the installation and launch IntelliJ IDEA.</li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Download the IntelliJ IDEA Community Edition installer from <a
                        href="https://www.jetbrains.com/idea/download/" target="_blank"
                        rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Open the downloaded `.dmg` file and drag the IntelliJ IDEA icon to the Applications folder.</li>
                    <li>Launch IntelliJ IDEA from the Applications folder.</li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install NodeJS',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Download the Node.js installer for Windows from <a href="https://nodejs.org/en/download/"
                                                                           target="_blank"
                                                                           rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Run the installer and follow the setup instructions.</li>
                    <li>Select the installation directory and additional tools (e.g., npm).</li>
                    <li>Complete the installation.</li>
                    <li>Open Command Prompt and type <code>node -v</code> and <code>npm -v</code> to verify the
                        installation.
                    </li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Download the Node.js installer for Mac from <a href="https://nodejs.org/en/download/"
                                                                       target="_blank"
                                                                       rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Open the downloaded `.pkg` file and follow the setup instructions.</li>
                    <li>Complete the installation.</li>
                    <li>Open Terminal and type <code>node -v</code> and <code>npm -v</code> to verify the installation.
                    </li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install NPM',
        content: (
            <>
                <h3>Windows and Mac:</h3>
                <p>NPM is included with Node.js installation. Follow the instructions for installing Node.js to get
                    NPM.</p>
                <p>To verify the installation, open Command Prompt (Windows) or Terminal (Mac) and type <code>npm
                    -v</code>.</p>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install NVM',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Download the NVM for Windows installer from <a
                        href="https://github.com/coreybutler/nvm-windows/releases" target="_blank"
                        rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Run the installer and follow the setup instructions.</li>
                    <li>Complete the installation.</li>
                    <li>Open Command Prompt and type <code>nvm -v</code> to verify the installation.</li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Open Terminal.</li>
                    <li>Install NVM using the command:
                        <pre><code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</code></pre>
                    </li>
                    <li>Restart the terminal or run <code>source ~/.nvm/nvm.sh</code>.</li>
                    <li>Verify the installation by typing <code>nvm -v</code>.</li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Install Zoom',
        content: (
            <>
                <h3>Windows:</h3>
                <ol>
                    <li>Download the Zoom installer for Windows from <a href="https://zoom.us/download" target="_blank"
                                                                        rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Open the downloaded installer and follow the setup instructions.</li>
                    <li>Complete the installation and launch Zoom.</li>
                </ol>
                <h3>Mac:</h3>
                <ol>
                    <li>Download the Zoom installer for Mac from <a href="https://zoom.us/download" target="_blank"
                                                                    rel="noopener noreferrer">here</a>.
                    </li>
                    <li>Open the downloaded `.pkg` file and follow the setup instructions.</li>
                    <li>Complete the installation and launch Zoom.</li>
                </ol>
            </>
        ),
        icon: faDownload
    },
    {
        title: 'How to Download Zoom Recorded Meeting',
        content: (
            <>
                <h3>Windows and Mac:</h3>
                <ol>
                    <li>Open your browser and go to the Zoom website.</li>
                    <li>Sign in to your Zoom account.</li>
                    <li>Go to the &quot;Recordings&quot; section in your account.</li>
                    <li>Find the recorded meeting you want to download.</li>
                    <li>Click the &quot;More&quot; button next to the recording and select &quot;Download&quot;.</li>
                    <li>Save the file to your desired location on your computer.</li>
                </ol>
            </>
        ),
        icon: faDownload
    }
];

const SupportPage = () => {
    return (
        <>
            <section className="mb-20">
                <Navigation/>
            </section>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-lg"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={section.icon} className="text-blue-500 text-2xl mr-4"/>
                                <h2 className="text-2xl font-semibold">{section.title}</h2>
                            </div>
                            <div className="text-gray-700">{section.content}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto p-4">
                <p className="text-center text-gray-600 font-semibold text-2xl">For any further assistance contact
                    admissions or your instructor</p>
            </div>
            <section>
                <Footer/>
            </section>
        </>
    );
};

export default SupportPage;
