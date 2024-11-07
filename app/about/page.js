import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <main>
      <section className="min-h-[100vh] grid grid-cols-2">
        <div className="page py-6 flex-col ml-[10vw] gap-4">
          <p className="text-white font-extrabold text-4xl">About Us</p>
          <p className="text-white text-xl py-4">Welcome to CS Game Servers Hub, your dedicated platform for discovering and connecting to the best Counter-Strike servers worldwide. Our mission is to create a seamless experience for players looking to engage in competitive matches, casual games, or community events on high-quality servers.</p>

          <p className="text-white text-xl py-4">We started CS Game Servers Hub with a vision: to build a unified platform where players of all levels can easily find and join active servers. We focus on delivering accurate, real-time information about each server, including player counts, map details, server locations, and more. Whether you’re looking for a specific gameplay style or want to join a server with friends, we’re here to help you find the perfect match.</p>

          <p className="text-white text-xl py-4">Our team is composed of passionate gamers and developers who believe in the power of community-driven gaming. We continually work to improve the platform, adding new features, and keeping the server list updated to ensure that our users have the best experience possible. At CS Game Servers Hub, we are committed to supporting the gaming community by connecting players from all over the world.</p>

        </div>
        <div className="flex items-center justify-center">
          <Image width={800} height={800} src="/map.png" alt="map" />
        </div>

      </section>
    </main>
  )
}

export default about
