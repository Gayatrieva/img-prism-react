

const Signup = () => {
  return (
    <div className="mt-29 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w[27vw">
        <h1>Let Connect</h1>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="name" id="name" placeholder="evatech" className="shawdow-md rounded-md w-full px-3 py-2 border border-grey-300 focus:outline-none foucus:ring-black foucus:border-black"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup