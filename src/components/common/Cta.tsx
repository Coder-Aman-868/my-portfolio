import React from 'react'
interface ButtonProps {
  children: string
  className?: string;
  type?: "button" | "submit" | "reset";
}
const Cta = ({ children, className, type }: ButtonProps) => {
  return (
    <button type={type} className={`${className} font-bold text-lg leading-127 text-white bg-royal-blue py-[15px] h-[53px] px-[30px] rounded-[10px] shadow-royal-blue cursor-pointer hover:text-royal-blue hover:bg-white transition-all ease-linear duration-300 max-sm:w-full  border-solid hover:border-royal-blue border border-transparent`}>{children}</button>
  )
}

export default Cta