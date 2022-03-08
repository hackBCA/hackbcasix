import { Section } from "components/Section";

export function Intro() {
    return <Section title="A 2-day hackathon">
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
    </Section>;
}