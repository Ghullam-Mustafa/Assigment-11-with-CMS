// import { urlFor } from "@/app/sanity/client";
// import Image from "next/image";


// export default function ImageCard(props) {
//     return (
//         <div className="facilities-col">
//             <Image width={300} height={300} src={urlFor(best-courses.image)} alt="" />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </div>
//     );
// }



import { urlFor } from "@/app/sanity/client";
import Image from "next/image";

export default function ImageCard(props) {
    return (
        <div className="facilities-col">
            <Image width={300} height={300} src={urlFor(props.src).url()} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}
