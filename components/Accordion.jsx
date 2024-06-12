import { useState } from "react";
import { MinusIcon } from "./svgs/MinusIcon";
import { PlusIcon } from "./svgs/PlusIcon";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div className="accordion">
      {data.map(({ id, title, content }) => (
        <div key={id} className="accordion__item">
          <div
            className={`accordion__title ${
              selected === id ? "text-white bg-primary" : ""
            }`}
            onClick={() => toggle(id)}
          >
            <h4>{title}</h4>

            {selected === id ? (
              <div>
                <MinusIcon selected={selected} id={id} />
              </div>
            ) : (
              <div>
                <PlusIcon />
              </div>
            )}
          </div>
          <div
            className={
              selected === id ? "accordion__content show" : "accordion__content"
            }
          >
            <p>{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
