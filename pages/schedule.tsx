import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { DateTime } from "luxon";
import { NextSeo } from "next-seo";
import { ScheduleEntry } from "lib/typings";

// @ts-expect-error
import scheduleImported from "../schedule.yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronCircleRight, faMapLocation, faMapMarked, faMapMarker, faMapMarkerAlt, faPerson, faTimesCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const schedule = scheduleImported as ScheduleEntry[];

const zone = "America/New_York";

function BeginnerBadge() {
    return <div className="mb-3 px-2 py-1 text-black bg-medium-turquoise-400 w-fit rounded">Recommended for Beginners</div>
}

function ScheduleEntryDisplay({entry, onSelect}: {entry: ScheduleEntry, onSelect: () => void}) {
    const isRow = entry.type !== "workshop" && entry.type !== "activity";

    const moreButton = <a href="#" onClick={event => {
        event.preventDefault();
        onSelect();
    }} role="button" className="text-brilliant-rose-500 dark:text-medium-turquoise-400 hover:underline">
        More <FontAwesomeIcon icon={faChevronCircleRight} />
    </a>

    return <div className={`bg-white dark:bg-french-violet-800 rounded-lg shadow-lg p-4 ${isRow ? "md:col-span-2" : ""}`}>
        {isRow ? <div className="flex justify-center">
            <h4 className="font-bold">{entry.name}</h4>
            <span className="grow ml-4" />
            {entry.location && <span className="mr-4">{entry.location}</span>}
            {moreButton}
        </div> : <div className="flex flex-col h-full">
            <div className="flex">
                <div className="font-semibold opacity-80 grow">{entry.type.toUpperCase()}</div>
                {entry.end && <div className="text-right">
                    {DateTime.fromJSDate(entry.start, {zone}).toFormat("HH:mm")}-{DateTime.fromJSDate(entry.end, {zone}).toFormat("HH:mm")}
                </div>}
            </div>
            <h4 className="font-bold text-xl mb-2">{entry.name}</h4>
            {entry.beginner && !entry.description && <BeginnerBadge />}
            {entry.description && <div className="h-40 overflow-hidden relative mb-2">
                {entry.beginner && <BeginnerBadge />}
                <ReactMarkdown className="description">{entry.description}</ReactMarkdown>
                <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-white/0 to-white/100 dark:via-french-violet-800/0 dark:to-french-violet-800"></div>
            </div>}
            <div className="grow" />
            <div className="flex justify-center">
                <div className="grow mr-3">
                    {entry.location && <div><FontAwesomeIcon icon={faMapMarkerAlt} /> {entry.location}</div>}
                    {entry.presenter && <div className="opacity-70"><FontAwesomeIcon icon={faUser} /> {entry.presenter}</div>}
                </div>
                {moreButton}
            </div>
        </div>}
    </div>;
}

