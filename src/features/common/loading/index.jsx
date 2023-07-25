import "./index.css";

const Loading = (props) => {
  return (
    <div className="dotted-div">
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
