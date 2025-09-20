"use client";
import React from "react";

export default function error() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <span className="loader"></span>
            <h1 className="font-bold text-red-600 text-2xl">ERROR</h1>
        </div>
    );
}
