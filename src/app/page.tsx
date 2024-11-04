import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        background: "url('/image.JPEG') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 m-4 md:left-0 md:top-0 md:m-4 flex justify-center md:justify-start w-full">
        <h1 className="text-2xl font-bold mb-6 text-white">Welcome to UAI</h1>
        <div className="flex flex-col space-y-4">
          <Link href="/password/login">
            <p
              className="font-bold py-2 px-4 rounded hover:bg-white"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: "white",
              }}
            >
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
