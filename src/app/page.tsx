"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    room: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input onChange={handleChange} placeholder="Enter Your Name" />
        <Input onChange={handleChange} placeholder="Enter Room Number" />
        <Button type="submit">Join Room</Button>
      </form>
    </main >
  );
}
