import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="m-2 flex justify-between border shadow-xl sticky">
      <Link to="/">
    <img className="h-20" src="src/assets/logo.png" alt="logo"/>
      </Link>
      <div className="">

      <input className="h-5 mt-5" type="text" placeholder="Search your food"/>
      <button type="search">
        Search
      </button>
      </div>

      <div className="flex m-2 p-1">
        <Link className="px-2 font-bold hover:text-yellow-200" to="/login">
            LogIn
        </Link>
        <Link className="px-2 font-bold hover:text-yellow-200" to="/signup">
            SignUp
        </Link>
      </div>
    </div>
  )
}

export default Navbar
