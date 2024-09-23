// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Product({ onAddToCart, handleAddToCart }) {
//     const product = {
//         title: "Fascinating Lehenga Choli,Birdel Lehenga",
//         image: "https://img.freepik.com/premium-photo/illustration-lehenga-choli-hd-isolated-image-white-background_756405-56824.jpg",
//         price: 1599.02,
//     };
//     return (
//         <>
//             <div
//                 class="container-fluid bg-trasparent my-4 p-3"
//                 // style="position: relative"
//             >
//                 <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a target="_blank" href="https://amzn.to/3qeS1Fe">
//                                 <img
//                                     src="https://img.freepik.com/premium-photo/illustration-lehenga-choli-hd-isolated-image-white-background_756405-56824.jpg"
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>

//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     target="_blank"
//                                     href="https://amzn.to/3qeS1Fe"
//                                 >
//                                     asus
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 1599.02
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         Fascinating Lehenga Choli,Birdel Lehenga
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                         // onLoad={onAddToCart}
//                                     >
//                                         Add to Cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a href="https://amzn.to/42dsdGC" target="_blank">
//                                 <img
//                                     src="https://etimg.etb2bimg.com/photo/94386374.cms"
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>

//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     href="https://amzn.to/42dsdGC"
//                                     target="_blank"
//                                 >
//                                     razer
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 8499.57
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         Whirlpool of India expects washing
//                                         machines
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                     >
//                                         Add to Cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a href="https://amzn.to/3os2Nrc" target="_blank">
//                                 <img
//                                     src="https://www.boat-lifestyle.com/cdn/shop/products/playback-beige_e52cd63e-0efa-427d-af57-28f0ad4e7a4d_1500x.jpg?v=1658829304"
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>

//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     href="https://amzn.to/3os2Nrc"
//                                     target="_blank"
//                                 >
//                                     lenovo
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 4999.20
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         BoAt Rockerz 450R - Wireless Bluetooth
//                                         Headphone
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                     >
//                                         Add to cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a href="https://amzn.to/43tMNDW" target="_blank">
//                                 <img
//                                     src="https://arcticfox.com/cdn/shop/products/GoRed12001.jpg?v=1655811527"
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>
//                             {/* <div class="label-top shadow-sm">Asus Rog</div> */}
//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     href="https://amzn.to/43tMNDW"
//                                     target="_blank"
//                                 >
//                                     msi
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 2900.57
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         Arctic Fox Go Tawny Port School Backpack
//                                         for Boys and Girls
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                         pm
//                                         run
//                                         dev
//                                     >
//                                         Add to Cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-center text-light">
//                 <h2
//                     style={{
//                         outline: " 1px solid white ",
//                         backgroundColor: "rgba(255, 193, 7, 255)",
//                     }}
//                 >
//                     <span style={{ color: "black" }}>Upto 50% off</span>
//                 </h2>
//             </div>

//             {/* //////////////////////////////////////// */}
//             {/* MARQUEE */}
//             <div
//                 id="demo"
//                 class="carousel slide"
//                 data-bs-ride="carousel"
//                 data-bs-interval="2000"
//             >
//                 {/* <!-- Indicators/dots --> */}
//                 <div class="carousel-indicators">
//                     <button
//                         type="button"
//                         data-bs-target="#demo"
//                         data-bs-slide-to="0"
//                         class="active"
//                     ></button>
//                     <button
//                         type="button"
//                         data-bs-target="#demo"
//                         data-bs-slide-to="1"
//                     ></button>
//                     <button
//                         type="button"
//                         data-bs-target="#demo"
//                         data-bs-slide-to="2"
//                     ></button>
//                 </div>

//                 {/* <!-- The slideshow/carousel --> */}
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img
//                             src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7554fcdb3042316.jpg?q=20"
//                             alt="Los Angeles"
//                             class="d-block w-100"
//                             // height={"350px"}
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
//                             alt="Chicago"
//                             class="d-block w-100"
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7c6cf1a109b087d2.jpg?q=20"
//                             alt="New York"
//                             class="d-block w-100"
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/883423b433755824.jpg?q=20"
//                             alt="New York"
//                             class="d-block w-100"
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d9290fb51138d286.png?q=20"
//                             alt="New York"
//                             class="d-block w-100"
//                         />
//                     </div>
//                 </div>

