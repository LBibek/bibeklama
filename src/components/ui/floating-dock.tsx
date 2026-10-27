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

const isItemActive = (itemHref: string, currentActive?: string) => {
  if (!currentActive) return false;
  const cleanItem = itemHref.replace("#", "").split("?")[0];
  const cleanActive = currentActive.replace("#", "").split("?")[0];

  if (cleanItem === cleanActive) return true;
  if (
    (cleanItem === "articles" || cleanItem === "blog") &&
    (cleanActive === "articles" || cleanActive === "blog")
  ) {
    return true;
  }
  return false;
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  mode = "toggle",
  activeHref,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  mode?: "toggle" | "inline";
  activeHref?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        activeHref={activeHref}
      />
      {mode === "inline" ? (
        <FloatingDockMobileInline
          items={items}
          className={mobileClassName}
          activeHref={activeHref}
        />
      ) : (
        <FloatingDockMobile
          items={items}
          className={mobileClassName}
          activeHref={activeHref}
        />
      )}
    </>
  );
};

const FloatingDockMobileInline = ({
  items,
  className,
  activeHref,
}: {
  items: DockItem[];
  className?: string;
  activeHref?: string;
}) => {
  return (
    <div
      className={cn(
        "flex lg:hidden flex-wrap items-center justify-center gap-2 max-w-full px-2 py-2.5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-xl",
        className
      )}
    >
      {items.map((item) => {
        const isActive = isItemActive(item.href, activeHref);
        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95 relative",
              isActive
                ? "bg-cyan-500/25 border border-cyan-400 text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.6)] ring-1 ring-cyan-400/50"
                : "bg-white/5 border border-white/10 hover:border-cyan-400/50 text-neutral-300 hover:text-white"
            )}
            title={item.title}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {item.icon}
            </div>
            {isActive && (
              <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            )}
          </Link>
        );
      })}
    </div>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  activeHref,
}: {
  items: DockItem[];
  className?: string;
  activeHref?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block lg:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute right-0 top-full mt-3 flex flex-col gap-1.5 p-3 rounded-2xl bg-neutral-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl z-50 min-w-[210px]"
          >
            {items.map((item, idx) => {
              const isActive = isItemActive(item.href, activeHref);
              return (
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
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-xl transition-all text-xs font-medium",
                      isActive
                        ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                        : "text-neutral-300 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={cn("w-4 h-4 flex items-center justify-center shrink-0", isActive ? "text-cyan-300" : "text-neutral-400")}>
                        {item.icon}
                      </div>
                      <span>{item.title}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
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
  activeHref,
}: {
  items: DockItem[];
  className?: string;
  activeHref?: string;
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
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          isActive={isItemActive(item.href, activeHref)}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
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
        className={cn(
          "aspect-square rounded-full flex items-center justify-center relative group transition-all duration-300",
          isActive
            ? "bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-purple-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.7)] ring-2 ring-cyan-400/40 scale-105"
            : "bg-white/5 hover:bg-white/15 border-white/10 hover:border-cyan-400/60 text-neutral-300 hover:text-white"
        )}
      >
        {/* Active Scroll Glow Beacon */}
        {isActive && (
          <motion.span
            layoutId="activeDockGlow"
            className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee,0_0_16px_#22d3ee] ring-2 ring-cyan-300/60 animate-pulse pointer-events-none z-10"
          />
        )}

        {/* Tooltip */}
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
          className={cn(
            "flex items-center justify-center transition-colors",
            isActive ? "text-cyan-200 font-bold" : "text-neutral-300 group-hover:text-white"
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
