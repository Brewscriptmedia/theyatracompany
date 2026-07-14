import Link from "next/link";

export default function Button({
    children,
    href = "#",
    variant = "primary"
}){
    const styles = {
        primary: "bg-amber-500 hover:bg-amber-600 text-white",
        secondary: "border border-white text-white hover:bg-white hover:text-slate-900"
    };

    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center gap-2 rounded-x1 px-7 py-4 font-semibold transition duration-300 ${variant[variant]}`}
            >
                {children}
            </Link>
    );
}