import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import YoutubePlayer from "./YoutubePlayer";
interface Props {
  title: string;
  onCloseModal: () => void;
}
const MovieModal = ({ title, onCloseModal }: Props) => {
  return (
    <div
      onClick={() => {
        onCloseModal();
      }}
      className="fixed top-0 z-[400] left-0 right-0 overflow-x-hidden bottom-0 bg-black bg-opacity-95"
    >
      <div className="flex flex-col overflow-x-hidden h-[100vh] w-screen items-center justify-center">
        <div
          onClick={() => {
            onCloseModal();
          }}
          className="absolute top-10 right-10  z-[21039]"
        >
          <XCircleIcon className=" text-white cursor-pointer w-10 h-10" />
        </div>

        <YoutubePlayer title={title} />
      </div>
    </div>
  );
};

export default MovieModal;
