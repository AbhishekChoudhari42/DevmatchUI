import './App.css'
import FeedContainer from './components/Container/FeedContainer'
import Navigation from './components/Navigation/Navigation'
function App() {

  return (
  
    <div>
        <Navigation/>
        <div className="w-screen h-screen bg-black pt-20 pb-4 px-4 flex ">
          <div className="w-0 bg-blue-200 md:w-1/3">

          </div>
          {/* Feed */}
          <FeedContainer className="w-1/3"/>
          
          <div className="w-0 bg-gray-600 md:w-1/3 ">

          </div>
        </div>

    </div>
  
  )

}

export default App
