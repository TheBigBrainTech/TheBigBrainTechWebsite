import React, { useState } from "react";

export function DialogDefault() {
    const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/2">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">It's a simple dialog.</h3>
                            <button onClick={handleOpen} className="text-gray-400 hover:text-gray-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            The key to more success is to have a lot of pillows. Put it this
                            way, it took me twenty-five years to get these plants, twenty-five
                            years of blood sweat and tears, and I'm never giving up, I'm just
                            getting started. I'm up to something. Fan luv.
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                            <button
                                onClick={handleOpen}
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleOpen}
                                className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
