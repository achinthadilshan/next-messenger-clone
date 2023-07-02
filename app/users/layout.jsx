import getUsers from '@app/actions/getUsers'
import SideBar from '@app/components/sidebar/Sidebar'
import UsersList from './components/UsersList'

const UsersLayout = async ({ children }) => {
  const users = await getUsers()
  return (
    <SideBar>
      <div className="h-full">
        <UsersList items={users} />
        {children}
      </div>
    </SideBar>
  )
}

export default UsersLayout
