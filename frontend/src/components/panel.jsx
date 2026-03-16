import { div } from "three/src/nodes/math/OperatorNode.js";

export default function Panel({ title }) {
  return (
    <div className="flex  w-full">
      <div className="flex items-center bg-[#1a1a1a] pt-1 w-full">
        <button className="px-4 py-1.5 text-white text-md bg-[#252525] rounded-tr-md  ">
          {title}
        </button>
      </div>
    </div>
  );
}
