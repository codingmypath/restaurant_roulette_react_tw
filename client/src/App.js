import React from 'react'
import Logo from './images/restlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faStar, faStarHalfStroke} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './style.css';


function App() {
    const [products, setProducts] = React.useState([]);
    const [formData, setFormData] = React.useState( 
        {
        city: "",
        price: null,
        category: "food"
        }
    )



    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevChoice => {
            return {
                ...prevChoice,
                [name]: value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)


        fetch(`/selection?${new URLSearchParams(formData)}`)
        .then((res) => res.json())
        // .then((data) => setFormData([JSON.parse(data), true]));
        // .then((data) => {
        //     console.log((data));
        //     setProducts(data);  
        // })
        .then((data) => {
            const testarray = [];
            testarray.push(data);
            setProducts(testarray);
          })
        // arr3 = Object.values(formData.data);    

    }

    return (
        <div class="font-nunito text-center w-full h-full bg-white bg-no-repeat bg-cover m-auto">
            <header className="m-0 p-0 b-0 display-block bg-white absolute top-0 w-full leading-5 left-0 px-6 flex justify-between h-20 p-2">
            <a href="/"><img class="float-left w-16" src={Logo} alt="Restaurant Roulette Logo" /></a>
            <nav>
                <ul class="font-semibold pt-2">
                    <li className="list-none inline-block p-2.5"><a class="no-underline text-black block text-right hover:text-gray-500" href="/">Home</a></li>
                </ul>
            </nav>
            </header>
            <section class="w-full flex flex-col mt-20 mx-auto my-0">
        <section className="bg-mobile-back xl:bg-[url('./images/toast.jpg')] bg-no-repeat bg-cover bg-center h-[450px] bg-white p-20 text-black">
            <h1 class="text-4xl pt-10 xl:pt-24 md:text-5xl mr-0 md:pl-[20rem] xl:pl-[35rem]">LET US TAKE THE DECISION OUT OF DINING!</h1>  
            <h3 class="mt-5 p-1 md:pl-[20rem] xl:pl-[35rem] text-xl">We pick the restaurant when you are having trouble deciding where to go eat!</h3>
        </section>
        <section class="h-full bg-contain bg-right bg-no-repeat bg-[#ebe9ec] pt-8 p-5 xl:bg-[url('./images/coffee1.png')]">
            <form className='h-full w-full text-center m-auto rounded-smp pt-8 h-[625px]' onSubmit={handleSubmit}>
                {/* <img className="logo" src={Logo} alt="Restaurant Roulette" /> */}
                <h3 className='p-1 text-xl'>Location</h3>
                <input className='rounded-md border-[1px] border-black text-md/[17px] mb-5' id="city" type="text" name="city" onChange={handleChange} value={formData.city || ""} placeholder="Zip or City & State" />

                <h3 className="mt-5 p-1 text-xl">Price</h3>

                <section className='flex flex-row justify-center flex-wrap mb-8' id="priceSection">
                <label className="m-2.5" htmlFor="priceOne">
                    <input className='peer hidden' onChange={handleChange} id="priceOne" type="radio" value="1" name="price" checked={formData.price === "1"} required onInvalid="alert('You must fill out the form!');" />
                    <div className="cursor-pointer bg-[#C42B1C] text-white w-[75px] p-2 rounded hover:bg-[#feaf14] checked:text-white peer-checked:bg-[#feaf14]">
                        <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                </label>

                <label className="m-2.5" htmlFor="priceTwo">
                    <input className='peer hidden' onChange={handleChange} id="priceTwo" type="radio" value="2" name="price" checked={formData.price === "2"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white w-[75px] p-2 rounded hover:bg-[#feaf14] checked:text-white peer-checked:bg-[#feaf14]">
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                </label>

                <label className="m-2.5" htmlFor="priceThree">
                    <input className='peer hidden' onChange={handleChange} id="priceThree" type="radio" value="3" name="price" checked={formData.price === "3"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white w-[75px] p-2 rounded hover:bg-[#feaf14] checked:text-white peer-checked:bg-[#feaf14]">
                        {/* <p>$$$</p> */}
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                </label>

                <label className="m-2.5" htmlFor="priceFour">
                    <input className='peer hidden' onChange={handleChange} id="priceFour" type="radio" value="4" name="price" checked={formData.price === "4"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white w-[75px] p-2 rounded hover:bg-[#feaf14] checked:text-white peer-checked:bg-[#feaf14]">
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                </label>
                
                <label className="m-2.5" htmlFor="priceAll">
                    <input className='peer hidden' onChange={handleChange} id="priceAll" type="radio" value="1,2,3,4" name="price" checked={formData.price === "1,2,3,4"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white w-[75px] p-2 rounded hover:bg-[#feaf14] checked:text-white peer-checked:bg-[#feaf14]">
                    <p className="radioInputAll">All</p>
                    </div>
                </label>
                </section>

                <h3 class="p-1 mt-5 text-xl">Categories</h3>
                <section class="flex flex-wrap justify-center max-w-xl m-auto">
                <label className="m-2.5">
                    <input className="peer hidden" onChange={handleChange} type="radio" value="mexican" name="category" checked={formData.category === "mexican"} required onInvalid="alert('You must fill out the form!');" />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Mexican</p>
                        </div>
                </label>
                <label className="m-2.5" htmlFor="mediterranean">
                    <input className="peer hidden" onChange={handleChange} type="radio" id="mediterranean" value="mediterranean" name="category" checked={formData.category === "mediterranean"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Mediterranean</p>
                        </div>
                </label>

                <label className="m-2.5" htmlFor="sushi">
                    <input className="peer hidden" onChange={handleChange} type="radio" id="sushi" value="sushi" name="category" checked={formData.category === "sushi"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Sushi</p>
                        </div>
                </label>

                <label className="m-2.5">
                    <input className="peer hidden" onChange={handleChange} type="radio" value="pizza" name="category" checked={formData.category === "pizza"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Pizza</p>
                        </div>
                </label>

                <label className="m-2.5">
                    <input className="peer hidden" onChange={handleChange} type="radio" value="korean" name="category" checked={formData.category === "korean"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Korean</p>
                        </div>
                </label>

                <label className="m-2.5">
                    <input className="peer hidden" onChange={handleChange} type="radio" value="coffee" name="category" checked={formData.category === "coffee"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Coffee</p>
                        </div>
                </label>

                <label className="m-2.5">
                    <input className="peer hidden" onChange={handleChange} type="radio" value="burgers" name="category" checked={formData.category === "burgers"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">Burger</p>
                        </div>
                </label>

                <label className="m-2.5">
                    <input className="peer hidden" onChange={handleChange} type="radio" value="food" name="category" checked={formData.category === "food"} />
                    <div className="cursor-pointer bg-[#C42B1C] text-white p-2 rounded hover:bg-[#feaf14] w-120 peer-checked:text-white peer-checked:bg-[#feaf14]">
                        <p className="radioInputText">None</p>
                        </div>
                </label>
                </section>

            <br />
            {/* <button>Submit</button> */}
            <input class="c-white bg-[#899b0e] border-none cursor-pointer text-md/[17px] rounded-[3px] m-1.5 px-5 py-2 mb-2 hover:bg-[#718109]" type="submit" value="Submit"></input>
            {/* <input className="button" type="submit" value="Submit"></input> */}


            {/* <pre>
                {JSON.stringify(products, null, 2)}
            </pre> */}
            {/* <div>{formData.data}</div> */}
            </form>
        </section>
        <section class="text-center bg-[url('./images/surround-food.jpg')] bg-no-repeat bg-[length:3000px] bg-center">
            {products.map((item) => (
            <section className="w-full m-auto h-[1000px] p-2.5" key={item.id}>
                <h2 class="font-semibold text-xl mb-1 mt-0.5 pt-5">Restaurant</h2>
                <h2 class="mt-0 text-[#A41629] text-2xl">{item.name}</h2>
                <h2 class="mt-4 mb-1">Rating</h2>
                <section class="flex flex-row justify-center">
                    {item.rating === 5 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) : 
                        item.rating === 4.5 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) : 
                            item.rating === 4 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) : 
                                item.rating === 3.5 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) : 
                                    item.rating === 3 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) :
                                        item.rating === 2.5 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) :
                                            item.rating === 2 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) :
                                                item.rating === 1.5 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) :
                                                    item.rating === 3 ? (<div class="p-0.5 text-2xl text-[#A41629]"><FontAwesomeIcon icon={faStar} /></div>) :
                                                        <FontAwesomeIcon icon={faStarHalfStroke} />
                    }
                </section>
                <h2 className="mb-1.5 mt-5 font-semibold text-xl">Address</h2>
                <h4 className="text-[#a41629] m-0 text-myRed text-xl">{item.location.display_address.join(' ')}</h4>
                <h4 className="text-[#a41629] text-xl my-2.5">{item.display_phone}</h4>
                <a className="text-[#899b0e] text-center p-2.5 hover:text-[#feaf14]" href={item.url}>More Information</a>
                <img class="w-96 mb-2.5 rounded-sm m-auto p-2.5 pb-5" src={item.image_url} alt="Yelp restaurant" />
            </section>
            ))}
        </section>
        <footer class="bg-[#830d1c] text-white text-center w-full h-[200px] pt-5 flex-grow-1">
            <h2 class="p-1.5 text-2xl">Contact</h2>
                <a className="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.twitter.com/codingmypath"><FontAwesomeIcon icon={faTwitter} /></a>
                <a class="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.instagram.com/codingmypath"><FontAwesomeIcon icon={faInstagram} /></a>
                <a class="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.linkedin.com/in/eherrera09/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a class="text-[#dfad2c] text-4xl p-2 pb-[5px] hover:cursor-pointer hover:text-[#FF7039]" href="https://www.github.com/codingmypath"><FontAwesomeIcon icon={faGithub} /></a>
                <p class="p-4 py-5 bottom-0">&copy; 2023 - Edgar Herrera </p>
        </footer> 
        </section>
        </div>
    )
}

export default App;


// // client/src/App.js

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
