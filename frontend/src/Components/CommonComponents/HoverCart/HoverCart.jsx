import Icon from "../Icon/Icon";

const HoverCart = ({ mapping, width, height, radius, border, borderColor, textColor, detailsColor,titleFontSize, detailsFontSize, titleFontWeight, detailsFontWeight, hoverColor, textHoverColor }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-6">
      {mapping.map((item, idx) => (
        <div
          key={idx}
          className={`group ${width} ${height} ${radius} ${border} ${borderColor} hover:${hoverColor} hover:${textHoverColor} cursor-pointer`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            {(item.logoOne || item.logoTwo) && <Icon icon={item.logoOne || item.logoTwo} />}
            {item.title && <h5 className={`${textColor} ${titleFontSize} ${titleFontWeight} group-hover:text-${textHoverColor}`}>{item.title}</h5>}
            <p className={`${detailsColor} ${detailsFontSize} ${detailsFontWeight} group-hover:text-${textHoverColor}`}>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCart;
