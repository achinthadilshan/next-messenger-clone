import SideBar from '@app/components/sidebar/Sidebar'

const UsersLayout = async ({ children }) => {
  return (
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  )
}

export default UsersLayout
