const Card = ({ title, description, languages, imageUrl, buttonText }: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-32 object-cover"
        src={imageUrl}
        alt={title}
        style={{ height: "300px", borderRadius: "50%" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h2 className="text-[#7148FC]">{title}</h2>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <p>{languages}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={undefined}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
