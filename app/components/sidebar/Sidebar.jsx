import DesktopSidebar from './DesktopSidebar'

const Sidebar = async ({ children }) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  )
}

export default Sidebar
