import { PropsWithChildren } from "react";

export function Section({id, title, children}: PropsWithChildren<{id?: string, title?: string}>) {
    return <section id={id} className="scroll-mt-12 w-full max-w-screen-lg p-4 sm:p-8 mx-auto">
        {title && <h2 className="text-center text-4xl font-semibold mb-4">{title}</h2>}
        {children}
    </section>
}