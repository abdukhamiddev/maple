import React from "react";
import FeatureItem from "./FeatureItem";

const Features = () => {
	return (
		<div className="feature-container">
			<FeatureItem
				pText="Our facial recognition system cross-references faces
        attempting to gain access into the Heatrow Estate with
        the register database of residents. We value your safety
        so no one gets in unless you say so."
				imgSrc="/svg/faces-icon.svg"
				h2TextFirst="Familiar"
				h2TextSecond="Faces"
			/>
			<FeatureItem
				imgSrc="/svg/eye-icon.svg"
				pText="	Our infrared (IR) outdoor bullet cameras are immune to
        whatever or lighting, and come in different resolutions
        and lenses. Sit back anywhere in the world and record
        everything going on in and around your home with crisp
        clear audio."
				h2TextFirst="Eye in the"
				h2TextSecond="Sky"
			/>
			<FeatureItem
				imgSrc="/svg/anpr-icon.svg"
				pText="	Our Automatic Number Plate Recognition system scans
        every plate trying to gain access into the Heatrow
        estate and cross references with our database of
        registered plates. Our advances algorithms can decode
        even blurry and dark images."
				h2TextFirst="ANPR"
				h2TextSecond=""
			/>
			<FeatureItem
				imgSrc="/svg/smart-icon.svg"
				pText="	Save up to 50% more energy with our smart
        energy-consumption monitoring. Enjoy smart system in
        your home that help you dim lights, and even turn off
        home appliances when not in use. Even water leakages are
        detected in real-time if you ever leave the tap running."
				h2TextFirst="Smart"
				h2TextSecond="Savings"
			/>
			<FeatureItem
				imgSrc="/svg/wifi-icon.svg"
				h2TextFirst="Fibre to "
				h2TextSecond="the Home"
				pText="	Our finer-optic cables are setup around the estate to
        deliver lightening fast internet whenever you need it at
        the comfort of your home. We present to you the future
        of broadband."
			/>
			<FeatureItem
				imgSrc="/svg/door-icon.svg"
				h2TextFirst="The Walls"
				h2TextSecond="Have ears"
				pText="	Lock the doors, open the windows control the lights, and
        much more without lifting a finger, The tongue really is
        powerful. Go on, Speak, your home us listening."
			/>
		</div>
	);
};

export default Features;
