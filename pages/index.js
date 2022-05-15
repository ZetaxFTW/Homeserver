import Head from 'next/head'
import { BsSpotify } from 'react-icons/bs'
import { SiNginx } from 'react-icons/si'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { HiOutlineStatusOffline } from "react-icons/hi";
import {useEffect, useState} from "react";
const isReachable = require('is-reachable');

export default function Home() {

    const [spotifyonline, setSpotifyonline] = useState(false)
    const [nginxonline, setNginxonline] = useState(false)
    const [statusonline, setStatusonline] = useState(false)
    useEffect(() => {
        (async () => {
            setSpotifyonline(await isReachable('spotify.zetax.dev'));
            setNginxonline(await isReachable('http://132.145.242.159:3000'));
            setStatusonline(await isReachable('http://132.145.242.159:3001'));
            setStatusonline(await isReachable('http://132.145.242.159:9443'));
        })();
    }, [])

    return (
      <div className="bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png')] dark:bg-gray-800 lg:h-screen h-fit -mb-16 lg:-mb-0 bg-no-repeat dark:text-white">
        <Head>
          <title>All services</title>
        </Head>
          <h1 className="text-center font-bold text-3xl pt-32">All services</h1>
          <p className="text-center font-semibold my-4">All services hosted and used by me</p>
          <h3 className="text-6xl text-center">🕶️</h3>
      <div className="flex flex-row flex-wrap justify-center mt-32 h-100vh my-8 flex-col lg:flex-row items-center w-fit mx-auto">
          <a href="https://spotify.zetax.dev">
          <div className="w-fit border-2 h-fit px-6 py-4 rounded-lg bg-gray-200 border-2 border-gray-300 mx-4 hover:bg-gray-300 w-72 my-4 dark:text-white dark:bg-gray-700 dark:border-indigo-400 dark:hover:bg-gray-800">
              <BsSpotify className="text-3xl text-green-400 mx-auto my-2" />
              <h2 className="text-center font-semibold text-lg">Spotify Stats</h2>
              <p className="text-center text-gray-300 my-4">
                  {spotifyonline ? <HiOutlineStatusOnline className="text-green-400 mx-auto my-2" /> : <HiOutlineStatusOffline className="text-red-400 mx-auto my-2" />}
                  {spotifyonline ? 'Online' : 'Offline'}
              </p>
              <p className="text-center">Tracking my Spotify statistics</p>
          </div>
          </a>
          <a href="http://132.145.242.159:81">
          <div className="w-fit border-2 h-fit px-6 py-4 rounded-lg bg-gray-200 border-2 border-gray-300 mx-4 hover:bg-gray-300 w-72 my-4 dark:text-white dark:bg-gray-700 dark:border-indigo-400 dark:hover:bg-gray-800">
              <SiNginx className="text-3xl text-orange-400 mx-auto my-2" />
              <h2 className="text-center font-semibold text-lg">Nginx Proxy Manager</h2>
              <p className="text-center text-gray-300 my-4">
                  {nginxonline ? <HiOutlineStatusOnline className="text-green-400 mx-auto my-2" /> : <HiOutlineStatusOffline className="text-red-400 mx-auto my-2" />}
                  {nginxonline ? 'Online' : 'Offline'}
              </p>
              <p className="text-center">Dashboard for NGINX</p>
          </div>
          </a>
          <a href="http://132.145.242.159:3001">
              <div className="w-fit border-2 h-fit px-6 py-4 rounded-lg bg-gray-200 border-2 border-gray-300 mx-4 hover:bg-gray-300 w-72 my-4 dark:text-white dark:bg-gray-700 dark:border-indigo-400 dark:hover:bg-gray-800">
                  <HiOutlineStatusOnline className="text-3xl text-indigo-400 mx-auto my-2" />
                  <h2 className="text-center font-semibold text-lg">Status page</h2>
                  <p className="text-center text-gray-300 my-4">
                      {statusonline ? <HiOutlineStatusOnline className="text-green-400 mx-auto my-2" /> : <HiOutlineStatusOffline className="text-red-400 mx-auto my-2" />}
                      {statusonline ? 'Online' : 'Offline'}
                  </p>
                  <p className="text-center">Status page for my websites</p>
              </div>
          </a>
          <a href="http://132.145.242.159:9443">
              <div className="w-fit border-2 h-fit px-6 py-4 rounded-lg bg-gray-200 border-2 border-gray-300 mx-4 hover:bg-gray-300 w-72 my-4 dark:text-white dark:bg-gray-700 dark:border-indigo-400 dark:hover:bg-gray-800">
                  <HiOutlineStatusOnline className="text-3xl text-indigo-400 mx-auto my-2" />
                  <h2 className="text-center font-semibold text-lg">Portainer Web</h2>
                  <p className="text-center text-gray-300 my-4">
                      {statusonline ? <HiOutlineStatusOnline className="text-green-400 mx-auto my-2" /> : <HiOutlineStatusOffline className="text-red-400 mx-auto my-2" />}
                      {statusonline ? 'Online' : 'Offline'}
                  </p>
                  <p className="text-center">Panel to manage all docker containers</p>
              </div>
          </a>
      </div>
    </div>
  )
}
