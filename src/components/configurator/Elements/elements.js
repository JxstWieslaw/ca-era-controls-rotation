import "../../../index.css";
import "./elements.css";

export const NewHomeButton = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3">
      <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="29.69"
            x2="49.98"
            y2="70.27"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M75.46,50.57l-1.95,2.37c-.65.78-1.16.82-1.94.17L50.47,35.52l-.5-.41-2.36,2L28.35,53.14A1.13,1.13,0,0,1,26.48,53c-.53-.62-1.05-1.24-1.57-1.87a1.11,1.11,0,0,1,.18-1.86L42,35.2c1.84-1.53,3.67-3.07,5.51-4.58a3.82,3.82,0,0,1,4.24-.52,5.13,5.13,0,0,1,1.09.77l6.88,5.74.4.3c0-.22,0-.38,0-.54V31.1c0-1,.34-1.31,1.32-1.32h5.42c1,0,1.35.34,1.35,1.35q0,6,0,12.09a.92.92,0,0,0,.37.8q3.12,2.55,6.2,5.15a6.15,6.15,0,0,1,.71.81ZM54.38,70.26H66a2,2,0,0,0,2.17-2.2q0-7.35,0-14.68a.94.94,0,0,0-.39-.8q-7-5.73-13.93-11.48L50,37.9c-.17.13-.31.23-.45.35Q40.82,45.42,32.1,52.61a.91.91,0,0,0-.34.81c0,4.81,0,9.62,0,14.43a2.13,2.13,0,0,0,2.42,2.41H45.93V58.16H54V70.23Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const BackButton = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-3">
        <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="49.98"
              x2="49.98"
              y2="99.95"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#3879fb" />
              <stop offset="0.11" stopColor="#3f82f7" />
              <stop offset="0.25" stopColor="#4c94f0" />
              <stop offset="0.4" stopColor="#48a5f8" />
              <stop offset="0.5" stopColor="#44b3ff" />
              <stop offset="0.75" stopColor="#32e3f7" />
              <stop offset="1" stopColor="#70ece1" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="49.98"
              y1="30.62"
              x2="49.98"
              y2="69.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#8348f8" />
              <stop offset="0.07" stopColor="#8051f8" />
              <stop offset="0.2" stopColor="#786bf9" />
              <stop offset="0.34" stopColor="#6d90fa" />
              <stop offset="0.66" stopColor="#6798f8" />
              <stop offset="1" stopColor="#55b3f4" />
            </linearGradient>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
              <path className="applyhere"
                d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                fill="url(#linear-gradient)"
                fillOpacity={0.7}/>
              <path className="applyhere"
                d="M75.4,68.25a1.4,1.4,0,0,0-.1.16,1.46,1.46,0,0,1-1.35.93,1.49,1.49,0,0,1-1.42-.91c-.33-.63-.65-1.27-1-1.88A31.55,31.55,0,0,0,62.32,56.1a24.76,24.76,0,0,0-12-4.43c-1.55-.15-3.12-.18-4.75-.27V52c0,2.2,0,4.4,0,6.61a1.6,1.6,0,0,1-.81,1.58A1.56,1.56,0,0,1,43.1,60L25.37,48.34a1.5,1.5,0,0,1-.13-2.6L43,31.09a1.52,1.52,0,0,1,1.74-.32,1.53,1.53,0,0,1,.87,1.54c0,2.22,0,4.43,0,6.65v.6c.55,0,1.06,0,1.56,0a27.41,27.41,0,0,1,15.65,4.79A28,28,0,0,1,75.08,63.57c.14.86.22,1.73.32,2.6Z"
                fill="url(#linear-gradient-2)"
                fillOpacity={0.7}/>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export const HomeButton = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="change-styling"
        viewBox="0 0 84.06 83.64"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_4" data-name="Layer 4">
            <path
              d="M67.06,75.43a42.8,42.8,0,0,1-12,6.15,41.78,41.78,0,0,1-13.25,2.06V83.5A41.38,41.38,0,0,0,55,81.27a40.16,40.16,0,0,0,11.69-6.33Z"
              fill="#d1f7ff"
            />
            <path
              d="M41.85,83.64a41.88,41.88,0,0,1-13.5-2.25A42.2,42.2,0,0,1,6.94,64.89,41.75,41.75,0,0,1,1.33,52.35l.58-.15A41.3,41.3,0,0,0,16.45,74.72a40.67,40.67,0,0,0,12,6.53A41.85,41.85,0,0,0,41.85,83.5Z"
              fill="#d1f7ff"
            />
            <rect
              x="0.57"
              y="48.74"
              width="0.64"
              height="0.01"
              transform="translate(-7.81 0.77) rotate(-9.23)"
              fill="#d1f7ff"
            />
            <path
              d="M.58,48.79A41.89,41.89,0,0,1,5.06,22a42.34,42.34,0,0,1,20-18.46l.42,1A41.07,41.07,0,0,0,1.34,35.15,42.13,42.13,0,0,0,1.2,48.69Z"
              fill="#d1f7ff"
            />
            <polygon
              points="28.49 2.21 28.5 2.2 28.84 3.21 28.83 3.22 28.49 2.21"
              fill="#d1f7ff"
            />
            <path
              d="M28.5,2.2a42.41,42.41,0,0,1,27.32.12,43.43,43.43,0,0,1,6.36,2.81A42.49,42.49,0,0,1,77.36,19.22L76.15,20a41.81,41.81,0,0,0-9-9.93,40.54,40.54,0,0,0-5.59-3.77A41.79,41.79,0,0,0,55.4,3.52a41.09,41.09,0,0,0-26.56-.31Z"
              fill="#d1f7ff"
            />
            <polygon
              points="79.21 22.38 79.21 22.38 77.94 23.05 77.94 23.05 79.21 22.38"
              fill="#d1f7ff"
            />
            <path
              d="M79.21,22.38a42.42,42.42,0,0,1,4.37,13.19,41.46,41.46,0,0,1-.21,13.88,40.84,40.84,0,0,1-1.83,6.71,36.42,36.42,0,0,1-2.93,6.3,42.24,42.24,0,0,1-8.72,10.69l-.48-.53a41.62,41.62,0,0,0,12.65-23.4,43.21,43.21,0,0,0,.09-13.43,40.74,40.74,0,0,0-4.21-12.74Z"
              fill="#d1f7ff"
            />
            <polygon
              points="67.07 75.43 67.06 75.44 66.68 74.94 66.69 74.93 67.07 75.43"
              fill="#d1f7ff"
            />
            <circle
              className="applyhere fill-transparent"
              cx="42.03"
              cy="41.82"
              r="35.18"
              stroke="#d1f7ff"
            />
          </g>
          <g id="Layer_7" data-name="Layer 7">
            <path
              d="M21.33,63.19a3,3,0,0,1-.45-.41.81.81,0,0,1,.73-1.24h3.57V41.19c-.7.51-1.15.08-1.61-.4-.8-.83-1.63-1.63-2.44-2.45a.86.86,0,0,1,.1-1.49l20-15.62a.86.86,0,0,1,1.29,0l8.25,6.44.47.35c0-.19,0-.32,0-.45V25c0-.69.3-1,1-1h4.49a.85.85,0,0,1,1,1c0,2.57,0,5.14,0,7.71a.77.77,0,0,0,.34.68c1.44,1.1,2.87,2.22,4.29,3.34a8.22,8.22,0,0,1,.66.66v.5c-.54.57-1.07,1.14-1.61,1.7s-.89.89-1.34,1.34-.73.62-1.51.3v1.73c0,1.54,0,3.08,0,4.62a.83.83,0,1,1-1.64,0c0-1.78,0-3.57,0-5.36,0-.66,0-1.32,0-2a.68.68,0,0,0-.29-.63L43,29l-1.1-.86-2.3,1.79L27.15,39.61a.65.65,0,0,0-.31.57q0,10.5,0,21v.34h2.31V53.83a.83.83,0,1,1,1.65,0v7.68H56.86V54.28c0-.11,0-.22,0-.33a.84.84,0,0,1,.81-.91.85.85,0,0,1,.83.93c0,.26,0,.52,0,.78v6.79h.41c1,0,1.95,0,2.93,0a1.11,1.11,0,0,1,1.12.58v1.08Zm3.33-23.74.31-.23,16.14-12.6c.62-.48.87-.49,1.49,0l16.14,12.6.29.22,1.79-1.79-19-14.81-19,14.84ZM56,31.8V25.69H52.91v3.52a.33.33,0,0,0,.12.24Z"
              fill="#05d8e7"
            />
            <path
              d="M41.88,38.94h7.66c.77,0,1.06.28,1.06,1V55.39c0,.74-.29,1-1,1H34.13c-.71,0-1-.29-1-1V39.93c0-.7.3-1,1-1ZM41,46.84V40.62H34.79v6.22Zm1.71-6.23v6.21h6.22V40.61ZM34.8,48.52v6.22H41V48.52Zm7.9,6.22h6.22V48.53H42.7Z"
              fill="#05d8e7"
            />
            <path
              d="M58.51,51a.82.82,0,1,1-.82-.8A.83.83,0,0,1,58.51,51Z"
              fill="#05d8e7"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const SearchButton = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3">
      <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="24.55"
            x2="49.98"
            y2="75.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M53.75,24.55h2.08a3.39,3.39,0,0,0,.44.08,18.82,18.82,0,0,1,6.57,1.57A20.18,20.18,0,0,1,75.13,42.06a19.63,19.63,0,0,1-1.38,11.17,20.32,20.32,0,0,1-11.53,11.2,19.35,19.35,0,0,1-9.79,1.2,20.47,20.47,0,0,1-7.65-2.58c-.78-.45-1-.41-1.64.23-3.33,3.33-6.64,6.66-10,10a9.34,9.34,0,0,1-1.79,1.41,4.29,4.29,0,0,1-5.71-.75,5.05,5.05,0,0,1-1.11-2.17V70.54c.38-2,1.68-3.31,3-4.65,2.88-2.85,5.74-5.73,8.61-8.59,1.19-1.2,1.29-1,.39-2.76A19.1,19.1,0,0,1,35,39.37c2.58-8.12,8.17-13,16.59-14.54C52.3,24.7,53,24.64,53.75,24.55ZM70,45.18A15.24,15.24,0,1,0,54.74,60.41,15.23,15.23,0,0,0,70,45.18Zm-22.7-9.41a13.2,13.2,0,0,0-3.93,5.15,2.11,2.11,0,0,0,3,2.74,3,3,0,0,0,1.14-1.46,9,9,0,0,1,7.72-5.11,9.78,9.78,0,0,1,4.17.73,2.08,2.08,0,0,0,2.7-1.26,2.11,2.11,0,0,0-1.25-2.72,14,14,0,0,0-5.25-1A13.37,13.37,0,0,0,47.32,35.77Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const UploadButton = () => {
  return (
    <div className="flex flex-col justify-center items-center  py-3">
      <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="27.16"
            x2="49.98"
            y2="72.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M24.55,51a2.83,2.83,0,0,1,1.37-1.8,2.51,2.51,0,0,1,3.59,1.59,4.68,4.68,0,0,1,.1,1v10a5.76,5.76,0,0,0,6,6H64.35a5.75,5.75,0,0,0,6-6c0-3.35,0-6.71,0-10.07a2.57,2.57,0,0,1,1.59-2.57,2.52,2.52,0,0,1,3.46,2.32c0,1,0,2,0,2.93v7.4A10.85,10.85,0,0,1,64.3,72.78c-9.55,0-19.09,0-28.64,0a10.55,10.55,0,0,1-10.13-6.38,19.36,19.36,0,0,1-.88-3c0-.14-.07-.28-.1-.43Zm32.64-7.82h4.32A2.31,2.31,0,0,0,63,42.69a2.12,2.12,0,0,0,0-3.33L51.66,28a2.14,2.14,0,0,0-3.35,0q-5.72,5.7-11.4,11.41a2.74,2.74,0,0,0-.61.84,2.07,2.07,0,0,0,2,2.93c1.51,0,3,0,4.52,0h.56v15a2.83,2.83,0,0,0,3.07,3.1h7.15a3.65,3.65,0,0,0,.88-.08,2.82,2.82,0,0,0,2.17-3v-15Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const DownloadButton = ({ onClick }) => {
  return (
    <div
      className="flex flex-col justify-center items-center  py-3"
      onClick={onClick}
    >
      <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="27.73"
            x2="49.98"
            y2="72.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M75.4,39.25a8.49,8.49,0,0,1-1.15,1.24Q68.34,45,62.38,49.4a2.67,2.67,0,0,1-1.14.54,1.55,1.55,0,0,1-1.72-1.66c0-1.35,0-2.71,0-4.07v-.59H59c-1.74,0-3.48,0-5.22,0a14.13,14.13,0,0,0-13.14,8c-.11.21-.21.42-.32.62a1.58,1.58,0,0,1-3-.79,17.53,17.53,0,0,1,7.61-14.33,15.61,15.61,0,0,1,7.37-2.84c2.12-.2,4.26-.16,6.4-.23h.86v-.54c0-1.34,0-2.68,0-4a1.63,1.63,0,0,1,.87-1.6,1.59,1.59,0,0,1,1.81.22c4.16,3.12,8.32,6.23,12.46,9.37a4.37,4.37,0,0,1,.75.94Zm-44.46-2h9.47V30.9H28.13a3.24,3.24,0,0,0-3.58,3.56V68.68a3.22,3.22,0,0,0,3.54,3.54H62.35a3.22,3.22,0,0,0,3.52-3.51V53.29H59.5V65.84H30.94Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const SaveButton = () => {
  return (
    <div className="flex flex-col justify-center items-center  py-3">
      <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="24.97"
            x2="49.98"
            y2="74.98"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M60,25c1.2,0,2.32,0,3.44,0a1.82,1.82,0,0,1,1.09.51q5,4.9,9.89,9.89a2,2,0,0,1,.53,1.29q0,16.61,0,33.22a5,5,0,0,1-5,5c-1.09,0-2.18,0-3.35,0V60.24a5,5,0,0,0-5.31-5.31H38.64a5,5,0,0,0-5.3,5.3V75a37.51,37.51,0,0,1-4.68-.32A4.78,4.78,0,0,1,25,70.13V30.21a5,5,0,0,1,3.74-5.06A4.72,4.72,0,0,1,29.94,25h9.77L40,25V38a3.35,3.35,0,0,0,3.61,3.59H56.34A3.35,3.35,0,0,0,60,38V25Zm3.33,49.38V60.18a1.7,1.7,0,0,0-1.91-1.92H38.6a1.71,1.71,0,0,0-1.94,1.94V74.87H63.29ZM43.36,25V38.26H56.61V25Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const SignoutButton = ({ onClick }) => {
  return (
    <div
      className="flex flex-col justify-center items-center  py-3"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="change-styling"
        viewBox="0 0 84.53 84.11"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_7" data-name="Layer 7">
            <path className="applyhere"
              d="M67.43,75.85A42.88,42.88,0,0,1,55.4,82,41.85,41.85,0,0,1,42.08,84.1V84A41.6,41.6,0,0,0,55.3,81.72a40.35,40.35,0,0,0,11.75-6.37Z"
              fill="#eff8ff"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M42.08,84.1a42.31,42.31,0,0,1-13.57-2.26A42.33,42.33,0,0,1,7,65.25,42,42,0,0,1,1.34,52.64l.58-.15A41.46,41.46,0,0,0,16.54,75.13a40.79,40.79,0,0,0,12,6.57A42,42,0,0,0,42.08,84Z"
              fill="#eff8ff"
              fillOpacity={0.7}/>
            <polygon
              points="0.58 49.07 0.58 49.06 1.21 48.96 1.21 48.97 0.58 49.07"
              fill="#eff8ff"
            />
            <path className="applyhere"
              d="M.58,49.06A42.09,42.09,0,0,1,5.09,22.11,42.63,42.63,0,0,1,25.23,3.54l.42,1A41.34,41.34,0,0,0,1.35,35.35,42,42,0,0,0,1.21,49Z"
              fill="#eff8ff"
              fillOpacity={0.7}/>
            <polygon
              points="28.65 2.22 28.66 2.22 29 3.23 28.99 3.23 28.65 2.22"
              fill="#eff8ff"
            />
            <path className="applyhere"
              d="M28.66,2.22A41.88,41.88,0,0,1,42.39,0,42.58,42.58,0,0,1,56.13,2.33a44.42,44.42,0,0,1,6.4,2.82A43.44,43.44,0,0,1,68.37,9a42.39,42.39,0,0,1,9.42,10.3l-1.22.78a42.08,42.08,0,0,0-9.07-10A40.38,40.38,0,0,0,55.7,3.54,41.61,41.61,0,0,0,42.38,1.16,41.12,41.12,0,0,0,29,3.23Z"
              fill="#eff8ff"
              fillOpacity={0.7}/>
            <rect
              x="78.29"
              y="22.83"
              width="1.44"
              height="0.01"
              transform="translate(-1.51 39.58) rotate(-27.87)"
              fill="#eff8ff"
            />
            <path className="applyhere"
              d="M79.65,22.51A42.52,42.52,0,0,1,84,35.77a41.61,41.61,0,0,1-.21,13.95A41.05,41.05,0,0,1,82,56.47a37.52,37.52,0,0,1-2.94,6.33,42.59,42.59,0,0,1-8.77,10.76L69.79,73A41.7,41.7,0,0,0,82.51,49.49a43.66,43.66,0,0,0,.1-13.5,41.11,41.11,0,0,0-4.24-12.81Z"
              fill="#eff8ff"
              fillOpacity={0.7}/>
            <polygon
              points="67.44 75.85 67.43 75.85 67.05 75.35 67.06 75.35 67.44 75.85"
              fill="#eff8ff"
            />
            <circle
              className="applyhere fill-transparent"
              cx="42.09"
              cy="42.3"
              r="35.38"
              stroke="#eff8ff"
            />
            <path className="applyhere"
              d="M59.79,42.52a18,18,0,0,0-6.12-13.76,2.26,2.26,0,0,1-.21-3.47,2.21,2.21,0,0,1,3,.05,22.08,22.08,0,1,1-33.29,28C18.48,45,19,36.7,24.56,28.82a26.15,26.15,0,0,1,3-3.29,2.18,2.18,0,0,1,3.26,0,2.23,2.23,0,0,1-.28,3.25A17.67,17.67,0,1,0,59.49,45.16C59.66,44.16,59.72,43.15,59.79,42.52Z"
              fill="#1ba1e7"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M39.93,31.36c0-2.92,0-5.84,0-8.76a2.19,2.19,0,0,1,4.37-.37,5.15,5.15,0,0,1,0,.56V39.9a3.51,3.51,0,0,1-.09.92,2.18,2.18,0,0,1-2.41,1.58,2.14,2.14,0,0,1-1.88-2.12c0-3,0-6,0-8.92Z"
              fill="#1ba1e7"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const ResetButton = () => {
  return (
    <div className="flex flex-col justify-center items-center  py-3">
      <svg className="svg-responsive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.95 99.95">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            y1="22.43"
            x2="49.98"
            y2="76.36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path className="applyhere"
              d="M36.52,37.63c2.56,1.34,5.06,2.65,7.55,4a2,2,0,0,1,.76.6c.28.46-.09.91-.85,1-1.34.1-2.68.15-4,.22l-6.09.26-8.68.4c-.53,0-1.05.09-1.57.1-.84,0-1.06-.2-.9-1,.31-1.64.67-3.28,1-4.92.65-3.05,1.31-6.1,2-9.15.43-2,.84-4,1.31-6a1.1,1.1,0,0,1,.67-.66c.16-.05.56.29.64.53.93,2.6,1.81,5.21,2.71,7.82.07.2.16.39.28.66,4.78-4.62,10.33-7.58,16.94-8.12a26.06,26.06,0,0,1,19.48,6.09A26.58,26.58,0,0,1,44.4,75.62C31.59,72.51,25.28,61.48,24.55,54.18l7.2-1.3c.49-.09.65,0,.78.56A18.29,18.29,0,0,0,44.15,67.05a17.43,17.43,0,0,0,10.36.8,18.08,18.08,0,0,0,12.61-9.66,17.63,17.63,0,0,0,1.59-12.35A17.89,17.89,0,0,0,58.48,33.08a18.5,18.5,0,0,0-20.2,3C37.73,36.59,37.16,37.07,36.52,37.63Zm14.83,6.93A5.42,5.42,0,1,0,56.76,50,5.42,5.42,0,0,0,51.35,44.56Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}/>
            <path className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}/>
          </g>
        </g>
      </svg>
    </div>
  );
};
