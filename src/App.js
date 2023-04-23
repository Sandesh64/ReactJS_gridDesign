import Header from './Header';
import './homepage.css'
import Main from './Main';
import Footer from './Footer';

function App() {
 
  return (
    <div className="App">
      <Header/>  
      <Main/>  
      <Footer/>
    </div>
  );
}

export default App;

// export function Monika() {
//   const arr = [
//     {
//       name: "Monika",
//       age: "22",
//       job: "React Developer",
//     },
//     {
//       name: "Hari",
//       age: "24",
//       job: "Angular Developer",
//     },
//     {
//       name: "Mohammed",
//       age: "20",
//       job: "Vue Developer",
//     },
//   ];
//   const myFunc = (item) => (
//     <div>
//       <h1>{item.name}</h1>
//       <p>{item.age}</p>
//       <p>{item.job}</p>
//     </div>
//   );
//   return (
//     <div>
//       {arr.map((item) => {
//         return myFunc(item);
//       })}
//     </div>
//   );
// }