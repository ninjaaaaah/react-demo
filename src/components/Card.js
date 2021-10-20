import {
    motion,
    useTransform,
    useMotionValue,
    AnimatePresence,
} from "framer-motion";
import React, { useState } from "react";
import Profile from "./Profile";
import Details from "./Details";

export const Card = ({ profile, index, remove }) => {
    const [popped, setPopped] = useState(false);
    const [isToggled, setToggled] = useState(false);
    const swipeConfidenceThreshold = 1000000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const x = useMotionValue(0);
    const xInput = [-300, 0, 300];
    const rotate = useTransform(x, xInput, [-10, 0, 10]);

    const variants = {
        enter: () => {
            return {
                opacity: 1,
                originX: 0.5,
                originY: 1.5,
                scale: 0.2,
                opacity: 0,
            };
        },
        exit: () => {
            return {
                opacity: 0,
            };
        },
    };

    const drag = (e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            remove();
            setPopped(true);
        } else if (swipe > swipeConfidenceThreshold) {
            remove();
            setPopped(true);
        }
    };

    const toggle = () => {
        setToggled(!isToggled);
    };

    return (
        <AnimatePresence>
            {!popped && (
                <>
                    <motion.div
                        style={{
                            x,
                            rotate,
                            zIndex: -index,
                        }}
                        animate={{
                            scale: 1 - 0.2 * index,
                            opacity: 1 - 0.2 * index,
                        }}
                        variants={variants}
                        initial="enter"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.1 },
                        }}
                        drag
                        dragConstraints={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        hover={{ cursor: `pointer` }}
                        dragElastic={1}
                        onDragEnd={drag}
                        onClick={toggle}
                        className="card"
                    >
                        <motion.div
                            className="card front"
                            animate={{
                                rotateY: !isToggled ? 0 : 180,
                            }}
                        >
                            <Profile data={profile} />
                        </motion.div>
                        <motion.div
                            className="card back"
                            animate={{
                                rotateY: !isToggled ? -180 : 0,
                            }}
                        >
                            <Details data={profile} />
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
