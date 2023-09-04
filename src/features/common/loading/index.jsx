import "./index.css";

const Loading = (props) => {
  return (
    <div className="dotted-div text-lg text-gray-700 font-quicksand">
      {props.text ? props.text : "Take deep breaths"} &nbsp;
      <div className="dotted">
        <li className="dotted-li"></li>
        <li className="dotted-li"></li>
        <li className="dotted-li"></li>
      </div>
    </div>
  );
};

export default Loading;
