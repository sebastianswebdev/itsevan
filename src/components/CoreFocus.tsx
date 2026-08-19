import { Icon, type IconName } from "@/components/ui/icons";
import { coreFocus } from "@/data/technologies";

export function CoreFocus({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="glass-strong rounded-3xl p-6 shadow-[0_24px_60px_-24px_rgba(4,6,13,0.9)]">
        <p className="text-sm font-semibold text-white">My Core Focus</p>
        <ul className="mt-4 space-y-3">
          {coreFocus.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-accent-400">
                <Icon name={item.icon as IconName} className="h-4 w-4" />
              </span>
              <span className="text-sm text-slate-300">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
