//ReactDOM.render(JSX, document.getElementById('root'));
//const JSX = <h1>Hello JSX!</h1>;

// const JSX =
//     <div>
//         <h1>Heading</h1>
//         <p>Paragraph</p>
//         <ul>
//             <li>Item1</li>
//             <li>Item2</li>
//             <li>Item3</li>
//         </ul>
//     </div>;


// const JSX = (
//     <div>
//         {/* This is a comment */}
//         <h1>This is a block of JSX</h1>
//         <p>Here's a subtitle</p>
//     </div>
// );

// const JSX = (
//     <div>
//         <h1>Hello World</h1>
//         <p>Lets render this to the DOM</p>
//     </div>
// );
// // Add your code below this line

// ReactDOM.render(JSX, document.getElementById('challenge-node'));

// const JSX = (
//     <div className="myDiv">
//         <h1>Add a class to this div</h1>
//     </div>
// );

// const JSX = (
//     <div>
//         <h2>Welcome to React!</h2> <br />
//         <p>Be sure to close all tags!</p>
//         <hr />
//     </div>
// );

// ReactDOM.render(JSX, document.getElementById('root'));

// const MyComponent = () => {
//     return (
//         <div className="myDiv">Div Text</div>
//     );
// }

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         // Change code below this line

//         return (

//             <div>
//                 <h1>Hello React!</h1>
//             </div>

//         );

//         // Change code above this line
//     }
// };

// const ChildComponent = () => {
//     return (
//         <div>
//             <p>I am the child</p>
//         </div>
//     );
// };

// class ParentComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>I am the parent</h1>
//                 { /* Change code below this line */}

//                 <ChildComponent />

//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// const TypesOfFruit = () => {
//     return (
//         <div>
//             <h2>Fruits:</h2>
//             <ul>
//                 <li>Apples</li>
//                 <li>Blueberries</li>
//                 <li>Strawberries</li>
//                 <li>Bananas</li>
//             </ul>
//         </div>
//     );
// };

// const Fruits = () => {
//     return (
//         <div>
//             { /* Change code below this line */}
//             <TypesOfFruit />
//             { /* Change code above this line */}
//         </div>
//     );
// };

// class TypesOfFood extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 { /* Change code below this line */}
//                 <Fruits />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// class Fruits extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Fruits:</h2>
//                 { /* Change code below this line */}
//                 <NonCitrus />
//                 <Citrus />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// class TypesOfFood extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 { /* Change code below this line */}
//                 <Fruits />
//                 { /* Change code above this line */}
//                 <Vegetables />
//             </div>
//         );
//     }
// };

// class TypesOfFood extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 {/* Change code below this line */}
//                 <Fruits />
//                 <Vegetables />
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// };

// // Change code below this line

// ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My First React Component!</h1>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

// const CurrentDate = (props) => {
//     return (
//         <div>
//             { /* Change code below this line */}
//             <p>The current date is: {props.date}</p>
//             { /* Change code above this line */}
//         </div>
//     );
// };

// class Calendar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h3>What date is it?</h3>
//                 { /* Change code below this line */}
//                 <CurrentDate date={Date()} />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// const List = (props) => {
//     { /* Change code below this line */ }
//     return <p>{props.tasks.join(", ")}</p>
//     { /* Change code above this line */ }
// };

// class ToDo extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>To Do Lists</h1>
//                 <h2>Today</h2>
//                 { /* Change code below this line */}
//                 <List tasks={["walk dog", "workout"]}/>
//                 <h2>Tomorrow</h2>
//                 <List tasks={["walk dog", "workout", "study"]}/>
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// const ShoppingCart = (props) => {
//     return (
//         <div>
//             <h1>Shopping Cart Component</h1>
//         </div>
//     )
// };
// // Change code below this line

// ShoppingCart.defaultProps = { items: 0 };

// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//   }

//   Items.defaultProps = {
//     quantity: 0
//   }

