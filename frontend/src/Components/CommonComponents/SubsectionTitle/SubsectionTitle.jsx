const SubsectionTitle = ({
  sectionTitle,
  sectionTitleColor,
  sectionTitleFontSize,
  sectionTitleFontWeight,
  buttonTitle,
  buttonColor,
  buttonTextColor,
  border,
  radius,
  fontSize,
  fontWeight,
  width,
  height,
  paddingX,
  paddingY,
  marginT
}) => {
  return (
    <div className={`flex justify-between items-center ${marginT}`}>
      <div className={`${sectionTitleColor} ${sectionTitleFontSize} ${sectionTitleFontWeight}`}>
        <h2>{sectionTitle}</h2>
      </div>

      <div className="Btn">
        <button
          className={`${buttonColor} ${buttonTextColor} ${border} ${radius} ${fontSize} ${fontWeight} ${width} ${height} ${paddingX} ${paddingY}`}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default SubsectionTitle;
