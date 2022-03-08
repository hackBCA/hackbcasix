import { Section } from "components/Section";

export function Schedule() {
    return <Section id="schedule" title="Schedule">
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
    </Section>;
}