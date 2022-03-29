interface FeatureItemProps {
	h2TextFirst: string;
	h2TextSecond: string;
	pText: string;
	imgSrc: string;
}

import React from "react";

const FeatureItem = ({
	h2TextFirst,
	h2TextSecond,
	pText,
	imgSrc,
}: FeatureItemProps) => {
	return (
		<div className="feature">
			<img src={imgSrc} alt="face" />
			<h2 className="heading-h2">
				{h2TextFirst}
				<br />
				{h2TextSecond}
			</h2>
			<p className="paragraph">{pText}</p>
		</div>
	);
};

export default FeatureItem;
