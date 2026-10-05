"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  mode = "toggle",
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  mode?: "toggle" | "inline";
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {mode === "inline" ? (
        <FloatingDockMobileInline items={items} className={mobileClassName} />
      ) : (
        <FloatingDockMobile items={items} className={mobileClassName} />
      )}
    </>
  );
};

const FloatingDockMobileInline = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex lg:hidden flex-wrap items-center justify-center gap-2 max-w-full px-2 py-2.5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-xl",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all active:scale-95"
          title={item.title}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block lg:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute right-0 top-full mt-3 flex flex-col gap-2 p-3 rounded-2xl bg-neutral-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl z-50 min-w-[200px]"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 10,
                  transition: {
                    delay: idx * 0.03,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.03 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium"
                >
                  <div className="w-5 h-5 flex items-center justify-center text-cyan-400 shrink-0">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-neutral-900/90 border border-white/15 flex items-center justify-center text-neutral-200 hover:text-white hover:border-white/30 backdrop-blur-md transition-all shadow-lg shadow-black/40"
        aria-label="Toggle Navigation Dock"
      >
        {open ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-neutral-300" />}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden lg:flex h-12 items-center gap-2 rounded-full bg-neutral-900/85 border border-white/15 px-3 backdrop-blur-xl shadow-2xl shadow-black/60",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-120, 0, 120], [36, 52, 36]);
  const heightTransform = useTransform(distance, [-120, 0, 120], [36, 52, 36]);

  const widthTransformIcon = useTransform(distance, [-120, 0, 120], [17, 24, 17]);
  const heightTransformIcon = useTransform(distance, [-120, 0, 120], [17, 24, 17]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-400/60 flex items-center justify-center relative group transition-colors"
      >
        {/* Prominent, Clearly Visible Tooltip Appearing Directly Below Dock Icons */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -4, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -4, x: "-50%" }}
              className="px-3 py-1 whitespace-nowrap rounded-lg bg-neutral-950/95 border border-cyan-500/30 text-cyan-300 font-semibold absolute left-1/2 top-full mt-3 w-fit text-[11px] shadow-2xl backdrop-blur-xl pointer-events-none z-50 tracking-wide"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-neutral-300 group-hover:text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
