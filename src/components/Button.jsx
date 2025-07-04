
function Button({value,onClick}){
  return<>
  <div>
    <button onClick={onClick} className="px-6 py-3 text-black  text-xl cursor-pointer border-purple-700 border-solid rounded-xl bg-purple-700 hover:bg-gray-500 
    hover:shadow-xl hover:text-white hover:scale-105 transition duration-200">{value}</button>
  </div>
  </>
}

export default Button