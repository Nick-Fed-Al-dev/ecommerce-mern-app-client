import { Card } from "../components/Card"
import { CardFooter } from "../components/CardFooter"
import { Navbar } from "../components/Navbar"


export const CardPage = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Card />
        <CardFooter />
      </div>
    </div>
  )
}
