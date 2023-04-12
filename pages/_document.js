import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document{
    render(){
        return <Html lang="en">
            <Head>
                <body></body>
                <Main></Main>
                <NextScript />
                <div id="notifications"></div>
            </Head>
        </Html>
    }
}

export default MyDocument