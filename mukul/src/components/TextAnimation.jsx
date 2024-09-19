import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../App.css"; // Include your custom CSS

const TextAnimation = () => {
    const [step, setStep] = useState(1);
    const word1Ref = useRef(null);
    const word2Ref = useRef(null);
    const canBeRef = useRef(null);
    const typingRef = useRef(null);
    const word3Ref = useRef(null);
    const word4Ref = useRef(null);

    useEffect(() => {
        if (step === 1) {
            // Typing effect animation
            const text = "insurance can be simple.";
            let index = 0;
            const typingSpeed = 50; // Speed of typing effect

            const typingInterval = setInterval(() => {
                if (index < text.length) {
                    typingRef.current.innerHTML += text[index];
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => setStep(2), 500); // Move to step 2 after 0.5 sec pause
                }
            }, typingSpeed);

            return () => clearInterval(typingInterval);
        }
    }, [step]);

    useEffect(() => {
        if (step === 2) {
            const tl = gsap.timeline();
            tl.to(typingRef.current, { opacity: 0, duration: 0.5, ease: "power1.inOut" }) // fade out the entire initial line
                .set(word1Ref.current, { innerHTML: "healthcare", opacity: 0 }) // set "healthcare"
                .set(word2Ref.current, { innerHTML: "affordable", opacity: 0 }) // set "affordable"
                .set(canBeRef.current, { opacity: 1 }) // make "can be" visible again
                .to(word1Ref.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" }) // fade in "healthcare"
                .to(word2Ref.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" }, "-=0.5") // fade in "affordable"
                .set(word3Ref.current, { innerHTML: "wellness", opacity: 0 }) // set "wellness"
                .set(word4Ref.current, { innerHTML: "wholesome", opacity: 0 }) // set "wholesome"
                .to(word3Ref.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" }) // fade in "wellness"
                .to(word4Ref.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" }, "-=0.5")
                .then(() => setTimeout(() => setStep(3), 1500)); // Move to step 3 after 1.5 sec pause
        }
    }, [step]);

    useEffect(() => {
        if (step === 3) {
            gsap.to(".blinking-text span", {
                opacity: 0,
                duration: 2.5,
                repeat: 0,
                yoyo: true,
                ease: "power1.inOut",
            });
            setTimeout(() => setStep(4), 1000); // After 2 seconds, move to step 4
        }
    }, [step]);

    useEffect(() => {
        if (step === 4) {
            gsap.to(".blinking-text span", {
                opacity: 0,
                duration: 2.5,
                repeat: 0,
                yoyo: true,
                ease: "power1.inOut",
            });
            setTimeout(() => setStep(5), 1000); // After 2 seconds, move to step 5
        }
    }, [step]);

    return (
        <div className="text-animation-container z-10">
            <div className="text-wrapper flex justify-center items-center h-screen">
                {step === 1 && (
                    <div className="typing-effect" ref={typingRef}></div>
                )}

                {step === 2 && (
                    <div className="revealed-text">
                        <span ref={word1Ref} className="changing-word">Insurance</span>
                        <span ref={canBeRef} className="fixed-text">can be</span>
                        <span ref={word2Ref} className="changing-word">Simple!!</span>
                    </div>
                )}

                {step === 3 && (
                    <div className="blinking-text">
                        <span>Do you think it's possible ?</span>
                    </div>
                )}

                {step === 4 && (
                    <div className="blinking-text">
                        <span>Let's Experience it Together!!</span>
                    </div>
                )}

                {step === 5 && (
                    <div className="final-step">
                        <button className="play-game-btn">Play Game</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextAnimation;
