import Chai from './Class_component'
import Greet from './Functional_component';
import Hello from './Hello';
import Welcome from './Class_component';
import Message from './Message';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import UserGreetings from './UserGreetings';
import Namelist from './Namelist';
import Inline from './Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Form';
import LifecycleA from './LifecycleA';
// import Stylesheet from './Stylesheet';
import Fragment from './Fragment';
import Table from './Table';
import PureComp from './PureComp';
import ParentComp from './ParentComp';
import RefsDemo from './RefsDemo';

//This is a React Component which is exported to the index.js file
//App.js contains 4 child components namely the Header,sidenav,main content,footer
//Components describe a part of the UI
//A component may be saved with .js or .jsx extension.
//A component may be of two types-(i)Functional Component(Uses Hooks)   (ii)Class Component
//This file is a functional component

/*
//index.html is the single HTML file used by react to build the UI
//But we will not write HTML in this file and rather create components of the format .js or .jsx which will be renderd by react on DOM
//Entire HTML code will be brought to this file through components in the div tag here 
*/

function App() {
  return (
    <>
    <RefsDemo />

    {/* <Table /> */}
    {/* <Fragment /> */}
    {/* <ParentComp /> */}
    {/* <LifecycleA /> */}
    {/* <Form /> */}
    {/* <h1 className='error'>Error</h1> */}
    {/* Advantage of using css in modules is that classes are locally scoped by default */}
    {/* <h1 className={styles.success}>Success</h1> */}

    {/* This will also inherit the css from parent app.js component if css is not comming from module file */}
    {/* <Inline /> */}
    {/* <Stylesheet /> */}
    {/* <Stylesheet primary={true}/> */}
    {/* <Namelist /> */}
    {/* <UserGreetings /> */}


    {/* <ParentComponent /> */}
    {/* <EventBind /> */}
  



    {/* <Message /> */}
    {/* <Counter /> */}
    {/* <FunctionClick />
    <ClassClick /> */}
    {/* <Chai /> */}
    {/* <Greet name="Bruce" heroName="Batman">
      {/* <p>This is a child props</p> */}
    {/* </Greet> */} 
    {/* <Greet name="Clark" heroName="Superman">
      <button>Action</button>
    </Greet>
    <Greet name="Diana" heroName="Wonder Women"/> */}
    {/* <Hello/> */}
    {/* <h1>App Component:Chai Aur react</h1> */}
 
    {/* <Welcome name="Bruce" heroName="Batman"/>
    <Welcome name="Clark" heroName="SuperMan"/>
    <Welcome name="Diana" heroName="Wonder Women"/>  */}

    </>
  );
}

export default App;