//   class ShoppingCart extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       { /* Change code below this line */ }
//       return <Items quantity={10}/>
//       { /* Change code above this line */ }
//     }
//   };

// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// };

// // Change code below this line
// Items.propTypes = {
//     quantity: PropTypes.number.isRequired
// }
// // Change code above this line

// Items.defaultProps = {
//     quantity: 0
// };

// class ShoppingCart extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <Items />
//     }
// };

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         return (
//             <div>
//                 { /* Change code below this line */}
//                 <Welcome name={"Dave"} />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         return (
//             <div>
//                 { /* Change code below this line */}
//                 <p>Hello, <strong>{this.props.name}</strong>!</p>
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// class CampSite extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <Camper />
//             </div>
//         );
//     }
// };
// // Change code below this line

// class Camper extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.props.name}</p>
//             </div>
//         );
//     }
// }

// Camper.propTypes = {
//     name: PropTypes.string.isRequired
// }

// Camper.defaultProps = {
//     name: "CamperBot"
// }

// class StatefulComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         // Only change code below this line
//         this.state = {
//             firstName: "Dave"
//         }
//         // Only change code above this line
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.firstName}</h1>
//             </div>
//         );
//     }
// };

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'freeCodeCamp'
//       }
//     }
//     render() {
//       return (
//         <div>
//           { /* Change code below this line */ }
//             <h1>{this.state.name}</h1>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'freeCodeCamp'
//       }
//     }
//     render() {
//       // Change code below this line
//         const name = this.state.name;
//       // Change code above this line
//       return (
//         <div>
//           { /* Change code below this line */ }
//             <h1>{name}</h1>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Initial State'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // Change code below this line
//     this.setState({name: "React Rocks!"})
//     // Change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "Hello"
//         };
//         // Change code below this line
//         this.handleClick = this.handleClick.bind(this);
//         // Change code above this line
//     }
//     handleClick() {
//         this.setState({
//             text: "You clicked!"
//         });
//     }
//     render() {
//         return (
//             <div>
//                 { /* Change code below this line */}
//                 <button onClick={this.handleClick}>Click Me</button>
//                 { /* Change code above this line */}
//                 <h1>{this.state.text}</h1>
//             </div>
//         );
//     }
// };

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visibility: false
//         };
//         // Change code below this line
//         this.toggleVisibility = this.toggleVisibility.bind(this);
//         // Change code above this line
//     }
//     // Change code below this line
//     toggleVisibility = () => {
//         this.setState((state) => {
//             if (state.visibility) {
//                 return { visibility: false }
//             } else {
//                 return { visibility: true }
//             }
//         });
//     }
//     // Change code above this line
//     render() {
//         if (this.state.visibility) {
//             return (
//                 <div>
//                     <button onClick={this.toggleVisibility}>Click Me</button>
//                     <h1>Now you see me!</h1>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <button onClick={this.toggleVisibility}>Click Me</button>
//                 </div>
//             );
//         }
//     }
// }

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         // Change code below this line
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//         this.reset = this.reset.bind(this);
//         // Change code above this line
//     }
//     // Change code below this line
//     increment = () => {
//         this.setState((state) => {
//             return { count: state.count + 1 }
//         });
//     }

//     decrement = () => {
//         this.setState((state) => {
//             return { count: state.count - 1 }
//         });
//     }

//     reset = () => {
//         this.setState((state) => {
//             return { count: 0 }
//         });
//     }
//     // Change code above this line
//     render() {
//         return (
//             <div>
//                 <button className='inc' onClick={this.increment}>Increment!</button>
//                 <button className='dec' onClick={this.decrement}>Decrement!</button>
//                 <button className='reset' onClick={this.reset}>Reset</button>
//                 <h1>Current Count: {this.state.count}</h1>
//             </div>
//         );
//     }
// };

