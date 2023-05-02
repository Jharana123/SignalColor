import style from './style.module.css'
const Button=(props)=>{
    return(
        <div>
            <button className={style.button} onClick={props.buttonClick} >
                {props.status?"Stop":"Start"}
            </button>
        </div>
    )
}
export default Button;