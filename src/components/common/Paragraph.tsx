import React from 'react'

interface ParagraphProps {
  children: string;
  bold?: boolean;
  large?: boolean;
  white?: boolean;
  skyBlue?: boolean;
  lightSkyBlue?: boolean;
  charcoalGrey?: boolean;
  greyColor?: boolean;
  leading125?: boolean;
  leading105?: boolean;
  className?: string;
}

const Paragraph = ({children,bold,large,white, skyBlue,lightSkyBlue,charcoalGrey, greyColor,leading125,leading105, className = '',...props}: ParagraphProps) => {
  return (
    <p
      {...props}
      className={`${className} ${leading125 ? "leading-125" :
          leading105 ? "leading-105" :
            "leading-100"
        } ${bold ? "font-bold" : "font-normal"} ${large ? "text-lg" : "text-base"} ${white ? "text-white" :
          skyBlue ? "text-sky-blue" :
            lightSkyBlue ? "text-light-sky-blue" :
              charcoalGrey ? "text-charcoal-grey" :
              greyColor ? "text-medium-grey" :
                  "text-black"
        }`}
    >
      {children}
    </p>
  )
}

export default Paragraph