function ScheduleDay({entries, setSelected}: {entries: ScheduleEntry[][], setSelected: (entry: ScheduleEntry) => void}) {
    // The entries are grouped by start time.
    // For each start time, output the time and a list of entries.
    return <div className="mt-2">
        {entries.map(entriesForTime => {
            // Sort this group so that workshops and activities appear last.

            const sortedEntries = entriesForTime.sort(
                (a, b) => {
                    const aAppearsLast = a.type === "workshop" || a.type === "activity";
                    const bAppearsLast = b.type === "workshop" || b.type === "activity";
                    if (aAppearsLast && !bAppearsLast) {
                        return 1;
                    } else if (!aAppearsLast && bAppearsLast) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            );
            
            return <div className="mb-8 sm:flex" key={entriesForTime[0].start.getTime()}>
                <h3 className="sm:mr-6 sm:w-8 basis-8 sm:mt-4 sm:text-right sm:text-base sm:mb-0 text-xl mb-2">
                    {DateTime.fromJSDate(entriesForTime[0].start, {zone}).toFormat("HH:mm")}
                </h3>
                <div className="grow grid grid-cols-1 md:grid-cols-2 gap-3">
                    {entriesForTime.map(entry => {
                        return <ScheduleEntryDisplay key={entry.name} entry={entry} onSelect={() => setSelected(entry)} />;
                    })}
                </div>
            </div>;
        })}
    </div>;
}

export default function Schedule() {
    // Group schedule entries by start time.
    const scheduleByStart = schedule.reduce(
        (acc, entry) => {
            const start = entry.start.getTime();
            const value = acc[start] || [];
            value.push(entry);
            acc[start] = value;
            return acc;
        },
        {} as { [key: number]: ScheduleEntry[] }
    );

    // Sort the groups by key.
    const scheduleByStartSorted = Object.entries(scheduleByStart).sort(
        ([key1, _], [key2, __]) => parseInt(key1) - parseInt(key2)
    ).map(([_, value]) => value);

    const startOfDay2 = DateTime.local(2022, 4, 2, {zone}).toJSDate();

    // Separate the groups by day.
    const day1 = scheduleByStartSorted.filter(
        (entry) => entry[0].start < startOfDay2
    );
    const day2 = scheduleByStartSorted.filter(
        (entry) => entry[0].start >= startOfDay2
    );

    const [entry, setSelectedEntry] = useState<ScheduleEntry | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const setSelected = (entry: ScheduleEntry) => {
        setSelectedEntry(entry);
        setModalOpen(true);
    };

    return <>
        <NextSeo title="Schedule" />
        <Navbar hidesAtTop={false} />
        <div className="bg-french-violet-100 dark:bg-french-violet-1000">
            <h1 className="text-5xl font-semibold italic text-center pt-24 mb-6">Schedule</h1>
            <Section title="Friday, April 1">
                <ScheduleDay entries={day1} setSelected={setSelected} />
            </Section>
            <Section title="Saturday, April 2">
                <ScheduleDay entries={day2} setSelected={setSelected} />
            </Section>
        </div>
        <Transition show={isModalOpen} as={Fragment}>
            <Dialog onClose={() => setModalOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-100 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0" as={Fragment}>
                        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition duration-200 ease-out"
                        enterFrom="opacity-0 transform scale-95"
                        enterTo="opacity-100 transform scale-100"
                        leave="transition duration-100 ease-in"
                        leaveFrom="opacity-100 transform scale-100"
                        leaveTo="opacity-0 transform scale-95"
                    >
                        <div className="relative bg-white dark:bg-french-violet-800 rounded-lg shadow-lg p-6 max-w-lg w-full">
                            {entry && <>
                                <a href="#" onClick={event => {
                                    event.preventDefault();
                                    setModalOpen(false);
                                }} role="button" className="block mb-4 text-brilliant-rose-500 dark:text-medium-turquoise-400 hover:underline">
                                    <FontAwesomeIcon icon={faTimesCircle} /> Close
                                </a>
                                <div className="flex">
                                    <div className="font-semibold opacity-80 grow">{entry.type.toUpperCase()}</div>
                                    <div className="text-right">
                                        {DateTime.fromJSDate(entry.start, { zone }).toFormat("HH:mm")}{entry.end && <>-{DateTime.fromJSDate(entry.end, { zone }).toFormat("HH:mm")}</>}
                                    </div>
                                </div>
                                <Dialog.Title as="h4" className="font-bold text-xl mb-2">{entry.name}</Dialog.Title>
                                {entry.beginner && <BeginnerBadge />}
                                {entry.description && <ReactMarkdown className="description mb-4">{entry.description}</ReactMarkdown>}
                                {entry.requirements && <div className="border dark:border-white/30 border-french-violet-600 p-2 rounded-lg mb-4">
                                    <h5 className="text-lg font-semibold">Requirements</h5>
                                    <ReactMarkdown className="description">{entry.requirements}</ReactMarkdown>
                                </div>}
                                {entry.location && <div><FontAwesomeIcon icon={faMapMarkerAlt} /> {entry.location}</div>}
                                {entry.presenter && <div className="opacity-70"><FontAwesomeIcon icon={faUser} /> {entry.presenter}</div>}
                            </>}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
        <Footer />
    </>;
}