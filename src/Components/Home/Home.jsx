import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import mainImage from "../../assets/image/mainImage.png"
import Product from "../Product/Product"
import Loading from '../Loading/Loading';



const CATEGORY_API = "http://178.128.162.248:8070/api/v1/category/categories/"

const API = "http://178.128.162.248:8070/api/v1/advertisement/ads"
function Home() {
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    async function getCategory() {
        try {
            const res = await axios.get(CATEGORY_API)

            setCategory(res.data)

            console.log(res)
        }catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    async function getProduct() {
        setLoading(true)
        try{
            const {data: {results} } = await axios.get(API)
            setProduct(results)
            setLoading(false)
        }catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

  

    async function filterByCategory(id) {
        setLoading(true)
        try{
            const {data:{results}} = await axios.get(`${API}/?category=${id}`)

            setProduct(results)
            setLoading(false)
        }catch(error) {
            console.log(error);
            setLoading(false)
        }
    }


  return (
    <div>
        <section className='home container'>
            <div className='home-sidebar'>
                <ul>
                    {
                        category.map((item) => (
                            <li onClick={() => filterByCategory(item.id)} key={item.id}>{item.title_ru}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='home-carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={mainImage} alt="" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src={mainImage} alt="" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={mainImage} alt="" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
        <section className='home-product container'>
            <div className='products'>
                {
                    loading ? <Loading /> :
                    product.map((item) => (

                        <Product key={item.id} data={item} />
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Home