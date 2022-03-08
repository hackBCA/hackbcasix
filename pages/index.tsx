import Head from "next/head";
import { HeroHeader } from "components/HeroHeader";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { Footer } from "components/Footer";

function Divider() {
    return <hr className="w-full max-w-screen-lg mx-auto border-french-violet-100 dark:border-french-violet-800" />;
}

export default function Home() {
    return <>
        <Head>
            <meta name="theme-color" content="#7A28CB" />
        </Head>
        <Navbar />
        <HeroHeader />
        <Section title="A 2-day hackathon">
            <div className="flex text-center sm:text-left flex-col sm:flex-row items-center py-4 sm:mt-8">
                <img src="https://v.hackbca.com/images/whatis0.jpg" className="w-full max-w-md rounded-xl mb-4 sm:mb-0 sm:mr-8" />
                <p className="text-2xl">Hack together a project with friends. Use any language or tool you want. Go wild.</p>
            </div>
            <div className="flex text-center sm:text-right flex-col sm:flex-row-reverse items-center py-4">
                <img src="https://v.hackbca.com/images/whatis1.jpg" className="w-full max-w-md rounded-xl mb-4 sm:mb-0 sm:ml-8" />
                <p className="text-2xl">Stack cups. Do PowerPoint karaoke. Attend fun workshops. Eat (close to) midnight pizza.</p>
            </div>
            <div className="flex text-center sm:text-left flex-col sm:flex-row items-center py-4">
                <img src="https://v.hackbca.com/images/whatis2.jpg" className="w-full max-w-md rounded-xl mb-4 sm:mb-0 sm:mr-8" />
                <p className="text-2xl">Win prizes. And get free swag.</p>
            </div>
        </Section>
        <Divider />
        <Section id="schedule" title="Schedule">
            <div className="grid sm:mt-4 sm:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                    <h3 className="sm:hidden text-center text-xl font-semibold mb-2">Friday, April 1</h3>
                    <table>
                        <thead className="hidden sm:table-header-group">
                            <tr>
                                <td />
                                <th className="text-left text-xl font-semibold pb-2">Friday, April 1</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-right pr-2">16:10</td>
                                <td>Check-in</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">16:30</td>
                                <td>Opening ceremony</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">17:00</td>
                                <td>Hacking begins</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">18:00</td>
                                <td>Dinner</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">21:15</td>
                                <td><span className="opacity-50">Close-to-</span>Midnight Pizza</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">22:00</td>
                                <td>Departure</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="sm:hidden text-center text-xl font-semibold mb-2">Saturday, April 2</h3>
                    <table>
                        <thead className="hidden sm:table-header-group">
                            <tr>
                                <td />
                                <th className="text-left text-xl font-semibold pb-2">Saturday, April 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-right pr-2">09:00</td>
                                <td>Opening</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">09:15</td>
                                <td>Hacking continues</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">12:00</td>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">15:30</td>
                                <td>Judging</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">17:00</td>
                                <td>Closing</td>
                            </tr>
                            <tr>
                                <td className="text-right pr-2">17:30</td>
                                <td>Departure</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-8 text-xl italic text-center w-full">Workshops and activities coming soon!</div>
        </Section>
        <Divider />
        <Section id="register" title="Register">
            <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-2">BCA Students</h3>
                <p className="mb-2">
                    <a href="https://register.capturepoint.com/reg/cat_program_list_detail.cfm?season_id=23385&program_id=1635096&program_group_id=9157" className="text-french-violet-600 dark:text-medium-turquoise-400 hover:opacity-70 transition-opacity underline">Register on the BCTS registration portal!</a> Be sure to associate your account with the student's name (check your email for more instructions.)
                </p>
                <p className="mb-2">Early bird registration costs <strong>$35</strong> during February. After that, regular registration will cost $40.</p>
                <p className="mb-2">
                    You'll also need to bring a completed copy of the <a href="https://drive.google.com/file/d/1HYPViRgH-3aj7yfKaY9g3RVCXAdyjSAH/view?usp=sharing" target="_blank" rel="noreferrer" className="text-french-violet-600 dark:text-medium-turquoise-400 hover:opacity-70 transition-opacity underline">Permission Slip and Waiver</a> and <a href="https://drive.google.com/file/d/1HZzcTzqAFUx7GMeGcOrs8I3FqxQ6keHD/view" target="_blank" rel="noreferrer" className="text-french-violet-600 dark:text-medium-turquoise-400 hover:opacity-70 transition-opacity underline">Emergency Contact Form</a> to Room 138.
                </p>
                <p className="mb-2">
                    Registration closes when we fill or on March 15 (whichever is earlier), so act quick!
                </p>
                <p className="mb-8">
                    <strong>Do you have little or no coding experience?</strong> No worries! Don't register yet - instead, if you are interested in attending hackBCA as a rookie, please complete <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4m8enfeVOz6OYym_ejDk6EAluOuew0aieepeTVfCGo5dC9g/viewform" className="text-french-violet-600 dark:text-medium-turquoise-400 hover:opacity-70 transition-opacity underline">this form</a>. If there is enough interest, we will create a "beginners track."
                </p>
                <h3 className="text-2xl font-semibold mb-2">Out-of-District Students</h3>
                <p>Contact <a href="mailto:bryres@bergen.org" className="text-french-violet-600 dark:text-medium-turquoise-400 hover:opacity-70 transition-opacity underline">Bryan Respass (bryres@bergen.org)</a> if you're interested in attending as an out-of-district student.</p>         
            </div>
        </Section>
        <Divider />
        <Section id="faq" title="FAQ">
            <div className="text-center text-xl italic">Coming soon!</div>
        </Section>
        <Footer />
    </>;
}
