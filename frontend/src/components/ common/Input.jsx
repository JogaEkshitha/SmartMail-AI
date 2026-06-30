function Input({ type, placeholder }) {
          return (
            <input
              type={type}
              placeholder={placeholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          );
        }
        
        export default Input;