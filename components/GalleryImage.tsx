/* eslint-disable @next/next/no-img-element */

interface ImageProps {
	imgUrl: string;
	altText: string;
}
const GalleryImage = ({ imgUrl, altText }: ImageProps) => {
	return (
		<div className="img-wrapper">
			<img src={imgUrl} alt={altText} className="img-gallery" />
		</div>
	);
};

export default GalleryImage;
