import UserSurvey from "../UserSurvey"
import { GlobalStyle } from "../"

function Root(props) {
    return (
        <>
            <GlobalStyle />
            {props.children}

            {/* TODO: geri bildirim anketi eklenecek */}
            <UserSurvey isOpen={false} />
        </>
    )
}

export default Root