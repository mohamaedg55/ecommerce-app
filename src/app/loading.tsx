import React from "react";

export default function loading() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center w-[80%] mx-auto">
                <div className="spinner">
                    <div className="loader">
                        <div className="loading-text">
                            Loading<span className="dot">.</span><span className="dot">.</span>
                            <span className="dot">.</span>
                        </div>
                        <div className="loading-bar-background">
                            <div className="loading-bar">
                                <div className="white-bars-container">
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                    <div className="white-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <h1 className="py-6 text-red-700 text-lg font-bold">loading</h1>

            </div>
        </>
    );
}
