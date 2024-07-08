import { Fragment, useState} from "react"
import Modal from "../../UI/Modal"
const ListItem=({item,onAdd,onRemove})=>{

  const [counter,setCounter]=useState(0)
  const [showModal,setShowModal]=useState(false)

  const increaseCounter=(event)=>{
    event.stopPropagation()
    onAdd(item.id)
    setCounter(counter+1)
  }

  const decreaseCounter=(event)=>{
    event.stopPropagation()
    if(counter<1){
      return 
    }
    if(counter===1){
      onRemove(item.id) 
    }
    setCounter(counter-1)
  }
  const handleModal=()=>{
    setShowModal(previousState=>!previousState)
  }
  
    return(
      <Fragment>
          <div onClick={handleModal} className="cart-item">
                <div className="item-image">
                  <img
                    className="card-top-img"
                    src={item.images[0]}
                    alt="loading"
                    srcSet=""
                  />
                </div>
                <div>
                  <span className="card-badge">{item.availabilityStatus}</span>
                  </div>
                <div className="item-details">
                  <div className="item-title">{item.title}</div>
                  <h3 className="card-h3">{item.brand}</h3>
                  <div class="item-prices">
                  <span class="original-price">${item.price}</span>
                  <span class="discounted-price">{item.discountPercentage}% off</span>
                  </div>
                </div>
                {
                  counter<1?
                  <div className="card-btn-footer">
                    <button className="add-to-cart-button" onClick={increaseCounter}>Add to Cart</button>  
                  </div>
                  :
                  <div className="cart-addon card-addon__modal">
                    <button onClick={decreaseCounter}><span>-</span></button>
                    <span>{counter}</span>
                    <button onClick={increaseCounter}><span>+</span></button>
                  </div>

                }

              </div>
              { showModal && 
                  <Modal onclose={handleModal}>
                    <div className="item-card__modal">
                      <div className="img-wrap">
                        <img className="img-fluid" src={item.images[0]} alt="loading" srcSet=""/>
                      </div>
                      <div className="meta">
                        <h3>{item.title}</h3>
                        <div className="pricing">
                          <span>{item.discountPercentage}% off</span>
                          <small>
                            ${item.price}
                          </small>
                        </div>
                        <p>{item.description}</p>
                        {
                          counter<1?
                          <div className="card-btn-footer">
                            <button className={"add-to-cart-button card-add_modal"} onClick={increaseCounter}>Add to Cart</button>  
                          </div>
                          :
                          <div className="cart-addon card-addon__modal">
                            <button onClick={decreaseCounter}><span>-</span></button>
                            <span>{counter}</span>
                            <button onClick={increaseCounter}><span>+</span></button>
                          </div>

                }
                      </div>
                    </div>
                  </Modal>}
            </Fragment>
    )
}

export default ListItem