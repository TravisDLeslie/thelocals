import React, { useState } from "react";
import video1 from "../assets/videos/TLSocialReel6.mp4";
import video2 from "../assets/videos/TLSocialReel1.mp4";
import video3 from "../assets/videos/TLSocialReel2.mp4";
import video4 from "../assets/videos/TLSocialReel3.mp4";
import video5 from "../assets/videos/TLSocialReel4.mp4";
import video6 from "../assets/videos/TLSocialReel5.mp4";
import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";
import thumbnail1 from "../assets/thumbnails/thumb1.png";
import thumbnail2 from "../assets/thumbnails/thumb2.png";
import thumbnail3 from "../assets/thumbnails/thumb3.png";
import thumbnail4 from "../assets/thumbnails/thumb4.png";
import thumbnail5 from "../assets/thumbnails/thumb5.png";
import thumbnail6 from "../assets/thumbnails/thumb6.png";
import image1 from "../assets/images/exterior1.jpg";
import image2 from "../assets/images/exterior2.jpg";
import image3 from "../assets/images/exterior3.jpg";
import image4 from "../assets/images/interior1.jpg";
import image5 from "../assets/images/interior2.jpg";
import image6 from "../assets/images/interior3.jpg";
import image7 from "../assets/images/all1.jpg";
import image8 from "../assets/images/all2.jpg";
import image9 from "../assets/images/all3.jpg";



const GalleryPage = () => {
  const videos = [
    { id: 1, type: "video", src: video1, poster: thumbnail1 },
    { id: 2, type: "video", src: video2, poster: thumbnail2 },
    { id: 3, type: "video", src: video3, poster: thumbnail3 },
    { id: 4, type: "video", src: video4, poster: thumbnail4 },
    { id: 5, type: "video", src: video5, poster: thumbnail5 },
    { id: 6, type: "video", src: video6, poster: thumbnail6 },
  ];

  const images = [
    { id: 7, type: "image", src: image1 },
    { id: 8, type: "image", src: image2 },
    { id: 9, type: "image", src: image3 },
    { id: 10, type: "image", src: image4 },
    { id: 11, type: "image", src: image5 },
    { id: 12, type: "image", src: image6 },
    { id: 13, type: "image", src: image7 },
    { id: 14, type: "image", src: image8 },
    { id: 15, type: "image", src: image9 },

  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
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
                  poster={video.poster}
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
<div className="flex items-center justify-center mt-12">
  <div className="relative max-w-[550px] h-full">
    <div className="flex items-center justify-center">
      <img
        src={images[currentImage].src}
        alt={`Slide ${images[currentImage].id}`}
        className="rounded-lg shadow w-full object-cover"
      />
    </div>
    {/* Prev Button */}
    <button
      onClick={prevImage}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
    >
      <img src={prev} alt="Previous" />
    </button>
    {/* Next Button */}
    <button
      onClick={nextImage}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
    >
      <img src={next} alt="Next" />
    </button>
  </div>
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
