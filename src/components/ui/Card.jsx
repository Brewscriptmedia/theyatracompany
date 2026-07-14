export default function Card({children}){
    return (
        <div className="rounded-2x1 bg-white shadow-md p-6 hover:shadow-x1 transition duration-300">
            {children}
        </div>
    );
}