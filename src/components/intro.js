// MODULES //

// COMPONENTS //
import ContentFromCms from "@/components/ContentFromCms";

// SECTIONS //

// PLUGINS //
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// UTILS //

// STYLES //
import styles from "@/styles/components/Intro.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function Intro() {
	const lottieAnimations = [{ src: "/lottie/loading2.json" }];
	return (
		<div className={styles.Intro}>
			<div className={styles.Intro}>
				<DotLottieReact
					src={lottieAnimations[0].src}
					autoplay
					loop
					renderer="svg"
				/>
			</div>
		</div>
	);
}
