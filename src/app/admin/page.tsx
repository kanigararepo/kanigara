"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setData((prevData) => ({
      ...prevData, // Spread previous state first
      [e.target.name]: e.target.value, // Update the changed field
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response: Response = await fetch(`/api/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message);
      } else {
        router.push("/admin/dashboard");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:basis-1/3 mx-5 md:mx-0 w-full px-10 py-10 bg-white shadow-md rounded-md">
      <h1 className="text-center font-semibold text-xl mb-5">Login Admin</h1>
      <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
        {error && <div className="text-center px-2 py-2 outline outline-1 outline-red-500 rounded bg-red-100">{error}</div>}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input type="text" name="username" placeholder="Ketik username disini..." className="input input-bordered w-full" value={data.username} onChange={onChangeValue} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Kata Sandi</span>
          </div>
          <input type="password" name="password" placeholder="Ketik sandi disini..." className="input input-bordered w-full" value={data.password} onChange={onChangeValue} />
        </label>
        <button className="px-4 py-2 outline outline-1 outline-lime-400 hover:outline-none hover:bg-lime-600 hover:text-white rounded mt-5" disabled={isLoading}>
          {isLoading ? "Menunggu.." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
