import React, { useState, useRef } from "react";

const OfficeGallery = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#fffefa]">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#ef9b15] to-[#ef9b15] rounded-full"></div>
                        <span className="text-3xl">🏢</span>
                        <div className="w-12 h-1 bg-gradient-to-l from-transparent via-[#ef9b15] to-[#ef9b15] rounded-full"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-[#334b94] to-[#ef9b15] bg-clip-text text-transparent">
                            Our Office
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Take a glimpse into our professional workspace where learning meets excellence
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Video Section */}
                    <div className="lg:col-span-1 group">
                        <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-[#ef9b15]">

                            {/* Main Video */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                poster="/ofc.jpg"
                                controls={isVideoPlaying}
                                muted   // 🔇 SOUND OFF
                                playsInline // ✔ Mobile autoplay compatibility
                                onPlay={() => setIsVideoPlaying(true)}
                                onPause={() => setIsVideoPlaying(false)}
                            >
                                <source src="/vdo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>


                            {/* Overlay */}
                            {!isVideoPlaying && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#334b94]/80 via-[#334b94]/40 to-transparent flex items-center justify-center cursor-pointer"
                                    onClick={handlePlayClick}
                                >
                                    <div className="text-center">
                                        {/* Play Button */}
                                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <svg
                                                className="w-10 h-10 text-[#334b94] ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-lg font-semibold">
                                            Watch Office Tour
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Corner Badge */}
                            <div className="absolute top-4 left-4 bg-[#ef9b15] text-[#334b94] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                📹 Video Tour
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-2 group">
                        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-[#334b94]">

                            <img
                                src="/ofc.jpg"
                                alt="Office Interior"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800";
                                }}
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-white text-3xl font-bold mb-2">Our Workspace</h3>
                                    <p className="text-white/90 text-lg">
                                        Modern facilities designed for optimal learning experience
                                    </p>
                                </div>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-4 right-4 bg-[#334b94] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                📸 Office View
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeGallery;
