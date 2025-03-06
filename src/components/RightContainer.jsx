import promot from "../assets/promot.png"
const RightContainer = () => {
    return (
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-sm w-full self-start">
        <h2 className="text-2xl font-bold text-center mb-4">Get Started with KoinX for FREE</h2>
        <p className="text-sm text-center mb-4">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <img src={promot} style={{"width":"178.66px","height":"166.22px"}} alt="" />
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
            Get Started for FREE →
          </button>
        </div>
      </div>
    );
  };
  
  export default RightContainer;