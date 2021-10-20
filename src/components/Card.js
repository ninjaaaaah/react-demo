import {
    motion,
    useTransform,
    useMotionValue,
    AnimatePresence,
} from "framer-motion";
import React, { useState } from "react";
import Profile from "./Profile";

export const Card = ({ profile, index, remove }) => {
    const [popped, setPopped] = useState(false);
    const swipeConfidenceThreshold = 1000000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const x = useMotionValue(0);
    const xInput = [-300, 0, 300];
    //   const background = useTransform(x, xInput, [
    //     "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    //     "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    //     "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    //   ]);
    const rotate = useTransform(x, xInput, [-10, 0, 10]);

    const variants = {
        enter: () => {
            return {
                opacity: 1,
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

    return (
        <AnimatePresence>
            {!popped && (
                <motion.div
                    style={{
                        x,
                        rotate,
                        originX: 0.5,
                        originY: 1.5,
                        scale: 1 - 0.2 * index,
                        opacity: 1 - 0.2 * index,
                        zIndex: -index,
                    }}
                    variants={variants}
                    initial="load"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={1}
                    onDragEnd={drag}
                    className="card"
                >
                    {profile && <Profile data={profile} />}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
