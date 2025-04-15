import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center my-30 gap-10">

      <div className="flex flex-col  justify-center items-center">
        <p className="text-4xl text-gray-950 font-medium py-3">How it works</p>
        <p className="text-gray-600">Transform Words Into Stunning Images</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-5 bg-white rounded-2xl w-200 h-30 p-8 border border-gray-300">
          <i className="fa-solid fa-eye text-gray-800 bg-blue-100 min-w-[35px] max-h-[35px] p-2 rounded-lg"></i>
          <div className="">
            <p className="text-2xl text-gray-700">Describe your vision</p>
            <p className="text-s text-gray-400">"Type a phrase, sentence, or paragraph that describes the image you want to create. "</p>
          </div>
        </div>

        <div className="flex flex-row gap-5 bg-white rounded-2xl w-200 h-30 p-8 border border-gray-300">
          <i className="fa-solid fa-wand-magic-sparkles text-gray-800 bg-blue-100 min-w-[35px] max-h-[35px] p-2 rounded-lg"></i>
          <div>
            <p className="text-2xl text-gray-700">Watch the Magic</p>
            <p className="text-s text-gray-400">"Our Al-powered engine will transform your text into a high-quality, unique image in seconds."</p>
          </div>
        </div>

        <div className="flex flex-row gap-5 bg-white rounded-2xl w-200 h-30 p-8 border border-gray-300">
          <i className="fa-solid fa-download  text-gray-800 bg-blue-100 min-w-[35px] max-h-[35px] p-2 rounded-lg"></i>
          <div>
            <p className="text-2xl text-gray-700">Download & Share</p>
            <p className="text-s text-gray-400">"Instantly download your creation or share it with the world directly from our platform."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
