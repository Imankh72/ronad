import { OrangeCheckMarkIcon } from "./svgs/OrangeCheckMarkIcon";

const OnlineSaleDetails = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id} className="sale__details">
          <div className="mt-1 md:mt-3">
            <OrangeCheckMarkIcon />
          </div>
          <div>
            <p className="text">{title} </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OnlineSaleDetails;
