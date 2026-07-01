function Navbar() {
          return (
            <div className="h-16 bg-white shadow flex justify-between items-center px-8">
        
              <h1 className="text-2xl font-bold text-blue-600">
                SmartMail AI
              </h1>
        
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Logout
              </button>
        
            </div>
          );
        }
        
        export default Navbar;