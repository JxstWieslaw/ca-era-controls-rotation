import "../../../../../index.css";

export const boyHairColor_Objects = [
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_1.png?v=1660805984299",
    id: "boyhaircolor1",
    alt_text: "BHS1",
  },
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_1.png?v=1660805984299",
    id: "boyhaircolor2",
    alt_text: "BHS2",
  },
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_2.png?v=1660805984299",
    id: "boyhaircolor3",
    alt_text: "BHS3",
  },
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_3.png?v=1660805984299",
    id: "boyhaircolor4",
    alt_text: "BHS4",
  },
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_4.png?v=1660805984299",
    id: "boyhaircolor5",
    alt_text: "BHS5",
  },
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_6.png?v=1660805985242",
    id: "boyhaircolor6",
    alt_text: "BHS6",
  },
  {
    icon: "https://cdn.glitch.global/37413256-7e26-4413-a634-a9e92f54502c/Color_7.png?v=1660805985381",
    id: "boyhaircolor7",
    alt_text: "BHS7",
  },
];

export const BoyHairColorObject = ({ options,active, id,onClick }) => {
    const className = ` object-selected m-2 h-20 w-20 ${options.alt_text === active ? "--is-active" : ""}`;
    return (
      <>
        <div
          id={options.id}
          className={className}
          onClick={onClick}
        >
           <img src={options.icon} alt={options.alt_text} />
        </div>
      </>
    );
  };