// class ControlledInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: ''
//         };
//         // Change code below this line
//         this.handleChange = this.handleChange.bind(this);
//         // Change code above this line
//     }
//     // Change code below this line
//     handleChange = (event) => {
//         this.setState({input: event.target.value})
//     }
//     // Change code above this line
//     render() {
//         return (
//             <div>
//                 { /* Change code below this line */}
//                 <input value={this.state.input} onChange={this.handleChange}/>
//                 { /* Change code above this line */}
//                 <h4>Controlled Input:</h4>
//                 <p>{this.state.input}</p>
//             </div>
//         );
//     }
// };

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: '',
//             submit: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({
//             input: event.target.value
//         });
//     }
//     handleSubmit(event) {
//         // Change code below this line
//         event.preventDefault();
//         this.setState((state) => {
//             return { submit: state.input }
//         });
//         // Change code above this line
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     {/* Change code below this line */}
//                     <input value={this.state.input} onChange={this.handleChange} />
//                     {/* Change code above this line */}
//                     <button type='submit'>Submit!</button>
//                 </form>
//                 {/* Change code below this line */}
//                 <h1>{this.state.submit}</h1>
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// }

// class MyApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'CamperBot'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {/* Change code below this line */}
//                 <Navbar name={this.state.name}/>
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// };

// class Navbar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 {/* Change code below this line */}
//                 <h1>Hello, my name is: {props.name}</h1>
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// };

// class MyApp extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         inputValue: ''
//       }
//       this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(event) {
//       this.setState({
//         inputValue: event.target.value
//       });
//     }
//     render() {
//       return (
//          <div>
//           { /* Change code below this line */ }
//             <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
//             <RenderInput input={this.state.inputValue}/>
//           { /* Change code above this line */ }
//          </div>
//       );
//     }
//   };

//   class GetInput extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h3>Get Input:</h3>
//           <input
//             value={this.props.input}
//             onChange={this.props.handleChange}/>
//         </div>
//       );
//     }
//   };

//   class RenderInput extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h3>Input Render:</h3>
//           <p>{this.props.input}</p>
//         </div>
//       );
//     }
//   };

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     componentWillMount() {
//       // Change code below this line
//         {console.log("componentWillMount()");}
//       // Change code above this line
//     }
//     render() {
//       return <div />
//     }
//   };

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeUsers: null
//         };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 activeUsers: 1273
//             });
//         }, 2500);
//     }
//     render() {
//         return (
//             <div>
//                 {/* Change code below this line */}
//                 <h1>Active Users: {this.state.activeUsers}</h1>
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// }

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: ''
//         };
//         this.handleEnter = this.handleEnter.bind(this);
//         this.handleKeyPress = this.handleKeyPress.bind(this);
//     }
//     // Change code below this line
//     componentDidMount() {
//         document.addEventListener("keydown", this.handleKeyPress);
//     }
//     componentWillUnmount() {
//         document.removeEventListener("keydown", this.handleKeyPress)
//     }
//     // Change code above this line
//     handleEnter() {
//         this.setState((state) => ({
//             message: state.message + 'You pressed the enter key! '
//         }));
//     }
//     handleKeyPress(event) {
//         if (event.keyCode === 13) {
//             this.handleEnter();
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//             </div>
//         );
//     }
// };

// class OnlyEvens extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('Should I update?');
//         // Change code below this line
//         if (nextProps.value % 2 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//         // Change code above this line
//     }
//     componentDidUpdate() {
//         console.log('Component re-rendered.');
//     }
//     render() {
//         return <h1>{this.props.value}</h1>;
//     }
// }

// class Controller extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 0
//         };
//         this.addValue = this.addValue.bind(this);
//     }
//     addValue() {
//         this.setState(state => ({
//             value: state.value + 1
//         }));
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.addValue}>Add</button>
//                 <OnlyEvens value={this.state.value} />
//             </div>
//         );
//     }
// }

