import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return <>
        <div className="w-full h-screen flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-7xl font-semibold italic">hackBCA VI</h1>
            <p className="text-3xl">Coming April 2022.</p>
            <p className="mt-8 italic">Updates soon.</p>
            <p className="mt-8">Want in sponsor us? Contact us at <a href="mailto:contact@hackbca.com">contact@hackbca.com</a>!</p>
            <p className="mt-3 text-sm opacity-60"><a href="https://2020.hackbca.com">hackBCA V (2020) <FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
        </div>
        <div className="absolute -z-10 left-0 right-0 top-0 bottom-0 opacity-10 overflow-hidden flex items-center justify-center">
            <div className="whitespace-nowrap font-bold text-ludicrous leading-none align-middle text-french-violet dark:text-medium-turquoise">VI</div>
        </div>
    </>;
}