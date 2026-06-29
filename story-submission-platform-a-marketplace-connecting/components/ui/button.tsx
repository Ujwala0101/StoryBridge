import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
const buttonVariants = cva("focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { primary: "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5", gold: "bg-gold text-slate-950 shadow-gold hover:-translate-y-0.5", secondary: "glass text-foreground hover:-translate-y-0.5 hover:bg-muted", ghost: "text-foreground hover:bg-muted" }, size: { sm: "min-h-9 px-4 text-xs", md: "min-h-11 px-5", lg: "min-h-12 px-6 text-base" } }, defaultVariants: { variant: "primary", size: "md" } });
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;
export function Button({ className, variant, size, ...props }: ButtonProps) { return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />; }
export function ButtonLink({ href, className, variant, size, ...props }: React.ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) { return <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...props} />; }