// class Colorful extends React.Component {
//     render() {
//       return (
//         <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
//       );
//     }
//   };


// const styles = { color: "purple", fontSize: "40", border: "2px solid purple" };

// // Change code above this line
// class Colorful extends React.Component {
//     render() {
//         // Change code below this line
//         return (
//             <div style={styles}>Style Me!</div>
//         );
//         // Change code above this line
//     }
// };

// const inputStyle = {
//     width: 235,
//     margin: 5
//   };

//   class MagicEightBall extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         userInput: '',
//         randomIndex: ''
//       };
//       this.ask = this.ask.bind(this);
//       this.handleChange = this.handleChange.bind(this);
//     }
//     ask() {
//       if (this.state.userInput) {
//         this.setState({
//           randomIndex: Math.floor(Math.random() * 20),
//           userInput: ''
//         });
//       }
//     }
//     handleChange(event) {
//       this.setState({
//         userInput: event.target.value
//       });
//     }
//     render() {
//       const possibleAnswers = [
//         'It is certain',
//         'It is decidedly so',
//         'Without a doubt',
//         'Yes, definitely',
//         'You may rely on it',
//         'As I see it, yes',
//         'Outlook good',
//         'Yes',
//         'Signs point to yes',
//         'Reply hazy try again',
//         'Ask again later',
//         'Better not tell you now',
//         'Cannot predict now',
//         'Concentrate and ask again',
//         "Don't count on it",
//         'My reply is no',
//         'My sources say no',
//         'Most likely',
//         'Outlook not so good',
//         'Very doubtful'
//       ];
//       const answer = possibleAnswers[this.state.randomIndex]; // Change this line
//       return (
//         <div>
//           <input
//             type='text'
//             value={this.state.userInput}
//             onChange={this.handleChange}
//             style={inputStyle}
//           />
//           <br />
//           <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
//           <br />
//           <h3>Answer:</h3>
//           <p>
//             {/* Change code below this line */}
//             {answer}
//             {/* Change code above this line */}
//           </p>
//         </div>
//       );
//     }
//   }

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             display: true
//         }
//         this.toggleDisplay = this.toggleDisplay.bind(this);
//     }
//     toggleDisplay() {
//         this.setState((state) => ({
//             display: !state.display
//         }));
//     }
//     render() {
//         // Change code below this line
//         if (this.state.display) {
//             return (
//                 <div>
//                     <button onClick={this.toggleDisplay}>Toggle Display</button>
//                     <h1>Displayed!</h1>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <button onClick={this.toggleDisplay}>Toggle Display</button>
//                 </div>
//             );
//         }
//     };
// }

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             display: true
//         }
//         this.toggleDisplay = this.toggleDisplay.bind(this);
//     }
//     toggleDisplay() {
//         this.setState(state => ({
//             display: !state.display
//         }));
//     }
//     render() {
//         // Change code below this line
//         return (
//             <div>
//                 <button onClick={this.toggleDisplay}>Toggle Display</button>
//                 {this.state.display && <h1>Displayed!</h1>}
//             </div>
//         );

//     };
// }

// const inputStyle = {
//     width: 235,
//     margin: 5
// };

// class CheckUserAge extends React.Component {
//     constructor(props) {
//         super(props);
//         // Change code below this line
//         this.state = {
//             input: '',
//             userAge: ''
//         }
//         // Change code above this line
//         this.submit = this.submit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(e) {
//         this.setState({
//             input: e.target.value,
//             userAge: ''
//         });
//     }
//     submit() {
//         this.setState(state => ({
//             userAge: state.input
//         }));
//     }
//     render() {
//         const buttonOne = <button onClick={this.submit}>Submit</button>;
//         const buttonTwo = <button>You May Enter</button>;
//         const buttonThree = <button>You Shall Not Pass</button>;
//         return (
//             <div>
//                 <h3>Enter Your Age to Continue</h3>
//                 <input
//                     style={inputStyle}
//                     type='number'
//                     value={this.state.input}
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 {/* Change code below this line */}
//                 {this.state.userAge === "" ? buttonOne : (parseInt(this.state.input) < 18 ? buttonThree : buttonTwo)}


