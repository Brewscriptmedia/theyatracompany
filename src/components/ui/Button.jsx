export default function Button({
    children,
    href = "#",
    variant = "primary"
}){
    const styles = {
        primary: "bg-amber-500 hover:bg-amber-600 text-white",
        secondary: "border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
    };

    return (
        <a href= {href} className = {`${styles[variant]} inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300`}>
            {children}
        </a>
    );
}