// Libraries
import React, {SFC} from 'react'

const ArduinoLogo: SFC = () => {
  return (
    <svg
      width="100"
      height="100"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 720 490"
    >
      <style>
        {
          '.arduino{fill:none;stroke:#00979c;stroke-width:1}.text{fill:#00979c;stroke-width:1}'
        }
      </style>
      <path
        id="infinity"
        className="arduino"
        style={{
          strokeWidth: 59,
        }}
        d="M174 30C78.937 22.427-.942 134.8 38.361 221.95c37.952 94.4 180.989 120.13 249.159 44.42 65.88-64.55 91.33-163.57 171.52-214.629 82.03-55.96 214.21-3.125 229.75 96.429 15.62 95.33-87.06 188.19-180.27 159.93-68.71-15.53-118.15-74.15-146.28-135.77-34.52-58.97-79.65-121.804-150.05-138.385C199.68 31.108 186.82 29.987 174 30z"
      />
      <path
        id="minus"
        className="arduino"
        d="M118 165h120"
        style={{
          strokeWidth: 25,
        }}
      />
      <path
        id="plus"
        className="arduino"
        d="M486 165h100m-51-50v100"
        style={{
          strokeWidth: 32,
        }}
      />
      <path
        id="A"
        className="arduino text"
        d="M84 485l-6.4-23H37l-6.6 22.963H8.683l34.445-116.329h30.617l34.445 116.33zm-26.434-94.968l-15.31 54.115h30.44z"
      />
      <path
        id="R"
        className="arduino text"
        d="M180 485c-6.16-13.64-11.68-27.59-18.29-41.01-3.83-5.76-11.35-8.02-17.98-7.09-1.05 3.95-.25 8.16-.48 12.23V485h-21.9V368.67c16.45.38 33.02-.97 49.38 1.19 10.7 1.73 21.86 7.97 25.01 19.01 3.95 11.8 1.99 27.03-8.6 34.79-4.16 3.15-9.14 5.16-14.28 5.94 6.54 2.6 10.52 8.65 13.33 14.78 6.18 11.9 11.47 24.3 17.49 36.24 2.9 2.89 1.15 5.26-2.34 4.38H180zm-5.42-82.07c.81-7.4-5.22-14.46-12.58-15.15-6.16-1.34-12.5-.73-18.75-.87v32.85c9.21-.1 19.95 1.01 27.15-5.96 2.82-2.84 4.26-6.9 4.18-10.87z"
      />
      <path
        id="D"
        className="arduino text"
        d="M307 425c0 16.34-3.65 34.15-16.06 45.74-11.93 11.24-29.05 14.33-44.91 13.9h-26.88V368.31c13.64.1 27.28-.22 40.92.21 13.54.73 27.94 5.34 36.34 16.62 8.57 11.29 10.54 26.07 10.59 39.86zm-23.5 1.43c-.19-11.38-.97-24.42-9.68-32.82-7.29-6.93-17.82-7.17-27.29-6.97h-5.48v79.66c10 0 20.87.79 29.42-5.4 10.97-7.59 12.99-22.14 13.03-34.47z"
      />
      <path
        id="U"
        className="arduino text"
        d="M407 442c.32 14.07-4.38 29.63-16.62 37.76-14.07 8.91-32.18 8.82-47.57 3.64-11.57-4.55-19.3-16.37-19.86-28.66-1.53-13.95-.27-28-.68-42v-44.25h21.89c.2 27.67-.43 55.35.39 83 .75 7.75 6.1 15.87 14.37 16.72 8.38 1.89 19.29.1 23.24-8.51 4.66-10.13 2.5-21.52 2.98-32.29v-58.92h21.9c0 24.49.2 49.09 0 73.51z"
      />
      <path
        id="I"
        className="arduino text"
        d="M428 386v-17.89h73.518V386h-25.634v80.371h25.634v18.068H428v-18.068h25.633V386z"
      />
      <path
        id="N"
        className="arduino text"
        d="M583 485c-12.51-28.13-25.44-56.08-37.56-84.38V485H525.5V368.67h26.88c11.83 26.48 24.41 52.64 35.67 79.36.66 2.94 2.27 4.52 1.72.61v-79.97h19.93V485H583z"
      />
      <path
        id="O"
        className="arduino text"
        d="M716 426c.1 17.33-3.54 36.21-16.34 48.83-13 12.7-33.67 14.75-50.21 8.52-13.94-5.33-22.03-19.45-24.87-33.46-3.05-15.52-3.18-31.81.62-47.2 3.61-14.3 12.89-28.04 27.23-33.19 13.4-4.85 29.21-4.31 41.72 2.81 13.59 8.11 19.33 24.2 21.03 39.17.58 4.81.82 9.67.82 14.52zm-23.14 1.07c-.25-11.45-.6-23.99-7.42-33.72-6.14-8.04-18.48-9.19-27.03-4.6-9.49 5.83-11.73 17.93-12.57 28.18-.63 13.14-.81 27.06 4.89 39.23 3.41 7.57 11.95 11.53 20 10.74 8.31 0 15.54-6.02 18.24-13.68 3.27-8.28 3.81-17.35 3.89-26.15z"
      />
      <path
        id="TM"
        className="arduino text"
        d="M676.41 13.375v2.344h5.15v13.562h2.66V15.719h5.19v-2.344h-13zm14.78 0v15.906h2.43V15.719l4.29 13.562h2.4c1.37-4.447 2.73-8.896 4.1-13.343v13.343h2.4V13.375H703c-1.3 4.241-2.61 8.478-3.91 12.719-1.33-4.241-2.67-8.478-4-12.719h-3.9z"
      />
    </svg>
  )
}
/* eslint-enable */
export default ArduinoLogo
