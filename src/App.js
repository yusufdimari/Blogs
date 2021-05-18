
import Blogs from './blogs';
import Header from './header';
function App() {
  return (
    <div className="App">
      <div className='head'>
      <Header />
      </div>
      <div className="myBlogs">
      <Blogs />
      </div>
    </div>
  );
}

export default App;
