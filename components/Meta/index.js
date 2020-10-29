import { Fragment } from "react"

function Meta({ description, title }) {
    return (
        <Fragment>
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='generator' content='Compositor X0' />
            <link rel='icon' href={faviconSrc} />
            <link rel='apple-touch-icon' href={touchiconSrc} />
            <meta name='og:title' content={title} />
            <meta name='description' content={description} />
        </Fragment>
    )
}

export default Meta