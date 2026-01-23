import { cn } from "@/lib/utils";

const CardsComponent = ({
  title,
  description,
  buttons,
  children,
  className,
  headerActions,
}: {
  title?: string;
  description?: string;
  buttons: { label: string; icon: any; onClick: () => void }[];
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("rounded-4xl p-5 flex flex-col w-full relative", className)}
    >
      {/* Header Row */}
      {title && description && (
        <div className="flex justify-between items-start mb-5 relative z-20">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <p className="text-[11px] text-gray-400 mt-0.5">{description}</p>
          </div>
          {headerActions ? (
            <div className="flex flex-row gap-2">{headerActions}</div>
          ) : (
            <div className="flex flex-row gap-2">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className="p-3 bg-white text-gray-700 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                >
                  {button.label}
                  {button.icon && button.icon}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default CardsComponent;
