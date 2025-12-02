import { ReactNode, useRef, useCallback, useContext } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import portfolioContext from "../store/portfolioStore";

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
    const context = useContext(portfolioContext);
    const contentRef = useRef<HTMLDivElement>(null);

    // Use title or id as unique key for this section
    const sectionKey = id || title;

    // Get current state from context, defaulting to defaultExpanded if not set
    const isExpanded = context?.getCollapsibleSectionState
        ? context.getCollapsibleSectionState(sectionKey, defaultExpanded)
        : defaultExpanded;

    const toggleExpanded = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (context?.toggleCollapsibleSection) {
            context.toggleCollapsibleSection(sectionKey, defaultExpanded);
        }
    }, [context, sectionKey, defaultExpanded]);

    // Prevent content clicks from closing the section
    const handleContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    // Prevent any scroll events from affecting the state
    const handleContentScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    // Prevent wheel events from bubbling up
    const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    return (
        <div className="w-full border-b-[0.5px] border-[var(--dark-bg)]" id={id}>
            <button
                type="button"
                className="w-full flex justify-between items-center py-8 px-16 bg-transparent border-none cursor-pointer transition-colors duration-200 text-[var(--dark-bg)] select-none touch-manipulation hover:bg-black/5 max-[1000px]:py-6 max-[1000px]:px-8 max-[700px]:py-6 max-[700px]:px-4"
                onClick={toggleExpanded}
                aria-expanded={isExpanded}
            >
                <h2 className="text-[2.5rem] font-black m-0 text-left max-[1000px]:text-[2rem] max-[700px]:text-[1.7rem] max-[500px]:text-[1.5rem]">{title}</h2>
                <span className="flex items-center transition-transform duration-300 text-[var(--dark-bg)] max-[500px]:text-[1.2rem]">
                    {isExpanded ? (
                        <MdKeyboardArrowUp size={28} />
                    ) : (
                        <MdKeyboardArrowDown size={28} />
                    )}
                </span>
            </button>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ease-out will-change-[max-height,padding] select-text ${isExpanded
                    ? "max-h-[50000px] py-8 px-16 pb-16 visible max-[1000px]:py-6 max-[1000px]:px-8 max-[1000px]:pb-12 max-[700px]:py-6 max-[700px]:px-4 max-[700px]:pb-8"
                    : "max-h-0 px-16 invisible max-[1000px]:px-8 max-[700px]:px-4"
                    }`}
                onClick={handleContentClick}
                onScroll={handleContentScroll}
                onWheel={handleWheel}
            >
                <div className={`transition-opacity duration-300 ease-out delay-100 ${isExpanded ? "opacity-100" : "opacity-0"}`}>{children}</div>
            </div>
        </div>
    );
};

export default CollapsibleSection;