//                 {/* <!-- Left and right controls/icons --> */}
//                 <button
//                     class="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#demo"
//                     data-bs-slide="prev"
//                 >
//                     <span class="carousel-control-prev-icon"></span>
//                 </button>
//                 <button
//                     class="carousel-control-next"
//                     type="button"
//                     data-bs-target="#demo"
//                     data-bs-slide="next"
//                 >
//                     <span class="carousel-control-next-icon"></span>
//                 </button>
//             </div>
//             <div
//                 class="container-fluid bg-trasparent my-4 p-3"
//                 // style="position: relative"
//             >
//                 <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
//                     <div className="col hp">
//                         <div className="card h-100 shadow-sm">
//                             <a target="_blank" href="https://amzn.to/3qeS1Fe">
//                                 <img
//                                     src="https://images.herzindagi.info/image/2023/Jun/short-kurti.jpg"
//                                     className="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>

//                             <div className="label-top shadow-sm">
//                                 <a
//                                     className="text-white"
//                                     target="_blank"
//                                     href="https://amzn.to/3qeS1Fe"
//                                 >
//                                     asus
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <div className="clearfix mb-3">
//                                     <span className="float-start badge rounded-pill bg-success">
//                                         ₹ 999.02
//                                     </span>
//                                 </div>
//                                 <h5 className="card-title">
//                                     Girls Printed Short Kurta, Fabric: Viscose
//                                     Rayon
//                                 </h5>

//                                 <div className="d-grid gap-2 my-4">
//                                     <button
//                                         className="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                     >
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a href="https://amzn.to/42dsdGC" target="_blank">
//                                 <img
//                                     src="https://media.istockphoto.com/id/1332455278/photo/smiling-white-light-brown-and-dark-brown-teddy-bears-sitting-on-table-at-pink-wall-background.jpg?s=612x612&w=0&k=20&c=vt3NvcLmXOFQQdbp_9_V3ZVlC1Dd47OFk4UEbgDd750="
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>

//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     href="https://amzn.to/42dsdGC"
//                                     target="_blank"
//                                 >
//                                     razer
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 1200.57
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         Teddy, Bear, Soft Toy, Cute, Fur,
//                                         childhood,
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                     >
//                                         Add to Cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a href="https://amzn.to/3os2Nrc" target="_blank">
//                                 <img
//                                     src="https://w0.peakpx.com/wallpaper/363/672/HD-wallpaper-man-s-wrist-watch-graphy-time-black-and-white-watches-technology.jpg"
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>

//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     href="https://amzn.to/3os2Nrc"
//                                     target="_blank"
//                                 >
//                                     lenovo
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 3899.20
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         Man's Wrist Watch, graphy, time, black
//                                         and white watches
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                     >
//                                         Add to cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col hp">
//                         <div class="card h-100 shadow-sm">
//                             <a href="https://amzn.to/43tMNDW" target="_blank">
//                                 <img
//                                     src="https://i.ebayimg.com/images/g/~J0AAOSwlZZkAkeW/s-l1200.jpg"
//                                     class="card-img-top"
//                                     alt="product.title"
//                                     style={{ height: "300px" }}
//                                 />
//                             </a>
//                             {/* <div class="label-top shadow-sm">Asus Rog</div> */}
//                             <div class="label-top shadow-sm">
//                                 <a
//                                     class="text-white"
//                                     href="https://amzn.to/43tMNDW"
//                                     target="_blank"
//                                 >
//                                     msi
//                                 </a>
//                             </div>
//                             <div class="card-body">
//                                 <div class="clearfix mb-3">
//                                     <span class="float-start badge rounded-pill bg-success">
//                                         ₹ 1600.79
//                                     </span>

//                                     <span class="float-end">
//                                         <a
//                                             href="#"
//                                             class="small text-muted text-uppercase aff-link"
//                                         >
//                                             {/* reviews */}
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <h5 class="card-title">
//                                     <span target="_blank" href="#">
//                                         Men Bell Bottom Pants Vintage 60s 70s
//                                         Flare
//                                     </span>
//                                 </h5>

//                                 <div class="d-grid gap-2 my-4">
//                                     <a
//                                         href="#"
//                                         class="btn btn-warning bold-btn"
//                                         style={{
//                                             backgroundColor:
//                                                 "rgba(255,193,7,255)",
//                                         }}
//                                         onClick={onAddToCart}
//                                         pm
//                                         run
//                                         dev
//                                     >
//                                         Add to Cart
//                                     </a>
//                                 </div>
//                                 <div class="clearfix mb-1">
//                                     <span class="float-start">
//                                         <a href="#">
//                                             {/* <i class="fas fa-question-circle"></i> */}
//                                         </a>
//                                     </span>

