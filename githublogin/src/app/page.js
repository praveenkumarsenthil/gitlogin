"use client"

import "./style.css"


import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="home-container">
     <h1>Login to get started</h1>
     <button onClick={()=>signIn("github")} className="gitbut">GitHubLogin</button>
    </div>
  )
}
