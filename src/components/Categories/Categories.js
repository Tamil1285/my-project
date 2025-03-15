import React, { useState } from "react";
import { Accordion, ListGroup, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const categories = [
    { name: "Electronics", 
        icon: "https://m.media-amazon.com/images/I/510uTHyDqGL.jpg", 
        subcategories: ["Mobiles", "Laptop", "Tv", "Gaming", "Home Theatres"] },
    { name: "Men", 
        icon: "https://cmsimages.shoppersstop.com/men_strapin_navigation_05c65d07c2/men_strapin_navigation_05c65d07c2.png", 
        subcategories: ["Clothing", "Footwear", "Watches", "Fragrance for Men", "Grooming for Men", "Sunglasses & Frames", "Accessories", "Jewellery"] },
    { name: "Women",
        icon: "https://cmsimages.shoppersstop.com/women_strapin_navigation_c9ff76aa53/women_strapin_navigation_c9ff76aa53.png", 
        subcategories: ["Clothing", "Footwear", "Watches", "Fragrance for Women", "Grooming for Women", "Sunglasses & Frames", "Accessories", "Jewellery"] },
    { name: "Kids",
         icon: "https://cmsimages.shoppersstop.com/kids_strapin_navigation_e4f6228401/kids_strapin_navigation_e4f6228401.png", 
         subcategories: ["T-Shirts", "Shorts", "Sandals"] },
    { name: "Beauty", 
        icon: "https://cmsimages.shoppersstop.com/beauty_strapin_navigation_7fa6ce90e3/beauty_strapin_navigation_7fa6ce90e3.png", 
        subcategories: ["Skincare", "Makeup", "Haircare"] },
    { name: "Watches", 
        icon: "https://cmsimages.shoppersstop.com/watch_strapin_navigation_391b567e1c/watch_strapin_navigation_391b567e1c.png", 
        subcategories: ["Analog", "Digital", "Smart"] },
    { name: "Home", 
        icon: "https://static.vecteezy.com/system/resources/thumbnails/034/629/699/small_2x/stylish-scandinavian-style-armchair-with-mint-green-upholstery-wooden-legs-perfect-for-modern-home-interior-lounge-chair-on-transparent-background-cut-out-furniture-front-view-ai-generated-png.png",
         subcategories: ["Furniture", "Decor", "Kitchen"] },
];

const CategoriesPage = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].name);
    const navigate = useNavigate(); // Initialize navigation

    const handleSubcategoryClick = (subcategory) => {
        navigate(`/${subcategory.toLowerCase()}`);
    };

    return (
        <div className="d-lg-none"> {/* Hidden on screens ≥992px */}
            <div className="d-flex">
            <ListGroup variant="flush" className="w-25">
                    {categories.map((category) => (
                        <ListGroup.Item
                            key={category.name}
                            action
                            onClick={() => setActiveCategory(category.name)}
                            className={`d-flex flex-column align-items-center text-center ${activeCategory === category.name ? "bg-primary bg-opacity-25" : ""}`}
                        >
                            <Image 
                                src={category.icon} 
                                roundedCircle 
                                width="30" 
                                className="mb-1" 
                            />
                            <span className="small">{category.name}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>


                {/* Subcategories */}
                <div className="w-75 p-3 bg-light">
    {categories.find((cat) => cat.name === activeCategory)?.subcategories.length > 0 ? (
        <div className="border rounded">
            {categories.find((cat) => cat.name === activeCategory)?.subcategories.map((sub, index) => (
                <div 
                    key={sub} 
                    className={`p-2 ${index !== categories.find((cat) => cat.name === activeCategory)?.subcategories.length - 1 ? "border-bottom" : ""}`}
                    onClick={() => handleSubcategoryClick(sub)}
                    style={{ cursor: "pointer" }}
                >
                    {sub}
                </div>
            ))}
        </div>
    ) : (
        <p>No subcategories available.</p>
    )}
</div>

            </div>
        </div>
    );
};

export default CategoriesPage;
