import { useState } from "react";
import { usePopper } from "react-popper";
import { Portal } from "components";

function PopupMenu(props) {
  const [isShow, setIsShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, props.offsetY || 0],
        },
      },
    ],
  });

  return (
    <span>
      <span
        ref={setReferenceElement}
        onClick={() => setIsShow((oldState) => !oldState)}
      >
        {props.button}
      </span>
      {isShow && (
        <Portal>
          <div
            className="fixed top-0 left-0 bottom-0 right-0"
            onClick={() => setIsShow(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-gray-100 shadow-sm py-3 px-4 rounded-md"
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
            >
              {props.children}
            </div>
          </div>
        </Portal>
      )}
    </span>
  );
}

export default PopupMenu;
