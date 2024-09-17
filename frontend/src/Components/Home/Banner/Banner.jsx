

const Banner = () => {
    const lists = [
        {
            title: "Woman’s Fashion"
        },
        {
            title: "Men’s Fashion"
        },
        {
            title: "Electronics"
        },
        {
            title: "Home & Lifestyle"
        },
        {
            title: "Medicine"
        },
        {
            title: "Sports & Outdoor"
        },
        {
            title: "Baby’s & Toys"
        },
        {
            title: "Groceries & Pets"
        },
        {
            title: "Health & Beauty"
        },
    ]
    return (
       <div>
       {/* bottom border of navbar */}
       <div className="w-full border border-gray-200"></div>
        
         <div className="w-[85%] mx-auto flex items-center">
            
            {/* list section */}
            <div className="w-[20%] flex justify-between items-center">
            <ul className="mt-10">
                {
                    lists?.map(list=> <li className="cursor-pointer py-2">{list.title}</li>)
                }
            </ul>
            {/* right side border */}
            <div className="h-[400px] border border-gray-200"></div>
            </div>
        </div>
       </div>
    );
};

export default Banner;