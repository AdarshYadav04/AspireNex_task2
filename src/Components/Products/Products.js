import { useState,useEffect } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
import { useNavigate, useParams } from "react-router-dom"

const Products=(props)=>{
  const {onAddItem,onRemoveItem}=props

  const [items,setItems]=useState([])
  const [loader,setLoader]=useState(true)
  const [presentItems, setPresentItems] = useState([])
  const params=useParams()
  const navigate=useNavigate()
  const handleNotFound=()=>{
    navigate("/404")
  }
  useEffect(()=>{
    async function fetchItems(){
      try {
        const {data}= await axios.get(`https://dummyjson.com/products`)
        console.log(data.products)
          if(!data){
            handleNotFound();
            return;
          }
          setItems(data.products)
        
      
      } catch (error) {
        alert("Some Error Occured")
        
      }
      finally{
        setLoader(false)
      }

    }
    fetchItems()
    return ()=>{
      setItems([])
      setLoader(true) 
    }
    
    },[params.category])

    const handleAddItem=id=>{
    
      if(presentItems.indexOf(id)>-1){
        return
      }
      setPresentItems([...presentItems,id])
      onAddItem()
    }
    const handleRemoveItem=id=>{
      let index=presentItems.indexOf(id)
      if(index>-1){
        let items=[...presentItems]
        items.splice(index,1)
        setPresentItems([...items])
        onRemoveItem()
      }
    }
    return (
      <>
          <div className="product-list">
              <div className="product-list--wrapper">
                  {
                    items.map(item=>{
                      return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} item={item}/>)
                    })
                  }
              </div>
          </div>
          {loader && <Loader/>}
        </>

    )
}

export default Products