//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// }

// class Results extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         {/* Change code below this line */ }
//         return this.props.fiftyFifty ? <h1>You Win!</h1> : <h1>You Lose!</h1>;
//         {/* Change code above this line */ }
//     }
// }

// class GameOfChance extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 1
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => {
//             // Complete the return statement:
//             return {
//                 counter: prevState.counter + 1
//             }
//         });
//     }
//     render() {
//         const expression = Math.random() >= 0.5 ? true : false; // Change this line
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Play Again</button>
//                 {/* Change code below this line */}
//                 <Results fiftyFifty={expression} />
//                 {/* Change code above this line */}
//                 <p>{'Turn: ' + this.state.counter}</p>
//             </div>
//         );
//     }
// }

// class GateKeeper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(event) {
//         this.setState({ input: event.target.value })
//     }
//     render() {
//         let inputStyle = {
//             border: '1px solid black'
//         };
//         // Change code below this line

//         // Change code above this line
//         return (
//             <div>
//                 <h3>Don't Type Too Much:</h3>
//                 <input
//                     type="text"
//                     style={this.state.input.length > 15 ? { border: "3px solid red" } : inputStyle}
//                     value={this.state.input}
//                     onChange={this.handleChange} />
//             </div>
//         );
//     }
// };

// const textAreaStyles = {
//     width: 235,
//     margin: 5
// };

// class MyToDoList extends React.Component {
//     constructor(props) {
//         super(props);
//         // Change code below this line
//         this.state = {
//             userInput: '',
//             toDoList: []
//         }
//         // Change code above this line
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleSubmit() {
//         const itemsArray = this.state.userInput.split(',');
//         this.setState({
//             toDoList: itemsArray
//         });
//     }
//     handleChange(e) {
//         this.setState({
//             userInput: e.target.value
//         });
//     }
//     render() {
//         const items = this.state.toDoList.map((item) => <li>{item}</li>); // Change this line
//         return (
//             <div>
//                 <textarea
//                     onChange={this.handleChange}
//                     value={this.state.userInput}
//                     style={textAreaStyles}
//                     placeholder='Separate Items With Commas'
//                 />
//                 <br />
//                 <button onClick={this.handleSubmit}>Create List</button>
//                 <h1>My "To Do" List:</h1>
//                 <ul>{items}</ul>
//             </div>
//         );
//     }
// }

// const frontEndFrameworks = [
//     'React',
//     'Angular',
//     'Ember',
//     'Knockout',
//     'Backbone',
//     'Vue'
// ];

// function Frameworks() {
//     const renderFrameworks = frontEndFrameworks.map((item) => <li key={item}>{item}</li>); // Change this line

//     return (
//         <div>
//             <h1>Popular Front End JavaScript Frameworks</h1>
//             <ul>
//                 {renderFrameworks}
//             </ul>
//         </div>
//     );
// };

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         users: [
//           {
//             username: 'Jeff',
//             online: true
//           },
//           {
//             username: 'Alan',
//             online: false
//           },
//           {
//             username: 'Mary',
//             online: true
//           },
//           {
//             username: 'Jim',
//             online: false
//           },
//           {
//             username: 'Sara',
//             online: true
//           },
//           {
//             username: 'Laura',
//             online: true
//           }
//         ]
//       };
//     }
//     render() {
//       const usersOnline = this.state.users.filter(user => user.online); // Change this line
//       const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Change this line
//       return (
//         <div>
//           <h1>Current Online Users:</h1>
//           <ul>{renderOnline}</ul>
//         </div>
//       );
//     }
//   }

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div />
    }
};

// Change code below this line
ReactDOMServer.renderToString(<App />);