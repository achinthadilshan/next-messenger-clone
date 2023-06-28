const AuthSocialButton = ({ icon: Icon, onclick }) => {
  return (
    <button
      type={'button'}
      onClick={onclick}
      className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
      <Icon />
    </button>
  )
}

export default AuthSocialButton
