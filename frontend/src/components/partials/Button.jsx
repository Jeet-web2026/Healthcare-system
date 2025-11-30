import { Link } from "react-router-dom";

const Button = ({ text, icon, link, iconclass, textclass, transform, mainclass }) => {
  return (
    <Link to={link} className={`flex gap-1 items-center ${mainclass}`}>
      {transform == true ? (
        <>
          <span
            className={`text-white bg-blue-900 p-3 px-4.5 rounded-l-4xl ${textclass}`}
          >
            {text}
          </span>
          <span
            className={`text-white bg-cyan-400 p-3 px-4.5 rounded-r-4xl ${iconclass}`}
          >
            {icon}
          </span>
        </>
      ) : (
        <>
          <span
            className={`text-white bg-cyan-400 p-3 px-4.5 rounded-l-4xl ${iconclass}`}
          >
            {icon}
          </span>
          <span
            className={`text-white bg-blue-900 p-3 px-4.5 rounded-r-4xl ${textclass}`}
          >
            {text}
          </span>
        </>
      )}
    </Link>
  );
};

export default Button;
