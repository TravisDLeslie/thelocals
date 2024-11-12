import React, { useState } from "react";
import video1 from "../assets/videos/TLSocialReel6.mp4";
import video2 from "../assets/videos/TLSocialReel1.mp4";
import video3 from "../assets/videos/TLSocialReel2.mp4";
import video4 from "../assets/videos/TLSocialReel3.mp4";
import video5 from "../assets/videos/TLSocialReel4.mp4";
import video6 from "../assets/videos/TLSocialReel5.mp4";
import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";

const GalleryPage = () => {
  const videos = [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
    { id: 3, src: video3 },
    { id: 4, src: video4 },
    { id: 5, src: video5 },
    { id: 6, src: video6 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? videos.length - 1 : prevSlide - 1
    );
  };

  const openModal = (videoSrc) => {
    setModalVideo(videoSrc);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <section className="bg-[#FFFFFF] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Gallery</h2>

        {/* Video Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <div key={video.id} className="relative">
              <div
                onClick={() => openModal(video.src)}
                className="cursor-pointer"
              >
                <video
                  src={video.src}
                  className="rounded-lg shadow hover:opacity-90 transition-opacity object-cover w-full h-48"
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <span className="bg-[#2DCBE0] hover:bg-[#5E287E] text-black font-bold py-2 px-4 rounded">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Slider */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <video
              src={videos[currentSlide].src}
              className="rounded-lg shadow w-full"
              muted
              preload="metadata"
            />
          </div>
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            <img src={prev} alt="Previous" />
          </button>
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            <img src={next} alt="Next" />
          </button>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-[#2DCBE0] text-black font-bold py-3 px-8 rounded hover:bg-blue-600">
            Schedule Your Appointment
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            style={{
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <video
              src={modalVideo}
              controls
              autoPlay
              className="max-h-full max-w-full object-contain"
            ></video>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#1e1e1e] font-bold bg-[#2DCBE0] rounded-full p-2 hover:bg-[#fff]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
