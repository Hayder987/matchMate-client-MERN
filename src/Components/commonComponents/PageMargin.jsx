import { Children } from "react";


const PageMargin = ({children}) => {
    return (
        <div className="p-x4 md:px-8 w-full py-8 lg:py-14">
           {children} 
        </div>
    );
};

export default PageMargin;