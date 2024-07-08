import ReactDom from "react-dom"
import { Fragment } from "react"
import { Backdrop } from "./Loader"

const Modal=(props)=>{
    const {onclose,children}=props
    return (
        <Fragment>
            {
                ReactDom.createPortal(
                    <Fragment>
                        <Backdrop onclose={onclose}/>
                        <div className="modal">
                            <button type="close" onClick={onclose}>X</button>
                            <div className="content">{children}</div>
                        </div>
                    </Fragment>
                    ,
                    document.getElementById("modal-root")
                )
            }
        </Fragment>
    )

}
export default Modal