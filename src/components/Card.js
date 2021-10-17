import { motion, useTransform, useMotionValue } from "framer-motion";
import React, { useState } from "react";
import Profile from "./Profile";

export const Card = ({ profile, animate, index, remove }) => {
    const [popped, setPopped] = useState(false);

    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    //   const background = useTransform(x, xInput, [
    //     "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    //     "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    //     "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    //   ]);
    const rotate = useTransform(x, xInput, [-10, 0, 10]);
    const opacity = useTransform(x, xInput, [0, 1, 0]);

    const drag = () => {
        let xPos = x.get();
        if (Math.abs(xPos) > 300 && !popped) {
            remove();
            setPopped(true);
        }
    };

    return (
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
            animate={animate}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDrag={drag}
            className="card"
        >
            {profile && <Profile data={profile} />}
        </motion.div>
    );
};
