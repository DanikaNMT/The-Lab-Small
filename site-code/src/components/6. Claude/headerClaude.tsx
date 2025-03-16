import React from 'react';
import { Link } from 'react-router-dom';

const HeaderClaude: React.FC = () => {
    return (
        <header className="w-screen bg-purple-600 text-white shadow-md">
            <div className="w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-3xl font-bold mb-4 md:mb-0">Cuddle Corner</h1>
                <nav className="flex gap-4">
                    <Link
                        to="/version2"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/version2/create"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    >
                        Create
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default HeaderClaude;