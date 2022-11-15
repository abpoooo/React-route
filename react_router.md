Lesson 19 React Router

## 1. Router 
- SPA: Single Page App
- Complex Website needs multi or more pages
- need router to create multi pages app

## 2. Initial Setup for React router
1. Use a basic react-app
2. npm i first
3. npm i react-router-dom
4. index.js
- <React.StrictMode>

      <BrowserRouter>
          <App />
      </BrowserRouter>
5. import {Route, Routes} from "react-router-dom";
-          return (
        <div className="App">
            <h1>
                Hello
            </h1>
            <Page1/>
            <Routes>
                
            </Routes>
        </div>
  );
  

## 3.Page 1
1. Create Component of Page 1
2.      <Routes>
                <Route path="/page1" element={<Page1/>}/>
                <Route path="/page2" element={<Page2/>}/>
            </Routes>
- When type /page1 in url, the component Page1 will be rendered
3. Page 2


## 4. Search Bar Component
- A regular react component


## 5. Create page with passing data - Page3
- url is generated through programming
- https://songshop.ca/product/not-today/
- Page3 for products/song-name
- const Page3 = () => {
  let page3Params = useParams()
  console.log(page3Params)
  const {name} = page3Params

  return(
  <div >
  <h3>Page 3: {`${name}`} </h3>
  </div>
  )
  }
- to get value from url
- let page3Params = useParams()
- const {name} = page3Params
- navigate = useNavigate()
- {/*useNavigate hook*/}
  <button onClick={() => navigate(`/singer/${props.singerId}`)}>
  navigate to singer based on id
  </button>
  <button onClick={() => navigate('detail')}>Song detail</button>
  <button onClick={() => navigate(-1)}>navigate -1</button>
  <button onClick={() => navigate(1)}>navigate forward</button>

## 6. window 

## 7. useParams

## 8. useNavigate 
- add `let navigate = useNavigate()` in component
- go to path
-     return (
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
- go forwards and backwards
- redirect and conditional redirect using `<Navigate>`
- 
## 10. redirect
- unconditional
  - `<Route path="/" element={<Navigate to="page1" />} />`
- conditional
  - ` <Route
    path="/checkout"
    element={isCartEmpty ? <Navigate to="/page1" /> : <p>checkout</p >}
    />
    `

## 11. NoMatch

- there is nomatch of the entered url address
- could use a noMatch to a sorry error address


## homework 
- refactor all components to their own files

- make city view a multi-page-app
  - a separate page to show on picture, with description 
  - url is created dynamically based on index
  - example: localhost:3000/picture/2
  - the picture page has a button to go back