// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header/Header';
import Main from './Components/MainPage/Main';
import Question from './Components/Questions/Question';

function App() {
  const qstnAns = [{ id: 1, qstn: 'How does react work?', ans: 'A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state ' },
  { id: 2, qstn: 'What is the difference between props and state?', ans: 'Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component, on the other side The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the components local state or information. It can only be accessed or modified inside the component or by the component directly' },
  { id: 3, qstn: 'Write the uses of Useeffect', ans: 'Besides fetching data UseEffect can be used in Reading from local storage Registering and deregistering event listeners' }
  ]
  console.log(qstnAns)
  return (
    <div className="App">
      <div>
        {/* <Header></Header> */}
        <Main></Main>

        <div className='qstn-answr-container'>
          {
            qstnAns.map(question => <Question qstn={question} key={question.id} ></Question>)
          }
        </div>

      </div>

    </div>
  );
}

export default App;
