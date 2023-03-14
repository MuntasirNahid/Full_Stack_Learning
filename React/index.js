//ReactDom.render(<h1>Hello Nahid</h1>, document.getElementById("root"))

// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// )

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const page = (<div>
//     <h1>Hello there</h1>
//     <p>Hi what are you saying?</p>
// </div>)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
//)
// const navbar = (
//     <nav>
//         <div>
//             <h1>MN7</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//     </nav>

// )
// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )


// const page = (
//     <div>
//         <img src = "./React-logo.png" width = "80px"></img>
//         <h1>Fun facts about React:</h1>
//         <ul>
//             <li>It is very easy.lol!</li>
//             <li>It is interesting to learn</li>
//             <li>It is colorful</li>
//         </ul>

//     </div>
// ) 
// ReactDOM.render(page,document.getElementById("root"));


//CUSTOM COMPONENTS
//-> A function that returns react element is known as component in react

// function TemporaryName() {
//     return (
//         <div>
//             <img src="./React-logo.png" width="80px"></img>
//             <h1>Fun facts about React:</h1>
//             <ul>
//                 <li>It is very easy.lol!</li>
//                 <li>It is interesting to learn</li>
//                 <li>It is colorful</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(<TemporaryName/>,document.getElementById("root"));//TemporaryName() will also work



// function Func() {
//     return (

//         <div>
//             <header>
//                 <nav>
//                     <img src="./React-logo.png" width="80px"></img>
//                 </nav>
//             </header>

//             <h1>My own react component</h1>
//             <ol>
//                 <li>To become a full stack developer</li>
//                 <li>To build some aswesome website</li>
//             </ol>
//             <footer>
//                 <small>@2023 Muntasir Mamun developement. All rights reserved.</small>
//             </footer>
//         </div>


//     )

// }
// ReactDOM.render(<Func />, document.getElementById("root"));



//Parent and Child Component:


// function Header() {

//     return (
//         <header>
//             <div className="box">


//                 <nav className="nav">
//                     <img src="./React-logo.png" className="nav-logo" />
//                     <ul className="nav-items">
//                         <li>Pricing</li>
//                         <li>About</li>
//                         <li>contact</li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }


// function Func() {
//     return (

//         <div>
//             <HeaDer />

//             <h1>My own react component</h1>
//             <ol>
//                 <li>To become a full stack developer</li>
//                 <li>To build some aswesome website</li>
//             </ol>
//             <footer>
//                 <small>@2023 Muntasir Mamun developement. All rights reserved.</small>
//             </footer>
//         </div>


//     )

// }
// ReactDOM.render(<Func />, document.getElementById("root"));


// function Footer() {
//     return (
//         <footer>
//             <small>@2023 Muntasir Mamun developement. All rights reserved.</small>
//         </footer>
//     )
// }

// function MainComponent() {
//     return (
//         <div>
//             <h1>My own react component</h1>
//             <ol>
//                 <li>To become a full stack developer</li>
//                 <li>To build some aswesome website</li>
//             </ol>
//         </div>
//     )
// }
import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import MainComponent from "./MainComponent";
import func from "./temp"
function Page() {

    return (
        <div>
           <Header /> 
            <MainComponent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"));

// function go() {
//     return (
//         <div>
//             <func />
//         </div>
//     )
// }

// ReactDOM.render(<go />, document.getElementById("root"))
//Styling with classes:
//Organizing Components
