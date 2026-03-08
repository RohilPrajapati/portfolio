import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-6">
            <div className="relative group p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center max-w-lg w-full">

                {/* Decorative glow behind the text */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative z-10">
                    <h1 className="text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold mt-4 mb-2">The feature or route you requested is still on my TODO list.</h2>
                    <p className="text-gray-400 mb-8">
                        I’m currently busy optimizing the backend or maybe fixing a bug that shouldn't exist.
                        In the meantime, let's get you back to safety.
                    </p>

                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Back to the Landing Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;