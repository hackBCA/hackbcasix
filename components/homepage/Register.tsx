import { Section } from "components/Section";

export function Register() {
    return <Section id="register" title="Register">
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
    </Section>;
}