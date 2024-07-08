import ReactDom from 'react-dom'
 export const Backdrop=props=>{
    const handleClick=()=>{
        if(props.onclose){
            props.onclose()
        }
    }
    return (  
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}
const Loader=()=>{
    return(
        ReactDom.createPortal(
            <>
                <Backdrop/>
                <div className="loading-dots">
                    <div>loading</div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                </div>
            </>,
            document.getElementById("loader-root")

        )

    )
}
export default Loader