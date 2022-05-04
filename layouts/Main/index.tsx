import { Footer } from "components"

const MainLayout: React.FC<{ children: React.ReactElement }> = ({ children }): JSX.Element => {
  return (
    <div id="main-layout" className="layout main">
      { children }
      <Footer />
    </div>
  )
}

export default MainLayout
