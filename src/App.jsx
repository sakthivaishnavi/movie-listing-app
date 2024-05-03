import MovieCard from './components/MovieCard.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return(
    <div>
    <Navbar />
    <main className='p-3'>
      <div className='row'>
        <div className='col-4 w-25'>
      <MovieCard title="Aanandham (2016)" image="https://e1.pxfuel.com/desktop-wallpaper/812/406/desktop-wallpaper-aanandam-aanandham-movie-thumbnail.jpg" desc="Aanandam is a 2016 Indian Malayalam-language coming of age film written and directed Ganesh Raj in his directorial debut. Cinematography was by Anend C. Chandran." alt="Aanandham"/>
      </div>
      <div className='col-4 w-25'>
      <MovieCard title="Ghajini (2005)" image="https://sund-images.sunnxt.com/8848/1000x1500_GhajiniTamil_8848_b5f66417-037f-41f0-9342-0371af3992b1.jpg" desc="Aanandam is a 2016 Indian Malayalam-language coming of age film written and directed Ganesh Raj in his directorial debut. Cinematography was by Anend C. Chandran." alt="Ghajini"/>
      </div>
      <div className='col-4 w-25'>
      <MovieCard title="Ghajini (2005)" image="https://sund-images.sunnxt.com/8848/1000x1500_GhajiniTamil_8848_b5f66417-037f-41f0-9342-0371af3992b1.jpg" desc="Aanandam is a 2016 Indian Malayalam-language coming of age film written and directed Ganesh Raj in his directorial debut. Cinematography was by Anend C. Chandran." alt="Ghajini"/>
      </div>
      
      
      </div>
    </main>
</div>
  )
}
 

export default App
