type JokeCardProps = {
  question: String;
  answer: String;
  user: String;
};
export default function JokeCard(props: JokeCardProps) {
  return (
    <div className="bg-white text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
      <div className="mt-4 text-black">
        <div className="mb-5">
          <div
            className="
                  inline-flex
                  items-center
                  justify-center
                  px-2
                  py-1
                  text-xs
                  font-bold
                  leading-none
                  text-white
                  bg-blue-400
                  rounded-full
                "
          >
            Question:
          </div>
          <div>{props.question}</div>
        </div>
        <div>
          <div
            className="
                cursor-pointer 
                inline-flex
                items-center
                justify-center
                px-2
                py-1
                text-xs
                font-bold
                leading-none
              text-white
              bg-blue-400
                rounded-full
                "
          >
            Answer:
          </div>
          <div>{props.answer}</div>
        </div>
      </div>
      <div className="mt-4 text-gray-600 text-sm flex justify-between">
        <div className="cursor-pointer flex flex-row">
          <img
            className="w-5 h-5 rounded-lg mr-2"
            src="https://i.pravatar.cc/300"
          />
          <div className="text-sm">{props.user}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
