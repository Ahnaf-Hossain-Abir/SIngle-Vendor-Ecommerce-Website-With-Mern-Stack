

const SectionTitle = ({text, textColor, fontSize, fontWeight}) => {
    return (
        <div className="flex gap-3 items-center">
        <div className="bg-[#DB4444] border rounded-md w-5 h-10"></div>
        <div className={`${fontSize} ${fontWeight} ${textColor}`}>
          <h6>{text}</h6>
        </div>
      </div>
    );
};

export default SectionTitle;