import React from 'react'

export default function Form() {
    return (
        <div className="mt-12 fixed inset-0 flex items-center justify-center backdrop-blur-[2px] bg-black/10">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[80vh] animate-fadeIn">

                {/* Header with Title & Close Button */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Create New File</h3>
                    <button
                        className="w-8 h-8 flex justify-center items-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
                        onClick={() => setFormVisible(false)}
                    >
                        ✕
                    </button>
                </div>

                {/* Form Section */}
                <form className="w-full" onSubmit={handleCreate}>
                    <label className="block mb-2 text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="eg. Main"
                        required
                        onChange={handleChange}
                    />

                    <label className="block mb-2 text-gray-700">Language:</label>
                    <input
                        type="text"
                        name="language"
                        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="eg. Java"
                        required
                        onChange={handleChange}
                    />

                    <div className="flex justify-center mt-4 w-full">
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition w-full flex justify-center gap-3"
                        >
                            Create File
                            {loading1 && (
                                <div className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin mt-2"></div>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
