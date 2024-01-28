const solution = (angle) => {
 return angle<90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3: 4
}
// const solution = (angle) => {
//     if(0<angle && angle<90) return 1;
//     else if (angle === 90) return 2;
//     else if(90< angle && angle<180) return 3;
//     else if(angle === 180) return 4;
// }

// switch문은 정확한 값을 비교할 때만 용이함. 이외에는 ifelse
// switch(angle){
//         case 0 < angle < 90:
//             return 1;
//             break;
//         case angle === 90:
//             return 2;
//             break;
//         case 90 < angle < 180:
//             return 3;
//             break;
//         case angle === 180:
//             return 4;
//             break;
//      }

