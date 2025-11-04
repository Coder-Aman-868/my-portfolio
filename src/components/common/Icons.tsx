import type { ReactElement } from "react";
import React from "react";

interface LoginCardProps {
    icon: string;
    className?: string;
    fill?: string;
    iconClass?: string;
    pathClassName?: string;
}

const Icons: React.FC<LoginCardProps> = ({ icon, className, pathClassName }) => {
    const iconList = {
        qualificationArrowIcon: (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.83951 0.421875V7.73438C9.83951 7.84626 9.79506 7.95357 9.71595 8.03269C9.63683 8.1118 9.52952 8.15625 9.41763 8.15625C9.30575 8.15625 9.19844 8.1118 9.11932 8.03269C9.04021 7.95357 8.99576 7.84626 8.99576 7.73438V1.44141L0.712947 9.71719C0.634625 9.79551 0.528399 9.83951 0.417635 9.83951C0.306871 9.83951 0.200644 9.79551 0.122322 9.71719C0.0440007 9.63887 8.25253e-10 9.53264 0 9.42188C-8.25253e-10 9.31111 0.0440007 9.20488 0.122322 9.12656L8.3981 0.84375H2.10513C1.99325 0.84375 1.88594 0.799302 1.80682 0.720185C1.72771 0.641069 1.68326 0.533763 1.68326 0.421875C1.68326 0.309987 1.72771 0.202681 1.80682 0.123564C1.88594 0.0444474 1.99325 0 2.10513 0H9.41763C9.52952 0 9.63683 0.0444474 9.71595 0.123564C9.79506 0.202681 9.83951 0.309987 9.83951 0.421875Z" fill="#DAC5A7" />
            </svg>
        ),

    };
    const addClassName = (
        icon: ReactElement<SVGElement>
    ): ReactElement<SVGElement> => {
        return React.cloneElement(icon, {
            className: (className || "") + " custom-class",
        });
    };
    const iconsNew = Object.fromEntries(
        Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
    );
    return iconsNew[icon] || null;
};

export default Icons;