//                                     <span class="float-end">
//                                         <i
//                                             class="far fa-heart"
//                                             // style="cursor: pointer"
//                                         ></i>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <footer class="footer my-4">
//                     <div class="footer__container bd-container">
//                         <h2 class="footer__title">Clay Doe</h2>
//                         <p class="footer__description">
//                             I am Clay Doe and this is my personal website,
//                             consult me here.
//                         </p>

//                         <div class="footer__social">
//                             <a href="#" class="footer__link">
//                                 <i class="bx bxl-linkedin"></i>
//                             </a>
//                             <a href="#" class="footer__link">
//                                 <i class="bx bxl-github"></i>
//                             </a>
//                             <a href="#" class="footer__link">
//                                 <i class="bx bxl-codepen"></i>
//                             </a>
//                         </div>
//                         <p class="footer__copy">
//                             &#169; 2024 Clay Doe. All right reserved
//                         </p>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     );

import React, { useState } from "react";

export default function Product() {
    const [cartItems, setCartItems] = useState([]); // Store cart items
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Control popup visibility
    const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for pop-up

    // Function to handle adding product to the cart
    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            // If the item is already in the cart, increase its quantity
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // If it's a new item, add to cart with initial quantity of 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setSelectedProduct(product); // Set selected product for the popup
        setIsPopupOpen(true); // Open the popup
    };

    // Function to handle quantity adjustment
    const adjustQuantity = (productId, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    // Sample product data
    const products = [
        {
            id: 1,
            title: "Fascinating Lehenga Choli",
            price: 1599.02,
            image: "https://img.freepik.com/premium-photo/illustration-lehenga-choli-hd-isolated-image-white-background_756405-56824.jpg",
        },
        {
            id: 2,
            title: "Whirlpool Washing Machine",
            price: 8499.57,
            image: "https://etimg.etb2bimg.com/photo/94386374.cms",
        },
        {
            id: 3,
            title: "BoAt Rockerz 450R Headphone",
            price: 4999.2,
            image: "https://www.boat-lifestyle.com/cdn/shop/products/playback-beige_e52cd63e-0efa-427d-af57-28f0ad4e7a4d_1500x.jpg?v=1658829304",
        },
        {
            id: 4,
            title: " School beg for Boys and Girls",
            price: 2909.28,
            image: "https://arcticfox.com/cdn/shop/products/GoRed12001.jpg?v=1655811527",
        },
    ];

    return (
        <>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                {/* <!-- Indicators/dots --> */}
                <div class="carousel-indicators ">
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="0"
                        class="active"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="2"
                    ></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div class="carousel-inner my-3">
                    <div class="carousel-item active">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4888eced2bba63f2.jpg?q=20"
                            alt="Los Angeles"
                            class="d-block w-100"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
                            alt="Chicago"
                            class="d-block w-100"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/de8eb3f9f0b4afa5.jpg?q=20"
                            alt="New York"
                            class="d-block w-100"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
                            alt="New York"
                            class="d-block w-100"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
                            alt="New York"
                            class="d-block w-100"
                        />
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <div className="container-fluid bg-transparent my-4 p-3">
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    {products.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{ height: "300px" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>
                                    <span className="badge rounded-pill bg-success">
                                        ₹ {product.price}
                                    </span>
                                    <div className="d-grid gap-2 my-4">
                                        <button
                                            className="btn btn-warning bold-btn"
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                            style={{
                                                backgroundColor:
                                                    "rgba(255, 193, 7, 255)",
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pop-up Modal */}
            {isPopupOpen && selectedProduct && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>{selectedProduct.title}</h3>
                        <p>Price: ₹ {selectedProduct.price}</p>
                        <p>
                            Quantity:{" "}
                            {
                                cartItems.find(
                                    (item) => item.id === selectedProduct.id
                                ).quantity
                            }
                        </p>
                        <div>
                            <button
                                onClick={() =>
                                    adjustQuantity(selectedProduct.id, 1)
                                }
                                className="btn btn-success mx-1"
                            >
                                +
                            </button>
                            <button
                                onClick={() =>
                                    adjustQuantity(selectedProduct.id, -1)
                                }
                                className="btn btn-danger"
                            >
                                -
                            </button>
                        </div>
                        <button
                            className="btn btn-secondary mt-4 "
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Popup Styling */}
            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .popup-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                }
            `}</style>
        </>
    );
}

// }
