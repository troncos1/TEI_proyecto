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
        <img src="/Logo-UAI-1-scaled.svg" alt="UAI Logo" width={150} height={150} />
      </div>
      <div
        className="p-8 rounded-lg shadow-lg max-w-md w-full text-center"
        style={{
          background: "rgba(0, 0, 0, 0.7)", 
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.25)", 
        }}
      >
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
              Student
            </p>
          </Link>
          <Link href="/password/login2">
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
              Professor
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
