
import { motion } from "framer-motion";
import { Header, Loader, Footer, } from './components'
import Main from "./containers/Main";
import { useEffect, useState } from 'react'
import { fadeInOut } from "./assets/styles";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
  }, [])

  setInterval(() => {
    setIsLoading(false)
  }, 3000)
  return (
    <div className="">
      {
        isLoading && (
          <motion.div
            {...fadeInOut}
            className=" flex justify-center items-center w-full  bg-cardOverlay backdrop-blur-md fixed z-50 inset-0">
            <Loader />
          </motion.div>
        )
      }
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
