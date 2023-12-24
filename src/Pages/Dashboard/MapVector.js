// import React from "react";
// import { VectorMap } from "react-jvectormap";
// import "../Maps/jquery-jvectormap.scss";

// const Vectormap = (props) => {
//   const map = React.createRef(null);

//   const markers = [
//     {
//       latLng: [28.41425509072697, 45.954989851013536],
//       name: "Hafar al-Batin, Saudi Arabia",
//       config: { label: "Hafar al-Batin" }, // Specify label for the marker
//     },
//   ];

//   return (
//     <>
//       <div style={{ width: props.width, height: 300 }}>
//         <VectorMap
//           map={props.value}
//           backgroundColor="transparent"
//           ref={map}
//           containerStyle={{
//             width: "100%",
//             height: "80%",
//           }}
//           regionStyle={{
//             initial: {
//               fill: props.color,
//               stroke: "none",
//               "stroke-width": 0,
//               "stroke-opacity": 0,
//             },
//             hover: {
//               "fill-opacity": 0.8,
//               cursor: "pointer",
//             },
//             selected: {
//               fill: "#2938bc", // What color clicked country will be
//             },
//             selectedHover: {},
//           }}
//           containerClassName="map"
//           markers={markers} // Add markers for pin locations
//           markerStyle={{
//             initial: {
//               fill: "red", // Pin icon color
//               stroke: "#383f47", // Pin icon border color
//             },
//             hover: {
//               fill: "#FFD700", // Pin icon color on hover
//               stroke: "#383f47", // Pin icon border color on hover
//             },
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default Vectormap;

import React from "react";
import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";

const Vectormap = (props) => {
  const map = React.createRef(null);

  const markers = [
    {
      latLng: [28.41425509072697, 45.954989851013536],
      name: "Hafar al-Batin, Saudi Arabia",
      config: { label: "Hafar al-Batin" }, // Specify label for the marker
    },
  ];

  return (
    <>
      <div style={{ width: props.width, height: 300 }}>
        <VectorMap
          map={props.value}
          backgroundColor="transparent"
          ref={map}
          containerStyle={{
            width: "100%",
            height: "80%",
          }}
          regionStyle={{
            initial: {
              fill: props.color,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc",
            },
            selectedHover: {},
          }}
          containerClassName="map"
          markers={markers}
          markerStyle={{
            initial: {
              fill: "red",
              stroke: "#383f47",
            },
            hover: {
              fill: "#FFD700",
              stroke: "#383f47",
            },
          }}
        />
      </div>
    </>
  );
};

export default Vectormap;
