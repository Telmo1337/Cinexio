
import { Divider } from "@mantine/core"
import About  from "./about/About"
import Hero from "./hero/Hero"
import Faq from "./faq/Faq"
import PublicFooter from "../../components/footer/PublicFooter"



export const Home = () => {
  return (
    <>
      <Hero/>
      <Divider  size="lg" />
      <About />
      <Faq/>
      <PublicFooter/>
    </>
  )
}
