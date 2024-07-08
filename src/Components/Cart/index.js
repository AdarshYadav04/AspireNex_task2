import { Fragment, useState } from "react"
import Modal from "../UI/Modal"

const Cart=(props)=>{
    const {count}=props
    const [showModal,setShowModal]=useState(false)
    const handleModal=()=>{
        setShowModal(previousState=>!previousState)
    }
    return (
        <Fragment>
            <button className="cart-button" onClick={handleModal}>Cart
                <span className="cart-count">{count}</span>
            </button>
            {
                showModal &&
                <Modal onclose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                        {
                            count > 0 ?
                            <div className="checkout-modal_list-item">
                                <div className="img-wrap">
                                    <img src={"/assets/jorden-demo.jpeg"} className="img-fluid" alt="Placeholder"/>
                                </div>
                                <div className="information">
                                    <div>
                                        <h4>Title of the Product</h4>
                                        <div className="pricing">
                                            <span>2000</span>
                                            <small>
                                                <strike>2500</strike>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="cart-addon cart-addon__modal">
                                        <button>-</button>
                                        <span className="counter">{0}</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div> :
                            <div className="empty-cart">Please add something in your cart!</div>
                        }
                        </div>
                        {
                            count > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>2000 INR</h4>
                                </div>
                                <button>Order Now</button>
                            </div>

                        }
                    </div>
                </Modal>
            }
        </Fragment>
    )

}
export default Cart