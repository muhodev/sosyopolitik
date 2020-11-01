import UserSurvey from "../UserSurvey"
import { GlobalStyle } from "../"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import theme from "../../theme"

function Root(props) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Roboto:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {props.children}
                {/* TODO: geri bildirim anketi eklenecek */}
                <UserSurvey isOpen={false} />
            </ThemeProvider>
        </>
    )
}

export default Root