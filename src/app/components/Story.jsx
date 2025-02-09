"use client";
import Image from "next/image";
import React, { useState } from "react";

const Story = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      img: "/prewed/prewed1.png",
      story: "The Beginning",
      desc: "This is where our journey started. A moment of serendipity that brought us together.",
    },
    {
      id: 2,
      img: "/prewed/prewed2.webp",
      story: "First Date",
      desc: "Our first date was magical. From laughter to deep conversations, it was unforgettable.",
    },
    {
      id: 3,
      img: "/prewed/prewed3.webp",
      story: "The Proposal",
      desc: "A beautiful evening filled with love, tears, and a promise to be together forever.",
    },
    {
      id: 4,
      img: "/prewed/prewed1.png",
      story: "Our Wedding",
      desc: "The day we said 'I do' and began the rest of our lives together.",
    },
  ];

  const openModal = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-peachColor h-[600px]">
      <div className="relative flex flex-col items-center h-[400px] w-[90%] left-[5%] p-2">
        <div className="absolute w-[380px] h-[500px] top-12">
          <Image
            src="/prewed/story.png"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover w-[380px] h-[500px]"
          />
        </div>
        <div className="absolute top-[8rem]">
          <p className="font-allura text-peachColor text-center font-bold text-5xl mt-4">
            Our Story
          </p>
        </div>

        {/* Scrollable Story List */}
        <div className="absolute flex gap-3 overflow-x-scroll flex-nowrap p-4 w-[376px] h-[480px] rounded-t-full top-[63px]">
          {stories.map((item) => (
            <div
              key={item.id}
              className="shrink-0 mt-[160px]"
              onClick={() => openModal(item)}
            >
              <Image
                src={item.img}
                alt={item.story}
                width={1000}
                height={1000}
                className="object-cover h-[120px] w-[120px] rounded-full cursor-pointer hover:scale-105 transition"
              />
              <p className="text-peachColor text-center mt-4">{item.story}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedStory && (
        <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full animate-fadeIn">
            <Image
              src={selectedStory.img}
              alt={selectedStory.story}
              width={1000}
              height={1000}
              className="object-cover w-full h-[600px] rounded-lg z-50"
            />
            <h2 className="text-xl text-gray-700 font-bold text-center mt-4">
              {selectedStory.story}
            </h2>
            <p className="text-gray-600 text-center mt-2">
              {selectedStory.desc}
            </p>

            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
