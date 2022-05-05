import { Footer } from 'components'

const DashboardLayout: React.FC<{ children: React.ReactElement }> = ({ children }): JSX.Element => {
  return (
    <div id="dashboard-layout" className="layout dashboard">
      {children}
      <Footer />
    </div>
  )
}

export default DashboardLayout
