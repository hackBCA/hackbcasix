import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import { config } from '@fortawesome/fontawesome-svg-core';

import 'styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default class HackBCAApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <DefaultSeo
                    title="hackBCA VI"
                />
                <Component {...pageProps} />
            </>
        );
    }
}