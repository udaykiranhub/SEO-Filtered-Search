import {React} from "react"
import {Helmet} from "react-helmet"
import { useState,useEffect } from "react";
import {Card,Button,Row,Col,Form} from "react-bootstrap"
import "./product.css"
function Products(){
const [data,setData]=useState('');
const [categories,setCategories]=useState(["jewelery","men's clothing","women's clothing","electronics"]);
const [select,setSelect]=useState("");
const [filteredData, setFilteredData] = useState([]);
const [display,setDisplay]=useState('');

useEffect(()=>{

async function fun() {
try{
var products=await fetch('https://fakestoreapi.com/products');

var res=await products.json();
setData(res);
setDisplay(res)
console.log("data is:",data);

}
catch(err){
 console.log("Erro in fetch!"+err);
}

} 
fun();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


},[]);

async function handleCategoryChange(e) {

const selectedValue = e.target.value.trim(); 
 setSelect(selectedValue);
console.log("selecting value:",select)

if (data.length > 0) {
    
const  fdata = selectedValue? data.filter((x) => x.category.trim() === selectedValue):data; 
  setFilteredData(fdata); 
 console.log("Filtered data is:", fdata);

    if(selectedValue){
        setDisplay(fdata);
    }
    else{
        setDisplay(data);
    }

}


}


      
return (
<div>
<Helmet>
  <title>Products Page - Shop All Categories</title>
  <meta name="description" content="Browse a wide selection of products in different categories like jewelry, men's clothing, women's clothing, and electronics." />
  <meta name="keywords" content="products, shopping, jewelry, men's clothing, women's clothing, electronics, online store" />

  <meta property="og:title" content="Products Page - Shop All Categories" />
  <meta property="og:description" content="Browse a wide selection of products in different categories like jewelry, men's clothing, women's clothing, and electronics." />
  <meta property="og:image" content="URL_TO_IMAGE" />
  <meta property="og:url" content="CURRENT_PAGE_URL" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Products Page - Shop All Categories" />
  <meta name="twitter:description" content="Browse a wide selection of products in different categories like jewelry, men's clothing, women's clothing, and electronics." />
  <meta name="twitter:image" content="URL_TO_IMAGE" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Products Page",
        "description": "A collection of products from different categories like jewelry, men's clothing, women's clothing, and electronics.",
        "publisher": {
          "@type": "Organization",
          "name": "Your Company Name",
          "logo": {
            "@type": "ImageObject",
            "url": "URL_TO_LOGO_IMAGE"
          }
        }
      }
    `}
  </script>
</Helmet>

<Row  className="view">
<marquee><h4>##On Page SEO with Filtered Search  for products ##</h4></marquee>
<Form.Group controlId="categorySelect">

    <Form.Label><h4>Select Category</h4></Form.Label>
    <Form.Control as="select" value={select} onChange={handleCategoryChange} 
   className="choose">
    <option value="">All Categories</option>
    {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
{display.length > 0 ? (
display.map((item, key) => (
<Col key={key} md={3} lg={3}  sm={12}>
<Card >
    <Card.Img variant="top" src={item.image} alt={item.title} className="product"  />
    <Card.Body>
    <Card.Title>{item.title}</Card.Title>
 <Card.Text>
    <strong>Price:</strong> ${item.price}
    </Card.Text>
        <Button variant="primary">View Details</Button>
         </Card.Body>
    </Card>
          </Col>
        ))
      ) : (
        <Col>
          <p>Loading products...</p>
        </Col>
      )}
    </Row>
</div>
  );
}


export default Products;