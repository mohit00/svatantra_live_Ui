/* eslint-disable require-jsdoc */
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
import "lightgallery/css/lightgallery.css"; // Core LightGallery CSS
import "lightgallery/css/lg-thumbnail.css"; // Thumbnails plugin
import "lightgallery/css/lg-zoom.css"; // Zoom plugin
import styles from "@/styles/sections/Gallery.module.scss";

// IMAGES //
import img_one from "../../public/img/our-impact/csr/img_one.jpg";
import img_two from "../../public/img/our-impact/csr/img_two.jpg";
import img_three from "../../public/img/our-impact/csr/img_three.jpg";
import img_four from "../../public/img/our-impact/csr/img_four.jpg";
import img_five from "../../public/img/our-impact/csr/img_five.jpg";
import Zoom from "../../public/img/careers/zoom.png";

// DATA //

/** DummyComponent Component */
export default function GalleryComponent({ GalleryList }) {
	const lightGalleryRef = useRef(null);

	// useEffect(() => {
	// 	return () => {
	// 		if (lightGalleryRef.current) {
	// 			lightGalleryRef.current.destroy();
	// 		}
	// 	};
	// }, []);
	const drivingOne = [
		{ thumbnail: img_one.src, full: img_one.src },
		{ thumbnail: img_two.src, full: img_two.src },
		{ thumbnail: img_three.src, full: img_three.src },
		{ thumbnail: img_four.src, full: img_four.src },
		{ thumbnail: img_five.src, full: img_five.src },
		{ thumbnail: img_one.src, full: img_one.src },
		{ thumbnail: img_two.src, full: img_two.src },
		{ thumbnail: img_three.src, full: img_three.src },
		{ thumbnail: img_four.src, full: img_four.src },
		{ thumbnail: img_five.src, full: img_five.src },
		{ thumbnail: img_one.src, full: img_one.src },
		{ thumbnail: img_two.src, full: img_two.src },
		{ thumbnail: img_three.src, full: img_three.src },
		{ thumbnail: img_four.src, full: img_four.src },
		{ thumbnail: img_five.src, full: img_five.src },
		{ thumbnail: img_one.src, full: img_one.src },
		{ thumbnail: img_two.src, full: img_two.src },
		{ thumbnail: img_three.src, full: img_three.src },
		{ thumbnail: img_four.src, full: img_four.src },
		{ thumbnail: img_five.src, full: img_five.src },
	];

	// console.log(GalleryList, "Gallery");
	return (
		<div className={`${styles.gallery} pb_80`}>
			<div className="container">
				<h2 className="section_title">Our progress at a glance</h2>
				<p className="text_md pt_10">
					Browse through the powerful visuals that bring our stories to life.
				</p>
				<div className={`${styles.gallery_section} pt_40`}>
					{/* <div className={`${styles.driving_img_box} f_w_j`}>
						{drivingOne.map((item, colIndex) => (
							<div key={colIndex} className={`${styles.item_img}`}>
								<LightGallery
									elementClassNames="custom-lightgallery"
									onInit={(lg) => (lightGalleryRef.current = lg.instance)}
									speed={500}
									plugins={[lgThumbnail, lgZoom]}
								>
									<a data-src={item.full}>
										<img
											src={item.full} // Thumbnail image
											className="b_r_10"
											alt={`Image ${colIndex + 1}`}
										/>
									</a>
								</LightGallery>
								<img src={Zoom.src} className={`${styles.zoom}`} alt="Zoom" />
							</div>
						))}
					</div> */}

					<LightGallery
						onInit={(lg) => (lightGalleryRef.current = lg.instance)}
						speed={500}
						plugins={[lgThumbnail, lgZoom]}
						elementClassNames={`${styles.driving_img_box} f_w_j custom-lightgallery`}
					>
						{GalleryList.data.gallery.map((item, colIndex) => (
							<div
								data-src={StrapiImage(item.image)?.url}
								key={colIndex}
								className={`${styles.item_img}`}
							>
								<img
									// src={item.full} // Thumbnail image
									src={StrapiImage(item.image)?.url}
									className="b_r_10"
									alt={`Image ${colIndex + 1}`}
								/>
								<img src={Zoom.src} className={`${styles.zoom}`} alt="Zoom" />
							</div>
						))}
					</LightGallery>

					{/* end */}
				</div>
			</div>
		</div>
	);
}
