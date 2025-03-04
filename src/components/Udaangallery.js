// MODULES //
import { useEffect, useRef } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// UTILS //
import StrapiImage from "@/utils/StrapiImage";
// STYLES //
import styles from "@/styles/components/Udaangallery.module.scss";
import "lightgallery/css/lightgallery.css"; // Core LightGallery CSS
import "lightgallery/css/lg-thumbnail.css"; // Thumbnails plugin
import "lightgallery/css/lg-zoom.css"; // Zoom plugin
// IMAGES //
import img_one from "../../public/img/our-impact/csr/img_one.jpg";
import img_two from "../../public/img/our-impact/csr/img_two.jpg";
import img_three from "../../public/img/our-impact/csr/img_three.jpg";
import img_four from "../../public/img/our-impact/csr/img_four.jpg";
import img_five from "../../public/img/our-impact/csr/img_five.jpg";
import Zoom from "../../public/img/careers/zoom.png";
// DATA //

/** Udaangallery Component */
export default function Udaangallery({ imageData }) {
	const lightGalleryRef = useRef(null);

	const drivingOne = [
		{ thumbnail: img_one.src, full: img_one.src },
		{ thumbnail: img_two.src, full: img_two.src },
		{ thumbnail: img_three.src, full: img_three.src },
		{ thumbnail: img_four.src, full: img_four.src },
		{ thumbnail: img_five.src, full: img_five.src },

		// { thumbnail: img_one.src, full: img_one.src },
		// { thumbnail: img_two.src, full: img_two.src },
		// { thumbnail: img_three.src, full: img_three.src },
		// { thumbnail: img_four.src, full: img_four.src },
		// { thumbnail: img_five.src, full: img_five.src },

		// { thumbnail: img_one.src, full: img_one.src },
		// { thumbnail: img_two.src, full: img_two.src },
		// { thumbnail: img_three.src, full: img_three.src },
		// { thumbnail: img_four.src, full: img_four.src },
		// { thumbnail: img_five.src, full: img_five.src },
		// { thumbnail: img_one.src, full: img_one.src },
		// { thumbnail: img_two.src, full: img_two.src },
		// { thumbnail: img_three.src, full: img_three.src },
		// { thumbnail: img_four.src, full: img_four.src },
		// { thumbnail: img_five.src, full: img_five.src },
	];
	const galleryImages = imageData?.map((img) => ({
		src: `${StrapiImage(img)?.url || " "}`,
		thumbnail: `${StrapiImage(img)?.url || " "}`,
	}));

	return (
		<div className="">
			<div className={`${styles.gallery_section} pb_80`}>
				<div className={`${styles.driving_img_box} f_w_j`}>
					{galleryImages?.map((item, colIndex) => (
						<div key={colIndex} className={`${styles.item_img}`}>
							<LightGallery
								elementClassNames="custom-lightgallery"
								onInit={(lg) => (lightGalleryRef.current = lg.instance)}
								speed={500}
								plugins={[lgThumbnail, lgZoom]}
							>
								<a data-src={item.src}>
									<img
										src={item.src} // Thumbnail image
										className="b_r_10"
										alt={`Image ${colIndex + 1}`}
									/>
								</a>
							</LightGallery>
							<img src={Zoom.src} className={`${styles.zoom}`} alt="Zoom" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
