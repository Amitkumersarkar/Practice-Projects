import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useCart } from "./CartContext"
import { toast } from 'react-toastify'
import Item1 from "../assets/f1.png"
import Item2 from "../assets/f2.png"
import Item3 from "../assets/f3.png"

// Mock data only used as fallback
const fallbackMenuData = [
    {
        id: 1,
        title: "Noodles",
        description: "Lorem Ipsum dolor sit amet consecteur adiprising eli, sed do",
        image: Item1,
        price: 12.99
    },
    {
        id: 2,
        title: "Breaking bread",
        description: "Lorem Ipsum dolor sit amet consecteur adiprising eli, sed do",
        image: Item2,
        price: 8.50
    },
    {
        id: 3,
        title: "Noodles",
        description: "Lorem Ipsum dolor sit amet consecteur adiprising eli, sed do",
        image: Item3,
        price: 15.00
    }
]

export default function Menu() {
    const [menuItems, setMenuItems] = useState([])
    const { addItem } = useCart()

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch('http://localhost:4000/foods')
                if (!response.ok) throw new Error('Failed to fetch')

                const data = await response.json()
          
                if (!data || data.length === 0) {
                    setMenuItems(fallbackMenuData)
                } else {

                    console.log(data)
                    const mappedData = data.map(item => ({
                        id: item.id,
                        title: item.name,
                        description: item.description,
                        food_img: item.food_img || Item1,
                        price: item.price
                    }))
                    setMenuItems(mappedData)
                }
            } catch (error) {
                console.error('Error fetching menu data:', error)
                setMenuItems(fallbackMenuData)
            }
        }

        fetchMenuData()
    }, [])

    const handleAddToCart = (item) => {
        addItem(item)
        toast.success('Added to cart!')
    }
  console.log(menuItems)
    return (
        <div className="menu">
            <div className="menu_Container">
                <div className="menu_Content">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="menu_Title"
                        data-aos="fade-up"
                    >
                        <h1>Choose & Enjoy</h1>
                        <p>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                    </motion.div>

                    <div className="item_Container" data-aos="fade-up">
                        {menuItems.map((item) => (
                            <div className="items" key={item.id}>
                                <div className="item_Img">
                                    <img className="img-fluid-menu" src={item.food_img} alt={item.title} />
                                </div>
                                <div className="item_Details">
                                    <h1 className="item_Title" data-aos="fade-up">{item.title}</h1>
                                    <p data-aos="fade-up">{item.description}</p>
                                    <p data-aos="fade-up" className="item_Price">Price: ${item.price}</p>
                                    <button className="order_Btn" data-aos="fade-up" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
