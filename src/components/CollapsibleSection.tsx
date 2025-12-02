import { useState, ReactNode, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import style from "./../styles/CollapsibleSection.module.css";

interface CollapsibleSectionProps {
    title: string;
    children: ReactNode;
    defaultExpanded?: boolean;
    id?: string;
}

const CollapsibleSection = ({
    title,
    children,
    defaultExpanded = false,
    id,
}: CollapsibleSectionProps) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isUserToggledRef = useRef(false);

    // Ensure state persists even if component re-renders
    useEffect(() => {
        if (defaultExpanded && !isExpanded && !isUserToggledRef.current) {
            setIsExpanded(true);
        }
    }, [defaultExpanded, isExpanded]);

    const toggleExpanded = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        isUserToggledRef.current = true;
        setIsExpanded((prev) => {
            const newState = !prev;
            // Force a reflow to ensure the state is applied
            requestAnimationFrame(() => {
                if (contentRef.current) {
                    contentRef.current.offsetHeight;
                }
            });
            return newState;
        });
    };

    // Prevent content clicks from closing the section
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    // Prevent any scroll events from affecting the state
    const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    // Prevent wheel events from bubbling up
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={style.collapsibleSection} id={id}>
            <button
                ref={buttonRef}
                type="button"
                className={style.header}
                onClick={toggleExpanded}
                aria-expanded={isExpanded}
            >
                <h2 className={style.title}>{title}</h2>
                <span className={style.icon}>
                    {isExpanded ? (
                        <MdKeyboardArrowUp size={28} />
                    ) : (
                        <MdKeyboardArrowDown size={28} />
                    )}
                </span>
            </button>
            <div
                ref={contentRef}
                className={`${style.content} ${isExpanded ? style.expanded : style.collapsed}`}
                onClick={handleContentClick}
                onScroll={handleContentScroll}
                onWheel={handleWheel}
            >
                <div className={style.contentInner}>{children}</div>
            </div>
        </div>
    );
};

export default CollapsibleSection;

