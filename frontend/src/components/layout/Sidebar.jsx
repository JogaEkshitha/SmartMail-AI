function Sidebar() {
          return (
            <div className="w-64 min-h-screen bg-blue-700 text-white p-6">
        
              <h2 className="text-2xl font-bold mb-8">
                SmartMail AI
              </h2>
        
              <ul className="space-y-4">
        
                <li className="cursor-pointer hover:text-gray-300">
                  📊 Dashboard
                </li>
        
                <li className="cursor-pointer hover:text-gray-300">
                  📥 Inbox
                </li>
        
                <li className="cursor-pointer hover:text-gray-300">
                  ⭐ Important
                </li>
        
                <li className="cursor-pointer hover:text-gray-300">
                  ⚙ Settings
                </li>
        
              </ul>
        
            </div>
          );
        }
        
        export default Sidebar;