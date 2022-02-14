export function Footer() {
    return <footer className="text-white bg-french-violet-600 dark:bg-french-violet-800 py-8">
        <div className="w-full max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row">
            <div className="mb-8 sm:mb-0 sm:mr-8 max-w-lg">
                Interested in sponsoring us? Have a question? Contact us at <a href="mailto:contact@hackbca.com" className="text-medium-turquoise-400 hover:opacity-70 underline transition-opacity">contact@hackbca.com</a>.
            </div>
            <div>
                <div className="font-semibold">&copy; 2022 The hackBCA Team</div>
                <div className="mb-2"><a href="https://www.instagram.com/hackbca/" rel="noreferrer" target="_blank" className="text-medium-turquoise-400 hover:opacity-70 underline transition-opacity">Instagram</a> • <a href="https://github.com/hackBCA" className="text-medium-turquoise-400 hover:opacity-70 underline transition-opacity">GitHub</a></div>
                <div className="mb-2"><a href="https://v.hackbca.com" className="text-medium-turquoise-400 hover:opacity-70 underline transition-opacity">hackBCA V (2020)</a></div>
                <div>Logo by Galadriel Cho.</div>
                <div>Logo animation by <a href="https://github.com/Blckbrry-Pi" target="_blank" rel="noreferrer" className="text-medium-turquoise-400 hover:opacity-70 underline transition-opacity">Skyler Calaman</a>.</div>
            </div>
        </div>
    </footer>;
}