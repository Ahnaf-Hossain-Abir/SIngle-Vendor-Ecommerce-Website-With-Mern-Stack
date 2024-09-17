

const ButtonComponent = ({name, nameColor, fontSize, fontWeight, width, height, btnColor, radius, border, paddingX, paddingY, display, justify, align}) => {
    return (
        <div className="Btn">
        <button
          className={`${btnColor} ${nameColor} ${border} ${radius} ${fontSize} ${fontWeight} ${width} ${height} ${paddingX} ${paddingY} ${display} ${justify} ${align}`}
        >
          {name}
        </button>
      </div>
    );
};

export default ButtonComponent;