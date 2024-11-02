

import Navebar from './component/navbar/page'
import Hero from './component/hero/page'
import Courses from './component/Courses/page'
import Footer from './component/Footer/page'
import Slider from './component/ImageSlider/page'

function page() {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <Slider/>
      <Courses/>
      <Footer/>
    
    </div>
  )
}

export default page
