import "./App.css";
import {Link, Route, Routes, useParams, useNavigate, Navigate} from "react-router-dom";
import {useState} from "react";

const Page1 = () => {
    return (
        <div className='page'>
            <h3>Page 1: About Us</h3>
            <p>We are a song shop</p>
            <div>
                <img src="https://songshop.ca/wp-content/uploads/2020/02/cropped-songShopLogo.png" alt=""/>
            </div>
        </div>
    )
}

const Page2 = () => {
    return (
        <div className='page2'>
            <h3>Page 2: </h3>
            <p>List of songs</p>
        </div>
    )
}

const Page3 = (props) => {
    let page3Params = useParams()
    console.log(page3Params)
    const {name} = page3Params
    console.log(props)

    let navigate = useNavigate()

    return(
        <div className=''>
            <h3>Page 3: {`${name}`} </h3>
            <h3>{`Singer id is ${props.singerId}`}</h3>
            {/*useNavigate hook*/}
            <button onClick={() => navigate(`/singer/${props.singerId}`)}>
                navigate to singer based on id
            </button>
            <button onClick={() => navigate('detail')}>Song detail</button>
            <button onClick={() => navigate(-1)}>navigate -1</button>
            <button onClick={() => navigate(1)}>navigate forward</button>
            {/*window method*/}
            <button onClick={() => window.history.go(-1)}>window: go -1</button>
            <button onClick={() => (window.location.href = '/page2')}>
                window: go to page2
            </button>
        </div>
    )
}

const Page4 = () => {
    // to get the data passed in url
    let page4 = useParams()
    console.log('page4 params', page4)

    const singerId = page4.id

    // use a function based on navigate to route
    let navigate = useNavigate()
    const jumpTo = (path) => {
        /*can include more logic actions in history.push*/
        navigate(path, { replace: true }) // replace true or false to replace the page in history
    }

    return (
        <div className="page">
            <h3>Page 4: Singer {singerId} introduction</h3>
            {/*use function to route or move in history*/}
            <button onClick={() => jumpTo('/')}> Jump to home</button>
            <button onClick={() => jumpTo(-1)}>Jump -1</button>
            <button onClick={() => jumpTo(1)}>Jump forward</button>

            <button onClick={() => jumpTo('/page2')}>Jump to page 2</button>
        </div>
    )
}

const Page5 = () => {
    let page5 = useParams()
    console.log('page5 params', page5)
    return (
        <div>
            <h1>Page 5: Song name: {page5.name}</h1>
            <p>detail</p >
        </div>
    )
}

const NoMatch = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p >
            <p>
                <Link to="/">Go home</Link>
            </p >
        </div>
    )
}

const NavBar = () => {
    // let name1 = useParams()
    // const {name} = name1
    let name = 'Just Say When'
    return (
        <nav style={{width:500, display: 'flex', justifyContent: 'space-between'}}>
            <Link to="/page1">
                Page 1
            </Link>
            <br/>
            <Link to="/page2">
                Page 2
            </Link>
            <br/>
            <Link to={`/product/${name}`}>
                Page 3
            </Link>

            <Link to={'/checkout'} type="button" className="btn btn-primary">
                checkout
            </Link>


        </nav>

    )
}


function App() {

    const [isCartEmpty] = useState(false)

    return (
        <div className="App">
            <h1>
                Hello
            </h1>
            <NavBar/>
            <Routes>
                <Route path="/page1" element={<Page1/>}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/product/:name" element={<Page3 singerId = {'789'} props = {'aaa'}/>}/>
                <Route path="/singer/:id" element={<Page4/>}/>
                <Route path="/product/:name/detail" element={<Page5/>}/>
                {/*Unconditional redirect*/}
                <Route path="/" element={<Navigate to="page1"/>}/>
            {/*    Conditional redirect*/}
                <Route
                    path="/checkout"
                    element={isCartEmpty ? <Navigate to="/page1" /> : <p>checkout</p >}
                />
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
            <footer>   This is the footer</footer>
        </div>
    );
}


export default App;
