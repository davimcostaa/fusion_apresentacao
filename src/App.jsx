
import './App.css'
import BigCard from './components/BigCard'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import SmallCard from './components/SmallCard'

function App() {

  return (
    <>
      <div className='w-full max-w-full h-full pl-3 lg:pl-14 pr-3 lg:pr-14 pt-10 pb-10 bg-neutral flex flex-col gap-5'>
          <Menu /> 
          <Header />

          <section className='flex flex-col lg:flex-row gap-5'>
            <BigCard />
     
            <div className='flex flex-col w-full lg:w-1/2 gap-5'> 
              <SmallCard title='Portfolio' 
                    technology='Next.js' 
                    link='https://portfolio-ten-xi-79.vercel.app/pt'
                    image='portfolio'
              />

             <SmallCard title='Codechella' 
                    technology='React' 
                    link='https://codechella-omega.vercel.app'
                    image='codechella'
              />

            </div>
 
          </section>
          
          <Footer />
      </div>
    </>
  )
}

export default App
