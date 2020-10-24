import style from "./style.module.scss"

function UserSurvey(props) {
    if (props.isopen) {
        return (
            <div className={style.modal}>

            </div>
        )
    } else {
        return null
    }
}

export default UserSurvey