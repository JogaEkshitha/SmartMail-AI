function Button({ text, type = "button" }) {
          return (
            <button
              type={type}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
            >
              {text}
            </button>
          );
        }
        
        export default Button;