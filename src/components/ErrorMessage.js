import React from 'react'

const ErrorMessage = () => {
    return (
        <div className="mt-6 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 p-6 text-white text-center shadow-lg">
            <h2 className="text-xl font-semibold">
                Oops! Something went wrong
            </h2>

            <p className="mt-2 text-sm opacity-90">
                We couldn’t find weather data for this city.
            </p>

            <p className="mt-1 text-xs opacity-75">
                Try searching with a different name.
            </p>
        </div>

    )
}

export default ErrorMessage
