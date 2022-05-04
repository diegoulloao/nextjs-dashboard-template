import { Footer } from "components"

const SimpleLayout: React.FC<{ children: React.ReactElement }> = ({ children }): JSX.Element => {
  return (
    <div id="simple-layout" className="layout simple">
      { children }
      <Footer />
    </div>
  )
}

export default SimpleLayout
